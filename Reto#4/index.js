function getGiftsToRefill(a1, a2, a3) {

  let a1Filter = a1.filter((item, index) => {
    return a1.indexOf(item) === index
  });

  let a2Filter = a2.filter((item, index) => {
    return a2.indexOf(item) === index
  });

  let a3Filter = a3.filter((item, index) => {
    return a3.indexOf(item) === index
  });

  let newArray = a1Filter.concat(a2Filter, a3Filter)

  let resultado = newArray.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})

  let respuesta = [];

  for (const property in resultado) {

    if (resultado[property] == 1) {
      respuesta.push(property)
    }

  }

  return respuesta;

}



const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']


// { bici: 3, coche: 2, 'muñeca': 1, pc: 1 }

console.log(getGiftsToRefill(a1, a2, a3));