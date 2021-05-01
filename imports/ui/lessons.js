

import { Template } from 'meteor/templating';

import { Lessons } from '../api/lessons.js';

import './lessons.html';

Template.lessonList.helpers({

    lessons() {

        return Lessons.find({});

      },

});

