let inpNewTask = $('#inpNewTask');
let btnAdd = $('#btnAdd');
let btnReset = $('#btnReset');
let btnSort = $('#btnSort');
let btnClear = $('#btnClear');
let ulTasks = $('#ulTasks');

//buttons functionality
btnAdd.click(addItem);

function addItem() {
    // create new list item
    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    })
    listItem.click((event) => {
        // console.log('clicked', event.target);
        // $(event.target).toggleClass('disabled');
        listItem.toggleClass('done');
        //since listItem is in the closure so use directly.
        //still need to make the clicked listItem clickable again so that we can toggle it again.
        //"pointer-events:none, came due to bootstrap 'disabled' class" must be removed to change the class instead to 'done' or anthing else.
    })
    ulTasks.append(listItem);
    inpNewTask.val(""); //clear input field
}

//remove completed tasks:
function clearFinishedTasks() {
    //console.log('clicked', $('#ulTasks .done'));
    $('#ulTasks .done').remove();
}

//sort completed tasks to the bottom of the list
function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks);
}

//pressing "Enter" key add Task in the list:
inpNewTask.keypress((e) => {
    //find which is is being pressed. 'Enter'=13(Event.which value)
    //console.log(e.which);
    if (e.which == 13) addItem();
})

btnReset.click(() => inpNewTask.val(""))

btnClear.click(clearFinishedTasks);
btnSort.click(sortTasks);