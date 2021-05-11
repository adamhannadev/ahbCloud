import { Template } from 'meteor/templating';
import './navbar.html';

Template.navbar.events({
    'click .btn' (e) {
        e.preventDefault();
        const template = e.target.innerHTML;
        const pages = document.querySelectorAll(".page");
        pages.forEach(page => page.classList.add("d-none"));
        document.querySelector("#"+template).classList.remove("d-none");
    }
});



