import { Meteor } from 'meteor/meteor';

import '/imports/api/lessons';
import '/imports/api/students';
import '/imports/api/teachers';
import '/imports/api/publications/lessonsPublications';

Meteor.startup(() => {
  // code to run on server at startup
});
