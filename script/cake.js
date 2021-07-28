$(function () {
    console.log('in')
    var flame = $("#flame");
    var txt = $("h1");
  
    flame.on({ 
      click: function () {
        console.log('in')   
        flame.removeClass("burn").addClass("puff");
        $(".smoke").each(function () {
          $(this).addClass("puff-bubble");
        });
        $("#glow").remove();
        txt.hide().html("It <b>will</b> come true..").delay(750).fadeIn(300);
        $("#candle").animate(
          {
            opacity: ".5"
          },
          100
        );
      }
    });
  });
  