//Smart Plug 1
// Retrieve data from Firebase for Checking Device Status
var ref_devices_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("plug");
var ref_smart_plug_1 = ref_devices_data.child("SP101001");

ref_smart_plug_1.on("value", function(snapshot) {
    console.log("Get smart_plug_1 from firebase")
    var smart_plug_1 = snapshot.val();
    // console.log(smart_plug_1["CURRENT"])
    document.getElementById("kW_Plug_1").innerHTML = smart_plug_1["POWER"].toFixed(2);
    document.getElementById("V_Plug_1").innerHTML = smart_plug_1["VOLTAGE"];
    document.getElementById("I_Plug_1").innerHTML = smart_plug_1["CURRENT"].toFixed(2);
    // Recheck Device Status from Firebase //
    var Status_smart_plug_1 = smart_plug_1["STATUS"];
    console.log(Status_smart_plug_1);
    smartplug1_changeImage(Status_smart_plug_1)
    var Status_smart_plug_1_Local = localStorage.setItem("Status_smart_plug_1_Local", Status_smart_plug_1)
  });

// Change Image for Smart Plug
function smartplug1_changeImage(Status_smart_plug_1) {
    var image = document.getElementById('myImage1');
    if (Status_smart_plug_1 == "OFF") {
        image.src = "images/remodeair/switchoff.png";
    } else {
        image.src = "images/remodeair/switchon.png";
    }
}

//  On/Off Smart Plug 1
function smartplug1(devieID_smart_plug_1) {
    console.log("-----Control_Smart_Plug_1-----");
    console.log(devieID_smart_plug_1)
    console.log(localStorage.getItem("Status_smart_plug_1_Local"))
    //
    var Status_smart_plug_1 = localStorage.getItem("Status_smart_plug_1_Local")
    if (Status_smart_plug_1 == "OFF") {
        Status_smart_plug_1 = "ON"
    } else {
        Status_smart_plug_1 = "OFF"
    }
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/plug",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/plug",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: {
            "device_type": "plug",
            "device_id": "plug001",
            "status": Status_smart_plug_1,
        },
        })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            var Status_smart_plug_1_Local = localStorage.setItem("Status_smart_plug_1_Local", Status_smart_plug_1)
            smartplug1_changeImage(Status_smart_plug_1)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

//Smart Plug 2
// Retrieve data from Firebase for Checking Device Status
var ref_smart_plug_2 = ref_devices_data.child("SP101002");

ref_smart_plug_2.on("value", function(snapshot) {
    console.log("Get smart_plug_2 from firebase")
    var smart_plug_2 = snapshot.val();
    // console.log(smart_plug_1["CURRENT"])
    document.getElementById("kW_Plug_2").innerHTML = smart_plug_2["POWER"].toFixed(2);
    document.getElementById("V_Plug_2").innerHTML = smart_plug_2["VOLTAGE"];
    document.getElementById("I_Plug_2").innerHTML = smart_plug_2["CURRENT"].toFixed(2);
    // Recheck Device Status from Firebase //
    var Status_smart_plug_2 = smart_plug_2["STATUS"];
    console.log(Status_smart_plug_2);
    smartplug2_changeImage(Status_smart_plug_2)
    var Status_smart_plug_2_Local = localStorage.setItem("Status_smart_plug_2_Local", Status_smart_plug_2)
  });

// Change Image for Smart Plug
function smartplug2_changeImage(Status_smart_plug_2) {
    var image = document.getElementById('myImage2');
    if (Status_smart_plug_2 == "OFF") {
        image.src = "images/remodeair/switchoff.png";
    } else {
        image.src = "images/remodeair/switchon.png";
    }
}

