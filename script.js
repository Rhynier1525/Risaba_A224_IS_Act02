const txtTodoItem = document.getElementById("btnAddTask")
const btnAddTask = document.getElementById("txtTodoItem")

let todos = []

btnAddTask.addEventListner("click", ()=>{
    console.log(txt.TodoItem.value)
        todos.push(txtTodoItem.value)
        console.log(todos)
})

todos.push("Task 1")
todos.push("Task 2")
todos.push("Task 3")

console.log(todos)
console.log(todos.length)
console.log(todos[0])
console.log(todos[todos.lenght-1])
let index = 2
console.log(todos[index])

for(let i=0;i<todos.length;i++)
{
    console.log(todos[i])
}