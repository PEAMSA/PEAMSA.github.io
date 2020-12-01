// Retrieve data from Firebase -> Power Meter in Inverter 
// var ref_powermeter_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("powermeter").child("mdb");
// var ref_powermeter_Grid = firebase.database().ref().child("peasbhmsr").child("devicetype").child("powermeter").child("Grid_Import");

// ref_powermeter_data.on("value", function(snapshot) {
//     var TotalpowerMeter = snapshot.val();
//     var Total_PowerMeter = Math.abs(parseInt(TotalpowerMeter));
//     localStorage.setItem("Total_PowerMeter_local", Total_PowerMeter)
//   });

//   ref_powermeter_Grid.on("value", function(snapshot) {
//     var GridpowerMeter = snapshot.val();
//     var Total_GridMeter = Math.abs(parseInt(GridpowerMeter));
//     localStorage.setItem("Total_GridMeter_local", Total_GridMeter)
//   });


// // Calculate Power
// var cal_Total_PowerMeter = parseInt(localStorage.getItem("Total_PowerMeter_local"));
// var cal_Grid_Power = parseInt(localStorage.getItem("Total_GridMeter_local"));
// var cal_Grid_Import = Math.abs(cal_Grid_Power);
// var Total_MSA_Load = cal_Total_PowerMeter
// var ratio_grid = 100 * (cal_Grid_Import / Total_MSA_Load).toFixed(2);
// var ratio_PV_Batt = 100 - ratio_grid;

// display_source_ratio_login(ratio_grid, ratio_PV_Batt);

// function display_source_ratio_login(ratio_grid, ratio_PV_Batt) {
//     var dataPointArrey = [
//         {y: ratio_grid, label: "Grid"},
//         {y: ratio_PV_Batt, label: "PV and Battery"},
//     ]

//     var chart = new CanvasJS.Chart("myChart2", {
//         theme: "light1", // "light1", "light2", "dark1", "dark2"
//         exportEnabled: true,
//         animationEnabled: true,
//         title: {
//             text: ""
//         },
//         data: [{
//             type: "pie",
//             // Type line,area,column,bar,pie,funnel,financial 
//             startAngle: 25,
//             toolTipContent: "<b>{label}</b>: {y}%",
//             showInLegend: "true",
//             legendText: "{label}",
//             indexLabelFontSize: 12,
//             yValueFormatString: "##0.00\"%\"",
// 		    indexLabel: "{label} {y}",
//             dataPoints: dataPointArrey,
//             yValueFormatString: "##0.00\"%\"",
//         }]
//     });
//     chart.render();
// }
          
jQuery.ajax({
    url: "https://bemsbackend.azurewebsites.net/energy/api/piechartget",
    type: "GET",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
})
.done(function(data, textStatus, jqXHR) {
    console.log("HTTP Request Succeeded: " + jqXHR.status);
    console.log(data);
    display_source_ratio_login(data)
})
.fail(function(jqXHR, textStatus, errorThrown) {
    console.log("HTTP Request Failed");
})
.always(function() {
    /* ... */
});

function display_source_ratio_login(data) {

    var percentair7day = data['percentair7day'];
    var percentplug7day = data['percentplug7day'];
    var percentlight7day = data['percentlight7day']

    var dataPointArrey = [
        {y: percentair7day, label: "Air Condition"},
        {y: percentplug7day, label: "Plug"},
        {y: percentlight7day, label: "Lighting"},
    ]

    var chart = new CanvasJS.Chart("myChart2", {
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
            indexLabelFontSize: 12,
            yValueFormatString: "##0.00\"%\"",
		    indexLabel: "{label} {y}",
            dataPoints: dataPointArrey,
            yValueFormatString: "##0.00\"%\"",
        }]
    });
    chart.render();
}
