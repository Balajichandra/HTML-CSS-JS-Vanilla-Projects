let message = document.getElementById("message");
let messageOnline = () => {
    message.textContent = "Internet Connection is available";
}
let messageOffline = () => {
    message.textContent = "Sorry, There is no internt connectivity"
}
if(window.navigator.onLine){
    messageOnline();
} else {
    messageOffline();
}