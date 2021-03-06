import { Template } from 'meteor/templating';
import './students.html';
import { Students } from '../../api/students.js';

Template.studentList.helpers({
    students() {
        return Students.find({});
    }
});
Template.studentList.events({
    'click .delete' (e) {
        Students.remove(this._id);
    }
})

Template.studentForm.events({
    'submit #new-student' (e) {
        e.preventDefault();

        const lastName = e.target.lastName.value;
        const firstName = e.target.firstName.value;
        const teacher = e.target.teacher.value;
        const lessonsTaken = e.target.lessonsTaken.value;

        Students.insert({
            lastName: lastName,
            firstName: firstName,
            teacher: teacher,
            lessonsTaken: lessonsTaken,
            createdAt: new Date()
        });

        console.log(e.target);
        e.target.lastName.value = "";
        e.target.firstName.value = "";
        e.target.teacher.value = "";
        e.target.lessonsTaken.value = "";
    }
});