//Write a function which calculates the average of the numbers in a given list.
//My Solution
function find_average(array1) {
    // your code here
  if (array1.length > 0) {
    return  array1.reduce((accumulator,curr) => accumulator + curr, 0) / array1.length
    } else return 0
  
  }