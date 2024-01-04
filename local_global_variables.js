
function add(num1){
    //local variable means which is diclared in side the scope
    let num2=num1;
    return num1+num2;
}

//global variable means outside the block the variable are created
let res = add(4);

console.log(res);