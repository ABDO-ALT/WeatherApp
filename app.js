let  apikey = '663ca3aad37bf2a46b2f88dad67c0c08'
let longitude;

const notification = document.getElementsByClassName('notification')[0];

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
	}
}

function onSuccess(position) {
    console.log(position);
latitude = position.coords.latitude;
longitude = position.coords.longitude;

    const weather =  fetch('https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid='+ apikey);
   
}

function onError(error) {
	console.log('NO no no ', error);

	//notification[0].innerText.message;
	const p = document.createElement('p');
	p.innerHTML = error.message;

    notification.style.display = 'block';

     notification.appendChild(p);
}

getLocation();
