import { Template } from 'meteor/templating';

import './main.html';
import './imports/ui/students.html';
import './imports/ui/teachers.html';
import './imports/ui/lessons.html';

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

let today = new Date();

Template.lessonList.helpers({
  lessons: [
    { lessonDate: today, lessonTime: today.toTimeString(), student: "Linda", teacher: "Adam" },
    { lessonDate: today, lessonTime: today.toTimeString(), student: "Liping", teacher: "Adam" }
  ]
});