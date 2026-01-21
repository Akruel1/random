const genres = [
	{ id: 1, name: "Драма", icon: "🎭" },
	{ id: 2, name: "Экшн", icon: "💥" },
	{ id: 3, name: "Комедия", icon: "😂" },
	{ id: 4, name: "Триллер", icon: "😱" },
	{ id: 5, name: "Фантастика", icon: "🚀" },
	{ id: 6, name: "Фэнтези", icon: "🧙" },
	{ id: 7, name: "Ужасы", icon: "👻" },
	{ id: 8, name: "Мелодрама", icon: "💕" },
	{ id: 9, name: "Детектив", icon: "🔍" },
	{ id: 10, name: "Приключения", icon: "🗺️" },
	{ id: 11, name: "Биография", icon: "📖" },
	{ id: 12, name: "Криминал", icon: "🔫" }
];

const movies = [
	{
		id: 1,
		title: "Побег из Шоушенка",
		type: "movie",
		year: 1994,
		rating: 9.3,
		genres: [1, 12],
		poster: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
		description: "Несправедливо осуждённый банкир Энди Дюфрейн попадает в тюрьму Шоушенк, где заводит дружбу с заключённым по имени Ред и находит способ сохранить надежду в самых тёмных обстоятельствах."
	},
	{
		id: 2,
		title: "Крёстный отец",
		type: "movie",
		year: 1972,
		rating: 9.2,
		genres: [1, 12],
		poster: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg",
		description: "История могущественной итальянско-американской криминальной семьи Корлеоне. Когда глава семьи, дон Вито Корлеоне, едва избегает покушения, его младший сын Майкл вступает в семейный бизнес."
	},
	{
		id: 3,
		title: "Тёмный рыцарь",
		type: "movie",
		year: 2008,
		rating: 9.0,
		genres: [2, 12, 1],
		poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
		description: "Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта Джима Гордона и прокурора Харви Дента он стремится уничтожить организованную преступность в Готэме, но сталкивается с хаосом, который несёт Джокер."
	},
	{
		id: 4,
		title: "Интерстеллар",
		type: "movie",
		year: 2014,
		rating: 8.7,
		genres: [5, 1, 10],
		poster: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
		description: "Группа исследователей отправляется через недавно обнаруженную червоточину, чтобы найти новый дом для человечества, пока Земля умирает."
	},
	{
		id: 5,
		title: "Властелин колец: Возвращение короля",
		type: "movie",
		year: 2003,
		rating: 9.0,
		genres: [6, 10, 1],
		poster: "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_.jpg",
		description: "Гэндальф и Арагорн ведут мир людей против армии Саурона, чтобы отвлечь его внимание от Фродо и Сэма, которые приближаются к Роковой горе с Кольцом Всевластья."
	},
	{
		id: 6,
		title: "Криминальное чтиво",
		type: "movie",
		year: 1994,
		rating: 8.9,
		genres: [12, 1],
		poster: "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg",
		description: "Жизни двух наёмных убийц, боксёра, гангстера и его жены переплетаются в четырёх историях о насилии и искуплении."
	},
	{
		id: 7,
		title: "Бойцовский клуб",
		type: "movie",
		year: 1999,
		rating: 8.8,
		genres: [1, 4],
		poster: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg",
		description: "Страдающий бессонницей офисный работник и беззаботный мыловар образуют подпольный бойцовский клуб, который перерастает в нечто большее."
	},
	{
		id: 8,
		title: "Начало",
		type: "movie",
		year: 2010,
		rating: 8.8,
		genres: [5, 2, 4],
		poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
		description: "Вор, крадущий корпоративные секреты с помощью технологии проникновения в сны, получает задание внедрить идею в подсознание генерального директора."
	},
	{
		id: 9,
		title: "Матрица",
		type: "movie",
		year: 1999,
		rating: 8.7,
		genres: [5, 2],
		poster: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
		description: "Хакер узнаёт от таинственных повстанцев правду о своей реальности и своей роли в войне против её контролёров."
	},
	{
		id: 10,
		title: "Во все тяжкие",
		type: "series",
		year: 2008,
		rating: 9.5,
		genres: [1, 12, 4],
		poster: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGc@._V1_.jpg",
		description: "Учитель химии из средней школы с диагнозом неоперабельный рак лёгких обращается к производству и продаже метамфетамина, чтобы обеспечить будущее своей семьи."
	},
	{
		id: 11,
		title: "Игра престолов",
		type: "series",
		year: 2011,
		rating: 9.2,
		genres: [6, 1, 10],
		poster: "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGc@._V1_.jpg",
		description: "Девять благородных семей сражаются за контроль над землями Вестероса, в то время как древний враг возвращается после тысячелетий сна."
	},
	{
		id: 12,
		title: "Друзья",
		type: "series",
		year: 1994,
		rating: 8.9,
		genres: [3, 8],
		poster: "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGc@._V1_.jpg",
		description: "Шестеро друзей переживают взлёты и падения жизни в Манхэттене, преодолевая карьерные неудачи, романтические отношения и обычные жизненные трудности."
	},
	{
		id: 13,
		title: "Очень странные дела",
		type: "series",
		year: 2016,
		rating: 8.7,
		genres: [5, 7, 1],
		poster: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGc@._V1_.jpg",
		description: "Когда мальчик исчезает, небольшой городок раскрывает тайну, связанную с секретными экспериментами, ужасающими сверхъестественными силами и странной маленькой девочкой."
	},
	{
		id: 14,
		title: "Чёрное зеркало",
		type: "series",
		year: 2011,
		rating: 8.7,
		genres: [5, 4, 1],
		poster: "https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGc@._V1_.jpg",
		description: "Антология, исследующая тёмную и иногда сатирическую сторону жизни и технологий в ближайшем будущем."
	},
	{
		id: 15,
		title: "Унесённые призраками",
		type: "animation",
		year: 2001,
		rating: 8.6,
		genres: [6, 10, 1],
		poster: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGc@._V1_.jpg",
		description: "Во время переезда семьи Тихиро попадает в мир богов, духов и ведьм и должна найти способ спасти своих родителей, превращённых в свиней."
	},
	{
		id: 16,
		title: "Твоё имя",
		type: "animation",
		year: 2016,
		rating: 8.4,
		genres: [8, 6, 1],
		poster: "https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGc@._V1_.jpg",
		description: "Двое незнакомцев обнаруживают, что они связаны странным образом: они периодически меняются телами. Когда начинается кризис, угрожающий им, они должны наконец встретиться."
	},
	{
		id: 17,
		title: "Человек-паук: Через вселенные",
		type: "animation",
		year: 2018,
		rating: 8.4,
		genres: [2, 10, 5],
		poster: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg",
		description: "Майлз Моралес становится Человеком-пауком своей вселенной и объединяется с пятью коллегами из других измерений, чтобы остановить угрозу для всех реальностей."
	},
	{
		id: 18,
		title: "Атака титанов",
		type: "animation",
		year: 2013,
		rating: 9.1,
		genres: [2, 6, 1],
		poster: "https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_.jpg",
		description: "Человечество живёт в городах, окружённых огромными стенами, защищающими от титанов — гигантских существ, пожирающих людей без причины."
	},
	{
		id: 19,
		title: "Король Лев",
		type: "animation",
		year: 1994,
		rating: 8.5,
		genres: [1, 10],
		poster: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGc@._V1_.jpg",
		description: "Львёнок Симба бежит из родного королевства после трагической гибели отца, но возвращается взрослым, чтобы вернуть себе трон."
	},
	{
		id: 20,
		title: "ВАЛЛ-И",
		type: "animation",
		year: 2008,
		rating: 8.4,
		genres: [5, 8, 10],
		poster: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg",
		description: "В далёком будущем маленький мусороуборочный робот случайно отправляется в космическое путешествие, которое решит судьбу человечества."
	},
	{
		id: 21,
		title: "Джокер",
		type: "movie",
		year: 2019,
		rating: 8.4,
		genres: [1, 4, 12],
		poster: "https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_.jpg",
		description: "В Готэме 1981 года неудавшийся комик Артур Флек сталкивается с жестокостью общества, что приводит его к безумию и превращению в криминального гения."
	},
	{
		id: 22,
		title: "Паразиты",
		type: "movie",
		year: 2019,
		rating: 8.5,
		genres: [4, 1, 3],
		poster: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg",
		description: "Жадность и классовая дискриминация угрожают недавно сформировавшемуся симбиозу между богатой семьёй Пак и бедной семьёй Ким."
	},
	{
		id: 23,
		title: "Шерлок",
		type: "series",
		year: 2010,
		rating: 9.1,
		genres: [9, 4, 1],
		poster: "https://m.media-amazon.com/images/M/MV5BMWEzNTFlMTQtMzhjOS00MzQ1LWJjNjgtY2RhMjFhYjQwYjIzXkEyXkFqcGc@._V1_.jpg",
		description: "Современная адаптация детективных историй о Шерлоке Холмсе, где детектив-консультант раскрывает преступления в современном Лондоне."
	},
	{
		id: 24,
		title: "Ведьмак",
		type: "series",
		year: 2019,
		rating: 8.0,
		genres: [6, 2, 1],
		poster: "https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGc@._V1_.jpg",
		description: "Геральт из Ривии, мутант-охотник на чудовищ, борется за своё место в мире, где люди часто оказываются более жестокими, чем звери."
	},
	{
		id: 25,
		title: "Достать ножи",
		type: "movie",
		year: 2019,
		rating: 7.9,
		genres: [9, 3, 1],
		poster: "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGc@._V1_.jpg",
		description: "Детектив расследует смерть главы эксцентричной семьи и обнаруживает, что каждый член семьи имел мотив для убийства."
	},
	{
		id: 26,
		title: "1917",
		type: "movie",
		year: 2019,
		rating: 8.2,
		genres: [1, 2],
		poster: "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGc@._V1_.jpg",
		description: "Двое молодых британских солдат во время Первой мировой войны получают невыполнимое задание — доставить сообщение, которое спасёт 1600 человек."
	},
	{
		id: 27,
		title: "Клиника",
		type: "series",
		year: 2001,
		rating: 8.3,
		genres: [3, 1],
		poster: "https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ1LWE4NjMtODk3Zjg3YzY4NmRiXkEyXkFqcGc@._V1_.jpg",
		description: "Молодой врач начинает работу в учебной больнице и сталкивается с трудностями медицинской профессии и личной жизни."
	},
	{
		id: 28,
		title: "Рик и Морти",
		type: "animation",
		year: 2013,
		rating: 9.1,
		genres: [3, 5, 10],
		poster: "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMjYtMjEwY2YyMjE2OGRiXkEyXkFqcGc@._V1_.jpg",
		description: "Безумный гениальный учёный Рик берёт своего внука Морти в межгалактические приключения, вызывая хаос в разных измерениях."
	},
	{
		id: 29,
		title: "Тайна Коко",
		type: "animation",
		year: 2017,
		rating: 8.4,
		genres: [6, 10, 1],
		poster: "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGc@._V1_.jpg",
		description: "Мальчик, мечтающий стать музыкантом, попадает в Страну Мёртвых и узнаёт правду о своей семье и её музыкальном проклятии."
	},
	{
		id: 30,
		title: "Довод",
		type: "movie",
		year: 2020,
		rating: 7.3,
		genres: [2, 5, 4],
		poster: "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGc@._V1_.jpg",
		description: "Вооружённый лишь одним словом — Довод — агент борется за выживание всего мира, путешествуя сквозь сумеречный мир международного шпионажа."
	},
	{
		id: 31,
		title: "Мандалорец",
		type: "series",
		year: 2019,
		rating: 8.7,
		genres: [5, 2, 10],
		poster: "https://m.media-amazon.com/images/M/MV5BN2M5YWFjN2YtYzU2YS00NzBlLTgwZWUtYWQzNWFhNDkyYjg3XkEyXkFqcGc@._V1_.jpg",
		description: "Приключения одинокого охотника за головами во внешних пределах галактики, вдали от власти Новой Республики."
	},
	{
		id: 32,
		title: "Молчание ягнят",
		type: "movie",
		year: 1991,
		rating: 8.6,
		genres: [4, 12, 1],
		poster: "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_.jpg",
		description: "Молодой агент ФБР должна заручиться помощью заключённого и манипулятивного каннибала, чтобы поймать другого серийного убийцу."
	},
	{
		id: 33,
		title: "Головоломка",
		type: "animation",
		year: 2015,
		rating: 8.1,
		genres: [3, 1, 10],
		poster: "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_.jpg",
		description: "После переезда в новый город юная Райли и её эмоции — Радость, Страх, Гнев, Отвращение и Печаль — пытаются справиться с новой жизнью."
	},
	{
		id: 34,
		title: "Остров проклятых",
		type: "movie",
		year: 2010,
		rating: 8.2,
		genres: [4, 9, 1],
		poster: "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGc@._V1_.jpg",
		description: "В 1954 году маршал США расследует исчезновение убийцы, сбежавшей из психиатрической больницы на удалённом острове."
	},
	{
		id: 35,
		title: "Аватар: Легенда об Аанге",
		type: "animation",
		year: 2005,
		rating: 9.3,
		genres: [6, 2, 10],
		poster: "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGc@._V1_.jpg",
		description: "В мире, разделённом на четыре нации, молодой Аватар должен овладеть всеми четырьмя стихиями, чтобы остановить войну Огненной Нации."
	},
	{
		id: 36,
		title: "Исчезнувшая",
		type: "movie",
		year: 2014,
		rating: 8.1,
		genres: [4, 1, 9],
		poster: "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_.jpg",
		description: "В день пятой годовщины свадьбы Ник Данн сообщает об исчезновении жены. Под давлением полиции и медиа его портрет идеального мужа начинает рушиться."
	},
	{
		id: 37,
		title: "Офис",
		type: "series",
		year: 2005,
		rating: 9.0,
		genres: [3, 1],
		poster: "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGc@._V1_.jpg",
		description: "Мокьюментари о повседневной жизни офисных работников в региональном отделении вымышленной компании Dunder Mifflin."
	},
	{
		id: 38,
		title: "Сияние",
		type: "movie",
		year: 1980,
		rating: 8.4,
		genres: [7, 1],
		poster: "https://m.media-amazon.com/images/M/MV5BNmM5ZThhY2ItOGRjOS00NzZiLWEwYTItNDgyMjFkOTgxMmRiXkEyXkFqcGc@._V1_.jpg",
		description: "Семья уединяется на зиму в изолированном отеле. Отец-писатель постепенно сходит с ума под влиянием сверхъестественных сил."
	},
	{
		id: 39,
		title: "Дюна",
		type: "movie",
		year: 2021,
		rating: 8.0,
		genres: [5, 10, 1],
		poster: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGc@._V1_.jpg",
		description: "Пол Атрейдес, блестящий и одарённый молодой человек, должен отправиться на самую опасную планету во вселенной, чтобы обеспечить будущее своей семьи."
	},
	{
		id: 40,
		title: "Бесславные ублюдки",
		type: "movie",
		year: 2009,
		rating: 8.4,
		genres: [1, 2, 10],
		poster: "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGc@._V1_.jpg",
		description: "Во время оккупированной нацистами Франции группа еврейско-американских солдат планирует убить лидеров Третьего рейха."
	},
	{
		id: 41,
		title: "Тёмные воды",
		type: "series",
		year: 2018,
		rating: 8.5,
		genres: [1, 4, 9],
		poster: "https://m.media-amazon.com/images/M/MV5BZjIyMmE2YTgtMTNlMC00MTdhLTk5NjktZTg2M2E2N2Y4NTI0XkEyXkFqcGc@._V1_.jpg",
		description: "Британский криминальный мини-сериал, расследующий таинственное убийство в прибрежном городке."
	},
	{
		id: 42,
		title: "Хранители",
		type: "series",
		year: 2019,
		rating: 8.1,
		genres: [5, 1, 9],
		poster: "https://m.media-amazon.com/images/M/MV5BNTAxYzZjYWQtYmE1NS00N2VmLWJmNTktMjRiNmU0MTFlZTc5XkEyXkFqcGc@._V1_.jpg",
		description: "Продолжение культового комикса, действие которого происходит через 30 лет после событий графического романа."
	},
	{
		id: 43,
		title: "Смерть на Ниле",
		type: "movie",
		year: 2022,
		rating: 6.3,
		genres: [9, 1, 4],
		poster: "https://m.media-amazon.com/images/M/MV5BNjI4OTQ1MzktOWFkMi00NWFjLThkOTctNDY2ZDBjOWUyMTJjXkEyXkFqcGc@._V1_.jpg",
		description: "Эркюль Пуаро расследует убийство молодой наследницы во время круиза по Нилу."
	},
	{
		id: 44,
		title: "Стражи Галактики",
		type: "movie",
		year: 2014,
		rating: 8.0,
		genres: [2, 5, 3],
		poster: "https://m.media-amazon.com/images/M/MV5BNDIzMTk4NDYtMjg5OS00ZGI0LWJhZDYtMzdmZGY1YWU5ZGNkXkEyXkFqcGc@._V1_.jpg",
		description: "Группа межгалактических преступников вынуждена работать вместе, чтобы остановить фанатичного воина, задумавшего уничтожить вселенную."
	},
	{
		id: 45,
		title: "Темный дворецкий",
		type: "animation",
		year: 2008,
		rating: 7.7,
		genres: [6, 2, 4],
		poster: "https://m.media-amazon.com/images/M/MV5BMTMzZjM5ZjctYTc2Zi00NjQ5LWFjMWMtZjE3N2NhNGE2ZWRhXkEyXkFqcGc@._V1_.jpg",
		description: "Молодой граф Сиэль Фантомхайв заключает контракт с демоном, который служит ему дворецким в обмен на его душу."
	},
	{
		id: 46,
		title: "Ковбой Бибоп",
		type: "animation",
		year: 1998,
		rating: 8.9,
		genres: [5, 2, 1],
		poster: "https://m.media-amazon.com/images/M/MV5BNGNlNjBkODEtZThlOC00YzQzLThjNDgtMjkwNDg4MTg2NTU5L2ltYWdlL2ltYWdlXkEyXkFqcGc@._V1_.jpg",
		description: "Команда охотников за головами путешествует по Солнечной системе, пытаясь свести концы с концами и убежать от своего прошлого."
	},
	{
		id: 47,
		title: "Сквозь снег",
		type: "movie",
		year: 2013,
		rating: 7.1,
		genres: [5, 2, 4],
		poster: "https://m.media-amazon.com/images/M/MV5BMTQ3NjA1MTY3MV5BMl5BanBnXkFtZTgwNjE4MDI1MTE@._V1_.jpg",
		description: "В постапокалиптическом будущем остатки человечества выживают в поезде, бесконечно кружащем по замёрзшей Земле. Классовое неравенство приводит к восстанию."
	},
	{
		id: 48,
		title: "Острые козырьки",
		type: "series",
		year: 2013,
		rating: 8.8,
		genres: [12, 1],
		poster: "https://m.media-amazon.com/images/M/MV5BNWQwYzc0NjktNjI5MC00MDU3LWI1NTgtOWQyMjlkZTEyYjM3XkEyXkFqcGc@._V1_.jpg",
		description: "Бандитская семья Шелби приобретает власть в Бирмингеме после Первой мировой войны. Амбициозный босс Томми Шелби стремится к легитимности."
	},
	{
		id: 49,
		title: "Форрест Гамп",
		type: "movie",
		year: 1994,
		rating: 8.8,
		genres: [1, 8],
		poster: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg",
		description: "История жизни Форреста Гампа, простого человека с низким IQ, который невольно влияет на ключевые события американской истории второй половины XX века."
	},
	{
		id: 50,
		title: "Красота по-американски",
		type: "movie",
		year: 1999,
		rating: 8.3,
		genres: [1, 8],
		poster: "https://m.media-amazon.com/images/M/MV5BM2RiNDM1MTMtOWI0MC00ODgzLWI1NjQtNjUwOGQwNmIyYmEzXkEyXkFqcGc@._V1_.jpg",
		description: "Клерк средних лет переживает кризис среднего возраста, влюбившись в подругу дочери, в то время как его жена заводит роман с риелтором."
	}
];

