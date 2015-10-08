describe('Launchpad', function(){
    it('should be Observable', function(){
        var pad = new launchpad.Launchpad({});

        expect(pad instanceof launchpad.Observable).toBe(true);
    });
});
