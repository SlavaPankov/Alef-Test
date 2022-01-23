function validate(form_id,email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = document.forms[form_id].elements[email].value;
  if(reg.test(address) == false) {
     alert('Введите корректный e-mail');
     return false;
  }
}

function createFromTemplate(template) {
  const element = document.createElement('template');
  element.innerHTML = template.trim();
  return element.content.firstChild;
}

function renderErrMsg() {
  const template = `
    <div class="error-msg">
      Введите корректный e-mail
    </div>
  `;

  const errMsg = createFromTemplate(template);

  return errMsg;
}

const form = document.querySelector('.form');
const emailField = document.querySelector('.form__input');
const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const cross = document.querySelector('.form__cross');

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let address = emailField.value
  if (reg.test(address) === false) {
    emailField.before(renderErrMsg());
    emailField.classList.add('error');
  } else {
    form.submit();
  }
});

form.addEventListener('input', () => {
  let address = emailField.value
  if (reg.test(address) === true) {
    document.querySelector('.error-msg').remove();
    emailField.classList.remove('error');
  }
});


cross.addEventListener('click', () => {
  emailField.value = '';
})
