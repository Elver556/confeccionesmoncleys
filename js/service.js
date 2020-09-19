

/* Slide Up Multi Text Animation using by Html Css Javascript | The WebShala */

const txts = document.querySelector(".animate-text").children,
        txtsLen = txts.length;
    let index = 0;
const textInTimer=3000,
        textOutTimer=2800;

        function animateText(){
            for(let i=0; i<txtsLen; i++){
                txts[i].classList.remove("text-in","text-out"); 
            }
            txts[index].classList.add("text-in");

            setTimeout(function(){
                txts[index].classList.add("text-out");  
            },textOutTimer)


            setTimeout(function(){
                if(index ==txtsLen-1){
                    index=0;
                }
                else{
                    index++;
                }
                animateText();
            },textInTimer);
        }

        window.onload = animateText;






/* ================Awesome Product Card Using HTML CSS & JQuery | DarkCode======== */

      



/* Boton Cart */
$(".comprar").click(function () {
    Swal.fire({
        title: 'Quiere realizar esta acción?',
        text: "Si acepta, su pedido será registrado.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, acepto!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Gracias!',
            'Pronto nos contactaremos contigo.',
            'success'
          )
        }
      })
});


/* Boton Heart */
$(".fa-heart").click(function () {
  Swal.fire({
    title: '<strong>Moncleys</strong>',
    icon: 'info',
    text: '¿Cómo calificaría a este produto de la Tienda?',
    /* html:
      'You can use <b>bold text</b>, ' +
      '<a href="//sweetalert2.github.io">links</a> ' +
      'and other HTML tags', */
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Me Gusta',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  })
});









