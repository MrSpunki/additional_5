module.exports = function check(str, bracketsConfig) {
  
  var arrayElements = str.split("");
  
  for (i = 0; i <= arrayElements.length; i++) {
    for (j = 0; j < arrayElements.length; j++) {
      
      if (((arrayElements[j] === '(') && (arrayElements[j+1] === ')'))
        ||((arrayElements[j] === '[') && (arrayElements[j+1] === ']'))
        ||((arrayElements[j] === '{') && (arrayElements[j+1] === '}'))
        ||((arrayElements[j] === '|') && (arrayElements[j+1] === '|'))
        ||((arrayElements[j] === '1') && (arrayElements[j+1] === '2'))
        ||((arrayElements[j] === '3') && (arrayElements[j+1] === '4'))
        ||((arrayElements[j] === '5') && (arrayElements[j+1] === '6'))
        ||((arrayElements[j] === '7') && (arrayElements[j+1] === '7'))
        ||((arrayElements[j] === '8') && (arrayElements[j+1] === '8'))) {
          
          arrayElements.splice(j, 2);
      }
    }
  }

  if (arrayElements.length === 0) {
    return true;
  }else {
    return false;
  }
}
