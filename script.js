// Находим ключевые элементы на странице
const taskForm = document.querySelector('#add-task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const clearAllBtn = document.querySelector('#clear-all-btn');

// --- Обработчик для добавления новой задачи ---
taskForm.addEventListener('submit', function(event) {
    // 1. Отменяем стандартное поведение формы (перезагрузку страницы)
    event.preventDefault();

    // 2. Получаем текст из поля ввода и убираем лишние пробелы
    const taskText = taskInput.value.trim();

    // 3. Проверяем, не пустой ли текст. Если да, ничего не делаем.
    if (taskText === '') {
        alert('Пожалуйста, введите текст задачи.');
        return;
    }

    // 4. Создаем новый элемент списка <li>
    const taskLi = document.createElement('li');
    // Создаем текстовый узел, чтобы в него не попали теги, если их введут в инпут
    const textNode = document.createTextNode(taskText + ' ');
    taskLi.append(textNode);

    // 5. Создаем кнопку удаления
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×'; // Красивый крестик
    deleteBtn.classList.add('delete-btn');

    // 6. Добавляем кнопку в наш <li>
    taskLi.append(deleteBtn);
    
    // 7. Добавляем готовый <li> в конец списка <ul>
    taskList.append(taskLi);

    // 8. Очищаем поле ввода для удобства
    taskInput.value = '';
    // Возвращаем фокус на поле ввода
    taskInput.focus();
});

clearAllBtn.addEventListener('click', function() {
    if (confirm('Вы уверены, что хотите удалить все задачи?')) {
        taskList.innerHTML = ''; // Самый простой способ удалить все <li> из <ul>
    }
});


// --- Обработчик для всего списка (Делегирование событий) ---
taskList.addEventListener('click', function(event) {
    // Цель (event.target) — это конкретный элемент, по которому кликнули
    
    // 1. Проверяем, является ли цель кнопкой удаления
    if (event.target.classList.contains('delete-btn')) {
        // Находим родительский элемент <li> для кнопки...
        const parentLi = event.target.parentElement;
        // ...и удаляем его
        parentLi.remove();
    }
    // 2. Проверяем, является ли цель самим элементом <li>
    else if (event.target.tagName === 'LI') {
        // Переключаем класс .completed
        event.target.classList.toggle('completed');
    }
});