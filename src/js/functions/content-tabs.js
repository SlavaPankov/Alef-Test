const pictureBig = document?.querySelectorAll('.top-content__picture');
const pictureSmall = document?.querySelectorAll('.top-content__small');
const listItem = document?.querySelectorAll('.top-content__item');

pictureSmall.forEach(item => {
  item.addEventListener('click', () => {
    pictureBig.forEach(elem => {
      elem.classList.remove('picture-acitve');
      if (elem.dataset.target === item.dataset.path) {
        elem.classList.add('picture-acitve');
      }
    });
  });

})


