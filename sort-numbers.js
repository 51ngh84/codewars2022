//Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
//my solution

function solution(nums){
    //   const numbs = parseInt(nums)
    // return numbs.sort((a,b)=>a-b)
      
       return nums !== null ? nums.sort((a,b)=> a-b) : [] 
    }

