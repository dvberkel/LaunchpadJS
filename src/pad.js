;(function($){
    var handlers = [
        {
            'applies': function(channel, note, velocity){ return velocity === 127; },
            'handle': function(pad){ pad.emit('press'); }
        },
        {
            'applies': function(channel, note, velocity){ return velocity === 0; },
            'handle': function(pad){ pad.emit('release'); }
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
            .forEach(function(handler){ handler.handle(this); }.bind(this));
    }
})(window.launchpad = window.launchpad || {});
