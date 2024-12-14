function start() {
    
    var buttonClasses = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
    var playFunctions = [playW, playA, playS, playD, playJ, playK, playL];

    document.addEventListener('keydown', function(e) {
  	if (e.keyCode == 65) {
        playA();
  	}
	});
	document.addEventListener('keydown', function(e) {
  	if (e.keyCode == 87) {
        playW();
  	}
	});
	document.addEventListener('keydown', function(e) {
  	if (e.keyCode == 83) {
        playS();
  	}
	});
	document.addEventListener('keydown', function(e) {
  	if (e.keyCode == 68) {
        playD();
  	}
	});
	document.addEventListener('keydown', function(e) {
  	if (e.keyCode == 74) {
        playJ();
  	}
	});
	document.addEventListener('keydown', function(e) {
  	if (e.keyCode == 75) {
        playK();
  	}
	});
	document.addEventListener('keydown', function(e) {
  	if (e.keyCode == 76) {
        playL();
  	}
	});
	
    for (var i = 0; i < buttonClasses.length; i++) {
        var buttons = document.getElementsByClassName(buttonClasses[i] + ' drum');
        for (var j = 0; j < buttons.length; j++) {
            buttons[j].addEventListener("click", playFunctions[i]);
            
        }
    }
}
function pressW() {
    const elements = document.getElementsByClassName("w drum");

    if (elements.length > 0) {
        elements[0].classList.add("pressed"); 

        
        setTimeout(() => {
          elements[0].classList.remove("pressed");
        }, 100); 
    } else {
        console.error("No element with class 'w drum' found.");
    }
}
function pressA() {
    const elements = document.getElementsByClassName("a drum");

    if (elements.length > 0) {
        elements[0].classList.add("pressed"); 

        
        setTimeout(() => {
          elements[0].classList.remove("pressed");
        }, 100); 
    } else {
        console.error("No element with class 'a drum' found.");
    }
}
function pressS() {
    const elements = document.getElementsByClassName("s drum");

    if (elements.length > 0) {
        elements[0].classList.add("pressed"); 

        
        setTimeout(() => {
          elements[0].classList.remove("pressed");
        }, 100); 
    } else {
        console.error("No element with class 's drum' found.");
    }
}
function pressD() {
    const elements = document.getElementsByClassName("d drum");

    if (elements.length > 0) {
        elements[0].classList.add("pressed"); 

        
        setTimeout(() => {
          elements[0].classList.remove("pressed");
        }, 100); 
    } else {
        console.error("No element with class 'd drum' found.");
    }
}
function pressJ() {
    const elements = document.getElementsByClassName("j drum");

    if (elements.length > 0) {
        elements[0].classList.add("pressed"); 

        
        setTimeout(() => {
          elements[0].classList.remove("pressed");
        }, 100); 
    } else {
        console.error("No element with class 'j drum' found.");
    }
}
function pressK() {
    const elements = document.getElementsByClassName("k drum");

    if (elements.length > 0) {
        elements[0].classList.add("pressed"); 

        
        setTimeout(() => {
          elements[0].classList.remove("pressed");
        }, 100); 
    } else {
        console.error("No element with class 'k drum' found.");
    }
}
function pressL() {
    const elements = document.getElementsByClassName("l drum");

    if (elements.length > 0) {
        elements[0].classList.add("pressed"); 

        
        setTimeout(() => {
          elements[0].classList.remove("pressed");
        }, 100); 
    } else {
        console.error("No element with class 'l drum' found.");
    }
}
function playW() {
    let audioPlayer = new Audio('sounds/crash.mp3');
    audioPlayer.play();
    pressW();
}

function playA() {
    let audioPlayer = new Audio('sounds/kick-bass.mp3'); 
    audioPlayer.play();
    pressA();
}

function playS() {
    let audioPlayer = new Audio('sounds/snare.mp3'); 
    audioPlayer.play();
    pressS();
}
function playD() {
    let audioPlayer = new Audio('sounds/tom-1.mp3'); 
    audioPlayer.play();
    pressD();
}
function playJ() {
    let audioPlayer = new Audio('sounds/tom-2.mp3'); 
    audioPlayer.play();
    pressJ();
}
function playK() {
    let audioPlayer = new Audio('sounds/tom-3.mp3'); 
    audioPlayer.play();
    pressK();
}
function playL() {
    let audioPlayer = new Audio('sounds/tom-4.mp3'); 
    audioPlayer.play();
    pressL();
}

window.addEventListener('load', start);