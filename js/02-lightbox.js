import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const cardMarkup = createMarkup(galleryItems);

const lightBoxOpt = {
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
};

gallery.insertAdjacentHTML("afterbegin", cardMarkup);

function createMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
   </li>`
    )
    .join("");
}

const simpleGallery = new SimpleLightbox(".gallery a", lightBoxOpt);
