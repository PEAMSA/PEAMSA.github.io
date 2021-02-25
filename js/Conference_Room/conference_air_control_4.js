// Retrieve data from Firebase for Checking Device Status
var ref_devices_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("ac");
var ref_conference_AC_4 = ref_devices_data.child("AC101001");

ref_conference_AC_4.on("value", function(snapshot) {
    var conference_AC_4 = snapshot.val();
    var Status_conference_AC_4 = conference_AC_4["STATUS"];
    var temp_conference_AC_4 = conference_AC_4["SET_TEMPERATURE"];
    var fan_speed_conference_AC_4 = conference_AC_4["FAN_SPEED"];
    var mode_conference_AC_4 = conference_AC_4["MODE"];
    document.getElementById("result4").innerHTML = temp_conference_AC_4;
    localStorage.setItem("temp_conference_AC_4_local", temp_conference_AC_4)
    localStorage.setItem("fan_speed_conference_AC_4_local", fan_speed_conference_AC_4)
    localStorage.setItem("mode_conference_AC_4_local", mode_conference_AC_4)
    Status_conference_AC_4_changeImage(Status_conference_AC_4)
    Status_remote_AC_changeImage(Status_conference_AC_4, fan_speed_conference_AC_4, mode_conference_AC_4)
    return(temp_conference_AC_4)
  });

// Change Image for Smart Plug
function Status_conference_AC_4_changeImage(Status_conference_AC_4) {
  var image = document.getElementById('ac_4');

  if (Status_conference_AC_4 == "OFF") {
      image.src = "images/goodbye.jpg";
    } else {
      image.src = "https://www.fotoaparatas.lt/images/thumbs/thumb-3-55x30m-green-screen-349177-640-448.png";
      }
}

