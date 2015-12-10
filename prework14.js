var wordSelector = function(ro){ 
var ary2 = [];
var words = ro.split(' ');
var thing = ro.split(' ').map(function(x){
var lookinGlass = {};
  var too = x.split('').map(function(y) {
        return y;
  }).forEach(function(y) { return lookinGlass[y] = (lookinGlass[y] || 0)+1;});
  return lookinGlass;
});
for(var i =0; i < thing.length; i++){
   var ary = [];
    for (var letter in thing[i]){
      ary.push(Math.max([thing[i][letter]]));
      ary.sort();
}
ary2.push(ary.pop());
  }
var final = [];
var arr = Math.max.apply(Math, ary2);
for(var n = 0; n < ary2.length; n++){
   if (ary2[n] === arr){ final.push(words[n]);}
 }
  return final;   
};

console.log(wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale"));