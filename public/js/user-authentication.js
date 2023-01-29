"use strict";

async function registerUser(e){
	await fetch(`${URI}/register`, getRegisterOptions());
	location.replace(`${URI}/home`);
}

