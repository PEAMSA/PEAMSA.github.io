// Set lighting to default status: OFF
var Status_lighting_row_3 = "OFF"
localStorage.setItem("Status_lighting_row_3_Local", Status_lighting_row_3)

// Retrieve data from Firebase for Checking Device Status
var ref_devices_data = firebase.database().ref().child("peasbhmsr").child("devicetype").child("lighting");
var ref_lighting_row_3 = ref_devices_data.child("MT03");

ref_lighting_row_3.on("value", function(snapshot) {
    var lighting_row_3 = snapshot.val();
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
  var image3_3 = document.getElementById('row3_3');
  var image3_4 = document.getElementById('row3_4');
  var image3_5 = document.getElementById('row3_5');
  var image3_6 = document.getElementById('row3_6');
  var image3_7 = document.getElementById('row3_7');
  var image3_8 = document.getElementById('row3_8');
  var image3_9 = document.getElementById('row3_9');
  var image3_10 = document.getElementById('row3_10');
  var image3_11 = document.getElementById('row3_11');
  var image3_12 = document.getElementById('row3_12');
  var image3_13 = document.getElementById('row3_13');
  var image3_14 = document.getElementById('row3_14');
  var image3_15 = document.getElementById('row3_15');
  var image3_16 = document.getElementById('row3_16');
  var image3_17 = document.getElementById('row3_17');
  var image3_18 = document.getElementById('row3_18');


  if (Status_lighting_row_3 == "OFF") {
      image.src = "images/remodeair/switchoff.png";
      image3_1.style.backgroundColor = "grey";
      image3_2.style.backgroundColor = "grey";
      image3_3.style.backgroundColor = "grey";
      image3_4.style.backgroundColor = "grey";
      image3_5.style.backgroundColor = "grey";
      image3_6.style.backgroundColor = "grey";
      image3_7.style.backgroundColor = "grey";
      image3_8.style.backgroundColor = "grey";
      image3_9.style.backgroundColor = "grey";
      image3_10.style.backgroundColor = "grey";
      image3_11.style.backgroundColor = "grey";
      image3_12.style.backgroundColor = "grey";
      image3_13.style.backgroundColor = "grey";
      image3_14.style.backgroundColor = "grey";
      image3_15.style.backgroundColor = "grey";
      image3_16.style.backgroundColor = "grey";
      image3_17.style.backgroundColor = "grey";
      image3_18.style.backgroundColor = "grey";
      } else {
      image.src = "images/remodeair/switchon.png";
      image3_1.style.backgroundColor = "#FBAB7E";
      image3_2.style.backgroundColor = "#FBAB7E";
      image3_3.style.backgroundColor = "#FBAB7E";
      image3_4.style.backgroundColor = "#FBAB7E";
      image3_5.style.backgroundColor = "#FBAB7E";
      image3_6.style.backgroundColor = "#FBAB7E";
      image3_7.style.backgroundColor = "#FBAB7E";
      image3_8.style.backgroundColor = "#FBAB7E";
      image3_9.style.backgroundColor = "#FBAB7E";
      image3_10.style.backgroundColor = "#FBAB7E";
      image3_11.style.backgroundColor = "#FBAB7E";
      image3_12.style.backgroundColor = "#FBAB7E";
      image3_13.style.backgroundColor = "#FBAB7E";
      image3_14.style.backgroundColor = "#FBAB7E";
      image3_15.style.backgroundColor = "#FBAB7E";
      image3_16.style.backgroundColor = "#FBAB7E";
      image3_17.style.backgroundColor = "#FBAB7E";
      image3_18.style.backgroundColor = "#FBAB7E";
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
        url: "https://msr-api.herokuapp.com/api/lighting",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/json",
        data: lighting3_post_data,
        })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            var Status_lighting_row_3_Local = localStorage.setItem("Status_lighting_row_3_Local", Status_lighting_row_3)
            // Status_lighting_row_3_changeImage(Status_lighting_row_3)
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}