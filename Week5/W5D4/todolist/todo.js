// Get the form and task list elements
const form = document.querySelector('form');
const list = document.querySelector('.listTasks');

// Create an array to store the tasks
const tasks = [];

// Add an event listener to the form for submitting a new task
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the task input field and its value
  const taskInput = document.querySelector('#taskInput');
  const taskText = taskInput.value.trim();

  // Check that the input is not empty
  if (taskText === '') return;

  // Create a new task object
  const newTask = {
    id: tasks.length,
    text: taskText,
    done: false,
  };

  // Add the new task to the tasks array
  tasks.push(newTask);

  // Add the new task to the DOM
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  const checkboxInput = document.createElement('input');
  checkboxInput.type = 'checkbox';
  checkboxInput.checked = newTask.done;

  const label = document.createElement('label');
  label.textContent = newTask.text;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete');
  deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';

  taskDiv.appendChild(deleteButton);
  taskDiv.appendChild(checkboxInput);
  taskDiv.appendChild(label);
  list.appendChild(taskDiv);

  // Clear the task input field
  taskInput.value = '';
});
