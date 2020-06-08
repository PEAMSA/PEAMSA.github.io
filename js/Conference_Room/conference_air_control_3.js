// Retrieve data from Firebase for Checking Device Status
var ref_devices_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("ac");
var ref_conference_AC_3 = ref_devices_data.child("AC101002");

ref_conference_AC_3.on("value", function(snapshot) {
    console.log("Get conference_AC_3 from firebase")
    var conference_AC_3 = snapshot.val();
    var Status_conference_AC_3 = conference_AC_3["STATUS"];
    var temp_conference_AC_3 = conference_AC_3["SET_TEMPERATURE"];
    var fan_speed_conference_AC_3 = conference_AC_3["FAN_SPEED"];
    var mode_conference_AC_3 = conference_AC_3["MODE"];
    console.log("Get Status Conference AC 3: ")
    console.log("Conference AC 3 is: " + Status_conference_AC_3 + " and temperature is: " + temp_conference_AC_3);
    document.getElementById("result3").innerHTML = temp_conference_AC_3;
    localStorage.setItem("temp_conference_AC_3_local", temp_conference_AC_3)
    localStorage.setItem("fan_speed_conference_AC_3_local", fan_speed_conference_AC_3)
    localStorage.setItem("mode_conference_AC_3_local", mode_conference_AC_3)
    Status_conference_AC_3_changeImage(Status_conference_AC_3)
    Status_remote_AC_3_changeImage(Status_conference_AC_3, fan_speed_conference_AC_3, mode_conference_AC_3)
    return(temp_conference_AC_3)
});

// Change Image for Smart Plug
function Status_conference_AC_3_changeImage(Status_conference_AC_3) {
  var image = document.getElementById('ac_3');

  if (Status_conference_AC_3 == "OFF") {
      image.src = "images/goodbye.jpg";
    } else {
      image.src = "https://www.fotoaparatas.lt/images/thumbs/thumb-3-55x30m-green-screen-349177-640-448.png";
      }
}

