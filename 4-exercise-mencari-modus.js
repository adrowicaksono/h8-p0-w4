function cariModus(arr) {
  
  var jumlah = 0;
  var modus = 0;
  
  
  for(var a = 0; a<=arr.length-1; a++){
  //console.log('ini a ------------------: '+arr[a]);
  var jumlah2 = 0;
  
      for(var b=0; b<=arr.length-1; b++){
        if(arr[a]==arr[b]){
          jumlah2 = jumlah2 + 1;
        }
        //console.log('ini b : '+arr[b]);
      }
      console.log('jumlah 2 : ' + jumlah2)
      console.log('jumlah  : ' + jumlah)
      if(jumlah2>jumlah){
        jumlah = jumlah2
        modus = arr[a];
      }
      if(jumlah==arr.length){
        modus = -1;
      }
      if(jumlah===1){
        modus = -1;
      }
     
      
  }

  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1