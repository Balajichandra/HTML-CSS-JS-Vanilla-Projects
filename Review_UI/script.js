const ratingEmojis = document.querySelectorAll('.rating');
const btn = document.getElementById("btn");
const container = document.getElementById("container");
let selectedRating="";
ratingEmojis.forEach((ratingEmoji) => {
    ratingEmoji.addEventListener("click",(event) => {
        removeActive();
        /*here we are selecting either emoji or value*/ 
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

btn.addEventListener("click",()=>{
    if (selectedRating != ""){
        container.innerHTML = `
            <strong>Thank You! </strong>
            <br>
            <br>
            <strong>Review: ${selectedRating}</strong>
            <p>Thanks for your review to improve our customer support</p>
        `;   
    }
});
function removeActive(){
    ratingEmojis.forEach((ratingEmoji) =>{
        ratingEmoji.classList.remove("active");
    })
}