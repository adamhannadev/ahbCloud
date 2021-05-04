import { Template } from 'meteor/templating';

import './main.html';
import '../imports/ui/students.html';
import '../imports/ui/teachers.html';
import '../imports/ui/lessons.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';


Template.studentList.helpers({
  students: [
    { lastName: "Wang", firstName: "Liping" },
    { lastName: "Gould", firstName: "Linda" }
  ]
});

Template.teacherList.helpers({
  teachers: [
    { lastName: "Hanna", firstName: "Adam" },
    { lastName: "Kottova", firstName: "Tyna" }
  ]
});

let today = moment();

// Template.lessonList.helpers({
//   lessons: [
//     { lessonDate: today.format("dddd MMM D, YYYY"), lessonTime: today.format("h:ma"), student: "Linda", teacher: "Adam" },
//     { lessonDate: today.format("dddd MMM D, YYYY"), lessonTime:today.format("h:ma"), student: "Liping", teacher: "Adam" }
//   ]
// });