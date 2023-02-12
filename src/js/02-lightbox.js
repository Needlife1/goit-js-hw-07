
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRaf = document.querySelector('.gallery');
const gallaryMarkup = createGallery(galleryItems);

function createGallery (galleryItems) {
return galleryItems.map(({preview, original, description}) => {
return `<a class="gallery__item" href="${original}">
  <img 
  class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>`
}).join(''); 
};

galleryRaf.insertAdjacentHTML('beforeend', gallaryMarkup);

var lightbox = new SimpleLightbox('.gallery a', { 
     captionsData: "alt",
    captionDelay: 250,
 });


