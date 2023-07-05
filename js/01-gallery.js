import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

let newGallery = [...galleryItems].map(({ preview, original, description }) => {
  return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
</a>
</div>`;
});

gallery.innerHTML = newGallery.join(" ");

gallery.addEventListener("click", (imagesE) => {
  imagesE.preventDefault();
  if (imagesE.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${imagesE.target.src}" alt="${imagesE.target.alt}" >`
  );
  instance.show();

  document.addEventListener("keydown", (key) => {
    if (key.code === "Escape") {
      instance.close();
    }
  });
});
