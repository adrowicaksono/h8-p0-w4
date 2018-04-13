//1. membuat function wallet
//2. membuat function cart
//3. membuat function objek shoppers(memberId, money)
function shoppingTime(memberId, money) {
	// you can only write your code here!
	if (memberId === '') {
		return 'Mohon maaf, toko X hanya berlaku untuk member saja';
	}

	if (money < 50000) {
		return 'Mohon maaf uang tidak cukup';
	}

	var wallet = function(dollar) {
		if (dollar === undefined) {
			dollar = 0;
		}
		money = money - dollar;
		return money;
	};

	var shop = function() {
		var limit = wallet();
		var cart = [];

		if (limit >= 1500000) {
			cart.push('Sepatu Stacattu');
			limit = wallet(1500000);
		}
		if (limit >= 500000) {
			cart.push('Baju Zoro');
			limit = wallet(500000);
		}
		if (limit >= 250000) {
			cart.push('Baju H&N');
			limit = wallet(250000);
		}
		if (limit >= 175000) {
			cart.push('Sweater Uniklooh');
			limit = wallet(175000);
		}
		if (limit >= 50000) {
			cart.push('Casing Handphone');
			limit = wallet(50000);
		}
		return cart;
	};
	//console.log(shop());
	//console.log(wallet());
	var shoppers = function(id, debit) {
		(this.memberId = id), (this.money = debit), (this.listPurchased = shop()), (this.changeMoney = wallet());
	};

	return new shoppers(memberId, money);
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
//console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
//console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
//console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
