(async () => {
    const tickerNames = [
        "APPL",
        "TSLA",
        "IBM",
        "MSFT"
    ];

    const currentTicker = tickerNames[rand(4)];
    const data = [];

    //We seed the data
    while(data.length < 13) {
        data.push(rand(100));
    }

    function rand(ciel) {
        return Math.floor(Math.random() * ciel);
    }
    
    function generateSparkTitle() {
        document.title = `${currentTicker}: ${data.join(",")}`;
        data.push(rand(100));
        data.shift();
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