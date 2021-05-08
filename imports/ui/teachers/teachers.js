import { Template } from 'meteor/templating';
import './teachers.html';
import { Teachers } from '../../api/teachers.js';

Template.teacherList.helpers({
    teachers() {
        return Teachers.find({});
    }
});
Template.teacherList.events({
    'click .delete' (e) {
        Teachers.remove(this._id);
    }
})

Template.teacherForm.events({
    'submit #new-teacher' (e) {
        e.preventDefault();

        const lastName = e.target.lastName.value;
        const firstName = e.target.firstName.value;

        Teachers.insert({
            lastName: lastName,
            firstName: firstName,
            createdAt: new Date()
        });

        console.log(e.target);
        e.target.lastName.value = "";
        e.target.firstName.value = "";

    }
});