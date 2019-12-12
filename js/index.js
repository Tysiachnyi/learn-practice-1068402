let userBudget = prompt("Ваш бюджет на месяц");
let userCurrentDate = prompt("Введите дату в формате YYYY-MM-DD");
let userExpenses = prompt("Введите обязательную статью расходов в этом месяце");
let userExpensesCost = prompt("Во сколько обойдется?");

const appData = {
    budget: userBudget,
    timeData: userCurrentDate,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings: false
}

appData.expenses[userExpenses] = userExpensesCost

let userBudgetOneDay = userBudget / 30;
alert("бюджет на 1 день " + userBudgetOneDay);



