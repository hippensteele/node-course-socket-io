var moment = require('moment');

var date = moment();
date.add(1, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm a'));

var createdAt = 12345;
date = moment(createdAt);
console.log(date.format('MMM Do, YYYY'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);