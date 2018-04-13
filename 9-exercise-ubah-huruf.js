function tukarBesarKecil(kalimat) {
	var kal = kalimat.split('');
	for (a = 0; a <= kal.length - 1; a++) {
		if (kal[a] === kal[a].toUpperCase()) {
			kal[a] = kal[a].toLowerCase();
		} else kal[a] = kal[a].toUpperCase();
	}

	var kal2 = kal.join('');
	console.log(kal2);
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

/*
var a = 'a';
var b = 'a';

console.log(a);
if(a===a.toUpperCase()){
    a = a.toLowerCase();
}else a = a.toUpperCase();
console.log(a);
*/
