const factorial = function(num) {
    return (num != 1) ? num * factorial(num - 1) : 1;
  }
  
const calcPas = function(n, k) { 
    if (k === 0 || n - k === 0) {
        return 1;
    } else {
        var numer = factorial(n);
        var denom = factorial(k)*factorial(n - k);

        if( numer/denom < 0 || numer/denom === 0) {
            return 1;
        } else {return Math.round(numer/denom);}
    }
  }

function pascalsTriangle(n) {
    //Create a container for output
    var pascal = [];
    //First for loop determines the # of rows on the pascal triangle
      //Second for loop creates the rooms in each row
      for(let j = 0; j <= n - 1; j++) {
        for(let k = 0; k <= j; k++) {
            pascal.push(calcPas(j, k));
        }
      }

    return pascal;
}



// function pascalsTriangle(n) {
  
  
//     //Create a container for output
//     var pascal = [];
//     var base = 1;
    
//     //First for loop determines the # of rows on the pascal triangle
//     for(let i = 1; i <= n; i++) {
//       //Second for loop creates the rooms in each row
//       for(let j = 0; j <= i - 1; j++) {
//           pascal.push(base);
//       }
//     }
//     return pascal;
//     //return a flat array representing the values of Pascal's Triangle to the n-th level
//   }