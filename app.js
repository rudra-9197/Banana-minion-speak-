var buttonTranslate = document.querySelector("#button_translte");
var txtInput =document.querySelector("#text_input");
console.log(txtInput);


function clickEventHandler(){
    console.log("clicked");
    console.log("input",txtInput.value);
}


buttonTranslate.addEventListener("click",  clickEventHandler())

