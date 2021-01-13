function statusColor(status) {
    switch(status) {
        case "DONE":return "badge-primary";
        break; 
        case "TO DO":return "badge-success";
        break;
        case "IN PROGRESS":return "badge-secondary";
        break;
        case "REVIEW":return "badge-info";
        break;
}}


const createTaskHtml = (id,taskName, description, assignedTo, dueDate, status) => `
   <div class="card m-2" data-task-id=${id} style="width: 18rem;display:inline-block; float:left">
<div class="card-body">
    <h5 class="card-title">${taskName}</h5>
    <p class="card-text">Description: ${description}</p>
    <p class="card-text">Assigned To: ${assignedTo}</p>
    <p class="card-text">Due Date: ${dueDate}</p>
    <span class="badge ${statusColor(status)}">${status}</span>
    <a href="#" class="btn btn-primary">Delete</a>
  
    <button class="btn btn-outline-success mt-2 done-button ${status === 'DONE'?'invisible':'visible'}">Mark As Done</button>
    
</div>
</div>`;
console.log(createTaskHtml);

// Create a TaskManager class

export class TaskManager {
    // Set up the tasks and currentId property in the contructor
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    } 


    // Create the addTask method
addTask(name, description, assignedTo, dueDate,status) {
        const task = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status
        };

//         // Push the task to the tasks property
        this.tasks.push(task);

    }
    getTaskById(taskId) {
        // Create a variable to store the found task
        let foundTask;

        // Loop over the tasks and find the task with the id passed as a parameter
        for (let i = 0; i < this.tasks.length; i++) {
            // Get the current task in the loop
            const task = this.tasks[i];

            // Check if its the right task by comparing the task's id to the id passed as a parameter
            if (task.id === taskId) {
                // Store the task in the foundTask variable
                foundTask = task;
            }
        }

        // Return the found task
        return foundTask;
    }
    render() {
        // Create an array to store the tasks' HTML
        const tasksHtmlList = [];

        // Loop over our tasks and create the html, storing it in the array
        for (let i = 0; i < this.tasks.length; i++) {
            // Get the current task in the loop
            const task = this.tasks[i];

            // Format the date
            const date = new Date(task.dueDate);
            const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

            // Create the task html
            const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);

            // Push it to the tasksHtmlList array
            tasksHtmlList.push(taskHtml);
        }

        // Create the tasksHtml by joining each item in the tasksHtmlList
        // with a new line in between each item.
        const tasksHtml = tasksHtmlList.join('\n');

        // Set the inner html of the tasksList on the page
        const tasksList = document.querySelector('#tasksList');
        tasksList.innerHTML = tasksHtml;
        console.log(tasksList.innerHTML)
    }    

// Create the save method
save() {
    // Create a JSON string of the tasks
    const tasksJson = JSON.stringify(this.tasks);

    // Store the JSON string in localStorage
    localStorage.setItem('tasks', tasksJson);

    // Convert the currentId to a string;
    const currentId = String(this.currentId);

    // Store the currentId in localStorage
    localStorage.setItem('currentId', currentId);
}

// Create the load method
load() {
    // Check if any tasks are saved in localStorage
    if (localStorage.getItem('tasks')) {
        // Get the JSON string of tasks in localStorage
        const tasksJson = localStorage.getItem('tasks');

        // Convert it to an array and store it in our TaskManager
        this.tasks = JSON.parse(tasksJson);
    }

 // Check if the currentId is saved in localStorage
            if (localStorage.getItem('currentId')) {
                // Get the currentId string in localStorage
                const currentId = localStorage.getItem('currentId');
    
                // Convert the currentId to a number and store it in our TaskManager
                this.currentId = Number(currentId);
            }
        }
    }