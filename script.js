function calculator(){
  var choice = document.getElementById("choice");
  var calc = choice.options[choice.selectedIndex].value;;
  var x = Number(document.getElementById("x").value);
  var y = Number(document.getElementById("y").value);
   var p = Number(30);
   var result;
  switch(calc){
    case"1" : result = x * y; 
      break;
    case"2" : result = x * p + 50; 
      break;
    case"3" : result = x * p + 30; 
      break;

  }


document.getElementById("result").innerHTML = result + "zł"; 
  
}
