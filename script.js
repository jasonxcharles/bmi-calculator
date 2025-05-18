function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const heightCm = parseFloat(document.getElementById('height').value);

  if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
    document.getElementById('bmiResult').textContent = 'Please enter valid values.';
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
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
