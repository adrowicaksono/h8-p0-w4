function checkAB(num) {
var end = 0;
      var sentence = num.split(' ').join('');

      for (a = 0; a <= sentence.length - 1; a++) {
          var begin = 0;
          if (sentence[a] === 'a') {
              //console.log('ketemu a nya diindeks : ' + a);
              begin = a;
          }
          //karena ketemu b di kondisikan dulu, apakah lebih besar dari a atau tidak
          //jika ya, apakah nilainya lebih besar, jika ya maka akan dilihat apakah jaraknya lebih dari 3 indeks
          if (sentence[a] === 'b') {
              //console.log('ketemu b nya di indeks : ' + a);
              if (a > begin) {
                  return a - begin >= 3;
              }
          }
          //kondisi jika setelah ketemu a namun sampai selesai perulangan tidak menemukan b maka akan return false
          if (a === sentence.length - 1) {
              return false;
          }
      }
      //console.log('begin:' +begin);
      //console.log(end);
      //console.log(sentence);
  }

  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false