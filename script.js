const menu = document.querySelector('.menu');

function toggleMenu() {
	if (menu.style.display === 'block') {
		menu.style.display = 'none';
	} else {
		menu.style.display = 'block';
	}
}

window.addEventListener('resize', function () {
	if (this.window.innerWidth > 768) {
		menu.style.display = 'block';
	} else {
		menu.style.display = 'none';
	}
});
