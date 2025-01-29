#!/bin/bash/node
document.addEventListener("DOMContentLoaded", function () {
  const converts = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    RWF: 1404
  };

  const button = document.getElementById("buton");
  const output = document.getElementById("otput");
  const currency = ["JPY", "EUR", "RUB", "USD", "RWF"];
  const Amount = document.getElementById("amount");
  const results = document.getElementById("result");
  const submitb = document.getElementById("submit");
  button.addEventListener("click", function () {
    let result = "";
    for (let [key, value] of Object.entries(converts)) {
      result += `<p>1 USD equals ${value} ${key}</p>`;
    }
    result += `<p>I can convert USD to these currencies: ${currency.join(
      ", "
    )}</p>`;
    output.innerHTML = result;
  });
  submitb.addEventListener("click", function () {
    const UserInputValue = document.getElementById("UserInput").value.toUpperCase();
    const UserInput2Value = document.getElementById("UserInput2").value.toUpperCase();
    const AmountValue = parseFloat(Amount.value);
    let NewOutput = "";
    if (!currency.includes(UserInputValue)) {
      NewOutput += `<p>Please put the valid currency</p>`;
    } else if (!currency.includes(UserInput2Value)) {
      NewOutput += `<p>Please put the valid currency</p>`;
    } else {
      const rate = converts[UserInput2Value];
      const rate2 = converts[UserInputValue];
      const NewAmount = (AmountValue * rate) / rate2 ;
      NewOutput += `<p>Result: ${AmountValue} ${UserInputValue} equals ${NewAmount} ${UserInput2Value}</p>`;
      
    }
    results.innerHTML = NewOutput;
  });
});
