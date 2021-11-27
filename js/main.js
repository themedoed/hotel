$(function(){
    $('.testimonials__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/home/rooms/arrow-left.png" alt="Left-Arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/home/rooms/arrow-right.png" alt="Right-Arrow"></button>'
    });
});

const anchors = document.querySelectorAll('.scroll-btn a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
  e.preventDefault()
   
  const blockID = anchor.getAttribute('href').substr(1)
   
  document.getElementById(blockID).scrollIntoView({
  behavior: 'smooth',
  block: 'start'
  })
  })
}