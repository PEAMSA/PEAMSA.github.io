// Conference Room //
// Scene Control Wecome Start
function con_welcome() {
    console.log("Activate Scene: Welcome:");
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
        "scene_id": "fl1_scene011",
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

// Scene Control Meeting Start
function con_meeting() {
    console.log("Activate Scene: Meeting:");
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
        "scene_id": "fl1_scene012",
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
        "scene_id": "fl1_scene013",
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