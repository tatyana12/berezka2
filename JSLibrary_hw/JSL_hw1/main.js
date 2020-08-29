$(document).ready(function(){
  $("h1").after("<ul></ul>")
  $("h2").each(function(i,e){
      $(this).attr("id", "heading_"+i);
      $("ul").append($("<li><a href='#" +$(this).attr("id")+"'/>"+$(this).text()+"</li>"));

  });
});


$(document).ready(function(){
  $('li a').click(function(e){
      if(this.hash !==''){
      e.preventDefault();
      const hash = this.hash;
      $('body,html').animate({scrollTop:$(hash).offset().top}, 500);};
  })
});
       
