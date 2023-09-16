/*
 1. create an array to store todos
 2. when we click add,
 3. get text from textbox
 4. add it to array
 5. console.log() the array
*/

const todoList = [{
    name: 'make dinner',
    dueDate: '2022-09-16'
}, {
    name: 'wash dishes',
    dueDate: '2022-09-22'
} , {
    name: 'do homework',
    dueDate: '2022-10-01'
}];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, dueDate } = todoObject
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            " class="delete-btn">Delete</button>
        ` // generating the HTML
        todoListHTML += html;
    }

    console.log(todoListHTML);

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    let inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    let dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({name, dueDate});

    inputElement.value = ''; // reset the text in the textbox
    dateInputElement.value = ''; // reset the date in the date box

    renderTodoList();
}