function Status_remote_AC_changeImage(Status_conference_AC_4, fan_speed_conference_AC_4, mode_conference_AC_4) {
    var image1 = document.getElementById('ac4_cool');
    var image2 = document.getElementById('ac4_dry');
    var image3 = document.getElementById('ac4_fan');
    var image4 = document.getElementById('ac4_lv1');
    var image5 = document.getElementById('ac4_lv2');
    var image6 = document.getElementById('ac4_lv3');
    var image7 = document.getElementById('ac4_lv4');
    var image8 = document.getElementById('ac4_lv5');

    if (Status_conference_AC_4 == "OFF") {
        image1.src = "images/remodeair/cooloff.png";
        image2.src = "images/remodeair/dryoff.png";
        image3.src = "images/remodeair/fanoff.png";
        image4.src = "images/remodeair/fanoff.png";
        image5.src = "images/remodeair/fanoff.png";
        image6.src = "images/remodeair/fanoff.png";
        image7.src = "images/remodeair/fanoff.png";
        image8.src = "images/remodeair/fanoff.png";
      } else if (Status_conference_AC_4 == "ON") {
          if (mode_conference_AC_4 == "COLD") {
             if (fan_speed_conference_AC_4 == "1") {
                image1.src = "images/remodeair/coolon.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanon.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanoff.png";
            } else if (fan_speed_conference_AC_4 == "2") {
                image1.src = "images/remodeair/coolon.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanon.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanoff.png";
            } else if (fan_speed_conference_AC_4 == "3") {
                image1.src = "images/remodeair/coolon.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanon.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanoff.png";
            } else if (fan_speed_conference_AC_4 == "4") {
                image1.src = "images/remodeair/coolon.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanon.png";
                image8.src = "images/remodeair/fanoff.png";
            } else if (fan_speed_conference_AC_4 == "5") {
                image1.src = "images/remodeair/coolon.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanon.png";
            }
          } else if (mode_conference_AC_4 == "DRY") {
                image1.src = "images/remodeair/cooloff.png";
                image2.src = "images/remodeair/dryon.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanoff.png";
              } else if (mode_conference_AC_4 == "FAN") {
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
function turn_on_con_ac_4(device_id) {
    console.log("turn_on_con_ac_4" + device_id);
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://msr-api.herokuapp.com/api/daikin/status",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
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
function turn_off_con_ac_4(device_id) {
    console.log("turn_off_con_ac_4" + device_id);
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://msr-api.herokuapp.com/api/daikin/status",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
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
var score_AC4 = parseInt(localStorage.getItem("temp_conference_AC_4_local"));
function up_temp_con_ac_4() {
    if (score_AC4 < 30) {
        score_AC4++;
    }
    document.getElementById("result4").innerHTML = score_AC4;
    return(score_AC4);
}

function down_temp_con_ac_4() {
    if (score_AC4 > 17) {
        score_AC4--;
    }
    document.getElementById("result4").innerHTML = score_AC4;
    return(score_AC4);
}

// Submit Temp
function summit_air4(device_id) {
    var fan_speed_conference_AC_4_local = localStorage.getItem("fan_speed_conference_AC_4_local");
    var set_temp_data = { device_type: "AC",
                          device_id: device_id, 
                          command: JSON.stringify({status:"ON",mode:"COLD",FAN: fan_speed_conference_AC_4_local,stemp: score_AC4.toString()} 
                          )};
    console.log(device_id + " adjust Con_1 AC Temp: " + score_AC4 + "degreeC")
    jQuery.ajax({
        url: "https://msr-api.herokuapp.com/api/daikin/command",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/x-www-form-urlencoded",
        data: set_temp_data,
        }) 
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            localStorage.setItem("temp_conference_AC_4_local", score_AC4)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
}

// CoolModeControl
function CoolModeControl_4(device_id) {
    var fan_speed_conference_AC_4_local = localStorage.getItem("fan_speed_conference_AC_4_local");
    var mode_conference_AC_4_local = "COLD";
    console.log(device_id + " cool mode control: COOL. And " + "Temp is : " + score_AC4);
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode: mode_conference_AC_4_local,FAN: fan_speed_conference_AC_4_local,stemp: score_AC4.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://msr-api.herokuapp.com/api/daikin/command",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/x-www-form-urlencoded",
        data: set_mode_data,
        })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            // Update_Cool_Mode()
            Status_remote_AC_changeImage(Status_conference_AC_4 = "ON", fan_speed_conference_AC_4_local, mode_conference_AC_4_local)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function Update_Cool_Mode() {
    document.getElementById('ac4_cool').src = "images/remodeair/coolon.png";
    document.getElementById('ac4_dry').src = "images/remodeair/dryoff.png";
    document.getElementById('ac4_fan').src = "images/remodeair/fanoff.png";
}

// DryModeControl
function DryModeControl_4(device_id) {
    var fan_speed_conference_AC_4_local = localStorage.getItem("fan_speed_conference_AC_4_local");
    var mode_conference_AC_4_local = "DRY";
    console.log("DryModeControl_4")
    console.log(device_id + " cool mode control: DRY");
    console.log("Temp is : " + score_AC4)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode: mode_conference_AC_4_local,FAN: fan_speed_conference_AC_4_local,stemp: score_AC4.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://msr-api.herokuapp.com/api/daikin/command",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/x-www-form-urlencoded",
        data: set_mode_data,
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            // Update_Dry_Mode()
            Status_remote_AC_changeImage(Status_conference_AC_4 = "ON", fan_speed_conference_AC_4_local, mode_conference_AC_4_local)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function Update_Dry_Mode() {
    document.getElementById('ac4_cool').src = "images/remodeair/cooloff.png";
    document.getElementById('ac4_dry').src = "images/remodeair/dryon.png";
    document.getElementById('ac4_fan').src = "images/remodeair/fanoff.png";
}

// FenModeControl
function FenModeControl_4(device_id) {
    var fan_speed_conference_AC_4_local = localStorage.getItem("fan_speed_conference_AC_4_local");
    var mode_conference_AC_4_local = "FAN";
    console.log("FenModeControl_4")
    console.log(device_id + " cool mode control: FAN");
    console.log("Temp is : " + score_AC4)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode: mode_conference_AC_4_local,FAN: fan_speed_conference_AC_4_local,stemp: score_AC4.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://msr-api.herokuapp.com/api/daikin/command",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/x-www-form-urlencoded",
        data: set_mode_data,
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            // Update_Fan_Mode()
            Status_remote_AC_changeImage(Status_conference_AC_4 = "ON", fan_speed_conference_AC_4_local, mode_conference_AC_4_local)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function Update_Fan_Mode() {
    document.getElementById('ac4_cool').src = "images/remodeair/cooloff.png";
    document.getElementById('ac4_dry').src = "images/remodeair/dryoff.png";
    document.getElementById('ac4_fan').src = "images/remodeair/fanon.png";
}


//Swing turn_off_ac
function swingturn_off_con_ac_4(device_id) {
    console.log(device_id + " swing mode control: OFF SWING");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://msr-api.herokuapp.com/api/plug",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
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
function swingturn_on_con_ac_4(device_id) {
    console.log(device_id + " swing mode control: ON SWING");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://msr-api.herokuapp.com/api/plug",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
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
function remote4_speedone(device_id) {
    console.log(device_id + " fan speed level: ONE");
    console.log("Temp is : " + score_AC4)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"1",stemp: score_AC4.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://msr-api.herokuapp.com/api/daikin/command",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/x-www-form-urlencoded",
        data: set_mode_data,
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            Update_Speed_AC_LV1()
            localStorage.setItem("fan_speed_conference_AC_4_local", "1")
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function Update_Speed_AC_LV1() {
    document.getElementById('ac4_lv1').src = "images/remodeair/fanon.png";
    document.getElementById('ac4_lv2').src = "images/remodeair/fanoff.png";
    document.getElementById('ac4_lv3').src = "images/remodeair/fanoff.png";
    document.getElementById('ac4_lv4').src = "images/remodeair/fanoff.png";
    document.getElementById('ac4_lv5').src = "images/remodeair/fanoff.png";
}

function remote4_speedtwo(device_id) {
    console.log(device_id + " fan speed level: TWO");
    console.log("Temp is : " + score_AC4)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"2",stemp: score_AC4.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://msr-api.herokuapp.com/api/daikin/command",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/x-www-form-urlencoded",
        data: set_mode_data,
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            Update_Speed_AC_LV2()
            localStorage.setItem("fan_speed_conference_AC_4_local", "2")
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function Update_Speed_AC_LV2() {
    document.getElementById('ac4_lv1').src = "images/remodeair/fanoff.png";
    document.getElementById('ac4_lv2').src = "images/remodeair/fanon.png";
    document.getElementById('ac4_lv3').src = "images/remodeair/fanoff.png";
    document.getElementById('ac4_lv4').src = "images/remodeair/fanoff.png";
    document.getElementById('ac4_lv5').src = "images/remodeair/fanoff.png";
}

function remote4_speedthree(device_id) {
    console.log(device_id + " fan speed level: THREE");
    console.log("Temp is : " + score_AC4)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"3",stemp: score_AC4.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://msr-api.herokuapp.com/api/daikin/command",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/x-www-form-urlencoded",
        data: set_mode_data,
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            Update_Speed_AC_LV3()
            localStorage.setItem("fan_speed_conference_AC_4_local", "3")
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
    document.getElementById('ac4_lv1').src = "images/remodeair/fanoff.png";
    document.getElementById('ac4_lv2').src = "images/remodeair/fanoff.png";
    document.getElementById('ac4_lv3').src = "images/remodeair/fanon.png";
    document.getElementById('ac4_lv4').src = "images/remodeair/fanoff.png";
    document.getElementById('ac4_lv5').src = "images/remodeair/fanoff.png";
}

function remote4_speedfour(device_id) {
    console.log(device_id + " fan speed level: FOUR");
    console.log("Temp is : " + score_AC4)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"4",stemp: score_AC4.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://msr-api.herokuapp.com/api/daikin/command",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/x-www-form-urlencoded",
        data: set_mode_data,
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            Update_Speed_AC_LV4()
            localStorage.setItem("fan_speed_conference_AC_4_local", "4")
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
    document.getElementById('ac4_lv1').src = "images/remodeair/fanoff.png";
    document.getElementById('ac4_lv2').src = "images/remodeair/fanoff.png";
    document.getElementById('ac4_lv3').src = "images/remodeair/fanoff.png";
    document.getElementById('ac4_lv4').src = "images/remodeair/fanon.png";
    document.getElementById('ac4_lv5').src = "images/remodeair/fanoff.png";
}

function remote4_speedfive(device_id) {
    console.log(device_id + " fan speed level: FIVE");
    console.log("Temp is : " + score_AC4)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"5",stemp: score_AC4.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://msr-api.herokuapp.com/api/daikin/command",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/x-www-form-urlencoded",
        data: set_mode_data,
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            Update_Speed_AC_LV5()
            localStorage.setItem("fan_speed_conference_AC_4_local", "5")
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
    document.getElementById('ac4_lv1').src = "images/remodeair/fanoff.png";
    document.getElementById('ac4_lv2').src = "images/remodeair/fanoff.png";
    document.getElementById('ac4_lv3').src = "images/remodeair/fanoff.png";
    document.getElementById('ac4_lv4').src = "images/remodeair/fanoff.png";
    document.getElementById('ac4_lv5').src = "images/remodeair/fanon.png";
}