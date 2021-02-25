// kvm_Input1 Start
function kvm_input1(device_id) {
    console.log("kvm_input1 clicked: " + device_id);
    kvm1_post_data = { 
        device_type: "kvmswitch",
        device_id: device_id, 
        command: JSON.stringify({status: "INPUT1"})
      };
    //
    console.log("POST projectorsource_home method by jQuery");
    jQuery.ajax({
        url: "https://msr-api.herokuapp.com/api/kvm",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/json",
        data: kvm1_post_data,
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
// kvm_Input1 End

// kvm_Input2 Start
function kvm_input2(device_id) {
    console.log("kvm_input2 clicked: " + device_id);
    kvm2_post_data = { 
        device_type: "kvmswitch",
        device_id: device_id, 
        command: JSON.stringify({status: "INPUT2"})
      };
    //
    console.log("POST kvm_input2 method by jQuery");
    jQuery.ajax({
        url: "https://msr-api.herokuapp.com/api/kvm",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/json",
        data: kvm2_post_data,
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
// kvm_Input2 End

// kvm_Input3 Start
function kvm_input3(device_id) {
    console.log("kvm_input3 clicked: " + device_id);
    kvm3_post_data = { 
        device_type: "kvmswitch",
        device_id: device_id, 
        command: JSON.stringify({status: "INPUT3"})
      };
    //
    console.log("POST kvm_input3 method by jQuery");
    jQuery.ajax({
        url: "https://msr-api.herokuapp.com/api/kvm",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/json",
        data: kvm3_post_data,
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
// kvm_Input3 End


// kvm_Input4 Start
function kvm_input4(device_id) {
    console.log("kvm_input4 clicked: " + device_id);
    kvm4_post_data = { 
        device_type: "kvmswitch",
        device_id: device_id, 
        command: JSON.stringify({status: "INPUT4"})
      };
    //
    console.log("POST kvm_input4 method by jQuery");
    jQuery.ajax({
        url: "https://msr-api.herokuapp.com/api/kvm",
        type: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Token 2f1c9297dd604396c347e52746baf9703ceb93fd",
        },
        contentType: "application/json",
        data: kvm4_post_data,
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
//  kvm_Input4 End