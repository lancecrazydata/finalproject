const createTaskHtml = (taskName, description, assignedTo, dueDate, status) => `
   <div class="card m-2" style="width: 18rem;display:inline-block; float:left">
<div class="card-body">
    <h5 class="card-title">${taskName}</h5>
    <p class="card-text">Description: ${description}</p>
    <p class="card-text">Assigned To: ${assignedTo}</p>
    <p class="card-text">Due Date: ${dueDate}</p>
    <span class="badge badge-primary">${status}</span>
    <a href="#" class="btn btn-primary">Delete</a>
</div>
</div>`;


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
            const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);

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
}


// module.exports=TaskManager;
