// pagination system

prevBtn.addEventListener("click", function () {
  if (page > 0) {
    page--;
    fetchCountry(page);
    pageNum.textContent = page + 1 + "/" + totalPages; // page number is 1-indexed
  }
  checkButtonStatus();
});

nextBtn.addEventListener("click", function () {
  page++;
  fetchCountry(page);
  pageNum.textContent = page + 1 + "/" + totalPages; // page number is 1-indexed
  checkButtonStatus();
});

// Disable the Previous button on the first page, and the Next button on the last page
function checkButtonStatus() {
  prevBtn.disabled = page === 0;
  nextBtn.disabled = page === totalPages - 1;
}
