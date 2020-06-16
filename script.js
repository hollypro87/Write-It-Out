const moment = require("moment");
const today = moment().format("MMMM Do YYYY, h:mm:ss a");

$(document).ready(function () {
  $(".dropdown").on("click", function (event) {
    event.stopPropagation();
    $(this).toggleClass("is-active");
  });
});
