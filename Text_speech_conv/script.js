let text = document.getElementById("txt");
let submitBtn = document.getElementById("submit");
let resumeBtn = document.getElementById("resume");
let pauseBtn = document.getElementById("pause");
let audioMsg;

submitBtn.addEventListener("click", () =>{
    audioMsg.text = text.value; 
    window.speechSynthesis.speak(audioMsg); 
});

resumeBtn.addEventListener("click", () => {
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
    if(speechSynthesis.pause){
        speechSynthesis.resume();
    }
});

pauseBtn.addEventListener("click", () => {
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
    if(speechSynthesis.speaking){
        speechSynthesis.pause();
    }
});

window.onload = () => {
    resumeBtn.style.display = "none";
    if("speechSynthesis" in window){
        audioMsg = new SpeechSynthesisUtterance();
    } else {
        alert("Speech sysnthesis is not supported");
    }
}