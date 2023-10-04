document.addEventListener("DOMContentLoaded", function () {
  fetch("airbnb_sf_listings_500.json")
    .then((response) => response.json())
    .then((data) => {
      let listings = document.getElementById("listings");
      for (let i = 0; i < 50; i += 2) {
        let listing1 = data[i];
        let listing2 = data[i + 1];
        listings.innerHTML += `
        <div class="row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${listing1.name}</h5>
                        <p class="card-text">${listing1.price}</p>
                        <p class="card-text">Host: ${listing1.host_name}</p>
                        <img src=${
                          listing1.host_thumbnail_url
                        } alt="Host Thumbnail">
                        <p class="card-text">${listing1.description}</p>
                        <p class="card-text">Amenities:${JSON.parse(
                          listing1.amenities
                        ).join(", ")}</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${listing2.name}</h5>
                        <p class="card-text">${listing2.price}</p>
                        <p class="card-text">Host: ${listing2.host_name}</p>
                        <img src=${
                          listing2.host_thumbnail_url
                        } alt="Host Thumbnail">
                        <p class="card-text">${listing2.description}</p>
                        <p class="card-text">Amenities:${JSON.parse(
                            listing2.amenities
                        ).join(", ")}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
      }

      const supriseButton = document.getElementById("surprise-button");
      supriseButton.addEventListener("click", function () {
        let supriseListing = document.getElementById("surprise-listing");

        function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let randomListingIndex = getRandomInt(0, 499);

        let randomListing = listings[randomListingIndex];

        supriseListing.innerHTML = `
            <div class="card" style="width: 50%;">
                <div class="card-body">
                    <h5 class="card-title">${randomListing.name}</h5>
                    <p class="card-text">Price: ${randomListing.price}</p>
                    <p class="card-text">Host: ${randomListing.host_name}</p>
                    <img src=${
                      randomListing.host_thumbnail_url
                    } alt="Host Thumbnail">
                    <p class="card-text">${randomListing.description}</p>
                    <p class="card-text">Amenities: ${JSON.parse(
                        randomListing.amenities
                    ).join(", ")}</p>
                </div>
            </div>
        `;
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
