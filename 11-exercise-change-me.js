function changeMe(arr) {
  if(arr.length ==0){
    console.log('');
    return;
  }
  var ages = function(i){
                  if(i!==undefined){
                    return 2018 - i;
                  }else return 'Invalid Birth Year';
                }
  
  var tampil = [];
      
  for(a=0; a<=arr.length-1; a++){
    
    var people = {
      firstName : arr[a][0],
      lastName : arr[a][1],
      gender : arr[a][2],
      age : ages(arr[a][3]),
      
    };
    tampil.push(people) ;
  }
  
  for(b=0; b<=tampil.length-1; b++){
    console.log(b+1+'. ', tampil[b].firstName, tampil[b].lastName,': ',tampil[b]);
  }
  return tampil;
}

// TEST CASES
var halo = changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
