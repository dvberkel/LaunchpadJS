(function($){
    var Button = $.Button = function(channel, note, midiAdapter){
        $.Observable.call(this);
        this.channel = channel;
        this.note = note;
        this.midiAdapter = midiAdapter;
        this.id = this.note;
        if (!this.isControl()) {
            this.x = this.note % 16;
            this.y = Math.floor(this.note / 16);
        } else {
            this.id -= 104;
        }
    };
    Button.prototype = Object.create($.Observable.prototype);
    Button.prototype.constructor = Button;
    Button.prototype.turn = function(color){
        this.paint($.defaults.paintNames[color]);
    };
    Button.prototype.paint = function(colors){
        colors = $.extend(colors, { 'red': 0, 'green': 0 });
        var velocity = (colors.green % 4) * 16 + (colors.red % 4);
        this.send(velocity);
    };
    Button.prototype.send = function(velocity){
        this.midiAdapter.send(this.channel, this.note, velocity);
    };
    Button.prototype.isControl = function(){
        return this.channel === 176;
    };
})(window.launchpad = window.launchpad || {});
