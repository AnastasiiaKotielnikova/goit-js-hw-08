// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(SimpleLightbox);

const galleryContainer = document.querySelector('.gallery');
const cardsGallery = createGalleryCardsItem(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsGallery);

function createGalleryCardsItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item"><a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></div>
    `
    }).join('');
}
const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });

console.log(lightbox);