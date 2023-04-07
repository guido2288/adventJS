function countHours(year, holidays) {

  let hours = 0;

  for (param in holidays) {

    let date = new Date(`${holidays[param]}/${year}`)

    let day = date.getDay()

    if (day === 0 || day === 6) {
      console.log('No suma horas')

    } else {
      console.log('Suma horas')
      hours += 2
    }

  }

  return console.log('Total de horas: ' + hours)

}


const year = 2022
const holidays = ['01/06', '04/01', '12/25']

countHours(year, holidays)


