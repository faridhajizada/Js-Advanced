// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   let myDate;
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//     myDate = date;
//   }

//   console.log(myDate);

//   let pElem = document.createElement("p");
//   pElem.textContent = "This is a newly-added paragraph.";
//   document.body.appendChild(pElem);
// });

// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//   alert('You clicked me!');

//   let pElem = document.createElement('p');
//   pElem.textContent = 'This is a newly-added paragraph.';
//   document.body.appendChild(pElem);
// });
// function loadAsset(url, type, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.responseType = type;

//     xhr.onload = function() {
//       callback(xhr.response);
//     };

//     xhr.send();
//   }

//   function displayImage(blob) {
//     const objectURL = URL.createObjectURL(blob);

//     const image = document.createElement('img');
//     image.src = objectURL;
//     document.body.appendChild(image);
//   }

//   loadAsset('coffee.jpg', 'blob', displayImage);

// fetch('products.json')
//   .then( response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then( json => initialize(json) )
//   .catch( err => console.error(`Fetch problem: ${err.message}`) );

// async function hello() { return "Hello" };
// // console.log(hello());
// hello().then((value) => console.log(value))
// hello().then(console.log)
//
var myGeo = navigator.geolocation;
myGeo.getCurrentPosition(function(position) {
    var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    var myOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      disableDefaultUI: true
    }
    var map = new google.maps.Map(document.querySelector("#map_canvas"), myOptions);
  });
  