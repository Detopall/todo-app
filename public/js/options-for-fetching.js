"use strict";

function getPostToDoOptions(){
	return {
		method: 'POST',
		body: JSON.stringify({
			"user": "Denis",
			"title": document.querySelector("input#title").value,
			"text": document.querySelector("input#text").value,
			"completed": false
		}),
		headers: {
			'Accept': '*/*',
    		'Content-Type': 'application/json'
		}
	}
}

function getPutFinishToDoOptions(){
	return {
		method: 'PUT',
		headers: {
			'Accept': '*/*'
		}
	}
}

function getPutChangeTodoOptions(){
	return {
		method: 'PUT',
		headers: {
			'Accept': '*/*',
			'Content-Type': 'application/json; charset=utf-8'
		},
		body: JSON.stringify({
			"title": document.querySelector("input#change-title").value,
			"text": document.querySelector("input#change-text").value,
		})
	}
}

function getDeleteTodoOptions(){
	return {
		method: 'DELETE',
		headers: {
			'Accept': '*/*'
		}
	}
}


