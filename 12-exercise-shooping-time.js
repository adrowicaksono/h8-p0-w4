function shoppingTime(memberId, money) {
    var wallet = money;
    var cart = [];
    if(memberId===undefined&& money===undefined){
      return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }
    if(memberId===''){
      return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }
    if(money<50000){
      return 'Mohon maaf, uang tidak cukup';
    }
    if(money>=1500000){
      cart.push('Sepatu brand Stacattu');
      wallet = wallet - 1500000;
    }
    if(money>=500000){
      cart.push('baju brand Zoro');
      wallet = wallet - 500000;
    }
    if(money>=250000){
      cart.push('Baju brand H&N');
      wallet = wallet - 250000;
    }
    if(money>=175000){
      cart.push('Sweater brand Uniklooh');
      wallet = wallet - 175000
    }
    if(money>=50000){
      cart.push('Casing Handphone');
      wallet = wallet -50000;
    }
    
    var shoping = {
      memberId : memberId,
      money : money,
      listPurchased : cart,
      changeMoney : wallet
    }
    
    return shoping;
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja