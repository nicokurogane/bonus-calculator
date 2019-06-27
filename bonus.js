
document.getElementById('bonus-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let inputSalary = document.getElementById('salary').value;
    let inputYears = document.getElementById('years').value;
    let inputDays = document.getElementById('days').value;
    console.log(`${inputSalary} ${inputYears} ${inputDays}`);

    if (validateInput(inputSalary, inputYears, inputDays)) {
        calculateBonus(Number(inputSalary), Number(inputYears), Number(inputDays));
    }
});


function calculateBonus(salary, years, days) {
    let calculatedBonus = 0;
    if (years === 0) {
        calculatedBonus = (days * calculateSalaryForDays(salary, 15)) / 365;
    } else if (years > 1 && years <= 3) {
        calculatedBonus = calculateSalaryForDays(salary, 15);
    } else if (years >= 4 && years <= 10) {
        calculatedBonus = calculateSalaryForDays(salary, 19);
    } else if (years > 10) {
        calculatedBonus = calculateSalaryForDays(salary, 21);
    }
    console.log(calculatedBonus.toFixed(2));
    showCalculation(calculatedBonus.toFixed(2));
}

function calculateSalaryForDays(salary, daysWorked) {
    return (salary * daysWorked) / 30;
}

function showCalculation(calculatedBonus) {
    let newElement = ` <span class="alert alert-secondary bonus-alert" > Your bonus is: ${calculatedBonus}</span>`;
    const div = document.createElement('div');
    div.innerHTML = newElement;
    let resultContainer = document.getElementById('result-container');
    resultContainer.removeChild(resultContainer.firstChild);
    resultContainer.appendChild(div);
}
function validateInput(salary, years, days) {



    return true;
}