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
    var teammate = document.getElementsByClassName("team__mate"),
        teamdesc = document.getElementsByClassName("team__desc"),
        i,
        j;

    for (i=0;i<teammate.length;i++){
        teammate[i].addEventListener('click',function ()
                            

                      {           
            for (j=0;j<teamdesc.length;j++){
                teamdesc[j].style.display = "none";
                       
            }
                    
            var teamelement=this.nextElementSibling;

            if (teamelement.style.display === "flex") {
                
                teamelement.style.display = "none";
            } else {
                teamelement.style.display = "flex";
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
        overlayReview.style.display = 'block';
        let text = this.previousElementSibling.textContent;
        reviewsContent.textContent = text;


    });
}

reviewsClose.addEventListener('click', function (e) {
    e.preventDefault();
    overlayReview.style.display = 'none';


})

