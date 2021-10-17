import menuList from "./menuList.js";
import {mapLinksToHTML} from "./setupSidebar.js";

const setupSubmenu = () => {

    const navLilks = [...document.querySelectorAll('.nav-menu li')];
    const submenu = document.querySelector('.submenu');
    const hero = document.querySelector('.hero');

    const populateSubmenu = (item) => {
        const {title, color,  links} = item;
        submenu.innerHTML = `<h4>${title}</h4>
                            <ul class="submenu-list ${color}">${mapLinksToHTML(links)}</ul>`;
        setSubmenuColumns(links.length);
    };

    const setSubmenuColumns = (amount) => {
        const submenuList = document.querySelector('.submenu-list');
        const screenWidth = document.documentElement.clientWidth;
        if (screenWidth > 1024) {
            if (amount >= 4) {
                submenuList.style.gridTemplateColumns = 'repeat(4, 1fr)';
            } else if (amount === 3) {
                submenuList.style.gridTemplateColumns = 'repeat(3, 1fr)';
            } else {
                submenuList.style.gridTemplateColumns = 'repeat(2, 1fr)';
            }
        } else {
            if (amount >= 3) {
                submenuList.style.gridTemplateColumns = 'repeat(3, 1fr)';
            } else {
                submenuList.style.gridTemplateColumns = 'repeat(2, 1fr)';
            }
        }
    };

    const setSubmenuPosition = (coords) => {
        const y = coords.top + coords.height;
        const x = coords.left + coords.width/2;
        submenu.style.top = `${y}px`;
        submenu.style.left = `${x}px`;
    };

    navLilks.forEach(link => {
        link.addEventListener('mouseover', event => {
            const name = event.currentTarget.textContent.toLowerCase();
            const coords = event.currentTarget.getBoundingClientRect();
            setSubmenuPosition(coords);
            populateSubmenu(menuList.find(item => item.title === name));
            submenu.classList.add('show');
        });
    });

    hero.addEventListener('mousemove', () => {
        if (!submenu.classList.contains('show')) return;
        submenu.classList.remove('show');
    });

};

export default setupSubmenu;