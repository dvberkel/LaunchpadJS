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
    });
});
