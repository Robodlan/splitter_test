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
  group.map(
    (group, index, d) =>
      (groupNameExpenses.innerHTML = ` <p>Name: ${group.groupEl} Expense: $${
        group.expense
      } ID: ${index + 1}</p> `)
  );

  //   group.forEach((item, index) => {
  //     groupNameExpenses.textContent = `
  //            <h2>${item} ${index} </h2>
  //     `;
  //   });
}

function clearInputs() {
  groupEl = "";
  expense = "";
}
