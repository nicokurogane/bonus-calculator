
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

    let numberOfInvalid = 0;
    let inputSalary =  document.getElementById('salary');
    let inputYears =  document.getElementById('years');
    let inputDays =  document.getElementById('days');
    let salaryMessage = document.getElementsByClassName('salary-invalid')[0];
    let yearsMessage = document.getElementsByClassName('years-invalid')[0];
    let daysMessage = document.getElementsByClassName('days-invalid')[0];


    inputSalary.classList.remove('invalid-input');
    inputYears.classList.remove('invalid-input');
    inputDays.classList.remove('invalid-input');

    salaryMessage.classList.add('hide-message');
    yearsMessage.classList.add('hide-message');
    daysMessage.classList.add('hide-message');
    
    if (salary <= 0 || salary === '') {
        //    alert('Salary must be greater than zero');
        document.getElementById('salary').classList.add('invalid-input');
        salaryMessage.classList.remove('hide-message');
        numberOfInvalid++;
    }

    console.log(years);
    if (years < 0 || years === '') {
        document.getElementById('years').classList.add('invalid-input');
        yearsMessage.classList.remove('hide-message');
        numberOfInvalid++;
    }

    if (days < 0 || days > 365 || days === '') {
        //    alert('Days must be greater than zero and less than 365');
        document.getElementById('days').classList.add('invalid-input');
        daysMessage .classList.remove('hide-message');
        numberOfInvalid++;
    }

   return numberOfInvalid > 0 ? false: true;
}