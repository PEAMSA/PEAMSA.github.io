// Screen_up Start
function screen_up(device_id) {
    console.log("POST Screen Up method by jQuery");
    sceen_post_data = { 
        device_type: "curtain",
        device_id: device_id, 
        command: JSON.stringify({status: "up"})
    };
    console.log(sceen_post_data)
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/curtain",
        type: "POST",
        headers: {
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/curtain",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/json",
        data: sceen_post_data,
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
// Screen_up End


// Screen_pause Start
function screen_pause(device_id) {
    console.log("POST Screen Pause method by jQuery");
    sceen_post_data = { 
        device_type: "curtain",
        device_id: device_id, 
        command: JSON.stringify({status: "stop"})
    };
    console.log(sceen_post_data)
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/curtain",
        type: "POST",
        headers: {
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/curtain",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/json",
        data: sceen_post_data,
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
// Screen_pause End

// Screen_Down Start
function screen_down(device_id) {
    console.log("POST Screen Down method by jQuery");
    sceen_post_data = { 
        device_type: "curtain",
        device_id: device_id, 
        command: JSON.stringify({status: "down"})
    };
    console.log(sceen_post_data)
    jQuery.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/curtain",
        type: "POST",
        headers: {
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/curtain",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/json",
        data: sceen_post_data,
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
// Screen_Down End

