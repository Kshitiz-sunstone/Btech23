let num1 = ""
let num2 = ""
let op = ""
function display(x) {
    if (op == "") {
        num1 += x.value
        document.getElementById('data').value = num1
        console.log("num1 "+num1);
    }
    else {
        num2 += x.value
        document.getElementById('data').value = num2
        console.log("num2 "+num2);
    }
}
function calc(x) {
    op = x.value
    console.log(op);
}
function res() {
    let ans=num1+op+num2
    let result=eval(ans)
    console.log(result);
    document.getElementById('data').value=result
    num1=result;
    num2="";
    op=""    
}