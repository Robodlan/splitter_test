let group = [];

function addExpense() {
  const groupEl = document.getElementById("group").value;
  const expense = parseFloat(document.getElementById("expense").value);
  if (groupEl && !isNaN(expense)) {
    group.push({ groupEl, expense });
    displayExpense();
    clearInputs();
  }
}

function displayExpense() {
  const groupNameExpenses = document.getElementById("group-name-expenses");
  groupNameExpenses.innerHTML = "";
  group.forEach(
    (group, index) =>
      (groupNameExpenses.innerHTML = ` <p>Name: ${group.groupEl} Expense: $${
        group.expense
      } ID: ${index + 1}</p> `)
  );
}

function clearInputs() {
  groupEl = "";
  expense = "";
}
