let group = [];
let member = [];

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
  const li = document.createElement('li')
  group.forEach(
    (group, index) =>
      (groupNameExpenses.innerHTML = ` <h1>${group.groupEl} Expense $${
        group.expense
      } ID: ${index + 1}</h1> 
        <h3>Group Members</h3>
        <ul></ul> 
      `)
  );
}

function addMember() {
  const members = document.getElementById("members").value
  member.forEach(mem => {
    if (mem === members) {
      alert(`${members} is already a member of the group.`);
      return;
    } else {
      member.push(members);
      displayMembers(members);
    }
  })
}

function clearInputs() {
  groupEl = "";
  expense = "";
}
