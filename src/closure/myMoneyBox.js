// function moneyBox(coins) {
//   let savedCoins = 0;
//   savedCoins += coins;

//   console.log(`MoneyBox: ${savedCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox() {
  let savedCoins = 0;

  function addMoney(coins) {
    savedCoins += coins;
    console.log(`moneryBox: ${savedCoins}`);
  }
  return addMoney;
}

const jesusMoneyBox = moneyBox();

jesusMoneyBox(10);
jesusMoneyBox(10);
jesusMoneyBox(80);

const AlmarazMoneyBox = moneyBox();

AlmarazMoneyBox(200);
AlmarazMoneyBox(100);
AlmarazMoneyBox(700);
