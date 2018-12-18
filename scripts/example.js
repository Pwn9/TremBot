// Description:
//   Example scripts for you to examine and try out.
//
// Notes:
//   They are commented out by default, because most of them are pretty silly and
//   wouldn't be useful and amusing enough for day to day huboting.
//   Uncomment the ones you want to try and experiment with.
//
//   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = function(robot) {
  
  var annoyIntervalId, answer, enterReplies, leaveReplies, lulz;
  
  robot.hear(/badger/i, function(res) {
    return res.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS");
  });
  
  trumpReplies = ["Bigly!", "Big League!", "Covfefe", "You're Fired!", "For every new 1 we'll cut 2", 
  "Just build a wall", "I never said that.", "I'm the best on whatever it is you just said.", 
  "My I.Q. is one of the highest - and you all know it!", "I am the BEST builder, just look at what I've built",
  "I am least racist person there is", "I TOLD YOU SO! Only I can fix", "I am the only one who can fix this. Very sad.",
  "Global Warming was created by and for the Chinese", "I have been drawing very big and enthusiastic crowds",
  "Obama has been a total disaster", "That's fake news", "Massive combined inoculations to small children is the cause for big increase in autism....",
  "There is no collusion", "Lock her up!", "I'm worth billions of dollars", "Everything I've done virtually has been a tremendous success.",
  "We could use a big fat dose of global warming!", "I could stand in the middle of Fifth Avenue and shoot somebody and I wouldn't lose voters.",
  "How handsome am I, right?", "You mean Pocahontas?", "This is all totally rigged.", "Build the WALL!",
  "Mexico will pay for this.", "You weren't born here.", "If Ivanka weren't my daughter, perhaps I'd be dating her.", 
  "You're disgusting", "I thought being President would be easier", "You're fired!", "There is no collusion, biggest witch hunt in history.",
  "You know, I'm automatically attracted to beautiful - I just start kissing them. It's like a magnet. Just kiss. I don't even wait. And when you're a star, they let you do it. You can do anything... Grab them by the pussy. You can do anything.", "Free trade is terrible. Free trade can be wonderful if you have smart people. But we have stupid people.", "I think our country does plenty of killing also, Joe.", "This is the Trump theory on war. But I'm good at war. I've had a lot of wars of my own. I'm really good at war. I love war in a certain way. But only when we win.", "I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words.", "You could see there was blood coming out of her eyes. Blood coming out of her wherever.", "She was favored to win—and she got schlonged, she lost, I mean she lost.", "Must be a pretty picture, you dropping to your knees.", "I'd look her right in that fat, ugly face of hers, I'd say, Rosie, you're fired.", "I like kids. I mean, I won’t do anything to take care of them. I’ll supply funds, and she’ll take care of the kids.", "Yeah, she's really something, and what a beauty, that one. If I weren't happily married and, ya know, her father...", "The best taco bowls are made in Trump Tower Grill. I love Hispanics!", "It is better to live one day as a lion than 100 years as a sheep.", "We're gonna have businesses that used to be in New Hampshire, that are now in Mexico, come back to New Hampshire, and you can tell them to go f**k themselves.", "These people... I'd like to use really foul language. I won't do it. I was going to say they're really full of s**t, but I won't say that.", "Overseas we build a school, we build a road, they blow up the school, we build another school, we build another road, they blow them up, we build again. In the meantime we can't get a f--king school in Brooklyn.", "I will be phenomenal to the women. I mean, I want to help women.", "Man, we could use a big fat dose of global warming!", "They're bringing drugs. They're bringing crime. They're rapists. And some, I assume, are good people.", "When you see the other side chopping off heads, waterboarding doesn't sound very severe.", "If you look at Saddam Hussein, he killed terrorists. I'm not saying he was an angel, but this guy killed terrorists", "I never attacked him on his looks, and believe me, there's plenty of subject matter right there.", "I'm the most successful person ever to run. Ross Perot isn't successful like me. Romney - I have a Gucci store that's worth more than Romney.", "He's a war hero 'cause he was captured. I Like people that weren't captured, OK, I hate to tell you.", "She is unattractive both inside and out. I fully understand why her former husband left her for a man - he made a good decision.", "She is an extremely unattractive woman, but I refuse to say that because I always insist on being politically correct.", "I look very much forward to showing my financials, because they are huge", "Frankly, I wouldn't mind if there were an anti-Viagra, something with the opposite effect. I'm not bragging. I'm just lucky.", "Certain guys tell me they want women of substance, not beautiful models. It just means they can't get beautiful models.", "Show me someone with no ego and I'll show you a big loser.", "My fingers are long and beautiful, as, it has been well documented, are various other parts of my body.", "I was down there, and I watched our police and our firemen, down on 7-Eleven, down at the World Trade Center, right after it came down", "Why are we having all these people from shithole countries coming here?", "Breastfeeding is digusting.", "Why would Kim Jong-un insult me by calling me ‘old,’ when I would NEVER call him ‘short and fat?’", "Kim Jong-Un speaks and his people sit up at attention. I want my people to do the same.", "What you’re seeing and what you’re reading is not what’s happening.", "We like the -- we like the -- it's just a flowing. They do comma. They don't do -- they do a comma.", "What a stupid question."];
  robot.hear(/Donald Trump/i, function(res) {
    return res.send(res.random(trumpReplies));
  });  
  robot.hear(/President Trump/i, function(res) {
    return res.send(res.random(trumpReplies));
  });  
    
  robot.respond(/open the (.*) doors/i, function(res) {
    var doorType;
    doorType = res.match[1];
    if (doorType === "pod bay") {
      return res.reply("I'm afraid I can't let you do that.");
    } else {
      return res.reply("Opening "+doorType+" doors");
    }
  });
  
  robot.hear(/I like pie/i, function(res) {
    return res.emote("makes a freshly baked pie");
  });
  
  lulz = ['lol', 'rofl', 'lmao'];
  
  robot.respond(/lulz/i, function(res) {
    return res.send(res.random(lulz));
  });
  
  robot.topic(function(res) {
    return res.send("{res.message.text}? That's a Paddlin'");
  });
  
  enterReplies = ['Hi', 'Target Acquired', 'Firing', 'Hello friend.', 'Gotcha', 'I see you'];
  leaveReplies = ['Are you still there?', 'Target lost', 'Searching'];
  
  robot.enter(function(res) {
    return res.send(res.random(enterReplies));
  });
  
  robot.leave(function(res) {
    return res.send(res.random(leaveReplies));
  });
  
  answer = process.env.HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING;
  
  robot.respond(/what is the answer to the ultimate question of life/, function(res) {
    if (answer == null) {
      res.send("Missing HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING in environment: please set and try again");
      return;
    }
    return res.send("{answer}, but what is the question?");
  });
  
  robot.respond(/you are a little slow/, function(res) {
    return setTimeout(function() {
      return res.send("Who you calling 'slow'?");
    }, 60 * 1000);
  });
  
  annoyIntervalId = null;
  
  robot.respond(/annoy me/, function(res) {
    if (annoyIntervalId) {
      res.send("AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH");
      return;
    }
    res.send("Hey, want to hear the most annoying sound in the world?");
    return annoyIntervalId = setInterval(function() {
      return res.send("AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH");
    }, 1000);
  });
  
  robot.respond(/unannoy me/, function(res) {
    if (annoyIntervalId) {
      res.send("GUYS, GUYS, GUYS!");
      clearInterval(annoyIntervalId);
      return annoyIntervalId = null;
    } else {
      return res.send("Not annoying you right now, am I?");
    }
  });
  
  robot.router.post('/hubot/chatsecrets/:room', function(req, res) {
    var data, room, secret;
    room = req.params.room;
    data = JSON.parse(req.body.payload);
    secret = data.secret;
    robot.messageRoom(room, "I have a secret: {secret}");
    return res.send('OK');
  });
   
  robot.respond(/have a soda/i, function(res) {
  // Get number of sodas had (coerced to a number).
    var sodasHad;
    sodasHad = robot.brain.get('totalSodas') * 1 || 0;
    if (sodasHad > 4) {
      return res.reply("I'm too fizzy..");
    } else {
      res.reply('Sure!');
      return robot.brain.set('totalSodas', sodasHad + 1);
    }
  });
  
  return robot.respond(/sleep it off/i, function(res) {
    robot.brain.set('totalSodas', 0);
    return res.reply('zzzzz');
  });
  
};