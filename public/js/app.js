//event listeners, click handlers

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
