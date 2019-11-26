if(!!window.IntersectionObserver){
	let observer = new IntersectionObserver((entries, observer) => { 
		entries.forEach(entry => {
			if(entry.intersectionRatio > 0.9) {
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			}
		});
	}, {threshold: 0.9});
	document.querySelectorAll('.observed').forEach(obj => { observer.observe(obj) });
} else {
	document.querySelectorAll('.observed').style.display = 'block';
}
