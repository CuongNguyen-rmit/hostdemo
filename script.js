"use strict";

let page = 0; // Current Page Page
let searchPage;
let totalPages = 0;

const subregionsByRegion = {
  Africa: [
    "Eastern Africa",
    "Middle Africa",
    "Northern Africa",
    "Southern Africa",
    "Western Africa",
  ],
  Americas: ["Caribbean", "Central America", "North America", "South America"],
  Asia: [
    "Central Asia",
    "Eastern Asia",
    "Southern Asia",
    "Southeast Asia",
    "Western Asia",
  ],
  Europe: [
    "Eastern Europe",
    "Northern Europe",
    "Southern Europe",
    "Western Europe",
  ],
  Oceania: [
    "Australia and New Zealand",
    "Melanesia",
    "Micronesia",
    "Polynesia",
  ],
};

document.addEventListener("DOMContentLoaded", function () {
  // first load
  fetchCountry(page);
});

const fetchCountry = async (page) => {
  let url = `https://restcountries.com/v3.1/all?fields=name,flags,population,region,subregion,area,languages,currencies,capital,altSpellings,cca3,timezones`;
  const countriesPerPage = 11;
  const start = page * countriesPerPage;

  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // get the slice of data for the current page
      totalPages = Math.ceil(data.length / countriesPerPage);
      const countries = data.slice(start, start + countriesPerPage);
      //   console.log(countries);
      // then, call a function to update the UI with the new countries
      updateUI(countries);
    })
    .catch((error) => console.error("Error:", error));
};

const updateUI = (countries) => {
  // clear out the current countries
  const countriesContainer = cContainer;
  countriesContainer.innerHTML = "";

  // add the new countries
  for (let country of countries) {
    const countryCard = createCountryCard(country, null);
    countriesContainer.appendChild(countryCard, null);
  }
};

// Function to redirect to the country detail page
function redirectToCountryDetail(countryCode) {
  window.location.href = `./detailPage.html?code=${countryCode}`;
}
