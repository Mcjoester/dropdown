import "./style.css";

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach((dropdown) => {
        const btn = dropdown.querySelector('.btn');
        const content = dropdown.querySelector('.dropdown-content');
        const menuItems = dropdown.querySelectorAll('.menu-item');

        btn.addEventListener('click', () => {
            content.classList.toggle('active');
        })

        menuItems.forEach((item) => {
            item.addEventListener('click', () => {
                content.classList.toggle('active');
            })
        })

        document.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target)) {
                content.classList.remove('active');

            }
        })

    })
})