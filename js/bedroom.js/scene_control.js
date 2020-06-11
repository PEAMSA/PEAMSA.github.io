// Scene Control Wecome Start
function scene_welcome() {
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
