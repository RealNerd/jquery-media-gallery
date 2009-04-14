/**
 * jquery.media_gallery 1.0.0 - Using existing thumbnails and media files (such
 *                              as YouTube thumbnails and videos) create a
 *                              clickable gallery.
 * 
 * Copyright (c) 2009 Blake Schwendiman
 * http://www.thewhyandthehow.com
 *
 * Licensed under MIT license
 * http://www.opensource.org/licenses
 *
 * Launch  : April 2009
 * Version : 1.0.0 - Tue Apr 14 2009
 *
 */

/** Usage
 * 
 * $(selector).media_gallery(options)
 *
 */

;(function($) {
  //
  // plugin definition
  //
  $.fn.media_gallery = function(options) {
        // build main options before element iteration
        var opts = $.extend({}, $.fn.media_gallery.defaults, options);

        return this.each(function() {
          $this = $(this);
          // build element specific options
          var o = $.meta ? $.extend({}, opts, $this.data()) : opts;

        });
  };

  //
  // plugin defaults
  //
  $.fn.media_gallery.defaults = {
        target: '#media_gallery'
  };
})(jQuery);
