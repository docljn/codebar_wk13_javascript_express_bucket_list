const appStart = function () {
  const url = "https://restcountries.eu/rest/v2";



  // get data from api
  makeRequest(url, requestComplete);

};

const render = function (arrayOfCountries) {
  populateSelectDropdown(arrayOfCountries);
  //TODO: displayAddButton();
  //TODO: displayDeleteButton();
  //TODO: displayBucketList();
};

const populateSelectDropdown = function (arrayOfCountries) {
  const dropdownDiv = document.querySelector("#dropdown");
  const select = document.createElement("select");
  select.class += " countries";

  arrayOfCountries.forEach( function (countryObject, index) {
    countryObject.index = index;
    const option = document.createElement("option");
    option.value = index;
    option.text = countryObject.name;
    select.appendChild(option);
  });
  dropdownDiv.appendChild(select);
};

const makeRequest = function (url, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
};


const requestComplete = function () {
  if (this.status !== 200) return;
  const jsonString = this.responseText;
  const countries = JSON.parse(jsonString);
  // do something with countries so it's accessible to the rest of the page....
  render(countries);
};




window.addEventListener("load", console.log("HELLO"));

document.addEventListener("DOMContentLoaded", appStart);
