var size = 8 ;
var count = 1;
var blackSquare="#";
var whiteSquare="#";
var line = "";
do{
  if(count % 2 == 0){
    line = line + whiteSquare + blackSquare;
    console.log(line);
    line ='';
  }
  else{
   line = line +  blackSquare + whiteSquare ;
   console.log(line);
   line ='';
  } 
  count++;
}
while(count<= 8)