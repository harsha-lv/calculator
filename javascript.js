let num1="";
let num2="";
let operator="";
let isSecondNumber=false;

const miscContainer=document.querySelector(".misc");
const display=document.querySelector(".display");
const digitsContainer=document.querySelector(".digits-container");
const operatorContainer=document.querySelector(".operator-container");

function main(){
    for(let i=0;i<=9;i++){
        let digit=document.createElement("button");
        digit.classList.add("digit");
        digit.textContent=i;
        digitsContainer.appendChild(digit);
    }
}
main();

miscContainer.addEventListener("click", (e)=>{
    if (e.target.id==="ac"){
        display.textContent="";
        num1="";
        num2="";
        operator="";
        isSecondNumber=false;
    }
    else if (e.target.id==="del"){
        if (!isSecondNumber){
            // removeLastEntry(num1);
            num1=num1.slice(0, -1);
            display.textContent=num1;
        }
        else{
            num2=num2.slice(0, -1);
            display.textContent=num2;
            // removeLastEntry(num2);
        }
    }
})

digitsContainer.addEventListener("click", (e)=>{
    if (!e.target.classList.contains("digit")) return;

    if (!isSecondNumber){
        num1+=e.target.textContent;
        display.textContent=num1;
    }
    else{
        num2+=e.target.textContent;
        display.textContent=num2;
    }
});

operatorContainer.addEventListener("click", (e)=>{
    const op=e.target.textContent;

    if (op==='='){
        if (num1 && operator && num2){
            const result=operate(operator, parseInt(num1), parseInt(num2));
            display.textContent=result;
            num1=result.toString();
            operator="";
            num2="";
            isSecondNumber=false;
        }
    }
    else{
        operator=op;
        isSecondNumber=true;
    }
});

function operate(operator, num1, num2){
    switch(operator){
        case '+': return num1+num2;
        case '-': return num1-num2;
        case '*': return num1*num2;
        case '/': return (num2!==0?num1/num2:"Error");
    }
}