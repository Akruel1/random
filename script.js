const items = [
	{
		title: "Neon Harbor",
		type: "movie",
		rating: 8.4,
		year: 2022,
		genres: ["sci-fi", "thriller", "mystery"],
		description: "A signal from the ocean pulls a pilot into a city that should not exist.",
		poster: "https://picsum.photos/seed/neonharbor/600/900"
	},
	{
		title: "Sable Crown",
		type: "series",
		rating: 8.7,
		year: 2021,
		genres: ["fantasy", "drama", "adventure"],
		description: "Heirs of a fallen kingdom race to reclaim the crown while magic returns.",
		poster: "https://picsum.photos/seed/sablecrown/600/900"
	},
	{
		title: "Paper Orbit",
		type: "animation",
		rating: 7.8,
		year: 2020,
		genres: ["family", "adventure", "comedy"],
		description: "A paper astronaut and a runaway kite map the skies of a floating city.",
		poster: "https://picsum.photos/seed/paperorbit/600/900"
	},
	{
		title: "Midnight Relay",
		type: "movie",
		rating: 7.6,
		year: 2019,
		genres: ["action", "crime", "thriller"],
		description: "A courier must deliver a package across a city locked down by gangs.",
		poster: "https://picsum.photos/seed/midnightrelay/600/900"
	},
	{
		title: "Glassline",
		type: "series",
		rating: 8.1,
		year: 2018,
		genres: ["drama", "mystery", "crime"],
		description: "A profiler rebuilds her life while uncovering the truth behind a cold case.",
		poster: "https://picsum.photos/seed/glassline/600/900"
	},
	{
		title: "Aurora Field",
		type: "movie",
		rating: 7.1,
		year: 2016,
		genres: ["romance", "drama"],
		description: "Two researchers in the arctic fall in love while chasing a rare light.",
		poster: "https://picsum.photos/seed/aurorafield/600/900"
	},
	{
		title: "Circuit Hearts",
		type: "series",
		rating: 7.9,
		year: 2023,
		genres: ["sci-fi", "romance", "drama"],
		description: "An android therapist helps humans with grief while facing its own limits.",
		poster: "https://picsum.photos/seed/circuithearts/600/900"
	},
	{
		title: "Wildline",
		type: "movie",
		rating: 6.9,
		year: 2015,
		genres: ["adventure", "family"],
		description: "A father and daughter cross the wilderness to return a rare animal home.",
		poster: "https://picsum.photos/seed/wildline/600/900"
	},
	{
		title: "Opal Street",
		type: "series",
		rating: 8.3,
		year: 2022,
		genres: ["comedy", "drama"],
		description: "Neighbors in a creative district learn to build a community after a storm.",
		poster: "https://picsum.photos/seed/opalstreet/600/900"
	},
	{
		title: "Dust Empire",
		type: "movie",
		rating: 7.4,
		year: 2017,
		genres: ["western", "action", "drama"],
		description: "A reluctant sheriff faces a cartel that runs the desert rails.",
		poster: "https://picsum.photos/seed/dustempire/600/900"
	},
	{
		title: "Eclipse Parade",
		type: "animation",
		rating: 8.0,
		year: 2024,
		genres: ["fantasy", "music", "family"],
		description: "A shy drummer must lead a parade across a city that sleeps by day.",
		poster: "https://picsum.photos/seed/eclipseparade/600/900"
	},
	{
		title: "Current Zero",
		type: "movie",
		rating: 8.2,
		year: 2020,
		genres: ["thriller", "sci-fi", "action"],
		description: "An engineer discovers a loop in the city power grid that predicts crimes.",
		poster: "https://picsum.photos/seed/currentzero/600/900"
	},
	{
		title: "Harborlight",
		type: "series",
		rating: 7.5,
		year: 2014,
		genres: ["history", "drama"],
		description: "Generations of dockworkers navigate wars, unions, and family legacy.",
		poster: "https://picsum.photos/seed/harborlight/600/900"
	},
	{
		title: "North Signal",
		type: "movie",
		rating: 6.8,
		year: 2013,
		genres: ["mystery", "drama"],
		description: "A journalist follows a radio anomaly that ties to a missing expedition.",
		poster: "https://picsum.photos/seed/northsignal/600/900"
	},
	{
		title: "Rift Arena",
		type: "series",
		rating: 8.6,
		year: 2019,
		genres: ["sport", "action", "drama"],
		description: "Athletes from rival districts battle in a league where strategy wins wars.",
		poster: "https://picsum.photos/seed/riftarena/600/900"
	},
	{
		title: "Gravity Bloom",
		type: "animation",
		rating: 7.3,
		year: 2012,
		genres: ["fantasy", "adventure", "family"],
		description: "A gardener climbs floating islands to save a forest from a silent frost.",
		poster: "https://picsum.photos/seed/gravitybloom/600/900"
	},
	{
		title: "Velvet Code",
		type: "movie",
		rating: 7.9,
		year: 2018,
		genres: ["crime", "thriller", "mystery"],
		description: "A hacker uncovers a financial cult hiding behind a luxury fashion empire.",
		poster: "https://picsum.photos/seed/velvetcode/600/900"
	},
	{
		title: "Silent Harbor",
		type: "series",
		rating: 8.0,
		year: 2016,
		genres: ["thriller", "mystery"],
		description: "A coastal town unravels when a ferry arrives with no passengers onboard.",
		poster: "https://picsum.photos/seed/silentharbor/600/900"
	},
	{
		title: "Signal Grove",
		type: "movie",
		rating: 6.7,
		year: 2011,
		genres: ["comedy", "romance"],
		description: "Two rival radio hosts must co-host the same show after a network merger.",
		poster: "https://picsum.photos/seed/signalgrove/600/900"
	},
	{
		title: "Iron Verse",
		type: "series",
		rating: 8.4,
		year: 2024,
		genres: ["action", "fantasy", "adventure"],
		description: "A poet-warrior unlocks ancient power by finishing a forbidden verse.",
		poster: "https://picsum.photos/seed/ironverse/600/900"
	},
	{
		title: "Fableline",
		type: "animation",
		rating: 7.7,
		year: 2017,
		genres: ["comedy", "family"],
		description: "A storyteller gets trapped inside her own tales and must rewrite them.",
		poster: "https://picsum.photos/seed/fableline/600/900"
	},
	{
		title: "Cold Meridian",
		type: "movie",
		rating: 7.2,
		year: 2010,
		genres: ["war", "history", "drama"],
		description: "A medic documents a forgotten front line and the cost of survival.",
		poster: "https://picsum.photos/seed/coldmeridian/600/900"
	},
	{
		title: "Shadow League",
		type: "series",
		rating: 7.6,
		year: 2015,
		genres: ["crime", "action"],
		description: "An undercover agent enters a secret fighting league run by financiers.",
		poster: "https://picsum.photos/seed/shadowleague/600/900"
	},
	{
		title: "Bloom City",
		type: "movie",
		rating: 6.9,
		year: 2012,
		genres: ["drama", "music"],
		description: "A street violinist sparks a movement that reshapes a divided city.",
		poster: "https://picsum.photos/seed/bloomcity/600/900"
	}
];

