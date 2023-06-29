// Set lighting to default status: OFF
var Status_lighting_row_1 = "OFF"
localStorage.setItem("Status_lighting_row_1_Local", Status_lighting_row_1)

// Retrieve data from Firebase for Checking Device Status
var ref_devices_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("lighting");
var ref_lighting_row_1 = ref_devices_data.child("MT01");

ref_lighting_row_1.on("value", function(snapshot) {
    var lighting_row_1 = snapshot.val();
    // Recheck Device Status from Firebase // 
    var Status_lighting_row_1 = lighting_row_1["STATUS"];
    Status_lighting_row_1_changeImage(Status_lighting_row_1)
    var Status_lighting_row_1_Local = localStorage.setItem("Status_lighting_row_1_Local", Status_lighting_row_1)
  });

// Change Image for Smart Plug
function Status_lighting_row_1_changeImage(Status_lighting_row_1) {
  var image = document.getElementById('Conference_Lighting_row1_Button');
  var image1_1 = document.getElementById('row1_1');
  var image1_2 = document.getElementById('row1_2');
  var image1_3 = document.getElementById('row1_3');
  var image1_4 = document.getElementById('row1_4');
  var image1_5 = document.getElementById('row1_5');

  if (Status_lighting_row_1 == "OFF") {
      image.src = "images/remodeair/switchoff.png";
      image1_1.style.backgroundColor = "grey";
      image1_2.style.backgroundColor = "grey";
      image1_3.style.backgroundColor = "grey";
      image1_4.style.backgroundColor = "grey";
      image1_5.style.backgroundColor = "grey";
    } else {
      image.src = "images/remodeair/switchon.png";
      image1_1.style.backgroundColor = "#FBAB7E";
      image1_2.style.backgroundColor = "#FBAB7E";
      image1_3.style.backgroundColor = "#FBAB7E";
      image1_4.style.backgroundColor = "#FBAB7E";
      image1_5.style.backgroundColor = "#FBAB7E";
      }
}

//  On/Off Lighting Row 1
function lightingrow1(devieID_lighting_row_1) {
    var Status_lighting_row_1 = localStorage.getItem("Status_lighting_row_1_Local")
    if (Status_lighting_row_1 == "OFF") {
      Status_lighting_row_1 = "ON"
    } else {
      Status_lighting_row_1 = "OFF"
    }
    lighting1_post_data = { 
      device_type: "lighting",
      device_id: devieID_lighting_row_1, 
      command: JSON.stringify({status: Status_lighting_row_1})
    };
    console.log("POST method by jQuery");
    jQuery.ajax({
      url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/lighting",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 572050ba01cab3220b82e1242de7786b364f6f36",
      },
      contentType: "application/json",
      data: lighting1_post_data,
        })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            var Status_lighting_row_1_Local = localStorage.setItem("Status_lighting_row_1_Local", Status_lighting_row_1)
            // Status_lighting_row_1_changeImage(Status_lighting_row_1)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}