function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
  
   var dataBarang = [
     { product: 'Sepatu Stacattu',
    shoppers: [],
    leftOver: listBarang[0][2],
    totalProfit: 0 },
    
    {product: 'Baju Zoro',
    shoppers: [],
    leftOver: listBarang[1][2],
    totalProfit: 0 },
    
    { product: 'Sweater Uniklooh',
    shoppers: [],
    leftOver: listBarang[2][2],
    totalProfit: 0 }];
  //----------------------------------------------------------
  
  
  //============================================================

console.log(shoppers);
console.log('');
console.log(dataBarang);
console.log('');
console.log(listBarang);
console.log('--------------------');

for(a=0; a<=shoppers.length-1; a++){
console.log('---------------------------------------------------');
  console.log(shoppers[a].name);
  console.log(shoppers[a].product);
  for(b=0; b<=listBarang.length-1; b++){
    if(shoppers[a].product===listBarang[b][0]){
      //keterangan pembelian
      console.log('keterangan pembelian :');
      console.log(' beli '+shoppers[a].product+' di '+listBarang[b][0]);
      //mau dibuat function
      //periksa jumlah stock barang
      if(shoppers[a].amount<listBarang[b][2]){
        listBarang[b][2]=listBarang[b][2]-shoppers[a].amount;
        if(shoppers[a].product===dataBarang[0].product){
          dataBarang[0].shoppers.push(shoppers[a].name);
          dataBarang[0].leftOver = dataBarang[0].leftOver - shoppers[a].amount;
          dataBarang[0].totalProfit = dataBarang[0].totalProfit + (shoppers[a].amount*listBarang[0][1]);
        }
        if(shoppers[a].product===dataBarang[1].product){
          dataBarang[1].shoppers.push(shoppers[a].name);
          dataBarang[1].leftOver = dataBarang[1].leftOver - shoppers[a].amount;
          dataBarang[1].totalProfit = dataBarang[1].totalProfit + (shoppers[a].amount*listBarang[1][1]);
        }
        if(shoppers[a].product===dataBarang[2].product){
          dataBarang[2].shoppers.push(shoppers[a].name);
          dataBarang[2].leftOver = dataBarang[2].leftOver - shoppers[a].amount;
          dataBarang[2].totalProfit = dataBarang[2].totalProfit + (shoppers[a].amount*listBarang[0][2]);
        }
      } 
      
      
    }
    
  }
  //console.log(listBarang[a][0]);
console.log('---------------------------------------------------');  
//break;
}
console.log('');
console.log('SHOPPERS :')
console.log('');
console.log(shoppers);
console.log('');
console.log(listBarang);
console.log('');
console.log('DATA BARANG :')
console.log(dataBarang);
  
 
    /*
    sepatu.shoppers.push('aaaaa');
    sepatu.shoppers.push('milea');
    sepatu.leftOver = sepatu.leftOver+  1;
    sepatu.leftOver = sepatu.leftOver+  2;
    */
  /*
  console.log(sepatu);
  console.log('---------------');
  console.log('                 ');
  console.log(baju);
  console.log('                 ');
  console.log('---------------');
  console.log(sweater);
  */

}


console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
