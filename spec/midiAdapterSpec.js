describe('MidiAdapter', function(){
    var MockInput = function(){};
    MockInput.prototype.onmidimessage = function(){ /* do nothing */ }
    var MockOutput = function(){};
    MockOutput.prototype.send = function(){
        this.arguments = Array.prototype.slice.call(arguments);
    };

    var mockInput, mockOutput;
    beforeEach(function(){
        mockInput = new MockInput();
        mockOutput = new MockOutput();
    });

    it('should exist', function(){
        expect(launchpad.MidiAdapter).toBeDefined();
    });

    it('should emit \'input\' when onmidimessage is called on input', function(){
        var midiAdapter = new launchpad.MidiAdapter(mockInput, mockOutput);
        var channel, note, velocity, data = [144, 67, 127];
        midiAdapter.on('input', function(aChannel, aNote, aVelocity){
            channel = aChannel;
            note = aNote;
            velocity = aVelocity;
        });

        mockInput.onmidimessage({
            'data': data
        });

        expect(channel).toEqual(data[0]);
        expect(note).toEqual(data[1]);
        expect(velocity).toEqual(data[2]);
    });

    it('should delegate send to output', function(){
        var midiAdapter = new launchpad.MidiAdapter(mockInput, mockOutput);
        var channel = 144, note = 67, velocity = 127

        midiAdapter.send(channel, note, velocity);

        expect(mockOutput.arguments).toEqual([[channel, note, velocity]]);
    });
});
