// Retrieve data from Firebase for Checking Device Status
var ref_devices_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("ac");
var ref_conference_AC_2 = ref_devices_data.child("AC101003");

ref_conference_AC_2.on("value", function(snapshot) {
    console.log("Get conference_AC_2 from firebase")
    var conference_AC_2 = snapshot.val();
    var Status_conference_AC_2 = conference_AC_2["STATUS"];
    var temp_conference_AC_2 = conference_AC_2["TEMPERATURE"];
    var fan_speed_conference_AC_2 = conference_AC_2["FAN_SPEED"];
    var mode_conference_AC_2 = conference_AC_2["MODE"];
    console.log("Get Status Conference AC 2: ")
    console.log("Conference AC 2 is: " + Status_conference_AC_2 + " and temperature is: " + temp_conference_AC_2);
    document.getElementById("result2").innerHTML = temp_conference_AC_2;
    localStorage.setItem("temp_conference_AC_2_local", temp_conference_AC_2)
    localStorage.setItem("fan_speed_conference_AC_2_local", fan_speed_conference_AC_2)
    localStorage.setItem("mode_conference_AC_2_local", mode_conference_AC_2)
    Status_conference_AC_2_changeImage(Status_conference_AC_2)
    Status_remote_AC_2_changeImage(Status_conference_AC_2, fan_speed_conference_AC_2, mode_conference_AC_2)
  });

// Change Image for Smart Plug
function Status_conference_AC_2_changeImage(Status_conference_AC_2) {
  var image = document.getElementById('ac_2');

  if (Status_conference_AC_2 == "OFF") {
      image.src = "images/goodbye.jpg";
    } else {
      image.src = "https://www.fotoaparatas.lt/images/thumbs/thumb-3-55x30m-green-screen-349177-640-448.png";
      }
}

