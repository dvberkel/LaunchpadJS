describe('promises', function(){
    it('should accept', function(done){
        var p = new Promise(function(accept, reject){ accept(true); });

        p.then(function(value){
            expect(value).toBe(true);
            done();
        });
    });

    it('should reject', function(done){
        var p = new Promise(function(accept, reject){ reject('test'); });

        p.catch(function(value){
            expect(value).toBe('test');
            done();
        });
    });

    it('should be chainable', function(done){
        var p = new Promise(function(accept, reject){ accept(1); });

        p
            .then(function(value){ return 2 * value; })
            .then(function(value){ return value + 1; })
            .then(function(value){
                expect(value).toBe(3);
                done();
            });
    });

    it('exceptions should be catch', function(done){
        var p = new Promise(function(accept, reject){ accept(1); });

        p
            .then(function(value){ return 2 * value; })
            .then(function(value){ return value + 1; })
            .then(function(value){
                expect(value).toBe(3);
                done();
            });
    });
});
