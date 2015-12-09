var palindromicMap = function(ro){ 
var tOrF = [];
var words = ro.split(' ').map(function(x) {
  if(x.toLowerCase() === x.toLowerCase().split('').reverse().join('')){
    tOrF.push("true");
  }
  else {
    tOrF.push("false");
  }
});
  console.log(tOrF);
  };
palindromicMap("stash lol and Pop on this lEvel");
