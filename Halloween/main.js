/* ===== SHOW MENU ===== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show');
  });
}

if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show');
  });
}

/* ===== REMOVE MENU WHEN LINK CLICKED ===== */
document.querySelectorAll('.nav__link').forEach(n => n.addEventListener('click', () => {
  navMenu.classList.remove('show');
}));

/* ===== FORM FEEDBACK ===== */
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('🎃 Thank you! Your spooky message has been sent!');
    form.reset();
  });
});
