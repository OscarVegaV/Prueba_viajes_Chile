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
    /* tooltio en contacto */
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
    /*  doble click ocultar 1er favicon*/
    $("#ocultar").dblclick(function(){    
      $(this).hide()
    });
  })