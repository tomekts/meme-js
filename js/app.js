'use strict';

document.addEventListener('DOMContentLoaded', function() {

	var show=1;
	var first;
	var second;
	var firstcard
	var buttonTest = document.querySelector('.buttonTest');
	var cardlist = document.querySelectorAll('.card');

	buttonTest.addEventListener('click', function(){		
		addRandomImage();
		})

	
	for (var i = 0; i < 16; i++) {
		cardlist[i].addEventListener('click', check);		
	}

	

	function check(){		
		if (show==1) {
			first = this.firstElementChild.src;	
			for (var i =0 ; i<16; i++) {
				if (this===cardlist[i]) {
					firstcard=i;
				}
			}

			console.log('fir: ' +first)		
		}			
		
		this.firstElementChild.classList.remove('unvisible');
		if (show==2) {
			second = this.firstElementChild.src;	
			console.log('sec: '+second)			
			if (first===second) {
				console.log('brawo');
				this.firstElementChild.classList.add('oki');
				cardlist[firstcard].firstElementChild.classList.add('oki');
				
				
			}
		}

		if (show==3) {
			show=0;
			for (var i = 0; i <cardlist.length; i++) {
				cardlist[i].firstElementChild.classList.add('unvisible');
			}
		}
		show++;
		
	}

			
	

//testowanie js XD	
/*
	var first = this.firstElementChild.src;		
	var second = this.firstElementChild.src;
	var cars = ['kot', 'pies', 'indyk'];
	console.log(cars);
	cars.push('kot');
	var car=[];
	car.push('kot');
	console.log(car.length);
	
	console.log(car.includes('kot'));
*/

	

	function addRandomImage(){
		var bussySite=[];
		var bussyImage=[];	

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

	function addImage(site, number){
		var image = document.createElement('img');
		image.src=("./images/icon"+number+'.png');
		image.classList='image';
		image.classList.add('unvisible')
		cardlist[site].innerHTML='';
		cardlist[site].appendChild(image);	
		
	}

});