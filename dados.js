let dados = [
    {
        titulo: "Brasil",
        descricao: "O Brasil é o maior país da América do Sul e um dos mais diversos do mundo. Com uma costa extensa banhada pelo Oceano Atlântico, o país possui uma rica biodiversidade, abrigando a maior floresta tropical do planeta, a Amazônia. Sua cultura, resultado da miscigenação de diversas etnias, é vibrante e rica em tradições. O Brasil é conhecido mundialmente por sua música, futebol, carnaval e paisagens deslumbrantes, como as Cataratas do Iguaçu e o Rio de Janeiro.",
        moeda: "real",
        populacao: 213029244,
        idioma: "Português",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
        link: "https://pt.wikipedia.org/wiki/Brasil"
    },
    {
        titulo: "Argentina",
        descricao: "A Argentina é famosa por seus vinhos de alta qualidade, estepes patagônicas e a vibrante cidade de Buenos Aires. Com uma forte influência europeia, a Argentina possui uma cultura diversificada e uma forte identidade nacional. O tango, um estilo de dança e música, é um símbolo da cultura argentina. A Patagônia, com seus glaciares e paisagens montanhosas, é um destino popular para os amantes da natureza.",
        moeda: "Peso Argentino",
        populacao: 46044704,
        idioma: "Espanhol",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
        link: "https://pt.wikipedia.org/wiki/Argentina"
    },
    {
        titulo: "Bolívia",
        descricao: "A Bolívia é um país sem litoral na América do Sul, conhecido por seus Andes majestosos, o Lago Titicaca e as ruínas incaicas. A cultura boliviana é rica em tradições indígenas, e a língua espanhola coexiste com as línguas quechua e aimará. A capital, La Paz, é uma das cidades mais altas do mundo.",
        moeda: "Boliviano",
        populacao: 11672756,
        idioma: "Espanhol, Quechua, Aymara",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg",
        link: "https://pt.wikipedia.org/wiki/Bolívia"
    },
    {
        titulo: "Chile",
        descricao: "O Chile é um país estreito e longo na costa oeste da América do Sul, conhecido por seus Andes majestosos, deserto do Atacama e vinhedos no Vale Central. Com uma história marcada pela colonização espanhola, o Chile possui uma rica cultura e uma economia estável. A capital, Santiago, é uma cidade moderna e cosmopolita.",
        populacao: 19170335,
        idioma: "Espanhol",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
        link: "https://pt.wikipedia.org/wiki/Chile"
    },
    {
        titulo: "Colômbia",
        descricao: "A Colômbia é um país localizado na América do Sul, conhecido por sua rica biodiversidade, café de alta qualidade e a cidade de Cartagena, um Patrimônio Mundial da UNESCO. A cultura colombiana é uma mistura de influências indígenas, africanas e europeias, resultando em uma rica tradição musical e gastronômica.",
        populacao: 51024439,
        idioma: "Espanhol",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/2/24/Flag_of_Colombia.svg",
        link: "https://pt.wikipedia.org/wiki/Colômbia"
    },
    {
        titulo: "Equador",
        descricao: "O Equador é localizado na América do Sul e é conhecido por suas Ilhas Galápagos, um arquipélago que inspirou a teoria da evolução de Charles Darwin. O país também abriga a Amazônia equatoriana e os Andes, com paisagens montanhosas e vulcões ativos. A capital, Quito, é uma cidade colonial bem preservada.",
        populacao: 17713551,
        idioma: "Espanhol, Quechua",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Ecuador.svg",
        link: "https://pt.wikipedia.org/wiki/Equador"
    },
    {
        titulo: "Guiana",
        descricao: "A Guiana é um país na América do Sul, conhecido por suas florestas tropicais e sua rica biodiversidade. A cultura guianense é uma mistura de influências africanas, indianas e europeias. A capital, Georgetown, é uma cidade colonial com uma arquitetura única.",
        populacao: 786559,
        idioma: "Inglês",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Guyana.svg",
        link: "https://pt.wikipedia.org/wiki/Guiana"
    },
    {
        titulo: "Paraguai",
        descricao: "O Paraguai é um país sem litoral na América do Sul, conhecido por suas belas paisagens naturais e pela Guerra do Paraguai. A cultura paraguaia é uma mistura de influências indígenas, espanholas e guarani. A capital, Assunção, é uma cidade vibrante com uma rica história.",
        moeda: "Guarani",
        populacao: 7132994,
        idioma: "Espanhol, Guarani",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Paraguay.svg",
        link: "https://pt.wikipedia.org/wiki/Paraguai"
    },
    {
        titulo: "Peru",
        descricao: "O Peru é localizado na América do Sul e é famoso por suas ruínas incaicas, como Machu Picchu, e pela culinária diversificada. Com uma rica história pré-colombiana, o Peru possui uma cultura vibrante e paisagens montanhosas espetaculares. A capital, Lima, é uma cidade moderna e cosmopolita.",
        moeda: "Sol",
        populacao: 33191537,
        idioma: "Espanhol, Quechua",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Peru.svg",
        link: "https://pt.wikipedia.org/wiki/Peru"
    },
    {
        titulo: "Uruguai",
        descricao: "O Uruguai é um pequeno país na América do Sul, conhecido por suas praias, campos e capital, Montevidéu. Com uma forte influência europeia, o Uruguai possui uma cultura cosmopolita e uma economia estável. O tango é uma dança popular no Uruguai, assim como na Argentina.",
        populacao: 3461732,
        idioma: "Espanhol",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Uruguay.svg",
        link: "https://pt.wikipedia.org/wiki/Uruguai"
    },
    {
        titulo: "Venezuela",
        descricao: "A Venezuela é localizada na América do Sul e é conhecida por suas reservas de petróleo e o Salto Ángel, a maior queda d'água do mundo. A cultura venezuelana é uma mistura de influências indígenas, africanas e europeias. A capital, Caracas, é uma cidade vibrante e cosmopolita.",
        moeda: "Bolívar Soberano",
        populacao: 28439910,
        idioma: "Espanhol",
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_Venezuela.svg",
        link: "https://pt.wikipedia.org/wiki/Venezuela"
    }
];

