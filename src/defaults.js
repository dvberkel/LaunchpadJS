;(function($, undefined){
    var defaults = $.defaults = {};

    defaults.name = 'Launchpad Mini';
    defaults.midiAdapterFactory = function(accept, reject){ /* TODO make a real midi adapter */
        accept(undefined);
    };
})(window.launchpad = window.launchpad || {});
