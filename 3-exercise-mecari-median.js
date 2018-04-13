function cariMedian(arr) {
	var mid = Math.floor((arr.length - 1) / 2);

	//jika jumlah lenggth genap, maka ambil 2 indeks tengah jumlahkan dan bagi 2
	if (arr.length % 2 !== 0) {
		return arr[mid];
		// jika jumlah length ganjil, maka ambil indeks tengah (dua angka ditengah) dibagi 2
	} else {
		return (arr[mid] + arr[mid + 1]) / 2;
	}
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
