// Retrieve data from Firebase -> Outdoor
var ref_indoor = firebase.database().ref().child("peasbhmsr").child("devicetype").child("powermeter");
var ref_kW_Lighting_1 = ref_indoor.child("floor1light")
var ref_kW_Outlet_1 = ref_indoor.child("floor1plug")
var ref_kW_Aircon_1 = ref_indoor.child("floor1air")

ref_kW_Lighting_1.on("value", function(snapshot) {
    console.log("Get kW_Lighting_1 from firebase")
    //  console.log(snapshot.val());
    var kW_Lighting_1 = snapshot.val();
    console.log(kW_Lighting_1);
    // var kW_Lighting_1 = parseInt(kW_Lighting_1)*-1;
    var kW_Lighting_1 = parseFloat(kW_Lighting_1)*-1;
    document.getElementById("kW_Lighting_1").innerHTML = kW_Lighting_1;
    localStorage.setItem("kW_Lighting_1_local", kW_Lighting_1)
  });

ref_kW_Outlet_1.on("value", function(snapshot) {
    console.log("Get kW_Outlet_1 from firebase")
    //  console.log(snapshot.val());
    var kW_Outlet_1 = snapshot.val();
    var kW_Outlet_1 = parseFloat(kW_Outlet_1)*-1;
    // console.log("Temp is " + temp_server);
    document.getElementById("kW_Outlet_1").innerHTML = kW_Outlet_1;
    localStorage.setItem("kW_Outlet_1_local", kW_Outlet_1)
});

ref_kW_Aircon_1.on("value", function(snapshot) {
    console.log("Get kW_Aircon_1 from firebase")
    //  console.log(snapshot.val());
    var kW_Aircon_1 = snapshot.val();
    var kW_Aircon_1 = parseFloat(kW_Aircon_1)*-1;
    // console.log("Temp is " + temp_server);
    document.getElementById("kW_Aircon_1").innerHTML = kW_Aircon_1;
    localStorage.setItem("kW_Aircon_1_local", kW_Aircon_1)
});


// var cal_kW_Lighting_1_local = document.getElementById("kW_Lighting_1_local");
var cal_kW_Lighting_1_local= parseFloat(localStorage.getItem("kW_Lighting_1_local"));
var cal_kW_Outlet_1_local = parseFloat(localStorage.getItem("kW_Outlet_1_local"));
var cal_kW_Aircon_1_local = parseFloat(localStorage.getItem("kW_Aircon_1_local"));
var total_load_floor1 = cal_kW_Lighting_1_local + cal_kW_Outlet_1_local + cal_kW_Aircon_1_local


document.getElementById("Floor1_Total_Load").innerHTML = (total_load_floor1);

// Sync Scene status from firebase
var ref_scene_fl1 = firebase.database().ref().child("peasbhmsr").child("scene")
var ref_auditorium = ref_scene_fl1.child("auditorium").child("scene_name")
var ref_eo_room = ref_scene_fl1.child("eo_room").child("scene_name")
var ref_hallway_fl1 = ref_scene_fl1.child("hallway_fl1").child("scene_name")

ref_auditorium.on("value", function(snapshot) {
    console.log("Get ref_auditorium from firebase")
    var ref_auditorium_status = snapshot.val();
    console.log(ref_auditorium_status);
    switch(ref_auditorium_status) {
        case "welcome":
            document.getElementById('con').style.backgroundColor = "#fca3b5"
            break;

        case "meeting":
            document.getElementById('con').style.backgroundColor = "#ba83c4"
            break;

        case "show battery":
            document.getElementById('con').style.backgroundColor = "#fcf3b5"
            break;

        case "goodbye":
            document.getElementById('con').style.backgroundColor = "#b1d1ed"
            break;
    }
  });

  ref_eo_room.on("value", function(snapshot) {
    console.log("Get ref_eo_room from firebase")
    var ref_eo_room_status = snapshot.val();
    console.log(ref_eo_room_status);
    switch(ref_eo_room_status) {
        case "automatic":
            document.getElementById('eo').style.backgroundColor = "#fcf3b5"
            break;

        case "welcome":
            document.getElementById('eo').style.backgroundColor = "#fca3b5"
            break;

        case "goodbye":
            document.getElementById('eo').style.backgroundColor = "#b1d1ed"
            break;
    }
  });

  ref_hallway_fl1.on("value", function(snapshot) {
    console.log("Get ref_hallway_fl1 from firebase")
    var ref_hallway_fl1_status = snapshot.val();
    console.log(ref_hallway_fl1_status);
    switch(ref_hallway_fl1_status) {
        case "automatic":
            document.getElementById('hy1').style.backgroundColor = "#fcf3b5"
            break;

        case "welcome":
            document.getElementById('hy1').style.backgroundColor = "#fca3b5"
            break;

        case "goodbye":
            document.getElementById('hy1').style.backgroundColor = "#b1d1ed"
            break;
    }
  });
