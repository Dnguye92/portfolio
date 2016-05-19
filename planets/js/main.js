var solarSystem = [
	{
		name: "mercury",
		size: "Diameter: 3,031 miles (4,878 km)",
		image: "img/mercury.png",
		days: "58.6 Earth days"
	},
	{
		name: "venus",
		size: "Diameter: 7,521 miles (12,104 km)",
		image: "img/venus.png",
		days: "241 Earth days"
	},
	{
		name: "earth",
		size: "Diameter: 7,926 miles (12,760 km)",
		image: "img/earth.png",
		days: "23 hours, 56 minutes"
	},
	{
		name: "mars",
		size: "Diameter: 4,217 miles (6,787 km)",
		image: "img/mars.png",
		days: "24 hours, 37 minutes"
	},
	{
		name: "jupiter",
		size: "Diameter: 86,881 miles (138,822 km)",
		image: "img/jupiter.png",
		days: "9.8 Earth hours"
	},
	{
		name: "saturn",
		size: "Diameter: 74,900 miles (120,500 km)",
		image: "img/saturn.png",
		days: "10.5 Earth hours"
	},
	{
		name: "uranus",
		size: "Diameter: 31,763 miles (51,120 km)",
		image: "img/uranus.png",
		days: "18 Earth hours"
	},
	{
		name: "neptune",
		size: "Diameter: 30,775 miles (49,530 km)",
		image: "img/neptune.png",
		days: "19 Earth hours"
	},
	{
		name: "pluto",
		size: "Diameter: 1,430 miles (2,301 km)",
		image: "img/pluto.png",
		days: "6.4 Earth days"
	}
]


function clickMe() {
	var planet = document.getElementById('planet').value.toLowerCase()
	for(i = 0; i < solarSystem.length; i++) {
		if(planet == solarSystem[i].name) {
			document.getElementById('picture').src = solarSystem[i].image
			document.getElementById('name').innerHTML = solarSystem[i].name
			document.getElementById('size').innerHTML = solarSystem[i].size
			document.getElementById('length').innerHTML = solarSystem[i].days

			$(document).ready(function(){
			    $('#picture, #name, #size, #length').click(function(){
			        $(this).effect('explode');
			    });
			});

			return
		}else {
			document.getElementById('name').innerHTML = "You didn't enter a name of a planet! Try again!"
		}
	}
}

