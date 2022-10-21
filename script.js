let inpNewTask = $('#inpNewTask');
let btnAdd = $('#btnAdd');
let btnReset = $('#btnReset');
let btnSort = $('#btnSort');
let btnClear = $('#btnClear');
let ulTasks = $('#ulTasks');

//buttons functionality
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
        //"pointer-events:none", came due to bootstrap 'disabled'
        //class must be removed to change the class instead to 'done' or anthing else.
        toggleClearSortBtn();//use when listItem's done class is toggled.
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

//toggle buttons disabled when we needn't to use it.
function toggleInputBtn() {
    btnReset.prop('disabled', inpNewTask.val() == '');
    btnAdd.prop('disabled', inpNewTask.val() == '');
}

function toggleClearSortBtn() {
    btnSort.prop('disabled', $('#ulTasks .done').length == 0);
    btnClear.prop('disabled', $('#ulTasks .done').length == 0);
}

//pressing "Enter" key add Task in the list:
inpNewTask.keypress((e) => {
    //find which is is being pressed. 'Enter'=13(Event.which value)
    //console.log(e.which);
    if (e.which == 13) addItem();
    toggleInputBtn();
})

inpNewTask.on('input', () => {
    //console.log(inpNewTask.val());//when its on enable reset btn else disable.
    toggleInputBtn();
})

btnAdd.click(() => {
    addItem();
    toggleInputBtn();
});
btnReset.click(() => {
    inpNewTask.val("");
    toggleInputBtn();
});
btnSort.click(sortTasks);
btnClear.click(() => {
    let isClear = confirm(`This will delete your completed Tasks!
    Do you want to delete it?`);
    if (isClear) clearFinishedTasks();
});
