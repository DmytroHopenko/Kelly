$(document).ready(function () {
  $("#toggle-menu").click(function () {
    $("nav").addClass("active-menu");
  });
  $(".cross").click(function () {
    $("nav").removeClass("active-menu");
  });
});
