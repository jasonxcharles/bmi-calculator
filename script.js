function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const unit = document.querySelector('input[name="unit"]:checked').value;

  if (!weight || !height || weight <= 0 || height <= 0) {
    document.getElementById('bmiResult').textContent = 'Please enter valid values.';
    return;
  }

  let bmi;
  if (unit === 'metric') {
    const heightM = height / 100;
    bmi = weight / (heightM * heightM);
  } else {
    const weightKg = weight * 0.453592;
    const heightM = (height * 2.54) / 100;
    bmi = weightKg / (heightM * heightM);
  }

  const roundedBMI = bmi.toFixed(2);
  let status = '';

  if (bmi < 18.5) {
    status = 'Underweight';
  } else if (bmi < 25) {
    status = 'Normal weight';
  } else if (bmi < 30) {
    status = 'Overweight';
  } else {
    status = 'Obese';
  }

  document.getElementById('bmiResult').textContent = `Your BMI is ${roundedBMI} (${status})`;
}
