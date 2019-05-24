/** Parallax */

class Parallax {
  constructor() {
    this.el = document.querySelectorAll('.parallax');
    this.cascade = 50;
    window.addEventListener('scroll', () => {
      this.onScroll();
    });
    this.onScroll();
  }

  parallax(el, i) {
    // test parallax
    const rect = el.getBoundingClientRect();
    if (rect.top > window.innerHeight) {
      el.classList.remove('active');
    } else if (!el.classList.contains('active')) {
      if (rect.top + rect.height < 0) {
        el.classList.add('active');
      } else {
        setTimeout(() => {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight) {
            el.classList.add('active');
          }
        }, this.cascadeIndex++ * this.cascade);
      }
    }
  }

  onScroll() {
    // cascade parallax
    this.cascadeIndex = 0;
    this.el.forEach(el => {
      this.parallax(el);
    });
  }
}

export default Parallax;
