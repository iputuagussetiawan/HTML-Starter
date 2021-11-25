import "../scss/style.scss";
import gsap from "gsap/all";
import LocomotiveScroll from "locomotive-scroll";
import { Tooltip, Toast, Popover } from "bootstrap";

const body = document.querySelector("body");
const mainNavigation = document.querySelector(".main-navigation");
const overlay = mainNavigation.querySelector(".overlay");
const toggler = mainNavigation.querySelector(".navbar-toggler");
const burgerMenu = document.querySelector(".burger");


const openSideNav = () => mainNavigation.classList.add("active");
const closeSideNav = () => mainNavigation.classList.remove("active");
burgerMenu.onclick = function () {
	openMenu();
};
var openMenu = () => {
	if (burgerMenu.classList.contains("activated")) {
		var delayInMilliseconds = 100; //5 second
		setTimeout(function () {
			burgerMenu.classList.remove("activated");
			body.classList.remove("no-scroll");
            
		}, delayInMilliseconds);
	} else {
		burgerMenu.classList.add("activated");
		body.classList.add("no-scroll");
        
	}
};

document.addEventListener("swiped-right", openSideNav);
document.addEventListener("swiped-left", closeSideNav);
toggler.addEventListener("click", openSideNav);
overlay.addEventListener("click", closeSideNav);