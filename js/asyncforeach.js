function asyncForeach(array, action, onComplete) {
	function after (length, callback) {
		var counter = 0;
		return function() {
			counter += 1;
			if (counter === length) callback();
		}
	}
	
	var done = after(array.length, onComplete);
	array.forEach(function(item, index) {
		action(item, index, done);
	})
}

(function(){
    var oldLog = console.log;
    console.log = function (message) {
        oldLog.apply(console, arguments);
        return message;
    };
})();