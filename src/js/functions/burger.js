(function(){
  const burger = document?.querySelectorAll('.burger');
  const menu = document?.querySelector('.burger-nav');
  const closeBtn = document?.querySelectorAll('.burger-close');
  const headerBottom = document?.querySelector('.header-bottom');
  const lines = document?.querySelectorAll('.burger__line');
  const menuMobile = document.querySelector('.nav--320');
  const closeCross = document.querySelector('.nav__cross--320');

  burger.forEach(elem => {
    elem?.addEventListener('click', (e) => {
      menu?.classList.toggle('menu-active');
      menuMobile?.classList.toggle('open--320');
      lines.forEach(item => {
        item.classList.toggle('line-red')
      });
    });

    elem?.addEventListener('keydown', (e) => {
      if (e.which === 13) {
        menu?.classList.toggle('menu-active');
        lines.forEach(item => {
          item.classList.toggle('line-red')
        });
      }
    });
  });

  closeBtn.forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      menu?.classList.remove('menu-active');
      menuMobile?.classList.remove('open--320');
      lines.forEach(item => {
        item.classList.toggle('line-red')
      });
    });
  })

  closeCross?.addEventListener('click', () => {
    menuMobile?.classList.remove('open--320');
    lines.forEach(item => {
      item.classList.toggle('line-red')
    });
  });

  let position = pageYOffset;
  document.addEventListener('scroll', (e) => {
    if (position < pageYOffset) {
      headerBottom.classList.add('hide');
      position = pageYOffset;
    } else {
      headerBottom.classList.remove('hide');
      position = pageYOffset;
    }
    if (pageYOffset === 0) {
      headerBottom.classList.remove('hide');
      position = pageYOffset;
    }
  });
})();
