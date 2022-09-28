const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    // Toggle Nav
    menu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation= '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;   
        } 
    });
        // Menu animation 
        menu.classList.toggle('toggle');
    });
    
}
navSlide();

$('#miModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

//grid template columns y media query