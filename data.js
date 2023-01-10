/*Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Vi ricordo le funzionalità minime
Deve vedersi un'immagine grande che è l'immagine principale
Devono vedersi i thumbnails
Il thumbnails che corrisponde all'immagine grande deve essere graficamente messo in risalto con una classe active
Deve essere possibile cambiare l'immagine principale con le freccette prev e next
Bisogna fare in modo che il carosello sia "infinito": se clicco sul next e sono all'ultima immagine, ricomincio 
dalla prima; se sono alla prima immagine e clicco sul prev vado all'ultima.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
Consigli del giorno:
- regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
*/
const sources = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

function changePic(target){
  galleryFigures[currentActiveIndex].classList.remove('active');
  thumb[currentActiveIndex].classList.remove('active');

  if(target === 'next'){
    currentActiveIndex++;

    if(currentActiveIndex === galleryFigures.length)currentActiveIndex = 0;
  } else if(target === 'prev'){
    currentActiveIndex--;

    if(currentActiveIndex < 0) currentActiveIndex = galleryFigures.length -1;
  }else{
    currentActiveIndex = target;
  }

  galleryFigures[currentActiveIndex].classList.add('active');
  thumb[currentActiveIndex].classList.add('active');

}


const prev = document.getElementById('prev');
const next = document.getElementById('next');

const gallery = document.querySelector('#carousel .gallery'); 
const thumbGallery = document.getElementById('thumbnails');

let galleryElement = '';
let thumbElement = '';

sources.forEach((source, i) => { 
  const img = `<img src="${source.image} " alt = "">`;
  thumbElement += img;
  galleryElement += `
  <figure>
    ${img}
    <figcaption>
      <h2>${source.title}</h2>
      <h3>${source.text}</h3>
    </figcaption>
  </figure> `;
});



gallery.innerHTML = galleryElement;
thumbGallery.innerHTML = thumbElement;



const galleryFigures = document.querySelectorAll('.gallery figure');
const thumb = document.querySelectorAll('#thumbnails img');
let currentActiveIndex = 0;
galleryFigures[currentActiveIndex].classList.add('active');
thumb[currentActiveIndex].classList.add('active');

next.addEventListener('click',function(){
  changePic('next');
})

prev.addEventListener('click',function(){ 
  changePic('prev');
})

for(let i=0; i<thumb.length;i++){
  const thum = thumb[i];

  thum.addEventListener('click', function(){
  changePic(i);
  });
}



 