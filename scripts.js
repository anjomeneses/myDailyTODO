//selector
		
const todoInput = document.querySelector('.input-text');
const todoButton = document.querySelector('.input-button');
const todoList = document.querySelector('.lists-parent');

//event handlers/listeners
todoButton.addEventListener('click', addNewTodo);
todoList.addEventListener('click', deleteComplete);

//functions
function addNewTodo(event){
	event.preventDefault();

	if(todoInput.value!=""){
	//<div class="new-todo"></div>
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('new-todo');
	// <li class="todo-li">test</li>
	const todoLi = document.createElement('li');
	todoLi.classList.add('todo-li');
	todoLi.innerText = todoInput.value;
	todoDiv.appendChild(todoLi);
	// <button class="todo-complete">completed</button>
	const todoComplete = document.createElement('button');
	todoComplete.classList.add('todo-complete');
	todoComplete.innerHTML = "<i class='fas fa-check'></i>";
	todoDiv.appendChild(todoComplete);
	// <button class="todo-delete">delete</button>
	const todoDelete = document.createElement('button');
	todoDelete.classList.add('todo-delete');
	todoDelete.innerHTML = "<i class='fas fa-trash'></i>";
	todoDiv.appendChild(todoDelete);

	todoList.appendChild(todoDiv);
	todoInput.value = "";
	}
}

function deleteComplete(event){
	const item = event.target;

	if(item.classList[0] == 'todo-complete'){
		const clickedObj = item.parentElement;
		clickedObj.classList.toggle('complete');
	}

	if(item.classList[0] == 'todo-delete'){
		const clickedObj = item.parentElement;
		clickedObj.classList.add('delete');
		clickedObj.addEventListener('transitionend',function(){
			clickedObj.remove();
		});
	}

}
