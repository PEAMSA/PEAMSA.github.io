// MGC Welcome Start
function mc_welcome() {
    console.log("Activate Scene: MC Welcome:");
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
        "scene_id": "fl2_scene031",
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

function mc_automatic() {
    console.log("Activate Scene: MC Automation:");
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
        "scene_id": "fl2_scene032",
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

function mc_goodbye() {
    console.log("Activate Scene: MC Goodbye:");
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
        "scene_id": "fl2_scene033",
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

}// MGC Aotumatic End