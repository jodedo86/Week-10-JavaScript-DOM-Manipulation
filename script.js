//Button on "click" needs to add data to table
const formButton = document.getElementById("formSubmit");

formButton.addEventListener("click", (event) => {
  event.preventDefault();

  //variables to store data
  let billName = document.getElementById("billName").value;
  let billAmount = document.getElementById("billAmount").value;
  let dueDate = document.getElementById("dueDate").value;

  let newTableRow = document.createElement("tr");

  let billNameNode = document.createElement("td");
  billNameNode.innerHTML = billName;
  newTableRow.append(billNameNode);

  let billAmountNode = document.createElement("td");
  billAmountNode.innerHTML = billAmount;
  newTableRow.append(billAmountNode);

  let dueDateNode = document.createElement("td");
  dueDateNode.innerHTML = dueDate;
  newTableRow.append(dueDateNode);

  document.getElementById("tBody").appendChild(newTableRow);

  //empty form atter entering values
  document.getElementById("billName").value = "";
  document.getElementById("billAmount").value = "";
  document.getElementById("dueDate").value = "";
});
