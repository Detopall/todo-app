"use strict";

async function registerUser(e){
	await fetch(`${URI}/register`, getRegisterOptions());
	localStorage.setItem("user", document.querySelector("#username").value);
	location.replace(`${URI}/home`);
}

async function loginUser(e){
	await fetch(`${URI}/login`, getLoginOptions());
	localStorage.setItem("user", document.querySelector("#username").value);
	location.replace(`${URI}/home`);
}