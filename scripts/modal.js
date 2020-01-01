// MENU MODAL
let menuBurger = document.getElementById('hamburger');
let menuModal = document.getElementById('menu-modal');
let exitModal = document.getElementById('exit-modal');
let modaloptions = document.getElementById('menu-modal-options');
let modalOption = document.getElementsByClassName('menu-modal-option');

menuBurger.onclick = () => {
  menuModal.style.display = 'block';
  document.body.style.overflowY = 'hidden';
};

exitModal.onclick = () => {
  menuModal.style.display = 'none';
  document.body.style.overflowY = 'scroll';
};

window.onclick = e => {
  if (e.target === modaloptions) {
    menuModal.style.display = 'none';
    document.body.style.overflowY = 'scroll';
  }
};

Array.from(modalOption).forEach(option => {
  option.onclick = () => {
    menuModal.style.display = 'none';
    document.body.style.overflowY = 'scroll';
  };
});
