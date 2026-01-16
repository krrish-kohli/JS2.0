// ! --Case Study: Budget Management for a Monthly Expense Tracker--
//A user wants to track their monthly expenses and savings using a simple JavaScript program. The user has an income and several expenses like rent, groceries, utilities, and entertainment. The program needs to calculate how much is spent, how much is saved, and what percentage of the income has been spent.
/*
Scenario:
 * Monthly income: $3000
 * Monthly expenses:
 * Rent: $1200
 * Groceries: $600
 * Utilities: $300
 * Entertainment: $200

! Operations to be performed:

1. Calculate the total expenses.
2. Calculate the remaining savings after expenses.
3. Calculate the percentage of income spent.
*/

//Step1: Define the monthly income
let monthlyIncome = 3000;

//Step2: Expenses
let rent = 1200;
let groceries = 600;
let utilities = 300;
let entertainment = 200;

//Step3: calculate the total expenses
let totalExpenses = rent + groceries + utilities + entertainment;

//Step 4: Calculate the remaining savings using the Subtraction (-) operator
let remaining = monthlyIncome - totalExpenses;

//Step 5: Calculate the percentage of income spent using the Division (/) and Multiplication (*) operators

let incomeSpentPer = ((totalExpenses / monthlyIncome) * 100).toFixed(2);
