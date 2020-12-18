async function callFunction() {
    var data_MSA = await get_data_MSA()
    var data_PV = await get_data_PV()
    data_prepareation(data_MSA, data_PV)
}    

callFunction()

async function get_data_MSA() {
    const rsp = await fetch( "https://bemsbackend.azurewebsites.net/energy/api/getstampmsrpv" ),
    data = await rsp.json();
    return (data);
}

async function get_data_PV() {
    const rsp = await fetch( "https://bemsbackend.azurewebsites.net/energy/api/getnewbemspv" ),
    data = await rsp.json();
    return (data);
}

// -------------------------- Call function: data_prepareation ------------------------------ //
function data_prepareation(data_MSA, data_PV) {
    console.log("Call function: data_prepareation()")
    var feeder1 = []
    var feeder2 = []
    var feeder3 = []
    var feeder4 = []
    var feeder5 = []
    var feeder6 = []
    var feeder7 = []
    var feeder8 = []
    var moduleTemp = []
    var abmtemp = []
    var irr = []
    var windSpeed = []
    var MSA_solar = []
    for (var i = 0; i < data_MSA.length; i++) {
        var f1_obj = {label: data_MSA[i]["pub_time"], y: data_MSA[i]["i1"]}
        var f2_obj = {label: data_MSA[i]["pub_time"], y: data_MSA[i]["i2"]}
        var f3_obj = {label: data_MSA[i]["pub_time"], y: data_MSA[i]["i3"]}
        var f4_obj = {label: data_MSA[i]["pub_time"], y: data_MSA[i]["i4"]}
        var f5_obj = {label: data_MSA[i]["pub_time"], y: data_MSA[i]["i5"]}
        var f6_obj = {label: data_MSA[i]["pub_time"], y: data_MSA[i]["i6"]}
        var f7_obj = {label: data_MSA[i]["pub_time"], y: data_MSA[i]["i7"]}
        var f8_obj = {label: data_MSA[i]["pub_time"], y: data_MSA[i]["i8"]}
        var moduleTemp_obj = {label: data_MSA[i]["pub_time"], y: data_MSA[i]["MODULETEMP"]}
        var abmtemp_obj = {label: data_MSA[i]["pub_time"], y: data_MSA[i]["MODULETEMP"]}
        var irr_obj = {label: data_MSA[i]["pub_time"], y: data_MSA[i]["MODULETEMP"]}
        var windSpeed_obj = {label: data_MSA[i]["pub_time"], y: data_MSA[i]["MODULETEMP"]}

        // var socbatt_obj = {label: data_MSA[i]["pub_time"], y: data_MSA[i]["percentbatt"]}
 
        feeder1.push(f1_obj)
        feeder2.push(f2_obj)
        feeder3.push(f3_obj)
        feeder4.push(f4_obj)
        feeder5.push(f5_obj)
        feeder6.push(f6_obj)
        feeder7.push(f7_obj)
        feeder8.push(f8_obj)
        moduleTemp.push(moduleTemp_obj)
        abmtemp.push(abmtemp_obj)
        irr.push(irr_obj)
        windSpeed.push(windSpeed_obj)

        // soc_batt.push(socbatt_obj)
    }

    for (var j = 0; j < data_PV.length; j++) {
        var msa_solar_obj = {label: data_PV[j]["pub_time"], y: data_PV[j]["PV_total_power"]}
        MSA_solar.push(msa_solar_obj)
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
        title: "Power (kW)",
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
            name: "Feeder 4",
            showInLegend: true,
            dataPoints: feeder1,
            borderColor: "#3e95cd",
            fill: false
        },
        {
            type: "spline",
            name: "BESS",
            showInLegend: true,
            dataPoints: feeder2,
            borderColor: "#8e5ea2",
            fill: false,
        },
        {
            type: "spline",
            name: "Mea Sa Liang Solar",
            showInLegend: true,
            dataPoints: feeder3,
            borderColor: "#3d444f",
            fill: false,
        },
        {
            type: "spline",
            name: "Incoming",
            showInLegend: true,
            dataPoints: feeder4,
            borderColor: "#bd12b9",
            fill: false,
        },
        {
            type: "spline",
            name: "Feeder 5",
            showInLegend: true,
            dataPoints: feeder5,
            borderColor: "#a151bd",
            fill: false,
        },
        {
            type: "spline",
            name: "Feeder 6",
            showInLegend: true,
            dataPoints: feeder6,
            borderColor: "#9416ef",
            fill: false,
        },
        {
            type: "spline",
            name: "DG",
            showInLegend: true,
            dataPoints: feeder7,
            borderColor: "#117259",
            fill: false,
        },
        {
            type: "spline",
            name: "Feeder 10",
            showInLegend: true,
            dataPoints: feeder8,
            borderColor: "#56cab7",
            fill: false,
        },

        ]
    });

    chart_1.render();

// -------------------------- CANVAS.js --------------------------

    var chart_Test = new CanvasJS.Chart("chartContainerTest", {

    animationEnabled: true,
    exportEnabled: true,
    title: {
        // text: "MSA Control Building Energy Report"
    },
    axisY2: [{
        title: "Solar Radiation [x1000 W/m2]",
        // minimum: 0,
        // maximum: 1000,
        interval: 20,
    }],
    axisY:[{
        title: "Mea Sa Liang Solar [x4 MW]",
        lineColor: "#7F6084",
        titleFontColor: "#7F6084",
        labelFontColor: "#7F6084",
        // minimum: 0,
        // maximum: 1000,
    },
    {
        title: "BEMS Solar Radiation [x10 kW]",
        logarithmic: true,
        // interval: 1,
        // minimum: 0,
        // maximum: 10,
        lineColor: "#86B402",
        titleFontColor: "#86B402",
        labelFontColor: "#86B402",
    }],
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
            showInLegend: true,
            axisYType: "primary",
            axisYIndex: 1, //Defaults to Zero
            name: "Mea Sa Liang Solar",
            xValueFormatString: "####",
            color: "#7F6084",
            dataPoints: feeder3,
            fill: false,
        },
        {
            type: "spline",
            showInLegend: true,
            axisYType: "primary",
            axisYIndex: 2, //Defaults to Zero
            name: "BEMS Solar",
            xValueFormatString: "####",
            color: "#86B402",
            dataPoints: MSA_solar,
            fill: false,
        },
        {
            type: "spline",
            name: "Solar Radiation",
            showInLegend: true,
            axisYType: "secondary",
            dataPoints: irr,
            color: 'orange',
            fill: false,
        },
        ]
    });
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