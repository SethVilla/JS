// const checkPoint = {
//   lat: 34.0928092,
//   lng: -118.3286614,
// };

const santaMonica = {
  lat: 34.0194543,
  lng: -118.4911912,
};

let culverCuty = {
  lat: 34.0211224,
  lng: -118.3964665,
};

const km = 16.0934;

// km 8.04672 = 5miles

// function arePointsNear(checkPoint, centerPoint, km) {
//   var ky = 40000 / 360;
//   var kx = Math.cos((Math.PI * centerPoint.lat) / 180.0) * ky;
//   var dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
//   var dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
//   return Math.sqrt(dx * dx + dy * dy) <= km;
// }

//console.log(arePointsNear(culverCuty, santaMonica, km));

const getGeoLocation = () => {
  let test2 = "san diego california";
  const test = fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${test2}&key=`
  )
    .then((data) => data.json())
    .then((data) => console.log(data));
};

getGeoLocation();

// let gpaInput = document.getElementById("enterLocation");
// let autocomplete = new google.maps.places.Autocomplete(gpaInput);
// const button = document.getElementById("submitLocation");

// button.addEventListener("click", event => {
//     let userAddress = gpaInput.value;
//   let queryAddress = userAddress.split(' ').join('+')
//       fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${queryAddress}&key=AIzaSyDV56ym70rVUXPVo1qKULggF7vSJeTWMR0`)
//     .then(res => res.json())
//     .then(function (result) {
//         let lat = result.results[0].geometry.location.lat
//       let lng = result.results[0].geometry.location.lng
//       console.log(lat,lng)
//     })
//     .catch(function (err) {
//         console.error(err);
//     });
// });

// <!-- Load Google Places API -->
// <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDV56ym70rVUXPVo1qKULggF7vSJeTWMR0&libraries=places"></script>

// <!-- Set autocomplete input -->
// <script>
//   let gpaInput = document.getElementById("enterLocation");
//   let autocomplete = new google.maps.places.Autocomplete(gpaInput);
//   const button = document.getElementById("submitLocation");

//   const km = {_3miles: 4.82803}

// const arePointsNear =(checkPoint, centerPoint, km) => {
// var ky = 40000 / 360;
//  var kx = Math.cos((Math.PI * centerPoint.lat) / 180.0) * ky;
// var dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
// var dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
// return Math.sqrt(dx * dx + dy * dy) <= km;
// }

//   button.addEventListener("click", event => {
//   	let userAddress = gpaInput.value;
//     let queryAddress = userAddress.split(' ').join('+')
// 		fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${queryAddress}&key=AIzaSyDV56ym70rVUXPVo1qKULggF7vSJeTWMR0`)
//       .then(res => res.json())
//       .then(function (result) {
//       	let lat = result.results[0].geometry.location.lat
//         let lng = result.results[0].geometry.location.lng
//         console.log(lat,lng)
//       })
//       .catch(function (err) {
//       	console.error(err);
//       });
//   });

// </script>
