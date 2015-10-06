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

        describe('.midiAdapter', function(){
            it('should exist', function(){
                expect(launchpad.defaults.midiAdapter).toBeDefined();
            });

            it('should be a function', function(){
                expect(typeof launchpad.defaults.midiAdapter).toBe('function');
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
                midiAdapter: function(accept, reject){
                    accept(expectedResult);
                }
            });

            p.then(function(result){
                expect(result).toBe(expectedResult);
                done();
            });
        });
    });
});
