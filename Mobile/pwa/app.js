window.addEventListener('load', async e =>{
    if('serviceWorker' in navigator){
        try{
            navigator.serviceWorker.register('sw.js');
            console.log("SW registered");
        }
        catch(error){
            console.log("SW not registered");
        }
    }
});

let deferredPrompt;
let btnAdd = document.querySelector(".button");

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    btnAdd.style.display = "block";
});

btnAdd.addEventListener('click', (e) => {

    if (deferredPrompt) {
        deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }
        deferredPrompt = null;
    });
}
});


window.addEventListener('appinstalled', (evt) => {

    console.log('INSTALL: Success');
});

$('ul.dropdown ul').hide();
$( "ul.dropdown li" ).hover(
    function(){

        $('ul', this).slideDown(200);
    },
    function(){

        $('ul', this).slideUp(200);


    });

$("#blue").click(function(){
    $('html').css("background-image", "url('images/lightblue-large.jpg')");
});
$("#gold").click(function(){
    $('html').css("background-image", " url('images/lightgold-large.jpg')");
});
