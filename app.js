const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

//получаем ссылку на элементы в разметке html
const refs = {
  gallery: document.querySelector('.gallery'),
  lightbox: document.querySelector('.lightbox'),
  lightboxImg: document.querySelector('.lightbox__image'),
};                                                 


/*
  Создаем разметку галереи. 
  С помощю возврата element.map возвращаем разметку на каждый элемент массива  galleryItems
  Подставляя ${item.original}, ${item.preview}, ${item.description} в шаблонную строку передавая 
  свойства объекта как ссылку или подписи в разметку html. !!!Обязательно надо вернуть шаблонную строку!!!
*/
const createGallery = (element) => {
  return element.map(item =>{
    return `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${item.original}"
    >
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`
  });
};

const imageEl = createGallery(galleryItems);// вызываем функцию и передаем в нее массив galleryItems
refs.gallery.insertAdjacentHTML('afterbegin', imageEl.join(''));/*  с помощю метода insertAdjacentHTML 
                                                                    вставляем созданную разметку в нужное нам место */

refs.gallery.addEventListener('click', openModal); //Отлавливаем клик на открытие модалки

//открытие модального окна
function openModal(event){
   event.preventDefault(); //снятие базовых функций с IMG
   if(event.target.nodeName !== 'IMG'){
     return;
   };
   refs.lightbox.classList.add('is-open');
   refs.lightboxImg.src = event.target.dataset.source;
};

//закрытие модального окна
function closeModal(event){
  if(event.target.nodeName === 'IMG'){
    return;
  };
  refs.lightbox.classList.remove('is-open');
  refs.lightboxImg.src = '';
}

refs.lightbox.addEventListener('click', closeModal); //Отлавливаем клик на закрытие модалки

//закрытие модальнго окна кнопкой Esc
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    refs.lightbox.classList.remove('is-open');
    refs.lightboxImg.src = '';
  }
});

  //пролистывание в лево, право с кнопки
  // refs.lightbox.addEventListener('click', flipThrough);

  // function flipThrough(event){
  //   if
  // }