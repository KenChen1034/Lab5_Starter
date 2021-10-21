// explore.js
var synth = window.speechSynthesis;
window.addEventListener('DOMContentLoaded', init);



function init() {
  var button = document.querySelector('button');
  var textToSpeak = document.querySelector('textarea');
  var img = document.querySelector('img');
  var voices = [];
  var voiceSelect = document.querySelector('select');
  
  
  if(speechSynthesis !== undefined){
    speechSynthesis.onvoiceschanged = GETVOICES;
  }
  
  function GETVOICES(){
    voices = synth.getVoices();
  
    for(var i =0; i< voices.length; i++){
      var option = document.createElement('option');
      option.textContent = voices[i].name + '(' + voices[i].lang + ')';
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
    
  
    
  textToSpeak.addEventListener('input', event =>{
      textToSpeak.placeholder = event.target.value;
  });
    
  button.addEventListener('click', event =>{
    var utterance = new SpeechSynthesisUtterance(textToSpeak.placeholder);
    var selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(let i = 0; i< voices.length;i++){
      if(voices[i].name === selectedVoiceName){
        utterance.voice = voices[i];
      }
    }
    
    synth.speak(utterance);
  });
  setInterval(checkSpeak,100);
  function checkSpeak(){
    if(synth.speaking){
      img.setAttribute("src", "assets/images/smiling-open.png");
    }
    else{
      img.setAttribute("src", "assets/images/smiling.png");
    }
  }
}





