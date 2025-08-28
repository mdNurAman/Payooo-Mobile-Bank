// add money
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let balance = parseInt(document.getElementById("balance").innerText);

    let addAmmount = parseInt(document.getElementById("add-ammount").value);

    let newAmmount = balance + addAmmount;

    document.getElementById("balance").innerText = newAmmount;
  });

// cash out
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  let balance = parseInt(document.getElementById("balance").innerText);

  let withdrawAmmount = parseInt(
    document.getElementById("withdraw-ammount").value
  );

  let newAmmount = balance - withdrawAmmount;
  if (newAmmount < 0) {
    alert("Insufficient Balance");
    return;
  }
  document.getElementById("balance").innerText = newAmmount;
});

// toggling feature
document.getElementById("add-money").addEventListener("click", function (e) {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});

document.getElementById("cash-out").addEventListener("click", function (e) {
  document.getElementById("cash-out-parent").style.display = "block";
  document.getElementById("add-money-parent").style.display = "none";
});
