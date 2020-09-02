// Set lighting to default status: OFF
var Status_lighting_row_4 = "OFF"
localStorage.setItem("Status_lighting_row_4_Local", Status_lighting_row_4)

// Retrieve data from Firebase for Checking Device Status
var ref_devices_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("lighting");
var ref_lighting_row_4 = ref_devices_data.child("MT04");

ref_lighting_row_4.on("value", function(snapshot) {
    var lighting_row_4 = snapshot.val();
    // Recheck Device Status from Firebase // 
    var Status_lighting_row_4 = lighting_row_4["STATUS"];
    Status_lighting_row_4_changeImage(Status_lighting_row_4)
    var Status_lighting_row_4_Local = localStorage.setItem("Status_lighting_row_4_Local", Status_lighting_row_4)
  });

// Change Image for Smart Plug
function Status_lighting_row_4_changeImage(Status_lighting_row_4) {
  var image = document.getElementById('Conference_Lighting_row4_Button');
  var image4_1 = document.getElementById('row4_1');
  var image4_2 = document.getElementById('row4_2');
  var image4_3 = document.getElementById('row4_3');

  if (Status_lighting_row_4 == "OFF") {
        image.src = "images/remodeair/switchoff.png";
        image4_1.style.backgroundColor = "grey";
        image4_2.style.backgroundColor = "grey";
        image4_3.style.backgroundColor = "grey";

      } else {
      image.src = "images/remodeair/switchon.png";
      image4_1.style.backgroundColor = "#FBAB7E";
      image4_2.style.backgroundColor = "#FBAB7E";
      image4_3.style.backgroundColor = "#FBAB7E";
    }
}

//  On/Off Lighting Row 4
function lightingrow4(devieID_lighting_row_4) {
    var Status_lighting_row_4 = localStorage.getItem("Status_lighting_row_4_Local")
    if (Status_lighting_row_4 == "OFF") {
      Status_lighting_row_4 = "ON"
    } else {
      Status_lighting_row_4 = "OFF"
    }
    lighting4_post_data = { 
      device_type: "lighting",
      device_id: devieID_lighting_row_4, 
      command: JSON.stringify({status: Status_lighting_row_4})
    };
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/lighting",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/lighting",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/json",
        data: lighting4_post_data,
        })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            var Status_lighting_row_4_Local = localStorage.setItem("Status_lighting_row_4_Local", Status_lighting_row_4)
            Status_lighting_row_4_changeImage(Status_lighting_row_4)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}