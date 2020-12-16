
// Create a TaskManager class
export class TaskManager {
    // Set up the tasks and currentId property in the contructor
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    } 

    
    // Create the addTask method
addTask(name, description, assignedTo, dueDate) {
        const task = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        };

//         // Push the task to the tasks property
        this.tasks.push(task);

    }
}


// module.exports=TaskManager;
// const x=new TaskManager();
// let y=x.addTask('mike','sdedewfw','Lance','2900');
// console.log(y);
// console.log(task)