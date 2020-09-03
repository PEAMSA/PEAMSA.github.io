// Retrieve data from Firebase -> Outdoor
var ref_indoor = firebase.database().ref().child("peasbhmsr").child("devicetype").child("powermeter");
var ref_kW_Lighting_2 = ref_indoor.child("floor2light")
var ref_kW_Outlet_2 = ref_indoor.child("floor2plug")
var ref_kW_Aircon_2 = ref_indoor.child("floor2air")
var ref_kW_Criticalload = firebase.database().ref().child("peasbhmsr").child("devicetype").child("inverter").child("IN202001").child("load_act_P");

ref_kW_Lighting_2.on("value", function(snapshot) {
    console.log("Get kW_Lighting_2 from firebase")
    //  console.log(snapshot.val());
    var kW_Lighting_2 = snapshot.val();
    console.log(kW_Lighting_2);
    // var kW_Lighting_1 = parseInt(kW_Lighting_1)*-1;
    var kW_Lighting_2 = parseFloat(kW_Lighting_2);
    document.getElementById("kW_Lighting_2").innerHTML = kW_Lighting_2;
    localStorage.setItem("kW_Lighting_2_local", kW_Lighting_2)
  });

ref_kW_Outlet_2.on("value", function(snapshot) {
    console.log("Get kW_Outlet_2 from firebase")
    //  console.log(snapshot.val());
    var kW_Outlet_2 = snapshot.val();
    var kW_Outlet_2 = parseFloat(kW_Outlet_2);
    // console.log("Temp is " + temp_server);
    document.getElementById("kW_Outlet_2").innerHTML = kW_Outlet_2;
    localStorage.setItem("kW_Outlet_2_local", kW_Outlet_2)
});

ref_kW_Aircon_2.on("value", function(snapshot) {
    console.log("Get kW_Aircon_2 from firebase")
    //  console.log(snapshot.val());
    var kW_Aircon_2 = snapshot.val();
    var kW_Aircon_2 = parseFloat(kW_Aircon_2);
    // console.log("Temp is " + temp_server);
    document.getElementById("kW_Aircon_2").innerHTML = kW_Aircon_2;
    localStorage.setItem("kW_Aircon_2_local", kW_Aircon_2)
});

ref_kW_Criticalload.on("value", function(snapshot) {
    console.log("Get kW_Criticalload from firebase")
    //  console.log(snapshot.val());
    var kW_Criticalload = snapshot.val();
    var kW_Criticalload = parseFloat(kW_Criticalload);
    // console.log("Temp is " + temp_server);

    if (kW_Criticalload == "") {
        console.log("kW_Criticalload = " + kW_Criticalload)
        kW_Criticalload = 0;
        document.getElementById("kW_Criticalload").innerHTML = kW_Criticalload;
        localStorage.setItem("kW_Criticalload_local", kW_Criticalload)
    } else {
        console.log("kW_Criticalload = " + kW_Criticalload)
        document.getElementById("kW_Criticalload").innerHTML = kW_Criticalload;
        localStorage.setItem("kW_Criticalload_local", kW_Criticalload)    
    }
});


// var cal_kW_Lighting_1_local = document.getElementById("kW_Lighting_1_local");
var cal_kW_Lighting_2_local= parseFloat(localStorage.getItem("kW_Lighting_2_local"));
var cal_kW_Outlet_2_local = parseFloat(localStorage.getItem("kW_Outlet_2_local"));
var cal_kW_Aircon_2_local = parseFloat(localStorage.getItem("kW_Aircon_2_local"));
var cal_kW_Criticalload_local = parseFloat(localStorage.getItem("kW_Criticalload_local"));
var total_load_floor2 = cal_kW_Lighting_2_local + cal_kW_Outlet_2_local + cal_kW_Aircon_2_local+cal_kW_Criticalload_local


document.getElementById("Floor2_Total_Load").innerHTML = (total_load_floor2);

// Sync Scene status from firebase
var ref_scene_fl2 = firebase.database().ref().child("peasbhmsr").child("scene")
var ref_server_room = ref_scene_fl2.child("mgc").child("scene_name")
var ref_hallway_fl2 = ref_scene_fl2.child("hallway_fl2").child("scene_name")
var ref_office_1 = ref_scene_fl2.child("office1").child("scene_name")
var ref_office_2 = ref_scene_fl2.child("office2").child("scene_name")

ref_office_1.on("value", function(snapshot) {
    console.log("Get ref_office_1 from firebase")
    var ref_office_1_status = snapshot.val();
    console.log(ref_office_1_status);
    switch(ref_office_1_status) {
        case "welcome":
            document.getElementById('or1').style.backgroundColor = "#fca3b5"
            break;

        case "meeting":
            document.getElementById('or1').style.backgroundColor = "#ba83c4"
            break;

        case "show battery":
            document.getElementById('or1').style.backgroundColor = "#fcf3b5"
            break;

        case "goodbye":
            document.getElementById('or1').style.backgroundColor = "#b1d1ed"
            break;
    }
  });

  ref_office_2.on("value", function(snapshot) {
    console.log("Get ref_office_2 from firebase")
    var ref_office_2_status = snapshot.val();
    console.log(ref_office_2_status);
    switch(ref_office_2_status) {
        case "welcome":
            document.getElementById('or2').style.backgroundColor = "#fca3b5"
            break;

        case "meeting":
            document.getElementById('or2').style.backgroundColor = "#ba83c4"
            break;

        case "show battery":
            document.getElementById('or2').style.backgroundColor = "#fcf3b5"
            break;

        case "goodbye":
            document.getElementById('or2').style.backgroundColor = "#b1d1ed"
            break;
    }
  });


  ref_server_room.on("value", function(snapshot) {
    console.log("Get ref_server_room from firebase")
    var ref_server_room_status = snapshot.val();
    console.log(ref_server_room_status);
    switch(ref_server_room_status) {
        case "automatic":
            document.getElementById('mc').style.backgroundColor = "#fcf3b5"
            break;

        case "welcome":
            document.getElementById('mc').style.backgroundColor = "#fca3b5"
            break;

        case "goodbye":
            document.getElementById('mc').style.backgroundColor = "#b1d1ed"
            break;
    }
  });

  ref_hallway_fl2.on("value", function(snapshot) {
    console.log("Get ref_hallway_fl2 from firebase ")
    console.log("cxxxxxxxxxxxxxz")
    var ref_hallway_fl2_status = snapshot.val();
    console.log(ref_hallway_fl2_status);
    switch(ref_hallway_fl2_status) {
        case "automatic":
            document.getElementById('hy2').style.backgroundColor = "#fcf3b5"
            break;

        case "welcome":
            document.getElementById('hy2').style.backgroundColor = "#fca3b5"
            break;

        case "goodbye":
            document.getElementById('hy2').style.backgroundColor = "#b1d1ed"
            break;
    }
  });
