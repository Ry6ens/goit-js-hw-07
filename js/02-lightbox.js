import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const galleryCardsArr = galleryItems
  .map(
    (el) =>
      `<li class="gallery__item">
        <a  href="${el.original}">
            <img 
            class="gallery__image"
            src="${el.preview}"
            alt="${el.description}"
            data-source="${el.original}"
            />
        </a>
    </li>`
  )
  .join("");

galleryList.innerHTML = galleryCardsArr;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