let selectedType = "all";
let minRating = 0;
let yearFrom = null;
let yearTo = null;
let isSpinning = false;

const reel1 = document.getElementById("reel1");
const reel2 = document.getElementById("reel2");
const reel3 = document.getElementById("reel3");
const spinButton = document.getElementById("spinButton");
const resultSection = document.getElementById("resultSection");
const ratingSlider = document.getElementById("ratingFilter");
const ratingValue = document.getElementById("ratingValue");
const yearFromInput = document.getElementById("yearFrom");
const yearToInput = document.getElementById("yearTo");
const spinAgainBtn = document.getElementById("spinAgainBtn");

function init() {
	createParticles();
	setupFilterButtons();
	setupRatingSlider();
	setupYearInputs();
	setupSpinButton();
	populateReels();
}

function createParticles() {
	const particlesContainer = document.getElementById("particles");
	for (let i = 0; i < 50; i++) {
		const particle = document.createElement("div");
		particle.className = "particle";
		particle.style.left = Math.random() * 100 + "%";
		particle.style.animationDelay = Math.random() * 15 + "s";
		particle.style.animationDuration = (10 + Math.random() * 10) + "s";
		particlesContainer.appendChild(particle);
	}
}

function setupFilterButtons() {
	const typeButtons = document.querySelectorAll("#typeFilter .filter-btn");
	typeButtons.forEach(btn => {
		btn.addEventListener("click", () => {
			typeButtons.forEach(b => b.classList.remove("active"));
			btn.classList.add("active");
			selectedType = btn.dataset.value;
		});
	});
}

