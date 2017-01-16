var KAI = KAI || {};

$.extend(KAI, (function(){
  function launchGallery (items, index) {
    if(typeof index === "undefined") {
      index = 0;
    }
    var options = {
      index: index,
      clickToCloseNonZoomable: false,
      showAnimationDuration: 0,
      zoomEl: false
    }

    var pswpElement = document.querySelectorAll('.pswp')[0];

    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options)
    gallery.init();

    KAI.currentGallery = gallery;
  }

  return {
    launchGallery: launchGallery
  }
})());

$(function(){

  $('.photo-series.badlands').on('click', function(){
    KAI.launchGallery(KAI.badlandsImages);
  });

  $('.photo-series.great-northern').on('click', function(){
    KAI.launchGallery(KAI.greatNorthernImages);
  })

  $('.pswp').on('click', '.pswp__img', function(){
    KAI.currentGallery.next();
  });
});

// KAI.launchGallery(KAI.badlandsImages);
