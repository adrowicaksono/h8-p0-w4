function digitPerkalianMinimum(angka) {
	var faktor = [];
	//console.log(faktor);
	var jumlah = 0;
	var digit = '';
	//membuat pohon faktor perkalian
	for (a = 0; a <= angka; a++) {
		if (angka % a === 0) {
			faktor.push([a, angka / a]);
		}
	}
	//memotong array faktor yang berulang, tetapi antisipasi array yang hanya punya satu indeks
	if (faktor.length > 1) {
		faktor = faktor.slice(0, faktor.length / 2);
	}

	//menggabungkan isi di dalam array
	digit =
		String(faktor[faktor.length - 1][0]) + String(faktor[faktor.length - 1][1]);

	return digit.length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

//jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.
