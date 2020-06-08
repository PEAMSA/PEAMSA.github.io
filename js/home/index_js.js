// Retrieve data from Firebase -> Outdoor
var ref_indoor = firebase.database().ref().child("peasbhmsr").child("devicetype").child("weatherstation").child("WS101001");
var ref_module_temp = ref_indoor.child("MODULETEMP")

ref_module_temp.on("value", function(snapshot) {
  console.log("Get amb_temp from firebase")
  //  console.log(snapshot.val());
  var module_temp = snapshot.val();
  // console.log("Temp is " + temp_server);
  document.getElementById("temp_module").innerHTML = module_temp;
});

var ref_indoor = firebase.database().ref().child("peasbhmsr").child("devicetype").child("weatherstation").child("WS101002");
var ref_amb_temp = ref_indoor.child("AMBIENTTEMP")
var ref_irradiance = ref_indoor.child("IRRADIANCE")

var ref_wind = ref_indoor.child("WINDSPEED")

ref_amb_temp.on("value", function(snapshot) {
  console.log("Get amb_temp from firebase")
  //  console.log(snapshot.val());
  var amb_temp = snapshot.val();
  // console.log("Temp is " + temp_server);
  document.getElementById("temp_station").innerHTML = amb_temp;
});

ref_irradiance.on("value", function(snapshot) {
  console.log("Get amb_temp from firebase")
  //  console.log(snapshot.val());
  var irradiance = snapshot.val();
  // console.log("Temp is " + temp_server);
  document.getElementById("radiation_station").innerHTML = irradiance;
});

ref_wind.on("value", function(snapshot) {
  console.log("Get amb_temp from firebase")
  //  console.log(snapshot.val());
  var wind = snapshot.val();
  // console.log("Temp is " + temp_server);
  document.getElementById("speed_station").innerHTML = wind;
});

// Retrieve data from Firebase -> Indoor
var ref_indoor = firebase.database().ref().child("peasbhmsr").child("devicetype").child("multisensor").child("MS202001");
var ref_temp = ref_indoor.child("TEMPERATURE")
var ref_hum = ref_indoor.child("HUMIDITY")

ref_temp.on("value", function(snapshot) {
  console.log("Get temp from firebase")
  //  console.log(snapshot.val());
  var temp_server = snapshot.val();
  // console.log("Temp is " + temp_server);
  document.getElementById("temp_serverroom").innerHTML = temp_server;
});

ref_hum.on("value", function(snapshot) {
  console.log("Get hum from firebase")
  // console.log(snapshot.val());
  var hum_server = snapshot.val();
  document.getElementById("hum_serverroom").innerHTML = hum_server;
});
