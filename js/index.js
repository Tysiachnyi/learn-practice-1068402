let userBudget, userCurrentDate;

function start () {
    userBudget = +prompt("Ваш бюджет на месяц" , '');
    userCurrentDate = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(userBudget) || userBudget == "" || userBudget == null){
        userBudget = +prompt("Ваш бюджет на месяц" , '');
    }
}

start();


const appData = {
    budget: userBudget,
    timeData: userCurrentDate,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings: true,
    chooseExpenses: function() {
        for(let i=0; i < 2; i++){
            let userExpenses = prompt("Введите обязательную статью расходов в этом месяце", ''),
                userExpensesCost = prompt("Во сколько обойдется?", '')
            if((typeof(userExpenses))==='string' && (typeof(userExpenses)) != null &&
             (typeof(userExpensesCost)) != null 
            && userExpenses != '' && userExpensesCost != '' && userExpenses.length < 50){
                console.log('done');
                appData.expenses[userExpenses] = userExpensesCost;
            }
            else {
                // home work 
                // reload for element
                i = i - 1
            }
        };
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("бюджет на 1 день " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log('Минимальынй урвоень достатка');
        }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        }else if (appData.moneyPerDay > 2000){
            console.log("Высокий уровень достатка");
        }else {
            console.log("Произошла ошибка")
        }
    },
    chooseOptExpense: function() {
        for(let i=1;i<=3;i++){
            let optionalExpensesAnswer = prompt("Статья необязательных расходов?", '');
            appData.optionalExpenses[i] = optionalExpensesAnswer;
        }
    },
    checkSaving: function() {
        if (appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            
            appData.monthInCome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthInCome);
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет доп доход? (через запятую)', '');
        if((typeof(items))==='string' && items != '' && (typeof(items)) != null  ){
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
            appData.income.forEach(function (i, item, arr){
                console.log("i = " + i + " item = " + item)
            });
            for (key of appData.income){
                alert('Способы доп. заработка: ' + key)
            };
            for (key in appData){
                console.log("Наша программа включает в себя данные:  " + key)
            }


            
        }
        else{
            alert('You make mista')
        }
        

    }


};


