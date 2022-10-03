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

/*
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

(function(){
    $(function(){
        $('#btn-ventana').on('click',function(){
            $('#ventana-modal').modal();
        });
    });
});
*/

const modalAdd = document.querySelector('#modalAdd');
const openModal = () => {
    modalAdd.style.display = 'flex';
}

const closeModal = () => {
    modalAdd.style.display = 'none';
}

modalAdd.onclick = (event) => {
    if(event.target == modalAdd) {
        closeModal();
    }
}