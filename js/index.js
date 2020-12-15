// Select the New Task Form



const newTaskForm = document.querySelector('#newTaskForm');

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


    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;

    let errorString = ""
    if (!validFormFieldInput(name)) {
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
});

function validFormFieldInput(data) {
    return data !== null && data !== '';
}

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

