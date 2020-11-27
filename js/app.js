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
	//var car=[];
	//car.push('kot');
	//console.log(car.length);
	

	function addRandomImage(){
		console.log('adrandm');
		var bussySite=[];
		var bussyImage=[];
		
		
	
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