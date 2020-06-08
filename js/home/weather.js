// Retrieve data from Firebase
var ref_indoor = firebase.database().ref().child("peasbhmsr").child("devicetype").child("weatherstation");
var ref_moduletemp = ref_indoor.child("MODULETEMP")
var ref_ambienttemp = ref_indoor.child("AMBIENTTEMP")
var ref_irradiance = ref_indoor.child("IRRADIANCE")
var ref_windspeed = ref_indoor.child("WINDSPEED");

ref_moduletemp.on("value", function(snapshot) {
    console.log("Get moduletemp from firebase")
    //  console.log(snapshot.val());
    var moduletemp = snapshot.val();
    // console.log("Temp is " + temp_server);
    document.getElementById("moduletemp").innerHTML = moduletemp;
    var moduletemp_local = localStorage.setItem("moduletemp", moduletemp)
  });

ref_kW_Outlet_2.on("value", function(snapshot) {
    console.log("Get kW_Outlet_2 from firebase")
    //  console.log(snapshot.val());
    var kW_Outlet_2 = snapshot.val();
    // console.log("Temp is " + temp_server);
    document.getElementById("kW_Outlet_2").innerHTML = kW_Outlet_2;
    var kW_Outlet_2_local = localStorage.setItem("kW_Outlet_2", kW_Outlet_2)
});

ref_kW_Aircon_2.on("value", function(snapshot) {
    console.log("Get kW_Aircon_2 from firebase")
    //  console.log(snapshot.val());
    var kW_Aircon_2 = snapshot.val();
    // console.log("Temp is " + temp_server);
    document.getElementById("kW_Aircon_2").innerHTML = kW_Aircon_2;
    var kW_Aircon_2_local = localStorage.setItem("kW_Aircon_2", kW_Aircon_2)
});

ref_kW_CriLoad.on("value", function(snapshot) {
    console.log("Get kW_EO from firebase")
    //  console.log(snapshot.val());
    var CriLoad = snapshot.val();
    // console.log("Temp is " + temp_server);
    document.getElementById("CriLoad").innerHTML = CriLoad;
    var CriLoad_local = localStorage.setItem("CriLoad", CriLoad)
});

var cal_kW_Lighting_2 = parseInt(localStorage.getItem("kW_Lighting_2"));
var cal_kW_Outlet_2 = parseInt(localStorage.getItem("kW_Outlet_2"));
var cal_kW_Aircon_2 = parseInt(localStorage.getItem("kW_Aircon_2"));
var CriLoad = parseInt(localStorage.getItem("CriLoad"));
var total_load_floor2 = cal_kW_Lighting_2 + cal_kW_Outlet_2 + cal_kW_Aircon_2 + CriLoad

document.getElementById("Floor2_Total_Load").innerHTML = (total_load_floor2);
