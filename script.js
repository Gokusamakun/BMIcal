document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById("calculateBtn");
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const resultDiv = document.getElementById("result");
  
    calculateBtn.addEventListener("click", function() {
      const weight = parseFloat(weightInput.value);
      const height = parseFloat(heightInput.value);
  
      if (isNaN(weight) || isNaN(height) || height === 0) {
        resultDiv.innerHTML = "Please enter valid values.";
        return;
      }
  
      const bmi = weight / (height * height);
      const bmiCategory = getBMICategory(bmi);
  
      resultDiv.innerHTML = `Your BMI: ${bmi.toFixed(2)}<br>Category: ${bmiCategory}`;
    });
  
    function getBMICategory(bmi) {
      if (bmi < 18.5) {
        return "Underweight";
      } else if (bmi < 24.9) {
        return "Normal weight";
      } else if (bmi < 29.9) {
        return "Overweight";
      } else {
        return "Obese";
      }
    }
  });
  