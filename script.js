window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrolled = window.scrollY > 50; // Change 50 to your desired scroll position

    if (scrolled) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
