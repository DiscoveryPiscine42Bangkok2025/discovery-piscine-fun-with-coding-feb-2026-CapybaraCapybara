$(document).ready(function () {

    const $ftList = $("#ft_list");
    const $newBtn = $("#new");

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
        $(".todo").each(function () {
            todos.push($(this).text());
        });
        setCookie(todos);
    }

    function createTodo(text) {
        const $div = $("<div></div>")
            .addClass("todo")
            .text(text)
            .click(function () {
                if (confirm("Do you want to remove this TO DO?")) {
                    $(this).remove();
                    saveTodos();
                }
            });

        $ftList.prepend($div);
    }

    $newBtn.click(function () {
        const text = prompt("Enter a new TO DO:");
        if (text && text.trim() !== "") {
            createTodo(text.trim());
            saveTodos();
        }
    });

    const todos = getCookie();
    todos.reverse().forEach(todo => createTodo(todo));

});
