// function show(){
 
//     console.log("hai");
    
//         show();
    
// }

// show();



function fact(n){
    if(n==0)
        return 1;
    else 
        return n * fact(n-1);
}

let res= fact(5);

console.log(res);