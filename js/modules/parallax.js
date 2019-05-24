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

  onScroll() {
    const top = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
    const bottom = top + window.innerHeight;

    // apply parallax effects
    let i = 1;
    this.el.forEach(el => {
      const rect = el.getBoundingClientRect();

      if (rect.top > window.innerHeight) {
        el.classList.remove('active');
      } else if (!el.classList.contains('active')) {
        setTimeout(() => {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight) {
            el.classList.add('active');
          }
        }, i++ * this.cascade);
      }
    });
  }
}

export default Parallax;
