$(document).ready(function() {
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    h = convertHours(h);
    m = checkTime(m);
    s = checkTime(s);

    $(".clock").html(h + ":" + m + ":" + s);

    setTimeout(startTime, 500);
  }

 function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

function convertHours(i) {
    if (i > 12) {
        i = i - 12;
    }
    return i;
  }

  startTime();
});

$(document).ready(function () {
  $(".steps .image-wrapper").slideDown(2000, function() {
  });
});
