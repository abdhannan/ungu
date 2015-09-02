$(window).load( function() {

    $('#container').masonry({
        "itemSelector": ".item",
        "columnWidth": ".grid-sizer",
    });

});

// bxslider
$(document).ready(function(){
  $('.slider2').bxSlider({
    slideWidth: 500,
    minSlides: 2,
    maxSlides: 2,
    pagerShortSeparator:' s/d ',
    pagerType:'short',
    slideMargin: 0
  });
});

// myslider
$('.bxslider').bxSlider({
	nextSelector: '#next',
	prevSelector: '#prev',
	nextText: '<span id="prev" class="glyphicon glyphicon-chevron-right glyphicon-lg"></span>',
  prevText: '<span id="prev" class="glyphicon glyphicon-chevron-left glyphicon-lg"></span>',
  minSlides: 3,
  maxSlides: 5,
  slideWidth: 200,
  slideMargin: 10
});

// untuk why us
$('.whyus-slide').bxSlider({
	nextSelector: '#next',
	prevSelector: '#prev',
	nextText: '',
  prevText: '',
  minSlides: 2,
  maxSlides: 2,
  slideWidth: 200,
  slideMargin: 10
});

// untuk porto single

$('.bxslider-porto').bxSlider({
	nextSelector: '#next',
	prevSelector: '#prev',
	nextText: '<span id="prev" class="glyphicon glyphicon-chevron-right glyphicon-lg"></span>',
  prevText: '<span id="prev" class="glyphicon glyphicon-chevron-left glyphicon-lg"></span>',
  minSlides: 3,
  maxSlides: 3,
  controls:false,
  pager:false,
  slideWidth: 200,
  slideMargin: 10
});

$('.bxslider-porto-1').bxSlider({
	nextSelector: '#next',
	prevSelector: '#prev',
	nextText: '<span id="prev" class="glyphicon glyphicon-chevron-right glyphicon-lg"></span>',
  prevText: '<span id="prev" class="glyphicon glyphicon-chevron-left glyphicon-lg"></span>',
  minSlides: 3,
  maxSlides: 3,
  controls:false,
  pager:false,
  slideWidth: 200,
  slideMargin: 10
});
// swipebox
$(function(){
      $(document.body)
          .on('click touchend','#swipebox-slider .current img', function(e){
              return false;
          })
          .on('click touchend','#swipebox-slider .current', function(e){
              $('#swipebox-close').trigger('click');
          });
    });