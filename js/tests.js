QUnit.test("asyncForEach test [1,2,3]", function (assert) {
    cleanConsoleOutput();
    var array = [1, 2, 3];
    var aTimout = 1000;

    asyncForeach(array, function(item, index, done) {
        setTimeout(function() {
            console.log(item);
            done();
        }, aTimout);
    }, function() {
        console.log('end');
    });
    var expected = '1\n2\n3\nend\n'

    setTimeout(function() {
        assert.equal(expected, consoleOutput, "1 2 3 end");
    }, aTimout + 150)



    assert.ok(true)
});