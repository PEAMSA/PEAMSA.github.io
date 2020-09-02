window.onload = function () {

        // -------------------------- Get data from Heroku Backend------------------------------ //
        jQuery.ajax({
            url: "https://msrdatalog.herokuapp.com/energy/api/getenergy",
            type: "GET",
            // headers: {
            //     "Authorization": "Token cefa4dbd91305b2eb26ed7961a44970f5d4cb83f",
            //     "Content-Type": "application/json; charset=utf-8",
            // },
        })
        .done(function(data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            data_prepareation(data)        
            
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function() {
            /* ... */
        });
    
        // -------------------------- Call function: data_prepareation ------------------------------ //
    
        // Data prep:
        function data_prepareation(data) {
            console.log(data)
            console.log("Call function: data_prepareation()")
            var grid_data_set = []
            var solar_data_set = []
            var total_load_data_set = []
            var floor1_load_data_set = []
            var floor2_load_data_set = []
            var edb_load_data_set = []
            var precisionac_data_set = []
            var batt_data_set = []
            var soc_batt = []
            for (var i = 0; i < data.length; i++) {
                var grid_obj = {label: data[i]["pub_time"], y: data[i]["grid"]}
                var solar_obj = {label: data[i]["pub_time"], y: data[i]["pv"]}
                var load_obj = {label: data[i]["pub_time"], y: data[i]["tottalload"]}
                var floor1_obj = {label: data[i]["pub_time"], y: data[i]["floor1load"]}
                var floor2_obj = {label: data[i]["pub_time"], y: data[i]["floor2load"]}
                var edb_obj = {label: data[i]["pub_time"], y: data[i]["edbload"]}
                var precisionac_obj = {label: data[i]["pub_time"], y: data[i]["precisionac"]}
                var batt_obj = {label: data[i]["pub_time"], y: data[i]["batt"]}
                var socbatt_obj = {label: data[i]["pub_time"], y: data[i]["percentbatt"]}
              
                grid_data_set.push(grid_obj)
                solar_data_set.push(solar_obj)
                total_load_data_set.push(load_obj)
                floor1_load_data_set.push(floor1_obj)
                floor2_load_data_set.push(floor2_obj)
                edb_load_data_set.push(edb_obj)
                precisionac_data_set.push(precisionac_obj)
                batt_data_set.push(batt_obj)
                soc_batt.push(socbatt_obj)
                }    

    var chart_1 = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
            // text: "MSA Control Building Energy Report"
        },
        axisX:{
            interval:8, 
            intervalType: "hour",        
            valueFormatString: "hh:mm", 
            labelAngle: 0
          },
        axisY: {
            title: "Energy (W)",
            minimum: 0,
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },

        data: [
            {
                type: "spline",
                name: "Grid",
                showInLegend: true,
                dataPoints: grid_data_set,
                borderColor: "#3e95cd",
                fill: false
            },
            {
                type: "spline",
                name: "Solar",
                showInLegend: true,
                dataPoints: solar_data_set,
                borderColor: "#8e5ea2",
                fill: false,
            },
            {
                type: "spline",
                name: "Total Load",
                showInLegend: true,
                dataPoints: total_load_data_set,
                borderColor: "#3d444f",
                fill: false,
            },
            {
                type: "spline",
                name: "1st Floor Load",
                showInLegend: true,
                dataPoints: floor1_load_data_set,
                borderColor: "#bd12b9",
                fill: false,
            },
            {
                type: "spline",
                name: "2nd Floor Load",
                showInLegend: true,
                dataPoints: floor2_load_data_set,
                borderColor: "#a151bd",
                fill: false,
            },
            {
                type: "spline",
                name: "EDB Load",
                showInLegend: true,
                dataPoints: edb_load_data_set,
                borderColor: "#9416ef",
                fill: false,
            },
            {
                type: "spline",
                name: "AC Load",
                showInLegend: true,
                dataPoints: precisionac_data_set,
                borderColor: "#117259",
                fill: false,
            },
            {
                type: "spline",
                name: "Battery power",
                showInLegend: true,
                dataPoints: batt_data_set,
                borderColor: "#56cab7",
                fill: false,
            },

            ]
    });

    chart_1.render();

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart_1.render();
    }

    // -------------------------- CANVAS.js --------------------------

        var chart_Test = new CanvasJS.Chart("chartContainerTest", {

        animationEnabled: true,
        exportEnabled: true,
        title: {
            // text: "MSA Control Building Energy Report"
        },
        axisY: {
            title: "%SOC Battery",
            minimum: 0,
            maximum: 100,
            interval: 20,
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },

        data: [
            {
                type: "spline",
                name: "%SOC Battery",
                showInLegend: true,
                dataPoints: soc_batt,
                borderColor: "#3e95cd",
                fill: false
            },
            ]
        }
    );
    // -------------------------- END of CANVAS.js --------------------------
            
        console.log("-------Done!!!---------")
    
        chart_Test.render();

        function toggleDataSeries(e) {
            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            }
            else {
                e.dataSeries.visible = true;
            }
            chart_Test.render();
            chart_1.render();
        }
    
    // -------------------------- End of function: data_prepareation ------------------------------ //
    }


}