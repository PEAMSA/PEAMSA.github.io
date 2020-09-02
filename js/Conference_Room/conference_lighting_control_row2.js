// Set lighting to default status: OFF
var Status_lighting_row_2 = "OFF"
localStorage.setItem("Status_lighting_row_2_Local", Status_lighting_row_2)

// Retrieve data from Firebase for Checking Device Status
var ref_devices_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("lighting");
var ref_lighting_row_2 = ref_devices_data.child("yyyyyy");

ref_lighting_row_2.on("value", function(snapshot) {
    var lighting_row_2 = snapshot.val();
    document.getElementById("xxx").innerHTML = lighting_row_2["STATUS"];
    // Recheck Device Status from Firebase // 
    var Status_lighting_row_2 = lighting_row_2["STATUS"];
    Status_lighting_row_2_changeImage(Status_lighting_row_2)
    var Status_lighting_row_2_Local = localStorage.setItem("Status_lighting_row_2_Local", Status_lighting_row_2)
  });

// Change Image for Smart Plug
function Status_lighting_row_2_changeImage(Status_lighting_row_2) {
  var image = document.getElementById('Conference_Lighting_row2_Button');
  var image2_1 = document.getElementById('row2_1');
  var image2_2 = document.getElementById('row2_2');
  var image2_3 = document.getElementById('row2_3');
  var image2_4 = document.getElementById('row2_4');
  var image2_5 = document.getElementById('row2_5');
  var image2_6 = document.getElementById('row2_6');
  var image2_7 = document.getElementById('row2_7');
  var image2_8 = document.getElementById('row2_8');
  var image2_9 = document.getElementById('row2_9');


  if (Status_lighting_row_2 == "OFF") {
      image.src = "images/remodeair/switchoff.png";
      image2_1.style.backgroundColor = "grey";
      image2_2.style.backgroundColor = "grey";
      image2_3.style.backgroundColor = "grey";
      image2_4.style.backgroundColor = "grey";
      image2_5.style.backgroundColor = "grey";
      image2_6.style.backgroundColor = "grey";
      image2_7.style.backgroundColor = "grey";
      image2_8.style.backgroundColor = "grey";
      image2_9.style.backgroundColor = "grey";
      } else {
      image.src = "images/remodeair/switchon.png";
      image2_1.style.backgroundColor = "#FBAB7E";
      image2_2.style.backgroundColor = "#FBAB7E";
      image2_3.style.backgroundColor = "#FBAB7E";
      image2_4.style.backgroundColor = "#FBAB7E";
      image2_5.style.backgroundColor = "#FBAB7E";
      image2_6.style.backgroundColor = "#FBAB7E";
      image2_7.style.backgroundColor = "#FBAB7E";
      image2_8.style.backgroundColor = "#FBAB7E";
      image2_9.style.backgroundColor = "#FBAB7E";
        }
}

//  On/Off Lighting Row 2
function lightingrow2(devieID_lighting_row_2) {
    var Status_lighting_row_2 = localStorage.getItem("Status_lighting_row_2_Local")
    if (Status_lighting_row_2 == "OFF") {
      Status_lighting_row_2 = "ON"
    } else {
      Status_lighting_row_2 = "OFF"
    }
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