import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryElement = document.querySelector('.gallery');

let gallery = new SimpleLightbox('.gallery a');

const loader = document.querySelector('.loader');

export function createGallery(images) {
  const linksList = images.map(
    img => `<a href="${img.largeImageURL}" class="gallery-link"
          ><img
            src="${img.webformatURL}"
            alt="${img.tags}"
            title=""
          />
          <div class="image-info">
            <div>
              <span>Likes</span>
              <p>${img.likes}</p>
            </div>
            <div>
              <span>Views</span>
              <p>${img.views}</p>
            </div>
            <div>
              <span>Comments</span>
              <p>${img.comments}</p>
            </div>
            <div>
              <span>Downloads</span>
              <p>${img.downloads}</p>
            </div>
          </div>
        </a>`
  );
  galleryElement.innerHTML = linksList.join('');
  gallery.refresh();
}

export function clearGallery() {
  galleryElement.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