function setupRatingSlider() {
	ratingSlider.addEventListener("input", () => {
		minRating = parseFloat(ratingSlider.value);
		ratingValue.textContent = minRating + "+";
	});
}

function setupYearInputs() {
	yearFromInput.addEventListener("change", () => {
		yearFrom = yearFromInput.value ? parseInt(yearFromInput.value) : null;
	});
	yearToInput.addEventListener("change", () => {
		yearTo = yearToInput.value ? parseInt(yearToInput.value) : null;
	});
}

function setupSpinButton() {
	spinButton.addEventListener("click", startSpin);
	spinAgainBtn.addEventListener("click", () => {
		resultSection.classList.remove("show");
		setTimeout(startSpin, 300);
	});
}

function populateReels() {
	[reel1, reel2, reel3].forEach(reel => {
		reel.innerHTML = "";
		genres.forEach(genre => {
			const item = document.createElement("div");
			item.className = "slot-item";
			item.textContent = genre.icon + " " + genre.name;
			item.dataset.genreId = genre.id;
			reel.appendChild(item);
		});
	});
}

function getFilteredMovies() {
	return movies.filter(movie => {
		if (selectedType !== "all" && movie.type !== selectedType) return false;
		if (movie.rating < minRating) return false;
		if (yearFrom && movie.year < yearFrom) return false;
		if (yearTo && movie.year > yearTo) return false;
		return true;
	});
}

