"use strict";
//pagination system
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageNum = document.getElementById("page-num");

//main container
const cContainer = document.querySelector("#countries-container");

//header elements
const searchInput = document.querySelector("#search-bar");
const regionSelectFilter = document.querySelector("#filter-region-select");
const subRegionSelectFilter = document.querySelector(
  "#filter-subregion-select"
);
const popuSelectFilter = document.querySelector("#filter-population-select");

const resetButton = document.getElementById("reset-button");
const sortSelect = document.getElementById("sort-select");
