import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

// 1) Вариант решения
// const makeGalleryCard = ({ preview, original, description } = {}) => {
//     const galleryLink = document.createElement("a");
//     galleryLink.classList.add("gallery__link");
//     galleryLink.href = original;

//     const galleryLi = document.createElement("img");
//     galleryLi.classList.add("gallery__image");
//     galleryLi.src = preview;
//     galleryLi.alt = description;

//     galleryLink.append(galleryLi);

//     return galleryLink;
// };

// const galleryCardsArr = galleryItems.map((el) => {
//   return makeGalleryCard(el);
// });

// galleryList.append(...galleryCardsArr);

// 2) Вариант решения
const galleryCardsArr = galleryItems
  .map(
    (el) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${el.original}">
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

galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  const target = event.target;
  if (target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${target.dataset.source}" width="800" height="600">
`
  );

  instance.show();

  galleryList.addEventListener("keydown", onKeyUp);

  function onKeyUp(event) {
    console.log(event);
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
    galleryList.removeEventListener("keydown", onKeyUp);
  }
});
