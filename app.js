var buttonTranslate = document.querySelector("#button_translte");
var txtInput = document.querySelector("#text_input");
var outputbox = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with the server!try again after some time");
}
function clickEventHandler() {
  var inputText = txtInput.value;
  var translationURL = getTranslationURL(inputText);
  fetch(translationURL)
    .then((response) => {return response.json()})
    .then((json) => {
      console.log(json);
      var translatedText = json.contents.translated;
      output.innerText = translatedText;
    })
    .catch(errorHandler);
}
function textSpeak(){
  let speech = new SpeechSynthesisUtterance();
  speech.text =output.innerText;
  window.speechSynthesis.speak(speech);
}

buttonTranslate.addEventListener("click", clickEventHandler);

