import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

let newGallery = [...galleryItems].map(({ preview, original, description }) => {
  return `<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`;
});

gallery.innerHTML = newGallery.join(" ");
gallery.addEventListener("click", (event) => {
  event.preventDefault();
});

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
