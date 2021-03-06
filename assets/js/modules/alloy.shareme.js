(function() {
    ALLOY.ShareMe = function(){
        var defaults = {
            'twitterMessageLimit' : 115,
            'twitterTemplate' : 'https://twitter.com/intent/tweet?text="{{text}}"&url={{url}}',
            'emailTemplate' : 'mailto:?subject={{subject}}&body="{{selection}}" {{url}}',
            'validAncestors' : ['article__body', 'article__title', 'block']
        };

    	var _init = function() {
            ALLOY.Logger.startup('ALLOY.ShareMe Started');
    	};

        var update = function() {

        };

        var show = function() {

        };

        var hide = function() {

        };

        var isValidSelection = function() {

        };

        var public = {
            init: _init
        };

        return public;
    }();

    // force start of ShareMe functions
    ALLOY.Logger.trace('ALLOY.ShareMe Initializing');
    ALLOY.ShareMe.init();
})();
