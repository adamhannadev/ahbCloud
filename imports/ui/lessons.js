import { Template } from 'meteor/templating';
import { Lessons } from '../api/lessons.js';
import './lessons.html';
import datepicker from 'js-datepicker';
import '../../node_modules/js-datepicker/dist/datepicker.min.css';
Template.lessonForm.onRendered(function(){
  const picker = datepicker('.picker');
});

Template.lessonList.helpers({
    lessons() {
        return Lessons.find({});
      }
});

Template.lesson.helpers({
  formatDate(input) {
    const formatted = moment(input).format("dddd, MMMM Do YYYY");
    return formatted;
  },
  formatTime(input) {
    const formatted = moment(input).format("hA");
    return formatted;
  }
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
  },
  'click .delete' (e){
    console.log("Deleting: " + this._id);
    Lessons.remove(this._id);
  }
});

