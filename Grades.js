function fun() {
    let x = document.getElementById('data').value;
    let grad = ""
    if (x >= 0 && x <= 100) {

        if (x >= 80) {
            grad = "Grade A"
            console.log("A");
        }
        else if (x >= 60) {
            grad = "Grade B"
        }
        else if (x >= 50) {
            grad = "Grade C"
        }
        else if (x >= 40) {
            grad = "Grade D"
        }
        else {
            grad = "Grade F"
        }
    }
    else {
        grad = "Invalid Input"
    }
    document.getElementById('result').innerHTML = grad;

}