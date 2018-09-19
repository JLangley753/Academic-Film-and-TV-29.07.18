// Show navbar on scroll

window.onscroll = function() {
  showNav()
};

var nbs = document.querySelector('.navbarswitch');
var navbar = document.querySelector('.navbar');

var switchpoint = nbs.offsetTop;

function showNav() {
  if (window.pageYOffset >= switchpoint) {
    navbar.classList.add('shownav');
  } else {
    navbar.classList.remove('shownav')
  }
};

// Smooth scroll on link click

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
