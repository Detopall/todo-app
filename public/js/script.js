"use strict";
const PATH_IDs = ["#home", "#todo"];
const URI = "http://localhost:3000";

document.addEventListener('click', (e) => {
    if (e.target.matches('button#create')) {
        createTodo(e);
    } else if (e.target.matches(".finish-button")){
		finishTodo(e);
	}
});


findPage();

function findPage(){
	const allPaths = document.querySelectorAll("nav ul li a");
	allPaths.forEach(el => {
		if (el.getAttribute("href") === window.location.pathname){
			setCurrentPageClass(el);
		};
	});
}

function setCurrentPageClass(activeElement){
	PATH_IDs.forEach(element => {
		document.querySelector(element).classList.remove("active");
	});
	activeElement.classList.add("active");
}

async function createTodo(e){
	const fetched = await fetch(`${URI}/todo`, getPostToDoOptions());
	await fetched.json();
	location.reload();
}


function getPostToDoOptions(){
	return {
		method: 'POST',
		body: JSON.stringify({
			"user": "Denis",
			"title": document.querySelector("#title").value,
			"text": document.querySelector("#text").value,
			"completed": false
		}),
		headers: {
			'Accept': '*/*',
    		'Content-Type': 'application/json'
		}
	}
}


async function finishTodo(e){
	const id = e.target.getAttribute("id");
	await fetch(`${URI}/todo/${id}`, getPutFinishToDoOptions());
	location.reload();
}


function getPutFinishToDoOptions(){
	return {
		method: 'PUT',
		headers: {
			'Accept': '*/*'
		}
	}
}
