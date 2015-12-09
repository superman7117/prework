var superCounter = function(x) {
  var toCount = x.split("");
  var newCount = [];
  for(var i =0; i < toCount.length; i++){
    if(toCount[i] === toCount[i].toUpperCase() && toCount[i] !== " ") {
      newCount.push(toCount[i].toLowerCase());
      
    }
  else if(toCount[i] === toCount[i].toLowerCase() && toCount[i] !== " ") {
      newCount.push(toCount[i].toUpperCase());
      
    } else {
      newCount.push(" ");
    }
   
  }
  console.log(newCount.join(""));

};


superCounter("Life is 10% what happens to you, and 90% of how you REACT to it”);
