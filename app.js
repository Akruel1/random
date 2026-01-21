import { titles, genreLabels, typeLabels } from "./data.js"

const el = {
	type: document.getElementById("type"),
	minRating: document.getElementById("minRating"),
	minRatingValue: document.getElementById("minRatingValue"),
	yearFrom: document.getElementById("yearFrom"),
	yearTo: document.getElementById("yearTo"),
	yearHint: document.getElementById("yearHint"),
	btnSpin: document.getElementById("btnSpin"),
	btnSpinAgain: document.getElementById("btnSpinAgain"),
	btnClear: document.getElementById("btnClear"),
	btnRandomize: document.getElementById("btnRandomize"),
	reels: [
		document.getElementById("reel0"),
		document.getElementById("reel1"),
		document.getElementById("reel2")
	],
	reelWraps: Array.from(document.querySelectorAll(".slot-reel")),
	pickedGenres: document.getElementById("pickedGenres"),
	status: document.getElementById("status"),
	slotHint: document.getElementById("slotHint"),
	card: document.getElementById("card"),
	empty: document.getElementById("empty"),
	poster: document.getElementById("poster"),
	kicker: document.getElementById("kicker"),
	title: document.getElementById("title"),
	facts: document.getElementById("facts"),
	desc: document.getElementById("desc"),
	tags: document.getElementById("tags")
}

const reelItemHeight = 62
const reelSpinsBase = 18

function clamp(n, a, b) {
	return Math.max(a, Math.min(b, n))
}

function randInt(a, b) {
	return Math.floor(a + Math.random() * (b - a + 1))
}

function pickOne(arr) {
	return arr[randInt(0, arr.length - 1)]
}

function shuffle(arr) {
	const out = arr.slice()
	for (let i = out.length - 1; i > 0; i--) {
		const j = randInt(0, i)
		const tmp = out[i]
		out[i] = out[j]
		out[j] = tmp
	}
	return out
}

function parseYear(v) {
	const s = String(v ?? "").trim()
	if (!s) return null
	const n = Number(s)
	if (!Number.isFinite(n)) return null
	const y = Math.floor(n)
	if (y < 1900 || y > 2100) return null
	return y
}

function buildFilters() {
	const type = el.type.value
	const minRating = Number(el.minRating.value || 0)
	const yearFrom = parseYear(el.yearFrom.value)
	const yearTo = parseYear(el.yearTo.value)
	let yFrom = yearFrom
	let yTo = yearTo
	if (yFrom !== null && yTo !== null && yFrom > yTo) {
		const tmp = yFrom
		yFrom = yTo
		yTo = tmp
	}
	return {
		type,
		minRating: clamp(minRating, 0, 10),
		yearFrom: yFrom,
		yearTo: yTo
	}
}

function filterTitles(f) {
	return titles.filter(t => {
		if (f.type !== "any" && t.type !== f.type) return false
		if (t.rating < f.minRating) return false
		if (f.yearFrom !== null && t.year < f.yearFrom) return false
		if (f.yearTo !== null && t.year > f.yearTo) return false
		return true
	})
}

function allGenresFrom(list) {
	const set = new Set()
	for (const t of list) {
		for (const g of t.genres) set.add(g)
	}
	return Array.from(set)
}

function labelGenre(g) {
	return (genreLabels[g] || g).toUpperCase()
}

function setStatus(text) {
	el.status.textContent = text || ""
}

function setYearHint(f) {
	if (f.yearFrom === null && f.yearTo === null) {
		el.yearHint.textContent = ""
		return
	}
	if (f.yearFrom !== null && f.yearTo !== null) {
		el.yearHint.textContent = `Диапазон: ${f.yearFrom}–${f.yearTo}`
		return
	}
	if (f.yearFrom !== null) {
		el.yearHint.textContent = `От: ${f.yearFrom}`
		return
	}
	el.yearHint.textContent = `До: ${f.yearTo}`
}

function setPickedGenres(genres) {
	el.pickedGenres.innerHTML = ""
	for (const g of genres) {
		const chip = document.createElement("div")
		chip.className = "chip"
		chip.textContent = labelGenre(g)
		el.pickedGenres.appendChild(chip)
	}
}

