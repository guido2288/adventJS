function countTime(leds) {

  let count = 0;

  for (let i = 0; i < leds.length; i++) {

    if (leds[i] === 0 && leds[i - 1] === 1) {
      leds.splice(i, 1, 1)
      count += 7

    }

  }

  leds.reverse()

  if (leds.includes(0)) {
    for (let i = 0; i < leds.length; i++) {


      if (leds[i] === 0 && leds[i - 1] === 1) {
        leds.splice(i, 1, 1)
        count += 7

      }

    }
    return count

  } else {
    return count
  }



}



const leds = [0, 0, 0, 1]

console.log(countTime(leds))