function getAvailableGenres() {
	const filtered = getFilteredMovies();
	const genreSet = new Set();
	filtered.forEach(movie => {
		movie.genres.forEach(g => genreSet.add(g));
	});
	return genres.filter(g => genreSet.has(g.id));
}

function shuffleArray(array) {
	const newArray = [...array];
	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}
	return newArray;
}

function startSpin() {
	if (isSpinning) return;
	
	const filteredMovies = getFilteredMovies();
	if (filteredMovies.length === 0) {
		alert("Нет фильмов, соответствующих выбранным фильтрам. Попробуйте изменить параметры.");
		return;
	}
	
	isSpinning = true;
	spinButton.disabled = true;
	spinButton.classList.add("spinning");
	resultSection.classList.remove("show");
	
	const availableGenres = getAvailableGenres();
	
	const reelGenres1 = shuffleArray(availableGenres.length > 0 ? availableGenres : genres);
	const reelGenres2 = shuffleArray(availableGenres.length > 0 ? availableGenres : genres);
	const reelGenres3 = shuffleArray(availableGenres.length > 0 ? availableGenres : genres);
	
	populateReelWithGenres(reel1, reelGenres1);
	populateReelWithGenres(reel2, reelGenres2);
	populateReelWithGenres(reel3, reelGenres3);
	
	const finalGenre1 = reelGenres1[Math.floor(Math.random() * reelGenres1.length)];
	const finalGenre2 = reelGenres2[Math.floor(Math.random() * reelGenres2.length)];
	const finalGenre3 = reelGenres3[Math.floor(Math.random() * reelGenres3.length)];
	
	spinReel(reel1, finalGenre1, 2000);
	spinReel(reel2, finalGenre2, 2500);
	spinReel(reel3, finalGenre3, 3000);
	
	setTimeout(() => {
		const selectedGenres = [finalGenre1.id, finalGenre2.id, finalGenre3.id];
		showResult(selectedGenres, filteredMovies);
		isSpinning = false;
		spinButton.disabled = false;
		spinButton.classList.remove("spinning");
	}, 3500);
}

