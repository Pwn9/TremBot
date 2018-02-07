// Description:
//   Base64 encoding and decoding
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot base64 encode|decode <query> - Base64 encode or decode <string>
//
// Author:
//   jimeh
//   Ransom Quinn (coffee2js)

module.exports = function(robot) {
   
  robot.respond(/base64 encode( me)? (.*)/i, function(res) {
    return res.send(new Buffer(res.match[2]).toString('base64'));
  });
  
  return robot.respond(/base64 decode( me)? (.*)/i, function(res) {
    return res.send(new Buffer(res.match[2], 'base64').toString('utf8'));
  });
  
};