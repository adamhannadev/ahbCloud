import { Template } from 'meteor/templating';

import './main.html';
import './imports/ui/students.html';
import './imports/ui/teachers.html';

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