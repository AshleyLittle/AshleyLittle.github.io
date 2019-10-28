async function updateData() {
  var firstLat = lat;
  var firstLng = lng;
  var openAQurl = "https://api.openaq.org/v1/latest?coordinates=${lat},${lon}";
  var response = await fetch(openAQurl);
  var aqdata = await response.json();
  var aqReading = 0;
  var minDistance = 999999999;
  var smallestOne = -1;
  var desiredMetric = -1;
  // Find the location the smallest distance away
  // For each location, find its distance from the click
  for (var i = 0; i < aqdata.results.length; i++) {
    try {
      newLat = aqdata.results[i].coordinates.latitude;
      newLng = aqdata.results[i].coordinates.longitude;
    } catch(error) {
      continue;
    }
    distance = calculateDistance(firstLat,firstLng,newLat,newLng);
    if (distance<minDistance) {
      minDistance = distance;
      for (var j = 0; j < aqdata.results[i].measurements.length; j++) {
        if (aqdata.results[i].measurements[j].parameter=="pm25") {
          smallestOne = i;
          desiredMetric = j;
        }
      }
    }
  }
  aqReading = aqdata.results[smallestOne].measurements[desiredMetric].value;
  document.getElementById("aqreading").innerHTML = aqReading;
}

// distance calculations by john-raymon at https://stackoverflow.com/questions/21279559/geolocation-closest-locationlat-long-from-my-position
function changeToRadians(deg) {
  return deg * Math.PI / 180;
}
function calculateDistance(lat1, lon1, lat2, lon2) {
  lat1 = changeToRadians(lat1);
  lat2 = changeToRadians(lat2);
  lon1 = changeToRadians(lon1);
  lon2 = changeToRadians(lon2);
  var R = 6371; // km
  var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
  var y = (lat2 - lat1);
  var d = Math.sqrt(x * x + y * y) * R;
  return d;
}
