// Retrieve data from Firebase -> Outdoor
var ref_indoor = firebase.database().ref().child("peasbhmsr").child("devicetype").child("weatherstation").child("WS101001");
var ref_module_temp = ref_indoor.child("MODULETEMP")

ref_module_temp.on("value", function(snapshot) {
  var module_temp = snapshot.val();
  document.getElementById("temp_module").innerHTML = module_temp;
});

var ref_indoor = firebase.database().ref().child("peasbhmsr").child("devicetype").child("weatherstation").child("WS101002");
var ref_amb_temp = ref_indoor.child("AMBIENTTEMP")
var ref_irradiance = ref_indoor.child("IRRADIANCE")

var ref_wind = ref_indoor.child("WINDSPEED")

ref_amb_temp.on("value", function(snapshot) {
  var amb_temp = snapshot.val();
  document.getElementById("temp_station").innerHTML = amb_temp;
});

ref_irradiance.on("value", function(snapshot) {
  var irradiance = snapshot.val();
  document.getElementById("radiation_station").innerHTML = irradiance;
});

ref_wind.on("value", function(snapshot) {
  var wind = snapshot.val();
  document.getElementById("speed_station").innerHTML = wind;
});

// Retrieve data from Firebase -> Indoor
var ref_indoor = firebase.database().ref().child("peasbhmsr").child("devicetype").child("multisensor").child("MS202001");
var ref_temp = ref_indoor.child("TEMPERATURE")
var ref_hum = ref_indoor.child("HUMIDITY")

ref_temp.on("value", function(snapshot) {
  var temp_server = snapshot.val();
  document.getElementById("temp_serverroom").innerHTML = temp_server;
});

ref_hum.on("value", function(snapshot) {
  var hum_server = snapshot.val();
  document.getElementById("hum_serverroom").innerHTML = hum_server;
});
