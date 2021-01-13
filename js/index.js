// Select the New Task Form
import {TaskManager} from "./taskManager.js"
// const TaskManager=require("./taskManager.js");
const taskManager=new TaskManager(0);


// Load the tasks from localStorage
taskManager.load();

// Render the tasks to the page
taskManager.render();

const newTaskForm = document.querySelector('#newTaskForm');

$(document).ready(function () {

    $("#sidebar").mCustomScrollbar({
         theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        // open or close navbar
        $('#sidebar').toggleClass('active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

// Add an 'onsubmit' event listener
newTaskForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const newTaskDescription = document.querySelector('#newTaskDescription');
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const newTaskDueDate = document.querySelector('#newTaskDueDate');
    const newStatus=document.querySelector('#taskStatus');
    const errorMessage = document.querySelector('#alertMessage');


    const taskName = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const status=newStatus.value;
    const dueDate = newTaskDueDate.value;


    let errorString = ""
    if (!validFormFieldInput(taskName)) {
        errorString += "Invalid name input" + "<br>";

    }

    if (!validFormFieldInput(description)) {
        errorString += "Invalid description input" + "<br>";


    }
    if (!validFormFieldInput(assignedTo)) {
        errorString += "Invalid assign input" + "<br>";
    }

    if (!validFormFieldInput(dueDate)) {
        errorString += "Invalid due date input";

    }

    if (errorString === "") {
        errorMessage.innerHTML = "";
        errorMessage.style.display = "none";

    } else {
        errorMessage.innerHTML = errorString;
        errorMessage.style.display = "block";
    }


function validFormFieldInput(data) {
    return data !== null && data !== '';
}



    // Add the task to the task manager
    taskManager.addTask(taskName, description, assignedTo, dueDate,status);
    taskManager.save();
    taskManager.render();
    // Clear the form
    newTaskNameInput.value = '';
    newTaskDescription.value = '';
    newTaskAssignedTo.value = '';
    newTaskDueDate.value = '';


});





// Select the Tasks List
const tasksList=document.querySelector('#tasksList');
// Add an 'onclick' event listener to the Tasks List
tasksList.addEventListener('click', (event) => {
    // Check if a "Mark As Done" button was clicked
    if (event.target.classList.contains('done-button')) {
        // Get the parent Task
        const parentTask = event.target.parentElement.parentElement;

        // Get the taskId of the parent Task.
        const taskId = Number(parentTask.dataset.taskId);

        // Get the task from the TaskManager using the taskId
        const task = taskManager.getTaskById(taskId);

        // Update the task status to 'DONE'
        task.status = 'DONE';
        //save to local storage
        taskManager.save();
        // Render the tasks
        taskManager.render();
    }
    // Check if a "Delete" button was clicked
    if (event.target.classList.contains('delete-button')) {
        // Get the parent Task
        const parentTask = event.target.parentElement.parentElement;

        // Get the taskId of the parent Task.
        const taskId = Number(parentTask.dataset.taskId);

        // Delete the task
        taskManager.deleteTask(taskId);

        // Save the tasks to localStorage
        taskManager.save();

        // Render the tasks
        taskManager.render();
    }
});
