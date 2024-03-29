// Hall Way Automatic Start
function hy_welcome() {
    console.log("Activate Scene: Hallway 2 Welcome:");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
      url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/scene",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 572050ba01cab3220b82e1242de7786b364f6f36",
      },
      contentType: "application/x-www-form-urlencoded",
      data: {
        "scene_id": "fl2_scene041",
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
    console.log("Activate Scene: Hallway 2 Automation:");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
      url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/scene",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 572050ba01cab3220b82e1242de7786b364f6f36",
      },
      contentType: "application/x-www-form-urlencoded",
      data: {
        "scene_id": "fl2_scene042",
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
    console.log("Activate Scene: Hallway 2 Goodbye:");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
      url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/scene",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 572050ba01cab3220b82e1242de7786b364f6f36",
      },
      contentType: "application/x-www-form-urlencoded",
      data: {
        "scene_id": "fl2_scene043",
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
// Hall Way Goodbye End