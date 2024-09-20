// Hämta menyknappen och menyn
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

// Lägg till eventlyssnare för att visa/dölja menyn
menuToggle.addEventListener('click', () => {
  if (sideMenu.classList.contains('open')) {
    sideMenu.classList.remove('open');
  } else {
    sideMenu.classList.add('open');
  }
});
