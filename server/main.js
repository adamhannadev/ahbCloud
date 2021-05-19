import { Meteor } from 'meteor/meteor';

import {Lessons} from '/imports/api/lessons';
import '/imports/api/students';
import '/imports/api/teachers';
import '/imports/api/publications/lessonsPublications';

const insertLessons = lesson => Lessons.insert({
  lessonDate: lesson.lessonDate,
  lessonTime: lesson.lessonTime,
  student: lesson.student,
  teacher: lesson.teacher
});

Meteor.startup(() => {
if (Lessons.find({}).count() === 0){
  [{
    lessonDate: new Date(),
    lessonTime: "6:30pm",
    student: "Linda",
    teacher: "Adam"
  },
  {
    lessonDate: new Date(),
    lessonTime: "7:30pm",
    student: "Kami",
    teacher: "Adam"
  }].forEach(insertLessons);
}
});
