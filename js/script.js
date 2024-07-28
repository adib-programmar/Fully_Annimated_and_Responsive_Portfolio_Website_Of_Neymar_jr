function toggleMenu() {
    const menu = document.querySelector('#header_2nd_part ul');
    menu.classList.toggle('open');
}


document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const toggleBtnIcon = document.querySelector('.toggle-button i');
    const dropDownMenu = document.querySelector('.dropdown-menu');
  
    if (toggleButton && toggleBtnIcon && dropDownMenu) {
      toggleButton.onclick = function () {
        dropDownMenu.classList.toggle('open');
  
        const isOpen = dropDownMenu.classList.contains('open');
  
        toggleBtnIcon.classList.replace(isOpen ? '<i class="fa-solid fa-xmark fa-fade" style="color: #ffffff;"></i>' : 'fa-solid fa-xmark', isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars-staggered');
      };
    } else {
      console.error('One or more elements not found.');
    }
  });
  