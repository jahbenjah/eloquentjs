
/*
Write a program that creates a string that represents an 88 grid, using
newline characters to separate lines. At each position of the grid there
is either a space or a “#” character. The characters should form a chess
board.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/


var size = 64 ;
var count = 1;
var black="#";
var white=" ";
var line = "";


do{
  //line is even
  if(count % 2 == 0){
    for(var i=0 ;line.length <= size ; i++)
    line = line + white + black;
    console.log(line);
    line ='';
  }
  else{
   for(var i=0 ; line.length <= size; i++)
      line = line +  black + white ;
   console.log(line);
   line ='';
  } 
  count++;
}
while(count<= size)