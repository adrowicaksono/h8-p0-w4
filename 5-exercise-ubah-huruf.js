function ubahHuruf(kata) {
	var abc = 'abcdefghijklmnopqrstuvwxyz';
	var tampung = '';

	for (var a = 0; a <= kata.length - 1; a++) {
		//console.log('ini kata : '+ kata[a]);
		for (b = 0; b <= abc.length - 1; b++) {
			//console.log(abc[b])
			if (kata[a] === abc[b]) {
				tampung = tampung + abc[b + 1];
			}
		}
	}
	return tampung;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
