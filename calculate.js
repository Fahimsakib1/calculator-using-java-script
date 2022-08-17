//erase all value from the result input field
function eraseAll(){
    document.getElementById('result-screen').value = '';
}

//calculate fucntion
function calculate(newValue) {
    document.getElementById('result-screen').value += newValue;
}

//answer function
function answer(){
    let a = document.getElementById('result-screen').value;
    let b = eval(a);
    document.getElementById('result-screen').value = b;

}
