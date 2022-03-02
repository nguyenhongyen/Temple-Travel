
//---------------------------------- header------------------------

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
          document.body.style.boxShadow =""

        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  });



//------------------------favorite-tour---------------------------

$('.carousel-1').owlCarousel({
  
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

//------------------------tour---------------------------

$('.carousel-2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    stagePadding: 20,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        700:{
            items:2
        },
        900:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

//------------------------scroll---------------------------

var myBtn = document.getElementById("scroll");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