function populateReelWithGenres(reel, genreList) {
	reel.innerHTML = "";
	for (let i = 0; i < 30; i++) {
		const genre = genreList[i % genreList.length];
		const item = document.createElement("div");
		item.className = "slot-item";
		item.textContent = genre.icon + " " + genre.name;
		item.dataset.genreId = genre.id;
		reel.appendChild(item);
	}
}

function spinReel(reel, finalGenre, duration) {
	const itemHeight = reel.querySelector(".slot-item").offsetHeight;
	const totalItems = reel.children.length;
	
	let targetIndex = -1;
	for (let i = totalItems - 5; i < totalItems; i++) {
		if (parseInt(reel.children[i].dataset.genreId) === finalGenre.id) {
			targetIndex = i;
			break;
		}
	}
	
	if (targetIndex === -1) {
		const item = document.createElement("div");
		item.className = "slot-item";
		item.textContent = finalGenre.icon + " " + finalGenre.name;
		item.dataset.genreId = finalGenre.id;
		reel.appendChild(item);
		targetIndex = reel.children.length - 1;
	}
	
	const targetOffset = -(targetIndex * itemHeight);
	
	reel.style.transition = "none";
	reel.style.transform = "translateY(0)";
	
	requestAnimationFrame(() => {
		reel.style.transition = `transform ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
		reel.style.transform = `translateY(${targetOffset}px)`;
	});
}

function showResult(selectedGenres, filteredMovies) {
	let bestMatch = null;
	let bestScore = -1;
	
	filteredMovies.forEach(movie => {
		let score = 0;
		selectedGenres.forEach(genreId => {
			if (movie.genres.includes(genreId)) {
				score++;
			}
		});
		if (score > bestScore || (score === bestScore && Math.random() > 0.5)) {
			bestScore = score;
			bestMatch = movie;
		}
	});
	
	if (!bestMatch) {
		bestMatch = filteredMovies[Math.floor(Math.random() * filteredMovies.length)];
	}
	
	displayMovie(bestMatch);
	createConfetti();
}

function displayMovie(movie) {
	document.getElementById("moviePoster").src = movie.poster;
	document.getElementById("resultTitle").textContent = movie.title;
	document.getElementById("resultYear").textContent = movie.year;
	document.getElementById("resultRating").textContent = movie.rating;
	document.getElementById("resultDescription").textContent = movie.description;
	
	const typeLabels = {
		movie: "Фильм",
		series: "Сериал",
		animation: "Анимация"
	};
	document.getElementById("resultType").textContent = typeLabels[movie.type];
	
	const genreNames = movie.genres.map(gId => {
		const genre = genres.find(g => g.id === gId);
		return genre ? genre.name : "";
	}).join(", ");
	document.getElementById("resultGenres").textContent = genreNames;
	
	resultSection.classList.add("show");
	
	setTimeout(() => {
		resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
	}, 100);
}

function createConfetti() {
	const colors = ["#ff6b35", "#f7c531", "#00d4ff", "#ff3366", "#33ff99"];
	for (let i = 0; i < 50; i++) {
		setTimeout(() => {
			const confetti = document.createElement("div");
			confetti.className = "confetti";
			confetti.style.left = Math.random() * 100 + "vw";
			confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
			confetti.style.animationDuration = (2 + Math.random() * 2) + "s";
			document.body.appendChild(confetti);
			setTimeout(() => confetti.remove(), 4000);
		}, i * 30);
	}
}

document.addEventListener("DOMContentLoaded", init);
