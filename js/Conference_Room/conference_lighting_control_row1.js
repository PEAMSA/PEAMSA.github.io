// Set lighting to default status: OFF
var Status_lighting_row_1 = "OFF"
localStorage.setItem("Status_lighting_row_1_Local", Status_lighting_row_1)

// Retrieve data from Firebase for Checking Device Status
var ref_devices_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("lighting");
var ref_lighting_row_1 = ref_devices_data.child("xxxxxx");

ref_lighting_row_1.on("value", function(snapshot) {
    console.log("Get smart_plug_1 from firebase")
    var lighting_row_1 = snapshot.val();
    // console.log(smart_plug_1["CURRENT"])
    // document.getElementById("xxx").innerHTML = lighting_row_1["STATUS"];
    // Recheck Device Status from Firebase // 
    var Status_lighting_row_1 = lighting_row_1["STATUS"];
    console.log(Status_lighting_row_1);
    Status_lighting_row_1_changeImage(Status_lighting_row_1)
    var Status_lighting_row_1_Local = localStorage.setItem("Status_lighting_row_1_Local", Status_lighting_row_1)
  });

// Change Image for Smart Plug
function Status_lighting_row_1_changeImage(Status_lighting_row_1) {
  var image = document.getElementById('Conference_Lighting_row1_Button');
  var image1_4 = document.getElementById('row1_4');
  var image1_5 = document.getElementById('row1_5');
  var image1_6 = document.getElementById('row1_6');
  var image1_7 = document.getElementById('row1_7');
  var image1_8 = document.getElementById('row1_8');
  var image1_9 = document.getElementById('row1_9');
  var image2_2 = document.getElementById('row2_2');
  var image2_3 = document.getElementById('row2_3');
  var image2_4 = document.getElementById('row2_4');

  if (Status_lighting_row_1 == "OFF") {
      image.src = "images/remodeair/switchoff.png";
      image1_4.src = "images/goodbye.jpg";
      image1_5.src = "images/goodbye.jpg";
      image1_6.src = "images/goodbye.jpg";
      image1_7.src = "images/goodbye.jpg";
      image1_8.src = "images/goodbye.jpg";
      image1_9.src = "images/goodbye.jpg";
      image2_2.src = "images/goodbye.jpg";
      image2_3.src = "images/goodbye.jpg";
      image2_4.src = "images/goodbye.jpg";
    } else {
      image.src = "images/remodeair/switchon.png";
      image1_4.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
      image1_5.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
      image1_6.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
      image1_7.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
      image1_8.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
      image1_9.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
      image2_2.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
      image2_3.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
      image2_4.src = "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-chrome-yellow-solid-color-background.jpg";
      }
}

//  On/Off Lighting Row 1
function lightingrow1(devieID_lighting_row_1) {
    console.log("-----Control_Lighting_row_1-----");
    console.log(devieID_lighting_row_1)
    console.log(localStorage.getItem("Status_lighting_row_1_Local"))
    //
    var Status_lighting_row_1 = localStorage.getItem("Status_lighting_row_1_Local")
    if (Status_lighting_row_1 == "OFF") {
      Status_lighting_row_1 = "ON"
    } else {
      Status_lighting_row_1 = "OFF"
    }
    //
    lighting1_post_data = { 
      device_type: "lighting",
      device_id: devieID_lighting_row_1, 
      command: JSON.stringify({status: Status_lighting_row_1})
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
      data: lighting1_post_data,
        })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            var Status_lighting_row_1_Local = localStorage.setItem("Status_lighting_row_1_Local", Status_lighting_row_1)
            Status_lighting_row_1_changeImage(Status_lighting_row_1)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}