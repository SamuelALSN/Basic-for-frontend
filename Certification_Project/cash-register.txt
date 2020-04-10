function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var copyChange = change
  let result = { status: '', change: [] },
    currencyUnit = {
      "ONE HUNDRED": 100,
      "TWENTY": 20,
      "TEN": 10,
      "FIVE": 5,
      "ONE": 1,
      "QUARTER": 0.25,
      "DIME": 0.1,
      "NICKEL": 0.05,
      "PENNY": 0.01,

    }, sumCurrency = 0
  for (let i in cid) {
    sumCurrency += cid[i][1]
  }

  if (sumCurrency > change) {
    for (let key in currencyUnit) {
      if (currencyUnit[key] <= change) {
        let changeToGive = 0
        for (let k in cid) {
          if (cid[k][0] === key) {
            while (
              currencyUnit[key] <= change
              && cid[k][1] > 0) {
              change -= currencyUnit[key]
              change = change.toFixed(2)
              cid[k][1] -= currencyUnit[key]
            changeToGive +=currencyUnit[key]
            }
          }
        }
      result.change.push([key, changeToGive])
      }
    }
    let resultSum = 0
    for (let i in result.change) {
      resultSum += result.change[i][1]
    }
    console.log(resultSum.toFixed(2),
      copyChange)
    if (resultSum.toFixed(2) == copyChange) {
      result.status = 'OPEN'
      console.log(result.change)
    } else {
      result.status = 'INSUFFICIENT_FUNDS'
      result.change = []
    }
  } else if (sumCurrency === change) {
    result.status = 'CLOSED'
    result.change = cid

  } else {
    result.status = 'INSUFFICIENT_FUNDS'

  }
  return result;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
