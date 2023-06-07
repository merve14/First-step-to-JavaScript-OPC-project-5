const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];


const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

arrowLeft.addEventListener("click", previous);
arrowRight.addEventListener('click', next);

const bannerImage = document.querySelector(".banner-img");
bannerImage.src = "./assets/images/slideshow/" + slides[0].image;

// je selectionne ma div .dots pour y inserer des bulles
const containerDots = document.querySelector(".dots");

const parag = document.querySelector("#banner p");
parag.innertext = slides[0].tagLine;

// je boucle sur mes slides et a chaque fois je crée un point
for (let i = 0; i < slides.length; i++) {
	const point = document.createElement("div");
	containerDots.appendChild(point);
	point.classList.add("dot");	
}

const bullets = document.querySelectorAll(".dot");
bullets[0].classList.add("dot_selected");	


// ma function pour passer à l'image précédente
function previous() {   
	// je definie l'index par defaut à zero       
	let index = 0;
	// je boucle pour voir si l'une des dots est selectionné
	for (let i = 0; i < slides.length; i++) {
		const test = bullets[i].classList;
		// si je trouve que l'une des dots est selectionné alors je garde son index
		if (test.contains("dot_selected")) {
			index=i;
		};	
	}
	// je supprime la class dot selected à la dot de l'index que j'ai trouvé pour pouvoir mettre à la dot précédente
	bullets[index].classList.remove("dot_selected");
	// si index est égal à 0 sa veut dire que nous somme sur la 1er slide alors on part sur la dernier slide
	if (index==0) { index= slides.length - 1; } else { index--;};
	bullets[index].classList.add("dot_selected");	
	bannerImage.src = "./assets/images/slideshow/" + slides[index].image;
	parag.innerHTML = slides[index].tagLine;
};

function next() {
	index = 0;
	for (let i = 0; i < slides.length; i++) {
		let test = bullets[i].classList;
		if (test.contains("dot_selected")) {
			index=i;
		};	
	}
	bullets[index].classList.remove("dot_selected");
	if (index==slides.length - 1) { index=0; } else { index++;};
	bullets[index].classList.add("dot_selected");
	bannerImage.src = "./assets/images/slideshow/" + slides[index].image;
	parag.innerHTML = slides[index].tagLine;
};
