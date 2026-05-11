window.addEventListener('scroll', () => {

  const navbar = document.querySelector('.navbar');

  if(window.scrollY > 50){

    navbar.style.background = 'rgba(5,8,22,0.98)';

  } else {

    navbar.style.background = 'rgba(5,8,22,0.9)';

  }

});
