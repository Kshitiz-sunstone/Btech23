let x=11
let t=x
let res=''
while (t!=0) {
    let r=t%2
    t=Math.floor(t/2)
    res=r+res
}
console.log(res);
console.log(x.toString(2));