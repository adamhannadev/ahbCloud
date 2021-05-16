import { Template } from 'meteor/templating';
import { Lessons } from '../../api/lessons.js';
import './lessons.html';
import datepicker from 'js-datepicker';
import '../../../node_modules/js-datepicker/dist/datepicker.min.css';
import { Meteor } from 'meteor/meteor';

Template.lessonList.onCreated(function (){
  // this.state = new ReactiveDict();
  Meteor.subscribe('lessons');
});

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
    const lessonDate = moment(event.target.lessonDate.value).toDate();
    const lessonTime = event.target.lessonTime.value;
    console.log("Logging the date from the form: " + lessonDate);
    // Insert a task into the collection
    Lessons.insert({
      lessonDate: lessonDate,
      lessonTime: lessonTime,
      teacher: teacher,
      student: student,
      createdAt: new Date(), // current time
    });
    // Clear form
    event.target.student.value = '';
    event.target.teacher.value = '';
    event.target.lessonDate.value = '';
    event.target.lessonTime.value = '';
  },
  'click .delete' (e){
    console.log("Deleting: " + this._id);
    Lessons.remove(this._id);
  }
});

const today = moment().startOf('day');

Template.weekView.helpers({
lessons() {
  return Lessons.find({
     lessonDate: {
      $gte: today.toDate(),
      $lte: moment(today).endOf('day').toDate()
     }
  });
},
lcount(){
  return Lessons.find({}).count();
},
todaysDate(){
  return moment(new Date()).date();
},
weekStart(){
return moment().day(1);
}
});