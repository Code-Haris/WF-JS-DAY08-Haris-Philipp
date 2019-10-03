
console.log(longestStringForLoop(['Martin', 'Thomas', 'Peter', 'Mathias', 'Niki',]));
console.log(longestStringReduce(['Martin', 'Thomas', 'Peter', 'Mathias', 'Niki',]));

function longestStringForLoop(arr) {
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}

function longestStringReduce(arr) {
  return arr.reduce((a, b) => a.length < b.length ? b : a, "");
}