function pill(text) {
	const p = document.createElement("div")
	p.className = "pill"
	p.textContent = text
	return p
}

function tag(text) {
	const t = document.createElement("div")
	t.className = "tag"
	t.textContent = text
	return t
}

function posterUrl(seed) {
	const safe = encodeURIComponent(seed || "genre-jackpot")
	return `https://picsum.photos/seed/${safe}/520/760`
}

function showResult(item, picked) {
	el.empty.classList.add("hidden")
	el.card.classList.remove("hidden")

	el.poster.src = posterUrl(item.posterSeed || item.id)
	el.poster.alt = `${item.title} постер`

	const typeLabel = typeLabels[item.type] || item.type
	el.kicker.textContent = `${typeLabel} • подбор по жанрам`
	el.title.textContent = item.title

	el.facts.innerHTML = ""
	el.facts.appendChild(pill(`${item.year}`))
	el.facts.appendChild(pill(`Рейтинг ${item.rating.toFixed(1)}`))
	el.facts.appendChild(pill(typeLabel.toUpperCase()))

	const matchCount = picked.filter(g => item.genres.includes(g)).length
	el.facts.appendChild(pill(`Совпадений ${matchCount}/${picked.length}`))

	el.desc.textContent = item.description

	el.tags.innerHTML = ""
	for (const g of item.genres) el.tags.appendChild(tag(labelGenre(g)))
}

function hideResult() {
	el.card.classList.add("hidden")
	el.empty.classList.remove("hidden")
	el.poster.removeAttribute("src")
	el.poster.alt = ""
	el.kicker.textContent = ""
	el.title.textContent = ""
	el.facts.innerHTML = ""
	el.desc.textContent = ""
	el.tags.innerHTML = ""
}

function resetReelsVisual() {
	for (const wrap of el.reelWraps) wrap.classList.remove("stopped")
	for (const r of el.reels) {
		r.innerHTML = ""
		r.style.transform = "translateY(0px)"
	}
}

function buildReelTrack(availableGenres, target) {
	const pool = availableGenres.length ? availableGenres : allGenresFrom(titles)
	const mixed = shuffle(pool)
	const repeats = reelSpinsBase + randInt(0, 12)
	const seq = []
	for (let i = 0; i < repeats; i++) seq.push(mixed[i % mixed.length])
	seq.push(target)
	return seq
}

function renderReel(reelEl, items) {
	reelEl.innerHTML = ""
	for (const g of items) {
		const node = document.createElement("div")
		node.className = "slot-item"
		node.textContent = labelGenre(g)
		reelEl.appendChild(node)
	}
	reelEl.style.transform = "translateY(0px)"
}

function animateReel(reelEl, reelWrapEl, items, durationMs) {
	const offset = (items.length - 1) * reelItemHeight
	const anim = reelEl.animate(
		[
			{ transform: "translateY(0px)" },
			{ transform: `translateY(-${offset}px)` }
		],
		{
			duration: durationMs,
			easing: "cubic-bezier(0.12, 0.82, 0.10, 1)",
			fill: "forwards"
		}
	)
	return new Promise(resolve => {
		anim.onfinish = () => {
			reelEl.style.transform = `translateY(-${offset}px)`
			reelWrapEl.classList.add("stopped")
			resolve()
		}
	})
}

function scoreItem(item, f, picked) {
	let score = 0
	if (f.type !== "any" && item.type === f.type) score += 8
	if (item.rating >= f.minRating) score += 4
	if (f.yearFrom !== null || f.yearTo !== null) score += 2
	for (const g of picked) if (item.genres.includes(g)) score += 6
	score += Math.round(item.rating * 1.25)
	return score
}

function pickTitle(filtered, picked, f) {
	if (!filtered.length) return null
	const scored = filtered.map(t => ({ t, s: scoreItem(t, f, picked) }))
	scored.sort((a, b) => b.s - a.s)
	const topScore = scored[0].s
	const band = scored.filter(x => x.s >= topScore - 6).map(x => x.t)
	return pickOne(band.length ? band : filtered)
}

