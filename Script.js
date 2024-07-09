const form = document.getElementById('bmi-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    const bmi = calculateBMI(height, weight);
    const category = getBMICategory(bmi);

    resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are ${category}.`;
});

function calculateBMI(height, weight) {
    return weight / (height / 100) ** 2;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'underweight';
    } else if (bmi < 25) {
        return 'normal weight';
    } else if (bmi < 30) {
        return 'overweight';
    } else {
        return 'obese';
    }
}
