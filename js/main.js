var el = document.getElementsByClassName('mobile-menu')[0];

// Event listener al click del mouse, che alterna l'hamburger a una X
el.addEventListener('click', function(){
    el.classList.toggle('change');
})