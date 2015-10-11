;(function($){
    var Button = $.Button = function(channel, note, midiAdapter){
        $.Observable.call(this);
        this.channel = channel;
        this.note = note;
        this.midiAdapter = midiAdapter;
    };
    Button.prototype = Object.create($.Observable.prototype);
    Button.prototype.constructor = Button;
    Button.prototype.turn = function(color){
        if (color === 'red') {
            this.send(1 * 3);
        }
        if (color == 'green') {
            this.send(16 * 3);
        }
        if (color == 'orange') {
            this.send((16 + 1) * 3);
        }
    };
    Button.prototype.send = function(velocity){
        this.midiAdapter.send(this.channel, this.note, velocity);
    };
})(window.launchpad = window.launchpad || {});
