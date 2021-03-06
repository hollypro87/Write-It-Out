//event listeners, click handlers
// Save Journal Entry

// Submits a new post
function submitPost(post) {
  $.post("/api/posts", post, function () {
    window.location.href = "/entryForm";
  });
}

$(document).ready(function () {
  //   const moment = require("moment");
  //   const today = moment().format("MMMM Do YYYY, h:mm:ss a");

  //   const clock = document.querySelector("#clock");

  //   function displayTime() {
  //     var time = moment().format("MMMM Do YYYY, h:mm:ss a");
  //     $("#clock").text(time);
  //     console.log(time);
  //     setTimeout(displayTime, 1000);

  //   displayTime();

  $(document).on("click", "#saveMemory", function () {
    var id = $(this).data().id;
    console.log("Hello");
    var comment = $("#journalEntryBody").val().trim();
    var title = $("#journalEntryTitle").val().trim();
    var category = "test";
    $.post("/api/posts/", { title: title, body: comment, category: category });
    window.location.href = "/reader";
  });

  // Delete Memory
  $(document).on("click", ".deleteMemory", function () {
    var id = $(this).data().id;
    console.log(id);
    $(this).parent().parent().remove();
    $.ajax({
      type: "DELETE",
      url: "/api/posts/" + id,

    })
      .then(function (data) { });
  });

  // Search Bar
  $(document).on("click", "#searchButton", function () {
    var searchVar = $("#searchBar").val().trim();
    $.post("/startSearch", { search: searchVar });
    $("#searchBar").val("");
  });

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
