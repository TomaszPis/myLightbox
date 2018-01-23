
//Funkcja otwierająca lightbox'a
function lightbox(e){
	var target = e.target; //pobierz aktywny element
	var targetSrc = target.src;//pobierz źródło zdjęcie

	e.preventDefault(); //zablokuj działanie elementu

	var box = document.getElementById('lightbox');//pobierz element, który ma się pojawić
	box.style.visibility = 'visible'; //Zmień styl css na 'widoczny'

	var boxImg = document.getElementById('lightboxImg');//Pobierz element, do którego będzie dodane źródło zdjęcie
	boxImg.setAttribute('src', targetSrc);//Ustaw źródło zdjęcia

	var images = document.getElementsByClassName('zdj');//pobież kolekcję nodelist zdjęć

	//Znajdź aktywny element w kolekcji nodelist
	for (var i = 0.; i < images.length; i++) {

		var elImg = images[i].src

		//jeżeli znajdziesz dopasowany element to zapamiętaj jego indeks
		if(elImg == targetSrc){
			var x = i;
		}
	}

	//Funkcja, która przekierowuje do następnego zdjęcia
	function nextImg(e){
		e.preventDefault();

		//jeżeli x nie wskazuje ostatniego elementu kolekcji nodelist images
		if(x !== (images.length - 1)){
			var nextSrc = images[x + 1].src;//pobierz źródło następnego zdjęcia
			boxImg.setAttribute('src', nextSrc);//Ustaw źródło zdjęcia
			x = x +1;//Ustaw parametr następnego zdjęcia
		}
		//Przejdź do pierwszefo zdjęcia z kolekcji nodelist
		else{
			x = 0;//indeks pierwszego zdjęcia
			var nextSrc = images[x].src;//źródło pierwszego zdjęcia
			boxImg.setAttribute('src', nextSrc);//Ustaw źródło zdjęcia
		}
	}

	//Funkcja, która przekierowuje do poprzedniego zdjęcia
	function prevImg(e){
		e.preventDefault()

		//jeżeli x nie wskazuje na pierwszy element kolekcji nodelist
		if(x !== 0){
			var prevSrc = images[(x - 1)].src; //Pobierz źródło poprzedniego zdjęcia
			boxImg.setAttribute('src', prevSrc);//Ustaw źródło zdjęcia
			x = x - 1;//Ustaw parametr poprzedniego zdjęcia
		}
		//Przejdź do ostatniego zdjęcia z kolekcji nodelist
		else{
			x = (images.length - 1);//Ustaw parametr ostatniego zdjęcia
			var prevSrc = images[x].src;// zródło zdjęcia
			boxImg.setAttribute('src', prevSrc);// Ustaw zródło
		}
	}

	var next = document.getElementById('next');//Przycisk ustawiający następne zdjęcie
	next.addEventListener('click', nextImg, false);

	
	var prev = document.getElementById('prev');//przycisk ustawiający wcześniejsze zdjęcie
	prev.addEventListener('click', prevImg, false);

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

var sibling = document.getElementsByClassName('zdj');
var siblingElements = sibling.length;


