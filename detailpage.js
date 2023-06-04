"use strict";
document.addEventListener("DOMContentLoaded", function () {
  // first load
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);

  const code = url.searchParams.get("code");
  loadCountry(code);
});

document.getElementById("back-button").addEventListener("click", (e) => {
  window.location.href = `./index.html`;
});

const loadCountry = async (code) => {
  let url = `https://restcountries.com/v3.1/alpha?codes=${code}`;

  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // get the slice of data for the current page
      console.log(data);
      const country = data[0];
      //   console.log(countries);
      // then, call a function to update the UI with the new countries
      updateUI(country);

      return country;
    })
    .then((c) => {
      loadRelevantCountry(c.subregion);
    })
    .catch((error) => console.error("Error:", error));
};

const updateUI = (country) => {
  const detailContainer = document.getElementById("country-detail");
  detailContainer.innerHTML = "";

  const countryCard = createCountryDetail(country);
  detailContainer.appendChild(countryCard, null);
};

const loadRelevantCountry = async (subregion) => {
  let url = `https://restcountries.com/v3.1/subregion/${subregion}`;

  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // get the slice of data for the current page
      console.log(data);
      const countries = data.slice(0, 10);
      //   console.log(countries);
      // then, call a function to update the UI with the new countries
      updateRelevantCUI(countries);
    })
    .catch((error) => console.error("Error:", error));
};

const updateRelevantCUI = (countries) => {
  // clear out the current countries
  const countriesContainer = document.getElementById("countries-container");
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
