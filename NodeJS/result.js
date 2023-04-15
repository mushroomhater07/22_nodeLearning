function randomCase() {
    let n = Math.floor(Math.random() * 100);
  console.log(n);
    switch (true) {
      case (n < 70):
        return 1;
      case (n < 80):
        return 2;
      case (n < 90):
        return 3;
      case (n < 100):
        return 4;
    }
  }
  
  console.log(randomCase());