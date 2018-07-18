/*functions to execute on page load*/
$(document).ready(function(){
  $('body').scrollTop(0);
   setTimeout(function () {
   wordSequence();
 }, 2000);

 setTimeout(function () {
 $('.blockyboy').css('display','none');
}, 8000);

  $('.introfadein').css("opacity", "1");
  $('.introfadein').css("transition-delay", "8s");
  $('.introfadein').css("transition-duration", "1s");

  $('.dropdowncontent').css({
    'width': ($('.dropbtn').width())
  })

  $('.dropdowncontent2').css({
    'width': ($('.dropbtn2').width())
  })
});

/*reset*/

$('#alexyan, .backarrow').click(function() {
  reset(position);
})

function reset(position) {
  $('.size3, .size2, .size1').css('opacity', '1');
  $('.size3, .size2, .size1').css('visibility', 'visible');
  $('.size3, .size2, .size1').css('transition-duration', '1s')
  $('.c1titlewrapper').css('opacity', '1');
  $('.c1titlewrapper').css('visibility', 'visible');
  $('.c1titlewrapper').css('transition-duration', '1s')
  $('.c1titlewrapper, .size3, .size2, .size1').css('display','none');
  $('.c1titlewrapper, .size3, .size2, .size1').css('display','block');

  var left = position[1];
  var top = position[0];
  var elem = position[2];

  elem.css('left', left);
  elem.css('top', top);
  elem.css('transform','none');

  $('.circle').css('display','none');
  $('.circlemain').css('animation','lineanim 2s');
  $('.circlemain').css('animation-fill-mode','forwards');
  $('.circlemain').css('animation-timing-function','ease-in-out;');

  $('.container1').css('background-color', 'var(--lightbeige)')
  $('.container1').css('transition-duration', '1s')

  $('.size3, .size2, .size1').css('pointer-events', 'auto');

  $('.backarrow').css('opacity','0');

  $('.container2').css('top','100vh');
  $('.container2').css('transition-duration', '1s')
  $('.container2contents').css('opacity','0');

}
/*question mark*/
$('.questionmark').mouseenter(function() {
  $('.info').css('opacity', '1');
  $('.info').css('transition-duration', '.3s');
});
$('.questionmark').mouseleave(function() {
  $('.info').css('opacity', '0');
  $('.info').css('transition-duration', '.3s');
});

/*intro sequence*/
var i = 0;
function wordSequence() {
  $('.' + i).css('opacity', '1');
  $('.' + i).css('transition-duration', '5s');
  $('.' + (i - 1)).css('transition-duration', '0.3s');
  i++;
  console.log(i);
  if (i < 21) {
    setTimeout(wordSequence,200)
  } else {
    return;
  }
}

/*intro sequence hover*/
$('div.size3').mouseenter(function() {
  $('.size3, .size2, .size1').css("opacity", ".3");
  $(this).css('opacity', '1');
  $('.size3, .size2, .size1').css("transition-duration", ".5s");
});

$('div.size3').mouseleave(function() {
  $('.size3, .size2, .size1').css("opacity", "1");
  $('.size3, .size2, .size1').css("transition-duration", ".5s");
});

$('div.size2').mouseenter(function() {
  $('.size3, .size2, .size1').css("opacity", ".3");
  $(this).css('opacity', '1');
  $('.size3, .size2, .size1').css("transition-duration", ".5s");
});

$('div.size2').mouseleave(function() {
  $('.size3, .size2, .size1').css("opacity", "1");
  $('.size3, .size2, .size1').css("transition-duration", ".5s");
});

$('div.size1').mouseenter(function() {
  $('.size3, .size2, .size1').css("opacity", ".3");
  $(this).css('opacity', '1');
  $('.size3, .size2, .size1').css("transition-duration", ".5s");
});

$('div.size1').mouseleave(function() {
  $('.size3, .size2, .size1').css("opacity", "1");
  $('.size3, .size2, .size1').css("transition-duration", ".5s");
});

/*transition on click*/
var position = [];
$('div.size3').click(function() {

  position = [$(this).css('top'), $(this).css('left'), $(this)];

  $('.size3, .size2, .size1').css('opacity', '0');
  $(this).css('opacity', '1');
  $('.size3, .size2, .size1').css('visibility', 'hidden');
  $(this).css('visibility', 'visible');
  $('.size3, .size2, .size1').css('transition-duration', '1s')
  $(this).css('top', '0vh');
  $(this).css('left', '0vh');
  $(this).css('transform', 'translate(-50%,-50%)');
  $(this).css('transition-duration', '1.5s');

  $(this).css('pointer-events', 'none');

});

$('div.size2').click(function() {

    position = [$(this).css('top'), $(this).css('left'), $(this)];

    $('.size3, .size2, .size1').css('opacity', '0');
    $(this).css('opacity', '1');
    $('.size3, .size2, .size1').css('visibility', 'hidden');
    $(this).css('visibility', 'visible');
    $('.size3, .size2, .size1').css('transition-duration', '1s')
    $(this).css('top', '0vh');
    $(this).css('left', '0vh');
    $(this).css('transform', 'translate(-50%,-50%)');
    $(this).css('transition-duration', '1.5s');

    $(this).css('pointer-events', 'none');

});

$('div.size1').click(function() {

      position = [$(this).css('top'), $(this).css('left'), $(this)];

      $('.size3, .size2, .size1').css('opacity', '0');
      $(this).css('opacity', '1');
      $('.size3, .size2, .size1').css('visibility', 'hidden');
      $(this).css('visibility', 'visible');
      $('.size3, .size2, .size1').css('transition-duration', '1s')
      $(this).css('top', '0vh');
      $(this).css('left', '0vh');
      $(this).css('transform', 'translate(-50%,-50%)');
      $(this).css('transition-duration', '1.5s');

      $(this).css('pointer-events', 'none');

});

$('div.size1, div.size2, div.size3').click(function() {
  $('.c1titlewrapper').css('opacity','0');
  $('.c1titlewrapper').css('transition-duration', '1s');
  $('.c1titlewrapper').css('visibility','visible');

    setTimeout(function(){
      $('.circle').css('display','block');
    }, 500);

    setTimeout(function(){
      $('.circlemain').css('animation','lineanimreverse 2s');
      $('.circlemain').css('animation-fill-mode','forwards');
      $('.circlemain').css('animation-timing-function','ease-in-out;');
    }, 3000);

    setTimeout(function(){
      $(elem).css('opacity','0');
      $(elem).css('transition-duration','1s');
    }, 3500);


    setTimeout(function(){
      $('.backarrow').css('opacity','1');
      $('.backarrow').css('transition-duration','1s');
    }, 5000);

    var elem = position[2];

    if (elem.hasClass('finance')) {
      setTimeout(function(){
        $('.container2').css('top','0vh');
        $('.container2').css('transition-duration','1.5s');
        $('.container2contents').css('opacity','1');
        $('.container2contents').css('transition-duration','1s');
        $('.container2contents').css('transition-delay','2s');
      }, 3000);
    }

});

/*smooth scroll*/
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

/*contact*/

$('.contactbutton').click(function() {
  if ($(this).hasClass('showContact')) {
    console.log('bi')
    $('.contact').css('left', '85vw');
    $(this).removeClass('showContact');
    $(this).addClass('hideContact');
  }
  else if ($(this).hasClass('hideContact')) {
    $('.contact').css('left', '100vw');
    $(this).removeClass('hideContact');
    $(this).addClass('showContact');
  }
});


/*navbar scroll*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
