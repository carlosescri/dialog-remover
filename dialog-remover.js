const INTERVAL = 50;
const MAX_TIME = 10000;

function _remove(fn, limit) {
  console.log(`trying to remove ${fn.name}…`);
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

window.addEventListener('load', (e) => {
  remove(quantcast);
});
