// Conference Room //
// Scene Control Wecome Start
function con_welcome() {
    console.log("Activate Scene: Welcome:");
    console.log("POST method by jQuery");
    jQuery.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/scene",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
          "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/scene",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      // contentType: "application/x-www-form-urlencoded",
      contentType: "application/json",
      data: {
        "scene_id": "fl1_scene021",
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
// Scene Control Wecome Start

function con_showbatery() {
  console.log("Activate Scene: Show Battery:");
  console.log("POST method by jQuery");
  jQuery.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/scene",
    type: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/scene",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
    contentType: "application/x-www-form-urlencoded",
    // contentType: "application/json",
    data: {
      "scene_id": "fl1_scene022",
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
// End "CONFERENCE ROOM" Scene Control 


// Scene Control Meeting Start
function con_meeting() {
    console.log("Activate Scene: Meeting:");
    console.log("POST method by jQuery");
    jQuery.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/scene",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
          "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/scene",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      contentType: "application/x-www-form-urlencoded",
      data: {
        "scene_id": "fl1_scene023",
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
// Scene Control Wecome Start

// Scene Control Good Bye Start
function con_goodbye() {
    console.log("Activate Scene: Good Bye:");
    console.log("POST method by jQuery");
    jQuery.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/scene",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
          "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/scene",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      contentType: "application/x-www-form-urlencoded",
      data: {
        "scene_id": "fl1_scene024",
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
  // Scene Control Wecome Start

/////////////////////////// Sync Scene status from firebase by Torty:) //////////////////
var ref_scene_fl1 = firebase.database().ref().child("peasbhmsr").child("scene")
var ref_auditorium = ref_scene_fl1.child("auditorium").child("scene_name")

ref_auditorium.on("value", function(snapshot) {
  console.log("Get ref_auditorium from firebase")
  var ref_auditorium_status = snapshot.val();
  console.log(ref_auditorium_status);
  switch(ref_auditorium_status) {
      case "welcome":
          document.getElementById('scene_new').style.backgroundColor = "#fca3b5"
          break;

      case "meeting":
          document.getElementById('scene_new').style.backgroundColor = ":#be41d4"
          break;

      case "show battery":
          document.getElementById('scene_new').style.backgroundColor = "#fcf3b5"
          break;

      case "goodbye":
          document.getElementById('scene_new').style.backgroundColor = "#b1d1ed"
          break;
  }
});
/////////////////////////// Sync Scene status from firebase by Torty:) //////////////////