function Status_remote_AC_3_changeImage(Status_conference_AC_3, fan_speed_conference_AC_3, mode_conference_AC_3) {
    console.log("------- Status_remote_AC_3_changeImage -------")
    var image1 = document.getElementById('ac3_cool');
    var image2 = document.getElementById('ac3_dry');
    var image3 = document.getElementById('ac3_fan');
    var image4 = document.getElementById('ac3_lv1');
    var image5 = document.getElementById('ac3_lv2');
    var image6 = document.getElementById('ac3_lv3');
    var image7 = document.getElementById('ac3_lv4');
    var image8 = document.getElementById('ac3_lv5');

    if (Status_conference_AC_3 == "OFF") {
        image1.src = "images/remodeair/cooloff.png";
        image2.src = "images/remodeair/dryoff.png";
        image3.src = "images/remodeair/fanoff.png";
        image4.src = "images/remodeair/fanoff.png";
        image5.src = "images/remodeair/fanoff.png";
        image6.src = "images/remodeair/fanoff.png";
        image7.src = "images/remodeair/fanoff.png";
        image8.src = "images/remodeair/fanoff.png";
      } else if (Status_conference_AC_3 == "ON") {
          if (mode_conference_AC_3 == "COLD") {
             if (fan_speed_conference_AC_3 == "1") {
                image1.src = "images/remodeair/coolon.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanon.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanoff.png";
            } else if (fan_speed_conference_AC_3 == "2") {
                image1.src = "images/remodeair/coolon.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanon.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanoff.png";
            } else if (fan_speed_conference_AC_3 == "3") {
                image1.src = "images/remodeair/coolon.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanon.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanoff.png";
            } else if (fan_speed_conference_AC_3 == "4") {
                image1.src = "images/remodeair/coolon.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanon.png";
                image8.src = "images/remodeair/fanoff.png";
            } else if (fan_speed_conference_AC_3 == "5") {
                image1.src = "images/remodeair/coolon.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanon.png";
            }
          } else if (mode_conference_AC_3 == "DRY") {
                image1.src = "images/remodeair/cooloff.png";
                image2.src = "images/remodeair/dryon.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanoff.png";
              } else if (mode_conference_AC_3 == "FAN") {
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
function turn_on_con_ac_3(device_id) {
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
function turn_off_con_ac_3(device_id) {
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
var score_AC3 = parseInt(localStorage.getItem("temp_conference_AC_3_local"));
function up_temp_con_ac_3() {
    if (score_AC3 < 30) {
        score_AC3++;
    }
    document.getElementById("result3").innerHTML = score_AC3;
    return(score_AC3);
}

function down_temp_con_ac_3() {
    if (score_AC3 > 17) {
        score_AC3--;
    }
    document.getElementById("result3").innerHTML = score_AC3;
    return(score_AC3);
}

// Submit Temp
function summit_air3(device_id) {
    var fan_speed_conference_AC_3_local = localStorage.getItem("fan_speed_conference_AC_3_local");
    var set_temp_data = { device_type: "AC",
                          device_id: device_id, 
                          command: JSON.stringify({status:"ON",mode:"COLD",FAN: fan_speed_conference_AC_3_local,stemp: score_AC3.toString()} 
                          )};
    console.log(set_temp_data)
    console.log("Adjust Con_3 AC Temp: " + score_AC3 + "degreeC")
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
            localStorage.setItem("temp_conference_AC_3_local", score_AC3)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
}

// CoolModeControl
function CoolModeControl_3(device_id) {
    var fan_speed_conference_AC_3_local = localStorage.getItem("fan_speed_conference_AC_3_local");
    var mode_conference_AC_3_local = "COLD";
    console.log("CoolModeControl_3")
    console.log(device_id + " cool mode control: COOL");
    console.log("Temp is : " + score_AC3)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode: mode_conference_AC_3_local,FAN: fan_speed_conference_AC_3_local,stemp: score_AC3.toString()})
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
            Status_remote_AC_3_changeImage(Status_conference_AC_3 = "ON", fan_speed_conference_AC_3_local, mode_conference_AC_3_local)
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
function DryModeControl_3(device_id) {
    var fan_speed_conference_AC_3_local = localStorage.getItem("fan_speed_conference_AC_3_local");
    var mode_conference_AC_3_local = "DRY";
    console.log("DryModeControl_3")
    console.log(device_id + " cool mode control: DRY");
    console.log("Temp is : " + score_AC3)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode: mode_conference_AC_3_local,FAN: fan_speed_conference_AC_3_local,stemp: score_AC3.toString()})
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
            Status_remote_AC_3_changeImage(Status_conference_AC_3 = "ON", fan_speed_conference_AC_3_local, mode_conference_AC_3_local)
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
function FenModeControl_3(device_id) {
    var fan_speed_conference_AC_3_local = localStorage.getItem("fan_speed_conference_AC_3_local");
    var mode_conference_AC_3_local = "FAN";
    console.log("FenModeControl_3")
    console.log(device_id + " cool mode control: FAN");
    console.log("Temp is : " + score_AC3)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode: mode_conference_AC_3_local,FAN: fan_speed_conference_AC_3_local,stemp: score_AC3.toString()})
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
            Status_remote_AC_3_changeImage(Status_conference_AC_3 = "ON", fan_speed_conference_AC_3_local, mode_conference_AC_3_local)
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
function swingturn_off_con_ac_3(device_id) {
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
function swingturn_on_con_ac_3(device_id) {
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
function remote3_speedone(device_id) {
    console.log(device_id + " fan speed level: ONE");
    console.log("Temp is : " + score_AC3)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"1",stemp: score_AC3.toString()})
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
            Update_Speed_AC_3_LV1()
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

function Update_Speed_AC_3_LV1() {
    document.getElementById('ac3_lv1').src = "images/remodeair/fanon.png";
    document.getElementById('ac3_lv2').src = "images/remodeair/fanoff.png";
    document.getElementById('ac3_lv3').src = "images/remodeair/fanoff.png";
    document.getElementById('ac3_lv4').src = "images/remodeair/fanoff.png";
    document.getElementById('ac3_lv5').src = "images/remodeair/fanoff.png";
}

function remote3_speedtwo(device_id) {
    console.log(device_id + " fan speed level: TWO");
    console.log("Temp is : " + score_AC3)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"2",stemp: score_AC3.toString()})
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
            Update_Speed_AC_3_LV2()
            localStorage.setItem("fan_speed_conference_AC_3_local", "2")

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function Update_Speed_AC_3_LV2() {
    document.getElementById('ac3_lv1').src = "images/remodeair/fanoff.png";
    document.getElementById('ac3_lv2').src = "images/remodeair/fanon.png";
    document.getElementById('ac3_lv3').src = "images/remodeair/fanoff.png";
    document.getElementById('ac3_lv4').src = "images/remodeair/fanoff.png";
    document.getElementById('ac3_lv5').src = "images/remodeair/fanoff.png";
}

function remote3_speedthree(device_id) {
    console.log(device_id + " fan speed level: THREE");
    console.log("Temp is : " + score_AC3)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"3",stemp: score_AC3.toString()})
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
            Update_Speed_AC_3_LV3()
            localStorage.setItem("fan_speed_conference_AC_3_local", "3")

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function Update_Speed_AC_3_LV3() {
    document.getElementById('ac3_lv1').src = "images/remodeair/fanoff.png";
    document.getElementById('ac3_lv2').src = "images/remodeair/fanoff.png";
    document.getElementById('ac3_lv3').src = "images/remodeair/fanon.png";
    document.getElementById('ac3_lv4').src = "images/remodeair/fanoff.png";
    document.getElementById('ac3_lv5').src = "images/remodeair/fanoff.png";
}

function remote3_speedfour(device_id) {
    console.log(device_id + " fan speed level: FOUR");
    console.log("Temp is : " + score_AC3)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"4",stemp: score_AC3.toString()})
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
            Update_Speed_AC_3_LV4()
            localStorage.setItem("fan_speed_conference_AC_3_local", "4")

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function Update_Speed_AC_3_LV4() {
    document.getElementById('ac3_lv1').src = "images/remodeair/fanoff.png";
    document.getElementById('ac3_lv2').src = "images/remodeair/fanoff.png";
    document.getElementById('ac3_lv3').src = "images/remodeair/fanoff.png";
    document.getElementById('ac3_lv4').src = "images/remodeair/fanon.png";
    document.getElementById('ac3_lv5').src = "images/remodeair/fanoff.png";
}

function remote3_speedfive(device_id) {
    console.log(device_id + " fan speed level: FIVE");
    console.log("Temp is : " + score_AC3)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"5",stemp: score_AC3.toString()})
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
            Update_Speed_AC_3_LV5()
            localStorage.setItem("fan_speed_conference_AC_3_local", "5")

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function Update_Speed_AC_3_LV5() {
    document.getElementById('ac3_lv1').src = "images/remodeair/fanoff.png";
    document.getElementById('ac3_lv2').src = "images/remodeair/fanoff.png";
    document.getElementById('ac3_lv3').src = "images/remodeair/fanoff.png";
    document.getElementById('ac3_lv4').src = "images/remodeair/fanoff.png";
    document.getElementById('ac3_lv5').src = "images/remodeair/fanon.png";
}