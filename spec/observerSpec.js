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

    it('should notify all observers for an event', function(){
        var observers = [1, 2, 3].map(function(id){
            var observer = new Observer();
            observer.id = id;
            return observer;
        });
        var observable = new launchpad.Observable();
        observers.forEach(function(observer){
            observable.on('test', observer.callback.bind(observer));
        });

        observable.emit('test');

        var allNotified = observers.reduce(function(allNotified, observer){
            return allNotified && observer.notified;
        }, true);
        expect(allNotified).toBe(true);
    });
});
