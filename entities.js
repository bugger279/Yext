const today = new Date();
let year = today.getFullYear();
let month = today.getMonth() +1;
let date = today.getDate();
if (month < 10) { month = '0' + month; }
if (date < 10) { date = '0' + date; }

const proxy = 'https://cors-anywhere.herokuapp.com/';
const api = `${proxy}https://api.yext.com/v2/accounts/me/entities?api_key=10e549fc1c237bb7406138d6ace2a386&v=${year}${month}${date}`;


fetch(api)
    .then(data => data.json())
    .then(response => console.log(response.response))
    .catch(err => console.log(`${err}`));