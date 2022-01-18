const taskValue = document.getElementsByClassName('task_value')[0];
const taskSubmit = document.getElementsByClassName('task_submit')[0];
const taskList = document.getElementsByClassName('task_list')[0];

const addTasks = (task) => {
　
　　const listItem = document.createElement('li');
　　const showItem = taskList.appendChild(listItem);
　　showItem.innerHTML = task;


　　const deleteButton = document.createElement('button');
　　deleteButton.innerHTML = 'Delete';
　　listItem.appendChild(deleteButton);
　　deleteButton.addEventListener('click', evt => {
　　　　evt.preventDefault();
　　　　deleteTasks(deleteButton);
　　});
};


const deleteTasks = (deleteButton) => {
　　const chosenTask = deleteButton.closest('li');
　　taskList.removeChild(chosenTask);
};

taskSubmit.addEventListener('click', evt => {
　　evt.preventDefault();
　　const task = taskValue.value;
　　addTasks(task);
　　taskValue.value = '';
toggle = document.querySelectorAll(".toggle")[0];
nav = document.querySelectorAll("nav")[0];
toggle_open_text = 'Menu';
toggle_close_text = 'Close';


toggle.addEventListener('click', function() {
  nav.classList.toggle('open');
  
  if (nav.classList.contains('open')) {
    toggle.innerHTML = toggle_close_text;
  } else {
    toggle.innerHTML = toggle_open_text;
  }
}, false);

setTimeout(function(){
  nav.classList.toggle('open'); 
}, 800);
});
