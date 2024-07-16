const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updaterating(0);

starsEl.forEach((starsEl,index) => {
    starsEl.addEventListener("click",() => {
        updaterating(index)
    })
})

function updaterating(index){
    starsEl.forEach((starsEl,idx)=>{
        if(idx < index + 1){
            starsEl.classList.remove("active");
        } else {
            starsEl.classList.remove("active")
        }
    })

    emojisEl.forEach((emojisEl) => {
        emojisEl.style.transform = `translateX(-${index * 50}px)`;
        emojisEl.style.color = colorsArray[index];
    })
}