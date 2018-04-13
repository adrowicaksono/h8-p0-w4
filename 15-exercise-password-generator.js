function changeVocals(str) {
	var str2 = str.split('');
	var alp = 'aiueoAIUEO';
	var alp2 = 'bjvfpBJVFP';

	for (a = 0; a <= str2.length - 1; a++) {
		for (b = 0; b <= alp.length; b++) {
			if (str2[a] == alp[b]) {
				str2[a] = alp2[b];
			}
		}
	}

	return str2.join('');
}

function reverseWord(str) {
	//code di sini
	var balik = '';
	for (a = str.length - 1; a >= 0; a--) {
		balik = balik + str[a];
	}

	return balik;
}

function setLowerUpperCase(str) {
	//code di sini
	var ubahHuruf = str.split('');
	for (a = 0; a <= ubahHuruf.length - 1; a++) {
		if (ubahHuruf[a] == ubahHuruf[a].toUpperCase()) {
			ubahHuruf[a] = ubahHuruf[a].toLowerCase();
		} else {
			ubahHuruf[a] = ubahHuruf[a].toUpperCase();
		}
	}
	return ubahHuruf.join('');
}

function removeSpaces(str) {
	//code di sini
	return str.split(' ').join('');
}

function passwordGenerator(name) {
	if (name.length <= 4) {
		return 'Minimal karakter yang diinputkan adalah 5 karakter ';
	} else {
		gantiVokal = changeVocals(name);
		balikKata = reverseWord(gantiVokal);
		ubahHuruf = setLowerUpperCase(balikKata);
		hapusSpaci = removeSpaces(ubahHuruf);
		return 'passwordGenerator: ' + hapusSpaci;
	}
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
