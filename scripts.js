const elList = document.querySelector('[data-js="ul"]');
const elInput = document.querySelector('[data-js="input"]');
const elBtn = document.querySelector('[data-js="btn1"]');

const tasks = JSON.parse(localStorage.getItem('listTasks')) || [];

function showTasks() {

    elList.innerHTML = '';

    for ( task of tasks ) {
        const elTask = document.createElement('li');
        const elText = document.createTextNode(task);

        const elLink = document.createElement('a');
        const linkText = document.createTextNode('X');
        
        const elPos = tasks.indexOf(task);
        elLink.setAttribute('onclick', `deleteTask(${elPos})`)

        elTask.appendChild(elText);
        elList.appendChild(elTask);
        elTask.appendChild(elLink);
        elLink.appendChild(linkText);
    }
}

showTasks();

function addTask() {
    const elText = elInput.value;

    tasks.push(elText);
    elInput.value = '';

    showTasks();
    saveList()
}

elBtn.setAttribute('onclick', 'addTask()');

function deleteTask(elPos) {

    tasks.splice(elPos, 1);
    showTasks();
    saveList()
}

function saveList() {

    localStorage.setItem('listTasks', JSON.stringify(tasks))
}