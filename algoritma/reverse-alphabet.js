function reverseAlphabet(str) {
    let letters = '';
    let number = '';
  
    // Slice string & number
    for (let i = 0; i < str.length; i++) {
      if (isNaN(str[i])) {
        // insert string
        letters += str[i];
      } else {
        // insert number
        number = str[i];
      }
    }
  
    // reverse
    return letters.split('').reverse().join('') + number;
  }
  
  const result = reverseAlphabet("NEGIE1");
  console.log(result);
  