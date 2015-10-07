;(function($){
    var Observable = $.Observable = function(){
        this.observers = {};
    };
    Observable.prototype.on = function(event, callback){
        (this.observers[event] = this.observers[event] || []).push(callback);
    };
    Observable.prototype.emit = function(event){
        (this.observers[event] || []).forEach(function(callback){
            callback.call(undefined);
        });
    }
})(window.launchpad = window.launchpad || {});
