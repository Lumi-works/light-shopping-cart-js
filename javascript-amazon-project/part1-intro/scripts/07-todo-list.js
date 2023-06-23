const todoList = [];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; ++i) {
        const todoObject = todoList[i];
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate} </div>
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        " class="delete-todo-button">Delete</button>
        
        `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

}


function addTodo() {
    const inputElem = document.querySelector('.js-name-input');
    const name = inputElem.value;

    const dataInputElem = document.querySelector('.js-due-date-input');
    const dueDate = dataInputElem.value;

    todoList.push({
        name,
        dueDate
    });
    console.log(todoList);

    inputElem.value = '';

    renderTodoList();
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}

