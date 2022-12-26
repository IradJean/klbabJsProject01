// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
//event listners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodoItem);
filterOption.addEventListener('click', filterTodo);


// functions
 function addTodo(e){
    //prevent form from submitting
e.preventDefault();
//Todo div
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');
const newTodo = document.createElement('li');
newTodo.innerHTML = todoInput.value;
// const spaceCheck = /^[a-zA-z0-9]\s+$/;
// const validInput = /^[^a-zA-Z0-9]+$/;  
if(todoInput.value ==""){
    return;
}
else{
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
//saving to the local storage
saveTodo(todoInput.value);
//check mark button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add('complete-btn');
todoDiv.appendChild(completedButton); 
//check delete button
const deleteButton = document.createElement('button');
deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
deleteButton.classList.add('trash-btn');
todoDiv.appendChild(deleteButton);
// append to list
todoList.appendChild(todoDiv);
// clear todo input value
todoInput.value = "";
}
 }
 // function to delete a todo item
 function deleteTodoItem(e){
    const targetItem = e.target;
    //deleting toddo
    // console.log(targetItem);
    if(targetItem.classList[0] === 'trash-btn'){

        const todo = targetItem.parentElement;
        todo.classList.add('fallback');
        todo.addEventListener('transitionend', ()=>{
            todo.remove();
        })   // 
      
    }
    //check mark
    if(targetItem.classList[0] === 'complete-btn')
    {
        // console.log('hii');
        const todo = targetItem.parentElement;
        todo.style.textDecoration = 'line-through';
        todo.style.opacity = '0.5';

    }
    }

    //This function needs to be evaluated
   function filterTodo(e){
    const todos = todoList.childNodes;
    
   todos.forEach(function(todo){
    // const todoClassList = todo.classList;
     switch(e.target.value){
        case "all":
                        todo.style.display = 'flex';
            break;
        case "completed":
               if(todo.classList.contains('completed')){
                 todo.style.display = 'flex';
                               }else{
                               todo.style.display = 'none';
                           }
                          break;
     }
   });
   }
   //function to save the todo to the local storage:

function saveTodo(todo){
    let todos;
    if(localStorage.getItem("todos")=== null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

}