//  On/Off Smart Plug 2
function smartplug2(devieID_smart_plug_2) {
    console.log("-----Control_Smart_Plug_2-----");
    console.log(devieID_smart_plug_2)
    console.log(localStorage.getItem("Status_smart_plug_2_Local"))
    //
    var Status_smart_plug_2 = localStorage.getItem("Status_smart_plug_2_Local")
    if (Status_smart_plug_2 == "OFF") {
        Status_smart_plug_2 = "ON"
    } else {
        Status_smart_plug_2 = "OFF"
    }
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/plug",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/plug",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: JSON.stringify({
            "device_type": "plug",
            "device_id": "plug002",
            "status": Status_smart_plug_2,
        })
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            var Status_smart_plug_2_Local = localStorage.setItem("Status_smart_plug_2_Local", Status_smart_plug_2)
            smartplug2_changeImage(Status_smart_plug_2)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

//Smart Plug 3
// Retrieve data from Firebase for Checking Device Status
var ref_smart_plug_3 = ref_devices_data.child("SP101003");

ref_smart_plug_3.on("value", function(snapshot) {
    console.log("Get smart_plug_3 from firebase")
    var smart_plug_3 = snapshot.val();
    // console.log(smart_plug_1["CURRENT"])
    document.getElementById("kW_Plug_3").innerHTML = smart_plug_3["POWER"].toFixed(2);
    document.getElementById("V_Plug_3").innerHTML = smart_plug_3["VOLTAGE"];
    document.getElementById("I_Plug_3").innerHTML = smart_plug_3["CURRENT"].toFixed(2);
    // Recheck Device Status from Firebase //
    var Status_smart_plug_3 = smart_plug_3["STATUS"];
    console.log(Status_smart_plug_3);
    smartplug3_changeImage(Status_smart_plug_3)
    var Status_smart_plug_3_Local = localStorage.setItem("Status_smart_plug_3_Local", Status_smart_plug_3)
  });

// Change Image for Smart Plug
function smartplug3_changeImage(Status_smart_plug_3) {
    var image = document.getElementById('myImage3');
    if (Status_smart_plug_3 == "OFF") {
        image.src = "images/remodeair/switchoff.png";
    } else {
        image.src = "images/remodeair/switchon.png";
    }
}

//  On/Off Smart Plug 3
function smartplug3(devieID_smart_plug_3) {
    console.log("-----Control_Smart_Plug_3-----");
    console.log(devieID_smart_plug_3)
    console.log(localStorage.getItem("Status_smart_plug_3_Local"))
    //
    var Status_smart_plug_3 = localStorage.getItem("Status_smart_plug_3_Local")
    if (Status_smart_plug_3 == "OFF") {
        Status_smart_plug_3 = "ON"
    } else {
        Status_smart_plug_3 = "OFF"
    }
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/plug",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/plug",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: JSON.stringify({
            "device_type": "plug",
            "device_id": "plug003",
            "status": Status_smart_plug_3,
        })
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            var Status_smart_plug_3_Local = localStorage.setItem("Status_smart_plug_3_Local", Status_smart_plug_3)
            smartplug3_changeImage(Status_smart_plug_3)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

//Smart Plug 4
// Retrieve data from Firebase for Checking Device Status
var ref_smart_plug_4 = ref_devices_data.child("SP101004");

ref_smart_plug_4.on("value", function(snapshot) {
    console.log("Get smart_plug_4 from firebase")
    var smart_plug_4 = snapshot.val();
    // console.log(smart_plug_1["CURRENT"])
    document.getElementById("kW_Plug_4").innerHTML = smart_plug_4["POWER"].toFixed(2);
    document.getElementById("V_Plug_4").innerHTML = smart_plug_4["VOLTAGE"];
    document.getElementById("I_Plug_4").innerHTML = smart_plug_4["CURRENT"].toFixed(2);
    // Recheck Device Status from Firebase //
    var Status_smart_plug_4 = smart_plug_4["STATUS"];
    console.log(Status_smart_plug_4);
    smartplug4_changeImage(Status_smart_plug_4)
    var Status_smart_plug_4_Local = localStorage.setItem("Status_smart_plug_4_Local", Status_smart_plug_4)
  });

// Change Image for Smart Plug
function smartplug4_changeImage(Status_smart_plug_4) {
    var image = document.getElementById('myImage4');
    if (Status_smart_plug_4 == "OFF") {
        image.src = "images/remodeair/switchoff.png";
    } else {
        image.src = "images/remodeair/switchon.png";
    }
}

//  On/Off Smart Plug 4
function smartplug4(devieID_smart_plug_4) {
    console.log("-----Control_Smart_Plug_4-----");
    console.log(devieID_smart_plug_4)
    console.log(localStorage.getItem("Status_smart_plug_4_Local"))
    //
    var Status_smart_plug_4 = localStorage.getItem("Status_smart_plug_4_Local")
    if (Status_smart_plug_4 == "OFF") {
        Status_smart_plug_4 = "ON"
    } else {
        Status_smart_plug_4 = "OFF"
    }
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/plug",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/plug",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: JSON.stringify({
            "device_type": "plug",
            "device_id": "plug004",
            "status": Status_smart_plug_4,
        })
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            var Status_smart_plug_4_Local = localStorage.setItem("Status_smart_plug_4_Local", Status_smart_plug_4)
            smartplug4_changeImage(Status_smart_plug_4)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

//Smart Plug 5
// Retrieve data from Firebase for Checking Device Status
var ref_smart_plug_5 = ref_devices_data.child("SP101005");

ref_smart_plug_5.on("value", function(snapshot) {
    console.log("Get smart_plug_5 from firebase")
    var smart_plug_5 = snapshot.val();
    // console.log(smart_plug_1["CURRENT"])
    document.getElementById("kW_Plug_5").innerHTML = smart_plug_5["POWER"].toFixed(2);
    document.getElementById("V_Plug_5").innerHTML = smart_plug_5["VOLTAGE"];
    document.getElementById("I_Plug_5").innerHTML = smart_plug_5["CURRENT"].toFixed(2);
    // Recheck Device Status from Firebase //
    var Status_smart_plug_5 = smart_plug_5["STATUS"];
    console.log(Status_smart_plug_5);
    smartplug5_changeImage(Status_smart_plug_5)
    var Status_smart_plug_5_Local = localStorage.setItem("Status_smart_plug_5_Local", Status_smart_plug_5)
  });

// Change Image for Smart Plug
function smartplug5_changeImage(Status_smart_plug_5) {
    var image = document.getElementById('myImage5');
    if (Status_smart_plug_5 == "OFF") {
        image.src = "images/remodeair/switchoff.png";
    } else {
        image.src = "images/remodeair/switchon.png";
    }
}

//  On/Off Smart Plug 5
function smartplug5(devieID_smart_plug_5) {
    console.log("-----Control_Smart_Plug_5-----");
    console.log(devieID_smart_plug_5)
    console.log(localStorage.getItem("Status_smart_plug_5_Local"))
    //
    var Status_smart_plug_5 = localStorage.getItem("Status_smart_plug_5_Local")
    if (Status_smart_plug_5 == "OFF") {
        Status_smart_plug_5 = "ON"
    } else {
        Status_smart_plug_5 = "OFF"
    }
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/plug",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/plug",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: JSON.stringify({
            "device_type": "plug",
            "device_id": "plug005",
            "status": Status_smart_plug_5,
        })
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            var Status_smart_plug_5_Local = localStorage.setItem("Status_smart_plug_5_Local", Status_smart_plug_5)
            smartplug5_changeImage(Status_smart_plug_5)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

//Smart Plug 6
// Retrieve data from Firebase for Checking Device Status
var ref_smart_plug_6 = ref_devices_data.child("SP101006");

ref_smart_plug_6.on("value", function(snapshot) {
    console.log("Get smart_plug_6 from firebase")
    var smart_plug_6 = snapshot.val();
    // console.log(smart_plug_1["CURRENT"])
    document.getElementById("kW_Plug_6").innerHTML = smart_plug_6["POWER"].toFixed(2);
    document.getElementById("V_Plug_6").innerHTML = smart_plug_6["VOLTAGE"];
    document.getElementById("I_Plug_6").innerHTML = smart_plug_6["CURRENT"].toFixed(2);
    // Recheck Device Status from Firebase //
    var Status_smart_plug_6 = smart_plug_6["STATUS"];
    console.log(Status_smart_plug_6);
    smartplug6_changeImage(Status_smart_plug_6)
    var Status_smart_plug_6_Local = localStorage.setItem("Status_smart_plug_6_Local", Status_smart_plug_6)
  });

// Change Image for Smart Plug
function smartplug6_changeImage(Status_smart_plug_6) {
    var image = document.getElementById('myImage6');
    if (Status_smart_plug_6 == "OFF") {
        image.src = "images/remodeair/switchoff.png";
    } else {
        image.src = "images/remodeair/switchon.png";
    }
}

//  On/Off Smart Plug 6
function smartplug6(devieID_smart_plug_6) {
    console.log("-----Control_Smart_Plug_6-----");
    console.log(devieID_smart_plug_6)
    console.log(localStorage.getItem("Status_smart_plug_6_Local"))
    //
    var Status_smart_plug_6 = localStorage.getItem("Status_smart_plug_6_Local")
    if (Status_smart_plug_6 == "OFF") {
        Status_smart_plug_6 = "ON"
    } else {
        Status_smart_plug_6 = "OFF"
    }
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/plug",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/plug",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: JSON.stringify({
            "device_type": "plug",
            "device_id": "plug006",
            "status": Status_smart_plug_6,
        })
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            var Status_smart_plug_6_Local = localStorage.setItem("Status_smart_plug_6_Local", Status_smart_plug_6)
            smartplug6_changeImage(Status_smart_plug_6)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}
