var one = 1;
var x = "While";
	function loopy(ro){
	  var lookinGlass = {};
	  var i = 0;
	  var largest = 0;
	  while (i < ro.length){
	    i++;
	    if(ro[i] > largest){
	      largest = ro[i];
	    }
	  }
	  return largest;
	}
	console.log(loopy([2, 7, 4, 8, 6, 4]));
var x = "Do While";
	function loopy(ro){
	  var lookinGlass = {};
	  var i = 0;
	  var largest = 0;
	  do {
	    if(ro[i] > largest){
	      largest = ro[i];
	    }
	    i++;
	  }
	  while (i < ro.length);{
	  }
	  return largest;
	}
	console.log(loopy([2, 7, 4, 8, 6, 4]));
var x = "For";
	function loopy(ro){
 	 var lookinGlass = {};
 	 var largest = 0;
 	 for (var i = 0; i < ro.length; i++){
 	   if(ro[i] > largest){
  	    largest = ro[i];
	    }
	  }
	  return largest;
	}
	console.log(loopy([2, 7, 4, 8, 6, 4]));
var x = "forEach";

var x = "easiest way";
	function loopy(ro){
	  var lookinGlass = {};
	  var order = ro.sort();
	  var largest = order.pop();
	  return largest;
	}
	console.log(loopy([2, 7, 4, 8, 6, 4]));

var two = 2;
var x = "for..in";
	var theObject = { "wheels": 3, "horsepower": 600, "decal": "flames", 	"awesome": true , "holdsBarred": [] }; 
	for (var toReturn in theObject) {
	  console.log(toReturn + " : " + theObject[toReturn]);
	}

var three = 3;
	var control = function(ro) {
	  return ro.map(function(x){
	    return parseInt(x)*parseInt(x);
	  });
	};
	console.log(control([1, 2, 5, 7, 11]));

var four =4;
	var control = function(ro) {
	  var go = ro.reduce(function(a, b) {
	  return parseInt(a) + parseInt(b);
	});
	  return go;
	};
	console.log(control([3, 5, 7, 9, 12]));

var five = 5;
var control = function(ro) {
  var go = ro.filter(function(x) {
    if(parseInt(x)%2 !== 0){
      return x;
    }
});
  return go;
};
console.log(control([1, 22, 35, 2, 4, 7, 9]));

var six =6;
var control = function(ro) {
  var go = ro.sort().reverse();
  return go;
};
console.log(control(['water', 'balloon', 'baseball', 'computer', 'notebook', 'frisbee']));