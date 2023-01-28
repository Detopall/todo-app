"use strict";

const URI = "http://localhost:3000";

document.addEventListener('click', (e) => {
    if (e.target.matches('button#create')) {
        createTodo(e);
    } else if (e.target.matches(".finish-button")){
		finishTodo(e);
	} else if (e.target.matches(".change-contents")) {
		showChangingOfContentFields(e);
	} else if (e.target.matches("#change-contents")){
		changeContents(e);
	} else if (e.target.matches("#cancel")){
		removeChangeField(e);
	}
});


async function createTodo(e){
	const fetched = await fetch(`${URI}/todo`, getPostToDoOptions());
	await fetched.json();
	location.reload();
}


async function finishTodo(e){
	const id = e.target.getAttribute("id");
	await fetch(`${URI}/todo/${id}`, getPutFinishToDoOptions());
	location.reload();
}


function showChangingOfContentFields(e){
	if (localStorage.getItem("changing-todo") === true) return;
	// if exists and if === true are different
	localStorage.setItem("changing-todo", true);

	localStorage.setItem("todo-id-change", e.target.getAttribute("data-todo-id"));
	injectUpdateFieldToHTML();

}

function injectUpdateFieldToHTML(){
	const unfinished = document.querySelector("#unfinished");
	const html = `
	<div id="change-todo">
		<h3> Change your ToDo </h3>
		<form>
			<label for="change-title">Title:</label>
			<input id="change-title" type="text" required>
			
			<label for="change-text">Text:</label>
			<input id="change-text" type="text" required>

			<button id="change-contents" data-todo-id="${localStorage.getItem("todo-id-change")}" type="button">Change</button>
			<button id="cancel" type="button"> Cancel </button>
		</form>
	</div>
	`;
	unfinished.insertAdjacentHTML("afterend", html);
}

function removeChangeField(e){
	localStorage.setItem("changing-todo", false);
	document.querySelector("#change-todo").remove();
}

async function changeContents(e){
	const id = localStorage.getItem("todo-id-change");
	await fetch(`${URI}/todo/${id}/change`, getPutChangeTodoOptions());
	location.reload();
}