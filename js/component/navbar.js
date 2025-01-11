function lineLi() {
  const navbarList = document.querySelectorAll(".navbar__item--link");
  
  navbarList.forEach((navbarItem) => {
    const line = document.createElement('div');
    line.classList.add('navbar__item--line');
    
    navbarItem.addEventListener("mouseenter", () => {
        navbarItem.appendChild(line);
        line.style.transition = '0.5s ease';
    });
    navbarItem.addEventListener("mouseleave", () => {
        navbarItem.removeChild(line);
    });
  });
}

export default lineLi();

