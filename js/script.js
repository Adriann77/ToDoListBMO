const addNewTaskBtn = document.querySelector('.add-new-task');
const deleteAllTasksBtn = document.querySelector('.delete-all-tasks');

const appBody = document.querySelector('.app-body');
const taskList = document.querySelector('.task-list');

const newTaskBody = document.querySelector('.new-task');
const newTaskTitle = document.querySelector('#task-title');
const newTaskTime = document.querySelector('#task-time');

const saveBtn = document.querySelector('.save-btn');
const discardBtn = document.querySelector('.discard-btn');

let ID = 0;

const addNewTask = () => {
	appBody.classList.toggle('hide');
	newTaskBody.classList.toggle('active');

	clearInputs();
};

const clearInputs = () => {
	newTaskTitle.value = '';
	newTaskTime.value = '0';
};

const createNewTask = () => {
	const newTask = document.createElement('div');
    ID++

	newTask.innerHTML = `<li class="task" id="${ID}">
    <p class="">${newTaskTitle.value} </p>
    <div class="btns">
        <button class="btn check-btn"> <i class="fa-solid fa-check"></i></button>
        <button class="btn trash-btn"><i class="fa-solid fa-trash"></i></button>
        <button class="btn clock-btn"><i class="fa-solid fa-clock"></i></button>
    </div>
</li>`;
	taskList.appendChild(newTask);
    addNewTask()
};

addNewTaskBtn.addEventListener('click', addNewTask);
discardBtn.addEventListener('click', addNewTask);
saveBtn.addEventListener('click', createNewTask);
