$(document).ready(function(){
    $('a').click(function(event){
      if(this.hash !== ""){
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        },2000,function(){
          window.location.hash = hash
        })
      }
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  })
  
  