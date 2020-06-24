//event listeners, click handlers
// Save Journal Entry

// Submits a new post
function submitPost(post) {
  $.post("/api/posts", post, function () {
    window.location.href = "/entry-form";
  });
}

// Search Bar
$(document).on("click", "#searchButton", function () {
  var searchVar = $("#searchBar").val().trim();
  $.post("/startSearch", { search: searchVar });
  $("#searchBar").val("");
});

$(document).ready(function () {
  $(document).on("click", "#saveMemory", function () {
    var id = $(this).data().id;
    console.log("Hello");
    var comment = $("#journalEntryBody").val().trim();
    var title = $("#journalEntryTitle").val().trim();
    var category = "test";
    $.post("/api/posts/", { title: title, body: comment, category: category });
  });
  //Search
  $("#searchBar").keypress(function (key) {
    if (key.keyCode == 13) {
      event.preventDefault();
      var searchVar = $("#searchBar").val().trim();
      $.post("/startSearch", { search: searchVar });
      s;
      $("#searchBar").val("");
      window.location.replace("/search");
    }
  });
});
