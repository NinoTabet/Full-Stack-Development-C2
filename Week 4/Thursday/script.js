// DOM Elements
const counterDisplay = document.getElementById('counter');
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const resetListButton = document.getElementById('resetListButton');
const taskList = document.getElementById('taskList');


// Variables
let completedCount = 0;


// Function to update the counter
function updateCounter() {
 counterDisplay.textContent = `Tasks Completed: ${completedCount}`;
}


// Function to add a new task
function addTask() {
 const taskText = taskInput.value.trim();


 if (taskText === '') {
   alert('Please enter a task.');
   return;
 }


 // Create a new task item
 const taskItem = document.createElement('li');
 taskItem.textContent = taskText;


 // Add event listener for task completion
 taskItem.addEventListener('click', function () {
   if (!taskItem.classList.contains('completed')) {
     taskItem.classList.add('completed');
     completedCount++;
     updateCounter();
   }
 });


 // Add the task to the list
 taskList.appendChild(taskItem);
 taskInput.value = '';
}


// Function to reset the list
function resetList() {
 taskList.innerHTML = '';
 completedCount = 0;
 updateCounter();
}


// Add event listeners
addTaskButton.addEventListener('click', addTask);
resetListButton.addEventListener('click', resetList);


// Example of using a for loop to apply dynamic styling
resetListButton.addEventListener('mouseover', function () {
 for (let i = 0; i < resetListButton.children.length; i++) {
   resetListButton.children[i].style.color = 'red';
 }
});





