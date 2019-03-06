"use strict";

var newHtml = document.querySelector('.newHtml');
var locCount = document.querySelector('.fetched-locations');
var api = "api_demo.json";
var cities;
// document.addEventListener('click', callAPI);

function callAPI() {
  fetch(api).then(function (data) {
    return data.json();
  }).then(function (response) {
    locCount.innerHTML = response.response.count;
    console.log(cities = response.response.locations);
    var html = '';
    cities.forEach(function (city) {
      console.log(city);
      html += "\n            <div class=\"LocData\">\n                <ul>\n                    <li>Id Number: ".concat(city.id, "</li>\n                    <li>Account Id: ").concat(city.accountId, "</li>\n                    <li>Location Name: ").concat(city.locationName, "</li>\n                    <li>Schema Type: ").concat(city.schemaTypes[0], "</li>\n                    <li>Full Address: ").concat(city.address, ", ").concat(city.address2, ", ").concat(city.city, ", ").concat(city.zip, ", ").concat(city.countryCode, "</li>\n                </ul>\n            </div>\n            ");
    });
    newHtml.innerHTML = html;
  });
}

callAPI();

// const newHtml = document.querySelector('.newHtml');
// const locCount = document.querySelector('.fetched-locations');

// const api = `api_demo.json`;
// let cities;

// document.addEventListener('click', callAPI)

// function callAPI() {
//     fetch(api)
//     .then(data => data.json())
//     .then(response => {
//         locCount.innerHTML = response.response.count;
//         console.log(cities = response.response.locations);
//         let html = '';
//         cities.forEach(city =>{
//             console.log(city);
//             html+= `
//             <div class="LocData">
//                 <ul>
//                     <li>Id Number: ${city.id}</li>
//                     <li>Account Id: ${city.accountId}</li>
//                     <li>Location Name: ${city.locationName}</li>
//                     <li>Schema Type: ${city.schemaTypes[0]}</li>
//                     <li>Full Address: ${city.address}, ${city.address2}, ${city.city}, ${city.zip}, ${city.countryCode}</li>
//                 </ul>
//             </div>
//             `;
//         });
//         newHtml.innerHTML = html;

//     })
// }
// callAPI();


// for (var i = 0; i < obj.length; i++){
//   if (obj[i].code == needle){
//       console.log(obj[i].name); 
//   }
// }

// function trimString(s) {
//   var l=0, r=s.length -1;
//   while(l < s.length && s[l] == ' ') l++;
//   while(r > l && s[r] == ' ') r-=1;
//   return s.substring(l, r+1);
// }

// function compareObjects(o1, o2) {
//   var k = '';
//   for(k in o1) if(o1[k] != o2[k]) return false;
//   for(k in o2) if(o1[k] != o2[k]) return false;
//   return true;
// }

// function itemExists(haystack, needle) {
//   for(var i=0; i<haystack.length; i++) if(compareObjects(haystack[i], needle)) return true;
//   return false;
// }

// var objects = [
//   {
//     "foo" : "bar",
//     "bar" : "sit"
//   },
//   {
//     "foo" : "lorem",
//     "bar" : "ipsum"
//   },
//   {
//     "foo" : "dolor blor",
//     "bar" : "amet blo"
//   }
// ];

// function searchFor(toSearch) {
//   var results = [];
//   toSearch = trimString(toSearch); // trim it
//   for(var i=0; i<objects.length; i++) {
//     for(var key in objects[i]) {
//       if(objects[i][key].indexOf(toSearch)!=-1) {
//         if(!itemExists(results, objects[i])) results.push(objects[i]);
//       }
//     }
//   }
//   return results;
// }

// console.log(searchFor('lo '));