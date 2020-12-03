var el = document.getElementsByClassName('mobile-menu')[0];

// Event listener al click del mouse, che alterna l'hamburger a una X
el.addEventListener('click', function () {
    el.classList.toggle('change');
})


var mobileNavigation = document.getElementsByClassName('mobile-navigation')[0];

el.addEventListener('click', function () {
    if (mobileNavigation.style.display == 'block') {
        mobileNavigation.style.display = 'none';
    }
    else {
        mobileNavigation.style.display = 'block';
    }
})