;(function($){
    $.connect = function(options){
        options = $.extend(options || {}, $.defaults);
        return new Promise(options.midiAdapterFactory.bind(options));
    };
})(window.launchpad = window.launchpad || {})
