// Retrieve data from Firebase for Checking Device Status
var ref_devices_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("ac");
var ref_conference_AC_1 = ref_devices_data.child("AC101004");

ref_conference_AC_1.on("value", function(snapshot) {
    console.log("Get conference_AC_1 from firebase")
    var conference_AC_1 = snapshot.val();
    var Status_conference_AC_1 = conference_AC_1["STATUS"];
    var temp_conference_AC_1 = conference_AC_1["SET_TEMPERATURE"];
    var fan_speed_conference_AC_1 = conference_AC_1["FAN_SPEED"];
    var mode_conference_AC_1 = conference_AC_1["MODE"];
    console.log("Get Status Conference AC 1: ")
    console.log("Conference AC 1 is: " + Status_conference_AC_1 + " and temperature is: " + temp_conference_AC_1);
    document.getElementById("result1").innerHTML = temp_conference_AC_1;
    localStorage.setItem("temp_conference_AC_1_local", temp_conference_AC_1)
    localStorage.setItem("fan_speed_conference_AC_1_local", fan_speed_conference_AC_1)
    localStorage.setItem("mode_conference_AC_1_local", mode_conference_AC_1)
    Status_conference_AC_1_changeImage(Status_conference_AC_1)    
    Status_remote_AC_1_changeImage(Status_conference_AC_1, fan_speed_conference_AC_1, mode_conference_AC_1)
    return(temp_conference_AC_1)
});

function Status_conference_AC_1_changeImage(Status_conference_AC_1) {
  var image = document.getElementById('ac_1');

  if (Status_conference_AC_1 == "OFF") {
      image.src = "images/goodbye.jpg";
    } else {
      image.src = "https://www.fotoaparatas.lt/images/thumbs/thumb-3-55x30m-green-screen-349177-640-448.png";
      }
}

function Status_remote_AC_1_changeImage(Status_conference_AC_1, fan_speed_conference_AC_1, mode_conference_AC_1) {
    console.log("------- Status_remote_AC_1_changeImage -------")
    var image1 = document.getElementById('ac1_cool');
    var image2 = document.getElementById('ac1_dry');
    var image3 = document.getElementById('ac1_fan');
    var image4 = document.getElementById('ac1_lv1');
    var image5 = document.getElementById('ac1_lv2');
    var image6 = document.getElementById('ac1_lv3');
    var image7 = document.getElementById('ac1_lv4');
    var image8 = document.getElementById('ac1_lv5');

    if (Status_conference_AC_1 == "OFF") {
        image1.src = "images/remodeair/cooloff.png";
        image2.src = "images/remodeair/dryoff.png";
        image3.src = "images/remodeair/fanoff.png";
        image4.src = "images/remodeair/fanoff.png";
        image5.src = "images/remodeair/fanoff.png";
        image6.src = "images/remodeair/fanoff.png";
        image7.src = "images/remodeair/fanoff.png";
        image8.src = "images/remodeair/fanoff.png";
      } else if (Status_conference_AC_1 == "ON") {
          if (mode_conference_AC_1 == "COLD") {
             if (fan_speed_conference_AC_1 == "1") {
                image1.src = "images/remodeair/coolon.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanon.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanoff.png";
            } else if (fan_speed_conference_AC_1 == "2") {
                image1.src = "images/remodeair/coolon.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanon.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanoff.png";
            } else if (fan_speed_conference_AC_1 == "3") {
                image1.src = "images/remodeair/coolon.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanon.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanoff.png";
            } else if (fan_speed_conference_AC_1 == "4") {
                image1.src = "images/remodeair/coolon.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanon.png";
                image8.src = "images/remodeair/fanoff.png";
            } else if (fan_speed_conference_AC_1 == "5") {
                image1.src = "images/remodeair/coolon.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanon.png";
            }
          } else if (mode_conference_AC_1 == "DRY") {
                image1.src = "images/remodeair/cooloff.png";
                image2.src = "images/remodeair/dryon.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanoff.png";
              } else if (mode_conference_AC_1 == "FAN") {
                image1.src = "images/remodeair/cooloff.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanon.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanoff.png";
                  }
        }
}

