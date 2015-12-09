var nextSix = [20,21,22,30,31,32];

/*var lj = [];
var ascii = [73, 32, 115, 112, 101, 97, 107, 32, 105, 110, 32, 110, 117, 109, 98, 101, 114, 115];
for (var i = 0; i < ascii.length; i++){
  lj.push(String.fromCharCode(ascii[i]));
}
var newSpeak = lj.join('');
console.log(newSpeak);*/

var ascii = [73, 32, 115, 112, 101, 97, 107, 32, 105, 110, 32, 110, 117, 109, 98, 101, 114, 115];
console.log(ascii.map(String.fromCharCode).join('')); 