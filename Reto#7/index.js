function dryNumber(dry, numbers) {

  let i = 1;
  let numbersList = [];

  do {

    numbersList.push(i)
    i++

  } while (i <= numbers)


  return numbersList.map(number => number.toString())
    .filter(number => number.includes(dry.toString()))
    .map(number => Math.floor(number));
}


console.log(dryNumber(1, 15))