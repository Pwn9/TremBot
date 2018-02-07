// Description:
//   Returns a message when the robot receives an error.
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:

//
// Author:
//   Matt Sudol

module.exports = function(robot) {
	
	robot.error(function(err, res) {
		
		robot.logger.error("DOES NOT COMPUTE");
		
		if (res != null) {
			return res.reply("DOES NOT COMPUTE: " + err);
		}
		
	});
	
};