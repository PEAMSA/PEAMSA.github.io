// Retrieve data from Firebase for Checking Device Status
var ref_devices_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("ac");
var ref_bedroom_AC = ref_devices_data.child("AC104001");

ref_bedroom_AC.on("value", function(snapshot) {
    console.log("Get ref_bedroom_AC from firebase")
    var bedroom_AC = snapshot.val();
    var Status_bedroom_AC = bedroom_AC["STATUS"];
    var temp_bedroom_AC = bedroom_AC["SET_TEMPERATURE"];
    console.log("Get Status bedroom AC: ")
    console.log("bedroom_AC is: " + Status_bedroom_AC + " and temperature is: " + temp_bedroom_AC);
    document.getElementById("result").innerHTML = temp_bedroom_AC;
    Status_bedroom_AC_changeImage(Status_bedroom_AC)
    Status_remote_AC_changeImage(Status_bedroom_AC)
    return(temp_bedroom_AC)
  });

// Change Image for Smart Plug
function Status_bedroom_AC_changeImage(Status_bedroom_AC) {
  var image = document.getElementById('ac1');
    console.log(Status_bedroom_AC)
  if (Status_bedroom_AC == "OFF") {
      image.src = "images/goodbye.jpg";
    } else {
      image.src = "https://www.fotoaparatas.lt/images/thumbs/thumb-3-55x30m-green-screen-349177-640-448.png";
      }
}

function Status_remote_AC_changeImage(Status_bedroom_AC) {
    var image1 = document.getElementById('ac_cool');
    var image2 = document.getElementById('ac_dry');
    var image3 = document.getElementById('ac_fan');
    var image4 = document.getElementById('ac_lv1');
    var image5 = document.getElementById('ac_lv2');
    var image6 = document.getElementById('ac_lv3');
    var image7 = document.getElementById('ac_lv4');
    var image8 = document.getElementById('ac_lv5');

    if (Status_bedroom_AC == "OFF") {
        image1.src = "images/remodeair/cooloff.png";
        image2.src = "images/remodeair/dryoff.png";
        image3.src = "images/remodeair/fanoff.png";
        image4.src = "images/remodeair/fanoff.png";
        image5.src = "images/remodeair/fanoff.png";
        image6.src = "images/remodeair/fanoff.png";
        image7.src = "images/remodeair/fanoff.png";
        image8.src = "images/remodeair/fanoff.png";
      } else {
        image1.src = "images/remodeair/coolon.png";
        image2.src = "images/remodeair/dryoff.png";
        image3.src = "images/remodeair/fanoff.png";
        image4.src = "images/remodeair/fanoff.png";
        image5.src = "images/remodeair/fanoff.png";
        image6.src = "images/remodeair/fanoff.png";
        image7.src = "images/remodeair/fanoff.png";
        image8.src = "images/remodeair/fanon.png";
        }
}

// On
function turn_on_ac(device_id) {
    console.log("turn_on_con_ac" + device_id);
    console.log(device_id)
    //
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
function turn_off_ac(device_id) {
    console.log("turn_off_con_ac" + device_id);
    console.log(device_id)
    //
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
var score = 25;
function up_remote1() {
    if (score < 30) {
        score++;
    }
    document.getElementById("result").innerHTML = score;
    return(score);
}

function down_remote1() {
    if (score > 17) {
        score--;
    }
    document.getElementById("result").innerHTML = score;
    return(score);
}

// Submit Temp
function summit_air(device_id) {
    var set_temp_data = { device_type: "AC",
                          device_id: device_id, 
                          command: JSON.stringify({status:"ON",mode:"COLD",FAN:"5",stemp: score.toString()} 
                          )};
    console.log(set_temp_data)
    console.log(device_id + " adjust Bedroom AC Temp: " + score + "degreeC")
    console.log("Please wait...we are adjusting your AC temp.")
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
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
}

// CoolModeControl
function CoolModeControl(device_id) {
    console.log("CoolModeControl")
    console.log(device_id + " cool mode control: COOL");
    console.log("Temp is : " + score)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"5",stemp: score.toString()})
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
            Update_Cool_Mode()
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
    document.getElementById('ac_cool').src = "images/remodeair/coolon.png";
    document.getElementById('ac_dry').src = "images/remodeair/dryoff.png";
    document.getElementById('ac_fan').src = "images/remodeair/fanoff.png";
}

