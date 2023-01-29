"use strict";

const PATH_IDs = ["#home", "#todo", "#auth"];
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
