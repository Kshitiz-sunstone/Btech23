let str="Sunstone"
console.log(str.split('').reverse().join(''));
function stringReverse(str){
    let result=""
    for (let i = str.length-1; i >=0 ; i--) {
        const element = str [i];
        console.log(element);
        result+=element
    }
    return result
}
console.log(stringReverse("India"));