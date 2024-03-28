let form = document.querySelector("form");
let input = document.querySelector("input");
let todos = document.querySelector(".todos");
function getTodo(val) {
    let todo = document.createElement("div");
    let textel = document.createElement("span");
    textel.innerHTML = val;
    todo.appendChild(textel);
    let closeel = document.createElement("span");
    closeel.innerHTML = "&times;";
    closeel.classList.add("delete");
    closeel.addEventListener("click",function(e) {
        todos.removeChild(todo);
    });
    todo.appendChild(closeel);
    todo.classList.add("todo");
    return todo;
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let val = input.value;
    if(!val.trim())return;
    todos.appendChild(getTodo(val));
    input.value ="";
});