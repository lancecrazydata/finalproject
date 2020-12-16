// Select the New Task Form
import {TaskManager} from "./taskManager.js"
// const TaskManager=require("./taskManager.js");
const taskManager=new TaskManager(0);

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
    const errorMessage = document.querySelector('#alertMessage');


    const taskName = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;
console.log(taskName);

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
    taskManager.addTask(taskName, description, assignedTo, dueDate);
console.log(taskManager.tasks);

    // Clear the form
    newTaskNameInput.value = '';
    newTaskDescription.value = '';
    newTaskAssignedTo.value = '';
    newTaskDueDate.value = '';


});
// $(document).ready(function () {
//     $("#sidebar").mCustomScrollbar({
//         theme: "minimal"
//     });

//     $('#sidebarCollapse').on('click', function () {
//         $('#sidebar, #content').toggleClass('active');
//         $('.collapse.in').toggleClass('in');
//         $('a[aria-expanded=true]').attr('aria-expanded', 'false');
//     });
// });