function Status_remote_AC_2_changeImage(Status_conference_AC_2, fan_speed_conference_AC_2, mode_conference_AC_2) {
    var image1 = document.getElementById('ac2_cool');
    var image2 = document.getElementById('ac2_dry');
    var image3 = document.getElementById('ac2_fan');
    var image4 = document.getElementById('ac2_lv1');
    var image5 = document.getElementById('ac2_lv2');
    var image6 = document.getElementById('ac2_lv3');
    var image7 = document.getElementById('ac2_lv4');
    var image8 = document.getElementById('ac2_lv5');

    if (Status_conference_AC_2 == "OFF") {
        image1.src = "images/remodeair/cooloff.png";
        image2.src = "images/remodeair/dryoff.png";
        image3.src = "images/remodeair/fanoff.png";
        image4.src = "images/remodeair/fanoff.png";
        image5.src = "images/remodeair/fanoff.png";
        image6.src = "images/remodeair/fanoff.png";
        image7.src = "images/remodeair/fanoff.png";
        image8.src = "images/remodeair/fanoff.png";
      } else if (Status_conference_AC_2 == "ON") {
          if (mode_conference_AC_2 == "COLD") {
             if (fan_speed_conference_AC_2 == "1") {
                image1.src = "images/remodeair/coolon.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanon.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanoff.png";
            } else if (fan_speed_conference_AC_2 == "2") {
                image1.src = "images/remodeair/coolon.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanon.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanoff.png";
            } else if (fan_speed_conference_AC_2 == "3") {
                image1.src = "images/remodeair/coolon.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanon.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanoff.png";
            } else if (fan_speed_conference_AC_2 == "4") {
                image1.src = "images/remodeair/coolon.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanon.png";
                image8.src = "images/remodeair/fanoff.png";
            } else if (fan_speed_conference_AC_2 == "5") {
                image1.src = "images/remodeair/coolon.png";
                image2.src = "images/remodeair/dryoff.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanon.png";
            }
          } else if (mode_conference_AC_2 == "DRY") {
                image1.src = "images/remodeair/cooloff.png";
                image2.src = "images/remodeair/dryon.png";
                image3.src = "images/remodeair/fanoff.png";
                image4.src = "images/remodeair/fanoff.png";
                image5.src = "images/remodeair/fanoff.png";
                image6.src = "images/remodeair/fanoff.png";
                image7.src = "images/remodeair/fanoff.png";
                image8.src = "images/remodeair/fanoff.png";
              } else if (mode_conference_AC_2 == "FAN") {
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
function turn_on_con_ac_2(device_id) {
    console.log("turn_on_con_ac_2" + device_id);
    console.log(device_id)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/daikin/status",
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
function turn_off_con_ac_2(device_id) {
    console.log("turn_off_con_ac_1" + device_id);
    console.log(device_id)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/daikin/status",
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
var score_AC2 = parseInt(localStorage.getItem("temp_conference_AC_2_local"));
function up_temp_con_ac_2() {
    if (score_AC2 < 30) {
        score_AC2++;
    }
    document.getElementById("result2").innerHTML = score_AC2;
    return(score_AC2);
}

function down_temp_con_ac_2() {
    if (score_AC2 > 17) {
        score_AC2--;
    }
    document.getElementById("result2").innerHTML = score_AC2;
    return(score_AC2);
}

// Submit Temp
function summit_air2(device_id) {
    var fan_speed_conference_AC_2_local = localStorage.getItem("fan_speed_conference_AC_2_local");
    var set_temp_data = { device_type: "AC",
                          device_id: device_id, 
                          command: JSON.stringify({status:"ON",mode:"COLD",FAN: fan_speed_conference_AC_2_local,stemp: score_AC2.toString()} 
                          )};
    console.log(set_temp_data)
    console.log(device_id + " adjust Con_2 AC Temp: " + score_AC2 + "degreeC")
    console.log("Please wait...we are adjusting your AC temp.")
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/daikin/command",
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
            localStorage.setItem("temp_conference_AC_2_local", score_AC2)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
}

// CoolModeControl
function CoolModeControl_2(device_id) {
    var fan_speed_conference_AC_2_local = localStorage.getItem("fan_speed_conference_AC_2_local");
    var mode_conference_AC_2_local = "COLD";
    console.log("CoolModeControl_2")
    console.log(device_id + " cool mode control: COOL");
    console.log("Temp is : " + score_AC2)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode: mode_conference_AC_2_local,FAN: fan_speed_conference_AC_2_local,stemp: score_AC2.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/daikin/command",
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
            Status_remote_AC_2_changeImage(Status_conference_AC_2 = "ON", fan_speed_conference_AC_2_local, mode_conference_AC_2_local)
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
function DryModeControl_2(device_id) {
    var fan_speed_conference_AC_2_local = localStorage.getItem("fan_speed_conference_AC_2_local");
    var mode_conference_AC_2_local = "DRY";
    console.log("DryModeControl_2")
    console.log(device_id + " cool mode control: DRY");
    console.log("Temp is : " + score_AC2)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode: mode_conference_AC_2_local,FAN: fan_speed_conference_AC_2_local,stemp: score_AC2.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/daikin/command",
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
            Status_remote_AC_2_changeImage(Status_conference_AC_2 = "ON", fan_speed_conference_AC_2_local, mode_conference_AC_2_local)
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
function FenModeControl_2(device_id) {
    var fan_speed_conference_AC_2_local = localStorage.getItem("fan_speed_conference_AC_2_local");
    var mode_conference_AC_2_local = "FAN";
    console.log("FenModeControl_2")
    console.log(device_id + " cool mode control: FAN");
    console.log("Temp is : " + score_AC2)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode: mode_conference_AC_2_local,FAN: fan_speed_conference_AC_2_local,stemp: score_AC2.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/daikin/command",
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
            Status_remote_AC_2_changeImage(Status_conference_AC_2 = "ON", fan_speed_conference_AC_2_local, mode_conference_AC_2_local)
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
function swingturn_off_con_ac_2(device_id) {
    console.log(device_id + " swing mode control: OFF SWING");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/plug",
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
function swingturn_on_con_ac_2(device_id) {
    console.log(device_id + " swing mode control: ON SWING");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/plug",
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
function remote2_speedone(device_id) {
    console.log(device_id + " fan speed level: ONE");
    console.log("Temp is : " + score_AC2)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"1",stemp: score_AC2.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/daikin/command",
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
            localStorage.setItem("fan_speed_conference_AC_2_local", "1")
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
    document.getElementById('ac2_lv1').src = "images/remodeair/fanon.png";
    document.getElementById('ac2_lv2').src = "images/remodeair/fanoff.png";
    document.getElementById('ac2_lv3').src = "images/remodeair/fanoff.png";
    document.getElementById('ac2_lv4').src = "images/remodeair/fanoff.png";
    document.getElementById('ac2_lv5').src = "images/remodeair/fanoff.png";
}

function remote2_speedtwo(device_id) {
    console.log(device_id + " fan speed level: TWO");
    console.log("Temp is : " + score_AC2)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"2",stemp: score_AC2.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/daikin/command",
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
            localStorage.setItem("fan_speed_conference_AC_2_local", "2")
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
    document.getElementById('ac2_lv1').src = "images/remodeair/fanoff.png";
    document.getElementById('ac2_lv2').src = "images/remodeair/fanon.png";
    document.getElementById('ac2_lv3').src = "images/remodeair/fanoff.png";
    document.getElementById('ac2_lv4').src = "images/remodeair/fanoff.png";
    document.getElementById('ac2_lv5').src = "images/remodeair/fanoff.png";
}

function remote2_speedthree(device_id) {
    console.log(device_id + " fan speed level: THREE");
    console.log("Temp is : " + score_AC2)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"3",stemp: score_AC2.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/daikin/command",
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
            localStorage.setItem("fan_speed_conference_AC_2_local", "3")
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
    document.getElementById('ac2_lv1').src = "images/remodeair/fanoff.png";
    document.getElementById('ac2_lv2').src = "images/remodeair/fanoff.png";
    document.getElementById('ac2_lv3').src = "images/remodeair/fanon.png";
    document.getElementById('ac2_lv4').src = "images/remodeair/fanoff.png";
    document.getElementById('ac2_lv5').src = "images/remodeair/fanoff.png";
}

function remote2_speedfour(device_id) {
    console.log(device_id + " fan speed level: FOUR");
    console.log("Temp is : " + score_AC2)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"4",stemp: score_AC2.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/daikin/command",
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
            localStorage.setItem("fan_speed_conference_AC_2_local", "4")
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
    document.getElementById('ac2_lv1').src = "images/remodeair/fanoff.png";
    document.getElementById('ac2_lv2').src = "images/remodeair/fanoff.png";
    document.getElementById('ac2_lv3').src = "images/remodeair/fanoff.png";
    document.getElementById('ac2_lv4').src = "images/remodeair/fanon.png";
    document.getElementById('ac2_lv5').src = "images/remodeair/fanoff.png";
}

function remote2_speedfive(device_id) {
    console.log(device_id + " fan speed level: FIVE");
    console.log("Temp is : " + score_AC2)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"5",stemp: score_AC2.toString()})
                        };
    console.log(set_mode_data)
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/daikin/command",
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
            localStorage.setItem("fan_speed_conference_AC_2_local", "5")
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
    document.getElementById('ac2_lv1').src = "images/remodeair/fanoff.png";
    document.getElementById('ac2_lv2').src = "images/remodeair/fanoff.png";
    document.getElementById('ac2_lv3').src = "images/remodeair/fanoff.png";
    document.getElementById('ac2_lv4').src = "images/remodeair/fanoff.png";
    document.getElementById('ac2_lv5').src = "images/remodeair/fanon.png";
}