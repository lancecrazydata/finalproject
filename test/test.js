const assert=require("assert");

const TaskClass=require("../js/taskManager.js");
describe("Method",()=>{
it("should add a task",()=>{
const taskManager=new TaskClass;
const input={
    name: "project 1",
    description: "test 1",
    assignedTo: "Lance",
    dueDate: "01/01/2021",
    status:"TO DO"};

const expectedOutput={
    id:taskManager.currentId,
    name: "project 1",
description: "test 1",
assignedTo: "Lance",
dueDate: "01/01/2021",
status:"TO DO"};

taskManager.addTask(input.name,input.description,input.assignedTo,input.dueDate,input.status)

assert.deepStrictEqual(expectedOutput,taskManager.tasks[0])

})

it("should delete a task from the array",()=>{
const taskManager=new TaskClass

const taskToDelete={id:taskManager.currentId,
name: "project 1",
description: "test 1",
assignedTo: "Lance",
dueDate: "01/01/2021",
status:"TO DO"}

const taskToKeep={id:taskManager.currentId+1,
    name: "project 2",
    description: "test 2",
    assignedTo: "Hasan",
    dueDate: "02/01/2021",
    status:"TO DO"}


taskManager.addTask(
    taskToDelete.name,
    taskToDelete.description,
    taskToDelete.assignedTo,
    taskToDelete.dueDate,
    taskToDelete.status)


taskManager.addTask(
    taskToKeep.name,
    taskToKeep.description,
    taskToKeep.assignedTo,
    taskToKeep.dueDate,
    taskToKeep.status)
taskManager.deleteTask(taskToDelete.id)
assert.deepStrictEqual(taskManager.tasks,[taskToKeep])
});


it("when passed an existing taskId,the task should be returned", () => {
const taskManager=new TaskClass;
const task={
    id:taskManager.currentId,
    name: "project 1",
    description: "test 1",
    assignedTo: "Lance",
    dueDate: "01/01/2021",
    status:"TO DO"  
}

taskManager.addTask(
    task.name,
    task.description,
    task.assignedTo,
    task.dueDate,
    task.status
  );

  const result = taskManager.getTaskById(task.id);
  assert.deepStrictEqual(result, task);
})
})