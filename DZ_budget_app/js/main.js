let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let expItemInputs = document.getElementsByClassName('expenses-item');

let expItemBtn = document.getElementsByTagName('button')[0],
    optExpBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2];

let optExpItemInputs = document.querySelectorAll('.optionalexpenses-item');

let chooseIncome = document.querySelector('.choose-income'),
    savingsChek = document.querySelector('#savings'),
    chooseSum = document.querySelector('#sum'),
    choosePercent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');