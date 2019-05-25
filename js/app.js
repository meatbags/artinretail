/** App */

import Parallax from './modules/parallax';
import Menu from './modules/menu';
import Article from './modules/article';

class App {
  constructor() {
    this.parallax = new Parallax();
    this.menu = new Menu();
    this.article = new Article();
  }
}

window.onload = () => {
  const app = new App();
};
