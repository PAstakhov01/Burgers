const openButton = document.querySelector('.hamburger-menu-link');
const overlay = document.querySelector('.overlay');
const bars = document.querySelector('.hamburger-menu-link__bars');
const closeButton = document.querySelector('.hamburger-menu-link');
const menuLink = document.querySelectorAll('.overlay__item a');


openButton.addEventListener( 'click', function (e) {
   e.preventDefault();

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

const accordElement =  document.querySelector ('.team__list');
 createAccord(accordElement);

 function createAccord(element) {
 const accordItems = element.querySelectorAll ('.team_item');
    let activeContent;

             for ( let i = 0; i <  accordItems.length; i++) {
              const accordItems= accordItems[i];
              accordItems.addEventListener('click', function()  {
                if (activeContent)  {
                  activeContent.style.display = 'none' ; }
                   const Content = accordItems.nextElementSibling ;
                   Content.style.display = 'flex' ;
                   activeContent = Content;


              });
             } 
 }

