/** Article handler */

class Article {
  constructor() {
    this.el = {
      buttons: document.querySelectorAll('.service[data-article]'),
    };
    this.el.buttons.forEach(el => {
      el.addEventListener('mouseenter', () => { this.hover(el); });
      el.addEventListener('mouseleave', () => { this.unhover(el); });
      el.addEventListener('click', () => { this.click(el); });
    });

  }

  hover(el) {
    const hint = document.querySelector(`.article__hint[data-article="${el.dataset.article}"]`);
    if (hint) {
      hint.classList.add('hover');
    }
  }

  unhover(el) {
    const hint = document.querySelector(`.article__hint[data-article="${el.dataset.article}"]`);
    if (hint) {
      hint.classList.remove('hover');
    }
  }

  click(el) {
    const article = document.querySelector(`.article[data-article="${el.dataset.article}"]`);
    const hint = document.querySelector(`.article__hint[data-article="${el.dataset.article}"]`);
    if (article && hint) {
      article.classList.toggle('active');
      hint.classList.toggle('active');
      if (article.classList.contains('active')) {
        const inner = article.querySelector('.article__inner');
        if (inner) {
          article.style.height = `${inner.offsetHeight}px`;
          this.scrollToArticle(article);
        }
      } else {
        article.style.height = '0px';
      }
    }
  }

  scrollToArticle(el) {
    if (!this.scrolling) {
      this.scrolling = true;
      const from = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
      const to = from + el.getBoundingClientRect().top;
      this.tween = {from: from, to: to, time: 1.25, age: 0, now: (new Date()).getTime() / 1000};
      this.animate();
    }
  }

  easing(t) {
    return t<.5 ? 2*t*t : -1+(4-2*t)*t
  }

  animate() {
    const now = (new Date()).getTime() / 1000;
    const delta = now - this.tween.now;
    this.tween.now = now;
    this.tween.age += delta;
    const t = this.easing(this.tween.age / this.tween.time);
    if (this.tween.age >= this.tween.time) {
      document.documentElement.scrollTop = this.tween.to;
      this.scrolling = false;
    } else {
      window.requestAnimationFrame(() => { this.animate(); });
      document.documentElement.scrollTop = this.tween.from + (this.tween.to - this.tween.from) * t;
    }
  }
}

export default Article;
