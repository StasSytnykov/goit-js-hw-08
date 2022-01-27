// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import imgCard from '../template/img-card.hbs';

const galleryList = document.querySelector('.gallery');
const makeGallery = onMakeGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', makeGallery);

function onMakeGalleryMarkup(galleryItems) {
  return imgCard(galleryItems);
}

let gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
gallery.on('show.simplelightbox', function () {
  // do something…
});
