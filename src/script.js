document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Add task on button click or Enter key
    addButton.addEventListener('click', addTask);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const text = input.value.trim();
        if (text) {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${text}</span>
                <button class="delete-btn">Delete</button>
            `;
            
            // Toggle completed status
            li.querySelector('span').addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            // Delete task
            li.querySelector('.delete-btn').addEventListener('click', () => {
                li.remove();
            });

            todoList.appendChild(li);
            input.value = ''; // Clear input
            input.focus();
        }
    }
});
