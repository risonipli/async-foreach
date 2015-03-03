var consoleOutput = "";
function cleanConsoleOutput() {
    consoleOutput = "";
}
(function(){
    var oldLog = console.log;
    console.log = function (message) {
        oldLog.apply(console, arguments);
        consoleOutput += message + '\n';
    };
})();