const addNewTaskBtn = document.querySelector('.add-new-task');
const deleteAllTasksBtn = document.querySelector('.delete-all-tasks');

const taskLeftTd = document.querySelector('.task-left-td');

const error = document.querySelector('.error');

const appBody = document.querySelector('.app-body');
const taskList = document.querySelector('.task-list');

const newTaskBody = document.querySelector('.new-task');
const newTaskTitle = document.querySelector('#task-title');
const newTaskTime = document.querySelector('#task-time');

const saveBtn = document.querySelector('.save-btn');
const discardBtn = document.querySelector('.discard-btn');

const checkBtn = document.querySelector('.check-btn');
const trashBtn = document.querySelectorAll('.trash-btn');
const clockBtn = document.querySelector('.clock-btn');

let ID = 0;

const addNewTask = () => {
	appBody.classList.toggle('hide');
	newTaskBody.classList.toggle('active');

	clearInputs();
};

const clearInputs = () => {
	newTaskTitle.value = '';
	newTaskTime.value = '0';
	error.style.display = 'none';
};

const createNewTask = () => {
	if (newTaskTitle.value != '') {
		const newTask = document.createElement('li');

		ID++;
		newTask.setAttribute('ID', ID);
		newTask.setAttribute('class', 'task');
		newTask.innerHTML = `
    <p class="">${newTaskTitle.value} </p>
    <div class="btns">
        <button class="btn check-btn"> <i class="fa-solid fa-check"></i></button>
        <button class="btn trash-btn"><i class="fa-solid fa-trash"></i></button>
        <button class="btn clock-btn"><i class="fa-solid fa-clock"></i></button>
    </div>
`;
		taskList.appendChild(newTask);
		addNewTask();
		taskLeftTd.textContent = ID;
	} else {
		error.style.display = 'inline';
	}
};

const deleteAllTasks = () => {
	taskList.innerHTML = '';
	taskLeftTd.textContent = '0';
	ID = 0;
};

const deleteSingleTask = e => {
	if (e.target.closest('button').classList.contains('trash-btn')) {
		e.target.closest('li').remove();
		if (e.target.closest('li').classList.contains('done')) {
		} else {
			ID--;
			taskLeftTd.textContent = ID;
		}
	} else if (e.target.closest('button').classList.contains('check-btn')) {
		if (e.target.closest('li').classList.contains('done')) {
			e.target.closest('li').classList.remove('done');
			e.target.closest('i').style.color = 'greenyellow';
			ID++;
			taskLeftTd.textContent = ID;
		} else {
			e.target.closest('li').classList.add('done');
			ID--;
			taskLeftTd.textContent = ID;
			e.target.closest('i').style.color = 'gray';
		}
	}else if(e.target.closest('button').classList.contains('clock-btn')){
		console.log('tak');
	}
};


addNewTaskBtn.addEventListener('click', addNewTask);
discardBtn.addEventListener('click', addNewTask);
saveBtn.addEventListener('click', createNewTask);
deleteAllTasksBtn.addEventListener('click', deleteAllTasks);
checkBtn.addEventListener('click', () => {
	console.log(checkBtn);
});

document.addEventListener('click', deleteSingleTask);
