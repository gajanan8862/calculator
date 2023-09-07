const equalBtn = document.getElementById("btn-equal");
const display = document.getElementById("display");
const btnAc = document.getElementById("btn-ac");
const btnBack = document.getElementById("btn-back");
const buttons = document.getElementsByClassName("btn");

equalBtn.addEventListener("click",function(){
    let result = eval(display.value);
    display.value = result;

});

btnAc.addEventListener("click",function(){
    display.value= "";
});

btnBack.addEventListener("click",function(){
    let str = display.value;
    display.value = str.substring(0, str.length - 1);
});

function input(val){
    display.value += val;
}