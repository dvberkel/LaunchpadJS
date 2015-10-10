;(function($, undefined){
    var defaults = $.defaults = {};

    defaults.name = 'Launchpad Mini';
    defaults.sysex = false;
    defaults.midiAdapterFactory = function(accept, reject){
        if (!navigator.requestMIDIAccess){
            reject();
        } else {
            /* TODO make a real midi adapter */
            accept(undefined);
        }
    };
})(window.launchpad = window.launchpad || {});
