    // Initiate the wowjs
    new WOW().init();

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });