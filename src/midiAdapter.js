(function($){
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
    };
})(window.launchpad = window.launchpad || {});
