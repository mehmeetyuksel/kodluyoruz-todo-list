const task = document.querySelector('#task')
const button = document.querySelector('#liveToastBtn')
const list = document.querySelector('#list')
const close_btn = document.querySelector('#close-btn')
var taskArray = []

function addItem () {

    if (task.value.trim() != "") {
        $("#basarili").toast("show")
        taskArray.push(task.value.trim());
        localStorage.setItem("elements", JSON.stringify(taskArray))
        showItems()
    }
    else {
        $("#hata").toast("show")
    }
    task.value = ""
}

function deleteItem(i) {
    taskArray.splice(i, 1)
    localStorage.setItem("elements", JSON.stringify(taskArray))
    showItems()
    $("#deleted").toast("show")
}

list.addEventListener('click', function (e) {

    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
});


function showItems() {

    list.innerHTML = ""
    taskArray = JSON.parse(localStorage.getItem("elements"))

    for (let i = 0; i < taskArray.length; i++) {
        let liDOM = document.createElement('li');
        liDOM.innerHTML = `${taskArray[i]} <span class="close" onclick="deleteItem(${i})">&#x2715</span>`
        list.append(liDOM);
    }
}

showItems()
button.addEventListener("click", addItem)