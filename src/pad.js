(function($){
    var inputHandlers = [
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

    var buttonLookups = [
        {
            'applies': function(args){ return args.length === 1; },
            'lookup': function(pad, args){
                return new $.Button(144, args[0], pad.midiAdapter);
            }
        },
        {
            'applies': function(args){ return args.length === 2; },
            'lookup': function(pad, args){
                return new $.Button(144, args[0] + 16 * args[1], pad.midiAdapter);
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
        inputHandlers
            .filter(function(handler){ return handler.applies(channel, note, velocity); })
            .forEach(function(handler){ handler.handle(this, channel, note, velocity); }.bind(this));
    };
    Pad.prototype.clear = function(){
        this.midiAdapter.send(176, 0, 0);
    };
    Pad.prototype.button = function(){
        var args = Array.prototype.slice.call(arguments);
        return buttonLookups
            .filter(function(buttonLookup){ return buttonLookup.applies(args); })
            .map(function(buttonLookup){ return buttonLookup.lookup(this, args); }.bind(this))
        [0];
    };
    Pad.prototype.controlButton = function(id){
        return new $.Button(176, 104 + id, this.midiAdapter);
    };
})(window.launchpad = window.launchpad || {});
