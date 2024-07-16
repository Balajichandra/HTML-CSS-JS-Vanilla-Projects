const dynamictext = document.querySelector("h1 span");
const words = ['Love','like art','the future','everything'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0,charIndex);
    dynamictext.textContent =currentChar;
    if(!isDeleting && charIndex < currentWord.length){
        charIndex++;// if true, type next character
        setTimeout(typeEffect,200);
    } else if(isDeleting && charIndex > 0){
        charIndex--;// if true, remove previous character
        setTimeout(typeEffect,100);
    } else{
        isDeleting = !isDeleting;// if word isdeleted then switch to next word
        wordIndex =  !isDeleting ? (wordIndex+1)  % words.length:wordIndex;
        setTimeout(typeEffect,1200);
    }
}
typeEffect();