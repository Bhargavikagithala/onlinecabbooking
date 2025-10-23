let menubar = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menubar.onclick = () => {
  menubar.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

// Optional: Close navbar when link clicked (mobile UX)
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menubar.classList.remove('fa-times');
  });
});
