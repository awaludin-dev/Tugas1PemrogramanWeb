let lastScrollTop = 0;
const footer = document.getElementById('footer');

window.addEventListener('scroll', function() {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    footer.classList.add('hideFooter');
  } else {
    // Scrolling up
    footer.classList.remove('hideFooter');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);