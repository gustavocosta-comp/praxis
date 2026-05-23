

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const id = this.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });

    });

});



const botaoTopo = document.getElementById('topo');

window.addEventListener('scroll', () => {

    if (window.scrollY > 300) {
        botaoTopo.style.display = 'block';
    } else {
        botaoTopo.style.display = 'none';
    }

});

botaoTopo.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});
