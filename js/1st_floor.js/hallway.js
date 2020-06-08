// Hallway Aotumatic Start
function hy_automatic() {
    console.log("Hello");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
        url: "https://cors-anywhere.herokuapp.com/https://hookb.in/2qMV6mpxeDiDYDK60pRq",
        type: "POST",
        headers: {
            // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
            "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/2qMV6mpxeDiDYDK60pRq",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/json",
        data: JSON.stringify({
            "topic": "Test post device control",
            "type": "devicecontrol",
            "message": {
                "device": "MSA Device control",
                "parameter": {
                    "status": "on"
                }
            }
        })
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            hy_automatic_changeImage()
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

function hy_automatic_changeImage() {
    document.getElementById('hy').src = 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/8/1/1375354802439/Blue---the-colour-008.jpg?width=300&quality=85&auto=format&fit=max&s=2a7663fea4602034647ecb92ae228d96'
}
// Hallway Aotumatic End


// Hallway Welcome Start
function hy_welcome() {
    console.log("Hello");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
        url: "https://cors-anywhere.herokuapp.com/https://hookb.in/2qMV6mpxeDiDYDK60pRq",
        type: "POST",
        headers: {
            // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
            "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/2qMV6mpxeDiDYDK60pRq",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/json",
        data: JSON.stringify({
            "topic": "Test post device control",
            "type": "devicecontrol",
            "message": {
                "device": "MSA Device control",
                "parameter": {
                    "status": "on"
                }
            }
        })
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            hy_welcome_changeImage()
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

function hy_welcome_changeImage() {
    document.getElementById('hy').src = 'https://www.agricar.co.uk/uploads/images/products/large/agricar-new-holland-bright-yellow-87295405-1539606274yy.png'
}
// Hallway Welcome End




// Hallway Goodbye Start
function hy_goodbye() {
    console.log("Hello");
    //
    console.log("POST method by jQuery");
    jQuery.ajax({
        // url: "https://cors-anywhere.herokuapp.com/https://peahivebackend.herokuapp.com/hiveapi/",
        url: "https://cors-anywhere.herokuapp.com/https://hookb.in/2qMV6mpxeDiDYDK60pRq",
        type: "POST",
        headers: {
            // "Authorization": "Token d6c0e1dd9df3d71a3b21d70959bf0857859c4199",
            "Authorization": "Token dscnsjdkcnsjdkcnjsdcnjdsncjsdnckjsdnckjsdcnkjsdcnskjdcnjksdncbs",
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://hookb.in/2qMV6mpxeDiDYDK60pRq",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        contentType: "application/json",
        data: JSON.stringify({
            "topic": "Test post device control",
            "type": "devicecontrol",
            "message": {
                "device": "MSA Device control",
                "parameter": {
                    "status": "on"
                }
            }
        })
    })
        .done(function (data, textStatus, jqXHR) {
            console.log("HTTP Request Succeeded: " + jqXHR.status);
            console.log(data);
            hy_goodbye_changeImage()
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })
        .always(function () {
            /* ... */
        });
    //

}

function hy_goodbye_changeImage() {
    document.getElementById('hy').src = 'images/goodbye.jpg'
}
// Hallway Goodbye End