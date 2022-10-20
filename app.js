
const spoiler = document.getElementById("spoiler");
function EventListenerKey(event) {
    
    if(event.keyCode == '27'){
        //console.log('Нажата клавиша escape');
        if(spoiler.className==="open") {
            spoiler.className="closed";
        }
        
    }

    
}

window.addEventListener('keydown', EventListenerKey, false);


function Spoiler() {

	//const spoiler = document.getElementById("spoiler");
	
	if(spoiler.className==="closed") {
    	spoiler.className="open";
  	}
	else {
		spoiler.className="closed";
		
	}
}

