// Sync Scene status from firebase
var ref_scene_bedroom = firebase.database().ref().child("peasbhmsr").child("scene")
var ref_bedroom = ref_scene_bedroom.child("bedroom").child("scene_name")

ref_bedroom.on("value", function(snapshot) {
  console.log("Get ref_bedroom from firebase")
  var ref_bedroom_status = snapshot.val();
  console.log(ref_bedroom_status);
  switch(ref_bedroom_status) {
    case "welcome":
          document.getElementById('bedroom_new').style.backgroundColor = "#fca3b5"
          break;
    
    case "goodnight":
          document.getElementById('bedroom_new').style.backgroundColor = "#f2ff5d"
          break;
      
    case "goodbye":
          document.getElementById('bedroom_new').style.backgroundColor = "#b1d1ed"
          break;
  }
});

// Scene Control Welcome Start
function scene_welcome() {
  console.log("POST method by jQuery");
  jQuery.ajax({
    url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/scene",
    type: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
    },
    contentType: "application/x-www-form-urlencoded",
    data: {
      "scene_id": "fl1_scene031",
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
// Scene Control Wecome End


// Scene Control Good Night Start
function scene_goodnight() {
  console.log("Activate Scene: Goognight:");
  //
  console.log("POST method by jQuery");
  jQuery.ajax({
    url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/scene",
    type: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
    },
    contentType: "application/x-www-form-urlencoded",
    data: {
      "scene_id": "fl1_scene032",
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
// Scene Control Good Night End


// Scene ControlBye Start
function scene_goodbye() {
  console.log("Activate Scene: GoodBye:");
  //
  console.log("POST method by jQuery");
  jQuery.ajax({
    url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/scene",
    type: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
    },
    contentType: "application/x-www-form-urlencoded",
    data: {
      "scene_id": "fl1_scene033",
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
// Scene ControlBye End

