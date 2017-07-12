// {3, 5, 6, 7, 0, 0, 9, 2, 0} array (1st move the zeros to right and then left) do not use temp array to solve this.

const array = [3, 5, 6, 7, 0, 0, 9, 2, 0];

// Starts backwards at end of array; deletes current zero and places at the end
function zeroToRight(arr) {
  let count = arr.length;

  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === 0) {
      let temp = arr.splice(i, 1);

      arr.push(...temp);
    }
  }

  return arr;
}

// Starts at beginning of array; deletes current zero and places at the Starts
function zeroToLeft(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      let temp = arr.splice(i, 1);

      arr.unshift(...temp);
    }
  }

  return arr;
}
