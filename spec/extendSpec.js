describe('extend', function(){
    it('should exist', function(){
        expect(launchpad.extend).toBeDefined();
    });

    it('should merge options from multiple arguments', function(){
        expect(launchpad.extend({ a: 1 }, { b: 2 }, { c: 3 })).toEqual({
            a: 1,
            b: 2,
            c: 3
        });
    });

    it('should prefer earlier options', function(){
        expect(launchpad.extend({ a: 1 }, { a: 2 }, { a: 3 })).toEqual({ a: 1 });
    });

    it('should silently ignore undefined', function(){
        expect(launchpad.extend({ a: 1 }, undefined, { b: 2 })).toEqual({
            a: 1,
            b: 2
        });
    });

    it('should silently ignore null', function(){
        expect(launchpad.extend({ a: 1 }, null, { b: 2 })).toEqual({
            a: 1,
            b: 2
        });
    });
});
