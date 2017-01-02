function foo() {
    var bar;
    //global scope variable
    quux = 0;
    function zip() {
        var quux;
        bar = true;
    }

    return zip;
}
