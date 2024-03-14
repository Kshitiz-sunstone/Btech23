let str= "InDiA iS My CouNTRY"
let count=0
for (let i = 0; i < str.length; i++) {
    const element = str[i];
    let x=str.charCodeAt(i)
    // console.log(x);
    if(x>=65&&x<=90){
        count++
    }
}
console.log(count);