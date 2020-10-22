const hourglass = (num) => {
    let space = 0
    for (let i = num; i > 0; i-- ) {
      console.log(' '.repeat(space),'* '.repeat(i))
      space++
    }
    space = num-1
    for (let i = 1; i < num; i++ ) {
      space--
      console.log(' '.repeat(space),'* '.repeat(i+1))
    }
  }
  
  hourglass(5)