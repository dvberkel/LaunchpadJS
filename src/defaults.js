(function($, undefined){
    var defaults = $.defaults = {};

    function selectItem(name){
        return {
            'from': function(items){
                var item = items.next();
                while (!item.done) {
                    if (item.value.name === name) {
                        return item.value;
                    }
                    item = items.next();
                }
                return undefined;
            }
        };
    }

    defaults.paintNames = {
        'red':    { 'red': 3, 'green': 0 },
        'green':  { 'red': 0, 'green': 3 },
        'orange': { 'red': 3, 'green': 3 }
    };
    defaults.name = 'Launchpad Mini MIDI 1';
    defaults.sysex = false;
    defaults.midiAdapterFactory = function(accept, reject){
        if (!navigator.requestMIDIAccess){
            reject();
        } else {
            var padName = this.name;
            navigator.requestMIDIAccess({ sysex: this.sysex })
                .then(function(midiAccess){
                    return {
                        'input': selectItem(padName).from(midiAccess.inputs.values()),
                        'output': selectItem(padName).from(midiAccess.outputs.values())
                    };
                })
                .then(function(io){
                    return new $.MidiAdapter(io.input, io.output);
                })
                .then(function(midiAdapter){
                    return new $.Launchpad(midiAdapter);
                })
                .then(function(pad){
                    accept(pad);
                })
                .catch(reject);
        }
    };
})(window.launchpad = window.launchpad || {});
