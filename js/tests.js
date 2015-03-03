QUnit.test("asyncForEach test [1,2,3]", function (assert) {
    var testDone = assert.async();
    cleanConsoleOutput();
    var array = [1, 2, 3];
    var aTimout = 1000;
    var expected = '1\n2\n3\nend\n';

    asyncForeach(array, function(item, index, done) {
        setTimeout(function() {
            console.log(item);
            done();
        }, aTimout);
    }, function() {
        console.log('end');
    });

    setTimeout(function() {
        assert.equal(expected, consoleOutput, "1 2 3 end");
        testDone();
    }, aTimout + 150)
});

QUnit.test("asyncForEach test [5,4,3,2,1]", function (assert) {
    var testDone = assert.async();
    cleanConsoleOutput();
    var array = [5,4,3,2,1];
    var aTimout = 1000;
    var expected = '5\n4\n3\n2\n1\nok\n';

    asyncForeach(array, function(item, index, done) {
        setTimeout(function() {
            console.log(item);
            done();
        }, aTimout);
    }, function() {
        console.log('ok');
    });

    setTimeout(function() {
        assert.equal(expected, consoleOutput, "5 4 3 2 1 ok");
        testDone();
    }, aTimout + 150)
});

QUnit.test("asyncForEach test []", function (assert) {
    var testDone = assert.async();
    cleanConsoleOutput();
    var array = [];
    var aTimout = 1000;
    var expected = '';

    asyncForeach(array, function(item, index, done) {
        setTimeout(function() {
            console.log(item);
            done();
        }, aTimout);
    }, function() {
        console.log('ok');
    });

    setTimeout(function() {
        assert.equal(expected, consoleOutput, "empty string");
        testDone();
    }, aTimout + 150)
});