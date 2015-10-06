;(function($, undefined){
    var defaults = $.defaults = {};

    defaults.midiAdapter = function(accept, reject){ /* TODO make a real midi adapter */
        accept(undefined);
    };
})(window.launchpad = window.launchpad || {});
