describe('button', function(){
    var MockMidiAdapter = function(){}
    MockMidiAdapter.prototype.send = function(){
        this.arguments = Array.prototype.slice.call(arguments);
    };

    var ANY_CHANNEL = 144;
    var CONTROL_CHANNEL = 176;
    var REGULAR_CHANNEL = ANY_CHANNEL;
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

    it('when turned off should sent channel, note, 0 to midiAdapter', function(){
        var button = new launchpad.Button(ANY_CHANNEL, ANY_NOTE, mockMidiAdapter);

        button.turn('off');

        expect(mockMidiAdapter.arguments).toEqual([ANY_CHANNEL, ANY_NOTE, 0]);
    });

    it('from control channel are controllers', function(){
        var button = new launchpad.Button(CONTROL_CHANNEL, ANY_NOTE, mockMidiAdapter);

        expect(button.isControl()).toBe(true);
    });

    it('from regular channel are not controllers', function(){
        var button = new launchpad.Button(REGULAR_CHANNEL, ANY_NOTE, mockMidiAdapter);

        expect(button.isControl()).toBe(false);
    });

    describe('regular button', function(){
        it('should have x, y coordinates', function(){
            var button = new launchpad.Button(REGULAR_CHANNEL, ANY_NOTE, mockMidiAdapter);

            expect(button.x).toBe(ANY_NOTE % 16);
            expect(button.y).toBe(Math.floor(ANY_NOTE / 16));
        });

        it('should have and id', function(){
            var button = new launchpad.Button(REGULAR_CHANNEL, ANY_NOTE, mockMidiAdapter);

            expect(button.id).toBe(ANY_NOTE);
        })
    });

    describe('control button', function(){
        it('should have and id', function(){
            var button = new launchpad.Button(CONTROL_CHANNEL, ANY_NOTE, mockMidiAdapter);

            expect(button.id).toBe(ANY_NOTE - 104);
        })

    });
});
