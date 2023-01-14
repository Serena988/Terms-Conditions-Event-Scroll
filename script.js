const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const btn = document.querySelector('.accept');
const btnMessage = document.querySelector('.btn-message');

function obCallBack(entries) {
  if (entries[0].intersectionRatio === 1) {
    btn.classList.add('active');
    ob.unobserve(terms.lastElementChild);
  }
}

const ob = new IntersectionObserver(obCallBack, {
  root: terms,
  threshold: 1,
});

ob.observe(terms.lastElementChild);

btn.addEventListener('mouseover', (event) => {
  if (!event.target.classList.contains('active')) {
    btnMessage.classList.add('visible');
    setTimeout(() => {
      btnMessage.classList.remove('visible');
    }, 1800);
  }
});
