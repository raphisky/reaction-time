(function($) {
    $.fn.blink = function(options) {
        var defaults = { delay: 500 };
        var options = $.extend(defaults, options);
        return $(this).each(function(idx, itm) {
            var handle = setInterval(function() {
                if ($(itm).css("visibility") === "visible") {
                    $(itm).css('visibility', 'hidden');
                } else {
                    $(itm).css('visibility', 'visible');
                }
            }, options.delay);

            $(itm).data('handle', handle);
        });
    }
    $.fn.unblink = function() {
        return $(this).each(function(idx, itm) {
            var handle = $(itm).data('handle');
            if (handle) {
                clearInterval(handle);
                $(itm).data('handle', null);
                $(itm).css('visibility', 'inherit');
            }
        });
    }
}(jQuery))

//////////




var dot1 = "#dot1";

function makeThemMotherFuckersBlink(round) {
  if (round == 1) {
    setInterval(nowBlinkMotherFucker('#dot1'),500);


  }
  else if (round == 2) {
    $('#dot1').addClass("lit");
    setInterval(nowBlinkMotherFucker('#dot2'),500);


  }
  else if (round == 3) {
    $('#dot1').addClass("lit");
    $('#dot2').addClass("lit");
    setInterval(nowBlinkMotherFucker('#dot2'),500);

  }

  else if (round == 0) {
    setInterval(nowPleaseWillYouBlink('#dot1'),500);
    // $('#dot3').blink({delay: 400});
  }
}

function nowBlinkMotherFucker(whichDot) {
    $(whichDot).addClass(".lit");
    setTimeout(nowUnBlinkMotherFucker(whichDot), 300);
}

function nowUnBlinkMotherFucker(w) {
  $(w).removeClass(".lit");
}

// nowPleaseWillYouBlink('#dot1');

function nowPleaseWillYouBlink(element) {
  var isLit = element.hasClass( "lit" );
  if ( isLit ) {
    element.removeClass('.lit')
  }
  else {
    element.addClass('.lit');
  }
}
