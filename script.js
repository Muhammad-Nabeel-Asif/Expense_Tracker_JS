const account = {
    name: 'Nabeel Asif',
    expenses: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0;
        this.expenses.forEach( function(expense) {
            totalExpenses = totalExpenses + expense.amount;
        });
        return `${this.name} has $${totalExpenses} in Expenses.`
    }
};

account.addExpense('Food', 100);
account.addExpense('clothes', 4588);

console.log(account.getAccountSummary());
