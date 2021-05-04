import { Template } from 'meteor-templating';
import './students.html';
import { Students } from '../../api/students.js';

Template.studentsList.helpers({
    students() {
        return Students.find({});
    }
});

Template.studentForm.events({
    'click #add-student' (e) {
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
    }
});