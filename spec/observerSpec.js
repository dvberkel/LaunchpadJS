describe('observerable', function(){
    var Observer = function(){
        this.notified = false;
        this.arguments = [];
    };
    Observer.prototype.callback = function(){
        this.arguments = Array.prototype.slice.call(arguments);
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

    it('should pass arguments on notification', function(){
        var observer = new Observer();
        var observable = new launchpad.Observable();
        observable.on('notify', observer.callback.bind(observer));

        observable.emit('notify', 1, true, 'value');

        expect(observer.notified).toBe(true);
        expect(observer.arguments[0]).toBe(1);
        expect(observer.arguments[1]).toBe(true);
        expect(observer.arguments[2]).toBe('value');
    });

    it('should silently ignore non-functions', function(){
        var observer = new Observer();
        var observable = new launchpad.Observable();
        observable.on('verify', observer.callback.bind(observer));
        observable.on('verify', {});

        observable.emit('verify');

        expect(observer.notified).toBe(true);
    });
});
