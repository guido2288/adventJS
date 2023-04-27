function sortToys(toys, positions) {
  let orderToys = [];
  for (let i = 0; i < positions.length; i++) {
    orderToys.push({ toy: toys[i], position: positions[i] })
  }
  return orderToys.sort((a, b) => a.position - b.position)
    .map(element => element.toy);
}

const toys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']

const positions = [8, 6, 5, 7, 9];

console.log(sortToys(toys, positions))