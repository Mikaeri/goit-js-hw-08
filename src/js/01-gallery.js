import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector(".js-container");
const markup = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`);

gallery.insertAdjacentHTML('beforeend', markup.join(""));
let lightBox = new SimpleLightbox('.gallery a',{    
    captions: true,
    captionsData: "alt",
    captionDelay: 250
});





console.log(galleryItems);
