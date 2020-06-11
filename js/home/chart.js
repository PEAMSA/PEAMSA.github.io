// Retrieve data from Firebase -> Power Meter in Inverter 
var ref_powermeter_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("powermeter").child("mdb");
var ref_inverter_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("inverter").child("IN202001").child("PV_TOTAL_POWER");
var ref_battery_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("inverter").child("IN202001").child("BATTERY_POWER");

ref_powermeter_data.on("value", function(snapshot) {
    var TotalpowerMeter = snapshot.val();
    var Total_PowerMeter = Math.abs(parseInt(TotalpowerMeter));
    console.log(Total_PowerMeter)
    localStorage.setItem("Total_PowerMeter_local", Total_PowerMeter)
  });

ref_inverter_data.on("value", function(snapshot) {
    var pv_total_power = snapshot.val();
    var PV_Total_Power = Math.abs(parseInt(pv_total_power))*1000;
    console.log(PV_Total_Power)
    localStorage.setItem("PV_Total_Power_local", PV_Total_Power)
});

ref_battery_data.on("value", function(snapshot) {
    var battery_export_power = snapshot.val();
    var Battery_Export_Power = Math.abs(parseInt(battery_export_power))*1000;
    console.log(Battery_Export_Power)
    localStorage.setItem("Battery_Export_Power_local", Battery_Export_Power)
});

// Calculate Power
var cal_Total_PowerMeter = parseInt(localStorage.getItem("Total_PowerMeter_local"));
var cal_PV_Total_Power = parseInt(localStorage.getItem("PV_Total_Power_local"));
var cal_Battery_Export_Power = parseInt(localStorage.getItem("Battery_Export_Power_local"));

if ( (cal_Total_PowerMeter == "NaN") || (cal_PV_Total_Power == "NaN") || (cal_Battery_Export_Power == "NaN")) {
    var ratio_grid = 100;
    var ratio_PV = 0;
    var ratio_batt = 0;
} else {
    var cal_Grid_Import = Math.abs(cal_Total_PowerMeter - cal_PV_Total_Power);
    var Total_MSA_Load = cal_Total_PowerMeter + cal_PV_Total_Power;
    var ratio_grid = 100 * (cal_Grid_Import / Total_MSA_Load).toFixed(2);
    var ratio_PV = 100 * (cal_PV_Total_Power / Total_MSA_Load).toFixed(2);
    var ratio_batt = 100 * (cal_Battery_Export_Power / Total_MSA_Load).toFixed(2);
    }

display_source_ratio(ratio_grid, ratio_PV, ratio_batt);

function display_source_ratio(ratio_grid, ratio_PV, ratio_batt) {
    var dataPointArrey = [
        {y: ratio_grid, label: "Grid"},
        {y: ratio_PV, label: "PV"},
        {y: ratio_batt, label: "Battery"}
    ]

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

// Set time for refresh page:
// setTimeout(function(){
//     location.reload();
// },15000);
// ---------------------- //