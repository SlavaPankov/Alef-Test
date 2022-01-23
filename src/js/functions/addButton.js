const addBtn = document.querySelector('.products__add-btn');
const favBtn = document.querySelector('.products__favorite');
const header = document.querySelector('.top-content__heading').textContent;


function createFromTemplate(template) {
  const element = document.createElement('template');
  element.innerHTML = template.trim();
  return element.content.firstChild;
}

function createModal(product, count, dest) {
  const template = `
    <div class="modal">
      Товар "${product}"
      в количестве ${count} единиц(ы) добавлен в ${dest}
    </div>
  `;

  const modal = createFromTemplate(template);
  return modal;
}

document.addEventListener('click', (e) => {
  const count = document.querySelector('.products__count').value;
  if (e.target === addBtn) {
    const label = createModal(header, count, 'корзину')
    document.querySelector('body').append(label);
    setTimeout(() => {
      label.style.opacity = 0;
    }, 1500);
    setTimeout(() => {
      label.remove();
    }, 1800);
  }

  if (e.target === favBtn) {
    const label = createModal(header, count, 'избранное')
    document.querySelector('.products__favorite-icon').classList.toggle('fill-white');
    document.querySelector('body').append(label);
    setTimeout(() => {
      label.style.opacity = 0;
    }, 1500);
    setTimeout(() => {
      label.remove();
    }, 1800);
  }
});

addBtn.addEventListener('click', () => {
});



