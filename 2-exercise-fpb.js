function fpb(angka1, angka2) {
	var angkaBesar = 0;
	var hasil = 0;
	var faktorAngka1 = [];
	var faktorAngka2 = [];
	var faktor = [];
	var faktorTerbesar = 0;

	if (angka1 > angka2) {
		angkaBesar = angka1;
	} else angkaBesar = angka2;

	//mencari faktor masing-masing angka
	for (a = 0; a <= angkaBesar; a++) {
		var hasilPembanding = 0;
		if (angka1 % a === 0) {
			faktorAngka1.push(a);
		}

		if (angka2 % a === 0) {
			faktorAngka2.push(a);
		}
	}
	//pencarian faktor

	//pencarian faktor terbesar
	for (b = 0; b <= faktorAngka1.length - 1; b++) {
		var faktorTerbesarSementara = 0;
		for (c = 0; c <= faktorAngka2.length - 1; c++) {
			if (faktorAngka1[b] === faktorAngka2[c]) {
				faktor.push(faktorAngka1[b]);
				faktorTerbesarSementara = faktorAngka1[b];
			}
		}
		if (faktorTerbesarSementara > faktorTerbesar) {
			faktorTerbesar = faktorTerbesarSementara;
		}
	}

	//console.log(faktorLength);
	//console.log('fAngka1 : '+faktorAngka1);
	//console.log('fAngka2 : '+faktorAngka2);
	//console.log('fAngka : '+faktor);
	//console.log('ini : '+faktorTerbesar);
	return faktorTerbesar;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

//Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.
