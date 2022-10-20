let inpNewTask = $('#inpNewTask');
let btnAdd = $('#btnAdd');
let btnReset = $('#btnReset');
let btnSort = $('#btnSort');
let btnClear = $('#btnClear');
let ulTasks = $('#ulTasks');

//buttons functionality
btnAdd.click(() => {
    // create new list item
    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    })
    ulTasks.append(listItem);
    inpNewTask.val(""); //clear input field
})

btnReset.click(() => inpNewTask.val(""))


