// Retrieve data from Firebase for Checking Device Status
var ref_devices_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("lighting");
var ref_lighting_row = ref_devices_data.child("BD01");

ref_lighting_row.on("value", function(snapshot) {
    var lighting_row = snapshot.val();
    // Recheck Device Status from Firebase // 
    var Status_lighting_row = lighting_row["STATUS"];
    
    lighting_changeImage(Status_lighting_row)
    // var Status_lighting_row_1_Local = localStorage.setItem("Status_lighting_row_1_Local", Status_lighting_row_1)
  });




//  On/Off Lighting Row 1
function turn_off_light(device_id) {
    lighting_post_data = { 
      device_type: "lighting",
      device_id: device_id, 
      command: JSON.stringify({status: "OFF"})
    };
    console.log("POST method by jQuery");
    jQuery.ajax({
      url: "https://msr-api.herokuapp.com/api/lighting",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
      },
      contentType: "application/json",
      data: lighting_post_data,
        })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            // lighting_changeImage(status = "OFF")
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function turn_on_light(device_id) {
    lighting_post_data = { 
      device_type: "lighting",
      device_id: device_id, 
      command: JSON.stringify({status: "ON"})
    };
    console.log("POST method by jQuery");
    jQuery.ajax({
      url: "https://msr-api.herokuapp.com/api/lighting",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
      },
      contentType: "application/json",
      data: lighting_post_data,
        })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            // lighting_changeImage(status = "ON")
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //
}

function lighting_changeImage(status) {
    var image1_1 = document.getElementById('eorow1_1');
    var image1_2 = document.getElementById('eorow1_2');
    var image1_3 = document.getElementById('eorow1_3');
    var image1_4 = document.getElementById('eorow2_1');
    var image1_5 = document.getElementById('eorow2_2');
    var image1_6 = document.getElementById('eorow2_3');
    var image1_7 = document.getElementById('eorow3_1');
    var image1_8 = document.getElementById('eorow3_2');
    var image1_9 = document.getElementById('eorow3_3');

    if (status == "OFF") {
        image1_1.src = "images/goodbye.jpg";
        image1_2.src = "images/goodbye.jpg";
        image1_3.src = "images/goodbye.jpg";
        image1_4.src = "images/goodbye.jpg";
        image1_5.src = "images/goodbye.jpg";
        image1_6.src = "images/goodbye.jpg";
        image1_7.src = "images/goodbye.jpg";
        image1_8.src = "images/goodbye.jpg";
        image1_9.src = "images/goodbye.jpg";

    } else {
        image1_1.src = "https://www.colorhexa.com/fbab7e.png";
        image1_2.src = "https://www.colorhexa.com/fbab7e.png";
        image1_3.src = "https://www.colorhexa.com/fbab7e.png";
        image1_4.src = "https://www.colorhexa.com/fbab7e.png";
        image1_5.src = "https://www.colorhexa.com/fbab7e.png";
        image1_6.src = "https://www.colorhexa.com/fbab7e.png";
        image1_7.src = "https://www.colorhexa.com/fbab7e.png";
        image1_8.src = "https://www.colorhexa.com/fbab7e.png";
        image1_9.src = "https://www.colorhexa.com/fbab7e.png";
    }
}