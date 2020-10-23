if ('IntersectionObserver' in window) {
	var observer = new IntersectionObserver((entries, observer) => { 
		entries.forEach(entry => {
			if(entry.intersectionRatio > 0.99) {
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			}
		});
	}, {threshold: 0.99});
	document.querySelectorAll('.observed').forEach(obj => { observer.observe(obj) });
} else {
	var observedEls = document.querySelectorAll('.observed');
	for (var i=0; i< observedEls.length; i++) {
		observedEls[i].classList.add('.is-visible');
	}
}
