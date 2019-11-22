if(!!window.IntersectionObserver){
	let observer = new IntersectionObserver((entries, observer) => { 
		entries.forEach(entry => {
		if(entry.isIntersecting){
            console.log(entry);
            entry.target.classList.add('is-visible');
			observer.unobserve(entry.target);
		}
		});
	}, {threshold: 1.0});
	document.querySelectorAll('.observed').forEach(obj => { observer.observe(obj) });
}

else document.querySelector('#warning').style.display = 'block';
