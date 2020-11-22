
$('ul.dropdown ul').hide();
$( "ul.dropdown li" ).hover(
    function(){

        $('ul', this).slideDown(200);
    },
    function(){

        $('ul', this).slideUp(200);


    });

$("#blue").click(function(){
    $('body').css("background-image", "url('images/lightblue.jpg')");
});
$("#gold").click(function(){
    $('body').css("background-image", "url('images/lightgold.jpg')");
});

