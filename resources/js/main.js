const nav_links_eventListener = () => {
    //index page variables
    const nav_links = document.querySelectorAll('.nav-links > li');

    console.log('navlinks ', nav_links);
    nav_links.forEach(links => {
        console.log('links :: ', links);
        links.addEventListener('click', () => {
            remove_class_active();
            links.classList.add('active');
        });
    })

}

const remove_class_active = () => {
    const active_nav_links = document.querySelectorAll('.nav-links > li[class="active"]');

    active_nav_links.forEach(elem => {
        if (elem.className == 'active') {
            elem.classList.remove('active');
        }
    });
}


nav_links_eventListener();