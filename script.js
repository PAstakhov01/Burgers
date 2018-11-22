const openButton = document.querySelector('.hamburger-menu-link');
const overlay = document.querySelector('.overlay');
const bars = document.querySelector('.hamburger-menu-link__bars');
const closeButton = document.querySelector('.hamburger-menu-link');
const menuLink = document.querySelectorAll('.overlay__item a');
const staff = document.querySelectorAll('.team__mate ');
const teamdesc = document.querySelector('.team__desc');

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
staff.addEventListener('click' , function(e) {
    e.preventDefault();
    staff.classList.toggle('.team__mate');
    if (teamdesc.style.display === 'flex') {
      teamdesc.style.display = 'none' ;
    } else { teamdesc.style.display = 'flex' };
}  );

