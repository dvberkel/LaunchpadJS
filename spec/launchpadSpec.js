describe('launchpad', function(){
    it('should exist', function(){
        expect(launchpad).toBeDefined();
    });

    it('should have a version', function(){
        expect(launchpad.version).toBeDefined();
    });

    describe('#connect', function(){
        it('should be a function', function(){
            expect(typeof launchpad.connect).toBe('function');
        });
    });
});
