;(function($){
    var Observable = $.Observable = function(){
        this.observers = {};
    };
    Observable.prototype.on = function(event, callback){
        if (typeof callback !== 'function') return;
        (this.observers[event] = this.observers[event] || []).push(callback);
    };
    Observable.prototype.emit = function(event){
        var args = Array.prototype.slice.call(arguments, 1);
        (this.observers[event] || []).forEach(function(callback){
            callback.apply(undefined, args);
        });
    }
})(window.launchpad = window.launchpad || {});
;;(function($, undefined){
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
;;(function($){
    $.extend = function extend(){
        return Array.prototype.slice.call(arguments).reduce(function(result, dictionary){
            for (var key in dictionary){
                if (dictionary.hasOwnProperty(key) && !result.hasOwnProperty(key)) {
                    result[key] = dictionary[key];
                }
            }
            return result;
        }, {})
    };
})(window.launchpad = window.launchpad || {});
;;(function($){
    $.connect = function(options){
        options = $.extend(options || {}, $.defaults);
        return new Promise(options.midiAdapterFactory.bind(options));
    };
})(window.launchpad = window.launchpad || {});
;;(function($){
    var MidiAdapter = $.MidiAdapter = function(input, output){
        $.Observable.call(this);
        this.input = input;
        this.output = output;

        this.input.onmidimessage = this.onMidiMessageCallback.bind(this);
    };
    MidiAdapter.prototype = Object.create($.Observable.prototype);
    MidiAdapter.prototype.constructor = MidiAdapter;
    MidiAdapter.prototype.onMidiMessageCallback = function(message){
        var channel = message.data[0];
        var note = message.data[1];
        var velocity = message.data[2];
        this.emit('input', channel, note, velocity);
    };
    MidiAdapter.prototype.send = function(channel, note, velocity){
        this.output.send([channel, note, velocity]);
    }
})(window.launchpad = window.launchpad || {});
;;(function($){
    var Pad = $.Launchpad = function(midiAdapter){
        $.Observable.call(this);
        this.midiAdapter = midiAdapter;
    };
    Pad.prototype = Object.create($.Observable.prototype);
    Pad.prototype.constructor = Pad;
})(window.launchpad = window.launchpad || {});
;(function($){
    $.version = '1.0.0';
})(window.launchpad = window.launchpad || {});
