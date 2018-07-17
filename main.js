/*functions to execute on page load*/
$(document).ready(function(){
  $('body').scrollTop(0);
   setTimeout(function () {
   wordSequence();
 }, 2000);

 setTimeout(function () {
 $('.blockyboy').css('display','none');
}, 7500);

  $('.introfadein').css("opacity", "1");
  $('.introfadein').css("transition-delay", "6s");
  $('.introfadein').css("transition-duration", "1s");

  $('.dropdowncontent').css({
    'width': ($('.dropbtn').width())
  })

  $('.dropdowncontent2').css({
    'width': ($('.dropbtn2').width())
  })
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
$('div.size3').click(function() {
  $('.size3, .size2, .size1').css('opacity', '0');
  $(this).css('opacity', '1');
  $('.size3, .size2, .size1').css('visibility', 'hidden');
  $(this).css('visibility', 'visible');
  $('.size3, .size2, .size1').css('transition-duration', '1s')
  $(this).css('top', '-15vh');
  $(this).css('left', '0vh');
  $(this).css('transform', 'translate(-50%,-50%)');
  $(this).css('transition-duration', '1.5s');
});

$('div.size2').click(function() {
  $('.size3, .size2, .size1').css('opacity', '0');
  $(this).css('opacity', '1');
  $('.size3, .size2, .size1').css('visibility', 'hidden');
  $(this).css('visibility', 'visible');
  $('.size3, .size2, .size1').css('transition-duration', '1s')
  $(this).css('top', '-15vh');
  $(this).css('left', '0vh');
  $(this).css('transform', 'translate(-50%,-50%)');
  $(this).css('transition-duration', '1.5s');
});

$('div.size1').click(function() {
  $('.size3, .size2, .size1').css('opacity', '0');
  $(this).css('opacity', '1');
  $('.size3, .size2, .size1').css('visibility', 'hidden');
  $(this).css('visibility', 'visible');
  $('.size3, .size2, .size1').css('transition-duration', '1s')
  $(this).css('top', '-15vh');
  $(this).css('left', '0vh');
  $(this).css('transform', 'translate(-50%,-50%)');
  $(this).css('transition-duration', '1.5s');
});

$('div.size1, div.size2, div.size3').click(function() {
  $('.c1titlewrapper').css('opacity','0');
  $('.c1titlewrapper').css('transition-duration', '1s');
  $('.c1titlewrapper').css('visibility','visible');
  $('.intrologo').css('display','block');
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
