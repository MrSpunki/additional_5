module.exports = function check(str, bracketsConfig) {
  
  var arrayElements = str.split("");
  
  for (i = 0; i <= arrayElements.length; i++) {
    for (j = 0; j < arrayElements.length; j++) {
      
      if (((arrayElements[j] === '(') && (arrayElements[j+1] === ')'))
        ||((arrayElements[j] === '[') && (arrayElements[j+1] === ']'))
        ||((arrayElements[j] === '{') && (arrayElements[j+1] === '}'))
        ||((arrayElements[j] === '|') && (arrayElements[j+1] === '|'))) {
          
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
