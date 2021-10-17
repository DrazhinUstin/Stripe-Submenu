import menuList from "./menuList.js";

const setupSidebar = () => {

    const sidebar = document.querySelector('.sidebar-wrapper');
    const sidebarMenu = document.querySelector('.sidebar-container');
    const openSidebarBtn = document.querySelector('.open-sidebar-btn');
    const closeSidebarBtn = document.querySelector('.close-sidebar-btn');

    const populateSidebar = () => {
        sidebarMenu.innerHTML = menuList.map(item => {
            const {title, color, links} = item;
            return `<article>
                        <h4>${title}</h4>
                        <ul class="sidebar-menu ${color}">${mapLinksToHTML(links)}</ul>
                    </article>`;
        }).join('');
    };

    openSidebarBtn.addEventListener('click', () => sidebar.classList.add('show'));

    closeSidebarBtn.addEventListener('click', () => sidebar.classList.remove('show'));

    populateSidebar();

};

const mapLinksToHTML = (links) => {
    return links.map(link => {
        return `<li>
                    <a href="${link.url}">
                        <i class="${link.icon}"></i>
                        ${link.label}
                    </a>
                </li>`;
    }).join('');
}; 

export {setupSidebar, mapLinksToHTML};