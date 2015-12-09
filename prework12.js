function age(year, month, day){
  var control = 725522;
  var lookinGlass = {};
  var totalDays = ((year*12*30)+((month+1)*30)+day);
  var dif = parseInt(totalDays)-parseInt(control);
  var tyears =(parseInt(dif)/30/12);
  var years = Number(Math.floor(tyears));
  var tmonths =(parseInt(dif)/30)-(parseInt(years)*12);
  var months = Number(Math.floor(tmonths));
  var days = parseInt(dif)-(parseInt(years)*12*30)-(parseInt(months)*30);
  if (years > 0){
  lookinGlass.years = years + " years";
  }
  if (months > 0){
 lookinGlass.months = months + " months";
  }
  if (days > 0){
 lookinGlass.days = days + " days";
  }
  return lookinGlass;
}

console.log(age(2017, 11, 17));