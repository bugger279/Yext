const newHtml = document.querySelector('.newHtml');

const search = document.getElementById('srchBtn');

search.addEventListener('click', () => {
    const input = document.getElementById('city').value;
    // console.log(input);
    callAPI(input);
})

const today = new Date();
let year = today.getFullYear();
let month = today.getMonth() +1;
let date = today.getDate();
if (month < 10) { month = '0' + month; }
if (date < 10) { date = '0' + date; }

// const proxy = 'https://cors-anywhere.herokuapp.com/';
// const api = `${proxy}https://api.yext.com/v2/accounts/me/locations?api_key=10e549fc1c237bb7406138d6ace2a386&v=${year}${month}${date}`;

function noInput() {
    console.log('No Input Given');
}

function getCityName(userTxt, cityName) {
    // console.log(userTxt);
    const string = cityName;
    const substring = userTxt;
    if (string.indexOf(substring) !== -1) {
        let html = '';
        html += `
            <li>CityName: ${cityName}</li>
        `;
        newHtml.innerHTML = html;
    }
}

function callAPI(input) {
    const api = `api_demo.json`;
    let cities;
    fetch(api)
        .then(data => data.json())
        .then(response => {
            console.log(cities = response.response.locations);
            cities.forEach((city) => {
                const cityName = city.city;
                getCityName(input, cityName);
            });
        })
        .catch(err => console.log(`${err}`));
}