function selectGenres(availableGenres) {
	const pool = availableGenres.length ? availableGenres : allGenresFrom(titles)
	const mixed = shuffle(pool)
	const picked = []
	for (let i = 0; i < 3; i++) picked.push(mixed[i % mixed.length])
	return picked
}

async function spin() {
	const f = buildFilters()
	setYearHint(f)
	el.minRatingValue.textContent = f.minRating.toFixed(1)

	const filtered = filterTitles(f)
	const availableGenres = allGenresFrom(filtered.length ? filtered : titles)

	const picked = selectGenres(availableGenres)
	setPickedGenres([])
	resetReelsVisual()

	if (!filtered.length && (f.type !== "any" || f.minRating > 0 || f.yearFrom !== null || f.yearTo !== null)) {
		el.slotHint.textContent = "по фильтрам ничего не нашлось, кручу по полной базе"
	} else if (f.type === "any" && f.minRating === 0 && f.yearFrom === null && f.yearTo === null) {
		el.slotHint.textContent = "без фильтров: максимально случайный режим"
	} else {
		el.slotHint.textContent = "крутится по жанрам, которые подходят под фильтры"
	}

	el.btnSpin.disabled = true
	el.btnSpinAgain.disabled = true
	el.btnRandomize.disabled = true
	setStatus("крутим...")

	const targets = picked
	const tracks = targets.map(t => buildReelTrack(availableGenres, t))
	for (let i = 0; i < 3; i++) renderReel(el.reels[i], tracks[i])

	const durations = [1400, 1900, 2400].map(d => d + randInt(-120, 180))
	await Promise.all([
		animateReel(el.reels[0], el.reelWraps[0], tracks[0], durations[0]),
		animateReel(el.reels[1], el.reelWraps[1], tracks[1], durations[1]),
		animateReel(el.reels[2], el.reelWraps[2], tracks[2], durations[2])
	])

	setPickedGenres(targets)
	setStatus("готово")

	const baseList = filterTitles(f)
	const pool = baseList.length ? baseList : titles
	const chosen = pickTitle(pool, targets, f)

	if (!chosen) {
		hideResult()
		setStatus("ничего не выпало")
	} else {
		showResult(chosen, targets)
	}

	el.btnSpin.disabled = false
	el.btnSpinAgain.disabled = false
	el.btnRandomize.disabled = false
}

function clearFilters() {
	el.type.value = "any"
	el.minRating.value = "0"
	el.minRatingValue.textContent = "0.0"
	el.yearFrom.value = ""
	el.yearTo.value = ""
	el.yearHint.textContent = ""
	el.slotHint.textContent = "крутится по жанрам, которые подходят под фильтры"
	setPickedGenres([])
	resetReelsVisual()
	hideResult()
	setStatus("")
}

function randomizeFilters() {
	const mode = randInt(0, 3)
	el.type.value = ["any", "movie", "series", "animation"][mode]
	el.minRating.value = String((Math.round((Math.random() * 6.5) * 10) / 10).toFixed(1))
	const a = randInt(2008, 2025)
	const b = randInt(2012, 2026)
	const from = Math.min(a, b)
	const to = Math.max(a, b)
	el.yearFrom.value = String(from)
	el.yearTo.value = String(to)
	const f = buildFilters()
	setYearHint(f)
	el.minRatingValue.textContent = f.minRating.toFixed(1)
}

function seedReels() {
	const genres = allGenresFrom(titles)
	const picked = selectGenres(genres)
	for (let i = 0; i < 3; i++) {
		const track = [picked[i]]
		renderReel(el.reels[i], track)
		el.reelWraps[i].classList.add("stopped")
	}
	setPickedGenres(picked)
}

el.minRating.addEventListener("input", () => {
	el.minRatingValue.textContent = Number(el.minRating.value || 0).toFixed(1)
})

el.yearFrom.addEventListener("input", () => setYearHint(buildFilters()))
el.yearTo.addEventListener("input", () => setYearHint(buildFilters()))

el.btnSpin.addEventListener("click", () => spin())
el.btnSpinAgain.addEventListener("click", () => spin())
el.btnClear.addEventListener("click", () => clearFilters())
el.btnRandomize.addEventListener("click", () => randomizeFilters())

clearFilters()
seedReels()

