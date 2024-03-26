let cart=[]
function add() {
    let data=document.getElementById('data').value
    cart.push(data)
    display()
}
function del(params) {
    console.log(params);
    console.log(cart[params-1]);
    cart.splice((params-1),1)
    display()
}
function display() {
    let str=''
    let i=1
    console.log(cart);
    cart.forEach(element => {
        str+="<tr><td>"+(i)+"</td><td>"+element+"</td><td><button onclick='del("+i+")'>Delete</button></td></tr>"
        i++
    });
    document.getElementById('result').innerHTML=str;
}