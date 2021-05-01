

import { Template } from 'meteor/templating';

import { Lessons } from '../api/lessons.js';

import './lessons.html';

Template.lessonList.helpers({

    lessons() {

        return Lessons.find({});

      },

});

Template.lessonList.events({
  'submit #new-lesson' (event) {
    event.preventDefault();
    // Get value from form element
    const teacher = event.target.teacher.value;
    const student = event.target.student.value;
    // Insert a task into the collection
    Lessons.insert({
      lessonDate: new Date(),
      lessonTime: new Date(),
      teacher: teacher,
      student: student,
      createdAt: new Date(), // current time
    });
    // Clear form
    event.target.student.value = '';
    event.target.teacher.value = '';

  }
});

