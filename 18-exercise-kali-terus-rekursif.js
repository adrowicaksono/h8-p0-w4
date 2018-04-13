function kaliTerusRekursif(angka) {
	// you can only write your code here!
	if (String(angka).length == 1) {
		return angka;
	} else {
		var hitung = 1;
		var arrNumber = String(angka).split('');
		// proses : console.log(arrNumber);
		for (a = 0; a <= arrNumber.length - 1; a++) {
			hitung = hitung * Number(arrNumber[a]);
		}
		return kaliTerusRekursif(hitung);
	}
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
