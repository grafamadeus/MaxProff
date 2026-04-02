const slider = document.querySelector('.slider');
const value = document.querySelector('.sl');

// Обновляем цифру при движении
slider.addEventListener('input', () => {
  value.textContent = slider.value;

  // Заполняем левую часть синим
  const percent = (slider.value - slider.min) / (slider.max - slider.min) * 100;
  slider.style.background = `linear-gradient(to right, #1e3a5f ${percent}%, #e0e0e0 ${percent}%)`;
});

// Установить при загрузке
slider.dispatchEvent(new Event('input'));

const disPrice = document.querySelector('.dis_price');
const PRICE_PER_M2 = 2450;
const DISCOUNT = 0.20;

slider.addEventListener('input', () => {
  const area = slider.value;
  const total = area * PRICE_PER_M2;
  const discount = total * DISCOUNT;

  // Форматируем с пробелами: 23 765 руб
  const formatted = Math.round(discount).toLocaleString('ru-RU');

  value.textContent = area;
  disPrice.textContent = formatted + ' руб';

  const percent = (area - slider.min) / (slider.max - slider.min) * 100;
  slider.style.background = `linear-gradient(to right, #1e3a5f ${percent}%, #e0e0e0 ${percent}%)`;
});

slider.dispatchEvent(new Event('input'));

IMask(document.querySelector('input[type="tel"]'), {
  mask: '+{7} (000) 000-00-00'
});