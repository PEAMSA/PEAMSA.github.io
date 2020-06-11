// Set lighting to default status: OFF
var Status_lighting_row_3 = "OFF"
localStorage.setItem("Status_lighting_row_3_Local", Status_lighting_row_3)

// Retrieve data from Firebase for Checking Device Status
var ref_devices_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("lighting");
var ref_lighting_row_3 = ref_devices_data.child("yyyyyy");

ref_lighting_row_3.on("value", function(snapshot) {
    var lighting_row_3 = snapshot.val();
    document.getElementById("xxx").innerHTML = lighting_row_3["STATUS"];
    // Recheck Device Status from Firebase // 
    var Status_lighting_row_3 = lighting_row_3["STATUS"];
    Status_lighting_row_3_changeImage(Status_lighting_row_3)
    var Status_lighting_row_3_Local = localStorage.setItem("Status_lighting_row_3_Local", Status_lighting_row_3)
  });

// Change Image for Smart Plug
function Status_lighting_row_3_changeImage(Status_lighting_row_3) {
  var image = document.getElementById('Conference_Lighting_row3_Button');
  var image3_1 = document.getElementById('row3_1');
  var image3_2 = document.getElementById('row3_2');

  if (Status_lighting_row_3 == "OFF") {
      image.src = "images/remodeair/switchoff.png";
      image3_1.src = "images/goodbye.jpg";
      image3_2.src = "images/goodbye.jpg";

      } else {
      image.src = "images/remodeair/switchon.png";
      image3_1.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
      image3_2.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";        
    }
}

//  On/Off Lighting Row 3
function lightingrow3(devieID_lighting_row_3) {
    var Status_lighting_row_3 = localStorage.getItem("Status_lighting_row_3_Local")
    if (Status_lighting_row_3 == "OFF") {
      Status_lighting_row_3 = "ON"
    } else {
      Status_lighting_row_3 = "OFF"
    }
    lighting3_post_data = { 
        device_type: "lighting",
        device_id: devieID_lighting_row_3, 
        command: JSON.stringify({status: Status_lighting_row_3})
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
        data: lighting3_post_data,
        })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            var Status_lighting_row_3_Local = localStorage.setItem("Status_lighting_row_3_Local", Status_lighting_row_3)
            Status_lighting_row_3_changeImage(Status_lighting_row_3)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}