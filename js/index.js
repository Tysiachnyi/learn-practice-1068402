let userBudget = prompt("Ваш бюджет?");
let userCurrentDate = prompt("Введите дату в формате YYYY-MM-DD")

const appData = {
    budget: userBudget,
    timeData: userCurrentDate,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings: false
}