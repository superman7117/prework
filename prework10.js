var wordsReverser = function(ro) {
 
    return ro.split(" ").map(function(comma) {
        return comma.split(",").map(function(period) {
        return period.split(".").map(function(wordturn) {
          return wordturn.split("").reverse().join('');
        }).join(".");
    }).join(","); 
    }).join(" "); 

  
};
console.log(wordsReverser("This is fun, hopefully.")); 