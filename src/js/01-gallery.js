// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const Handlebars = require('handlebars');

const galleryList = document.querySelector('.gallery');
const makeGallery = onMakeGalleryMarkup(galleryItems);

function onMakeGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>`;
    })
    .join('');
}

galleryList.innerHTML += makeGallery;

let gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
gallery.on('show.simplelightbox', function () {
  // do something…
});

{
  {
    galleryItems.preview;
  }
}
// compile the template
const template = Handlebars.compile('Handlebars <b>{{galleryItems.preview}} {{bla}}</b>');
// execute the compiled template and print the output to the console
console.log(template({ galleryItems: 'galleryItems.preview' }));
