/*
Minimum
The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can do that ourselves now. Write a
function min that takes two arguments and returns their minimum.

*/


function minimun(x, y){
	return x <= y ? x : y;	
}

console.log(minimun(4,2));
console.log(minimun(-100,2));