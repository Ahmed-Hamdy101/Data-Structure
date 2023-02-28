// alert  taht is test
alert("TEST");

//  funcrion the return the answer
function big_o(xarr){
//  intial variable
 var answer = [];

//  iteration for looping throught elements in arrray 
 for (let inx = 0; inx < xarr.length; inx++) {

    //first element

    var first = xarr[inx];
    
    //second element

    var second = xarr[xarr.length-1 - inx] ;
      document.writeln(xarr[xarr.length-1] );
    //add togather them togater
    answer.push(first+second);

 } 
//  return answer
return answer; 
 
}

// write args and seq of array
document.writeln( big_o([1,5,23]));
