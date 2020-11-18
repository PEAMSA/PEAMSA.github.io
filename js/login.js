// When the user clicks the button, open the modal
function Modal_loginButton() {
  // Get the button that opens the modal
  // Get the modal
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function dismiss_Modal_Button() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function Login() {
  login_data = JSON.stringify({
    username: document.getElementById("username").value,
    password: document.getElementById("password").value
  })
  console.log("POST Login method by jQuery")
  // Loading Animation while login
  // $('.modal-x').modal('show');
  // --------------------------- //
  jQuery.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/login",
      type: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "https://cors-anywhere.herokuapp.com/https://msr-api.herokuapp.com/api/login",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",  
      },
      contentType: "application/x-www-form-urlencoded",
      data: {
        "username": document.getElementById("username").value.toString(),
        "password": document.getElementById("password").value.toString()
    },
  })
    .done(function(data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      // console.log(data);
      // --------------------------- //
      if (jqXHR.status == 200) {
        console.log("Login successful.");
        localStorage.setItem("token_local", data['token']);
        setCookie(document.getElementById("username").value, data['data']['token'], 1)
        window.location.replace("home.html");
      }
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log("HTTP Request Failed");
      alert("Username or Password is wrong. Please try again!!!")
    })
    .always(function() {
      /* ... */
    });
}

function TestClicked() {
  console.log("Test")
}

window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    console.log("Dismiss Modal");
    modal.style.display = "none";
  }
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}