'use strict';

document.addEventListener('DOMContentLoaded', function() {

	var show=1;// zmienna do kliku pierwsze i drugiego
	var first; // zmienna do zapisania src pierwszej grafiki
	var second;// zmienna do zapisania src drugiej grafiki
	var secodcard // zmienna do zapisania mijesca pierwszego kliku
	var firstcard// zmienna do zapisania mijesca drugiego kliku
	var finish=0;//zmienna do zakańczenia gry obłusługuje alert
	var buttonTest = document.querySelector('.buttonTest');//selektror do przysiku
	var cardlist = document.querySelectorAll('.card');// selektro do wszystskich pól gry
	// pierwsze losowanie grafik
	addRandomImage();
	//dodanie lisnera na przycisk
	buttonTest.addEventListener('click', function(){		
		addRandomImage();
		finish=0;
		})

	//dodanie lisnera na pola gry
	for (var i = 0; i < 16; i++) {
		cardlist[i].addEventListener('click', check);		
	}

	
	//sprawdzenie zaznaczonych dwóch elemntów
	function check(){			

		if (show==1 || show==3) {
			unvisibleAll();	
			show++;
			
			this.firstElementChild.classList.remove('unvisible');	
			first = this.firstElementChild.src;	
			for (var i =0 ; i<16; i++) {
				if (this===cardlist[i]) {
					firstcard=i;
				}
			}
			console.log('fir: ' +first)		
		}			
		
		
		if (show==2) {
			this.firstElementChild.classList.remove('unvisible');
			second = this.firstElementChild.src;	
			console.log('sec: '+second)		
			for (var i =0 ; i<16; i++) {
				if (this===cardlist[i]) {
					secodcard=i;
				}
				
			}	
			if (first===second && !(firstcard===secodcard)) {
				console.log('brawo');
				this.firstElementChild.classList.add('oki');
				cardlist[firstcard].firstElementChild.classList.add('oki');
				unvisibleAll();
				finish++;
				if (finish==8) {
				setTimeout(()=>{alert('brawo koniec gry')},200);
				}
			}
		}
		
		show++;
		console.log(finish);
	}

	// ukrywanie grafik		
	function unvisibleAll(){
		show=0;
		for (var i = 0; i <cardlist.length; i++) {
				cardlist[i].firstElementChild.classList.add('unvisible');
			}
	}

	//do rozmieszania w losowych miejscach grafik
	function addRandomImage(){
		var bussySite=[];
		var bussyImage=[];
		show=1;	

		for (var i =0; bussyImage.length<8; i++){
					
			var image = Math.floor(Math.random() * 8);
			var pic=0;
						
			if (!bussyImage.includes(image)) {				
				bussyImage.push(image);


				while (pic<2){
					var site = Math.floor(Math.random() * 16); 
					//cardlist[1].innerHTML;
					if (!bussySite.includes(site)) {
						bussySite.push(site);											
						addImage(site,image);
						pic++;
					}					
				}
			}			
		}		
	}
	//do dodawania danej grafiki w dane mijesce
	function addImage(site, number){
		var image = document.createElement('img');
		image.src=("./images/icon"+number+'.png');
		image.classList='image';
		image.classList.add('unvisible')
		cardlist[site].innerHTML='';
		cardlist[site].appendChild(image);	
		
	}
	

});