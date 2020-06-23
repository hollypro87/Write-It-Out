//event listeners, click handlers
// Save Journal Entry
$(document).on("click", "#submitButton", function () {
  var id = $(this).data().id;
  var comment = $("#journalEntryBody").val().trim();
  $.post("/api/post/" + id, { body: comment });
});

// Submits a new post and brings user to blog page upon completion
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
  $("#searchBar").keypress(function (key) {
    if (key.keyCode == 13) {
      event.preventDefault();
      var searchVar = $("#searchBar").val().trim();
      $.post("/startSearch", { search: searchVar });
      $("#searchBar").val("");
      window.location.replace("/search");
    }
  });
});
