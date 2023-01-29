"use strict";

async function registerUser(e){
	await fetch(`${URI}/register`, getRegisterOptions());
	location.replace(`${URI}/home`);
}

async function loginUser(e){
	await fetch(`${URI}/login`, getLoginOptions());
	location.replace(`${URI}/home`);
}