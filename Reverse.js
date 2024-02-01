let x = 1234
console.log(x);
let rev = 0
let rem = 0
while (x != 0) {
    rem = x % 10;
    x =  parseInt(x / 10)
    rev = rev * 10 + rem
    console.log(rem);
    if(x<0){
        break;
    }
    //     console.log(x);
    // console.log(rev);
}
console.log(rev);