/*functions to execute on page load*/
var chunk = $('.container1').height();
var chunknum = 0;

$(document).ready(function(){

  $(this).scrollTop(0);

  $("*", document.body).click(function(e) {
      e.stopPropagation();
      var thisElem = $(this).attr('class').split(' ')[0];
      console.log("Clicked on - " + thisElem);
    });

  setTimeout(function () {
    wordSequence();
  }, 2000);

  setTimeout(function () {
   $('.blockyboy').css('display','none');
   $('#navbar').css('opacity', '1');
   $('#navbar').css('transition-duration', '1s');
   $('.questionmark').css('opacity', '1');
   $('.questionmark').css('transition-duration', '1s');
   $('div.size1, div.size2').css('opacity', '.2');
   $('div.size3').css('opacity', '.8');
   $('div.size1, div.size2, div.size3').css('transition-duration', '1s');
  }, 8000);

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

  chunknum = 0;

  var left = position[1];
  var top = position[0];
  var elem = position[2];
  elem.css('left', left);
  elem.css('top', top);
  elem.css('transform','none');

  $('.circlemain').css('animation','lineanim 2s');
  $('.circlemain').css('animation-fill-mode','forwards');
  $('.circlemain').css('animation-timing-function','ease-in-out;');

  $('.backarrow').css('opacity','0');

  $('html, body').animate({scrollTop: $("#top").offset().top}, 500);

  $('.container2contents, .container3contents, .container4contents, .container5contents, .scrollline, .scrolltitle').css('opacity', '0');
  $('.container2contents, .container3contents, .container4contents, .container5contents, .scrollline, .scrolltitle').css('transition-duration', '1s');

  $('.scrolltitle').css('pointer-events', 'none');

  setTimeout(function () {
    $('.container4').css('top', '0vh');
    $('.container2, .container3, .container4, .container5').css('z-index', '0');
    $('.container6').css('display', 'none');
    $('.tsw').css('pointer-events', 'auto');
    $('.tsw').css('opacity', '1');
    $('.tsw').css('transition-duration', '1.5s');
    $('.c1titlewrapper').css('opacity', '1');
    $('.c1titlewrapper').css('transition-duration', '1s')
  }, 1500);

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
  $('.ts-finance').mouseenter(function() {
    $('div.size3').css('opacity', '.1');
    $(this).css('opacity', '1');
    $('.ts-bitcoin, .ts-drive').css('opacity', '1');
    $('.ts-finance, .ts-bitcoin, .ts-drive').css('transition-duration', '.5s');
  });

  $('.ts-photography').mouseenter(function() {
    $('div.size3').css('opacity', '.1');
    $(this).css('opacity', '1');
    $('.ts-series, .ts-creativity').css('opacity', '1');
    $('.ts-photography, .ts-series, .ts-creativity').css('transition-duration', '.5s');
  });

  $('.ts-design').mouseenter(function() {
    $('div.size3').css('opacity', '.1');
    $(this).css('opacity', '1');
    $('.ts-graphic, .ts-flotato, .ts-creativity').css('opacity', '1');
    $('.ts-design, .ts-graphic, .ts-flotato, .ts-creativity').css('transition-duration', '.5s');
  });

  $('.ts-entrepreneurship').mouseenter(function() {
    $('div.size3').css('opacity', '.1');
    $(this).css('opacity', '1');
    $('.ts-foodstand, .ts-flotato, .ts-initiative, .ts-zest, .ts-leadership').css('opacity', '1');
    $('.ts-entrepreneurship, .ts-foodstand, .ts-flotato, .ts-initiative, .ts-zest').css('transition-duration', '.5s');
  });

  $('.ts-music').mouseenter(function() {
    $('div.size3').css('opacity', '.1');
    $(this).css('opacity', '1');
    $('.ts-drive, .ts-production, .ts-piano').css('opacity', '1');
    $('.ts-drive, .ts-production, .ts-piano, .ts-music').css('transition-duration', '.5s');
  });

  $('.tsw').mouseleave(function() {
    var thisElem = $(this).attr('class').split(' ')[0];
    if ($(this).css('pointer-events') == 'none') {
      $(this).not('.' + $(this).attr('class').split(' ')[0]).css('opacity', 0);
      setTimeout(function(){
        $('.' + thisElem).css('opacity','0');
        $('.' + thisElem).css('transition-duration','1s');
      }, 3500);
    } else {
      $('div.size2, div.size1').css('opacity', '.2');
      $('div.size3').css('opacity', '.8');
      $('div.size3, div.size2, div.size1').css('transition-duration', '.5s');
    }
  });


/*transition on click*/
var position = [];
$('.tsw').click(function() {

  $('.tsw').css('pointer-events', 'none');

  position = [$(this).css('top'), $(this).css('left'), $(this)];
  var thisElem = $(this).attr('class').split(' ')[0];

  $('.tsw').not('.' + thisElem).css('opacity', '0');
  $('.tsw').css('transition-duration', '1.5s');
  $('.c1titlewrapper').css('opacity', '0');
  $('.c1titlewrapper').css('transition-duration', '1.5s');

  $(this).css('top', '0vh');
  $(this).css('left', '0vh');
  $(this).css('transform', 'translate(-50%,-50%)');
  $(this).css('transition-duration', '1.5s');
  $(this).css('transition-delay', '0s');

  setTimeout(function(){
    $('.circle').css('display','block');
  }, 500);

  setTimeout(function(){
    $('.circlemain').css('animation','lineanimreverse 2s');
    $('.circlemain').css('animation-fill-mode','forwards');
    $('.circlemain').css('animation-timing-function','ease-in-out;');
    $('.' + thisElem).css('opacity', '0');
    $('.' + thisElem).css('transition-duration', '1.5s');
  }, 3000);

  setTimeout(function(){
    $('.circle').css('display','none');
  }, 6000);

  setTimeout(function(){
    $('.backarrow').css('opacity','1');
    $('.backarrow').css('transition-duration','1s');
  }, 5000);

  if (thisElem == 'finance') {
    setTimeout(function(){
      $('.container2').css('z-index', '2');
      $('.container2contents').css('opacity', '1');
      $('.container2contents').css('transition-duration', '1.5s');
    }, 4500);
  }

  if (thisElem == 'photography') {
    setTimeout(function(){
      $('.container3').css('z-index', '2');
      $('.container3contents').css('opacity', '1');
      $('.container3contents').css('transition-duration', '1.5s');
    }, 4500);
  }

  if (thisElem == 'design') {
    setTimeout(function(){
      $('.container4').css('z-index', '2');
      $('.container4contents').css('opacity', '1');
      $('.container4contents').css('transition-duration', '1.5s');
    }, 4500);
  }

  if (thisElem == 'entrepreneurship') {
    setTimeout(function(){
      $('.container5').css('z-index', '2');
      $('.container5contents').css('opacity', '1');
      $('.container5contents').css('transition-duration', '1.5s');
      $('.container6').css('display', 'block');
      $('.container4').css('z-index', '2');
      $('.container4contents').css('opacity', '1');
      $('.container4').css('top', '200vh');
      $('.scrolltitle').css('pointer-events', 'auto');
      $('.scrolltitle').addClass('threesections');
      $('.scrollline, .scrolltitle').css('opacity', '1');
      $('.scrollline, .scrolltitle').css('transition-duration', '1.5s');
    }, 4500);
  }

  if (thisElem == 'cuisine') {
    setTimeout(function(){
      $('.container5').css('z-index', '2');
      $('.container5contents').css('opacity', '1');
      $('.container5contents').css('transition-duration', '1.5s');
      $('.container6').css('display', 'block');
      $('.container4').css('z-index', '2');
      $('.container4contents').css('opacity', '1');
      $('.container4').css('top', '200vh');
      $('.scrolltitle').css('pointer-events', 'auto');
      $('.scrolltitle').addClass('threesections');
      $('.scrollline, .scrolltitle').css('opacity', '1');
      $('.scrollline, .scrolltitle').css('transition-duration', '1.5s');
    }, 4500);
  }

});

/*enlarge images button*/
$('.enlargeimage').click(function() {
  $('.projectcover').css('display','block');
  $('.close').css('display','block');
  $('.projectimage').css('height','90vh');
  $('.projectimage').css('width','125vh');
  $('.projectimage').css('top','7.5vh');
  $('.projectimage').css('left','50vw');
  $('.projectimage').css('transform','translate(-50%, 0%)');
});

/*enlarge slides button*/
$('.enlargeslides').click(function() {
  $('.projectcover').css('display','block');
  $('.close').css('display','block');
  if($(this).hasClass('flotatoimages')) {
    $('.slideshow-container').css('max-width','140vh');
    $('.slideshow-container').css('width','140vh');
    $('.slideshow-container').css('top','7.5vh');
    $('.slideshow-container').css('left','50vw');
    $('.slideshow-container').css('transform','translate(-50%, 0%)');
  }
});

/*close image/slides button*/
$('.close, .projectcover').click(function() {
  $('.projectcover').css('display','none');
  $('.close').css('display','none');

  $('.projectimage').css('height','40vh');
  $('.projectimage').css('width','56vh');
  $('.projectimage').css('top','48vh');
  $('.projectimage').css('left','90vh');
  $('.projectimage').css('transform','translate(0%, 0%)');

  $('.slideshow-container').css('max-width','36vw');
  $('.slideshow-container').css('top','30vh');
  $('.slideshow-container').css('left','130vh');
  $('.slideshow-container').css('transform','translate(0%, 0%)');
});

/*continue*/

$(document).scroll(function() {
  if ($('html, body').scrollTop() >= (1.25*chunk)) {
    $('.scrolltitle').css('opacity', '0');
    $('.scrollline').css('opacity', '0');
    $('.scrolltitle').css('pointer-events', 'none');
  }
});

$('.scrolltitle').click(function() {
  chunknum++;
  $('html, body').animate({scrollTop: (chunknum * chunk) }, 1000);
  if ($(this).hasClass('threesections') && (chunknum == 2)) {
    $(this).css('opacity', '0');
    $('.scrollline').css('opacity', '0');
    $('.scrolltitle').css('pointer-events', 'none');
  }

});

/*contact*/
$('.contactbutton').click(function() {
  if ($(this).hasClass('showContact')) {
    $('.contact').css('display', 'block');
    $(this).removeClass('showContact');
    $(this).addClass('hideContact');
      setTimeout(function(){
        $('.contact').css('left', '85vw');
      }, 100);
  }
  else if ($(this).hasClass('hideContact')) {
    $('.contact').css('left', '100vw');
    $(this).removeClass('hideContact');
    $(this).addClass('showContact');
      setTimeout(function(){
        $('.contact').css('display', 'none');
      }, 500);
  }
});

/*slideshow*/
var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}
