//Take a variable with the **temperature** and another variable with the **relative humidity** and output a *clothing suggestion*.
function getClothingSuggestion(temperature, humidity) {
    let suggestion;
  
    if (temperature > 30 && humidity > 70) {
      suggestion = "Wear light and breathable clothes, like shorts and a tank top.";
    } else if (temperature > 20 && humidity <= 70) {
      suggestion = "A t-shirt and jeans should be fine.";
    } else if (temperature > 10) {
      suggestion = "Consider wearing a light jacket.";
    } else {
      suggestion = "Wear warm clothes, like a coat, scarf, and gloves.";
    }
  
    return suggestion;
  }
  const temperature = 25; // Replace with temperature in Celsius
const humidity = 60;    // Replace with relative humidity in percentage

const clothingSuggestion = getClothingSuggestion(temperature, humidity);
  console.log(`Temperature: ${temperature}°C, Humidity: ${humidity}%`);
console.log(`Clothing Suggestion: ${clothingSuggestion}`);
