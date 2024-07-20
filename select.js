document.addEventListener('DOMContentLoaded', () => {
  const slideGallery = document.querySelector('.slides');
  const slides = slideGallery.querySelectorAll('div');
  const thumbnailContainer = document.querySelector('.thumbnails');
  let slideWidth = slideGallery.offsetWidth;

  const highlightThumbnail = () => {
    thumbnailContainer
      .querySelectorAll('div.highlighted')
      .forEach(el => el.classList.remove('highlighted'));
    const index = Math.floor(slideGallery.scrollLeft / slideWidth);
    thumbnailContainer
      .querySelector(`div[data-id="${index}"]`)
      .classList.add('highlighted');
  };

  const scrollToElement = el => {
    const index = parseInt(el.dataset.id, 10);
    slideGallery.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth'
    });
  };

  const handleWheel = event => {
    event.preventDefault();
    const scrollAmount = event.deltaY *4; // Increase the scroll amount for faster scrolling
    slideGallery.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  thumbnailContainer.innerHTML += [...slides]
    .map((slide, i) => `<div data-id="${i}"></div>`)
    .join('');

  thumbnailContainer.querySelectorAll('div').forEach(el => {
    el.addEventListener('click', () => scrollToElement(el));
  });

  slideGallery.addEventListener('scroll', () => highlightThumbnail());
  slideGallery.addEventListener('wheel', handleWheel);

  highlightThumbnail();

  window.addEventListener('resize', () => {
    slideWidth = slideGallery.offsetWidth;
    highlightThumbnail();
  });
});
