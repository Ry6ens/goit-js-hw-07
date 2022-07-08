import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const galleryCardsArr = galleryItems
  .map(
    (el) =>
      `<div class="gallery__item">
        <a class="gallery__item" href="${el.original}">
            <img 
            class="gallery__image"
            src="${el.preview}"
            alt="${el.description}"
            data-source="${el.original}"
            />
        </a>
    </div>`
  )
  .join("");

galleryList.innerHTML = galleryCardsArr;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
