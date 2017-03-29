
/*Recursion
We’ve seen that % (the remainder operator) can be used to test whether
a number is even or odd by using % 2 to check whether it’s divisible by
two. Here’s another way to define whether a positive whole number is
even or odd:
• Zero is even.
59
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The
function should accept a number parameter and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think
of a way to fix this?
*/


function isEven(N){
	
	switch(N){
		case 0:
		 return true;
		break
		
		case 1:
		 return false;
		break
		
		default:
		
		return N < 0 ? isEven(-N) : isEven(N-2);
		break;
		
		}
	
}

for( var i = 0 ; i <= 100; i++ )
	console.log( i+ " is even? " + isEven(i));


	console.log( isEven(-1));
	
	
	