;(function($, undefined){
    var defaults = $.defaults = {};

    defaults.midiAdapterFactory = function(accept, reject){ /* TODO make a real midi adapter */
        accept(undefined);
    };
})(window.launchpad = window.launchpad || {});
;;(function($){
    $.connect = function(options){
        return new Promise(options.midiAdapterFactory);
    };
})(window.launchpad = window.launchpad || {});
;(function($){
    $.version = '1.0.0';
})(window.launchpad = window.launchpad || {});