// On
function turn_on_con_ac_1(device_id) {
    console.log("turn_on_con_ac_1" + device_id);
    console.log(device_id)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: {
            "device_type": "AC",
            "device_id": device_id,
            "status": "ON",
        },
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
}

// Off
function turn_off_con_ac_1(device_id) {
    console.log("turn_off_con_ac_1" + device_id);
    console.log(device_id)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/status",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: {
            "device_type": "AC",
            "device_id": device_id,
            "status": "OFF",
        },
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
}

// Set Temp
var score_AC1 = parseInt(localStorage.getItem("temp_conference_AC_1_local"));
function up_temp_con_ac_1() {
    if (score_AC1 < 30) {
        score_AC1++;
    }
    document.getElementById("result1").innerHTML = score_AC1;
    return(score_AC1);
}

function down_temp_con_ac_1() {
    if (score_AC1 > 17) {
        score_AC1--;
    }
    document.getElementById("result1").innerHTML = score_AC1;
    return(score_AC1);
}

// Submit Temp
function summit_air1(device_id) {
    var fan_speed_conference_AC_1_local = localStorage.getItem("fan_speed_conference_AC_1_local");
    var set_temp_data = { device_type: "AC",
    device_id: device_id, 
    command: JSON.stringify({status:"ON",mode:"COLD",FAN: fan_speed_conference_AC_1_local,stemp: score_AC1.toString()} 
    )};
    console.log(set_temp_data)
    console.log("Adjust Con_1 AC Temp: " + score_AC1 + "degreeC")
    console.log("Please wait...we are adjusting your AC temp.")
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/command",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/command",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: set_temp_data,
        })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            localStorage.setItem("temp_conference_AC_1_local", score_AC1)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
}

