const mainB = document.querySelector('.mainB');
const modal = document.querySelector('.modal');
const exit = document.querySelector('.exit');
const logoicon = document.querySelector('.logoicon');
const menu = document.querySelector('.wide');

mainB.addEventListener('click', (e) => {
	e.preventDefault();
	modal.style.display = 'flex';
});
exit.addEventListener('click', (e) => {
	e.preventDefault();
	modal.style.display = 'none';
});
logoicon.addEventListener('click', (e) => {
	e.preventDefault();
	if (menu.style.display != 'flex') {
		menu.style.display = 'flex';
	} else {
		menu.style.display = 'none';
	}
});
window.addEventListener('resize', async (e) => {
	e.preventDefault();
	if (window.innerWidth > 720) {
		menu.style.display = 'flex';
	}
});
