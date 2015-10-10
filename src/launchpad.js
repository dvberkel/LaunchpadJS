;(function($){
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
