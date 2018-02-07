// Description:
//   Calculate the nth fibonacci number. //webscale
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   fibonacci me <integer> - Calculate Nth Fibonacci number
//
// Author:
//   ckdake
//   Ransom Quinn (coffee2js)
   
var divmodBasic, fibFast, fib_bits;

fib_bits = function(n) {
  // Represent an integer as an array of binary digits.
  var bit, bits, ref;
  bits = [];
  while (n > 0) {
    ref = divmodBasic(n, 2), n = ref[0], bit = ref[1];
    bits.push(bit);
  }
  return bits.reverse();
};

fibFast = function(n) {
  var a, b, bit, c, i, len, ref, ref1, ref2, ref3;
  ref = [1, 0, 1], a = ref[0], b = ref[1], c = ref[2];
  ref1 = fib_bits(n);
  for (i = 0, len = ref1.length; i < len; i++) {
    bit = ref1[i];
    if (bit) {
      ref2 = [(a + c) * b, b * b + c * c], a = ref2[0], b = ref2[1];
    } else {
      ref3 = [a * a + b * b, (a + c) * b], a = ref3[0], b = ref3[1];
    }
    c = a + b;
  }
  return b;
};

divmodBasic = function(x, y) {
  var q, r;
  return [(q = Math.floor(x / y)), (r = x < y ? x : x % y)];
};

module.exports = function(robot) {
    
  return robot.hear(/fibonacci me (\d+)/i, function(msg) {
      
    return msg.send(fibFast(msg.match[1]).toString());
    
  });
  
};