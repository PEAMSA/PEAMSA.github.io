// On
function conference_curtain_open(device_id) {
    allOpen_post_data = { 
        device_type: "curtain",
        device_id: device_id, 
        command: JSON.stringify({status: "up"})
    };
  console.log("conference_curtain_open" + device_id);
  console.log("POST method by jQuery");
  jQuery.ajax({
      url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/curtain",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 572050ba01cab3220b82e1242de7786b364f6f36",
      },
      contentType: "application/x-www-form-urlencoded",
      data: allOpen_post_data,
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
}

// Off
function conference_curtain_close(device_id) {
    allClose_post_data = { 
        device_type: "curtain",
        device_id: device_id, 
        command: JSON.stringify({status: "down"})
    };
  console.log("conference_curtain_close" + device_id);
  console.log("POST method by jQuery");
  jQuery.ajax({
      url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/curtain",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 572050ba01cab3220b82e1242de7786b364f6f36",
      },
      contentType: "application/x-www-form-urlencoded",
      data: allClose_post_data,
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
}

// Pause
function conference_curtain_pause(device_id) {
    pause_post_data = { 
        device_type: "curtain",
        device_id: device_id, 
        command: JSON.stringify({status: "stop"})
    };
  console.log("conference_curtain_pause" + device_id);
  console.log("POST method by jQuery");
  jQuery.ajax({
      url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/curtain",
      type: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Token 572050ba01cab3220b82e1242de7786b364f6f36",
      },
      contentType: "application/x-www-form-urlencoded",
      data: pause_post_data,
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
}