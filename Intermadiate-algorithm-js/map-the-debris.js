function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var orbitalPeriod
  for (let i in arr) {
    arr[i].orbitalPeriod = Math.round(
      2 * Math.PI * (
        Math.sqrt(
          Math.pow(earthRadius + arr[i].avgAlt, 3)
          / GM)
      )
    )
    delete arr[i].avgAlt

  }
  console.log(arr)

  return arr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
