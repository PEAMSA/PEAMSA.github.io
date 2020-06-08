// Set lighting to default status: OFF
var Status_lighting_row_2 = "OFF"
localStorage.setItem("Status_lighting_row_2_Local", Status_lighting_row_2)

// Retrieve data from Firebase for Checking Device Status
var ref_devices_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("lighting");
var ref_lighting_row_2 = ref_devices_data.child("yyyyyy");

ref_lighting_row_2.on("value", function(snapshot) {
    console.log("Get smart_plug_1 from firebase")
    var lighting_row_2 = snapshot.val();
    // console.log(smart_plug_1["CURRENT"])
    document.getElementById("xxx").innerHTML = lighting_row_2["STATUS"];
    // Recheck Device Status from Firebase // 
    var Status_lighting_row_2 = lighting_row_2["STATUS"];
    console.log(Status_lighting_row_2);
    Status_lighting_row_2_changeImage(Status_lighting_row_2)
    var Status_lighting_row_2_Local = localStorage.setItem("Status_lighting_row_2_Local", Status_lighting_row_2)
  });

// Change Image for Smart Plug
function Status_lighting_row_2_changeImage(Status_lighting_row_2) {
  var image = document.getElementById('Conference_Lighting_row2_Button');
  var image1_1 = document.getElementById('row1_1');
  var image1_2 = document.getElementById('row1_2');
  var image1_3 = document.getElementById('row1_3');
  var image2_1 = document.getElementById('row2_1');


  if (Status_lighting_row_2 == "OFF") {
      image.src = "images/remodeair/switchoff.png";
      image1_1.src = "images/goodbye.jpg";
      image1_2.src = "images/goodbye.jpg";
      image1_3.src = "images/goodbye.jpg";
      image2_1.src = "images/goodbye.jpg";
      } else {
      image.src = "images/remodeair/switchon.png";
      image1_1.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
      image1_2.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
      image1_3.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
      image2_1.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
        }
}

//  On/Off Lighting Row 2
function lightingrow2(devieID_lighting_row_2) {
    console.log("-----Control_Lighting_row_2-----");
    console.log(devieID_lighting_row_2)
    console.log(localStorage.getItem("Status_lighting_row_2_Local"))
    //
    var Status_lighting_row_2 = localStorage.getItem("Status_lighting_row_2_Local")
    if (Status_lighting_row_2 == "OFF") {
      Status_lighting_row_2 = "ON"
    } else {
      Status_lighting_row_2 = "OFF"
    }
    //
    lighting2_post_data = { 
      device_type: "lighting",
      device_id: devieID_lighting_row_2, 
      command: JSON.stringify({status: Status_lighting_row_2})
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
      data: lighting2_post_data,
      })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            var Status_lighting_row_2_Local = localStorage.setItem("Status_lighting_row_2_Local", Status_lighting_row_2)
            Status_lighting_row_2_changeImage(Status_lighting_row_2)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}