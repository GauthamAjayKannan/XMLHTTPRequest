var request = new XMLHttpRequest()
request.open("GET",'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')
request.send()
request.onload = function()
{
 var output = JSON.parse(request.response);
 for(let country of output){
     console.log("Country flag",country.flag);
     console.log("Country name",country.name);
     console.log("Country region",country.region);
     console.log("Country subregion",country.subregion);
     console.log("Country population",country.population);
     console.log("********************************************************")
 }
}