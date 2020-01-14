// api key : 82005d27a116c2880c8f0fcb866998a0
let latitude;
let longitude;

const notification = document.getElementsByClassName('notification')[0];

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
	}
}

function onSuccess(position) {
	console.log(position);
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
