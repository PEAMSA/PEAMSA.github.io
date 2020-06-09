window.onload = function() {

    // -------------------------- Get data from Heroku Backend------------------------------ //

    // jQuery.ajax({
    //     url: "https://cors-anywhere.herokuapp.com/https://msrdatalog.herokuapp.com/energy/api/getenergy",
    //     type: "GET",
    //     headers: {
    //         "Authorization": "Token cefa4dbd91305b2eb26ed7961a44970f5d4cb83f",
    //         "Content-Type": "application/json; charset=utf-8",
    //         "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msrdatalog.herokuapp.com/energy/api/getenergy",
    //         "Access-Control-Allow-Methods": "POST",
    //         "Access-Control-Allow-Headers": "Content-Type, Authorization",

    //     },
    // })
    // .done(function(data, textStatus, jqXHR) {
    //     console.log("HTTP Request Succeeded: " + jqXHR.status);
    //     data_prepareation(data)        
        
    // })
    // .fail(function(jqXHR, textStatus, errorThrown) {
    //     console.log("HTTP Request Failed");
    // })
    // .always(function() {
    //     /* ... */
    // });

    // -------------------------- Call function: data_prepareation ------------------------------ //
    // function data_prepareation(data) {

    // }

    var grid_data = 51.08;
    var solar_data = 27.34;
    var batt_data = 10.62;
    var dataPointArrey = [
        {y: grid_data, label: "Grid"},
        {y: solar_data, label: "PV"},
        {y: batt_data, label: "Battery"}
    ]

    // 

    var chart = new CanvasJS.Chart("myChart", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: ""
            
        },

        data: [{

            type: "pie",
            // Type line,area,column,bar,pie,funnel,financial 
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: dataPointArrey
        }]
    });
    chart.render();
    
    }