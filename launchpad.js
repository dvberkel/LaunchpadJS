;(function($, undefined){
    var defaults = $.defaults = {};

    defaults.name = 'Launchpad Mini';
    defaults.midiAdapterFactory = function(name, accept, reject){ /* TODO make a real midi adapter */
        accept(undefined);
    };
})(window.launchpad = window.launchpad || {});
;;(function($){
    function extend(){
        return Array.prototype.slice.call(arguments).reduce(function(result, dictionary){
            for (var key in dictionary){
                if (dictionary.hasOwnProperty(key) && !result.hasOwnProperty(key)) {
                    result[key] = dictionary[key];
                }
            }
            return result;
        }, {})
    };

    $.connect = function(options){
        options = extend(options || {}, $.defaults);
        return new Promise(options.midiAdapterFactory.bind(options));
    };
})(window.launchpad = window.launchpad || {});
;;(function($){
    var Observable = $.Observable = function(){
        this.observers = {};
    };
    Observable.prototype.on = function(event, callback){
        if (typeof callback !== 'function') return;
        (this.observers[event] = this.observers[event] || []).push(callback);
    };
    Observable.prototype.emit = function(event){
        var args = Array.prototype.slice.call(arguments, 1);
        (this.observers[event] || []).forEach(function(callback){
            callback.apply(undefined, args);
        });
    }
})(window.launchpad = window.launchpad || {});
;;(function($){
    var Pad = $.Launchpad = function(midiAdapter){
        $.Observable.call(this);
        this.midiAdapter = midiAdapter;
    };
    Pad.prototype = Object.create($.Observable.prototype);
    Pad.prototype.constructor = Pad;
})(window.launchpad = window.launchpad || {});
;(function($){
    $.version = '1.0.0';
})(window.launchpad = window.launchpad || {});
