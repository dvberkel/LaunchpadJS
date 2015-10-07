describe('observerable', function(){
    var Observer = function(){
        this.notified = false;
    };
    Observer.prototype.callback = function(){
        this.notified = true;
    }


    it('should register callbacks specific for events', function(){
        var observer = new Observer();
        var otherObserver= new Observer();
        var observable = new launchpad.Observable();
        observable.on('event', observer.callback.bind(observer));

        observable.emit('event');

        expect(observer.notified).toBe(true);
        expect(otherObserver.notified).toBe(false);
    });
});
