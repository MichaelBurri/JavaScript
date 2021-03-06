/* The geolocation API allows the user to provide their location to web applications 
if they so desire. For privacy reasons, the user is asked for permission to report 
location information.

The geolocation API is published through the navigator.geolocation object. 
If the object exists, geolocation services are available.

Develop a web app in which: */
/* Test if geolocation is available.
*/
/* if("geolocation" in navigator){
    document.write("GEOLOCALIZACIÓN DISPONIBLE.");
}
else{
    document.write("No disponible el GPS.");
} */

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.write("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  document.write("Latitud: " + position.coords.latitude +
  "<br>Longitud: " + position.coords.longitude);
}
getLocation();
/*
If it's available, show the current position (latitude and longitude)
If it isn't available, show a message for each and everyone of the possible errors.
Improve your code so you show the position continuously (although the user could be in moving, 
so it could change)

Find the way to meassure the distance traveled.
Let's try to use the geolocation information with the API of LeafletJS.
Use a map to show your location
Draw a marker in your location
Repeat exercise 2 using another maps library, like Google Maps.
Find a way to know the address of your location (reverse geocoding).
OPTIONAL. Complete exercise 2 with these new features:
Look for the way to animate your marker
Draw the position of the user correctly although it could be moving.
Draw the route of the user over the map. */