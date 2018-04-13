function hitungHuruf(kata) {
  
  var arr = (kata.split(' '));
  //console.log(arr);
  var jmlArr= arr.length-1;
  //console.log(jmlArr);
  var arrCompare = [];
 
  var hitung = 0;
  var hitung2 = 0;
  var grandHitung = 0;
  
  
  //perulangan menelusuri array split
  //kalimat
  for(var a=0; a<=jmlArr; a++){
    grandHitung = 0;
    hitung =0;
    //console.log('elemen yang ditampilkan :'+ arr[a]);
    var existWord = arr[a];
    arrCompare[a] = [];
    //console.log('arrCompare : ' + arrCompare);
    //console.log("existWord : "+ existWord);
    //membuat perulangan untuk cek jumlah perhuruf di existWord
    //kata
    for(b=0; b<=existWord.length-1; b++){
      hitung2 = 0
      //huruf
      //console.log('huruf yang akan dicocokan : '+existWord[b]);
      for(c=0; c<=existWord.length-1; c++){
        //console.log('huruf : '+existWord[c]);
        if(existWord[b]===existWord[c]){
        hitung2 = hitung2 + 1;
        }
        if(hitung2 >hitung){
          hitung = hitung2
        }
        //mecari perulangan paling banyak untuk di push ke arrCompare
        
      }
      if(hitung>grandHitung){
        grandHitung = hitung;
      }
      
      
    
    }
    arrCompare[a]=grandHitung;
  }
  
  for(var d=0; d<=arrCompare.length-1; d++){
    if(arrCompare[d]>1){
      return arr[d];
    }
  }
  //console.log(arrCompare);
  //console.log('hasil perhitungan perhuruf diexistWord : '+  hitung);
  //console.log('grand:' + grandHitung);
  //ketika ganti huruf pengecekan hitung dbuat 0 tapi sebelumnya dicari mana yang lebih besar
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau