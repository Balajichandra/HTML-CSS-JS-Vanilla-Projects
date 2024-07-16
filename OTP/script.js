let gen = () => {
    const otplen = 6;
    const otp = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("otpdisplay").innerText = `${otp}`;
}
document.getElementById("generate").addEventListener("click",gen);