const typeLabels = {
	movie: "Movie",
	series: "Series",
	animation: "Animation"
};

const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const spinButton = document.getElementById("spinButton");
const typeFilter = document.getElementById("typeFilter");
const ratingFilter = document.getElementById("ratingFilter");
const ratingValue = document.getElementById("ratingValue");
const yearFromInput = document.getElementById("yearFrom");
const yearToInput = document.getElementById("yearTo");
const genreChips = document.getElementById("genreChips");
const notice = document.getElementById("notice");
const posterImage = document.getElementById("posterImage");
const resultMeta = document.getElementById("resultMeta");
const resultTitle = document.getElementById("resultTitle");
const resultDescription = document.getElementById("resultDescription");
const resultGenres = document.getElementById("resultGenres");

let spinning = false;

const updateRatingValue = () => {
	const value = Number(ratingFilter.value || 0);
	ratingValue.textContent = value.toFixed(1);
};

const toNumber = value => {
	const parsed = Number.parseInt(value, 10);
	return Number.isFinite(parsed) ? parsed : null;
};

const getFilters = () => {
	const type = typeFilter.value;
	const rating = Number(ratingFilter.value || 0);
	const yearFrom = toNumber(yearFromInput.value);
	const yearTo = toNumber(yearToInput.value);
	return {
		type,
		rating,
		yearFrom,
		yearTo
	};
};

