function verses() {
  let verse="";
  for (i=99; i>=1; i--;){
    if(i>2){
      verse=verse + (i + "bottles of beer on the wall<br>");
      verse=verse + (i + "bottles of beer<br>");
      verse=verse + ("You take one down, pass it around<br>");
      verse + ((i-1) + "bottles of beer on the wall<br>");


    }
    else if(i===2){
      verse=verse + (i + " bottles of beer on the wall</br>");
      verse=verse + (i + " bottles of beer</br>");
      verse=verse + ("You take one down, pass it around</br>");
      verse = verse + ((i-1) + " bottles of beer on the wall</br>");


    }
    else if(i===1){
      verse=verse + (i + " bottle of beer on the wall</br>");
      verse=verse + (i + " bottle of beer</br>");
      verse=verse + ("You take one down, pass it around</br>");
      verse= verse + (" No more bottles of beer on the wall</br>");


    }
    verse = verse +("<hr><br>");
  }
  verse = verse + (" no more bottles of beer on the wall, no more bottles of beer")
  document.getElementById("getSong").innerHTML = verse;
}
  //const bottlesOfBeer = 99;
  //while(bottlesOfBeer >= 2) {
  //console.log( bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer");
  //bottlesOfBeer--
  //if(bottlesOfBeer === 1) {
  //console.log( "You take one down and pass it around, " + bottlesOfBeer + " bottle of beer on the wall");
  //} else {
  //console.log( "You take one down and pass it around, " + bottlesOfBeer + " bottles of beer on the wall");
  //}
  //}
  //if (bottlesOfBeer === 1) {
  //console.log( bottlesOfBeer + " bottle of beer on the wall, " + bottlesOfBeer + " bottle of beer");
  //console.log( "You take it down and pass it around, No more bottles of beer on the wall");
  //bottlesOfBeer--
  //}
  //if(bottlesOfBeer < 1) {
  //console.log("No more bottles of beer on the wall, no more bottles of beer");
  //console.log( "Go to the store and buy some more, 99 bottles of beer on the wall");
  //}
 
  
  
