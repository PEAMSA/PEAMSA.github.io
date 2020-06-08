window.onload = function() {

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
            dataPoints: [
                { y: 51.08, label: "Grid" },
                { y: 27.34, label: "PV" },
                { y: 10.62, label: "Battery" },
                // { y: 5.02, label: "Load" },
                // { y: 4.07, label: "Safari" },
                // { y: 1.22, label: "Opera" },
                // { y: 0.44, label: "Others" }
            ]
        }]
    });
    chart.render();
    
    }