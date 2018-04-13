function totalDigitRekursif(angka) {
	//jika tinggal 1 digit, maka akhir program dan kembalikan nilai angka itu sendiri
	if (Number(String(angka).length - 1) === 0) {
		return angka;
	}
	//console.log(angka);
	//ambil nilai ddepn dengan cara di jadikan string dan di spli
	return (
		Number(String(angka)[0]) +
		totalDigitRekursif(Number(String(angka).split('').slice(1).join('')))
	);
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5

//(5+(1+(2+0)))

//console.log (Number(String(angka)[0]));
//console.log(Number(String(angka).split('').slice(1).join('')));
