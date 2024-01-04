let alien = {
    name : ' hari',
    age : '38',
    big_alien : {
        name: 'vijay',
        age : '98'
    }
}

// for( let key in alien){
//     console.log(key, alien[key]);
// }

for( let key in alien){
    console.log(key,alien.big_alien[key]);
}