let userBudget = +prompt("Ваш бюджет на месяц");
let userCurrentDate = prompt("Введите дату в формате YYYY-MM-DD");

const appData = {
    budget: userBudget,
    timeData: userCurrentDate,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings: false
};





// for method
for(let i=0; i < 2; i++){
    let userExpenses = prompt("Введите обязательную статью расходов в этом месяце", ''),
        userExpensesCost = prompt("Во сколько обойдется?", '')
    if((typeof(userExpenses))==='string' && (typeof(userExpenses)) != null && (typeof(userExpensesCost)) != null 
    && userExpenses != '' && userExpensesCost != '' && userExpenses.length < 50){
        console.log('done');
        appData.expenses[userExpenses] = userExpensesCost;
    }
    else {
        // home work 
        // reload for element
    }
};

// while method
// let i =0
// while(i<2){
//     let userExpenses = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         userExpensesCost = prompt("Во сколько обойдется?", '')
//     if((typeof(userExpenses))==='string' && (typeof(userExpenses)) != null && (typeof(userExpensesCost)) != null 
//     && userExpenses != '' && userExpensesCost != '' && userExpenses.length < 50){
//         console.log('done');
//         appData.expenses[userExpenses] = userExpensesCost;
//     }
//     else {
//         // home work 
//         // reload for element
//     }
//     i++
// }

// do...while method
// let i = 0;
// do{
//         let userExpenses = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         userExpensesCost = prompt("Во сколько обойдется?", '')
//     if((typeof(userExpenses))==='string' && (typeof(userExpenses)) != null && (typeof(userExpensesCost)) != null 
//     && userExpenses != '' && userExpensesCost != '' && userExpenses.length < 50){
//         console.log('done');
//         appData.expenses[userExpenses] = userExpensesCost;
//     }
//     else {
//         // home work 
//         // reload for element
//     }
//     i++;
// }
// while(i<2)


appData.moneyPerDay = appData.budget / 30;
alert("бюджет на 1 день " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log('Минимальынй урвоень достатка');
}else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
}else if (appData.moneyPerDay > 2000){
    console.log("Высокий уровень достатка");
}else {
    console.log("Произошла ошибка")
}


