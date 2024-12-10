document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("pricePredictionForm");
  const priceResult = document.getElementById("priceResult");
  const predictedPrice = document.getElementById("predictedPrice");

  // Event listener for form submission
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Extract values from form inputs
    const crop = document.getElementById("crop").value;
    const district = document.getElementById("district").value;
    const date = document.getElementById("day").value;
    const month = document.getElementById("month").value;

    // Prepare the data for the API
    const requestData = {
      crop,
      district,
      date:Number(date),
      month:Number(month)
    };

    try {
        
      // Send data to the API
      const response = await fetch("https://price-predict-api.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
    
      if (!response.ok) {
        throw new Error("Failed to fetch predicted price");
      }

      // Parse the response
      const data = await response.json();
     const price = Number(data.predicted_price).toFixed(2)
      
      // Display the predicted price
      predictedPrice.textContent = `₹${price}`;
      priceResult.classList.remove("hidden");
    } catch (error) {
      // Handle errors
      predictedPrice.textContent = "Error: Unable to predict price";
      priceResult.classList.remove("hidden");
      console.error(error);
    }
  });
});
