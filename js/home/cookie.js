function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
//   console.log(c.substring(name.length, c.length))
  var global_token = c.substring(name.length, c.length)
  return (global_token);
}

function checkCookie() {
  var token = getCookie("token");
  if (token != "") {
      var global_token = token
      console.log("Get Cookie!!!")
    //   console.log(global_token)
    //   alert("Get cookie success!!!")
    // window.location.replace("home.html");
  } else {
    alert("Please login!!!")
    window.location.replace("index.html");
  }
}

window.onload = function() {
    checkCookie()
  }