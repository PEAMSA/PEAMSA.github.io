// Home Start
function projectorsource_home(device_id) {
    console.log("-----Control_projector----- :" + device_id);
    var Status_projector_device = "HOME"
    projector_post = { 
        device_type: "projector",
        device_id: device_id, 
        command: JSON.stringify({status: Status_projector_device})
      };

    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/projector",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/json",
        data: projector_post,
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
// Home End

// Source Start
function projectorsource_source(device_id) {
    console.log("-----Control_projector----- :" + device_id);
    var Status_projector_device = "SOURCE"
    projector_post = { 
        device_type: "projector",
        device_id: device_id, 
        command: JSON.stringify({status: Status_projector_device})
      };

    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/projector",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/json",
        data: projector_post,
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
// Source End

// setting Start
function projectorsource_setting(device_id) {
    console.log("-----Control_projector----- :" + device_id);
    var Status_projector_device = "MENU"
    projector_post = { 
        device_type: "projector",
        device_id: device_id, 
        command: JSON.stringify({status: Status_projector_device})
      };

    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/projector",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/json",
        data: projector_post,
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
// setting End

// Back Start
function projectorsource_back(device_id) {
    console.log("-----Control_projector----- :" + device_id);
    var Status_projector_device = "BACK"
    projector_post = { 
        device_type: "projector",
        device_id: device_id, 
        command: JSON.stringify({status: Status_projector_device})
      };

    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/projector",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/json",
        data: projector_post,
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
// Back End

// Left Start
function projectorsource_left(device_id) {
    console.log("-----Control_projector----- :" + device_id);
    var Status_projector_device = "LEFT"
    projector_post = { 
        device_type: "projector",
        device_id: device_id, 
        command: JSON.stringify({status: Status_projector_device})
      };

    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/projector",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/json",
        data: projector_post,
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
// Left End

// Up Start
function projectorsource_up(device_id) {
    console.log("-----Control_projector----- :" + device_id);
    var Status_projector_device = "UP"
    projector_post = { 
        device_type: "projector",
        device_id: device_id, 
        command: JSON.stringify({status: Status_projector_device})
      };

    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/projector",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/json",
        data: projector_post,
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
// Up End

// Enter Start
function projectorsource_enter(device_id) {
    console.log("-----Control_projector----- :" + device_id);
    var Status_projector_device = "OK"
    projector_post = { 
        device_type: "projector",
        device_id: device_id, 
        command: JSON.stringify({status: Status_projector_device})
      };

    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/projector",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/json",
        data: projector_post,
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
// Enter End

// Down Start
function projectorsource_down(device_id) {
    console.log("-----Control_projector----- :" + device_id);
    var Status_projector_device = "DOWN"
    projector_post = { 
        device_type: "projector",
        device_id: device_id, 
        command: JSON.stringify({status: Status_projector_device})
      };

    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/projector",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/json",
        data: projector_post,
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
// Down End

// Right Start
function projectorsource_right(device_id) {
    console.log("-----Control_projector----- :" + device_id);
    var Status_projector_device = "RIGHT"
    projector_post = { 
        device_type: "projector",
        device_id: device_id, 
        command: JSON.stringify({status: Status_projector_device})
      };

    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/projector",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/json",
        data: projector_post,
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
// Right End

//  On/Off control_projector
function control_projector(device_id) {
    console.log("-----Control_projector----- :" + device_id);
    var Status_projector_device = "POWER"
    projector_post = { 
        device_type: "projector",
        device_id: device_id, 
        command: JSON.stringify({status: Status_projector_device})
      };

    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        url: "https://gg2pdcu4pt.ap-southeast-1.awsapprunner.com/api/projector",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/json",
        data: projector_post,
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
// Power End

