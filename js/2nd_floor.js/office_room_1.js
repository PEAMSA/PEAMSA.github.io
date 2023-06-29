// Office Room 1 Welcome Start
function or1_welcome() {
    console.log("Activate Scene: Office Room 1 Welcome:");
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
        "scene_id": "fl2_scene011",
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
// Office Room 1 Welcome End

// Office Room 1 Goodbye Start
function or1_goodbye() {
    console.log("Activate Scene: Office Room 1 Goodbye:");
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
        "scene_id": "fl2_scene012",
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

//Office Room 1 Curtain open Start
function or1_curtain_open() {
    console.log("Activate Scene: Office Room 1 Curtain Open:");
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
        "scene_id": "fl2_scene013",
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

//Office Room 1 Curtain open end

//Office Room 1 Curtain close Start
function or1_curtain_close() {
    console.log("Activate Scene: Office Room 1 Curtain Close:");
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
        "scene_id": "fl2_scene014",
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

//Office Room 1 Curtain close end