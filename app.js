const translate =document.querySelector("#btn-translate")
    const language= document.querySelector("#minion-talk")
    const output= document.querySelector("#output")
    const ServerUrl = "https://api.funtranslations.com/translate/minion.json"


    function GetTranslated(text){
    return ServerUrl + "?" + "text=" + text
    }

    function errorhandler(error){
     console.log("error occur", error)
     alert("error occur please try again later")
    }

    function ClickHandler(){
    const inputText = language.value; 
    fetch(GetTranslated(inputText))
    .then(response => response.json())
    .then(json => {
    const translation = json.contents.translated;
    output.innerText = translation;})
    .catch(errorhandler)}
    translate.addEventListener("click",ClickHandler)
