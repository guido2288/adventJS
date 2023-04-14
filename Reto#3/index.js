function distributeGifts(packOfGifts, reindeers) {

  let weightGiftTotal = 0;

  let weightReindeersTotal = 0;

  for (let weightGift of packOfGifts) {

    weightGiftTotal += weightGift.length

  }

  for (let weightReider of reindeers) {

    weightReindeersTotal += (weightReider.length * 2)

  }

  return console.log(Math.floor(weightReindeersTotal / weightGiftTotal))

}


const packOfGifts = ['a', 'b', 'c']
const reindeers = ['d', 'e']

distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])