
(function() {
  $("#switch1").mouseover(function() {
    return $("#menu1").show();
  });
  $("#switch1").mouseout(function() {
    return $("#menu1").hide();
  });
  $("#switch2").mouseover(function() {
    return $("#menu2").show();
  });
  $("#switch2").mouseout(function() {
    return $("#menu2").hide();
  });
  $("#switch3").mouseover(function() {
    return $("#menu3").show();
  });
  $("#switch3").mouseout(function() {
    return $("#menu3").hide();
  });
}).call(this);

$(document).ready(function() {
  var id;
  $("#remove_photo, #remove_photo1").click(function(e) {
    var result;
    result = window.confirm("Are you sure you want to remove this picture ?");
    if (!result) {
      e.preventDefault();
      e.event.stopPropagation();
      return false;
    }
    e.event.stopPropagation();
  });
  $("#pin-not-added").click(function() {
    $(".pin-not-added").each(function() {
      $(this).show();
    });
  });
  $("#pin-added").click(function() {
    $(".pin-not-added").each(function() {
      $(this).hide();
    });
  });
  id = $(".carousel2").find(".active").attr("photoid");
  $("#remove_photo").attr("href", "/photo/" + id + "/remove");
  $(".album_item").click(function() {
    id = $(this).attr("data-photoid");
    $("#remove_photo").attr("href", "/photo/" + id + "/remove");
  });
  $(".carousel1").carousel({
    interval: false
  });
  $(".carousel2").carousel({
    interval: false
  }).on("slid.bs.carousel", function(e) {
    var xx;
    xx = $(this);
    id = xx.find(".active").attr("photoid");
    $("#remove_photo").attr("href", "/photo/" + id + "/remove");
  });
});
