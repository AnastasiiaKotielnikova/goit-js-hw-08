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
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
    }).join('');
}

galleryContainer.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return;
  }
    evt.preventDefault();
    onModalOpen(evt);
    console.log(evt.target.dataset.source);
}

function onModalOpen(evt) {
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="1280" height="960">
`);
  instance.show();
  galleryContainer.addEventListener('keydown', onEscapePress);

  function onEscapePress(evt) {
    const ESC_KEY_CODE = 'Escape';
    const isEscape = evt.code === ESC_KEY_CODE;

    if (isEscape) {
      instance.close();
      galleryContainer.removeEventListener('keydown', onEscapePress);
    }
  }
}
