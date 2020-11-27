'use strict';

document.addEventListener('DOMContentLoaded', function() {

	
	var buttonTest = document.querySelector('.buttonTest');
	var cardlist = document.querySelectorAll('.card');
	buttonTest.addEventListener('click', function(){
		
		
		addRandomImage();

	})

//testowanie js XD	
	
	// var cars = ['kot', 'pies', 'indyk'];
	// console.log(cars);
	// cars.push('kot');
	// var car=[];
	// car.push('kot');
	// console.log(car.length);
	
	// console.log(car.includes('kot'));

	

	function addRandomImage(){
		console.log('adrandm');
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
		console.log('dodawanie obrazków');
		var image = document.createElement('img');
		image.src=("./images/icon"+number+'.png');
		image.classList='image';
		cardlist[site].innerHTML='';
		cardlist[site].appendChild(image);	
		
	}

});