const { URL } = require('url');

const currency = 'JPY';
const exact_date = '20240127';

const nbBase = 'https://bank.gov.ua';
const url = new URL('/NBUStatService/v1/statdirectory/exchange', nbBase);
url.searchParams.set('valcode', currency);
url.searchParams.set('date', exact_date);

url.search = url.search + (url.search ? '&' : '') + 'json';

console.log(url.toString());