// DryModeControl
function DryModeControl(device_id) {
    console.log("DryModeControl")
    console.log(device_id + " cool mode control: DRY");
    console.log("Temp is : " + score)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"DRY",FAN:"5",stemp: score.toString()})
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
            Update_Dry_Mode()
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
    document.getElementById('ac_cool').src = "images/remodeair/cooloff.png";
    document.getElementById('ac_dry').src = "images/remodeair/dryon.png";
    document.getElementById('ac_fan').src = "images/remodeair/fanoff.png";
}

// FenModeControl
function FenModeControl(device_id) {
    console.log("FenModeControl")
    console.log(device_id + " cool mode control: FAN");
    console.log("Temp is : " + score)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"FAN",FAN:"5",stemp: score.toString()})
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
            Update_Fan_Mode()
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
    document.getElementById('ac_cool').src = "images/remodeair/cooloff.png";
    document.getElementById('ac_dry').src = "images/remodeair/dryoff.png";
    document.getElementById('ac_fan').src = "images/remodeair/fanon.png";
}


//Swing turn_off_ac
function swingturn_off_ac(device_id) {
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
function swingturn_oื_ac(device_id) {
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
function speedone(device_id) {
    console.log(device_id + " fan speed level: ONE");
    console.log("Temp is : " + score)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"1",stemp: score.toString()})
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
            Update_Speed_LV1()
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function Update_Speed_LV1() {
    document.getElementById('ac_lv1').src = "images/remodeair/fanon.png";
    document.getElementById('ac_lv2').src = "images/remodeair/fanoff.png";
    document.getElementById('ac_lv3').src = "images/remodeair/fanoff.png";
    document.getElementById('ac_lv4').src = "images/remodeair/fanoff.png";
    document.getElementById('ac_lv5').src = "images/remodeair/fanoff.png";
}

function speedtwo(device_id) {
    console.log(device_id + " fan speed level: TWO");
    console.log("Temp is : " + score)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"2",stemp: score.toString()})
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
            Update_Speed_LV2()
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function Update_Speed_LV2() {
    document.getElementById('ac_lv1').src = "images/remodeair/fanoff.png";
    document.getElementById('ac_lv2').src = "images/remodeair/fanon.png";
    document.getElementById('ac_lv3').src = "images/remodeair/fanoff.png";
    document.getElementById('ac_lv4').src = "images/remodeair/fanoff.png";
    document.getElementById('ac_lv5').src = "images/remodeair/fanoff.png";
}

function speedthree(device_id) {
    console.log(device_id + " fan speed level: THREE");
    console.log("Temp is : " + score)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"3",stemp: score.toString()})
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
            Update_Speed_LV3()
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function Update_Speed_LV3() {
    document.getElementById('ac_lv1').src = "images/remodeair/fanoff.png";
    document.getElementById('ac_lv2').src = "images/remodeair/fanoff.png";
    document.getElementById('ac_lv3').src = "images/remodeair/fanon.png";
    document.getElementById('ac_lv4').src = "images/remodeair/fanoff.png";
    document.getElementById('ac_lv5').src = "images/remodeair/fanoff.png";
}

function speedfour(device_id) {
    console.log(device_id + " fan speed level: FOUR");
    console.log("Temp is : " + score)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"4",stemp: score.toString()})
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
            Update_Speed_LV4()
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function Update_Speed_LV4() {
    document.getElementById('ac_lv1').src = "images/remodeair/fanoff.png";
    document.getElementById('ac_lv2').src = "images/remodeair/fanoff.png";
    document.getElementById('ac_lv3').src = "images/remodeair/fanoff.png";
    document.getElementById('ac_lv4').src = "images/remodeair/fanon.png";
    document.getElementById('ac_lv5').src = "images/remodeair/fanoff.png";
}

function speedfive(device_id) {
    console.log(device_id + " fan speed level: FIVE");
    console.log("Temp is : " + score)
    var set_mode_data = {   device_type: "AC",
                            device_id: device_id, 
                            command: JSON.stringify({status:"ON",mode:"COLD",FAN:"5",stemp: score.toString()})
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
            Update_Speed_LV5()
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function Update_Speed_LV5() {
    document.getElementById('ac_lv1').src = "images/remodeair/fanoff.png";
    document.getElementById('ac_lv2').src = "images/remodeair/fanoff.png";
    document.getElementById('ac_lv3').src = "images/remodeair/fanoff.png";
    document.getElementById('ac_lv4').src = "images/remodeair/fanoff.png";
    document.getElementById('ac_lv5').src = "images/remodeair/fanon.png";
}

