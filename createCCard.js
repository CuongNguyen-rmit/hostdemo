"use strict";

const createCountryCard = (country) => {
  // create a new card element
  const card = document.createElement("div");
  card.className = "country-card";
  card.id = country.cca3;
  card.addEventListener("click", function () {
    redirectToCountryDetail(country.cca3);
  });
  // create the flag image
  const img = document.createElement("img");
  img.src = country.flags.png;
  img.alt = `Flag of ${country.name.common}`;
  card.appendChild(img);

  // create the country name element
  const h2 = document.createElement("h2");
  h2.textContent = country.name.common;
  card.appendChild(h2);

  // create the capital element
  const pCapital = document.createElement("p");
  pCapital.innerHTML = `<strong>Capital:</strong> ${country.capital[0]}`;
  card.appendChild(pCapital);

  // create the population element
  const pPopulation = document.createElement("p");
  pPopulation.innerHTML = `<strong>Population:</strong> ${country.population}`;
  card.appendChild(pPopulation);

  // create the area element
  const pArea = document.createElement("p");
  pArea.innerHTML = `<strong>Area:</strong> ${country.area}`;
  card.appendChild(pArea);

  // create the region element
  const pRegion = document.createElement("p");
  pRegion.innerHTML = `<strong>Region:</strong> ${country.region}`;
  card.appendChild(pRegion);

  // create the subregion element
  const pSubregion = document.createElement("p");
  pSubregion.innerHTML = `<strong>Subregion:</strong> ${country.subregion}`;
  card.appendChild(pSubregion);

  // create the languages element
  const pLanguages = document.createElement("p");
  const languages = Object.values(country.languages).join(", ");
  pLanguages.innerHTML = `<strong>Languages:</strong> ${languages}`;
  card.appendChild(pLanguages);

  // create the currency element
  const pCurrency = document.createElement("p");
  const currency = Object.values(country.currencies)
    .map((c) => `${c.name} (${c.symbol})`)
    .join(", ");
  pCurrency.innerHTML = `<strong>Currency:</strong> ${currency}`;
  card.appendChild(pCurrency);

  // create the timezone element
  const pTimezone = document.createElement("p");
  const timezone = country.timezones[0];
  pTimezone.innerHTML = `<strong>Timezone:</strong> ${timezone}`;
  card.appendChild(pTimezone);

  return card;
};

const createCountryDetail = (country) => {
  // create a new card element
  const card = document.createElement("div");
  card.className = "country-card";
  card.id = country.cca3;

  // create the flag image
  const img = document.createElement("img");
  img.src = country.flags.png;
  img.alt = `Flag of ${country.name.common}`;
  card.appendChild(img);

  // create the country name element
  const h2 = document.createElement("h2");
  h2.textContent = country.name.common;
  card.appendChild(h2);

  // create the capital element
  const pCapital = document.createElement("p");
  pCapital.innerHTML = `<strong>Capital:</strong> ${country.capital[0]}`;
  card.appendChild(pCapital);

  // create the population element
  const pPopulation = document.createElement("p");
  pPopulation.innerHTML = `<strong>Population:</strong> ${country.population}`;
  card.appendChild(pPopulation);

  // create the area element
  const pArea = document.createElement("p");
  pArea.innerHTML = `<strong>Area:</strong> ${country.area}`;
  card.appendChild(pArea);

  // create the region element
  const pRegion = document.createElement("p");
  pRegion.innerHTML = `<strong>Region:</strong> ${country.region}`;
  card.appendChild(pRegion);

  // create the subregion element
  const pSubregion = document.createElement("p");
  pSubregion.innerHTML = `<strong>Subregion:</strong> ${country.subregion}`;
  card.appendChild(pSubregion);

  // create the languages element
  const pLanguages = document.createElement("p");
  const languages = Object.values(country.languages).join(", ");
  pLanguages.innerHTML = `<strong>Languages:</strong> ${languages}`;
  card.appendChild(pLanguages);

  // create the currency element
  const pCurrency = document.createElement("p");
  const currency = Object.values(country.currencies)
    .map((c) => `${c.name} (${c.symbol})`)
    .join(", ");
  pCurrency.innerHTML = `<strong>Currency:</strong> ${currency}`;
  card.appendChild(pCurrency);

  // create the timezone element
  const pTimezone = document.createElement("p");
  const timezone = country.timezones[0];
  pTimezone.innerHTML = `<strong>Timezone:</strong> ${timezone}`;
  card.appendChild(pTimezone);

  // create the coastArm image

  const pCoastArm = document.createElement("p");
  pTimezone.innerHTML = `<strong>Coast of Arm of:</strong> ${country.name.common}`;

  const coastArm = document.createElement("img");
  coastArm.className = "coast-arm";
  coastArm.src = country.coatOfArms.png;
  coastArm.alt = `Coast of Arm of ${country.name.common}`;
  card.appendChild(coastArm);

  // create the start week element
  const pstartWeek = document.createElement("p");
  const startweek = country.startOfWeek;
  pstartWeek.innerHTML = `<strong>Start Of Week:</strong> ${startweek}`;
  card.appendChild(pstartWeek);

  return card;
};
