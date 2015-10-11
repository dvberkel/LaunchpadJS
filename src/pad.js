;(function($){
    var handlers = [
        {
            'applies': function(channel, note, velocity){ return velocity === 127; },
            'handle': function(pad, channel, note, velocity){
                pad.emit('press', new $.Button(channel, note, pad.midiAdapter));
            }
        },
        {
            'applies': function(channel, note, velocity){ return velocity === 0; },
            'handle': function(pad, channel, note, velocity){
                pad.emit('release', new $.Button(channel, note, pad.midiAdapter));
            }
        }
    ];

    var Pad = $.Launchpad = function(midiAdapter){
        $.Observable.call(this);
        this.midiAdapter = midiAdapter;
        this.midiAdapter.on('input', this.handleInput.bind(this));
    };
    Pad.prototype = Object.create($.Observable.prototype);
    Pad.prototype.constructor = Pad;
    Pad.prototype.handleInput = function(channel, note, velocity){
        handlers
            .filter(function(handler){ return handler.applies(channel, note, velocity); })
            .forEach(function(handler){ handler.handle(this, channel, note, velocity); }.bind(this));
    }
})(window.launchpad = window.launchpad || {});
