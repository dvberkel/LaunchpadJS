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
    });

    describe('on [*, *, 0] midi message', function(){
        it('pad should emit \'release\'', function(){
            var pad = new launchpad.Launchpad(mockMidiAdapter);
            var notified = false;
            pad.on('release', function(){ notified = true; });

            mockMidiAdapter.emit('input', ANY_CHANNEL, ANY_NOTE, 0);

            expect(notified).toBe(true);
        });
    });
});
