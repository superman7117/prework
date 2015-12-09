function arrayAnalyzer(){
  var abc = [];
  var lookinGlass = {};
  var odds = 0;
  var negatives = 0;
  var adding = 0;
  var ments = 0;
  for(var i = 0; i < arguments.length; i++){
    abc.push(arguments[i]);  
    adding = adding + arguments[i];
    if(arguments[i] < 0){
      negatives++;
    } 
  }
  for(var n = 0; n < abc.length; n++){
    ments++;
    if(abc[n] %2 !== 0){
      odds++;
    }}

  var sort = abc.sort(function(a, b){return a-b});
  var mid = function(){
    if (sort.length % 2 !== 0) {
      return ((sort.length + 1)/2);
    }else{
      return (sort.length/2);
    }
  };
  var median = abc[(mid()-1)];
  var unO = parseInt(adding)/parseInt(ments);
  var avg =Number(Math.round(unO+'e2')+'e-2');
  lookinGlass.odds = odds;
  lookinGlass.negatives = negatives;
  lookinGlass.avg = avg;
  lookinGlass.median = median;
  
  return lookinGlass;
  
}

console.log(arrayAnalyzer(7, -3, 0, 12, 44, -5, 3));
