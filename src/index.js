// document.addEventListener('DOMContentLoaded', () => {
//     console.log(document.getElementById('test-id'))
// })

// Получаем элементы
const toggleButton1 = document.getElementById('toggle-button-1'); // Основное изображение
const toggleButton2 = document.getElementById('toggle-button-2'); // Основное изображение
const hiddenBlock = document.getElementById('hidden-block');
const closeButton = document.getElementById('close-button');

// Показ скрытого блока
toggleButton1.addEventListener('click', () => {
    hiddenBlock.style.display = 'block'; // Показываем блок
});

toggleButton2.addEventListener('click', () => {
    hiddenBlock.style.display = 'block'; // Показываем блок
});

// Закрытие скрытого блока
closeButton.addEventListener('click', () => {
    hiddenBlock.style.display = 'none';
});