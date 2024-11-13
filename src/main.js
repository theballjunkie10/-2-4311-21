// Function to display expenses in a list
function displayExpenses() {
  const expenseList = document.getElementById("expenseList");
  expenseList.innerHTML = ""; // Clear previous list

  expenses.forEach(expense => {
      const listItem = document.createElement("li");
      listItem.textContent = `${expense.name} - $${expense.amount} (${expense.category})`;
      expenseList.appendChild(listItem);
  });
}

// Call the function to display the expenses
displayExpenses();