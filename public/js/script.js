const today = moment().format("MMMM Do YYYY, h:mm a");
const clock = document.querySelector("#clock");
function displayTime() {
    var time = moment().format("MMMM Do YYYY, h:mm a");
    $("#clock").text(time);
    console.log(time);
    setTimeout(displayTime, 1000);
}
$(document).ready(function () {
    displayTime();
});