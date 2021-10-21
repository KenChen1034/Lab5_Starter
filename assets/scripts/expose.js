// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var instrument = document.querySelector('select');
  var horn_image = document.querySelector('img');
  var user_input = document.querySelector('input');
  var button = document.querySelector('button');
  var horn_audio = document.querySelector('audio');
  var volume_icon = document.querySelector('div img');
  const jsConfetti = new JSConfetti();
  
  instrument.addEventListener('change', event =>{
    horn_image.setAttribute("alt", event.target.value);
    horn_image.setAttribute("src" , `assets/images/${event.target.value}.svg`);
    horn_audio.setAttribute("src", `assets/audio/${event.target.value}.mp3`);
  });

  button.addEventListener('click', event =>{
    if(horn_image.alt == 'party-horn'){
      jsConfetti.addConfetti();
      horn_audio.play();
    }
    else{
      horn_audio.play();
      
    }
  });

  user_input.addEventListener('change', event =>{
    
    horn_audio.volume = event.target.value/100;
    if(event.target.value > 1 && event.target.value < 33){
      volume_icon.setAttribute("src", "assets/icons/volume-level-1.svg");
      volume_icon.setAttribute("alt", "Volume level 1");
    }
    else if(event.target.value >= 67){
      volume_icon.setAttribute("src", "assets/icons/volume-level-3.svg");
      volume_icon.setAttribute("alt", "Volume level 3");
    }
    else if(event.target.value == 0){
      volume_icon.setAttribute("src", "assets/icons/volume-level-0.svg");
      volume_icon.setAttribute("alt", "Volume level 0");
    }
    else{
      volume_icon.setAttribute("src", "assets/icons/volume-level-2.svg");
      volume_icon.setAttribute("alt", "Volume level 2");
    }
  });

}





