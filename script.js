// Открытие мобильного меню
const menuButton = document.getElementById('menuButton');
const nav = document.getElementById('nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Закрываем меню после перехода по ссылке
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Демонстрационная отправка формы
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = 'Спасибо! Форма заполнена. Для реальной отправки подключите обработчик на сервере.';
  contactForm.reset();
});
