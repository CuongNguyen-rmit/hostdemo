"use strict";

const searchInfos = {
  cname: "",
  sort: "",
  filterRegion: "",
  filterSubRegion: "",
  filterPopulationRange: "",
};

const fetchForSearchFilterSort = async (page, searchInfos) => {
  let url = `https://restcountries.com/v3.1/all?fields=name,flags,population,region,subregion,area,languages,currencies,capital,altSpellings,cca3,timezones`;
  const countriesPerPage = 11;
  const start = page * countriesPerPage;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`${response.status}  invalid`);
    }
    let data = await response.json();

    // then, call a function to update the UI with the new countries
    if (searchInfos.cname != "") {
      data = data.filter((country) => {
        const countryName = country.name.official.toLowerCase();
        return countryName.includes(searchInfos.cname);
      });
    }

    if (searchInfos.filterRegion != "") {
      data = data.filter((country) => {
        return country.region === searchInfos.filterRegion;
      });
    }

    if (searchInfos.filterSubRegion != "") {
      data = data.filter((country) => {
        return country.subregion === searchInfos.filterSubRegion;
      });
    }

    if (searchInfos.filterPopulationRange != "") {
      data = filterByPopulation(searchInfos.filterPopulationRange, data);
    }

    if (searchInfos.sort != "") {
      data = sortCountries(searchInfos.sort, data);
    }

    totalPages = Math.ceil(data.length / countriesPerPage);
    const countries = data.slice(start, start + countriesPerPage);

    return countries;
  } catch (error) {
    console.error(error);
  }
};

searchInput.addEventListener("keydown", (e) => searchCountries(e));
regionSelectFilter.addEventListener("change", (e) => {
  populateSubregions();
  filterByRegion();
});

subRegionSelectFilter.addEventListener("change", (e) => {
  filterBySubRegion();
});

popuSelectFilter.addEventListener("change", async (e) => {
  const selectedPopulationRange = popuSelectFilter.value;
  searchInfos.filterPopulationRange = selectedPopulationRange;
  const filteredCountries = await fetchForSearchFilterSort(0, searchInfos);
  updateUI(filteredCountries);
});

sortSelect.addEventListener("change", async (e) => {
  const sortOption = sortSelect.value;
  searchInfos.sort = sortOption;
  const filteredCountries = await fetchForSearchFilterSort(0, searchInfos);
  updateUI(filteredCountries);
});

resetButton.addEventListener("click", reset);

async function searchCountries(e) {
  const searchTerm = searchInput.value.trim().toLowerCase();
  searchInfos.cname = searchTerm;
  const filteredCountries = await fetchForSearchFilterSort(0, searchInfos);
  console.log(filteredCountries);

  updateUI(filteredCountries);
}

async function filterByRegion() {
  const selectedRegion = regionSelectFilter.value;
  searchInfos.filterRegion = selectedRegion;
  const c = await fetchForSearchFilterSort(0, searchInfos);
  updateUI(c);
}

async function filterBySubRegion() {
  const subRelectedRegion = subRegionSelectFilter.value;
  searchInfos.filterSubRegion = subRelectedRegion;
  const c = await fetchForSearchFilterSort(0, searchInfos);
  updateUI(c);
}

function reset() {
  searchInput.value = "";
  regionSelectFilter.value = "";
  subRegionSelectFilter.value = "";
  popuSelectFilter.value = "";
  sortSelect.value = "";
  fetchCountry(0);
}

function populateSubregions() {
  const selectedRegion = regionSelectFilter.value;
  const subregions = subregionsByRegion[selectedRegion] || [];

  subRegionSelectFilter.innerHTML = "";
  subRegionSelectFilter.add(new Option("All Subregions", ""));

  for (let subregion of subregions) {
    subRegionSelectFilter.add(new Option(subregion, subregion));
  }
}

function filterByPopulation(selectedPopulationRange, countries) {
  const filteredCountries = countries.filter((country) => {
    const population = country.population;
    switch (selectedPopulationRange) {
      case "0-5":
        return population >= 0 && population <= 5;
      case "5-10":
        return population >= 5 && population <= 10;
      case "10-50":
        return population >= 10 && population <= 50;
      case "50-100":
        return population >= 50 && population <= 100;
      case "100":
        return population > 100;
      default:
        return true;
    }
  });

  return filteredCountries;
}

function sortCountries(sortOption, countries) {
  const sortedCountries = [...countries]; // Create a copy of the original countries array

  switch (sortOption) {
    case "name-asc":
      sortedCountries.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      break;
    case "name-desc":
      sortedCountries.sort((a, b) =>
        b.name.common.localeCompare(a.name.common)
      );
      break;
    case "population-asc":
      sortedCountries.sort((a, b) => a.population - b.population);
      break;
    case "population-desc":
      sortedCountries.sort((a, b) => b.population - a.population);
      break;
    default:
      break;
  }

  return sortedCountries;
}
