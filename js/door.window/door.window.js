var ref_devices_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("openclosed");
var ref_devices_data2 = firebase.database().ref().child("peasbhmsr").child("devicetype").child("smoke");

// Floor 1 Left Part Start

// Retrieve data from Firebase for Checking Device Status
// Floor 1 EO Room
// Sensor # WS103001_15
var ref_open_closed_1 = ref_devices_data.child("WS103001");

ref_open_closed_1.on("value", function(snapshot) {
  console.log("Get open_closed_1 from firebase")
  var open_closed_1 = snapshot.val();
  console.log(open_closed_1)
  // document.getElementById("status_1").innerHTML = open_closed_1["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_1 = open_closed_1["STATUS"];
  // console.log(Status_open_closed_1);
   openclosed1_changeImage(Status_open_closed_1)
  // var Status_open_closed_1_Local = localStorage.setItem("Status_open_closed_1_Local", Status_open_closed_1)
});

// Change Image for Open Closed
function openclosed1_changeImage(Status_open_closed_1) {
  var image = document.getElementById('WS103001_15');
  if (Status_open_closed_1 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 1 EO Room
// Sensor # WS103002_16
var ref_open_closed_2 = ref_devices_data.child("WS103002");

ref_open_closed_2.on("value", function(snapshot) {
  console.log("Get open_closed_2 from firebase")
  var open_closed_2 = snapshot.val();
  // console.log(open_closed_2)
  // document.getElementById("status_2").innerHTML = open_closed_2["STATUS"];
  // Recheck Device Status from Firebase //
   var Status_open_closed_2 = open_closed_2["STATUS"];
  // console.log(Status_open_closed_2);
   openclosed2_changeImage(Status_open_closed_2)
  // var Status_open_closed_2_Local = localStorage.setItem("Status_open_closed_2_Local", Status_open_closed_2)
});

// Change Image for Open Closed
function openclosed2_changeImage(Status_open_closed_2) {
  var image = document.getElementById('WS103002_16');
  if (Status_open_closed_2 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 1 EO Room
// Sensor # DS103001_1
var ref_open_closed_3 = ref_devices_data.child("DS103001");

ref_open_closed_3.on("value", function(snapshot) {
  console.log("Get open_closed_3 from firebase")
  var open_closed_3 = snapshot.val();
  // console.log(open_closed_3)
  // document.getElementById("status_3").innerHTML = open_closed_3["STATUS"];
  // Recheck Device Status from Firebase //
   var Status_open_closed_3 = open_closed_3["STATUS"];
  // console.log(Status_open_closed_3);
   openclosed3_changeImage(Status_open_closed_3)
  // var Status_open_closed_3_Local = localStorage.setItem("Status_open_closed_3_Local", Status_open_closed_3)
});

// Change Image for Open Closed
function openclosed3_changeImage(Status_open_closed_3) {
  var image = document.getElementById('DS103001_1');
  if (Status_open_closed_3 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 1 Employee Bedroom
// Smoke # SD104001_3
var ref_smoke_detected_1 = ref_devices_data2.child("SD104001");

ref_smoke_detected_1.on("value", function(snapshot) {
  console.log("Get smoke_detected_1 from firebase")
  var smoke_detected_1 = snapshot.val();
  // console.log(smoke_detected_)
  // document.getElementById("status_smoke_1").innerHTML = smoke_detected_1[""];
  // Recheck Device Status from Firebase //
   var Status_smoke_detected_1 = smoke_detected_1["SMOKE"];
   var Status_co_detected_1 = smoke_detected_1["CO"];
  // console.log(Status_smoke_detected_1);
   smokedetected1_changeImage(Status_smoke_detected_1, Status_co_detected_1)
  // var Status_smoke_detected_1_Local = localStorage.setItem("Status_open_closed_3_Local", Status_open_closed_3)
});

// Change Image for Smoke Detected
function smokedetected1_changeImage(Status_smoke_detected_1,Status_co_detected_1) {
  var image = document.getElementById('SD104001_3');
  if ((Status_smoke_detected_1 == "CLEAR") && (Status_co_detected_1 == "CLEAR")) {
      image.src = "images/smokeclear.jpg";
  } 
  else if ((Status_smoke_detected_1 == "DETECTED") && (Status_co_detected_1 == "CLEAR")) {
    image.src = "images/smokedetected.jpg";
}
 else if ((Status_smoke_detected_1 == "CLEAR") && (Status_co_detected_1 == "DETECTED")) {
  image.src = "images/codetected.jpg";
}
  else {
      image.src = "images/smokedetected.jpg";
  }
}


// Retrieve data from Firebase for Checking Device Status
// Floor 1 Employee Bedroom
// Sensor # WS104001_21
var ref_open_closed_4 = ref_devices_data.child("WS104001");

ref_open_closed_4.on("value", function(snapshot) {
  console.log("Get open_closed_4 from firebase")
  var open_closed_4 = snapshot.val();
  // console.log(open_closed_4)
  // document.getElementById("status_4").innerHTML = open_closed_4["STATUS"];
  // Recheck Device Status from Firebase //
   var Status_open_closed_4 = open_closed_4["STATUS"];
  // console.log(Status_open_closed_4);
   openclosed4_changeImage(Status_open_closed_4)
  // var Status_open_closed_4_Local = localStorage.setItem("Status_open_closed_4_Local", Status_open_closed_4)
});

// Change Image for Open Closed
function openclosed4_changeImage(Status_open_closed_4) {
  var image = document.getElementById('WS104001_21');
  if (Status_open_closed_4 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 1 Employee Bedroom
// Sensor # WS104002_22
var ref_open_closed_5 = ref_devices_data.child("WS104002");

ref_open_closed_5.on("value", function(snapshot) {
  console.log("Get open_closed_5 from firebase")
  var open_closed_5 = snapshot.val();
  // console.log(open_closed_5)
  // document.getElementById("status_5").innerHTML = open_closed_5["STATUS"];
  // Recheck Device Status from Firebase //
   var Status_open_closed_5 = open_closed_5["STATUS"];
  // console.log(Status_open_closed_5);
   openclosed5_changeImage(Status_open_closed_5)
  // var Status_open_closed_5_Local = localStorage.setItem("Status_open_closed_5_Local", Status_open_closed_5)
});

// Change Image for Open Closed
function openclosed5_changeImage(Status_open_closed_5) {
  var image = document.getElementById('WS104002_22');
  if (Status_open_closed_5 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 1 EO Room
// Smoke # SD103001_2
var ref_smoke_detected_2 = ref_devices_data2.child("SD103001");

ref_smoke_detected_2.on("value", function(snapshot) {
  console.log("Get smoke_detected_2 from firebase")
  var smoke_detected_2 = snapshot.val();
  // console.log(smoke_detected_2)
  // document.getElementById("status_smoke_2").innerHTML = smoke_detected_2[""];
  // Recheck Device Status from Firebase //
   var Status_smoke_detected_2 = smoke_detected_2["SMOKE"];
   var Status_co_detected_2 = smoke_detected_2["CO"];
  // console.log(Status_smoke_detected_2);
   smokedetected2_changeImage(Status_smoke_detected_2,Status_co_detected_2)
     // var Status_smoke_detected_2_Local = localStorage.setItem("Status_smoke_detected_2_Local", Status_smoke_detected_3)
});

// Change Image for Smoke Detected
function smokedetected2_changeImage(Status_smoke_detected_2,Status_co_detected_2) {
  var image = document.getElementById('SD103001_2');
  if ((Status_smoke_detected_2 == "CLEAR") && (Status_co_detected_2 == "CLEAR")) {
      image.src = "images/smokeclear.jpg";
  } else if ((Status_smoke_detected_2 == "DETECTED") && (Status_co_detected_2 == "CLEAR")) {
      image.src = "images/smokedetected.jpg";
  }
    else if ((Status_smoke_detected_2 == "CLEAR") && (Status_co_detected_2 == "DETECTED")) {
      image.src = "images/codetected.jpg";
  }
    else {
        image.src = "images/smokedetected.jpg";
  }    
}

// Retrieve data from Firebase for Checking Device Status
// Floor 1 EO Room
// Sensor # DS103002_2
var ref_open_closed_6 = ref_devices_data.child("DS103002");

ref_open_closed_6.on("value", function(snapshot) {
  console.log("Get open_closed_6 from firebase")
  var open_closed_6 = snapshot.val();
  // console.log(open_closed_6)
  // document.getElementById("status_6").innerHTML = open_closed_6["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_6 = open_closed_6["STATUS"];
  // console.log(Status_open_closed_6);
   openclosed6_changeImage(Status_open_closed_6)
  // var Status_open_closed_6_Local = localStorage.setItem("Status_open_closed_6_Local", Status_open_closed_6)
});

// Change Image for Open Closed
function openclosed6_changeImage(Status_open_closed_6) {
  var image = document.getElementById('DS103002_2');
  if (Status_open_closed_6 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 1 Hallway1
// Sensor # DS109001_3
var ref_open_closed_7 = ref_devices_data.child("DS109001");

ref_open_closed_7.on("value", function(snapshot) {
  console.log("Get open_closed_7 from firebase")
  var open_closed_7 = snapshot.val();
  // console.log(open_closed_7)
  // document.getElementById("status_7").innerHTML = open_closed_7["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_7 = open_closed_7["STATUS"];
  // console.log(Status_open_closed_7);
   openclosed7_changeImage(Status_open_closed_7)
  // var Status_open_closed_7_Local = localStorage.setItem("Status_open_closed_7_Local", Status_open_closed_7)
});

// Change Image for Open Closed
function openclosed7_changeImage(Status_open_closed_7) {
  var image = document.getElementById('DS109001_3');
  if (Status_open_closed_7 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 1 EO Room
// Sensor # WS103003_17
var ref_open_closed_8 = ref_devices_data.child("WS103003");

ref_open_closed_8.on("value", function(snapshot) {
  console.log("Get open_closed_8 from firebase")
  var open_closed_8 = snapshot.val();
  // console.log(open_closed_8)
  // document.getElementById("status_8").innerHTML = open_closed_8["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_8 = open_closed_8["STATUS"];
  // console.log(Status_open_closed_8);
   openclosed8_changeImage(Status_open_closed_8)
  // var Status_open_closed_8_Local = localStorage.setItem("Status_open_closed_8_Local", Status_open_closed_8)
});

// Change Image for Open Closed
function openclosed8_changeImage(Status_open_closed_8) {
  var image = document.getElementById('WS103003_17');
  if (Status_open_closed_8 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 1 Hallway1
// Sensor # WS109001_24
var ref_open_closed_9 = ref_devices_data.child("WS109001");

ref_open_closed_9.on("value", function(snapshot) {
  console.log("Get open_closed_9 from firebase")
  var open_closed_9 = snapshot.val();
  // console.log(open_closed_9)
  // document.getElementById("status_9").innerHTML = open_closed_9["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_9 = open_closed_9["STATUS"];
  // console.log(Status_open_closed_9);
   openclosed9_changeImage(Status_open_closed_9)
  // var Status_open_closed_9_Local = localStorage.setItem("Status_open_closed_9_Local", Status_open_closed_9)
});

// Change Image for Open Closed
function openclosed9_changeImage(Status_open_closed_9) {
  var image = document.getElementById('WS109001_24');
  if (Status_open_closed_9 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 1 Conference Room
// Sensor # DS101001_5
var ref_open_closed_10 = ref_devices_data.child("DS101001");

ref_open_closed_10.on("value", function(snapshot) {
  console.log("Get open_closed_10 from firebase")
  var open_closed_10 = snapshot.val();
  // console.log(open_closed_10)
  // document.getElementById("status_10").innerHTML = open_closed_10["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_10 = open_closed_10["STATUS"];
  // console.log(Status_open_closed_10);
   openclosed10_changeImage(Status_open_closed_10)
  // var Status_open_closed_10_Local = localStorage.setItem("Status_open_closed_10_Local", Status_open_closed_10)
});

// Change Image for Open Closed
function openclosed10_changeImage(Status_open_closed_10) {
  var image = document.getElementById('DS101001_5');
  if (Status_open_closed_10 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 1 Hallway1
// Sensor # WS109002_25
var ref_open_closed_11 = ref_devices_data.child("WS109002");

ref_open_closed_11.on("value", function(snapshot) {
  console.log("Get open_closed_11 from firebase")
  var open_closed_11 = snapshot.val();
  // console.log(open_closed_11)
  // document.getElementById("status_11").innerHTML = open_closed_11["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_11 = open_closed_11["STATUS"];
  // console.log(Status_open_closed_11);
   openclosed11_changeImage(Status_open_closed_11)
  // var Status_open_closed_11_Local = localStorage.setItem("Status_open_closed_11_Local", Status_open_closed_11)
});

// Change Image for Open Closed
function openclosed11_changeImage(Status_open_closed_11) {
  var image = document.getElementById('WS109002_25');
  if (Status_open_closed_11 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 1 Employee Bedroom
// Sensor # DS104001_6
var ref_open_closed_12 = ref_devices_data.child("DS104001");

ref_open_closed_12.on("value", function(snapshot) {
  console.log("Get open_closed_12 from firebase")
  var open_closed_12 = snapshot.val();
  // console.log(open_closed_12)
  // document.getElementById("status_12").innerHTML = open_closed_12["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_12 = open_closed_12["STATUS"];
  // console.log(Status_open_closed_12);
   openclosed12_changeImage(Status_open_closed_12)
  // var Status_open_closed_12_Local = localStorage.setItem("Status_open_closed_12_Local", Status_open_closed_12)
});

// Change Image for Open Closed
function openclosed12_changeImage(Status_open_closed_12) {
  var image = document.getElementById('DS104001_6');
  if (Status_open_closed_12 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 1 Hallway1
// Sensor # DS109002_4
var ref_open_closed_13 = ref_devices_data.child("DS109002");

ref_open_closed_13.on("value", function(snapshot) {
  console.log("Get open_closed_13 from firebase")
  var open_closed_13 = snapshot.val();
  // console.log(open_closed_13)
  // document.getElementById("status_13").innerHTML = open_closed_13["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_13 = open_closed_13["STATUS"];
  // console.log(Status_open_closed_13);
   openclosed13_changeImage(Status_open_closed_13)
  // var Status_open_closed_13_Local = localStorage.setItem("Status_open_closed_13_Local", Status_open_closed_13)
});

// Change Image for Open Closed
function openclosed13_changeImage(Status_open_closed_13) {
  var image = document.getElementById('DS109002_4');
  if (Status_open_closed_13 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 1 Hallway1
// Sensor # WS104003_23
var ref_open_closed_14 = ref_devices_data.child("WS104003");

ref_open_closed_14.on("value", function(snapshot) {
  console.log("Get open_closed_14 from firebase")
  var open_closed_14 = snapshot.val();
  // console.log(open_closed_14)
  // document.getElementById("status_14").innerHTML = open_closed_14["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_14 = open_closed_14["STATUS"];
  // console.log(Status_open_closed_14);
   openclosed14_changeImage(Status_open_closed_14)
  // var Status_open_closed_14_Local = localStorage.setItem("Status_open_closed_14_Local", Status_open_closed_14)
});

// Change Image for Open Closed
function openclosed14_changeImage(Status_open_closed_14) {
  var image = document.getElementById('WS104003_23');
  if (Status_open_closed_14 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}
// Floor 1 Left Part End

// Floor 1 Right Part Start

// Retrieve data from Firebase for Checking Device Status
// Floor 1 Conference Room
// Smoke # SD101002_7
var ref_smoke_detected_7 = ref_devices_data2.child("SD101002");

ref_smoke_detected_7.on("value", function(snapshot) {
  console.log("Get smoke_detected_7 from firebase")
  var smoke_detected_7 = snapshot.val();
  // console.log(smoke_detected_7)
  // document.getElementById("status_smoke_7").innerHTML = smoke_detected_7[""];
  // Recheck Device Status from Firebase //
   var Status_smoke_detected_7 = smoke_detected_7["SMOKE"];
   var Status_co_detected_7 = smoke_detected_7["CO"];
  // console.log(Status_smoke_detected_7);
   smokedetected7_changeImage(Status_smoke_detected_7,Status_co_detected_7)
     // var Status_smoke_detected_7_Local = localStorage.setItem("Status_smoke_detected_7_Local", Status_smoke_detected_7)
});

// Change Image for Smoke Detected
function smokedetected7_changeImage(Status_smoke_detected_7,Status_co_detected_7) {
  var image = document.getElementById('SD101002_7');
  if ((Status_smoke_detected_7 == "CLEAR") && (Status_co_detected_7 == "CLEAR")) {
      image.src = "images/smokeclear.jpg";
  } else if ((Status_smoke_detected_7 == "DETECTED") && (Status_co_detected_7 == "CLEAR")) {
      image.src = "images/smokedetected.jpg";
  }
    else if ((Status_smoke_detected_7 == "CLEAR") && (Status_co_detected_7 == "DETECTED")) {
      image.src = "images/codetected.jpg";
  }
    else {
        image.src = "images/smokedetected.jpg";
  }    
}

// Retrieve data from Firebase for Checking Device Status
// Floor 1 Conference Room
// Smoke # SD101001_1
var ref_smoke_detected_3 = ref_devices_data2.child("SD101001");

ref_smoke_detected_3.on("value", function(snapshot) {
  console.log("Get smoke_detected_3 from firebase")
  var smoke_detected_3 = snapshot.val();
  // console.log(smoke_detected_3)
  // document.getElementById("status_smoke_3").innerHTML = smoke_detected_3[""];
  // Recheck Device Status from Firebase //
   var Status_smoke_detected_3 = smoke_detected_3["SMOKE"];
   var Status_co_detected_3 = smoke_detected_3["CO"];
  // console.log(Status_smoke_detected_3);
   smokedetected3_changeImage(Status_smoke_detected_3,Status_co_detected_3)
     // var Status_smoke_detected_3_Local = localStorage.setItem("Status_smoke_detected_3_Local", Status_smoke_detected_3)
});

// Change Image for Smoke Detected
function smokedetected3_changeImage(Status_smoke_detected_3,Status_co_detected_3) {
  var image = document.getElementById('SD101001_1');
  if ((Status_smoke_detected_3 == "CLEAR") && (Status_co_detected_3 == "CLEAR")) {
      image.src = "images/smokeclear.jpg";
  } else if ((Status_smoke_detected_3 == "DETECTED") && (Status_co_detected_3 == "CLEAR")) {
      image.src = "images/smokedetected.jpg";
  }
    else if ((Status_smoke_detected_3 == "CLEAR") && (Status_co_detected_3 == "DETECTED")) {
      image.src = "images/codetected.jpg";
  }
    else {
        image.src = "images/smokedetected.jpg";
  }    
}

// Retrieve data from Firebase for Checking Device Status
// Floor 1 Conference Room
// Sensor # WS101001_18
var ref_open_closed_15 = ref_devices_data.child("WS101001");

ref_open_closed_15.on("value", function(snapshot) {
  console.log("Get open_closed_15 from firebase")
  var open_closed_15 = snapshot.val();
  // console.log(open_closed_15)
  // document.getElementById("status_15").innerHTML = open_closed_15["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_15 = open_closed_15["STATUS"];
  // console.log(Status_open_closed_15);
   openclosed15_changeImage(Status_open_closed_15)
  // var Status_open_closed_15_Local = localStorage.setItem("Status_open_closed_15_Local", Status_open_closed_15)
});

// Change Image for Open Closed
function openclosed15_changeImage(Status_open_closed_15) {
  var image = document.getElementById('WS101001_18');
  if (Status_open_closed_15 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 1 Conference Room
// Sensor # WS101002_19
var ref_open_closed_16 = ref_devices_data.child("WS101002");

ref_open_closed_16.on("value", function(snapshot) {
  console.log("Get open_closed_16 from firebase")
  var open_closed_16 = snapshot.val();
  // console.log(open_closed_16)
  // document.getElementById("status_16").innerHTML = open_closed_16["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_16 = open_closed_16["STATUS"];
  // console.log(Status_open_closed_16);
   openclosed16_changeImage(Status_open_closed_16)
  // var Status_open_closed_16_Local = localStorage.setItem("Status_open_closed_16_Local", Status_open_closed_16)
});

// Change Image for Open Closed
function openclosed16_changeImage(Status_open_closed_16) {
  var image = document.getElementById('WS101002_19');
  if (Status_open_closed_16 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 1 Conference Room
// Sensor # WS101003_20
var ref_open_closed_17 = ref_devices_data.child("WS101003");

ref_open_closed_17.on("value", function(snapshot) {
  console.log("Get open_closed_17 from firebase")
  var open_closed_17 = snapshot.val();
  // console.log(open_closed_17)
  // document.getElementById("status_17").innerHTML = open_closed_17["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_17 = open_closed_17["STATUS"];
  // console.log(Status_open_closed_17);
   openclosed17_changeImage(Status_open_closed_17)
  // var Status_open_closed_17_Local = localStorage.setItem("Status_open_closed_17_Local", Status_open_closed_17)
});

// Change Image for Open Closed
function openclosed17_changeImage(Status_open_closed_17) {
  var image = document.getElementById('WS101003_20');
  if (Status_open_closed_17 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}
//Floor 1 Right Part End

// Floor 2 Left Part Start

// Retrieve data from Firebase for Checking Device Status
// Floor 2 Office 1
// Sensor # WS201001_26
var ref_open_closed_18 = ref_devices_data.child("WS201001");

ref_open_closed_18.on("value", function(snapshot) {
  console.log("Get open_closed_18 from firebase")
  var open_closed_18 = snapshot.val();
  // console.log(open_closed_18)
  // document.getElementById("status_18").innerHTML = open_closed_18["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_18 = open_closed_18["STATUS"];
  // console.log(Status_open_closed_18);
   openclosed18_changeImage(Status_open_closed_18)
  // var Status_open_closed_18_Local = localStorage.setItem("Status_open_closed_18_Local", Status_open_closed_18)
});

// Change Image for Open Closed
function openclosed18_changeImage(Status_open_closed_18) {
  var image = document.getElementById('WS201001_26');
  if (Status_open_closed_18 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 2 Office 1
// Sensor # DS205001_13
var ref_open_closed_19 = ref_devices_data.child("DS205001");

ref_open_closed_19.on("value", function(snapshot) {
  console.log("Get open_closed_19 from firebase")
  var open_closed_19 = snapshot.val();
  // console.log(open_closed_19)
  // document.getElementById("status_19").innerHTML = open_closed_19["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_19 = open_closed_19["STATUS"];
  // console.log(Status_open_closed_19);
   openclosed19_changeImage(Status_open_closed_19)
  // var Status_open_closed_19_Local = localStorage.setItem("Status_open_closed_19_Local", Status_open_closed_19)
});

// Change Image for Open Closed
function openclosed19_changeImage(Status_open_closed_19) {
  var image = document.getElementById('DS205001_13');
  if (Status_open_closed_19 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 2 Office 1
// Sensor # DS201001_7
var ref_open_closed_20 = ref_devices_data.child("DS201001");

ref_open_closed_20.on("value", function(snapshot) {
  console.log("Get open_closed_20 from firebase")
  var open_closed_20 = snapshot.val();
  // console.log(open_closed_20)
  // document.getElementById("status_20").innerHTML = open_closed_20["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_20 = open_closed_20["STATUS"];
  // console.log(Status_open_closed_20);
   openclosed20_changeImage(Status_open_closed_20)
  // var Status_open_closed_20_Local = localStorage.setItem("Status_open_closed_20_Local", Status_open_closed_20)
});

// Change Image for Open Closed
function openclosed20_changeImage(Status_open_closed_20) {
  var image = document.getElementById('DS201001_7');
  if (Status_open_closed_20 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 2 MGC Room
// Sensor # DS202001_8
var ref_open_closed_21 = ref_devices_data.child("DS202001");

ref_open_closed_21.on("value", function(snapshot) {
  console.log("Get open_closed_21 from firebase")
  var open_closed_21 = snapshot.val();
  // console.log(open_closed_21)
  // document.getElementById("status_21").innerHTML = open_closed_21["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_21 = open_closed_21["STATUS"];
  // console.log(Status_open_closed_21);
   openclosed21_changeImage(Status_open_closed_21)
  // var Status_open_closed_21_Local = localStorage.setItem("Status_open_closed_21_Local", Status_open_closed_21)
});

// Change Image for Open Closed
function openclosed21_changeImage(Status_open_closed_21) {
  var image = document.getElementById('DS202001_8');
  if (Status_open_closed_21 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 2 Hallway 2
// Sensor # DS206001_14
var ref_open_closed_22 = ref_devices_data.child("DS206001");

ref_open_closed_22.on("value", function(snapshot) {
  console.log("Get open_closed_22 from firebase")
  var open_closed_22 = snapshot.val();
  // console.log(open_closed_22)
  // document.getElementById("status_22").innerHTML = open_closed_22["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_22 = open_closed_22["STATUS"];
  // console.log(Status_open_closed_22);
   openclosed22_changeImage(Status_open_closed_22)
  // var Status_open_closed_22_Local = localStorage.setItem("Status_open_closed_22_Local", Status_open_closed_22)
});

// Change Image for Open Closed
function openclosed22_changeImage(Status_open_closed_22) {
  var image = document.getElementById('DS206001_14');
  if (Status_open_closed_22 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 2 Office 2
// Sensor # DS203001_10
var ref_open_closed_23 = ref_devices_data.child("DS203001");

ref_open_closed_23.on("value", function(snapshot) {
  console.log("Get open_closed_23 from firebase")
  var open_closed_23 = snapshot.val();
  // console.log(open_closed_23)
  // document.getElementById("status_23").innerHTML = open_closed_23["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_23 = open_closed_23["STATUS"];
  // console.log(Status_open_closed_23);
   openclosed23_changeImage(Status_open_closed_23)
  // var Status_open_closed_23_Local = localStorage.setItem("Status_open_closed_23_Local", Status_open_closed_23)
});

// Change Image for Open Closed
function openclosed23_changeImage(Status_open_closed_23) {
  var image = document.getElementById('DS203001_10');
  if (Status_open_closed_23 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Floor 2 Left Part END

// Floor 2 Right Part Start

// Retrieve data from Firebase for Checking Device Status
// Floor 2 Office 1
// Sensor # WS201002_27
var ref_open_closed_24 = ref_devices_data.child("WS201002");

ref_open_closed_24.on("value", function(snapshot) {
  console.log("Get open_closed_24 from firebase")
  var open_closed_24 = snapshot.val();
  // console.log(open_closed_24)
  // document.getElementById("status_24").innerHTML = open_closed_24["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_24 = open_closed_24["STATUS"];
  // console.log(Status_open_closed_24);
   openclosed24_changeImage(Status_open_closed_24)
  // var Status_open_closed_24_Local = localStorage.setItem("Status_open_closed_24_Local", Status_open_closed_24)
});

// Change Image for Open Closed
function openclosed24_changeImage(Status_open_closed_24) {
  var image = document.getElementById('WS201002_27');
  if (Status_open_closed_24 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 2 Office 1
// Sensor # WS201003_28
var ref_open_closed_25 = ref_devices_data.child("WS201003");

ref_open_closed_25.on("value", function(snapshot) {
  console.log("Get open_closed_25 from firebase")
  var open_closed_25 = snapshot.val();
  // console.log(open_closed_25)
  // document.getElementById("status_25").innerHTML = open_closed_25["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_25 = open_closed_25["STATUS"];
  // console.log(Status_open_closed_25);
   openclosed25_changeImage(Status_open_closed_25)
  // var Status_open_closed_25_Local = localStorage.setItem("Status_open_closed_25_Local", Status_open_closed_25)
});

// Change Image for Open Closed
function openclosed25_changeImage(Status_open_closed_25) {
  var image = document.getElementById('WS201003_28');
  if (Status_open_closed_25 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 2 Office 1
// Sensor # WS201004_29
var ref_open_closed_26 = ref_devices_data.child("WS201004");

ref_open_closed_26.on("value", function(snapshot) {
  console.log("Get open_closed_26 from firebase")
  var open_closed_26 = snapshot.val();
  // console.log(open_closed_26)
  // document.getElementById("status_26").innerHTML = open_closed_26["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_26 = open_closed_26["STATUS"];
  // console.log(Status_open_closed_26);
   openclosed26_changeImage(Status_open_closed_26)
  // var Status_open_closed_26_Local = localStorage.setItem("Status_open_closed_26_Local", Status_open_closed_26)
});

// Change Image for Open Closed
function openclosed26_changeImage(Status_open_closed_26) {
  var image = document.getElementById('WS201004_29');
  if (Status_open_closed_26 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 2 Office 1
// Smoke # SD201001_4
var ref_smoke_detected_4 = ref_devices_data2.child("SD201001");

ref_smoke_detected_4.on("value", function(snapshot) {
  console.log("Get smoke_detected_4 from firebase")
  var smoke_detected_4 = snapshot.val();
  // console.log(smoke_detected_4)
  // document.getElementById("status_smoke_4").innerHTML = smoke_detected_4[""];
  // Recheck Device Status from Firebase //
   var Status_smoke_detected_4 = smoke_detected_4["SMOKE"];
   var Status_co_detected_4 = smoke_detected_4["CO"];
  // console.log(Status_smoke_detected_4);
   smokedetected4_changeImage(Status_smoke_detected_4,Status_co_detected_4)
     // var Status_smoke_detected_4_Local = localStorage.setItem("Status_smoke_detected_4_Local", Status_smoke_detected_4)
});

// Change Image for Smoke Detected
function smokedetected4_changeImage(Status_smoke_detected_4,Status_co_detected_4) {
  var image = document.getElementById('SD201001_4');
  if ((Status_smoke_detected_4 == "CLEAR") && (Status_co_detected_4 == "CLEAR")) {
      image.src = "images/smokeclear.jpg";
  } else if ((Status_smoke_detected_4 == "DETECTED") && (Status_co_detected_4 == "CLEAR")) {
      image.src = "images/smokedetected.jpg";
  }
    else if ((Status_smoke_detected_4 == "CLEAR") && (Status_co_detected_4 == "DETECTED")) {
      image.src = "images/codetected.jpg";
  }
    else {
        image.src = "images/smokedetected.jpg";
  }    
}


// Retrieve data from Firebase for Checking Device Status
// Floor 2 MGC Room
// Smoke # SD202001_5
var ref_smoke_detected_5 = ref_devices_data2.child("SD202001");

ref_smoke_detected_5.on("value", function(snapshot) {
  console.log("Get smoke_detected_5 from firebase")
  var smoke_detected_5 = snapshot.val();
  // console.log(smoke_detected_5)
  // document.getElementById("status_smoke_5").innerHTML = smoke_detected_5[""];
  // Recheck Device Status from Firebase //
   var Status_smoke_detected_5 = smoke_detected_5["SMOKE"];
   var Status_co_detected_5 = smoke_detected_5["CO"];
  // console.log(Status_smoke_detected_5);
   smokedetected5_changeImage(Status_smoke_detected_5,Status_co_detected_5)
     // var Status_smoke_detected_5_Local = localStorage.setItem("Status_smoke_detected_5_Local", Status_smoke_detected_5)
});

// Change Image for Smoke Detected
function smokedetected5_changeImage(Status_smoke_detected_5,Status_co_detected_5) {
  var image = document.getElementById('SD201001_5');
  if ((Status_smoke_detected_5 == "CLEAR") && (Status_co_detected_5 == "CLEAR")) {
      image.src = "images/smokeclear.jpg";
  } else if ((Status_smoke_detected_5 == "DETECTED") && (Status_co_detected_5 == "CLEAR")) {
      image.src = "images/smokedetected.jpg";
  }
    else if ((Status_smoke_detected_5 == "CLEAR") && (Status_co_detected_5 == "DETECTED")) {
      image.src = "images/codetected.jpg";
  }
    else {
        image.src = "images/smokedetected.jpg";
  }    
}

// Retrieve data from Firebase for Checking Device Status
// Floor 2 Office 2
// Smoke # SD203001_6
var ref_smoke_detected_6 = ref_devices_data2.child("SD203001");

ref_smoke_detected_6.on("value", function(snapshot) {
  console.log("Get smoke_detected_6 from firebase")
  var smoke_detected_6 = snapshot.val();
  // console.log(smoke_detected_6)
  // document.getElementById("status_smoke_6").innerHTML = smoke_detected_6[""];
  // Recheck Device Status from Firebase //
   var Status_smoke_detected_6 = smoke_detected_6["SMOKE"];
   var Status_co_detected_6 = smoke_detected_6["CO"];
  // console.log(Status_smoke_detected_6);
   smokedetected6_changeImage(Status_smoke_detected_6,Status_co_detected_6)
     // var Status_smoke_detected_6_Local = localStorage.setItem("Status_smoke_detected_6_Local", Status_smoke_detected_6)
});

// Change Image for Smoke Detected
function smokedetected6_changeImage(Status_smoke_detected_6,Status_co_detected_6) {
  var image = document.getElementById('SD203001_6');
  if ((Status_smoke_detected_6 == "CLEAR") && (Status_co_detected_6 == "CLEAR")) {
      image.src = "images/smokeclear.jpg";
  } else if ((Status_smoke_detected_6 == "DETECTED") && (Status_co_detected_6 == "CLEAR")) {
      image.src = "images/smokedetected.jpg";
  }
    else if ((Status_smoke_detected_6 == "CLEAR") && (Status_co_detected_6 == "DETECTED")) {
      image.src = "images/codetected.jpg";
  }
    else {
        image.src = "images/smokedetected.jpg";
  }    
}


// Retrieve data from Firebase for Checking Device Status
// Floor 2 MGC Room
// Sensor # DS202002_9
var ref_open_closed_27 = ref_devices_data.child("DS202002");

ref_open_closed_27.on("value", function(snapshot) {
  console.log("Get open_closed_27 from firebase")
  var open_closed_27 = snapshot.val();
  // console.log(open_closed_27)
  // document.getElementById("status_27").innerHTML = open_closed_27["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_27 = open_closed_27["STATUS"];
  // console.log(Status_open_closed_27);
   openclosed27_changeImage(Status_open_closed_27)
  // var Status_open_closed_27_Local = localStorage.setItem("Status_open_closed_27_Local", Status_open_closed_27)
});

// Change Image for Open Closed
function openclosed27_changeImage(Status_open_closed_27) {
  var image = document.getElementById('DS202002_9');
  if (Status_open_closed_27 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 2 Office 2
// Sensor # DS203002_11
var ref_open_closed_28 = ref_devices_data.child("DS203002");

ref_open_closed_28.on("value", function(snapshot) {
  console.log("Get open_closed_28 from firebase")
  var open_closed_28 = snapshot.val();
  // console.log(open_closed_28)
  // document.getElementById("status_28").innerHTML = open_closed_28["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_28 = open_closed_28["STATUS"];
  // console.log(Status_open_closed_28);
   openclosed28_changeImage(Status_open_closed_28)
  // var Status_open_closed_28_Local = localStorage.setItem("Status_open_closed_28_Local", Status_open_closed_28)
});

// Change Image for Open Closed
function openclosed28_changeImage(Status_open_closed_28) {
  var image = document.getElementById('DS203002_11');
  if (Status_open_closed_28 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 2 Electric Room
// Sensor # DS204001_12
var ref_open_closed_29 = ref_devices_data.child("DS204001");

ref_open_closed_29.on("value", function(snapshot) {
  console.log("Get open_closed_29 from firebase")
  var open_closed_29 = snapshot.val();
  // console.log(open_closed_29)
  // document.getElementById("status_29").innerHTML = open_closed_29["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_29 = open_closed_29["STATUS"];
  // console.log(Status_open_closed_29);
   openclosed29_changeImage(Status_open_closed_29)
  // var Status_open_closed_29_Local = localStorage.setItem("Status_open_closed_29_Local", Status_open_closed_29)
});

// Change Image for Open Closed
function openclosed29_changeImage(Status_open_closed_29) {
  var image = document.getElementById('DS204001_12');
  if (Status_open_closed_29 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 2 Office 2
// Sensor # WS203001_30
var ref_open_closed_30 = ref_devices_data.child("WS203001");

ref_open_closed_30.on("value", function(snapshot) {
  console.log("Get open_closed_30 from firebase")
  var open_closed_30 = snapshot.val();
  // console.log(open_closed_30)
  // document.getElementById("status_30").innerHTML = open_closed_30["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_30 = open_closed_30["STATUS"];
  // console.log(Status_open_closed_30);
   openclosed30_changeImage(Status_open_closed_30)
  // var Status_open_closed_30_Local = localStorage.setItem("Status_open_closed_30_Local", Status_open_closed_30)
});

// Change Image for Open Closed
function openclosed30_changeImage(Status_open_closed_30) {
  var image = document.getElementById('WS203001_30');
  if (Status_open_closed_30 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 2 Office 2
// Sensor # WS203002_31
var ref_open_closed_31 = ref_devices_data.child("WS203002");

ref_open_closed_31.on("value", function(snapshot) {
  console.log("Get open_closed_31 from firebase")
  var open_closed_31 = snapshot.val();
  // console.log(open_closed_31)
  // document.getElementById("status_31").innerHTML = open_closed_31["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_31 = open_closed_31["STATUS"];
  // console.log(Status_open_closed_31);
   openclosed31_changeImage(Status_open_closed_31)
  // var Status_open_closed_31_Local = localStorage.setItem("Status_open_closed_31_Local", Status_open_closed_31)
});

// Change Image for Open Closed
function openclosed31_changeImage(Status_open_closed_31) {
  var image = document.getElementById('WS203002_31');
  if (Status_open_closed_31 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Retrieve data from Firebase for Checking Device Status
// Floor 2 Office 2
// Sensor # WS203003_32
var ref_open_closed_32 = ref_devices_data.child("WS203003");

ref_open_closed_32.on("value", function(snapshot) {
  console.log("Get open_closed_32 from firebase")
  var open_closed_32 = snapshot.val();
  // console.log(open_closed_32)
  // document.getElementById("status_32").innerHTML = open_closed_32["STATUS"];
  // Recheck Device Status from Firebase //
  var Status_open_closed_32 = open_closed_32["STATUS"];
  // console.log(Status_open_closed_32);
   openclosed32_changeImage(Status_open_closed_32)
  // var Status_open_closed_32_Local = localStorage.setItem("Status_open_closed_32_Local", Status_open_closed_32)
});

// Change Image for Open Closed
function openclosed32_changeImage(Status_open_closed_32) {
  var image = document.getElementById('WS203003_32');
  if (Status_open_closed_32 == "CLOSED") {
      image.src = "images/closed.jpg";
  } else {
      image.src = "images/open.jpg";
  }
}

// Floor 2 Right Part END
