(async () => {
    function rand() {
        return Math.floor(Math.random() * 100);
    }

    function generateSparkTitle() {
        document.title = `Appl:{${rand()},${rand()},${rand()},${rand()},${rand()},${rand()},${rand()},${rand()}}`;
    }
    
    function loopIt() {
        generateSparkTitle();
        setTimeout(loopIt, 1000);
    }
    //only do this for our demos.
    if (document.location.origin === "https://cdn.openfin.co") {
        loopIt();
    }
    
})();