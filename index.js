document.addEventListener("DOMContentLoaded", function () {
  fetch("airbnb_sf_listings_500.json")
    .then((response) => response.json())
    .then((data) => {
      let listings = document.getElementById("listings");
      for (let i = 0; i < 50; i+=2) {
        let listing1 = data[i];
        let listing2 = data[i+1];
        listings.innerHTML += `
        <div class="row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${listing1.name}</h5>
                        <p class="card-text">${listing1.description}</p>
                        <p class="card-text">${listing1.amenities}</p>
                        <p class="card-text">${listing1.host_name}</p>
                        <p class="card-text">${listing1.price}</p>
                        <img src=${listing1.host_thumbnail_url} alt="Host Thumbnail">
                    </div>
                </div>
            </div>
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${listing2.name}</h5>
                        <p class="card-text">Description</p>
                        <p class="card-text">Ameneties</p>
                        <p class="card-text">host</p>
                        <p class="card-text">price</p>
                        <p class="card-text">thumbnail</p>
                    </div>
                </div>
            </div>
        </div>
        `;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
