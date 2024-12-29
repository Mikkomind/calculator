// Добавление цифр и символов в поле вывода
function appendValue(value) {
  const display = document.getElementById('display');
  display.value += value;
}

// Выполнение математического выражения
function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

// Очистка экрана
function clearDisplay() {
  document.getElementById('display').value = '';
}
