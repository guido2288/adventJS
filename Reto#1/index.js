function wrapping(gifts) {

  let resultado = []

  for (var i = 0; i < gifts.length; i++) {

    let asteriscoCantidad = gifts[i].length + 2

    let asteriscos = ''
    let parcial = []

    for (var j = 0; j < asteriscoCantidad; j++) {

      asteriscos += '*'

    }
    parcial.push(asteriscos)
    parcial.push('\n')
    parcial.push('*')
    parcial.push(gifts[i])
    parcial.push('*')
    parcial.push('\n')
    parcial.push(asteriscos)

    resultado.push(parcial.join(''))

    asteriscoCantidad = ''

  }

  return resultado
}
