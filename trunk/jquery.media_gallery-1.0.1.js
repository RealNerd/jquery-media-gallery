/**
 * jquery.media_gallery 1.0.1 - Using existing thumbnails and media files (such
 *                              as YouTube thumbnails and videos) create a
 *                              clickable gallery.
 * 
 * Copyright (c) 2009 Blake Schwendiman
 * http://www.thewhyandthehow.com
 *
 * Licensed under MIT license
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Launch  : April 2009
 * Version : 1.0.0 - Apr 01 2009
 * Version : 1.0.1 - Apr 14 2009
 *
 */

/** Usage:
 * 
 * $(selector).media_gallery(options)
 *
 * media_gallery uses a simple HTML structure with an image and
 * a media file to create a clickable gallery that selects a media file
 * based on an image (likely a thumbnail)
 *
 * the structure of the HTML should be similar to:
 * <div id="media_gallery"></div> <!-- you must have a target container for the media somewhere on your page -->
 * 
 * <div class="media_gallery"> <!-- outer container, selector for plugin -->
 *   <img src="http://img.youtube.com/vi/i5LcBdbH8bo/2.jpg"> <!-- thumbnail should be at this level -->
 *   <div> <!-- media container, optional parameter to media_gallery -->
 *     <object width="425" height="344"><param name="movie" value="http://www.youtube.com/v/oHg5SJYRHA0&hl=en&fs=1"></param>
 *       <param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param>
 *       <embed src="http://www.youtube.com/v/oHg5SJYRHA0&hl=en&fs=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="344"></embed>
 *     </object>
 *   </div>
 * </div>
 *
 * Options:
 *   target_container:  the element representing the target container
 *                      default: '#media_gallery'
 *                      
 *   media_container:   the element type of the media container
 *                      default: 'div'
 *                      
 *   auto_select_first: should media_gallery automatically display the first
 *                      media item?
 *                      default: true
 *
 *   thumbnail_element: the element selector for the thumbnails
 *                      default: 'img'
 *
 * Examples:
 *   $('.media_gallery').media_gallery(); // default usage
 *
 */

;(function($) {
  //
  // plugin definition
  //
  $.fn.media_gallery = function(options) {
    // build main options before element iteration
    var opts = $.extend({}, $.fn.media_gallery.defaults, options);
    var cur_item = 0;
    
    return this.each(function() {
      $this = $(this);
      // build element specific options
      var o = $.meta ? $.extend({}, opts, $this.data()) : opts;

      $(o.media_container, $this).hide();
      $(o.thumbnail_element, $this).bind('click', function() {
        $(o.target_container).html($(o.media_container, $(this).parent()).html());
      }).css({'cursor': 'pointer'});

      // select first media item if applicable      
      if (o.auto_select_first && cur_item == 0) {
        $(o.target_container).html($(o.media_container, $this).html());
      }
      cur_item++;
    });
  };

  // plugin defaults
  $.fn.media_gallery.defaults = {
    target_container: '#media_gallery',
    media_container: 'div',
    auto_select_first: true,
    thumbnail_element: 'img'
  };
})(jQuery);
