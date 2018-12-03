var totalsoft = 0
var totalbeer = 0
var totalwine = 0
var totalsnack8 = 0
var totalsnack16 = 0

const SOFT = 2;
const BEER = 3.50; 
const WINE = 5;
const SNACK8 = 4.99;
const SNACK16 = 8.99;

function Order() {
	var bestelling = prompt("Welke bestelling wilt u toevoegen? \'snack\' , \'bier\' , \'wijn\' , \'fris\'");
	if (bestelling == "fris") {
		var soft = parseInt(prompt ("Hoeveel fris wilt u?"));
		alert ("U heeft" +' '+ soft + ' ' + "fris toegevoegd");
		totalsoft +=  Number(soft);
		Order();
		
	} else if (bestelling == 'bier') {
		var beer = parseInt(prompt ('Hoeveel bier wilt u?'));
		alert ('U heeft' +' '+ beer + ' ' + 'bier toegevoegd');
		totalbeer = Number(totalbeer) + Number(beer)
		Order();
		
	} else if (bestelling == 'wijn') {
		var wine = parseInt(prompt ('Hoeveel wijn wilt u?'));
		alert ('U heeft' + ' ' + wine + ' ' + 'wijn toegevoegd');
		totalwine = Number(totalwine) + Number(wine)
		Order();
		
	} else if (bestelling == 'snack') {
		var snack = prompt ('Wilt u 8 of 16 bitterballen?');
		if (snack == 8) {
			var snack8 = parseInt(prompt ('Hoeveel bitterbalschalen van 8 wilt u bestellen?'));
			alert ('U heeft' +' '+ snack8 + ' ' + 'bitterbalschalen van 8 stuks toegevoegd');		
			totalsnack8 = Number(totalsnack8) + Number(snack8)
			Order();
			
		} else if(snack == 16) {
			var snack16 = parseInt(prompt ('Hoeveel bitterbalschalen van 16 wilt u bestellen?'));
			alert ('U heeft' +' '+ snack16 + ' ' + 'bitterbalschalen van 16 stuks toegevoegd');		
			totalsnack16 = Number(totalsnack16) + Number(snack16)
			Order();
					
		} else {
			alert("Wij hebben alleen bitterbalschalen van 8 en 16 bitterballen.");
			Order();
		}

	} else if (bestelling == "stop") {
	
		var pricessoft = SOFT * totalsoft;
		var pricesbeer = BEER * totalbeer;
		var priceswine = WINE * totalwine;
		var pricessnack8 = SNACK8 * totalsnack8;
		var pricessnack16 = SNACK16 * totalsnack16;
		
		document.write('U heeft' + ' ' + totalsoft + ' ' + 'fris besteld.' + '<br />');
		document.write(totalsoft + ' ' + 'x €'+ SOFT + ' ' + ' = ' + '€' + pricessoft + '<br/><br/>');
		document.write('U heeft' + ' ' + totalbeer + ' ' + 'bier besteld.' + '<br />');
		document.write(totalbeer + ' ' + 'x €'+ BEER + ' ' + ' = ' + '€' + pricesbeer + '<br/><br/>');		
		document.write('U heeft' + ' ' + totalwine + ' ' + 'wijn besteld.' + '<br />');
		document.write(totalwine + ' ' + 'x €'+ WINE + ' ' + ' = ' + '€' + priceswine + '<br/><br/>');		
		document.write('U heeft' + ' ' + totalsnack8 + ' ' + 'bitterbalschalen van 8 stuks besteld.' + '<br/>');
		document.write(totalsnack8 + ' ' + 'x €'+ SNACK8 + ' ' + ' = ' + '€' + pricessnack8 + '<br/><br/>');		
		document.write('U heeft' + ' ' + totalsnack16 + ' ' + 'bitterbalschalen van 16 stuks besteld.' + '<br/>');
		document.write(totalsnack16 + ' ' + 'x €'+ SNACK16 + ' ' + ' = ' + '€' + pricessnack16 + '<br/><br/>');
		document.write('totaal prijs = €' + ' ' + (pricessoft + pricesbeer + priceswine + pricessnack8 + pricessnack16)+ '<br/><br/>');
			
	} else {
		alert('Dit product kunnen wij u helaas niet aanbieden. ');
		Order();
			
	}
}

Order();