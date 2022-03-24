const form  = document.getElementById('form');
const todoInput  = document.getElementById('input');
const todoWrapper  = document.getElementById('todo');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo();
})

function addTodo(){
    let todoInputText = todoInput.value;
    if(todoInputText) {
        const todoLi = document.createElement('li');
    todoLi.innerText = todoInputText;
    todoLi.addEventListener('click', () => {
        todoLi.classList.toggle('completed');
    })
    todoLi.addEventListener('contextmenu', (e) => {
        e.preventDefault();

        todoLi.remove();
    })

    todoWrapper.appendChild(todoLi);
    }
    
    todoInput.value = '';
}