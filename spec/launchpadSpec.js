describe('launchpad', function(){
    it('should exist', function(){
        expect(launchpad).toBeDefined();
    });

    it('should have a version', function(){
        expect(launchpad.version).toBeDefined();
    });

    describe('.defaults', function(){
        it('should exist', function(){
            expect(launchpad.defaults).toBeDefined();
        });

        describe('.midiAdapterFactory', function(){
            it('should exist', function(){
                expect(launchpad.defaults.midiAdapterFactory).toBeDefined();
            });

            it('should be a function', function(){
                expect(typeof launchpad.defaults.midiAdapterFactory).toBe('function');
            });
        });

        describe('.name', function(){
            it('should exist', function(){
                expect(launchpad.defaults.name).toBeDefined();
            });

            it('should be \'Launchpad Mini\'', function(){
                expect(launchpad.defaults.name).toBe('Launchpad Mini');
            });
        });

        describe('.sysex', function(){
            it('should exist', function(){
                expect(launchpad.defaults.sysex).toBeDefined();
            });

            it('should be false', function(){
                expect(launchpad.defaults.sysex).toBe(false);
            });
        });
    });

    describe('#connect', function(){
        it('should be a function', function(){
            expect(typeof launchpad.connect).toBe('function');
        });

        it('should return a Promise', function(done){
            var expectedResult = true;
            var p = launchpad.connect({
                midiAdapterFactory: function(accept, reject){
                    accept(expectedResult);
                }
            });

            p.then(function(result){
                expect(result).toBe(expectedResult);
                done();
            });
        });

        it('should set context of midiAdapterFactory to options', function(done){
            var p = launchpad.connect({
                midiAdapterFactory: function(accept, reject){
                    accept(this.name);
                }
            });

            p.then(function(result){
                expect(result).toBe(launchpad.defaults.name);
                done();
            });
        });
    });
});
