import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const cardMarkup = createMarkup(galleryItems);

gallery.insertAdjacentHTML("afterbegin", cardMarkup);

gallery.addEventListener("click", onPictureClick);

function createMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) => `
  <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}

function onPictureClick(evt) {
  evt.preventDefault();

  if (evt.target === evt.currentTarget) {
    return;
  }

  const currentPicture = evt.target;
  const currentOriginalPictureLink = currentPicture.dataset.source;

  const instance = basicLightbox.create(
    `
    <img src="${currentOriginalPictureLink}">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscPress);
      },
    }
  );

  instance.show();

  function onEscPress(evt) {
    console.log(evt);
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
