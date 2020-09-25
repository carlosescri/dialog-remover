const INTERVAL = 50;
const MAX_TIME = 5000;

function _remove(fn, limit) {
  if (fn()) {
    console.log(`removed ${fn.name}!`);
  } else if (limit >= 0) {
    setTimeout(_remove, 75, fn, limit - 1);
  }
}

async function remove(fn) {
  _remove(fn, Math.floor(MAX_TIME / INTERVAL));
}

function quantcast() {
  const classNames = ['qc-cmp-ui-showing', 'qc-cmp-showing'];
  const elements = document.querySelectorAll(classNames.map(c => `.${c}`).join(', '));
  if (elements.length === 0) {
    return false;
  } else {
    elements.forEach(element => element.classList.remove(...classNames));
    return true;
  }
}

function quantcast2() {
  document.querySelectorAll('.qc-cmp2-container').forEach(x => x.remove());
}

window.addEventListener('load', (e) => Promise.all([
  remove(quantcast),
  remove(quantcast2)
]));
