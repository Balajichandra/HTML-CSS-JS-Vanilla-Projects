let btn = document.getElementById("btn");
let rupees = document.getElementById("output1");
let usdollar = document.getElementById("output2");
let japanYen = document.getElementById("output3");
let format_rupees = new Intl.NumberFormat(
    "en-IN",{style:"currency",currency:"INR"}
);
let format_dollar = new Intl.NumberFormat(
    "en-US",{style:"currency",currency:"USD"}
);
let format_Yen = new Intl.NumberFormat(
    "ja-JP",{style:"currency",currency:"JPY"}
);
btn.addEventListener("click", () => {
    let amt = document.getElementById("amount").value;
    rupees.innerHTML = `<span> Indian Rupees: </span> ${format_rupees.format(amt)}`;
    usdollar.innerHTML = `<span> US Dollar: </span> ${format_dollar.format(amt)}`;
    japanYen.innerHTML = `<span> Japaneese Yen: </span>${format_Yen.format(amt)}`
});