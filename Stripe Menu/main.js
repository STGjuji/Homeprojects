const menuItems = document.querySelectorAll('nav ul li');
const menuBackground = document.querySelector('.menu-background');
const nav = document.querySelector('nav ul');

menuItems.forEach(menuItem => menuItem.addEventListener('mouseenter', handleEnter))
menuItems.forEach(menuItem => menuItem.addEventListener('mouseleave', handleLeave))

function handleEnter() {
    const menu = this.querySelector('.menu')

    menu.classList.add('menu-enter')
    setTimeout(() => menu.classList.add('menu-enter-active'), 50)

    const menuCoords = menu.getBoundingClientRect()
    const navCoords = nav.getBoundingClientRect()

    menuBackground.classList.add('open')

    // menuBackground.style.setProperty('width', `${menuCoords.width}px`)
    // menuBackground.style.setProperty('height', `${menuCoords.height}px`)
    // menuBackground.style.setProperty('top', `${menuCoords.top + window.scrollY}px`)
    // menuBackground.style.setProperty('left', `${menuCoords.left}px`)
    menuBackground.style.setProperty('transform',
        `
        translate(${menuCoords.left}px, ${menuCoords.top + window.scrollY}px)
        `
    )
}

function handleLeave() {
    const menu = this.querySelector('.menu')

    menu.classList.remove('menu-enter', 'menu-enter-active')
    menuBackground.classList.remove('open')

    //   menu.classList.add('menu-leave')
    //    setTimeout(() => menu.classList.add('menu-leave-active'), 50)

    //   setTimeout(() => menu.classList.remove('menu-leave', 'menu-leave-active'), 200)
}