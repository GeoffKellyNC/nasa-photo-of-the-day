
//? Get todays Date

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;




export const TODAY = today;
export const API_KEY = 'G49BATmleCabnbPpvnkOb2A6dh03qUGz2M3QaccW'
export const BASE_URL_POD = "https://api.nasa.gov/planetary/apod";
export const BASE_URL_AST = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}`