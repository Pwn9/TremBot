// Description:
//   None
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot uptime - Outputs bot uptime
//
// Author:
//   whitman
//   Ransom Quinn (coffee2js)

var numPlural, uptimeMe,
  hasProp = {}.hasOwnProperty;

module.exports = function(robot) {
  var start;
  start = new Date().getTime();

  return robot.respond(/uptime/i, function(msg) {
    return uptimeMe(msg, start, function(uptime) {
      return msg.send(uptime);
    });
  });
};

numPlural = function(num) {
  if (num !== 1) {
    return 's';
  } else {
    return '';
  }
};

uptimeMe = function(msg, start, cb) {
  var elements, interval, intervals, last, now, response, uptime_seconds, value;
  now = new Date().getTime();
  uptime_seconds = Math.floor((now - start) / 1000);
  intervals = {};
  intervals.day = Math.floor(uptime_seconds / 86400);
  intervals.hour = Math.floor((uptime_seconds % 86400) / 3600);
  intervals.minute = Math.floor(((uptime_seconds % 86400) % 3600) / 60);
  intervals.second = ((uptime_seconds % 86400) % 3600) % 60;
  elements = [];
  for (interval in intervals) {
    if (!hasProp.call(intervals, interval)) continue;
    value = intervals[interval];
    if (value > 0) {
      elements.push(value + ' ' + interval + numPlural(value));
    }
  }
  if (elements.length > 1) {
    last = elements.pop();
    response = elements.join(', ');
    response += ' and ' + last;
  } else {
    response = elements.join(', ');
  }
  return cb('I\'ve been sentient for ' + response);
};