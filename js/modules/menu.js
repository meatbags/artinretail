/** Menu */

class Menu {
  constructor() {
    this.el = {
      menuButton: document.querySelector('#menu-button-target'),
      menu: document.querySelector('#menu-target'),
      menuItems: document.querySelectorAll('.menu__item'),
    };

    // toggle menu
    this.el.menuButton.addEventListener('click', () => {
      if (this.el.menuButton.classList.contains('active')) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    });

    // close menu on link clicked
    this.el.menuItems.forEach(el => {
      el.addEventListener('click', () => {
        this.closeMenu();
      });
    });

    // close menu on scroll
    window.addEventListener('scroll', () => {
      if (this.el.menu.classList.contains('active')) {
        this.closeMenu();
      }
    });
  }

  openMenu() {
    this.el.menu.classList.add('active');
    this.el.menuButton.classList.add('active');
  }

  closeMenu() {
    this.el.menu.classList.remove('active');
    this.el.menuButton.classList.remove('active');
  }
}

export default Menu;
