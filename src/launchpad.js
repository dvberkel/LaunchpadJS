;(function($){
    $.connect = function(options){
        return new Promise(options.midiAdapterFactory);
    };
})(window.launchpad = window.launchpad || {});
