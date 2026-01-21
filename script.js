document.addEventListener('DOMContentLoaded', () => {
	const spinBtn = document.getElementById('spin-btn');
	const resultArea = document.getElementById('result-area');
	const typeFilter = document.getElementById('type-filter');
	const genreFilter = document.getElementById('genre-filter');
	const ratingFilter = document.getElementById('rating-filter');
	
	const slot1 = document.querySelector('#slot1 .slot-inner span');
	const slot2 = document.querySelector('#slot2 .slot-inner span');
	const slot3 = document.querySelector('#slot3 .slot-inner span');

	const resultPoster = document.getElementById('result-poster');
	const resultTitle = document.getElementById('result-title');
	const resultType = document.getElementById('result-type');
	const resultGenre = document.getElementById('result-genre');
	const resultYear = document.getElementById('result-year');
	const resultRating = document.getElementById('result-rating');
	const resultDesc = document.getElementById('result-desc');

	let isSpinning = false;

	spinBtn.addEventListener('click', () => {
		if (isSpinning) return;
		
		const typeVal = typeFilter.value;
		const genreVal = genreFilter.value;
		const ratingVal = parseFloat(ratingFilter.value);

		let filteredDb = db.filter(item => {
			let matchType = typeVal === 'all' || item.type === typeVal;
			let matchGenre = genreVal === 'all' || item.genre === genreVal;
			let matchRating = item.rating >= ratingVal;
			return matchType && matchGenre && matchRating;
		});

		if (filteredDb.length === 0) {
			alert('Нет результатов для выбранных фильтров!');
			return;
		}

		isSpinning = true;
		spinBtn.disabled = true;
		resultArea.classList.remove('visible');
		resultArea.classList.add('hidden');

		const randomItem = filteredDb[Math.floor(Math.random() * filteredDb.length)];

		animateSlots(randomItem);
	});

	function animateSlots(winner) {
		const duration = 3000;
		const interval = 50;
		const startTime = Date.now();

		const types = ['MOVIE', 'SERIES', 'ANIMATION'];
		const genres = ['SCI-FI', 'DRAMA', 'FANTASY', 'ACTION', 'HORROR', 'COMEDY', 'CRIME'];
		const ratings = ['8.0+', '8.5+', '9.0+', 'TOP', 'HIT', 'WIN'];

		const timer = setInterval(() => {
			const timePassed = Date.now() - startTime;
			
			if (timePassed < duration) {
				slot1.innerText = types[Math.floor(Math.random() * types.length)];
				slot2.innerText = genres[Math.floor(Math.random() * genres.length)];
				slot3.innerText = ratings[Math.floor(Math.random() * ratings.length)];
			} else {
				clearInterval(timer);
				finalizeSlots(winner);
			}
		}, interval);
	}

	function finalizeSlots(winner) {
		slot1.innerText = winner.type.toUpperCase();
		slot2.innerText = winner.genre.toUpperCase();
		slot3.innerText = winner.rating;

		setTimeout(() => {
			showResult(winner);
			isSpinning = false;
			spinBtn.disabled = false;
		}, 500);
	}

	function showResult(item) {
		resultPoster.src = item.poster;
		resultTitle.innerText = item.title;
		resultType.innerText = item.type.toUpperCase();
		resultGenre.innerText = item.genre;
		resultYear.innerText = item.year;
		resultRating.innerText = item.rating;
		resultDesc.innerText = item.description;

		resultArea.classList.remove('hidden');
		setTimeout(() => {
			resultArea.classList.add('visible');
		}, 10);
	}
});
