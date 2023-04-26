function getFilesToBackup(lastBackup, changes) {

  const resFinal = changes.filter(element => element[1] > lastBackup).map(value => value[0]).sort()

  const result = [];

  resFinal.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });

  return result
}



const lastBackup = 1546300800
const changes = [
  [3, 1546301100],
  [2, 1546300800],
  [1, 1546300800],
  [1, 1546300900],
  [1, 1546301000]
];


console.log(getFilesToBackup(lastBackup, changes));