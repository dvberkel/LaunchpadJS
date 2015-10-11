describe('button', function(){
    var MockMidiAdapter = function(){}
    MockMidiAdapter.prototype.send = function(){
        this.arguments = Array.prototype.slice.call(arguments);
    };

    var ANY_CHANNEL = 144;
    var ANY_NOTE = 0;
    var mockMidiAdapter;

    beforeEach(function(){
        mockMidiAdapter = new MockMidiAdapter();
    });


    it('should be observable', function(){
        var button = new launchpad.Button(ANY_CHANNEL, ANY_NOTE, mockMidiAdapter);

        expect(button instanceof launchpad.Observable).toBe(true);
    });

    it('when turned red should sent channel, note, 3 to midiAdapter', function(){
        var button = new launchpad.Button(ANY_CHANNEL, ANY_NOTE, mockMidiAdapter);

        button.turn('red');

        expect(mockMidiAdapter.arguments).toEqual([ANY_CHANNEL, ANY_NOTE, 3]);
    });

    it('when turned green should sent channel, note, 48 to midiAdapter', function(){
        var button = new launchpad.Button(ANY_CHANNEL, ANY_NOTE, mockMidiAdapter);

        button.turn('green');

        expect(mockMidiAdapter.arguments).toEqual([ANY_CHANNEL, ANY_NOTE, 48]);
    });

    it('when turned orange should sent channel, note, 51 to midiAdapter', function(){
        var button = new launchpad.Button(ANY_CHANNEL, ANY_NOTE, mockMidiAdapter);

        button.turn('orange');

        expect(mockMidiAdapter.arguments).toEqual([ANY_CHANNEL, ANY_NOTE, 51]);
    });
});
