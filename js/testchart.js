$(function() {
    currencyCode = { GBP: 0, USD: 1, EUR: 2 };
    var displayedCurrencyData = [];
    currencyData = [
            {
                currency  : "GBP",
                display: "ON",
                fillColor : "red",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                data : [4000,3029,4273,1423,4291,2151,4132]
            },
            {
                currency  : "USD",
                display: "ON",
                fillColor : "blue",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data : [3152,4252,1424,3141,3241,4162,4152]
            },
            {
                currency  : "EUR",
                display: "ON",
                fillColor : "green",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data : [1234,2341,3212,4212,1123,2231,3321]
            }
        ];

    displayChart( currencyData );
});

function displayChart(displayedCurrencyData){
    var chartData = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : displayedCurrencyData
    };

    var myLine = new Chart($("#myChart").get(0).getContext("2d")).Line(chartData);
}

function hideData( code, el ){
    displayData = [];
    if( currencyData[ currencyCode[ code ] ].display == "ON" ){
        currencyData[ currencyCode[ code ] ].display = "OFF";
        $(el).css("background-color", "grey");
    } else{
        currencyData[ currencyCode[ code ] ].display = "ON";
        $(el).css("background-color", currencyData[ currencyCode[ code ] ].fillColor );
    }
    displayData = _.where(currencyData, {display: "ON"} );
    return displayData;
}


