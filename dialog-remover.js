function removeQuantcast() {
  const classNames = ['qc-cmp-ui-showing', 'qc-cmp-showing'];
  document.querySelectorAll(classNames.map(c => `.${c}`).join(', ')).forEach(element => {
    element.classList.remove(...classNames);
  })
}

window.addEventListener('load', (e) => {
  removeQuantcast();
});
