import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

function createLi(array) {
  return array.reduce(
    (acc, item) =>
      acc +
      `<li class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img
              class="gallery__image"
              src="${item.preview}"
              alt="${item.description}"
            />
          </a>
        </li>`,
    ''
  );
}

const galleryUl = document.querySelector('.gallery');
galleryUl.insertAdjacentHTML('beforeend', createLi(galleryItems));
galleryUl.style.listStyle = 'none';

const images = document.querySelectorAll('.gallery__image');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
