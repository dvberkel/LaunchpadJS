describe('observerable', function(){
    it('should register callbacks specific for events', function(){
        var eventNotified = false;
        var otherEventNotified = false;
        var observable = new launchpad.Observable();
        observable.on('event', function(){ eventNotified = true; });

        observable.emit('event');

        expect(eventNotified).toBe(true);
        expect(otherEventNotified).toBe(false);
    });
});
