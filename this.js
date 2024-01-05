//this represents the current object 

let laptop1 = {
    cpu : 'i9',
    name : 'mac-book'
}

let laptop = {
    cpu : 'i8',
    name: 'asus',

    greet: function(){
        //when we have the multiple objects then it's good to mention the this key word.
        console.log(this.cpu)
        
    }

    
}

//here we need to mention that what object property you want to print.
laptop.greet();