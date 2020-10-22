const butterfly = (num) => {
    let word = ''
    let space = 0
    let pal = ''
  
    for (let i = 1; i <= num; i++) {
      if (i == 2) {
        space++
      } else if (i >= 2) {
        space += 2
      }
    }
  
    for (let i = 1; i <= num; i++) {
      word += i
  
      for (let i = word.length-1; i >= 0; i--) {
        if (!(i == num-1)) {
          pal += word[i]
        }
      }
  
      console.log(word + " ".repeat(space)+pal)
      pal = ''
  
      if (space - 2 < 0) {
        space = 0
      } else {
        space-=2
      }
    }
  
    space = 1
  
    for (let i = num-1; i >= 0; i--) {
      word = word.slice(0,i)
  
      for (let i = word.length-1; i >= 0; i--) {
        if (!(i == num-1)) {
          pal += word[i]
        }
      }
  
      console.log(word + " ".repeat(space)+pal)
      pal = ''
      space+=2
    }
  }
  
  butterfly(9)