;(function($, undefined){
    var defaults = $.defaults = {};

    defaults.midiAdapterFactory = function(accept, reject){ /* TODO make a real midi adapter */
        accept(undefined);
    };
})(window.launchpad = window.launchpad || {});
;;(function($){
    $.connect = function(options){
        return new Promise(options.midiAdapterFactory);
    };
})(window.launchpad = window.launchpad || {});
;;(function($){
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
;(function($){
    $.version = '1.0.0';
})(window.launchpad = window.launchpad || {});