const matchesFilters = (item, filters) => {
	if (filters.type !== "any" && item.type !== filters.type) {
		return false;
	}
	if (item.rating < filters.rating) {
		return false;
	}
	if (filters.yearFrom !== null && item.year < filters.yearFrom) {
		return false;
	}
	if (filters.yearTo !== null && item.year > filters.yearTo) {
		return false;
	}
	return true;
};

const getPool = filters => items.filter(item => matchesFilters(item, filters));

const getGenresFromPool = pool => {
	const set = new Set();
	pool.forEach(item => {
		item.genres.forEach(genre => set.add(genre));
	});
	return Array.from(set);
};

const randomFrom = list => list[Math.floor(Math.random() * list.length)];

const clearElement = element => {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
};

const renderChips = (target, values) => {
	clearElement(target);
	values.forEach(value => {
		const chip = document.createElement("span");
		chip.className = "chip";
		chip.textContent = value.toUpperCase();
		target.appendChild(chip);
	});
};

const renderResult = item => {
	posterImage.src = item.poster;
	posterImage.alt = `${item.title} poster`;
	resultMeta.textContent = `${typeLabels[item.type]} • ${item.year} • ${item.rating.toFixed(1)} rating`;
	resultTitle.textContent = item.title;
	resultDescription.textContent = item.description;
	renderChips(resultGenres, item.genres);
};

const spinSlot = (element, genres, duration, speed) => new Promise(resolve => {
	const start = performance.now();
	let current = randomFrom(genres);
	element.textContent = current.toUpperCase();
	const timer = setInterval(() => {
		current = randomFrom(genres);
		element.textContent = current.toUpperCase();
		if (performance.now() - start >= duration) {
			clearInterval(timer);
			resolve(current);
		}
	}, speed);
});

const spinRoulette = async () => {
	if (spinning) {
		return;
	}
	spinning = true;
	spinButton.disabled = true;
	notice.textContent = "Spinning...";

	const filters = getFilters();
	let pool = getPool(filters);
	let genres = getGenresFromPool(pool);
	if (genres.length === 0) {
		pool = items.slice();
		genres = getGenresFromPool(pool);
		notice.textContent = "No matches for filters, using full catalog.";
	}

	const results = await Promise.all([
		spinSlot(slot1, genres, 1600, 60),
		spinSlot(slot2, genres, 2000, 70),
		spinSlot(slot3, genres, 2400, 80)
	]);

	renderChips(genreChips, results);

	let candidates = pool.filter(item => item.genres.some(genre => results.includes(genre)));
	if (candidates.length === 0) {
		candidates = pool;
	}

	if (candidates.length === 0) {
		notice.textContent = "No titles found. Adjust filters and try again.";
	} else {
		const selection = randomFrom(candidates);
		renderResult(selection);
		notice.textContent = "Spin again for another match.";
	}

	spinButton.disabled = false;
	spinning = false;
};

spinButton.addEventListener("click", spinRoulette);
ratingFilter.addEventListener("input", updateRatingValue);
updateRatingValue();
