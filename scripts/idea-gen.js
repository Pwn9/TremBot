// Description:
//   Randomly generates an idea upon request
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot generate idea - Randomly generates an idea upon request
//
// Authors:
//   spajus (used room-info.coffee as base)
//   Ransom Quinn (coffee2js and ideagen)


var characterCounter, ideaGen, type1;

module.exports = function(robot) {
  return robot.hear(/generate idea/i, function(msg) {
    return msg.send(" " + (ideaGen()));
  });
};

characterCounter = function(string, substr) {
  var num, pos;
  num = pos = 0;
  if (!substr.length) {
    return 1 / 0;
  }
  while (pos = 1 + string.indexOf(substr, pos)) {
    num++;
  }
  return num;
};

type1 = {
  "template": ["tag1**", "tag2", "tag3", "tag4**", "tag5*"],
  "tag1**": ["portable", "scalable", "comprehensive", "mathematical", "complicated", "thought-provoking", "innovative", "personal", "educational", "fun", "engaging", "re-imagined", "secure", "memorable", "fan-made", "old-fashioned", "simple", "intuitive", "easy to use", "instant", "social network", "add-on", "configurable", "cross-platform", "multi-user"],
  "tag2": ["name", "crypto-currency", "text", "web", "card", "password", "music", "recipe", "map", "software", "image", "news", "log", "quiz", "pdf", "budget", "data", "account", "bar-code", "weather", "bug", "document", "QR code", "file", "event", "video"],
  "tag3": ["generator", "scraper", "game", "breaker", "player", "search engine", "messenger client", "manager", "simulator", "encryption scheme", "calculator", "editor", "compression scheme", "tracker", "converter", "reader", "emulator", "analyzer", "version-control", "explorer", "deadman switch"],
  "tag4**": ["graphical user interface", "user input", "artificial intelligent", "scheduler", "application programming interface", "debugger", "test-cases", "command line interface", "notification"],
  "tag5*": ["children", "everyone", "mature", "teachers", "parents", "tenants and landlords", "government agencies", "software library", "schools", "businesses", "babies", "seniors", "travelers", "risk-takers", "home owners", "car owners", "males", "females"],
  "tag6*": ["agent-oriented", "aspect-oriented", "modular", "component-based", "object-oriented", "functional programming"],
  "tag7*": ["behavior-driven", "design-driven", "feature-driven", "test-driven", "user-centered", "value-driven", "configuration-driven", "bug-driven"]
};

ideaGen = function() {
  var _, generated, i, j, k, len, name, num, ref, ref1;
  generated = ["The"];
  ref = type1["template"];
  for (i = j = 0, len = ref.length; j < len; i = ++j) {
    name = ref[i];
    if (characterCounter(name, "*") === 1) {
      if (Math.random() < 0.5) {
        if (generated[generated.length - 1].slice(-1) === ",") {
          generated[generated.length - 1] = generated[generated.length - 1].slice(0, -1);
        }
        generated.push("for");
        generated.push(type1[name][Math.floor(Math.random() * type1[name].length)]);
      } else {
        if (generated[generated.length - 1].slice(-1) === ",") {
          generated[generated.length - 1] = generated[generated.length - 1].slice(0, -1);
        }
      }
    } else if (characterCounter(name, "*") === 2) {
      num = Math.floor(Math.random() * 4);
      if (i === 3 && num > 0) {
        generated.push("including");
      }
      for (_ = k = 0, ref1 = num; 0 <= ref1 ? k < ref1 : k > ref1; _ = 0 <= ref1 ? ++k : --k) {
        generated.push(type1[name][Math.floor(Math.random() * type1[name].length)] + ",");
      }
    } else {
      generated.push(type1[name][Math.floor(Math.random() * type1[name].length)]);
    }
  }
  return generated.join(' ');
};