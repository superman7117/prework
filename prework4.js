var superCounter = function(x) {
  var spaceCount = x.split("");
  var wordCount = x.split(" ");
  var totals = 0;
  var newCount = {};
  var spaces = 0;
  var words = 0;
  for(var i =0; i < spaceCount.length; i++){
      totals++;
    if(spaceCount[i] === " ") {
      spaces++;    
    }
  }
  for(var n =0; n < wordCount.length; n++){ 
      words++;    
  }
  var chars = parseInt(totals)-parseInt(spaces);
  var avgLength = parseInt(chars)/parseInt(words);
  newCount.words = words;
  newCount.chars = chars;
  newCount.avgLength = avgLength;
  newCount.spaces = spaces;
  console.log(newCount);
};


superCounter("Count me in"); 