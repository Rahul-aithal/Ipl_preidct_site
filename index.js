document.addEventListener("DOMContentLoaded", () => {
    // Grab the form elements
    const cropSelect = document.getElementById("crop");
    const regionInput = document.getElementById("region");
    const dateInput = document.getElementById("date");
    const priceResult = document.getElementById("priceResult"); // Corrected target for price display
    const predictedPriceElement = document.getElementById("predictedPrice"); // Target where predicted price will be displayed
    const form = document.querySelector("form");
  
    // Example prediction logic based on selected crop, region, and date
    const pricePrediction = (crop, region, date) => {
      // Placeholder logic: In real-world, use an API or algorithm to fetch the price
      let price = 0;
  
      // Simulate crop price prediction based on crop and region
      if (crop === "wheat") {
        price = 100 + Math.floor(Math.random() * 50); // Random price between 100 and 150
      } else if (crop === "rice") {
        price = 120 + Math.floor(Math.random() * 60); // Random price between 120 and 180
      } else if (crop === "maize") {
        price = 80 + Math.floor(Math.random() * 40); // Random price between 80 and 120
      } else if (crop === "barley") {
        price = 90 + Math.floor(Math.random() * 45); // Random price between 90 and 135
      }
  
      // Adjust the price based on the region and date (simplified for demo)
      if (region.toLowerCase() === "south") {
        price += 20;
      } else if (region.toLowerCase() === "north") {
        price -= 10;
      }
  
      return price;
    };
  
    // Handle form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent actual form submission
  
      // Get the values from the form fields
      const crop = cropSelect.value;
      const region = regionInput.value;
      const date = dateInput.value;
  
      if (crop && region && date) {
        // Predict price based on the input data
        const predictedPrice = pricePrediction(crop, region, date);
  
        // Display the predicted price
        predictedPriceElement.textContent = `${predictedPrice.toFixed(2)}`;
        priceResult.classList.remove("hidden"); // Show the price result container
      } else {
        alert("Please fill in all fields.");
      }
    });
  });
  