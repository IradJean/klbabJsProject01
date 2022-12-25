// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//event listners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodoItem);


// functions
 function addTodo(e){
    //prevent form from submitting
e.preventDefault();
//Todo div
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');
const newTodo = document.createElement('li');
newTodo.innerHTML = todoInput.value;
const spaceCheck = /\s+/;
if(todoInput.value =="" ||spaceCheck.test(todoInput.value)){
    return;
}
else{
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
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
    console.log(targetItem);
    if(targetItem.classList[0] === 'trash-btn'){

        const todo = targetItem.parentElement;
        todo.remove();
      
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

   
 