// CoolModeControl
function CoolModeControl_1(device_id) {
    var fan_speed_conference_AC_1_local = localStorage.getItem("fan_speed_conference_AC_1_local");
    var mode_conference_AC_1_local = "COLD";
    console.log("CoolModeControl_1")
    console.log(device_id + " cool mode control: COOL");
    console.log("Temp is : " + score_AC1)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode: mode_conference_AC_1_local,FAN: fan_speed_conference_AC_1_local,stemp: score_AC1.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/command",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/command",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: set_mode_data,
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            Status_remote_AC_1_changeImage(Status_conference_AC_1 = "ON", fan_speed_conference_AC_1_local, mode_conference_AC_1_local)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

// DryModeControl
function DryModeControl_1(device_id) {
    var fan_speed_conference_AC_1_local = localStorage.getItem("fan_speed_conference_AC_1_local");
    var mode_conference_AC_1_local = "DRY";
    console.log("DryModeControl_1")
    console.log(device_id + " cool mode control: DRY");
    console.log("Temp is : " + score_AC1)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode: mode_conference_AC_1_local,FAN: fan_speed_conference_AC_1_local,stemp: score_AC1.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/command",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/command",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: set_mode_data,
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            Status_remote_AC_1_changeImage(Status_conference_AC_1 = "ON", fan_speed_conference_AC_1_local, mode_conference_AC_1_local)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

// FenModeControl
function FenModeControl_1(device_id) {
    var fan_speed_conference_AC_1_local = localStorage.getItem("fan_speed_conference_AC_1_local");
    var mode_conference_AC_1_local = "FAN";
    console.log("FenModeControl_1")
    console.log(device_id + " cool mode control: FAN");
    console.log("Temp is : " + score_AC1)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode: mode_conference_AC_1_local,FAN: fan_speed_conference_AC_1_local,stemp: score_AC1.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/command",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/command",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: set_mode_data,
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            Status_remote_AC_1_changeImage(Status_conference_AC_1 = "ON", fan_speed_conference_AC_1_local, mode_conference_AC_1_local)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

//Swing turn_off_ac
function swingturn_off_con_ac_1(device_id) {
    console.log(device_id + " swing mode control: OFF SWING");
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
            "device_type": "AC",
            "device_id": device_id,
            "status": "OFF",
        },
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

//Swing turn_on_ac
function swingturn_on_con_ac_1(device_id) {
    console.log(device_id + " swing mode control: ON SWING");
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
            "device_type": "AC",
            "device_id": device_id,
            "status": "OFF",
        },
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

// Speed Fan
function remote1_speedone(device_id) {
    console.log(device_id + " fan speed level: ONE");
    console.log("Temp is : " + score_AC1)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"1",stemp: score_AC1.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/command",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/command",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: set_mode_data,
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            Update_Speed_AC1_LV1()
            localStorage.setItem("fan_speed_conference_AC_1_local", "1")
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function Update_Speed_AC1_LV1() {
    document.getElementById('ac1_lv1').src = "images/remodeair/fanon.png";
    document.getElementById('ac1_lv2').src = "images/remodeair/fanoff.png";
    document.getElementById('ac1_lv3').src = "images/remodeair/fanoff.png";
    document.getElementById('ac1_lv4').src = "images/remodeair/fanoff.png";
    document.getElementById('ac1_lv5').src = "images/remodeair/fanoff.png";
}

function remote1_speedtwo(device_id) {
    console.log(device_id + " fan speed level: TWO");
    console.log("Temp is : " + score_AC1)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"2",stemp: score_AC1.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/command",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/command",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: set_mode_data,
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            Update_Speed_AC2_LV2()
            localStorage.setItem("fan_speed_conference_AC_1_local", "2")
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function Update_Speed_AC2_LV2() {
    document.getElementById('ac1_lv1').src = "images/remodeair/fanoff.png";
    document.getElementById('ac1_lv2').src = "images/remodeair/fanon.png";
    document.getElementById('ac1_lv3').src = "images/remodeair/fanoff.png";
    document.getElementById('ac1_lv4').src = "images/remodeair/fanoff.png";
    document.getElementById('ac1_lv5').src = "images/remodeair/fanoff.png";
}

function remote1_speedthree(device_id) {
    console.log(device_id + " fan speed level: THREE");
    console.log("Temp is : " + score_AC1)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"3",stemp: score_AC1.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/command",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/command",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: set_mode_data,
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            Update_Speed_AC_LV3()
            localStorage.setItem("fan_speed_conference_AC_1_local", "3")
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function Update_Speed_AC_LV3() {
    document.getElementById('ac1_lv1').src = "images/remodeair/fanoff.png";
    document.getElementById('ac1_lv2').src = "images/remodeair/fanoff.png";
    document.getElementById('ac1_lv3').src = "images/remodeair/fanon.png";
    document.getElementById('ac1_lv4').src = "images/remodeair/fanoff.png";
    document.getElementById('ac1_lv5').src = "images/remodeair/fanoff.png";
}

function remote1_speedfour(device_id) {
    console.log(device_id + " fan speed level: FOUR");
    console.log("Temp is : " + score_AC1)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"4",stemp: score_AC1.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/command",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/command",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: set_mode_data,
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            Update_Speed_AC_LV4()
            localStorage.setItem("fan_speed_conference_AC_1_local", "4")
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function Update_Speed_AC_LV4() {
    document.getElementById('ac1_lv1').src = "images/remodeair/fanoff.png";
    document.getElementById('ac1_lv2').src = "images/remodeair/fanoff.png";
    document.getElementById('ac1_lv3').src = "images/remodeair/fanoff.png";
    document.getElementById('ac1_lv4').src = "images/remodeair/fanon.png";
    document.getElementById('ac1_lv5').src = "images/remodeair/fanoff.png";
}

function remote1_speedfive(device_id) {
    console.log(device_id + " fan speed level: FIVE");
    console.log("Temp is : " + score_AC1)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"5",stemp: score_AC1.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/command",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/daikin/command",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/x-www-form-urlencoded",
        data: set_mode_data,
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            Update_Speed_AC_LV5()
            localStorage.setItem("fan_speed_conference_AC_1_local", "5")
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function Update_Speed_AC_LV5() {
    document.getElementById('ac1_lv1').src = "images/remodeair/fanoff.png";
    document.getElementById('ac1_lv2').src = "images/remodeair/fanoff.png";
    document.getElementById('ac1_lv3').src = "images/remodeair/fanoff.png";
    document.getElementById('ac1_lv4').src = "images/remodeair/fanoff.png";
    document.getElementById('ac1_lv5').src = "images/remodeair/fanon.png";
}