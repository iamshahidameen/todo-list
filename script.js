//Method 1
// const form  = document.getElementById('form');
// const todoInput  = document.getElementById('input');
// const todoWrapper  = document.getElementById('todo');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     addTodo();
// })

// function addTodo(){
//     let todoInputText = todoInput.value;
//     if(todoInputText) {
//         const todoLi = document.createElement('li');
//     todoLi.innerText = todoInputText;
//     todoLi.addEventListener('click', () => {
//         todoLi.classList.toggle('completed');
//     })
//     todoLi.addEventListener('contextmenu', (e) => {
//         e.preventDefault();

//         todoLi.remove();
//     })

//     todoWrapper.appendChild(todoLi);
//     }
    
//     todoInput.value = '';
// }


//Method 2

const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = document.createElement('li')
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        }) 

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLS()
        }) 

        todosUL.appendChild(todoEl)

        input.value = ''

        updateLS()
    }
}

function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}