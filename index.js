document.addEventListener("DOMContentLoaded", function () {
  fetch("airbnb_sf_listings_500.json")
    .then((response) => response.json())
    .then((data) => {
      let listings = document.getElementById("listings");
      for (let i = 0; i < 50; i++) {
        let listing = data[i];
        listings.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Listing Name</h5>
                <p class="card-text">Description</p>
                <p class="card-text">Ameneties</p>
                <p class="card-text">host</p>
                <p class="card-text">price</p>
                <p class="card-text">thumbnail</p>
            </div>
        </div>
        `;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
