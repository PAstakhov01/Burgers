const openButton = document.querySelector('.hamburger-menu-link');
const overlay = document.querySelector('.overlay');
const bars = document.querySelector('.hamburger-menu-link__bars');
const closeButton = document.querySelector('.hamburger-menu-link');
const menuLink = document.querySelectorAll('.overlay__item a');


openButton.addEventListener( 'click', function (e) {
   e.preventDefault();
    document.body.classList.toggle('scroll-none');
   bars.classList.toggle('.hamburger-menu-link');
   if (overlay.style.display === 'flex') {
       overlay.style.display = 'none';
   } else {
       overlay.style.display = 'flex';
   };
});

for (var i = 0; i < menuLink.length; i++) {
   menuLink[i].addEventListener('click', function () {
       bars.classList.toggle('.hamburger-menu-link');
       if (overlay.style.display === 'flex') {
           overlay.style.display = 'none';
       } else {
           overlay.style.display = 'flex';
       };
   });
}





// ТЗ4


setAccordion();

function setAccordion() {
    var accArrow = document.getElementsByClassName("team__mate"),
        accArrowBlock = document.getElementsByClassName("team__desc"),
        i,
        j;

    for (i=0;i<accArrow.length;i++){
        accArrow[i].addEventListener('click',function () {
            var panel=this.nextElementSibling;

            for (j=0;j<accArrowBlock.length;j++){
                if (accArrowBlock[j] != panel)
                accArrowBlock[j].style.display = "none";
            }

            if (panel.style.display != "flex") {
                panel.style.display = "flex";
            } else {
                panel.style.display = "none";
            }
        });
    }
}

const additional = document.querySelectorAll('.reviews__button');
const overlayReview = document.querySelector('.overlay-reviews');
const reviewsClose = document.querySelector('#overlay-reviews__close');
const reviewsContent = document.querySelector('.overlay-reviews__content');


for (var i = 0; i < additional.length; i++) {
    additional[i].addEventListener('click', function (e) {
        e.preventDefault();
         document.body.classList.toggle('scroll-none');
        overlayReview.style.display = 'block';
        let text = this.previousElementSibling.textContent;
        reviewsContent.textContent = text;


    });
}

reviewsClose.addEventListener('click', function (e) {
    e.preventDefault();
     document.body.classList.toggle('scroll-none');
    overlayReview.style.display = 'none';


})

setAccordionTwo();

function setAccordionTwo() {
    var accArrow = document.getElementsByClassName("menu-drop__button"),
        accArrowBlock = document.getElementsByClassName("menu-drop__content"),
        i,
        j;

    for (i=0;i<accArrow.length;i++){
        accArrow[i].addEventListener('click',function () {
            var panel=this.nextElementSibling;

            for (j=0;j<accArrowBlock.length;j++){
                if (accArrowBlock[j] != panel)
                accArrowBlock[j].style.display = "none";
            }

            if (panel.style.display != "flex") {
                panel.style.display = "flex";
            } else {
                panel.style.display = "none";
            }
        });
    }
}



for(var i=0; i<controls.length; i++){
    controls[i].style.display = 'flex';
}
var controls = document.querySelectorAll('.slider__arrow');

var slides = document.querySelectorAll('#slides .slider__item ');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = 'slider__item ';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slider__item showing';
}


