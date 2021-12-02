var buttonTranslate = document.querySelector("#button_translte");
var txtInput =document.querySelector("#text_input");
var outputbox = document.querySelector("#output");

console.log(txtInput);


function clickEventHandler(){
    outputbox.innerText = " akskasaksks" + txtInput.value
};


buttonTranslate.addEventListener("click",  clickEventHandler)

