document.addEventListener("DOMContentLoaded", function () {
  fetch("airbnb_sf_listings_500.json")
    .then((response) => response.json())
    .then((data) => {
      // 'data' is an array of objects
      data.forEach((item) => {
        console.log(item);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
