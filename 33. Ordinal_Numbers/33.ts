let num = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]

num.forEach(y => {
    let suffix = "th";
    if (y === 1) {
      suffix = "st";
    } else if (y === 2) {
      suffix = "nd";
    } else if (y === 3) {
      suffix = "rd";
    }
    console.log(`${y}${suffix}`);
  });