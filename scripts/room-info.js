// Description:
//   Tells what room is this. Especially convenient with Skype adapter.
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot room info - gives some information about current room
//
// Authors:
//   spajus
//   Ransom Quinn (coffee2js)

module.exports = function(robot) {
  return robot.hear(/room info/i, function(msg) {
    return msg.send("This room is: " + msg.message.room);
  });
};