//Easy 1
function oddOrEven (numbers) {
    let even = [];
    let odd = [];
    
    for (let i = 0; i < numbers.length; i++){
        if (numbers[1] % 2 === 0) {
            even.push(numbers[i]);
        
        } else {
            odd.push(numbers[i]);
        }
    }
}



//
function splitOddAndEven(numbers) {
    let odd = [];
    let even = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        // number is even
        even.push(numbers[i]);
      } else {
        // number is not even (=odd)
        odd.push(numbers[i]);
      }
    }
  
    // create an object with the odd and even array in it
    const returnObject = {
      odd,
      even
    };
  
    return returnObject;
  }

  console.log(splitOddAndEven([12, 23, 49, 32, 27]));
  console.log(splitOddAndEven([11,4,2,12,15]));