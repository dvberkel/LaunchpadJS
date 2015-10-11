describe('Launchpad', function(){
    var ANY_CHANNEL = 144;
    var ANY_NOTE = 0;
    var mockMidiAdapter;

    beforeEach(function(){
        mockMidiAdapter = new launchpad.Observable();
    });

    it('should be Observable', function(){
        var pad = new launchpad.Launchpad(mockMidiAdapter);

        expect(pad instanceof launchpad.Observable).toBe(true);
    });

    describe('on [*, *, 127] midi message', function(){
        it('pad should emit \'press\'', function(){
            var pad = new launchpad.Launchpad(mockMidiAdapter);
            var notified = false;
            pad.on('press', function(){ notified = true; });

            mockMidiAdapter.emit('input', ANY_CHANNEL, ANY_NOTE, 127);

            expect(notified).toBe(true);
        });

        it('should emit corresponding button', function(){
            var pad = new launchpad.Launchpad(mockMidiAdapter);
            var button;
            pad.on('press', function(aButton){ button = aButton; });

            mockMidiAdapter.emit('input', ANY_CHANNEL, ANY_NOTE, 127);

            expect(button).toBeDefined();
            expect(button instanceof launchpad.Button).toBe(true);
            expect(button.channel).toBe(ANY_CHANNEL);
            expect(button.note).toBe(ANY_NOTE);
        });
    });

    describe('on [*, *, 0] midi message', function(){
        it('pad should emit \'release\'', function(){
            var pad = new launchpad.Launchpad(mockMidiAdapter);
            var notified = false;
            pad.on('release', function(){ notified = true; });

            mockMidiAdapter.emit('input', ANY_CHANNEL, ANY_NOTE, 0);

            expect(notified).toBe(true);
        });

        it('should emit corresponding button', function(){
            var pad = new launchpad.Launchpad(mockMidiAdapter);
            var button;
            pad.on('release', function(aButton){ button = aButton; });

            mockMidiAdapter.emit('input', ANY_CHANNEL, ANY_NOTE, 0);

            expect(button).toBeDefined();
            expect(button instanceof launchpad.Button).toBe(true);
            expect(button.channel).toBe(ANY_CHANNEL);
            expect(button.note).toBe(ANY_NOTE);
        });
    });
});
