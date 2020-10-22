const palindrome = () => {
    let word = ''
    let palindrome = ''
  
    while (true) {
      const input = prompt("Masukkan Nilai:")
  
      if (input == -1) {
        break
      }
  
      word += input
  
      if (word.length > 1) {
        for (let i = word.length-2; i >= 0; i--) {
          palindrome += word[i]
        }
      }
  
      console.log('Output: ' + word + palindrome)
      palindrome = ''
    }
  }
  
  palindrome()