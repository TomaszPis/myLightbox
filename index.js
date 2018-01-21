
//Funkcja otwierająca lightbox'a
function lightbox(e){
	var target = e.target; //pobierz aktywny element
	var targetSrc = target.src;//pobierz źródło zdjęcie

	e.preventDefault(); //zablokuj działanie elementu

	var box = document.getElementById('lightbox');//pobierz element, który ma się pojawić
	box.style.visibility = 'visible'; //Zmień styl css na 'widoczny'

	var boxImg = document.getElementById('lightboxImg');//Pobierz element, do którego będzie dodane źródło zdjęcie
	boxImg.setAttribute('src', targetSrc);//Ustaw źródło zdjęcia
}

var image = document.getElementById('zdjecia');//kliknięty element
image.addEventListener('click', lightbox, true);//Wywołaj zdarzenie

//Funkcja zamykająca lightboxa opierająca się na podobnych zasadach jak funkcja otwierająca
function close(e){
	var box = document.getElementById('lightbox');
	e.preventDefault();
	box.style.visibility = 'hidden';
}

var elClose = document.getElementById('closeButton');
elClose.addEventListener('click', close, false);