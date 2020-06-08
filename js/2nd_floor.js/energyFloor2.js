// Retrieve data from Firebase -> Outdoor
var ref_indoor = firebase.database().ref().child("peasbhmsr").child("devicetype").child("powermeter");
var ref_kW_Lighting_2 = ref_indoor.child("floor2light")
var ref_kW_Outlet_2 = ref_indoor.child("floor2plug")
var ref_kW_Aircon_2 = ref_indoor.child("floor2air")
var ref_kW_Criticalload = ref_indoor.child("mdb")

ref_kW_Lighting_2.on("value", function(snapshot) {
    console.log("Get kW_Lighting_2 from firebase")
    //  console.log(snapshot.val());
    var kW_Lighting_2 = snapshot.val();
    console.log(kW_Lighting_2);
    // var kW_Lighting_1 = parseInt(kW_Lighting_1)*-1;
    var kW_Lighting_2 = parseFloat(kW_Lighting_2)*-1;
    document.getElementById("kW_Lighting_2").innerHTML = kW_Lighting_2;
    localStorage.setItem("kW_Lighting_2_local", kW_Lighting_2)
  });

ref_kW_Outlet_2.on("value", function(snapshot) {
    console.log("Get kW_Outlet_2 from firebase")
    //  console.log(snapshot.val());
    var kW_Outlet_2 = snapshot.val();
    var kW_Outlet_2 = parseFloat(kW_Outlet_2)*-1;
    // console.log("Temp is " + temp_server);
    document.getElementById("kW_Outlet_2").innerHTML = kW_Outlet_2;
    localStorage.setItem("kW_Outlet_2_local", kW_Outlet_2)
});

ref_kW_Aircon_2.on("value", function(snapshot) {
    console.log("Get kW_Aircon_2 from firebase")
    //  console.log(snapshot.val());
    var kW_Aircon_2 = snapshot.val();
    var kW_Aircon_2 = parseFloat(kW_Aircon_2)*-1;
    // console.log("Temp is " + temp_server);
    document.getElementById("kW_Aircon_2").innerHTML = kW_Aircon_2;
    localStorage.setItem("kW_Aircon_2_local", kW_Aircon_2)
});

ref_kW_Criticalload.on("value", function(snapshot) {
    console.log("Get kW_Criticalload from firebase")
    //  console.log(snapshot.val());
    var kW_Criticalload = snapshot.val();
    var kW_Criticalload = parseFloat(kW_Criticalload)*-1;
    // console.log("Temp is " + temp_server);
    document.getElementById("kW_Criticalload").innerHTML = kW_Criticalload;
    localStorage.setItem("kW_Criticalload_local", kW_Criticalload)
});


// var cal_kW_Lighting_1_local = document.getElementById("kW_Lighting_1_local");
var cal_kW_Lighting_2_local= parseFloat(localStorage.getItem("kW_Lighting_2_local"));
var cal_kW_Outlet_2_local = parseFloat(localStorage.getItem("kW_Outlet_2_local"));
var cal_kW_Aircon_2_local = parseFloat(localStorage.getItem("kW_Aircon_2_local"));
var cal_kW_Criticalload_local = parseFloat(localStorage.getItem("kW_Criticalload_local"));
var total_load_floor2 = cal_kW_Lighting_2_local + cal_kW_Outlet_2_local + cal_kW_Aircon_2_local+cal_kW_Criticalload_local


document.getElementById("Floor2_Total_Load").innerHTML = (total_load_floor2);
