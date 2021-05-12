import { Meteor } from 'meteor/meteor';
import { Lessons } from '/imports/api/lessons';

Meteor.publish('lessons', function publishLessons() {
  return Lessons.find({});
});