/* Write a loop that makes seven calls to console.log to output the following triangle:
*	#
*	##
*	###
*	####
*	#####
*	######
*	#######
*/
var output = "";
var i = 1;

while(i <= 7){
	output += "#";
	console.log(output+"\n");
	i++;	
}