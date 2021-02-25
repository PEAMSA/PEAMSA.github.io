// Conference Room //
// Scene Control Wecome Start
function con_welcome() {
    console.log("Activate Scene: Welcome:");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
      // url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/scene",
      url: "https://msr-api.herokuapp.com/api/scene",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
      },
      contentType: "application/x-www-form-urlencoded",
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

// Scene Control Meeting Start
function con_meeting() {
    console.log("Activate Scene: Meeting:");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
      // url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/scene",
      url: "https://msr-api.herokuapp.com/api/scene",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
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
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
      // url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/scene",
      url: "https://msr-api.herokuapp.com/api/scene",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
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

  // Scene Control Show Battery Start
function con_showbatery() {
    console.log("Activate Scene: Show Battery:");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
      // url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/scene",
      url: "https://msr-api.herokuapp.com/api/scene",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
      },
      contentType: "application/x-www-form-urlencoded",
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

// EO Room //
function eo_welcome() {
    console.log("Activate Scene: EO Welcome:");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
      // url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/scene",
      url: "https://msr-api.herokuapp.com/api/scene",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
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

function eo_automatic() {
    console.log("Activate Scene: EO Automation:");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
      url: "https://msr-api.herokuapp.com/api/scene",
      // url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/scene",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
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

function eo_goodbye() {
    console.log("Activate Scene: EO Goodbye:");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
      url: "https://msr-api.herokuapp.com/api/scene",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
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
// End "CONFERENCE ROOM" Scene Control 

// HALLWAY //
function hy_welcome() {
    console.log("Activate Scene: Hallway Welcome:");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
      url: "https://msr-api.herokuapp.com/api/scene",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
      },
      contentType: "application/x-www-form-urlencoded",
      data: {
        "scene_id": "fl1_scene042",
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

function hy_automatic() {
    console.log("Activate Scene: Hallway Automation:");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
      url: "https://msr-api.herokuapp.com/api/scene",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
      },
      contentType: "application/x-www-form-urlencoded",
      data: {
        "scene_id": "fl1_scene041",
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

function hy_goodbye() {
    console.log("Activate Scene: Hallway Goodbye:");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
      url: "https://msr-api.herokuapp.com/api/scene",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
      },
      contentType: "application/x-www-form-urlencoded",
      data: {
        "scene_id": "fl1_scene043",
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
// End "HALLWAY" Scene Control 