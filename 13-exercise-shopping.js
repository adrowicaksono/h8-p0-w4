function countProfit(shoppers) {
	let listBarang = [
		['Sepatu Stacattu', 1500000, 10],
		['Baju Zoro', 500000, 2],
		['Sweater Uniklooh', 175000, 1],
	];

	// you can only write your code here!
	if (shoppers.length === 0) {
		return [];
	}
	//---------------------------------------
	var dataBarang = [];

	//construtor isi dataBarang
	var listItem = function(brand, leftOver, totalProfit) {
		this.product = brand, 
		this.shoppers = [], 
		this.leftOver = leftOver, 
		this.totalProfit = 0;
	};

	//mengisi dataBarang menggunakan perulangan, denganinput dari array listBarang didalamnya memanggil construtor listItem(new)
	for (e = 0; e <= listBarang.length - 1; e++) {
		dataBarang.push(new listItem(listBarang[e][0], listBarang[e][2], 0));
	}

	//function priceProduct
	var priceProduct = function(product) {
		for (f = 0; f <= listBarang.length - 1; f++) {
			if (product === listBarang[f][0]) {
				return listBarang[f][1];
			}
		}
	};

	//============================================================

	//perulangan pada array parameter atau argumen
	for (a = 0; a <= shoppers.length - 1; a++) {
		//perulangan pada array data tampungan, ada object didalamnya
		for (b = 0; b <= dataBarang.length - 1; b++) {
			if (shoppers[a].product === dataBarang[b].product) {
				if (dataBarang[b].leftOver >= shoppers[a].amount) {
					dataBarang[b].shoppers.push(shoppers[a].name);
					dataBarang[b].leftOver =
						dataBarang[b].leftOver - shoppers[a].amount;
					dataBarang[b].totalProfit =
						dataBarang[b].totalProfit +
							priceProduct(shoppers[a].product) * shoppers[a].amount;
				}
			}
		}
	}
	
	//============================================================
	return dataBarang;
	/*
console.log('');
console.log('SHOPPERS :')
console.log('');
console.log(shoppers);
console.log('');
console.log(listBarang);
console.log('');
console.log('DATA BARANG :')
//console.log(dataBarang);
*/
}
/*
console.log(
	countProfit([
		{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
		{ name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
		{ name: 'Rani', product: 'Sweater Uniklooh', amount: 2 },
	])
);
*/

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

//console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]

console.log(countProfit([])); //[]
