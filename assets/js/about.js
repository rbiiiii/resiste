if ('IntersectionObserver' in window) {
	let observer = new IntersectionObserver((entries, observer) => { 
		entries.forEach(entry => {
			if(entry.intersectionRatio > 0.85) {
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			}
		});
	}, {threshold: 0.85});
	document.querySelectorAll('.observed').forEach(obj => { observer.observe(obj) });
}
