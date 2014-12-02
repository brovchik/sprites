document.getElementById("prev").addEventListener('click', function() {
  setIconDec(document.getElementById("icon").getAttribute("ind"));
});
document.getElementById("next").addEventListener('click', function() {
  setIconInc(document.getElementById("icon").getAttribute("ind"));
});

document.addEventListener(keypress, 
  function(){
  debugger;
    if(document.keyCode == "37") {
    setIconDec(document.getElementById("icon").getAttribute("ind"));
  }
  if(document.keyCode == "39") {
    setIconInc(document.getElementById("icon").getAttribute("ind"));
  }
  });

  


function setIconInc(i) {
  i++;
  i=i%16;
  if(i < 0) {
    //debugger;
    i = 16 + i;}
  var y = -56 * ((i/4) | 0 ); 
  var x = -56 * (i % 4);
  var elem = document.getElementById("icon");
  console.log(i + " " + x + " " + y);
  elem.style.backgroundPosition = x + "px " + y + "px";
  elem.setAttribute("ind", i);  
}

function setIconDec(i) {
  i--;
  i=i%16;
  if(i < 0) {
    //debugger;
    i = 16 + i;}
  var y = -56 * ((i/4) | 0 ); 
  var x = -56 * (i % 4);
  var elem = document.getElementById("icon");
  console.log(i + " " + x + " " + y);
  elem.style.backgroundPosition = x + "px " + y + "px";
  
  elem.setAttribute("ind", i);
}

