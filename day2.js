function test(fileInput) {
    // const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      const fileContents = event.target.result;
      const lines = fileContents.split('\n');     
      
      // Set a counter for to count safe reports
      let isSafe = 0;
      
      // for each line
      for (let index = 0; index < lines.length; index++) { 
        const line = lines[index].split(' ');        
        
      // If the line has more than one number
        if (line.length > 1){

      // compare it to a to z sorted line
      // if equal, then check if the report is safe
      // toSorted instead of toSort to make a deep copy
      aToZLine = line.toSorted(aToZ);

      //toString to compare the order of the values
      if (line.toString() == aToZLine.toString()) {
        // Calls the function to check the report. If it's safe, increment the counter
        if (compareAtoZLine(line)){
          isSafe += 1;
                    
        }
        //if not, nothing happens
      }
      
      // toSorted instead of toSort to make a deep copy
      zToALine = line.toSorted(zToA);     
      
      
      //compare to z to a sorted line
      // if equal, then check for distancebetween numbers
      if (line.toString() == zToALine.toString()) {
        
        // Calls the function to check the report. If it's safe, increment the counter
        if (compareZtoALine(line)){
          isSafe += 1;                   
        }
        //if not, nothing happens
      }
      //else next 
    } 
  }
  console.log(isSafe);
    }
    
    reader.readAsText(file);
    
}

function aToZ(a, b) {
  return a - b;
}
function zToA(a, b) {
  return b - a;
}
function compareAtoZLine(line){
//first number of the line
let numberToCompare = line[0];
//next number, for looping
let nextNumber = 0;
//for each number, check if index+1 is between +1 and +3
for (let numberIndex = 1; numberIndex < line.length; numberIndex++) {
  nextNumber = line[numberIndex];
  // Do 1rst number minus 2nd number, and multiply by minus one to get the positive
  // Ex : (1 - 3)*-1 = -2 * -1 = 2
  if ((numberToCompare - nextNumber)*-1 >= 1 && (numberToCompare - nextNumber)*-1 <= 3){    
    // assign 2nd number to the first one for looping
    numberToCompare = nextNumber;
  }
  // If it's not in that range, return false
  else {
    return false
  } 
  
}
// If every numbers passed, return true
return true
}

function compareZtoALine(line){  
//first number of the line
let numberToCompare = line[0];
//next number, for looping
let nextNumber = 0;
//for each number, check if index+1 is between +1 and +3
for (let numberIndex = 1; numberIndex < line.length; numberIndex++) {
  nextNumber = line[numberIndex];
  // Do 1rst number minus 2nd number
  if ((numberToCompare - nextNumber) >= 1 && (numberToCompare - nextNumber) <= 3){    
    // assign 2nd number to the first one for looping
    numberToCompare = nextNumber;
  }
  // If it's not in that range, return false
  else {
    return false
  }   
}
// If every numbers passed, return true
return true
}