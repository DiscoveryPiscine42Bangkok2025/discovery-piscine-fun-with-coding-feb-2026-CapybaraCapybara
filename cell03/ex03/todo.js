const ftList = document.getElementById("ft_list");
const newBtn = document.getElementById("new");

function setCookie(todos) {
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}

function getCookie() {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
        if (c.startsWith("todos=")) {
            return JSON.parse(decodeURIComponent(c.substring(6)));
        }
    }
    return [];
}

function saveTodos() {
    const todos = [];
    const items = ftList.querySelectorAll(".todo");
    items.forEach(item => todos.push(item.textContent));
    setCookie(todos);
}

function createTodo(text) {
    const div = document.createElement("div");
    div.className = "todo";
    div.textContent = text;

    div.onclick = function () {
        if (confirm("Do you want to remove this TO DO?")) {
            div.remove();
            saveTodos();
        }
    };

    ftList.prepend(div);
}

newBtn.onclick = function () {
    const text = prompt("Enter a new TO DO:");
    if (text && text.trim() !== "") {
        createTodo(text.trim());
        saveTodos();
    }
};

window.onload = function () {
    const todos = getCookie();
    todos.reverse().forEach(todo => createTodo(todo));
};
