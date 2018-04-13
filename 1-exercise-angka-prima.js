function angkaPrima(angka) {
    if(angka>1){
      if(angka>2 && angka%2===0){
        return false;
      }
      else if(angka>3 && angka%3===0){
        return false;
      }
      else if(angka>5 && angka%5===0){
        return false;
      }
      else if(angka>7 && angka%7===0){
        return false;
      }
    }
    
    return true;
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false