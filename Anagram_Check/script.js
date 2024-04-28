const btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", () => {
    const word1 = document.getElementById("word1Input").value.toLowerCase()
    const word2 = document.getElementById("word2Input").value.toLowerCase()

    const cleanedWord1 = word1.replace(/[^\w]/g, "");
    const cleanedWord2 = word2.replace(/[^\w]/g, "");

    if(cleanedWord1.length !== cleanedWord2.length){
        result.textContent = "Not an anagram";
        result.classList.remove("success");
        result.classList.add("error");
        return;
    }

    const letterCount1 = {};
    for(const char of cleanedWord1){
        letterCount1[char] = (letterCount1[char] || 0) + 1;
    }

    const letterCount2 = {};
    for(const char of cleanedWord2){
        letterCount2[char] = (letterCount2[char] || 0) + 1;
    }

    for(const char in letterCount1){
        if(letterCount1[char] !== letterCount2[char]){
            result.textContent = "Not an anagram";
            result.classList.remove("success");
            result.classList.add("error");
            return;
        }
    }

    document.getElementById("result").textContent = "It's an anagram";
    result.classList.remove("error");
    result.classList.add("success");
})