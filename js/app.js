/** App */

import Parallax from './modules/parallax';
import Menu from './modules/menu';

class App {
  constructor() {
    this.parallax = new Parallax();
    this.menu = new Menu();
    console.log(this);
  }
}

window.onload = () => {
  const app = new App();
};
