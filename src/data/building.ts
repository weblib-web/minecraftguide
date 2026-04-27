import type { PageData } from "./types";

export const buildingPages: PageData[] = [
  {
    slug: "maison-facile",
    keyword: "maison minecraft facile",
    title: "Maison Minecraft Facile : Tuto Construction",
    h1: "Comment Construire une Maison Facile dans Minecraft",
    metaDescription: "Apprenez a construire une maison facile dans Minecraft avec ce tuto etape par etape. Materiaux simples, design efficace et astuces pour debutants.",
    category: "building",
    volume: 1900,
    content: {
      intro: "Construire sa premiere maison dans Minecraft est une etape essentielle pour survivre aux premieres nuits. Une maison facile ne necessite que des materiaux basiques comme du bois et de la cobblestone. Voici un guide complet pour realiser une maison simple mais fonctionnelle en quelques minutes.",
      sections: [
        {
          heading: "Materiaux necessaires",
          content: "Pour une maison facile, vous aurez besoin d'environ 64 blocs de planches de bois (n'importe quelle essence), 32 blocs de cobblestone pour les fondations, 6 blocs de verre pour les fenetres, une porte en bois et quelques torches. Tous ces materiaux sont disponibles des les premieres minutes de jeu en coupant des arbres et en minant de la pierre."
        },
        {
          heading: "Construction de la structure",
          content: "Commencez par delimiter une zone de 7x7 blocs au sol avec de la cobblestone. Montez les murs sur 4 blocs de hauteur en utilisant les planches de bois. Laissez un espace de 1x2 blocs pour la porte d'entree et des espaces de 1x1 pour les fenetres. Remplissez les trous de fenetres avec du verre et placez votre porte."
        },
        {
          heading: "Le toit et les finitions",
          content: "Pour un toit simple, utilisez des escaliers en bois places en diagonale de chaque cote pour creer un toit en pente. Ajoutez des dalles de bois au sommet pour fermer le tout. A l'interieur, placez des torches sur les murs pour empecher les mobs de spawner. Installez un lit, un coffre, une table de craft et un four pour les equipements de base."
        },
        {
          heading: "Ameliorations possibles",
          content: "Une fois votre maison de base terminee, vous pouvez l'agrandir en ajoutant des pieces supplementaires. Creez un sous-sol pour le stockage, ajoutez un etage avec des escaliers en bois, ou construisez un jardin cloture autour. Remplacez progressivement les materiaux par de la pierre taillee ou des briques pour un aspect plus solide."
        }
      ],
      tips: [
        "Placez toujours des torches a l'interieur pour empecher les mobs de spawner",
        "Une taille de 7x7 est ideale pour debuter : assez grande pour l'essentiel, assez petite pour etre rapide",
        "Ajoutez un surplomb d'un bloc au-dessus de la porte pour empecher les araignees d'entrer",
        "Utilisez des dalles sur le toit plutot que des blocs pleins pour un meilleur rendu",
        "N'oubliez pas de placer un lit pour fixer votre point de reapparition"
      ],
      faq: [
        {
          question: "Quelle est la taille minimale pour une maison fonctionnelle ?",
          answer: "Une maison de 5x5 blocs interieurs est le minimum pour contenir un lit, un coffre, une table de craft et un four. Cependant, une taille de 7x7 est recommandee pour plus de confort."
        },
        {
          question: "Comment empecher les creepers d'exploser ma maison ?",
          answer: "Eclairez bien les alentours avec des torches dans un rayon de 24 blocs. Vous pouvez aussi construire une cloture ou un mur autour de votre maison et ajouter un chat apprivoise qui fait fuir les creepers."
        },
        {
          question: "Quel bois est le meilleur pour construire ?",
          answer: "Tous les bois ont les memes proprietes, le choix est purement esthetique. Le chene est le plus courant, le bouleau donne un aspect plus clair, et le chene noir offre un style plus sombre et elegant."
        }
      ],
      relatedSlugs: ["maison-simple", "maison-bois", "maison-survie", "plan-maison", "idees-maison"]
    }
  },
  {
    slug: "maison-moderne",
    keyword: "maison minecraft moderne",
    title: "Maison Moderne Minecraft : Tuto Construction",
    h1: "Comment Construire une Maison Moderne dans Minecraft",
    metaDescription: "Tuto complet pour construire une maison moderne dans Minecraft. Design contemporain avec quartz, verre et beton. Guide etape par etape.",
    category: "building",
    volume: 1900,
    content: {
      intro: "La maison moderne est l'un des styles de construction les plus populaires dans Minecraft grace a ses lignes epurees et son design contemporain. Elle utilise principalement du quartz, du beton blanc et de grandes baies vitrees. Ce guide vous montre comment realiser une maison moderne impressionnante.",
      sections: [
        {
          heading: "Materiaux et palette de couleurs",
          content: "Une maison moderne repose sur une palette de couleurs neutres. Utilisez du beton blanc ou des blocs de quartz pour les murs principaux, du beton gris ou noir pour les accents, et de grandes surfaces de verre. Les dalles de quartz servent pour les sols et les escaliers en quartz pour les details architecturaux. Le bois d'acacia apporte une touche chaleureuse en contraste."
        },
        {
          heading: "Structure et design en L",
          content: "Le plan en forme de L est typique des maisons modernes. Creez une base de 15x10 blocs pour la partie principale et une extension de 8x10 pour l'aile secondaire. Les murs font 5 blocs de hauteur pour un effet spacieux. Utilisez un toit plat en dalles plutot qu'un toit en pente. Integrez des fenetres du sol au plafond sur au moins un mur."
        },
        {
          heading: "Interieur minimaliste",
          content: "L'interieur moderne privilegie l'espace ouvert. Creez un grand salon-cuisine sans cloisons avec des comptoirs en dalles de quartz et des sieges en escaliers. Utilisez des portillons comme accoudoirs de canapes. Les tapis de couleur neutre et les cadres item definissent les espaces. Ajoutez des lanternes marines pour un eclairage moderne et discret."
        },
        {
          heading: "Exterieur et paysagisme",
          content: "Ajoutez une terrasse en dalles de bois d'acacia avec une piscine en blocs de prismarine ou de beton bleu clair. Placez des feuilles de bouleau comme haies basses et des bambous en decoration. Un chemin en dalles de pierre lisse mene a l'entree. L'eclairage exterieur utilise des End Rods ou des lanternes marines encastrees dans le sol."
        }
      ],
      tips: [
        "Utilisez du beton blanc plutot que de la laine pour eviter les risques d'incendie",
        "Les baies vitrees du sol au plafond sont la signature du style moderne",
        "Alternez beton blanc et gris pour creer du contraste sur les facades",
        "Les dalles en toit plat empechent les mobs de spawner dessus",
        "Ajoutez de la vegetation interieure avec des pots de fleurs pour humaniser l'espace"
      ],
      faq: [
        {
          question: "Comment obtenir du beton blanc en grande quantite ?",
          answer: "Craftez de la poudre de beton avec 4 blocs de sable, 4 blocs de gravier et 1 teinture blanche. Placez la poudre au contact de l'eau pour obtenir du beton solide. Automatisez le processus avec un systeme d'eau pour convertir rapidement de grandes quantites."
        },
        {
          question: "Quelles alternatives au quartz pour un style moderne ?",
          answer: "Le beton blanc, la pierre lisse, le calcaire poli et la diorite polie sont d'excellentes alternatives plus faciles a obtenir que le quartz du Nether. Les blocs de fer peuvent aussi servir pour des accents metalliques."
        },
        {
          question: "Comment faire des meubles modernes dans Minecraft ?",
          answer: "Utilisez des escaliers pour les chaises et canapes, des dalles sur des clotures pour les tables, des portillons comme accoudoirs, et des cadres item avec des objets pour la decoration murale. Les tetes de piston font d'excellents tabourets."
        }
      ],
      relatedSlugs: ["maison-luxe", "maison-facile", "deco-interieur", "idees-maison", "gratte-ciel"]
    }
  },
  {
    slug: "maison-bois",
    keyword: "maison en bois minecraft",
    title: "Maison en Bois Minecraft : Tuto Construction",
    h1: "Comment Construire une Maison en Bois dans Minecraft",
    metaDescription: "Construisez une belle maison en bois dans Minecraft. Tuto detaille avec differentes essences de bois, design rustique et astuces de construction.",
    category: "building",
    volume: 1600,
    content: {
      intro: "La maison en bois est un classique intemporel de Minecraft, parfaite pour s'integrer dans n'importe quel biome forestier. En melant differentes essences de bois, vous pouvez creer des constructions chaleureuses au charme rustique. Decouvrez comment tirer le meilleur parti de ce materiau abondant.",
      sections: [
        {
          heading: "Choisir les bonnes essences de bois",
          content: "Minecraft propose 9 essences de bois : chene, bouleau, sapin, acacia, chene noir, jungle, palissandre, cerisier et mangrove. Le chene est polyvalent, le sapin offre un look alpin, et le chene noir est ideal pour un style sombre et elegant. Combinez au moins deux essences pour un rendu plus riche : par exemple, des murs en planches de sapin avec des poutres en buches de chene noir."
        },
        {
          heading: "Construction des murs et de l'ossature",
          content: "Creez un cadre avec des buches aux angles et en haut des murs pour simuler une ossature bois. Remplissez entre les buches avec des planches d'une essence differente. Pour un effet colombage, alternez buches et planches en damier sur certains murs. La base de 9x9 blocs donne une bonne proportion pour une maison a deux etages."
        },
        {
          heading: "Toiture en bois",
          content: "Utilisez des escaliers en bois pour creer un toit a deux pentes (toit en A). Commencez par les bords et montez en escalier vers le centre. Ajoutez des dalles au sommet pour un rendu propre. Les buches posees horizontalement font d'excellentes poutres de toit visibles depuis l'interieur. Un debord de toit d'un bloc protege les murs et ajoute du detail."
        },
        {
          heading: "Details et decorations",
          content: "Ajoutez des volets en trappes de bois de chaque cote des fenetres. Des barrieres en bois forment de jolies balustrades pour un balcon. Placez des pots de fleurs sur les rebords de fenetres et des lanternes sous le surplomb du toit. Un chemin en terre battue mene a l'entree, bordee de buissons de feuilles de chene."
        }
      ],
      tips: [
        "Melangez au moins deux essences de bois pour eviter un aspect monotone",
        "Les buches posees horizontalement creent un excellent effet de poutre",
        "Ajoutez des trappes comme volets pour donner du relief aux facades",
        "Attention au feu : gardez la lave et les flammes loin de votre maison en bois",
        "Les composteurs font de bons tonneaux decoratifs devant une maison en bois"
      ],
      faq: [
        {
          question: "Comment proteger une maison en bois du feu ?",
          answer: "Le bois dans Minecraft ne prend feu que s'il est directement expose a des flammes ou de la lave. Evitez les cheminees ouvertes, gardez la lave a plus de 3 blocs du bois, et n'utilisez pas de buches du Nether qui brulent indefiniment a proximite."
        },
        {
          question: "Quelle est la plus belle combinaison de bois ?",
          answer: "Les combinaisons populaires incluent sapin + chene noir pour un style nordique, bouleau + chene pour un look classique, et cerisier + chene noir pour un contraste elegant. Le choix depend du biome et de l'ambiance souhaitee."
        },
        {
          question: "Comment faire un effet de poutres apparentes ?",
          answer: "Placez des buches horizontalement en les orientant avec un clic sur la face desiree. Elles simulent parfaitement des poutres. Utilisez-les au plafond, aux angles des murs et au-dessus des fenetres pour un effet colombage."
        }
      ],
      relatedSlugs: ["maison-facile", "maison-medievale", "maison-survie", "toit-maison", "maison-viking"]
    }
  },
  {
    slug: "maison-survie",
    keyword: "maison minecraft survie",
    title: "Maison Minecraft Survie : Tuto Construction",
    h1: "Construire une Maison de Survie dans Minecraft",
    metaDescription: "Guide complet pour construire la maison de survie parfaite dans Minecraft. Fonctionnelle, securisee et facile a construire avec des ressources basiques.",
    category: "building",
    volume: 1600,
    content: {
      intro: "En mode survie, votre maison doit etre a la fois fonctionnelle, securisee et construite avec des ressources facilement accessibles. Contrairement au mode creatif, chaque bloc compte et la securite prime sur l'esthetique. Voici comment construire une base de survie optimale des le premier jour.",
      sections: [
        {
          heading: "La maison du premier jour",
          content: "Votre priorite est d'avoir un abri avant la premiere nuit. Creusez 3 blocs dans le flanc d'une colline ou construisez un abri 5x5 en terre ou planches. Placez un lit, une table de craft et un four. L'essentiel est d'avoir un espace clos et eclaire. Vous pourrez ameliorer cette base les jours suivants."
        },
        {
          heading: "Evolution vers une base complete",
          content: "Apres quelques jours, agrandissez votre base a environ 11x11 blocs. Divisez l'espace en zones : stockage (coffres organises), atelier (tables de craft, fours, alambics), et espace de vie (lit, decoration). Creez un sous-sol pour le minage et une ferme de ble a l'exterieur cloturee. Les murs en cobblestone resistent aux explosions de creepers."
        },
        {
          heading: "Systemes de securite",
          content: "Entourez votre maison d'un eclairage intense (torches tous les 6 blocs) dans un rayon de 24 blocs pour empecher tout spawn de mobs hostiles. Construisez une cloture de 2 blocs de haut ou un mur avec un surplomb. Ajoutez une porte en fer avec un bouton pour empecher les zombies d'entrer. Un fosse d'eau autour du perimetre repousse les mobs."
        },
        {
          heading: "Fermes essentielles integrees",
          content: "Integrez une petite ferme de ble, carottes et pommes de terre a cote de votre maison avec un systeme d'irrigation. Construisez un enclos pour les animaux (vaches et moutons minimum). Un jardin de canne a sucre le long d'un cours d'eau fournit le papier necessaire pour les enchantements. Prevoyez un espace pour un potager de citrouilles et de pasteques."
        }
      ],
      tips: [
        "La cobblestone est le meilleur rapport effort/resistance pour les murs de survie",
        "Gardez toujours un lit dans votre maison pour fixer votre point de reapparition",
        "Creez un systeme de stockage organise avec des panneaux sur les coffres",
        "Une trappe au plafond permet d'acceder au toit pour observer les alentours",
        "Construisez votre premiere ferme de ble avant de penser a la decoration"
      ],
      faq: [
        {
          question: "Comment securiser ma maison contre les creepers ?",
          answer: "Les creepers n'explosent que s'ils sont proches de vous. Eclairez un large perimetre, construisez un mur ou une cloture, et ajoutez des chats apprivoises qui les font fuir. Les murs en cobblestone resistent mieux aux explosions que le bois."
        },
        {
          question: "Quel est le meilleur emplacement pour une base de survie ?",
          answer: "Pres d'un village pour le commerce, a cote d'un point d'eau pour les fermes, et si possible en plaine ou foret pour un acces facile aux ressources. Evitez les biomes extremes comme les deserts ou les montagnes pour debuter."
        },
        {
          question: "Quand dois-je passer de la cobblestone a de meilleurs materiaux ?",
          answer: "Une fois que vous avez du diamant et un enchantement Efficacite, vous pouvez commencer a utiliser de la pierre taillee ou des briques. Gardez la cobblestone pour les zones non visibles et utilisez les beaux materiaux pour les facades."
        }
      ],
      relatedSlugs: ["maison-facile", "maison-bois", "base-souterraine", "maison-simple", "guide-construction"]
    }
  },
  {
    slug: "maison-japonaise",
    keyword: "maison japonaise minecraft",
    title: "Maison Japonaise Minecraft : Tuto",
    h1: "Construire une Maison Japonaise dans Minecraft",
    metaDescription: "Tuto detaille pour construire une maison japonaise dans Minecraft. Architecture traditionnelle avec toit pagode, jardin zen et materiaux adaptes.",
    category: "building",
    volume: 1300,
    content: {
      intro: "L'architecture japonaise traditionnelle est l'un des styles les plus apprecies par les constructeurs Minecraft. Avec ses toits courbes en pagode, ses cloisons en papier et ses jardins zen, elle offre un defi creatif passionnant. Ce guide vous accompagne dans la construction d'une maison japonaise authentique.",
      sections: [
        {
          heading: "Materiaux et palette",
          content: "Utilisez des planches de bois de cerisier ou de bouleau pour les murs clairs, des buches de chene noir pour l'ossature sombre. Les escaliers en pierre sombre (deepslate) ou en blocs de nether forment le toit. Les trappes de bouleau simulent les panneaux shoji. Le bambou et les feuilles de cerisier completent la decoration exterieure."
        },
        {
          heading: "Structure et proportions",
          content: "La base fait 11x9 blocs, sureleve d'un bloc au-dessus du sol sur des pilotis en buches de chene noir. Les murs ne font que 3 blocs de haut pour un aspect bas et horizontal typiquement japonais. Creez un engawa (veranda) de 2 blocs de large autour de la maison avec des dalles de bois de cerisier. L'entree principale est face au sud."
        },
        {
          heading: "Le toit en pagode",
          content: "Le toit est l'element cle. Commencez par deborder de 2 blocs au-dela des murs, puis montez en pente douce avec des escaliers en deepslate. A mi-hauteur, ajoutez un retrait d'un bloc vers l'interieur pour creer la courbure typique du toit pagode. Terminez par une pointe avec des murs en pierre. Les dalles aux extremites simulent la courbure retroussee."
        },
        {
          heading: "Jardin zen et exterieur",
          content: "Creez un jardin zen avec du sable ou du gravier blanc ratisse en lignes (utilisez des rails caches sous des dalles de sable). Placez des blocs de mousse, des azalees et des bambous. Un petit pont en bois au-dessus d'un ruisseau et une lanterne en pierre (murs de cobblestone empiles) completent le tableau. Les cerisiers en fleurs sont parfaits pour l'ambiance."
        },
        {
          heading: "Interieur traditionnel",
          content: "L'interieur japonais est minimaliste. Utilisez des tapis blancs au sol pour simuler les tatamis. Les cloisons sont faites de trappes de bouleau formant des grilles. Un tokonoma (alcove decorative) avec un pot de fleur et un cadre item fait office de decoration principale. Ajoutez un irori (foyer central) avec un feu de camp et des escaliers autour."
        }
      ],
      tips: [
        "Le cerisier est le bois ideal pour une maison japonaise depuis sa mise a jour",
        "Les trappes de bouleau simulent parfaitement les panneaux coulissants shoji",
        "Gardez l'interieur minimaliste : moins c'est mieux dans le style japonais",
        "Surelever la maison d'un bloc donne un aspect authentique",
        "Utilisez des feux de camp caches pour simuler de la fumee sortant du toit"
      ],
      faq: [
        {
          question: "Comment faire la courbure du toit pagode ?",
          answer: "Utilisez des escaliers en deepslate ou en pierre sombre. Commencez large en bas, montez avec un retrait progressif, et aux extremites les plus basses, placez des escaliers inverses pour creer l'effet de courbure retroussee typique."
        },
        {
          question: "Quels blocs utiliser pour le jardin zen ?",
          answer: "Du sable blanc ou du beton blanc pour le sol, des blocs de mousse et d'azalee pour la vegetation, des blocs de pierre ou de cobblestone empiles pour les lanternes, et des bambous pour les clotures naturelles."
        },
        {
          question: "Peut-on construire une maison japonaise en survie ?",
          answer: "Oui, tous les materiaux sont accessibles en survie. Le plus long sera de trouver un biome cerisier pour le bois et de recolter assez de deepslate pour le toit. Prevoyez une expedition au Nether si vous voulez des blocs de Nether pour le toit."
        }
      ],
      relatedSlugs: ["temple-japonais", "jardin-japonais", "maison-medievale", "toit-maison", "maison-bois"]
    }
  },
  {
    slug: "maison-medievale",
    keyword: "maison medievale minecraft",
    title: "Maison Medievale Minecraft : Tuto",
    h1: "Construire une Maison Medievale dans Minecraft",
    metaDescription: "Tuto pour construire une maison medievale dans Minecraft. Style colombage, toit en pierre et details authentiques pour une construction moyenageuse.",
    category: "building",
    volume: 1000,
    content: {
      intro: "Le style medieval est le plus populaire parmi les constructeurs Minecraft, et pour cause : les materiaux du jeu s'y pretent naturellement. Les maisons a colombages, les toits en pierre et les facades asymetriques donnent un charme unique a vos villages. Apprenez a maitriser ce style incontournable.",
      sections: [
        {
          heading: "Materiaux et style colombage",
          content: "Le colombage repose sur un contraste entre l'ossature sombre (buches de chene noir) et le remplissage clair (planches de bouleau ou blocs de quartz). Utilisez de la deepslate ou des briques de pierre pour les fondations et le toit. Les vitres teintees de couleur neutre remplacent les carreaux medievaux. Les escaliers en cobblestone moussue ajoutent du caractere."
        },
        {
          heading: "Construction de la structure",
          content: "Commencez par une fondation en cobblestone de 9x7 blocs, depassant d'un bloc du sol. Montez les poutres d'angle en buches de chene noir sur 5 blocs. Le premier etage est legerement plus large que le rez-de-chaussee (encorbellement d'un bloc). Remplissez les espaces entre les poutres avec des planches de bouleau en diagonale pour le motif colombage."
        },
        {
          heading: "Toit et cheminee",
          content: "Utilisez des escaliers en deepslate ou en brique de pierre pour le toit a deux pentes. Commencez avec un debord de 2 blocs au-dela des murs. Ajoutez une cheminee en cobblestone ou en briques, depassant de 2 blocs au-dessus du toit. Un feu de camp place en haut de la cheminee simule la fumee. Ajoutez des lucarnes avec des trappes pour varier le toit."
        },
        {
          heading: "Details medievaux authentiques",
          content: "Placez des tonneaux et des composteurs comme decoration exterieure. Des bannieres aux fenetres ajoutent de la couleur. Un puits en cobblestone avec un seau (chaudron) au centre fait un excellent point focal. Les enseignes en bois avec du texte et les chaines pendant du toit ajoutent du realisme. Des buissons de baies sucrees forment des haies naturelles."
        }
      ],
      tips: [
        "L'encorbellement (etage superieur plus large) est la signature du style medieval",
        "Variez les textures : cobblestone, pierre taillee et cobblestone moussue ensemble",
        "Les imperfections rendent la construction plus authentique, evitez la symetrie parfaite",
        "Ajoutez des buissons et de la mousse pour un effet vieilli",
        "Les escaliers inverses creent d'excellents supports de fenetre"
      ],
      faq: [
        {
          question: "Comment realiser un motif colombage realiste ?",
          answer: "Placez les buches de chene noir en croix, en diagonale ou en forme de losange sur le mur. Remplissez les espaces vides avec des planches de bouleau ou du beton blanc. L'asymetrie entre les etages rend le motif plus authentique."
        },
        {
          question: "Comment donner un aspect vieilli a ma construction ?",
          answer: "Melangez cobblestone normale et cobblestone moussue, ajoutez de la mousse et du lierre (vignes). Utilisez des escaliers et dalles irregulierement pour simuler l'usure. Les blocs de feuilles places de maniere aleatoire simulent la vegetation envahissante."
        },
        {
          question: "Quelle taille pour un village medieval ?",
          answer: "Commencez par 5-6 maisons de tailles variees autour d'une place centrale avec un puits. Ajoutez un marche couvert, une taverne plus grande et eventuellement une eglise ou un donjon. La variete des tailles et formes rend le village credible."
        }
      ],
      relatedSlugs: ["chateau-medieval", "maison-viking", "maison-bois", "port-medieval", "petit-chateau"]
    }
  },
  {
    slug: "plan-maison",
    keyword: "plan maison minecraft",
    title: "Plan de Maison Minecraft : Idees et Tutos",
    h1: "Plans de Maison pour Minecraft",
    metaDescription: "Decouvrez les meilleurs plans de maison Minecraft avec dimensions, materiaux et etapes de construction. Plans pour tous niveaux et styles.",
    category: "building",
    volume: 880,
    content: {
      intro: "Avoir un plan avant de construire dans Minecraft permet d'eviter les erreurs et d'obtenir un resultat equilibre. Que vous soyez debutant ou expert, un bon plan definit les proportions, les materiaux et l'agencement de chaque piece. Voici les plans les plus populaires avec leurs dimensions exactes.",
      sections: [
        {
          heading: "Plan de base 9x9 pour debutants",
          content: "Le plan 9x9 est le point de depart ideal. Le rez-de-chaussee comprend une entree (2x3), un salon (4x5) et une cuisine (3x4). L'etage accueille deux chambres (4x4 chacune) et un couloir. Les murs font 4 blocs de haut par etage. Ce plan offre assez d'espace pour toutes les fonctionnalites essentielles sans etre trop ambitieux."
        },
        {
          heading: "Plan en L pour niveau intermediaire",
          content: "Le plan en L utilise une base de 12x8 blocs avec une extension de 6x8 perpendiculaire. La partie principale contient le salon et la cuisine en espace ouvert, l'extension abrite les chambres. Ce plan cree un angle naturel pour une cour interieure ou un jardin. Il donne un aspect plus elabore qu'un simple rectangle."
        },
        {
          heading: "Plan de manoir en U",
          content: "Le plan en U mesure 16x12 blocs avec deux ailes laterales de 6x6. Le corps central comprend le grand hall et la salle a manger. L'aile gauche contient les chambres et l'aile droite le stockage et l'atelier. La cour interieure en U est ideale pour un jardin decoratif ou une fontaine. Ce plan necessite plus de ressources mais donne un resultat majestueux."
        },
        {
          heading: "Optimiser l'espace interieur",
          content: "Prevoyez toujours des couloirs de 2 blocs de large minimum. Les escaliers occupent 1x4 blocs au sol pour monter d'un etage. Comptez 3x3 minimum pour une piece fonctionnelle et 5x5 pour une piece confortable. L'espace sous les escaliers peut servir de rangement avec des coffres. Chaque piece doit avoir au moins une source de lumiere."
        }
      ],
      tips: [
        "Dessinez votre plan au sol avec des blocs de laine coloree avant de monter les murs",
        "La regle des proportions : hauteur = largeur / 2 pour un rendu equilibre",
        "Prevoyez toujours un bloc de plus que necessaire, on peut toujours reduire",
        "Les couloirs doivent faire 2 blocs de large pour permettre de passer avec un coffre",
        "Testez votre plan en creatif avant de le construire en survie"
      ],
      faq: [
        {
          question: "Quelle est la meilleure taille pour une maison Minecraft ?",
          answer: "Pour une maison solo, 9x9 a 12x12 blocs offrent le meilleur equilibre. Pour un manoir multijoueur, visez 15x15 ou plus. La hauteur ideale des murs est de 4-5 blocs par etage."
        },
        {
          question: "Comment planifier un batiment a plusieurs etages ?",
          answer: "Prevoyez l'emplacement de l'escalier des le debut car il determine l'agencement de chaque etage. Chaque etage doit avoir 4 blocs de mur plus 1 bloc de plancher, soit 5 blocs de haut au total. L'escalier occupe 1x4 blocs au sol."
        },
        {
          question: "Faut-il toujours suivre un plan ?",
          answer: "Non, beaucoup de constructeurs experimentent en construisant. Mais un plan de base aide a garder de bonnes proportions. Meme un simple croquis sur papier peut eviter de devoir demolir et reconstruire une partie de votre maison."
        }
      ],
      relatedSlugs: ["maison-facile", "maison-moderne", "idees-maison", "guide-construction", "maison-simple"]
    }
  },
  {
    slug: "idees-maison",
    keyword: "idee maison minecraft",
    title: "Idees de Maison Minecraft : Inspiration",
    h1: "Idees de Maisons pour Minecraft",
    metaDescription: "Decouvrez plus de 20 idees de maisons Minecraft pour tous les styles. Moderne, medievale, japonaise, survie et plus. Inspiration pour vos constructions.",
    category: "building",
    volume: 880,
    content: {
      intro: "Vous manquez d'inspiration pour votre prochaine construction Minecraft ? Des maisons modernes aux chalets montagnards, en passant par les bases sous-marines, les possibilites sont infinies. Voici une collection d'idees classees par style et difficulte pour stimuler votre creativite.",
      sections: [
        {
          heading: "Maisons pour debutants",
          content: "Pour commencer, essayez une cabane en bois classique (7x7), une maison en A (forme triangulaire simple), ou un cottage en cobblestone avec un jardin. La maison semi-enterree est aussi excellente : creusez dans une colline et ajoutez une facade. Ces designs necessitent peu de materiaux et pardonnent les erreurs de proportions."
        },
        {
          heading: "Styles architecturaux populaires",
          content: "Le style medieval avec ses colombages est intemporel. Le style japonais avec ses toits en pagode offre un defi technique. Le moderne avec ses lignes droites et son verre est tres photogenique. Le style nordique/viking avec ses toits en herbe et ses poutres epaisses est original. Enfin, le style fantastique avec des tours impossibles et des ponts suspendus libere la creativite."
        },
        {
          heading: "Maisons atypiques et originales",
          content: "Pour sortir de l'ordinaire, construisez une maison dans un arbre geant, une base sous-marine en verre, une maison flottante dans le ciel avec des chaines, une maison champignon geante, ou une base volcanique dans un cratere de lave. Les maisons inversees (a l'envers) et les maisons dans une falaise sont aussi des projets impressionnants."
        },
        {
          heading: "Maisons thematiques par biome",
          content: "Adaptez votre construction au biome : igloo ameliore dans les neiges, maison en gres dans le desert avec un cactus garden, cabane sur pilotis dans le marais, maison en acacia dans la savane, et manoir sombre dans les forets de chenes noirs. Utiliser les materiaux locaux rend votre maison naturellement integree dans son environnement."
        }
      ],
      tips: [
        "Inspirez-vous du biome ou vous construisez pour choisir les materiaux",
        "Commencez petit et agrandissez au fur et a mesure, les extensions ajoutent du caractere",
        "Un jardin ou un exterieur amenage donne vie a n'importe quelle maison",
        "Photographiez vos constructions en utilisant les shaders pour les mettre en valeur"
      ],
      faq: [
        {
          question: "Quelle est la maison la plus facile a construire dans Minecraft ?",
          answer: "La maison en A (forme de tente triangulaire) est la plus simple : deux murs inclines se rejoignant au sommet, une facade et un fond. Elle ne necessite que des escaliers et des planches, et le resultat est toujours esthetique."
        },
        {
          question: "Comment rendre une maison simple plus interessante ?",
          answer: "Ajoutez de la profondeur aux facades avec des retraits et des avancees d'un bloc. Variez les materiaux, ajoutez des fenetres de tailles differentes, et travaillez l'exterieur avec un jardin, un chemin et de l'eclairage."
        },
        {
          question: "Quel style de maison est le plus impressionnant ?",
          answer: "Les constructions les plus impressionnantes combinent plusieurs styles ou integrent des elements naturels. Un chateau sur une falaise, une maison dans un arbre geant, ou une base sous-marine en verre sont souvent les plus spectaculaires."
        }
      ],
      relatedSlugs: ["maison-facile", "maison-moderne", "maison-medievale", "idees-construction", "plan-maison"]
    }
  },
  {
    slug: "temple-japonais",
    keyword: "temple japonais minecraft",
    title: "Temple Japonais Minecraft : Tuto Construction",
    h1: "Construire un Temple Japonais dans Minecraft",
    metaDescription: "Tuto complet pour construire un temple japonais dans Minecraft. Pagode a plusieurs etages, portail torii et jardin zen avec instructions detaillees.",
    category: "building",
    volume: 880,
    content: {
      intro: "Le temple japonais est un projet ambitieux qui recompense les constructeurs patients par un resultat spectaculaire. Avec ses multiples etages en pagode, son portail torii rouge et son jardin zen, il constitue un veritable point focal dans n'importe quel monde Minecraft. Suivez ce guide pour une construction authentique.",
      sections: [
        {
          heading: "Le portail torii",
          content: "Commencez par construire un torii a l'entree du temple. Utilisez du beton rouge ou de la laine rouge pour les poteaux et les traverses. Deux piliers de 5 blocs de haut, relies par deux traverses horizontales (la superieure deborde d'un bloc de chaque cote). Ajoutez des dalles rouges au-dessus pour la courbure. Un chemin en dalles de pierre mene du torii au temple."
        },
        {
          heading: "La pagode a trois niveaux",
          content: "Chaque niveau est plus petit que le precedent. Le premier fait 13x13 avec des murs de 4 blocs, le deuxieme 9x9, et le troisieme 5x5. Chaque niveau a un toit debordant de 3 blocs, fait d'escaliers en deepslate sombre. Les murs utilisent des planches de bouleau ou cerisier avec une ossature en chene noir. Un pilier central en buches monte sur toute la hauteur."
        },
        {
          heading: "Les details architecturaux",
          content: "Chaque toit se termine par des extremites retroussees faites d'escaliers inverses. Des lanternes pendent sous les debords de toit avec des chaines. Les coins des toits portent des cloches (cloche du jeu). Les fenetres sont des grilles de trappes de bouleau. Ajoutez des bannieres rouges descendant du toit pour la couleur. Des piliers rouges soutiennent les avant-toits."
        },
        {
          heading: "Interieur sacre et jardin",
          content: "L'interieur du rez-de-chaussee contient un autel central fait de dalles dorees et d'un bloc de lumiere ou une lanterne. Des tapis rouges menent a l'autel. Le jardin entoure le temple avec des cerisiers, des bambous, un petit lac avec un pont courbe en bois, et des lanternes en pierre (piliers de cobblestone surmontes de dalles)."
        }
      ],
      tips: [
        "Construisez du haut vers le bas pour les toits de pagode : c'est plus facile pour les proportions",
        "Le beton rouge ne brule pas contrairement a la laine, preferez-le pour le torii",
        "Les chaines et lanternes ajoutent beaucoup de detail sous les debords de toit",
        "Surelever l'ensemble sur une plateforme de 2 blocs renforce l'aspect sacre"
      ],
      faq: [
        {
          question: "Combien de temps faut-il pour construire un temple japonais ?",
          answer: "En mode creatif, comptez 2 a 4 heures pour un temple a 3 niveaux avec jardin. En survie, la collecte des materiaux peut prendre plusieurs jours supplementaires, surtout pour la deepslate et le beton."
        },
        {
          question: "Quels blocs utiliser pour le toit de pagode ?",
          answer: "Les escaliers en deepslate taillee donnent le meilleur rendu sombre. Les escaliers en blocs de Nether ou en prismarine sombre sont de bonnes alternatives. Evitez les escaliers en bois qui ont un aspect trop clair pour un toit de temple."
        },
        {
          question: "Comment faire un pont courbe japonais ?",
          answer: "Placez des dalles de bois a differentes hauteurs en arc de cercle : commencez par des blocs pleins, puis des dalles superieures, puis des dalles inferieures de l'autre cote. Les barrieres de chaque cote servent de rambarde. Le pont doit enjamber un petit cours d'eau."
        }
      ],
      relatedSlugs: ["maison-japonaise", "jardin-japonais", "chateau-medieval", "pont", "toit-maison"]
    }
  },
  {
    slug: "maison-luxe",
    keyword: "maison de luxe minecraft",
    title: "Maison de Luxe Minecraft : Tuto",
    h1: "Construire une Maison de Luxe dans Minecraft",
    metaDescription: "Construisez une maison de luxe impressionnante dans Minecraft. Piscine, grand jardin, interieur somptueux et materiaux nobles. Tuto detaille.",
    category: "building",
    volume: 320,
    content: {
      intro: "Une maison de luxe dans Minecraft combine architecture grandiose, materiaux nobles et amenagements spectaculaires. Piscine, garage, home cinema et jardin paysager : ce projet ambitieux transforme votre monde en veritable residence de reve. Voici comment creer une villa luxueuse digne des plus grandes constructions.",
      sections: [
        {
          heading: "Materiaux nobles et palette",
          content: "Utilisez du quartz poli pour les murs principaux, du beton blanc pour les surfaces lisses et du bois d'acacia pour les accents chaleureux. Les sols en dalles de quartz ou de prismarine apportent un aspect haut de gamme. Le verre teinté gris cree des fenetres sophistiquees. Ajoutez des touches d'or avec des blocs d'or ou des lanternes dorees."
        },
        {
          heading: "Architecture exterieure grandiose",
          content: "La villa s'etend sur 20x25 blocs minimum avec deux ailes et un hall d'entree monumental. Des colonnes en quartz pilier encadrent l'entree avec un porche double hauteur. La piscine a debordement s'obtient avec un systeme d'eau en gradins de verre bleu. Un garage ouvert avec des escaliers en fer simule des voitures. Ajoutez un eclairage paysager avec des End Rods."
        },
        {
          heading: "Interieur somptueux",
          content: "Le hall d'entree fait double hauteur avec un lustre en chaines et lanternes. Le salon dispose d'une cheminee en pierres de taille avec un feu de camp encastre. La cuisine utilise des fours, des chaudrons et des alambics comme electromenager decoratif. Un escalier en spirale en dalles de quartz relie les etages. Chaque chambre a une salle de bain attenante."
        },
        {
          heading: "Amenagements de luxe",
          content: "Creez un home cinema avec des escaliers en gradin, un ecran en laine noire et des blocs de lumiere tamises. Une salle de jeux avec un billard (tapis vert sur table) et un bar. Une terrasse sur le toit avec un jacuzzi (chaudrons avec de l'eau) et vue panoramique. Un sous-sol avec cave a vin (tonneaux) et salle d'entrainement."
        }
      ],
      tips: [
        "Les colonnes en quartz pilier donnent instantanement un aspect luxueux",
        "Utilisez des cadres item invisibles pour exposer des objets decoratifs",
        "Un systeme de redstone peut automatiser l'eclairage pour un effet high-tech",
        "Les bannières personnalisees font d'excellents tableaux decoratifs",
        "L'espace exterieur est aussi important que l'interieur pour une villa de luxe"
      ],
      faq: [
        {
          question: "Combien de materiaux faut-il pour une maison de luxe ?",
          answer: "Prevoyez environ 1000-1500 blocs de quartz ou beton blanc, 200-300 blocs de verre, et 300-500 blocs de materiaux d'accent. En survie, c'est un projet de longue haleine necessitant beaucoup de minage au Nether pour le quartz."
        },
        {
          question: "Comment creer un eclairage luxueux ?",
          answer: "Combinez des lanternes marines encastrees dans le sol, des End Rods comme lampadaires, des lustres en chaines et lanternes, et des blocs de lumiere caches derriere des dalles. Evitez les torches visibles qui cassent l'ambiance moderne."
        }
      ],
      relatedSlugs: ["maison-moderne", "deco-interieur", "salle-de-bain", "gratte-ciel", "idees-maison"]
    }
  },
  {
    slug: "maison-arbre",
    keyword: "maison dans les arbres minecraft",
    title: "Maison dans les Arbres Minecraft : Tuto",
    h1: "Construire une Maison dans les Arbres Minecraft",
    metaDescription: "Tuto pour construire une maison dans les arbres dans Minecraft. Structure en hauteur, ponts suspendus et integration naturelle avec la foret.",
    category: "building",
    volume: 320,
    content: {
      intro: "Construire une maison dans les arbres est l'un des projets les plus magiques de Minecraft. Perchee dans la canopee, reliee par des ponts de cordes et entouree de feuillage, elle offre un refuge unique. Ce guide vous apprend a creer une base arboricole fonctionnelle et esthetique.",
      sections: [
        {
          heading: "Creer l'arbre geant",
          content: "A moins d'utiliser un arbre de jungle geant naturel, vous devrez construire votre propre arbre. Empilez des buches de chene sur 15-20 blocs de haut, en ajoutant des branches en diagonale (buches horizontales) a partir du bloc 10. Le tronc s'elargit a la base avec des escaliers en buche. Couvrez les branches de feuilles en formes irregulieres pour un aspect naturel."
        },
        {
          heading: "La plateforme et la structure",
          content: "Construisez une plateforme en planches de bois autour du tronc a environ 12 blocs de hauteur. La plateforme fait 9x9 blocs, soutenue par des poteaux en buche descendant vers le sol ou par des supports en escaliers. La maison elle-meme fait 7x7 sur la plateforme, avec des murs de 3 blocs en planches et un toit en dalles de bois."
        },
        {
          heading: "Acces et ponts suspendus",
          content: "L'acces principal peut etre une echelle en vignes le long du tronc, un escalier en colimaçon autour du tronc (dalles en spirale), ou un ascenseur a eau dans le tronc creux. Pour relier plusieurs arbres, creez des ponts suspendus avec des dalles de bois et des barrieres comme garde-corps. Des chaines attachees a des buches simulent les cables."
        },
        {
          heading: "Integration naturelle",
          content: "La cle est que la maison semble faire partie de l'arbre. Laissez les branches traverser les murs et le toit. Ajoutez des vignes et du lierre sur les facades. Des feuilles placees strategiquement sur le toit et les rebords brouillent la frontiere entre maison et arbre. Des lanternes accrochees aux branches eclairent sans denaturer."
        }
      ],
      tips: [
        "Les arbres de jungle geants sont les meilleurs supports naturels pour une maison",
        "Un ascenseur a eau dans le tronc creux est le moyen le plus pratique de monter",
        "Les vignes servent a la fois de decoration et d'echelle de secours",
        "Ajoutez plusieurs plateformes a differentes hauteurs pour un village arboricole"
      ],
      faq: [
        {
          question: "Comment empecher les mobs de monter dans la maison ?",
          answer: "Retirez les echelles a partir de 3 blocs de hauteur et utilisez des trappes que seul le joueur peut ouvrir. Un ascenseur a eau avec une trappe en haut est encore plus securise. Les mobs ne peuvent pas grimper aux vignes si vous les coupez a mi-hauteur."
        },
        {
          question: "Quel est le meilleur biome pour une maison dans les arbres ?",
          answer: "La jungle est ideale grace a ses arbres geants naturels. La foret de chenes noirs et la taiga geante offrent aussi de grands arbres. En plaine, vous devrez construire votre propre arbre geant."
        }
      ],
      relatedSlugs: ["cabane-arbres", "maison-bois", "maison-facile", "maison-survie", "pont"]
    }
  },
  {
    slug: "maison-simple",
    keyword: "maison minecraft simple",
    title: "Maison Simple Minecraft : Tuto Debutant",
    h1: "Construire une Maison Simple dans Minecraft",
    metaDescription: "Le guide ultime pour construire une maison simple dans Minecraft. Parfait pour les debutants avec des materiaux basiques et des instructions claires.",
    category: "building",
    volume: 320,
    content: {
      intro: "Une maison simple dans Minecraft est le point de depart parfait pour tout joueur debutant. Avec seulement quelques materiaux de base, vous pouvez creer un abri fonctionnel et agreable en moins de 10 minutes. Ce guide minimaliste vous donne toutes les etapes pour votre premiere vraie maison.",
      sections: [
        {
          heading: "Les materiaux minimaux",
          content: "Vous n'avez besoin que de 4 materiaux : environ 80 planches de bois (2 types differents pour plus de variete), 12 blocs de verre, 1 porte en bois et 8 torches. Coupez 3-4 arbres pour avoir assez de bois. Si vous avez un four, quelques blocs de cobblestone ou de pierre ajouteront du detail aux fondations."
        },
        {
          heading: "Construction en 5 etapes",
          content: "Etape 1 : posez un rectangle de 7x5 blocs au sol. Etape 2 : montez les murs sur 4 blocs de hauteur. Etape 3 : laissez un trou de 1x2 pour la porte et 3 trous de 1x1 pour les fenetres. Etape 4 : placez le toit avec des dalles en pente. Etape 5 : mettez la porte, le verre et les torches. Votre maison est prete."
        },
        {
          heading: "Amenagement interieur essentiel",
          content: "Placez le lit dans un coin, la table de craft et le four de l'autre cote, et un coffre contre le mur du fond. C'est le strict minimum pour fonctionner en survie. Si l'espace le permet, ajoutez un deuxieme coffre et un alambic quand vous progresserez dans le jeu."
        },
        {
          heading: "Ameliorations graduelles",
          content: "Au fil du temps, ajoutez un porche avec des barrieres, des volets en trappes, un petit jardin cloture, et ameliorez les materiaux. Remplacez les murs en un seul type de bois par un mix bois/pierre. Ajoutez une cheminee en cobblestone avec un feu de camp. Ces petites touches transforment une boite en une vraie maison."
        }
      ],
      tips: [
        "Un rectangle est plus joli qu'un carre parfait pour une maison simple",
        "Deux types de bois differents suffisent a briser la monotonie",
        "La premiere chose a placer dans la maison est le lit pour fixer le spawn",
        "Meme une maison simple beneficie d'un surplomb de toit d'un bloc"
      ],
      faq: [
        {
          question: "Combien de temps faut-il pour construire une maison simple ?",
          answer: "En survie, 5 a 10 minutes suffisent si vous avez deja coupe le bois. La collecte des materiaux prend environ 5 minutes supplementaires. C'est faisable avant la premiere nuit si vous etes efficace."
        },
        {
          question: "Comment passer d'une maison simple a quelque chose de mieux ?",
          answer: "Agrandissez progressivement : ajoutez une extension pour le stockage, puis un etage, puis un sous-sol. Remplacez les materiaux basiques par de la pierre taillee ou des briques au fur et a mesure de votre progression."
        },
        {
          question: "Une maison simple est-elle securisee ?",
          answer: "Oui, du moment qu'elle est completement fermee et eclairee. Verifiez qu'il n'y a aucun trou d'un bloc dans les murs ou le toit, et placez des torches pour que le niveau de lumiere interieur soit suffisant pour empecher le spawn de mobs."
        }
      ],
      relatedSlugs: ["maison-facile", "maison-survie", "maison-bois", "plan-maison", "guide-construction"]
    }
  },
  {
    slug: "maison-viking",
    keyword: "maison viking minecraft",
    title: "Maison Viking Minecraft : Tuto",
    h1: "Construire une Maison Viking dans Minecraft",
    metaDescription: "Construisez une maison viking authentique dans Minecraft. Longere nordique avec toit en herbe, charpente apparente et details scandinaves.",
    category: "building",
    volume: 210,
    content: {
      intro: "Le style viking dans Minecraft s'inspire des longeres scandinaves avec leurs toits recouverts d'herbe, leurs charpentes massives et leur atmosphere chaleureuse. C'est un style parfait pour les biomes enneiges ou de taiga. Decouvrez comment recreer l'ambiance d'un village nordique authentique.",
      sections: [
        {
          heading: "La longere viking",
          content: "La maison viking typique est une longere rectangulaire de 15x7 blocs, plus longue que large. Les murs font 4 blocs de haut en planches de sapin avec une ossature en buches de sapin. La base est en cobblestone sur 1-2 blocs de haut pour simuler des fondations en pierre. Les extremites du batiment sont arrondies avec des escaliers."
        },
        {
          heading: "Toit en herbe et charpente",
          content: "Le toit viking est sa signature : utilisez des escaliers en sapin pour la pente, recouverts de blocs d'herbe (obtenus avec Toucher de Soie). Alternativement, des blocs de mousse donnent un resultat similaire. La charpente interieure utilise des buches horizontales comme poutres transversales tous les 3 blocs. Des barrieres en bois servent de supports supplementaires."
        },
        {
          heading: "Interieur nordique",
          content: "Le centre de la maison abrite un grand foyer (feu de camp entoure de dalles de pierre). De chaque cote, des bancs en escaliers de bois longent les murs. Des tonneaux et des coffres bordent les cloisons. Les tetes de mob sur les murs simulent des trophees de chasse. Des bannieres aux motifs nordiques decorent l'espace. L'eclairage vient du foyer et de quelques lanternes."
        },
        {
          heading: "Exterieur et village viking",
          content: "Entourez la longere d'une palissade en buches pointues (clotures). Un embarcadere avec un drakkar (bateau allonge en planches de sapin) complete le village. Ajoutez un rack de sechage pour le poisson (barrieres avec des cadres item) et un forgeron exterieur avec une enclume sous un auvent. Des torches sur des poteaux eclairent le chemin."
        }
      ],
      tips: [
        "Le sapin est le bois ideal pour les constructions vikings : couleur sombre et texture rustique",
        "Les blocs de mousse sont plus faciles a obtenir que les blocs d'herbe pour le toit",
        "Un foyer central avec de la fumee (feu de camp) est essentiel au style viking",
        "Les bannieres a motifs en chevron ou en losange evoquent les motifs nordiques"
      ],
      faq: [
        {
          question: "Comment faire un toit en herbe sans Toucher de Soie ?",
          answer: "Utilisez des blocs de mousse (obtenus avec de la farine d'os sur de la cobblestone pres de mousse existante) comme alternative. Les feuilles d'azalee posees sur des dalles de terre donnent aussi un effet vegetal."
        },
        {
          question: "Comment construire un drakkar viking ?",
          answer: "Creez une coque allongee de 15x5 blocs en planches de sapin avec des escaliers pour les courbes de proue et de poupe. Ajoutez un mat central en buche avec une banniere comme voile. Des boucliers decoratifs (bannieres) bordent les flancs du navire."
        }
      ],
      relatedSlugs: ["maison-medievale", "maison-bois", "chateau-fort", "port-medieval", "maison-montagne"]
    }
  },
  {
    slug: "maison-hobbit",
    keyword: "maison hobbit minecraft",
    title: "Maison Hobbit Minecraft : Tuto",
    h1: "Construire une Maison Hobbit dans Minecraft",
    metaDescription: "Construisez un terrier de hobbit dans Minecraft. Porte ronde, colline verdoyante et interieur douillet. Tuto inspire du Seigneur des Anneaux.",
    category: "building",
    volume: 170,
    content: {
      intro: "Inspiree de la Comte du Seigneur des Anneaux, la maison hobbit est un terrier douillet creuse dans une colline verdoyante. Avec sa porte ronde emblematique et son interieur chaleureux, c'est un projet unique qui sort des constructions classiques. Voici comment recreer Cul-de-Sac dans Minecraft.",
      sections: [
        {
          heading: "Construire la colline",
          content: "Si vous n'avez pas de colline naturelle, creez-en une avec des blocs de terre sur une base de 15x15 blocs, montant progressivement jusqu'a 8 blocs de haut. Recouvrez la terre de blocs d'herbe (Toucher de Soie) ou attendez que l'herbe se propage naturellement. Plantez des fleurs et de l'herbe haute sur le dessus pour un aspect naturel."
        },
        {
          heading: "La facade et la porte ronde",
          content: "Creusez la facade dans la colline pour creer un mur vertical. La porte ronde est simulee avec un cercle en planches : un arc de 5x5 blocs avec des escaliers et des dalles pour arrondir les coins. La porte elle-meme est une porte en bois standard encadree par cet arc. Ajoutez des fenetres rondes de chaque cote avec la meme technique en plus petit (3x3)."
        },
        {
          heading: "Interieur douillet",
          content: "Creusez l'interieur dans la colline en formant des pieces arrondies (evitez les angles droits). Le salon central dispose d'une cheminee en briques avec un feu de camp. Utilisez des tapis de couleurs chaudes au sol, des etageres en escaliers, et des lanternes pour un eclairage doux. La cuisine utilise des fours, des chaudrons et des barils. Les poutres au plafond sont en buches de chene."
        },
        {
          heading: "Le jardin de la Comte",
          content: "Devant l'entree, creez un jardin cloture avec une barriere en bois de chene. Plantez des carottes, des pommes de terre et des fleurs variees. Un chemin en gravier mene a la porte. Une boite aux lettres (panneau sur un poteau) et un banc (escaliers avec panneaux lateraux) completent l'ambiance bucolique. Un arbre festif (chene avec des lanternes) orne le jardin."
        }
      ],
      tips: [
        "Les angles arrondis a l'interieur sont essentiels : utilisez des escaliers et dalles pour courber les murs",
        "L'eclairage doit etre chaud : lanternes et feux de camp plutot que torches",
        "Construisez plusieurs trous de hobbit dans la meme colline pour un village",
        "Les materiaux en bois de chene sont les plus fideles au style hobbit"
      ],
      faq: [
        {
          question: "Comment faire une vraie porte ronde ?",
          answer: "Minecraft ne permet pas de vrais cercles, mais un arc de 5 blocs de large et 5 de haut avec des escaliers aux 4 coins et des dalles au sommet donne une illusion convaincante de porte circulaire. Utilisez des planches de chene pour le cadre."
        },
        {
          question: "Comment eviter que l'interieur soit sombre ?",
          answer: "Placez des lanternes cachees derriere des escaliers, des blocs de lumiere dans le plafond en terre, et un feu de camp dans la cheminee. Les fenetres rondes sur la facade et des puits de lumiere creuses dans la colline apportent aussi de la luminosite."
        }
      ],
      relatedSlugs: ["maison-grotte", "maison-montagne", "base-souterraine", "maison-bois", "maison-champignon"]
    }
  },
  {
    slug: "maison-pilotis",
    keyword: "maison pilotis minecraft",
    title: "Maison sur Pilotis Minecraft : Tuto",
    h1: "Construire une Maison sur Pilotis dans Minecraft",
    metaDescription: "Tuto pour construire une maison sur pilotis dans Minecraft. Ideale pour les marais, les lacs et les bords de mer avec un design sureleve elegant.",
    category: "building",
    volume: 210,
    content: {
      intro: "La maison sur pilotis est une construction elevee au-dessus de l'eau ou du sol, soutenue par des poteaux. Parfaite pour les biomes marecageux, les lacs ou les bords de mer, elle offre un style unique et une protection naturelle contre certains mobs. Decouvrez comment realiser cette construction originale.",
      sections: [
        {
          heading: "Les pilotis et fondations",
          content: "Plantez des poteaux en buches ou en barrieres dans l'eau ou le sol mou, espaces de 3-4 blocs. Les pilotis doivent monter au moins 4 blocs au-dessus de la surface de l'eau. Utilisez des buches de mangrove ou de chene noir pour un aspect naturel dans les marais. Renforcez les coins avec des pilotis doubles et ajoutez des supports diagonaux en escaliers."
        },
        {
          heading: "La plateforme et la structure",
          content: "Reliez le sommet des pilotis avec des poutres en buches horizontales, puis posez un plancher en dalles de bois. La plateforme deborde de 1 bloc au-dela des murs pour creer un balcon-terrasse. La maison elle-meme fait 9x7 blocs avec des murs de 3-4 blocs de haut. Ajoutez une terrasse ouverte de 3 blocs de large sur un cote avec vue sur l'eau."
        },
        {
          heading: "Acces et passerelles",
          content: "L'acces se fait par un escalier en bois depuis la berge ou un ponton en dalles de bois posees sur des barrieres. Pour une version plus elaboree, un quai avec des bateaux amarres ajoute du caractere. Des echelles sur les pilotis offrent un acces rapide depuis l'eau. Une passerelle couverte peut relier la maison a la terre ferme."
        },
        {
          heading: "Details et ambiance marine",
          content: "Ajoutez des filets de peche simules avec des fils et des toiles d'araignee tendus entre les pilotis. Des lanternes marines eclairent le dessous de la maison en se refletant dans l'eau. Des barils et des coffres sur la terrasse evoquent un style portuaire. Des trappes ouvertes au sol permettent de pecher directement depuis l'interieur."
        }
      ],
      tips: [
        "Les barrieres empilees font des pilotis plus fins et elegants que les buches",
        "Ajoutez des algues et des nenuphars autour des pilotis pour l'ambiance aquatique",
        "Les lanternes marines sous la plateforme creent un eclairage magique la nuit",
        "Une trappe de peche dans le sol est a la fois pratique et decorative"
      ],
      faq: [
        {
          question: "Quel biome est le meilleur pour une maison sur pilotis ?",
          answer: "Le marais avec ses mangroves est ideal car les materiaux sont sur place. Les plages et les rivages de lacs sont aussi parfaits. Le biome champignon offre une securite supplementaire car aucun mob hostile n'y spawn."
        },
        {
          question: "Comment empecher les mobs de monter sur les pilotis ?",
          answer: "Les barrieres comme pilotis empechent les mobs de grimper. Si vous utilisez des buches, placez des dalles inversees en haut de chaque pilotis. Les mobs aquatiques (noyes) ne peuvent pas sortir de l'eau facilement si la plateforme est assez haute."
        }
      ],
      relatedSlugs: ["maison-eau", "maison-bois", "pont", "port-medieval", "maison-survie"]
    }
  },
  {
    slug: "maison-champignon",
    keyword: "maison champignon minecraft",
    title: "Maison Champignon Minecraft : Tuto",
    h1: "Construire une Maison Champignon dans Minecraft",
    metaDescription: "Tuto pour construire une maison champignon geante dans Minecraft. Style feerique avec champignon rouge ou brun, interieur amenage et details magiques.",
    category: "building",
    volume: 210,
    content: {
      intro: "La maison champignon est l'une des constructions les plus originales et feeriques de Minecraft. Inspiree des contes de fees, elle utilise des blocs de champignon geant pour creer un abri enchante. Facile a personnaliser et amusante a construire, elle convient a tous les niveaux de joueurs.",
      sections: [
        {
          heading: "Faire pousser un champignon geant",
          content: "Plantez un champignon rouge ou brun sur un bloc de mycelium, de podzol ou de terre dans un endroit sombre (ou utilisez de la farine d'os dessus). Le champignon a besoin d'un espace libre de 7x7 blocs et 8 blocs de hauteur. La farine d'os fait pousser instantanement un champignon geant. Les champignons rouges ont un chapeau plus grand, ideaux pour une maison."
        },
        {
          heading: "Evider et amenager l'interieur",
          content: "Creusez l'interieur du pied du champignon pour creer le rez-de-chaussee. Le chapeau se creuse pour devenir l'etage superieur avec vue panoramique. Gardez les bords du chapeau intacts et percez des fenetres en remplacant les blocs de champignon par du verre. Le pied fait environ 4x4 blocs interieurs et le chapeau offre un espace circulaire de 5x5."
        },
        {
          heading: "Decoration feerique",
          content: "Entourez la base de fleurs variees et de champignons plus petits. Des guirlandes de lanternes descendent du bord du chapeau. Utilisez des tapis rouges et des escaliers en bois pour l'interieur. Des etageres en dalles avec des pots de fleurs et des livres meublent les murs courbes. Un escalier en colimaçon en dalles de bois relie les deux niveaux."
        },
        {
          heading: "Village de champignons",
          content: "Construisez plusieurs champignons de tailles differentes pour creer un village feerique. Reliez-les par des passerelles en bois entre les chapeaux. Ajoutez des champignons decoratifs plus petits en blocs de laine rouge avec des points blancs. Un chemin sinueux en terre battue relie les habitations. Des lucioles (particules de redstone ou lanternes) eclairent le village."
        }
      ],
      tips: [
        "La farine d'os sur un petit champignon le transforme instantanement en geant",
        "Les blocs de champignon rouge ont une texture tachetee parfaite pour les murs",
        "Placez le champignon sur du mycelium ou du podzol pour qu'il pousse naturellement",
        "Les champignons geants ne brulent pas, contrairement au bois"
      ],
      faq: [
        {
          question: "Ou trouver du mycelium pour faire pousser des champignons ?",
          answer: "Le mycelium se trouve dans le biome ile aux champignons (Mushroom Island). Vous pouvez le recolter avec Toucher de Soie. Alternativement, le podzol (dans les mega taigas) ou la terre dans un endroit sombre fonctionnent aussi pour planter des champignons."
        },
        {
          question: "Peut-on controler la taille du champignon geant ?",
          answer: "La taille est aleatoire lors de l'utilisation de la farine d'os, mais elle depend de l'espace disponible. Limitez la hauteur avec un plafond de blocs pour forcer un champignon plus petit. Pour un plus grand, assurez-vous d'avoir beaucoup d'espace libre."
        }
      ],
      relatedSlugs: ["maison-hobbit", "maison-arbre", "maison-facile", "cabane-arbres", "idees-construction"]
    }
  },
  {
    slug: "maison-montagne",
    keyword: "maison dans la montagne minecraft",
    title: "Maison dans la Montagne Minecraft : Tuto",
    h1: "Construire une Maison dans la Montagne Minecraft",
    metaDescription: "Tuto pour construire une maison dans la montagne dans Minecraft. Base creusee dans la roche avec facade, balcon panoramique et amenagements interieurs.",
    category: "building",
    volume: 170,
    content: {
      intro: "Construire dans une montagne combine l'avantage d'une protection naturelle avec des vues panoramiques spectaculaires. Que vous creusiez directement dans la roche ou que vous construisiez sur un flanc de montagne, ce type de base offre un style unique. Voici comment exploiter le terrain montagneux a votre avantage.",
      sections: [
        {
          heading: "Choisir l'emplacement ideal",
          content: "Recherchez une paroi rocheuse plate ou un plateau en hauteur. L'ideal est un flanc de montagne face a une vallee pour la vue. Les biomes de montagnes enneigees ou de falaises offrent les meilleurs emplacements. Verifiez qu'il n'y a pas de grotte naturelle trop grande derriere la paroi qui compliquerait la construction."
        },
        {
          heading: "Creuser et structurer l'interieur",
          content: "Creusez dans la montagne sur 10-12 blocs de profondeur et 8-10 blocs de large. Gardez une hauteur de 4-5 blocs pour l'espace principal. Renforcez les murs interieurs avec de la pierre taillee et ajoutez des piliers en cobblestone tous les 4 blocs. Creez des pieces separees en creusant des alcoves laterales de 4x4 pour les chambres et le stockage."
        },
        {
          heading: "La facade et le balcon",
          content: "La facade est l'element visible de l'exterieur. Combinez la pierre naturelle de la montagne avec des sections construites en bois et verre. De grandes fenetres vitrees offrent une vue panoramique sur la vallee. Un balcon en dalles de bois deborde de 3 blocs avec des barrieres comme garde-corps. L'entree peut etre un porche en bois integre dans la roche."
        },
        {
          heading: "Ventilation et eclairage",
          content: "Le defi d'une maison en montagne est l'eclairage naturel. Creez des puits de lumiere en creusant des colonnes verticales jusqu'a la surface, fermees par du verre. Des lanternes marines incrustees dans les murs de pierre donnent un eclairage d'ambiance. Des feux de camp dans les cheminees apportent chaleur et lumiere. Chaque piece doit avoir au moins une source de lumiere."
        }
      ],
      tips: [
        "Utilisez Toucher de Soie pour recuperer de la pierre naturelle et reconstruire la facade",
        "Un balcon avec vue panoramique est l'atout majeur d'une maison en montagne",
        "Les puits de lumiere verticaux eclairent naturellement sans casser l'ambiance",
        "Creez un systeme de minage integre depuis le sous-sol de votre base"
      ],
      faq: [
        {
          question: "Comment empecher les mobs de spawner dans la montagne ?",
          answer: "Eclairez intensivement tout l'interieur avec des torches ou des lanternes. Scellez toute connexion avec des grottes naturelles avec des portes en fer ou des murs. Les dalles de pierre posees au sol empechent aussi le spawn de mobs."
        },
        {
          question: "Quel biome montagneux est le plus beau pour construire ?",
          answer: "Les pics geles (Frozen Peaks) offrent un cadre spectaculaire avec la neige. Les prairies de montagne sont plus accessibles avec de l'herbe verte. Les falaises de pierre (Stony Peaks) sont ideales pour creuser directement dans la roche sans neige."
        }
      ],
      relatedSlugs: ["maison-grotte", "base-souterraine", "maison-survie", "maison-viking", "maison-hobbit"]
    }
  },
  {
    slug: "maison-eau",
    keyword: "maison sur l'eau minecraft",
    title: "Maison sur l'Eau Minecraft : Tuto",
    h1: "Construire une Maison sur l'Eau dans Minecraft",
    metaDescription: "Tuto pour construire une maison sur l'eau dans Minecraft. Maison flottante, base aquatique ou maison lacustre avec design unique et astuces pratiques.",
    category: "building",
    volume: 140,
    content: {
      intro: "Vivre sur l'eau dans Minecraft offre un cadre idyllique et une protection naturelle contre de nombreux mobs terrestres. Que ce soit une maison flottante, une base au bord d'un lac ou une structure sous-marine, les constructions aquatiques ont un charme irresistible. Voici comment maitriser ce style de construction.",
      sections: [
        {
          heading: "Fondations aquatiques",
          content: "Pour une maison flottante, commencez par placer des blocs directement sur la surface de l'eau. Le bois et la pierre fonctionnent, mais les blocs de prismarine s'integrent le mieux au theme aquatique. Pour une structure ancree, plantez des piliers dans le fond de l'eau jusqu'a la surface. Les barrieres ou buches empilees font d'excellents piliers subaquatiques."
        },
        {
          heading: "Structure et materiaux marins",
          content: "Utilisez des planches de mangrove ou de chene noir pour les murs, des blocs de prismarine pour les accents, et du verre pour maximiser la vue sur l'eau. La maison fait idealement 9x9 blocs sur la plateforme. Un toit plat en dalles de prismarine ou un toit en pente en escaliers de bois sont deux options esthetiques. Ajoutez des lanternes marines pour un eclairage thematique."
        },
        {
          heading: "Terrasse et dock",
          content: "Construisez une terrasse en dalles de bois sur au moins 2 cotes de la maison, avec des barrieres comme garde-corps. Un dock en bois s'etend vers la terre ferme pour l'amarrage des bateaux. Ajoutez des poteaux avec des lanternes aux extremites du dock. Des echelles descendent dans l'eau depuis la terrasse pour un acces direct a la nage."
        },
        {
          heading: "Amenagements aquatiques",
          content: "Un observatoire sous-marin est possible en creant une piece vitree sous la surface de l'eau. Utilisez des conduits pour respirer sous l'eau pendant la construction. Une ferme de varech automatique sous la maison fournit du combustible. Un aquarium decoratif avec du verre et des poissons tropicaux embellit l'interieur."
        }
      ],
      tips: [
        "Les conduits sont essentiels pour construire confortablement sous l'eau",
        "Les lanternes marines ne s'eteignent pas dans l'eau et eclairent parfaitement",
        "Les noyes sont le principal danger : eclairez le fond marin autour de votre maison",
        "Un systeme de porte d'ecluse avec des panneaux empeche l'eau d'entrer dans la maison"
      ],
      faq: [
        {
          question: "Comment empecher l'eau d'entrer dans la maison ?",
          answer: "Les portes, panneaux et trappes bloquent l'eau. Pour une entree sous-marine, creez un sas avec deux portes separees par un bloc. Les eponges absorbent l'eau a l'interieur si elle s'infiltre."
        },
        {
          question: "Quels mobs sont dangereux pres d'une maison sur l'eau ?",
          answer: "Les noyes (drowned) sont le principal danger, surtout ceux armes de tridents. Eclairez le fond marin dans un large rayon. Les gardiens apparaissent pres des monuments oceaniques, evitez de construire trop pres de ces structures."
        }
      ],
      relatedSlugs: ["maison-pilotis", "pont", "maison-facile", "base-souterraine", "port-medieval"]
    }
  },
  {
    slug: "maison-grotte",
    keyword: "maison grotte minecraft",
    title: "Maison Grotte Minecraft : Tuto",
    h1: "Construire une Maison dans une Grotte Minecraft",
    metaDescription: "Tuto pour construire une maison dans une grotte Minecraft. Amenagement souterrain, eclairage naturel et facade integree dans la roche.",
    category: "building",
    volume: 140,
    content: {
      intro: "Les grottes de Minecraft offrent des espaces naturels magnifiques pour y amenager une base unique. Avec les grottes luxuriantes et les grottes a stalactites introduites dans les mises a jour recentes, le potentiel est enorme. Ce guide vous montre comment transformer une caverne brute en maison confortable.",
      sections: [
        {
          heading: "Choisir la bonne grotte",
          content: "Recherchez une grotte de taille moyenne avec une ouverture vers l'exterieur pour la lumiere naturelle. Les grottes luxuriantes (Lush Caves) avec leur vegetation naturelle sont ideales car elles offrent une atmosphere unique. Les grottes a stalactites sont aussi spectaculaires. Evitez les grottes trop profondes ou trop labyrinthiques pour votre premiere base."
        },
        {
          heading: "Securiser et delimiter l'espace",
          content: "Commencez par eclairer toute la grotte pour empecher les spawns de mobs. Bouchez les passages vers d'autres grottes avec des murs en pierre. Definissez les zones de votre maison : salon, chambre, stockage, atelier. Utilisez des cloisons basses en demi-murs ou des changements de niveau du sol pour delimiter les espaces sans fermer completement."
        },
        {
          heading: "Amenagement et decoration naturelle",
          content: "Conservez les elements naturels de la grotte : stalactites au plafond, blocs de mousse au sol, lierre et azalees. Integrez vos meubles dans le decor : un lit entre deux stalagmites, des coffres dans des alcoves naturelles. Posez du bois de chene comme plancher dans les zones de vie pour contrastEr avec la pierre brute. Les feux de camp eclairent chaleureusement les recoins."
        },
        {
          heading: "Eclairage creatif souterrain",
          content: "L'eclairage est le plus grand defi. Creez des puits de lumiere en creusant vers la surface et en fermant avec du verre. Les lanternes suspendues aux stalactites par des chaines sont magnifiques. Les blocs de lumiere caches dans le plafond offrent un eclairage invisible. Les baies lumineuses (glow berries) des grottes luxuriantes sont un eclairage naturel parfait."
        }
      ],
      tips: [
        "Les baies lumineuses (glow berries) offrent le meilleur eclairage naturel pour les grottes",
        "Gardez les stalactites et stalagmites comme elements decoratifs naturels",
        "Un puits de lumiere vers la surface transforme une grotte sombre en espace agreable",
        "Les cadres item lumineux ajoutent de la lumiere tout en decorant les murs"
      ],
      faq: [
        {
          question: "Comment trouver une grotte luxuriante ?",
          answer: "Les grottes luxuriantes se trouvent sous les biomes avec des azalees en surface. Cherchez des arbres d'azalee : une grotte luxuriante se trouve en dessous. Creusez sous l'arbre pour y acceder directement."
        },
        {
          question: "Comment securiser une grotte contre les mobs ?",
          answer: "Eclairez chaque recoin avec des torches ou des lanternes (niveau de lumiere 0 minimum). Bouchez tous les passages vers d'autres grottes. Posez des dalles au sol dans les zones non eclairees. Une porte en fer a l'entree principale empeche les zombies d'entrer."
        }
      ],
      relatedSlugs: ["base-souterraine", "maison-montagne", "maison-hobbit", "entree-mine", "maison-survie"]
    }
  },
  {
    slug: "petit-chateau",
    keyword: "petit chateau minecraft",
    title: "Petit Chateau Minecraft : Tuto",
    h1: "Construire un Petit Chateau dans Minecraft",
    metaDescription: "Tuto pour construire un petit chateau dans Minecraft. Tours, murailles et donjon a taille reduite. Parfait pour les joueurs intermediaires.",
    category: "building",
    volume: 170,
    content: {
      intro: "Un petit chateau offre toute la majestuositat d'un chateau medieval sans necessiter des heures de construction. Avec ses tours d'angle, ses creneaux et son donjon central, il impressionne tout en restant a taille humaine. Ce projet est ideal pour les joueurs intermediaires souhaitant se lancer dans l'architecture fortifiee.",
      sections: [
        {
          heading: "Plan et dimensions",
          content: "Le chateau s'inscrit dans un carre de 17x17 blocs. Quatre tours d'angle de 4x4 blocs montent a 10 blocs de hauteur. Les murailles entre les tours font 6 blocs de haut avec des creneaux. Le donjon central fait 7x7 et monte a 12 blocs. La cour interieure de 9x9 accueille un puits et un potager. Une seule entree avec un pont-levis simplifie la defense."
        },
        {
          heading: "Tours d'angle et creneaux",
          content: "Chaque tour est un carre de 4x4 en cobblestone avec un escalier en colimaçon interieur (dalles de pierre en spirale). Le sommet des tours depasse de 4 blocs au-dessus des murailles avec des creneaux (alternance de blocs et de vide). Ajoutez un toit conique en escaliers de pierre ou des bannieres entre les creneaux. Des meurtrieres (fentes de 1 bloc) dans les murs des tours ajoutent du detail."
        },
        {
          heading: "Le donjon central",
          content: "Le donjon est le batiment principal au centre de la cour. Le rez-de-chaussee est la grande salle avec une longue table (dalles sur barrieres), une cheminee et des bannieres murales. L'etage contient la chambre du seigneur avec un balcon donne sur la cour. Le sous-sol abrite le cachot et le stockage. Un escalier en pierre relie les niveaux."
        },
        {
          heading: "Pont-levis et entree",
          content: "L'entree utilise une herse simulee avec des barrieres de Nether (noires) et un systeme de redstone pour une porte coulissante avec des pistons. Le pont-levis est un passage de 3 blocs de large enjambant un fosse d'eau. Des torches sur les murs eclairent l'entree. Deux piliers en pierre encadrent la porte principale avec des bannieres aux armoiries."
        }
      ],
      tips: [
        "La cobblestone moussue melangee a la cobblestone normale donne un aspect ancien",
        "Les creneaux sont l'element cle : alternez un bloc plein et un vide en haut des murs",
        "Un fosse rempli d'eau autour du chateau ajoute du realisme et de la protection",
        "Les bannieres personnalisees servent d'armoiries pour votre maison"
      ],
      faq: [
        {
          question: "Combien de materiaux faut-il pour un petit chateau ?",
          answer: "Prevoyez environ 800-1000 blocs de cobblestone ou pierre taillee, 100 blocs de bois pour les interieurs, et 50 blocs de verre. En survie, cela represente quelques heures de minage avec une pioche en fer enchantee."
        },
        {
          question: "Comment faire un pont-levis fonctionnel ?",
          answer: "Un vrai pont-levis n'est pas faisable en vanilla, mais vous pouvez simuler l'effet avec des pistons collants qui retirent des blocs du passage. Alternativement, une porte en fer avec un levier donne le meme effet de controle d'acces."
        }
      ],
      relatedSlugs: ["chateau-medieval", "chateau-fort", "maison-medievale", "maison-viking", "manoir"]
    }
  },
  {
    slug: "chateau-medieval",
    keyword: "chateau medieval minecraft",
    title: "Chateau Medieval Minecraft : Tuto",
    h1: "Construire un Chateau Medieval dans Minecraft",
    metaDescription: "Guide complet pour construire un chateau medieval dans Minecraft. Murailles, tours, donjon, pont-levis et cour interieure. Tuto detaille pour un chateau epique.",
    category: "building",
    volume: 320,
    content: {
      intro: "Le chateau medieval est le projet de construction ultime dans Minecraft. Imposant et majestueux, il combine architecture militaire et residentielle dans une structure qui domine le paysage. Ce guide vous accompagne dans la creation d'un chateau digne des plus grandes epopees medievales.",
      sections: [
        {
          heading: "Planification et emplacement",
          content: "Choisissez un emplacement en hauteur : colline, plateau ou falaise pour un effet dramatique. Le chateau complet s'inscrit dans un rectangle de 40x30 blocs minimum. Dessinez d'abord le plan au sol avec de la laine coloree : l'enceinte exterieure, les tours, la cour et le donjon. Prevoyez un fosse de 5 blocs de large autour de l'enceinte."
        },
        {
          heading: "Enceinte et tours de defense",
          content: "Les murailles font 8 blocs de haut et 2 blocs d'epaisseur en cobblestone et pierre taillee. Placez des tours tous les 10-12 blocs le long des murs, depassant de 3 blocs au-dessus. Les tours sont rondes (cercle de 6 blocs de diametre) ou carrees (5x5). Un chemin de ronde court le long du sommet avec des creneaux. Des archeres (fentes de 1x3) percent les murs a intervalle regulier."
        },
        {
          heading: "Le grand donjon",
          content: "Le donjon central fait 11x11 blocs et 15 blocs de haut, c'est le point culminant du chateau. Il contient la grande salle (rez-de-chaussee), les quartiers nobles (premier etage), et la salle du trone (deuxieme etage). Le toit est un toit en pointe avec des escaliers en deepslate. Quatre tourelles d'angle plus petites encadrent le donjon pour renforcer sa stature."
        },
        {
          heading: "Cour interieure et batiments annexes",
          content: "La cour accueille un puits central, une ecurie avec des coffres a foin (blocs de foin), une forge avec des enclumes et des fours, des casernes pour la garnison, et une chapelle. Un potager nourrit la garnison. Les batiments annexes utilisent un style colombage pour contraster avec les murs en pierre. Pavez la cour avec un melange de dalles de pierre et de gravier."
        },
        {
          heading: "Details et finitions",
          content: "Ajoutez des bannieres sur les tours et au-dessus de l'entree. Des chaines avec des lanternes eclairent les corridors. Des armures en stands decorent la grande salle. Un trone fait de dalles d'escaliers et de bannieres occupe le fond de la salle principale. Le fosse contient de l'eau et un pont en bois mene a l'entree. Des vignes et de la mousse vieillissent les murailles."
        }
      ],
      tips: [
        "Construisez en couches : d'abord les murs, puis les tours, puis le donjon, enfin les details",
        "Melangez cobblestone, cobblestone moussue et pierre taillee pour un aspect vieilli",
        "Les tours rondes sont plus belles mais plus complexes, suivez un guide de cercle Minecraft",
        "Un chateau sur une colline est 10 fois plus impressionnant qu'en terrain plat"
      ],
      faq: [
        {
          question: "Combien de temps prend la construction d'un chateau medieval ?",
          answer: "En mode creatif, comptez 5 a 15 heures selon la taille et les details. En survie, la collecte des materiaux double ou triple ce temps. Un chateau est un projet de longue haleine, construisez-le etape par etape."
        },
        {
          question: "Quel est le meilleur materiau pour les murs d'un chateau ?",
          answer: "La cobblestone est le choix classique, resistante et facile a obtenir. La pierre taillee donne un aspect plus soigne. Melangez les deux avec de la cobblestone moussue et des briques de pierre pour un rendu realiste et vieilli."
        },
        {
          question: "Comment faire des tours rondes ?",
          answer: "Suivez un generateur de cercle Minecraft en ligne. Pour un diametre de 6 blocs, le motif au sol est : 4 blocs droits, 1 bloc en diagonale de chaque cote, et ainsi de suite. Montez les murs en suivant le meme motif a chaque niveau."
        }
      ],
      relatedSlugs: ["petit-chateau", "chateau-fort", "maison-medievale", "port-medieval", "manoir"]
    }
  },
  {
    slug: "chateau-fort",
    keyword: "chateau fort minecraft",
    title: "Chateau Fort Minecraft : Tuto",
    h1: "Construire un Chateau Fort dans Minecraft",
    metaDescription: "Construisez un chateau fort defensif dans Minecraft. Fortifications, douves, meurtrieres et systemes de defense. Tuto complet pour une forteresse imprenable.",
    category: "building",
    volume: 170,
    content: {
      intro: "Le chateau fort dans Minecraft met l'accent sur l'aspect defensif et militaire. Contrairement au chateau de prestige, la forteresse est concue pour resister aux sieges avec ses murs epais, ses douves profondes et ses systemes de defense elabores. Construisez une place forte que rien ne pourra abattre.",
      sections: [
        {
          heading: "Murailles defensives",
          content: "Les murs font 3 blocs d'epaisseur en cobblestone et pierre taillee, montant a 10 blocs de hauteur. La base s'elargit avec des escaliers inverses pour creer un talus anti-sape. Ajoutez des machicoulis (surplombs au sommet) avec des trappes pour verser des projectiles. Un chemin de ronde de 2 blocs de large court derriere les creneaux. Des tours de flanquement tous les 8 blocs couvrent les angles morts."
        },
        {
          heading: "Systeme de douves et pont-levis",
          content: "Creusez un fosse de 5 blocs de large et 3 de profondeur autour de l'enceinte. Remplissez d'eau avec des courants dirigeants les intrus vers des pieges. L'unique acces est un pont retractable fait de pistons collants sur un circuit redstone. Un barbacane (avant-poste fortifie) protege l'approche du pont avec une porte en fer et des meurtrieres laterales."
        },
        {
          heading: "Donjon et dernier rempart",
          content: "Le donjon est la derniere ligne de defense, isole au centre avec ses propres murs. Il fait 9x9 sur 12 blocs de haut avec des murs de 2 blocs d'epaisseur. L'acces se fait par une porte sureleve au premier etage, accessible uniquement par un pont amovible depuis le chemin de ronde. Le sous-sol cache les reserves et un tunnel d'evacuation secret."
        },
        {
          heading: "Systemes de defense redstone",
          content: "Integrez des dispensers charges de fleches dans les murs, actives par des fils de redstone ou des plaques de pression. Des canons a TNT sur les tours couvrent les approches. Des portes en fer commandees par des leviers controlent l'acces. Un systeme de lave retractable au-dessus de l'entree principale fait office de derniere defense. Des alarmes en blocs de note alertent en cas d'intrusion."
        }
      ],
      tips: [
        "Les murs en degrade (plus epais a la base) sont plus realistes et plus resistants a la TNT",
        "Les machicoulis permettent d'attaquer les assaillants au pied des murs",
        "Un tunnel d'evacuation secret est toujours utile en multijoueur",
        "La lave dans les douves est plus dangereuse que l'eau mais attention aux incendies"
      ],
      faq: [
        {
          question: "Un chateau fort peut-il resister a la TNT ?",
          answer: "La cobblestone a une resistance aux explosions de 6, et l'obsidienne de 1200. Pour une forteresse vraiment resistante, utilisez de l'obsidienne pour les points cles comme la porte et la base des murs. Des murs de 3 blocs d'epaisseur en cobblestone resistent a la plupart des explosions."
        },
        {
          question: "Comment construire des meurtrieres fonctionnelles ?",
          answer: "Placez un bloc, un vide d'un bloc, puis un bloc pour creer une fente. Placez un dispenser derriere charge de fleches, active par un bouton. Le joueur peut aussi tirer a l'arc a travers la fente de 1 bloc."
        }
      ],
      relatedSlugs: ["chateau-medieval", "petit-chateau", "base-secrete", "manoir", "maison-medievale"]
    }
  },
  {
    slug: "gratte-ciel",
    keyword: "gratte ciel minecraft",
    title: "Gratte-Ciel Minecraft : Tuto",
    h1: "Construire un Gratte-Ciel dans Minecraft",
    metaDescription: "Tuto pour construire un gratte-ciel dans Minecraft. Immeuble moderne en verre et beton, structure haute et techniques de construction en hauteur.",
    category: "building",
    volume: 170,
    content: {
      intro: "Le gratte-ciel est un defi technique et esthetique dans Minecraft. Construire en hauteur necessite de maitriser les proportions, de varier les facades et de creer un interieur fonctionnel etage par etage. Que vous construisiez un immeuble de bureaux ou une tour residentielle, ce guide vous donne les cles du succes.",
      sections: [
        {
          heading: "Fondations et structure porteuse",
          content: "Commencez par une empreinte au sol de 11x11 blocs. Creez un noyau central de 3x3 en beton gris ou fer qui servira de cage d'escalier et d'ascenseur sur toute la hauteur. Les 4 colonnes d'angle en beton ou fer montent egalement sur toute la hauteur. Chaque etage fait 4 blocs de haut (3 d'espace + 1 de plancher). Une tour de 20 etages atteint 80 blocs de haut."
        },
        {
          heading: "Facades en verre et beton",
          content: "Alternez des bandes horizontales de verre teinté et de beton de couleur pour creer un motif de facade moderne. Un classique est le mur-rideau : 3 blocs de verre sur 1 bloc de beton a chaque etage. Variez la facade tous les 5 etages avec un retrait ou une avancee d'un bloc pour briser la monotonie. La base (2-3 premiers etages) est plus large avec un hall d'entree vitré."
        },
        {
          heading: "Interieur par etage",
          content: "Le rez-de-chaussee a un hall d'entree avec un sol en dalles de quartz et un comptoir d'accueil. Les etages de bureau utilisent des dalles sur barrieres comme postes de travail. Les etages residentiels ont des appartements de 5x5. Le dernier etage est un penthouse avec terrasse panoramique. La cage d'escalier centrale utilise des dalles en spirale autour d'un vide central."
        },
        {
          heading: "Finitions et details",
          content: "Le sommet de la tour se termine par une antenne en barrieres de fer ou en End Rods. Un eclairage de balisage (lampes de redstone ou blocs de lumiere) au sommet signale la tour la nuit. Le hall d'entree a un auvent en dalles debordant sur 3 blocs. Des arbres decoratifs en pots et des fauteuils en escaliers meublent le lobby. L'eclairage interieur utilise des blocs de lumiere encastres au plafond."
        }
      ],
      tips: [
        "Un noyau central est essentiel pour la circulation verticale et la structure",
        "Variez la facade tous les 5 etages pour eviter l'effet boite repetitive",
        "Construisez d'abord la structure complete, puis remplissez les facades",
        "Le verre teinté gris donne le rendu le plus realiste pour un gratte-ciel"
      ],
      faq: [
        {
          question: "Quelle est la hauteur maximale de construction dans Minecraft ?",
          answer: "La limite de construction est Y=320 en version 1.18+. En partant du niveau de la mer (Y=63), vous pouvez construire jusqu'a 257 blocs de haut, soit environ 64 etages. Pour aller plus haut, construisez sur une montagne."
        },
        {
          question: "Comment eviter que la tour soit ennuyeuse et repetitive ?",
          answer: "Variez les facades avec des retraits a differentes hauteurs, changez les materiaux tous les quelques etages, ajoutez des balcons irreguliers et des terrasses vegetalisees. Un sommet distinctif (dome, pyramide, antenne) donne du caractere a la silhouette."
        }
      ],
      relatedSlugs: ["maison-moderne", "maison-luxe", "idees-construction", "deco-interieur", "guide-construction"]
    }
  },
  {
    slug: "pont",
    keyword: "pont sur minecraft",
    title: "Pont Minecraft : Tuto Construction",
    h1: "Construire un Pont dans Minecraft",
    metaDescription: "Tuto complet pour construire un pont dans Minecraft. Pont en bois, pont en pierre, pont suspendu et pont-levis. Techniques et designs pour tous niveaux.",
    category: "building",
    volume: 590,
    content: {
      intro: "Le pont est une structure essentielle pour relier des iles, enjamber des ravins ou traverser des rivieres dans Minecraft. Du simple pont en bois au pont suspendu spectaculaire, il existe de nombreux styles adaptes a chaque situation. Decouvrez comment construire des ponts fonctionnels et esthetiques.",
      sections: [
        {
          heading: "Pont en bois simple",
          content: "Le pont en bois basique utilise des dalles de planches posees sur des piliers de barrieres. Espacez les piliers de 5-6 blocs pour un aspect naturel. La largeur ideale est de 3 blocs avec des barrieres de chaque cote comme garde-corps. Pour un rendu plus travaille, utilisez des buches comme poutres principales sous les dalles et ajoutez des lanternes aux piliers."
        },
        {
          heading: "Pont en pierre arque",
          content: "Le pont en arc est le plus beau pour enjamber une riviere. Commencez par les deux extremites a la hauteur de la berge. L'arc monte progressivement avec des blocs pleins, puis des dalles, puis des escaliers inverses au sommet. La surface du pont est plate en dalles de pierre avec des murets en escaliers. Des piliers en pierre descendent dans l'eau a chaque extremite de l'arc."
        },
        {
          heading: "Pont suspendu",
          content: "Le pont suspendu necessite deux tours de 15-20 blocs de haut de chaque cote. Des chaines ou des barrieres forment les cables principaux en courbe parabolique entre les tours. Des chaines verticales descendent des cables jusqu'au tablier du pont. Le tablier fait 3 blocs de large en dalles de bois ou de fer. C'est le type le plus impressionnant pour de longues distances."
        },
        {
          heading: "Pont couvert medieval",
          content: "Le pont couvert ajoute un toit et des murs au pont classique. La base est un pont en bois de 5 blocs de large. Des murs en planches de 3 blocs de haut avec des ouvertures pour les fenetres. Un toit en escaliers de bois couvre l'ensemble. Des lanternes interieures eclairent le passage. Ce style est parfait pour les villages medievaux et protege des fleches en PvP."
        },
        {
          heading: "Techniques avancees",
          content: "Pour les ponts courbes, suivez un generateur de cercle et posez les dalles le long de la courbe. Les ponts a bascule utilisent des pistons collants et un circuit redstone. Pour un pont tres long, alternez des arches et des piliers pour maintenir les proportions. Les details comme des cordes (fils), des lanternes et de la mousse transforment un pont basique en oeuvre d'art."
        }
      ],
      tips: [
        "La regle d'or : un pont doit etre proportionnel a ce qu'il enjambe",
        "Les barrieres sont plus elegantes que les murs pleins pour les garde-corps",
        "Ajoutez de la mousse et des vignes sur les piliers en pierre pour un aspect vieilli",
        "Un eclairage regulier sur le pont empeche les mobs de spawner dessus"
      ],
      faq: [
        {
          question: "Quelle largeur pour un pont dans Minecraft ?",
          answer: "3 blocs est la largeur standard pour un pont pietonnement. 5 blocs pour un pont plus imposant avec de la place pour des charrettes. Un pont monumental peut faire 7 blocs de large avec des trottoirs de chaque cote."
        },
        {
          question: "Comment faire un arc de pont realiste ?",
          answer: "Pour un arc de 10 blocs de portee, commencez par 3 blocs horizontaux, montez d'un bloc en diagonale (escalier), placez 2 blocs horizontaux au sommet, puis redescendez symetriquement. Les escaliers inverses et les dalles adoucissent la courbe."
        },
        {
          question: "Un pont peut-il supporter des rails de minecart ?",
          answer: "Oui, les rails se posent sur n'importe quel bloc plein. Construisez le pont 1 bloc plus large que necessaire pour les rails et ajoutez des garde-corps. Assurez-vous que les pentes sont douces pour que le minecart garde sa vitesse."
        }
      ],
      relatedSlugs: ["maison-medievale", "port-medieval", "idees-construction", "maison-pilotis", "guide-construction"]
    }
  },
  {
    slug: "stade-foot",
    keyword: "stade de foot minecraft",
    title: "Stade de Foot Minecraft : Tuto",
    h1: "Construire un Stade de Foot dans Minecraft",
    metaDescription: "Tuto pour construire un stade de football dans Minecraft. Terrain, tribunes, eclairage et details realistes pour un stade impressionnant.",
    category: "building",
    volume: 170,
    content: {
      intro: "Construire un stade de football dans Minecraft est un projet ambitieux qui produit un resultat spectaculaire. Avec un terrain aux dimensions correctes, des tribunes garnies et un eclairage professionnel, votre stade deviendra le centre de votre monde. Voici comment realiser ce megaprojet etape par etape.",
      sections: [
        {
          heading: "Le terrain de jeu",
          content: "Le terrain fait 68x44 blocs (echelle 1:1.5 par rapport a un vrai terrain). Utilisez des blocs d'herbe pour la pelouse avec des lignes en laine blanche ou beton blanc. Le rond central a un rayon de 6 blocs. Les surfaces de reparation font 11x27 blocs. Les buts sont des cadres en barrieres de fer de 5 blocs de large et 2 de haut, avec des toiles d'araignee comme filet."
        },
        {
          heading: "Les tribunes",
          content: "Construisez 4 tribunes autour du terrain. Chaque tribune est un gradin montant de 10-15 rangees en escaliers de differentes couleurs (laine ou beton) pour simuler les sieges. Laissez 5 blocs entre le terrain et les premieres rangees pour les pistes d'athletisme (dalles de brique rouge). Les coins peuvent etre ouverts ou fermes pour un stade complet."
        },
        {
          heading: "Eclairage et pylones",
          content: "Quatre pylones d'eclairage aux coins du stade montent a 25-30 blocs. Chaque pylone porte une grappe de blocs de lumiere, lanternes ou lampes de redstone. La structure des pylones utilise des barrieres en fer empilees. Des projecteurs supplementaires sous l'auvent des tribunes completent l'eclairage. Le terrain doit etre entierement eclaire pour empecher les spawns de mobs."
        },
        {
          heading: "Details et ambiance",
          content: "Ajoutez un tunnel des joueurs sous les tribunes menant au terrain. Des bannieres aux couleurs des equipes decorent les tribunes. Un tableau d'affichage en laine noire avec des chiffres en laine blanche montre le score. Des stands de nourriture dans les couloirs avec des fours et des tonneaux. Un toit partiel en dalles au-dessus des tribunes protege les spectateurs."
        }
      ],
      tips: [
        "Utilisez WorldEdit ou un serveur creatif pour les grandes surfaces repetitives",
        "Les escaliers de differentes couleurs simulent parfaitement les rangees de sieges",
        "Des toiles d'araignee tendues entre des barrieres font d'excellents filets de but",
        "Les bannieres dans les tribunes ajoutent de la vie et des couleurs d'equipe"
      ],
      faq: [
        {
          question: "Quelles sont les dimensions ideales pour un stade Minecraft ?",
          answer: "Le terrain fait 68x44 blocs a l'echelle 1:1.5. Avec les tribunes, le stade complet fait environ 100x80 blocs. Pour un mini-stade, reduisez le terrain a 40x25 blocs avec des tribunes de 5 rangees."
        },
        {
          question: "Comment simuler les spectateurs dans les tribunes ?",
          answer: "Placez des tetes de joueurs ou des armures sur des supports dans les tribunes. Des bannieres colorees remplissent aussi l'espace. Pour les grandes tribunes, alternez simplement des couleurs de laine pour l'effet visuel a distance."
        }
      ],
      relatedSlugs: ["idees-construction", "gratte-ciel", "guide-construction", "parc-attraction", "maison-moderne"]
    }
  },
  {
    slug: "idees-construction",
    keyword: "idee construction minecraft",
    title: "Idees de Construction Minecraft : Inspiration",
    h1: "Idees de Construction pour Minecraft",
    metaDescription: "Plus de 50 idees de constructions Minecraft pour tous les niveaux. Maisons, chateaux, villes, monuments et projets originaux pour ne jamais manquer d'inspiration.",
    category: "building",
    volume: 590,
    content: {
      intro: "Le syndrome de la page blanche touche aussi les constructeurs Minecraft. Si vous ne savez plus quoi construire, cette liste exhaustive d'idees vous donnera l'inspiration pour votre prochain projet. Des constructions simples aux megaprojets, il y en a pour tous les gouts et niveaux.",
      sections: [
        {
          heading: "Constructions du quotidien",
          content: "Construisez des batiments realistes : une boulangerie avec un four central, une bibliotheque avec des etageres de livres, un restaurant avec une cuisine ouverte, une caserne de pompiers avec un garage, un hopital avec des lits et des potions, une ecole avec des pupitres en escaliers, ou un poste de police. Ces batiments donnent vie a un village ou une ville."
        },
        {
          heading: "Monuments et structures celebres",
          content: "Recreez des monuments : la Tour Eiffel en barrieres de fer, le Colisee en pierre, une pyramide egyptienne en gres, un phare sur une ile, un moulin a vent hollandais, une statue de la Liberte, ou le Taj Mahal en quartz. Ajustez l'echelle selon votre ambition : meme en miniature, ces structures sont reconnaissables."
        },
        {
          heading: "Projets fantastiques et creatifs",
          content: "Laissez libre cours a votre imagination : une ile flottante dans le ciel avec des cascades, un dragon en 3D grandeur nature, un volcan avec de la lave coulante, un monde sous-marin en dome de verre, un vaisseau spatial, une cité dans les nuages, ou un labyrinthe souterrain. Ces projets n'ont pas de reference reelle, la seule limite est votre creativite."
        },
        {
          heading: "Projets pratiques et fonctionnels",
          content: "Combinez esthetique et utilite : un centre commercial avec des villageois marchands, un reseau de transport en minecart souterrain, une arene PvP avec des tribunes, un circuit de parkour, un escape room avec des enigmes redstone, un zoo avec enclos thematiques pour chaque mob, ou un musee exposant tous les objets rares du jeu."
        },
        {
          heading: "Defis de construction",
          content: "Lancez-vous des defis : construire uniquement avec un seul materiau, batir une maison dans un espace de 5x5x5 seulement, recreer un lieu reel de votre ville, construire sans bloc plein (que des dalles et escaliers), ou realiser un build en 30 minutes chrono. Ces contraintes stimulent la creativite et vous forcent a innover."
        }
      ],
      tips: [
        "Commencez petit et agrandissez : un projet termine vaut mieux qu'un megaprojet abandonne",
        "Inspirez-vous du monde reel : photographiez des batiments qui vous plaisent",
        "Rejoignez des serveurs de construction pour decouvrir les realisations d'autres joueurs",
        "Utilisez Pinterest ou YouTube pour trouver des references visuelles"
      ],
      faq: [
        {
          question: "Quel est le projet de construction le plus impressionnant a realiser ?",
          answer: "Un chateau medieval complet avec village, un navire pirate grandeur nature, ou une ville entiere avec differents quartiers sont parmi les projets les plus spectaculaires. Choisissez en fonction du temps que vous souhaitez investir."
        },
        {
          question: "Comment ne pas abandonner un gros projet de construction ?",
          answer: "Divisez le projet en etapes et fixez-vous des objectifs journaliers. Construisez d'abord la structure globale avant les details. Jouez en musique ou avec des amis pour rester motive. Photographiez votre avancement pour voir le progres."
        },
        {
          question: "Vaut-il mieux construire en creatif ou en survie ?",
          answer: "Le creatif permet de se concentrer sur le design sans limite de ressources. Le survie donne un sentiment d'accomplissement plus fort. Un bon compromis est de tester le design en creatif puis de le construire en survie."
        }
      ],
      relatedSlugs: ["idees-maison", "guide-construction", "maison-facile", "chateau-medieval", "pixel-art"]
    }
  },
  {
    slug: "guide-construction",
    keyword: "construction dans minecraft",
    title: "Construction Minecraft : Guide Complet",
    h1: "Guide de Construction dans Minecraft",
    metaDescription: "Le guide ultime de la construction dans Minecraft. Techniques, materiaux, proportions, eclairage et astuces de pro pour ameliorer vos builds.",
    category: "building",
    volume: 3600,
    content: {
      intro: "La construction est le coeur de Minecraft, mais passer d'une boite en terre a une creation impressionnante demande technique et pratique. Ce guide complet couvre toutes les bases : choix des materiaux, proportions, profondeur, eclairage et details. Que vous soyez debutant ou intermediaire, ces principes transformeront vos constructions.",
      sections: [
        {
          heading: "Les 5 regles d'or de la construction",
          content: "1. La profondeur : n'ayez jamais de mur plat, ajoutez des retraits et des avancees d'un bloc. 2. Le contraste : utilisez au moins 2-3 materiaux de couleurs differentes. 3. Les proportions : la hauteur doit etre environ la moitie de la largeur. 4. La variete : alternez les textures et les formes. 5. L'environnement : travaillez les alentours autant que le batiment."
        },
        {
          heading: "Maitriser les materiaux",
          content: "Chaque materiau a une texture et un style. La pierre (cobblestone, pierre taillee, deepslate) evoque la solidite. Le bois (planches, buches) apporte la chaleur. Le verre cree de la transparence et de la modernite. Le beton offre des couleurs vives et lisses. Le quartz est elegant et lumineux. Apprenez a combiner 3-4 materiaux complementaires pour chaque construction."
        },
        {
          heading: "Techniques de profondeur et de detail",
          content: "La profondeur transforme une boite en batiment realiste. Utilisez des escaliers et des dalles pour creer des corniches, des appuis de fenetre et des bordures de toit. Les trappes ajoutent du detail aux facades comme volets et panneaux. Les murs (cobblestone walls) font d'excellentes colonnes fines. Les barrieres et portillons creent des motifs decoratifs. Chaque facade doit avoir au moins 3 niveaux de profondeur."
        },
        {
          heading: "L'eclairage comme element de design",
          content: "L'eclairage fonctionnel empeche les spawns, mais l'eclairage esthetique sublime une construction. Les lanternes suspendues par des chaines sont elegantes. Les lanternes marines encastrees dans le sol sont discretes. Les End Rods font des lampadaires modernes. Les bougies creent une ambiance medievale. Les blocs de lumiere caches eclairent sans source visible. Evitez les torches en evidence sur les facades."
        },
        {
          heading: "Paysagisme et environnement",
          content: "Un batiment sans environnement travaille perd 50% de son impact. Creez des chemins en gravel ou dalles melangees menant a l'entree. Plantez des arbres et des buissons autour. Ajoutez des clotures, des lampadaires et du mobilier exterieur. Un jardin, une fontaine ou un plan d'eau devant le batiment cree un avant-plan. Le terraforming (modifier le terrain) adapte le paysage a votre construction."
        }
      ],
      tips: [
        "La regle numero 1 : jamais de murs plats, toujours de la profondeur",
        "Utilisez 3 materiaux maximum pour la palette principale et 1-2 pour les accents",
        "Regardez votre construction de loin regulierement pour verifier les proportions",
        "Les blocs de detroits (escaliers, dalles, murs, barrieres) sont vos meilleurs amis",
        "Copiez les constructions qui vous plaisent pour apprendre avant de creer les votres"
      ],
      faq: [
        {
          question: "Comment passer de debutant a bon constructeur dans Minecraft ?",
          answer: "Appliquez systematiquement les 5 regles : profondeur, contraste, proportions, variete et environnement. Reproduisez des constructions de YouTubers tuto par tuto pour comprendre les techniques. La pratique reguliere est la cle."
        },
        {
          question: "Quels outils facilitent la construction ?",
          answer: "En survie, l'enchantement Efficacite V accelere le minage. Les echafaudages permettent de monter facilement. Les elytres sont indispensables pour les grandes constructions. En creatif, WorldEdit et Litematica sont des outils essentiels pour les projets ambitieux."
        },
        {
          question: "Comment trouver son style de construction ?",
          answer: "Testez differents styles : medieval, moderne, japonais, fantastique. Vous graviterez naturellement vers celui qui vous plait le plus. Beaucoup de constructeurs melangent les styles pour creer quelque chose d'unique. L'important est de pratiquer regulierement."
        }
      ],
      relatedSlugs: ["idees-construction", "maison-facile", "toit-maison", "deco-interieur", "idees-maison"]
    }
  },
  {
    slug: "deco-interieur",
    keyword: "deco interieur minecraft",
    title: "Decoration Interieure Minecraft : Idees",
    h1: "Idees de Decoration Interieure dans Minecraft",
    metaDescription: "Les meilleures idees de decoration interieure pour Minecraft. Meubles, cuisines, salons et astuces pour meubler vos constructions avec style.",
    category: "building",
    volume: 210,
    content: {
      intro: "La decoration interieure transforme une coquille vide en maison vivante dans Minecraft. Avec un peu d'imagination et les bons blocs, vous pouvez creer des meubles, des appareils et des decorations surprenants de realisme. Voici les meilleures techniques pour meubler vos constructions.",
      sections: [
        {
          heading: "Meubles de salon",
          content: "Un canape se construit avec 2-3 escaliers en quartz ou bois alignes, avec des panneaux lateraux comme accoudoirs. Les fauteuils sont des escaliers individuels avec des trappes sur les cotes. Une table basse utilise une dalle posee sur un tapis. La television est un cadre item avec une carte remplie sur un mur noir. Un tapis moelleux est fait de tapis de laine empiles. Des etageres en dalles exposent des pots de fleurs et livres."
        },
        {
          heading: "La cuisine amenagee",
          content: "Les comptoirs sont des dalles de pierre lisse posees a la bonne hauteur. Le four du jeu fait un parfait four de cuisine. Un chaudron rempli d'eau simule un evier. Les blocs d'observateur donnent un effet de four a micro-ondes. Les barils font des frigos. Un cadre item avec un gateau fait un decoratif mural. Des trappes ouvertes sous les comptoirs simulent des placards."
        },
        {
          heading: "Chambres et salles de bain",
          content: "Le lit standard peut etre entoure de dalles et de trappes pour un cadre de lit elabore. Des tables de nuit avec un coffre surmonté d'une lanterne ou d'une fleur. Dans la salle de bain, un chaudron avec de l'eau fait une baignoire, un tripode d'alchimie simule un robinet. Les blocs de quartz ou de prismarine creent un carrelage elegant. Un miroir est un cadre item avec une carte vide ou un panneau brillant."
        },
        {
          heading: "Details qui font la difference",
          content: "Les cadres item avec des objets thematiques racontent une histoire. Les blocs de note servent de radio. Les composteurs font des poubelles. Les meules ressemblent a des ventilateurs de plafond. Les enclumes sur des barrieres font des lampes de bureau. Les chaines suspendues au plafond avec des lanternes creent des lustres. Les pots de fleurs avec differentes plantes ajoutent de la vie a chaque piece."
        }
      ],
      tips: [
        "Les escaliers, dalles et trappes sont la base de tout meuble Minecraft",
        "Les cadres item invisibles sont essentiels pour une decoration propre",
        "Chaque piece doit avoir un point focal : cheminee au salon, table a la cuisine",
        "Les tapis de differentes couleurs definissent les zones dans les espaces ouverts",
        "N'oubliez pas les plantes : les pots de fleurs ajoutent de la vie partout"
      ],
      faq: [
        {
          question: "Comment faire des meubles realistes dans Minecraft ?",
          answer: "Combinez des escaliers, dalles, trappes, barrieres et cadres item. Les escaliers sont des chaises et canapes, les dalles sont des tables, les trappes sont des portes de placard, et les barrieres sont des pieds de table. L'astuce est de combiner ces elements de facon creative."
        },
        {
          question: "Comment creer un eclairage d'interieur moderne ?",
          answer: "Cachez des blocs de lumiere dans le plafond ou derriere des dalles. Les lanternes marines encastrees dans le sol sont discretes. Les End Rods font des lampes sur pied modernes. Evitez les torches murales qui donnent un aspect rustique."
        },
        {
          question: "Comment meubler sans surcharger une petite piece ?",
          answer: "Dans les petits espaces, chaque bloc compte. Utilisez des meubles multifonctionnels : un coffre comme table de nuit, un escalier comme chaise et rangement. Gardez le centre de la piece degage et concentrez les meubles contre les murs."
        }
      ],
      relatedSlugs: ["salle-de-bain", "maison-moderne", "maison-luxe", "guide-construction", "salle-enchantement"]
    }
  },
  {
    slug: "salle-de-bain",
    keyword: "salle de bain minecraft",
    title: "Salle de Bain Minecraft : Idees Deco",
    h1: "Comment Faire une Salle de Bain dans Minecraft",
    metaDescription: "Idees et tutos pour creer une salle de bain dans Minecraft. Baignoire, douche, lavabo, miroir et carrelage. Decoration interieure detaillee.",
    category: "building",
    volume: 260,
    content: {
      intro: "La salle de bain est souvent l'une des pieces les plus negligees dans Minecraft, pourtant elle ajoute un realisme appreciable a vos maisons. Avec quelques astuces de construction, vous pouvez creer des salles de bain convaincantes avec baignoire, douche, lavabo et meme un miroir.",
      sections: [
        {
          heading: "Les sanitaires essentiels",
          content: "Le lavabo est un chaudron avec un tripode d'alchimie au-dessus (le robinet). Placez-le contre un mur avec un cadre item vide au-dessus comme miroir. Les toilettes sont un chaudron avec un levier sur le mur (la chasse d'eau) et une trappe ouverte comme couvercle. Une dalle de quartz au-dessus du chaudron fait le siege. Ajoutez un distributeur de papier (cadre item avec du papier) a cote."
        },
        {
          heading: "Baignoire et douche",
          content: "La baignoire se construit en creusant 3x1 blocs dans le sol, en les bordant d'escaliers de quartz et en remplissant d'eau. Un chaudron aux pieds fait office de robinet. Pour la douche, creez une cabine de 2x2 avec des vitres comme parois. Un dispenser au plafond simule le pommeau de douche. Un tapis de bain (tapis bleu clair) devant complete le tout."
        },
        {
          heading: "Carrelage et murs",
          content: "Les blocs de quartz lisse ou de beton blanc font un excellent carrelage. Alternez avec des dalles de quartz pour creer un motif. Les vitres de couleur font des carreaux decoratifs. Le sol en dalles de quartz avec un contour en dalles de prismarine cree un motif elegant. Un dosseret en blocs de terracotta emaille ajoute de la couleur derriere le lavabo."
        },
        {
          heading: "Accessoires et details",
          content: "Des cadres item avec des objets simulent les accessoires : un seau pour un panier a linge, du cuir pour des serviettes, une fleur pour le parfum. Un panneau lumineux fait un miroir lumineux. Des bougies parfumees apportent une ambiance spa. Des escaliers empiles font une armoire de rangement. Un tapis moelleux au sol et des plantes vertes completent l'atmosphère."
        }
      ],
      tips: [
        "Le quartz est le materiau parfait pour un look de salle de bain propre et moderne",
        "Un chaudron rempli d'eau fait le meilleur lavabo et baignoire du jeu",
        "Les trappes ouvertes simulent des portes de placard sous le lavabo",
        "Ajoutez une vitre comme paroi de douche pour separer les espaces"
      ],
      faq: [
        {
          question: "Comment faire un miroir dans Minecraft ?",
          answer: "Placez un cadre item vide sur le mur au-dessus du lavabo. Un panneau lumineux (depuis la 1.20) donne un meilleur effet reflechissant. Pour un grand miroir, alignez plusieurs cadres item vides ou panneaux lumineux cote a cote."
        },
        {
          question: "Quelle taille pour une salle de bain fonctionnelle ?",
          answer: "Un minimum de 4x3 blocs permet de placer un lavabo, des toilettes et une petite douche. Pour une salle de bain complete avec baignoire, prevoyez au moins 5x4 blocs. Une salle de bain de luxe necessite 6x5 blocs ou plus."
        }
      ],
      relatedSlugs: ["deco-interieur", "maison-moderne", "maison-luxe", "salle-enchantement", "guide-construction"]
    }
  },
  {
    slug: "salle-enchantement",
    keyword: "salle enchantement minecraft",
    title: "Salle d'Enchantement Minecraft : Design",
    h1: "Comment Construire une Salle d'Enchantement",
    metaDescription: "Construisez la salle d'enchantement parfaite dans Minecraft. Disposition optimale des bibliotheques, design esthetique et astuces pour maximiser les enchantements.",
    category: "building",
    volume: 170,
    content: {
      intro: "La salle d'enchantement est l'une des pieces les plus importantes de votre base, combinant fonctionnalite et potentiel esthetique. La disposition des bibliotheques determine le niveau d'enchantement maximum, mais rien ne vous empeche de rendre cet espace spectaculaire. Voici comment optimiser et embellir votre salle d'enchantement.",
      sections: [
        {
          heading: "Disposition optimale des bibliotheques",
          content: "La table d'enchantement necessite exactement 15 bibliotheques pour atteindre le niveau 30 maximum. Elles doivent etre placees a 1 bloc de distance de la table (avec un espace d'air entre les deux) et au meme niveau ou 1 bloc au-dessus. La disposition classique est un carre de 5x5 autour de la table, avec les bibliotheques sur 2 niveaux. Aucun bloc ne doit bloquer la ligne de vue entre la table et les bibliotheques."
        },
        {
          heading: "Design en salle de bibliotheque",
          content: "Transformez la piece en veritable bibliotheque. Empilez des bibliotheques du sol au plafond sur les murs, au-dela des 15 requises pour l'ambiance. Ajoutez des escaliers en bois comme etageres complementaires. Un grand bureau avec des pupitres et des livres ecrits complete l'atmosphere. Des tapis rouges au sol et des lustres en chaines donnent un style academique."
        },
        {
          heading: "Design mystique et magique",
          content: "Pour un style plus magique, placez la table d'enchantement au centre sur un piedestal en obsidienne. Entourez-la d'un cercle de bougies ou de torches de redstone. Les bibliotheques sont encastrees dans des murs de deepslate ou de pierre sombre. Des cristaux d'amethyste decorent les coins. L'eclairage tamisé avec des lanternes d'ame (soul lanterns) cree une ambiance mystique."
        },
        {
          heading: "Integrer les fonctionnalites",
          content: "Ajoutez une enclume pour combiner les enchantements et un meule pour les retirer. Des coffres etiquetes stockent les livres d'enchantement par type. Un systeme de lapidus-lazuli avec un coffre dedie evite d'en manquer. Prevoyez un alambic pour les potions de chance si vous jouez en version compatible. Une meule permet aussi de recycler l'experience des objets enchantes inutiles."
        }
      ],
      tips: [
        "Exactement 15 bibliotheques sont necessaires pour le niveau 30, pas plus pour l'effet",
        "Les torches sur les bibliotheques ne bloquent PAS le lien avec la table",
        "Gardez un stock de lapidus-lazuli dans un coffre a cote de la table",
        "Les tapis devant les bibliotheques ne bloquent pas leur effet"
      ],
      faq: [
        {
          question: "Pourquoi ma table d'enchantement ne propose pas le niveau 30 ?",
          answer: "Verifiez que vous avez exactement 15 bibliotheques, qu'elles sont a 1 bloc de distance de la table avec un espace d'air entre les deux, et qu'aucun bloc (sauf torche ou tapis) ne bloque la vue. Comptez les bibliotheques et verifiez leur hauteur (meme niveau ou 1 bloc au-dessus)."
        },
        {
          question: "Peut-on mettre des torches sur les bibliotheques ?",
          answer: "Oui, les torches, les tapis et les panneaux sur ou devant les bibliotheques ne bloquent pas leur lien avec la table. Cependant, un bloc plein entre la table et une bibliotheque (meme du verre) annule le bonus de cette bibliotheque."
        },
        {
          question: "Faut-il plus de 15 bibliotheques ?",
          answer: "Non, 15 est le maximum fonctionnel. Au-dela, les bibliotheques supplementaires sont purement decoratives. Elles n'augmentent pas les niveaux d'enchantement proposes."
        }
      ],
      relatedSlugs: ["deco-interieur", "guide-construction", "maison-survie", "base-souterraine", "maison-facile"]
    }
  },
  {
    slug: "entree-mine",
    keyword: "entree de mine minecraft",
    title: "Entree de Mine Minecraft : Idees",
    h1: "Idees d'Entree de Mine dans Minecraft",
    metaDescription: "Idees et tutos pour creer une belle entree de mine dans Minecraft. Portails miniers, decoration et amenagement de l'acces a vos tunnels.",
    category: "building",
    volume: 170,
    content: {
      intro: "L'entree de mine est souvent un simple trou dans le sol, mais avec un peu d'effort, elle peut devenir un element decoratif majeur de votre base. Un beau portail minier ajoute du caractere a votre monde et rend le minage plus immersif. Voici plusieurs styles d'entrees de mine pour tous les gouts.",
      sections: [
        {
          heading: "Entree de mine classique en bois",
          content: "Le portail classique utilise des buches comme cadre d'entree de 3x3 blocs. Ajoutez des poutres en buches horizontales au-dessus et des supports en escaliers de bois sur les cotes. Des lanternes pendent du cadre. Un chemin de rails en pente douce descend vers les galeries. Des tonneaux, des pioches en cadre item et un panneau 'Mine' completent le decor. Un auvent en dalles de bois protege l'entree."
        },
        {
          heading: "Entree creusee dans la roche",
          content: "Creusez un large arc de 5x4 blocs dans une paroi rocheuse. Encadrez l'ouverture avec de la deepslate taillee pour un aspect industriel. Ajoutez des piliers en buches de chaque cote et une pancarte miniere. Des rails avec un minecart a l'entree donnent un aspect fonctionnel. De la cobblestone moussue et des vignes autour simulent l'age de la mine."
        },
        {
          heading: "Entree avec batiment de surface",
          content: "Construisez un petit batiment de 7x5 au-dessus de l'entree de la mine. Le rez-de-chaussee contient la cage d'ascenseur ou l'escalier vers les galeries, ainsi qu'un atelier avec un four et une table de craft. Un toit en pente avec une cheminee donne l'aspect d'un local minier. Des coffres stockent les minerais en attendant la fonte. Un systeme de rails sort du batiment pour l'evacuation du minerai."
        },
        {
          heading: "Entree high-tech avec ascenseur",
          content: "Pour une entree moderne, utilisez un ascenseur a eau (colonne de bulles) ou un ascenseur a pistons. L'entree est un bloc de beton ou de fer avec des portes automatiques en fer et des detecteurs de mouvement (plaques de pression). Des lampes de redstone signalent l'etat de l'ascenseur. Un panneau de controle avec des leviers simule une interface industrielle."
        }
      ],
      tips: [
        "Un minecart et des rails a l'entree donnent immediatement un aspect minier authentique",
        "Les pioches en cadres item sur le mur signalent clairement la fonction du batiment",
        "Un eclairage chaud (lanternes) contraste bien avec l'obscurite de la mine en dessous",
        "Ajoutez un coffre de depot a l'entree pour vider votre inventaire rapidement"
      ],
      faq: [
        {
          question: "Quel est le meilleur systeme pour descendre dans une mine ?",
          answer: "L'ascenseur a eau avec des colonnes de bulles (magma pour descendre, bloc d'ame pour monter) est le plus efficace. Un escalier en colimaçon de 3x3 est simple mais prend de la place. Les echelles sont lentes mais compactes."
        },
        {
          question: "Comment eclairerr l'entree de la mine sans casser l'ambiance ?",
          answer: "Utilisez des lanternes suspendues aux poutres, des feux de camp dans des recoins, et des torches murales en profondeur. Evitez les blocs de lumiere modernes qui cassent l'ambiance rustique d'une mine."
        }
      ],
      relatedSlugs: ["base-souterraine", "maison-grotte", "guide-construction", "maison-survie", "deco-interieur"]
    }
  },
  {
    slug: "maison-villageois",
    keyword: "maison pour villageois minecraft",
    title: "Maison pour Villageois Minecraft : Guide",
    h1: "Construire des Maisons pour Villageois Minecraft",
    metaDescription: "Guide complet pour construire des maisons pour villageois dans Minecraft. Conditions de spawn, metiers, reproduction et designs optimaux.",
    category: "building",
    volume: 590,
    content: {
      intro: "Les villageois sont des PNJ essentiels pour le commerce dans Minecraft, mais pour qu'ils prospèrent, ils ont besoin de maisons adaptees. Comprendre les mecaniques de reproduction et d'attribution des metiers est cle pour creer un village fonctionnel. Ce guide couvre tout ce qu'il faut savoir pour loger vos villageois.",
      sections: [
        {
          heading: "Conditions minimales pour un logement de villageois",
          content: "Un villageois considere un lieu comme 'maison' s'il contient un lit accessible. C'est la seule condition technique. Cependant, une porte n'est plus necessaire depuis la version 1.14. Le lit doit avoir 2 blocs d'air au-dessus et le villageois doit pouvoir y acceder par pathfinding. Pour la reproduction, chaque couple a besoin de 3 lits (le 3e pour le bebe) et de nourriture (pain, carottes, pommes de terre ou betteraves)."
        },
        {
          heading: "Blocs de metier et affectation",
          content: "Chaque metier est lie a un bloc specifique : le tonnelier (tonneau), le cartographe (table de cartographie), le bibliothecaire (pupitre), le forgeron d'armes (meule), l'armurier (haut fourneau), l'outilleur (forge), le fermier (composteur), le pecheur (tonneau), le berger (metier a tisser), le boucher (fumoir), le mason (tailleur de pierre), le fletchers (table de fletching) et le religieux (alambic). Placez ces blocs dans les maisons pour attribuer les metiers."
        },
        {
          heading: "Design de maison individuelle optimale",
          content: "Une maison de villageois fonctionnelle fait 4x4 blocs interieurs. Elle contient un lit, un bloc de metier et une porte ou une ouverture. Les murs font 3 blocs de haut en planches ou cobblestone. Un toit en dalles ou escaliers ferme le tout. Placez une torche a l'interieur. Pour un village esthetique, variez les designs : maison en A, cottage, maison a colombage. Chaque maison doit etre unique mais dans le meme style."
        },
        {
          heading: "Village fonctionnel et securise",
          content: "Eclairez l'ensemble du village dans un rayon de 32 blocs pour empecher les spawns de zombies. Construisez un mur ou une cloture autour du village avec des portillons. Placez au moins 2 golems de fer (ou laissez-les spawner naturellement avec 10+ villageois). Un clocher central avec une cloche permet aux villageois de se rassembler en cas de raid. Prevoyez un bunker souterrain avec des lits en cas de siege."
        }
      ],
      tips: [
        "Un lit accessible est la seule condition pour qu'un villageois ait un foyer",
        "Les villageois sans metier s'approchent du bloc de metier disponible le plus proche",
        "3 lits et de la nourriture suffisent pour declencher la reproduction",
        "Les golems de fer spawnent naturellement dans un village de 10+ villageois avec 20+ lits",
        "Bloquez les echanges d'un villageois en le commercant une fois pour fixer son metier"
      ],
      faq: [
        {
          question: "Comment forcer un villageois a changer de metier ?",
          answer: "Detruisez son bloc de metier actuel et placez-en un nouveau. Le villageois perdra son ancien metier et en adoptera un nouveau apres quelques secondes. Attention : cela ne fonctionne pas si vous avez deja commerce avec lui au moins une fois."
        },
        {
          question: "Pourquoi mes villageois ne se reproduisent pas ?",
          answer: "Il faut 3 conditions : assez de lits (au moins 1 de plus que le nombre de villageois), de la nourriture (chaque villageois doit avoir 3 pains ou 12 carottes/pommes de terre), et la volonte (lancez-leur de la nourriture). Verifiez aussi que les lits sont accessibles."
        },
        {
          question: "Comment proteger mon village des raids ?",
          answer: "Les raids se declenchent quand un joueur avec l'effet Mauvais Presage entre dans un village. Construisez un mur solide, placez des golems de fer et une cloche. En cas de raid, les villageois se cachent dans leurs maisons. Un bunker souterrain avec des lits offre une protection supplementaire."
        }
      ],
      relatedSlugs: ["maison-facile", "maison-medievale", "guide-construction", "maison-survie", "idees-construction"]
    }
  },
  {
    slug: "base-souterraine",
    keyword: "base souterraine minecraft",
    title: "Base Souterraine Minecraft : Tuto",
    h1: "Construire une Base Souterraine dans Minecraft",
    metaDescription: "Tuto complet pour construire une base souterraine dans Minecraft. Amenagement, eclairage, securite et design pour une base cachee sous terre.",
    category: "building",
    volume: 140,
    content: {
      intro: "La base souterraine est le choix prefere des joueurs de survie hardcore et des serveurs PvP. Invisible depuis la surface, securisee naturellement par la roche, et proximite directe avec les minerais : les avantages sont nombreux. Ce guide vous montre comment creer une base souterraine confortable et fonctionnelle.",
      sections: [
        {
          heading: "Choisir la profondeur et l'emplacement",
          content: "La profondeur ideale se situe entre Y=10 et Y=40 : assez profond pour etre cache mais pas trop pour garder l'acces a la surface. Cherchez une zone sans grottes naturelles trop proches qui pourraient compromettre la securite. Un acces discret depuis la surface (trappe cachee sous un buisson) garde votre base secrete. Marquez les coordonnees pour ne jamais perdre l'emplacement."
        },
        {
          heading: "Creuser et structurer l'espace",
          content: "Commencez par creuser une grande salle centrale de 11x11 blocs sur 5 de haut. C'est le hub qui relie toutes les pieces. Creusez des couloirs de 3 blocs de large vers les pieces annexes : stockage, chambre, salle d'enchantement, ferme souterraine et atelier. Chaque piece fait 7x7 minimum. Gardez un plan mental ou physique de votre base pour ne pas vous perdre."
        },
        {
          heading: "Eclairage et ambiance",
          content: "L'eclairage est crucial sous terre. Utilisez un mix de lanternes suspendues au plafond, de blocs de lumière encastres dans les murs, et de feux de camp pour la chaleur. Les baies lumineuses pendant du plafond ajoutent un aspect naturel. Couvrez les murs en pierre brute avec de la pierre taillee ou du bois pour un interieur plus accueillant. Des tapis au sol et des bannieres murales cassent la monotonie de la pierre."
        },
        {
          heading: "Ferme souterraine et autosuffisance",
          content: "Creez une salle de ferme de 9x9 avec un plafond en verre connecte a la surface par un puits de lumiere pour faire pousser les cultures. Alternativement, utilisez des torches (niveau de lumiere 14) pour une croissance plus lente mais totalement cachee. Un elevage de champignons ne necessite aucune lumiere. Un reservoir d'eau central irrigue les parcelles. Prevoyez aussi une piece pour un generateur de cobblestone automatique."
        }
      ],
      tips: [
        "Gardez toujours une boussole de recuperation ou notez vos coordonnees sur papier",
        "Un puits de lumiere cache (1x1 bloc) vers la surface eclaire naturellement une piece",
        "Les fermes souterraines de champignons ne necessitent aucune lumiere",
        "Un tunnel d'evacuation secret est essentiel sur les serveurs PvP"
      ],
      faq: [
        {
          question: "Comment faire pousser des cultures sous terre ?",
          answer: "Les cultures poussent avec n'importe quelle source de lumiere de niveau 9+. Placez des torches ou des lanternes au-dessus de vos parcelles. Le ble, les carottes et les pommes de terre poussent normalement. Seuls les arbres et les cactus ont besoin de la lumiere du ciel pour certaines conditions."
        },
        {
          question: "Quelle profondeur est la plus securisee ?",
          answer: "Entre Y=10 et Y=20, vous etes tres profond et les joueurs ne vous trouveront pas facilement. Le risque est la lave (abondante sous Y=11 en anciennes versions). En 1.18+, le bedrock est a Y=-64 et la lave est concentree autour de Y=-54, donc Y=0 a Y=20 est un bon compromis."
        }
      ],
      relatedSlugs: ["base-secrete", "maison-grotte", "entree-mine", "maison-survie", "maison-montagne"]
    }
  },
  {
    slug: "base-secrete",
    keyword: "base secrete minecraft",
    title: "Base Secrete Minecraft : Tuto",
    h1: "Construire une Base Secrete dans Minecraft",
    metaDescription: "Tuto pour construire une base secrete dans Minecraft. Entrees cachees, pieces dissimulees et systemes redstone pour une base invisible.",
    category: "building",
    volume: 140,
    content: {
      intro: "En multijoueur ou simplement pour le plaisir, une base secrete est le summum de la construction strategique dans Minecraft. L'objectif est de cacher votre base de facon si ingenieuse que personne ne la trouvera, meme en passant juste a cote. Portes cachees, entrees sous-marines et mecanismes redstone sont au programme.",
      sections: [
        {
          heading: "Entrees cachees classiques",
          content: "La porte a piston est un classique : un mur de 2x3 blocs pousse par des pistons collants, active par un bouton ou un levier cache derriere un tableau. L'entree sous un plan d'eau utilise une trappe avec des panneaux anti-eau. L'escalier escamotable avec des pistons se replie dans le sol. Un coffre avec un systeme de redstone (coffre piege) ouvre un passage secret quand on l'ouvre."
        },
        {
          heading: "Camouflage avancé",
          content: "L'entree invisible utilise des blocs identiques a l'environnement. Dans une foret, une trappe sous un bloc d'herbe couverte de fleurs. Dans un desert, une entree sous le sable avec un systeme d'eau et de pistons. Dans une montagne, un passage cache derriere une cascade d'eau avec un espace d'air pour passer. La cle est de ne laisser aucun indice visible depuis l'exterieur."
        },
        {
          heading: "Systemes redstone de securite",
          content: "Un code d'entree avec des leviers (combinaison de 4-6 leviers dans le bon ordre) active l'ouverture. Un detecteur de jour peut ouvrir la porte uniquement la nuit. Un systeme de cle utilise un cadre item avec un objet specifique comme declencheur (comparateur de redstone). Des pieges a TNT ou des dispensers a fleches eliminent les intrus qui activent les mauvaises combinaisons."
        },
        {
          heading: "Amenagement interieur discret",
          content: "Une fois a l'interieur, la base doit etre confortable mais discrète. Pas de torches visibles depuis l'exterieur : utilisez des blocs de lumiere encastres. Les coffres sont caches dans des double-fonds (sol surelevé d'un bloc avec des coffres en dessous). Un systeme d'alerte avec des fils de redstone previent en cas d'intrusion. Prevoyez une sortie de secours secondaire cachee menant loin de l'entree principale."
        }
      ],
      tips: [
        "Ne construisez jamais de chemin visible menant a votre base",
        "Les tableaux cachent parfaitement des boutons et des leviers",
        "Utilisez un systeme de comparateur et cadre item pour une cle unique",
        "Une sortie de secours est aussi importante que l'entree principale",
        "Testez votre camouflage en demandant a un ami de trouver l'entree"
      ],
      faq: [
        {
          question: "Comment faire une porte cachee derriere un tableau ?",
          answer: "Placez des panneaux sur les blocs du mur pour creer un passage de 1x2. Placez un tableau sur les panneaux (il couvrira l'ouverture). Vous pouvez marcher a travers le tableau car les panneaux sont traversables. Pour plus de securite, ajoutez une porte a piston derriere."
        },
        {
          question: "Mon entree secrete est-elle visible sur les maps ?",
          answer: "Les maps montrent la surface du terrain, donc une base souterraine est invisible. Cependant, si votre entree modifie le terrain en surface (torches, blocs differents), elle peut etre reperee. Assurez-vous que l'exterieur est identique au terrain naturel environnant."
        }
      ],
      relatedSlugs: ["base-souterraine", "maison-grotte", "chateau-fort", "maison-survie", "entree-mine"]
    }
  },
  {
    slug: "cabane-arbres",
    keyword: "cabane dans les arbres minecraft",
    title: "Cabane dans les Arbres Minecraft : Tuto",
    h1: "Construire une Cabane dans les Arbres Minecraft",
    metaDescription: "Tuto simple pour construire une cabane dans les arbres dans Minecraft. Design compact, echelle d'acces et decoration forestiere.",
    category: "building",
    volume: 140,
    content: {
      intro: "La cabane dans les arbres est une variante plus compacte et simple de la maison arboricole. Accessible meme aux debutants, elle offre un refuge aerien charmant qui ne necessite que quelques minutes de construction. Parfaite pour une base temporaire ou un point d'observation en foret.",
      sections: [
        {
          heading: "Choisir l'arbre support",
          content: "Un chene ou un bouleau grand suffit pour une cabane simple. Pour un meilleur support, plantez 4 sapins en carre de 2x2 (ils poussent en un mega sapin avec de la farine d'os). Les arbres de jungle sont les plus grands naturellement. L'arbre doit avoir au moins 8 blocs de tronc pour placer la cabane a une hauteur confortable."
        },
        {
          heading: "La plateforme et la cabane",
          content: "A 6-8 blocs de hauteur, construisez une plateforme de 5x5 en planches autour du tronc. La cabane fait 3x3 blocs interieurs avec des murs de 2 blocs de haut en planches. Laissez un trou d'un bloc dans le sol pour l'echelle d'acces. Un toit simple en dalles de bois ferme la cabane. Placez un lit, un coffre et une table de craft a l'interieur."
        },
        {
          heading: "Acces et securite",
          content: "L'acces le plus simple est une echelle fixee au tronc de l'arbre, montant jusqu'a la trappe dans le plancher. Pour plus de securite, retirez les 2 blocs d'echelle les plus bas la nuit pour empecher les zombies de monter. Alternativement, des vignes le long du tronc offrent un acces naturel. Un point de vue sureleve permet de surveiller les alentours."
        },
        {
          heading: "Decorations forestieres",
          content: "Ajoutez des pots de fleurs aux rebords des fenetres, des lanternes suspendues sous la plateforme, et des barrieres comme balustrade sur la terrasse. Des vignes descendant de la plateforme integrent la cabane dans l'arbre. Un petit jardin suspendu avec des pots sur la terrasse ajoute de la couleur. Des feuilles supplementaires autour camouflent la cabane."
        }
      ],
      tips: [
        "Les mega sapins (2x2) offrent le meilleur support pour une cabane",
        "Une trappe dans le plancher avec une echelle est l'acces le plus compact",
        "Ajoutez des feuilles manuellement autour de la cabane pour le camouflage",
        "Un balcon avec vue est le meilleur atout d'une cabane dans les arbres"
      ],
      faq: [
        {
          question: "Comment faire pousser un arbre assez grand pour une cabane ?",
          answer: "Plantez 4 pousses de sapin en carre 2x2 et utilisez de la farine d'os sur l'une d'elles. Le mega sapin resultant est parfait. Autrement, les pousses de jungle donnent aussi de grands arbres. Assurez-vous qu'il y a assez d'espace libre au-dessus."
        },
        {
          question: "Les mobs peuvent-ils atteindre une cabane dans les arbres ?",
          answer: "Les zombies et creepers ne grimpent pas aux echelles. Les araignees peuvent grimper aux murs mais pas aux troncs d'arbre sans surface horizontale. Placez un surplomb d'un bloc autour de la plateforme pour bloquer les araignees. Les phantomes restent un danger si vous ne dormez pas."
        }
      ],
      relatedSlugs: ["maison-arbre", "maison-bois", "maison-facile", "maison-simple", "maison-survie"]
    }
  },
  {
    slug: "manoir",
    keyword: "manoir minecraft build",
    title: "Manoir Minecraft : Tuto Construction",
    h1: "Construire un Manoir dans Minecraft",
    metaDescription: "Tuto detaille pour construire un manoir dans Minecraft. Grand batiment elegant avec plusieurs ailes, interieur somptueux et jardin amenage.",
    category: "building",
    volume: 170,
    content: {
      intro: "Le manoir est un projet de construction ambitieux qui se situe entre la grande maison et le chateau. Elegant et imposant, il combine architecture residentielle de prestige avec de vastes espaces interieurs. Ce guide vous montre comment concevoir et construire un manoir qui en impose.",
      sections: [
        {
          heading: "Plan et proportions du manoir",
          content: "Un manoir classique en forme de H ou de E offre les meilleures proportions. Le corps central fait 15x10 blocs avec deux ailes laterales de 8x8. La hauteur est de 2.5 etages (12-15 blocs au faitage). L'entree principale est un porche a colonnes centré sur la facade. Les fenetres sont grandes et regulierement espacees, donnant un aspect ordonne et symetrique."
        },
        {
          heading: "Facade et architecture exterieure",
          content: "Utilisez de la pierre taillee ou des briques pour les murs principaux, avec des ornements en quartz ou beton blanc pour les corniches et encadrements de fenetres. Quatre colonnes en quartz pilier encadrent l'entree principale avec un fronton triangulaire au-dessus. Les fenetres a meneaux utilisent des barrieres en fer devant le verre. Un toit a la Mansart (deux pentes differentes) utilise des deepslate pour la pente superieure et des dalles de brique pour l'inferieure."
        },
        {
          heading: "Interieur du manoir",
          content: "Le hall d'entree est un espace double hauteur avec un grand escalier central en pierre qui se divise en deux voies. Le salon d'apparat occupe l'aile gauche avec cheminee, canapes et lustres. La salle a manger dans l'aile droite dispose d'une longue table en dalles de bois. La cuisine est en arriere avec des fours et chaudrons. L'etage accueille 4-6 chambres avec salles de bain attenantes et une bibliotheque."
        },
        {
          heading: "Jardins et dependances",
          content: "Le jardin a la francaise s'etend devant le manoir avec des haies symetriques en feuilles de chene taillees, des chemins en gravier geometriques et une fontaine centrale. Une allee de chenes mene du portail au porche. Les dependances incluent une ecURie, une orangerie en verre et un pavillon de jardin. Des lanternes sur des poteaux en fer eclairent les chemins la nuit."
        }
      ],
      tips: [
        "La symetrie est la cle de l'architecture d'un manoir classique",
        "Un grand escalier dans le hall d'entree est la signature d'un manoir",
        "Les colonnes en quartz pilier ajoutent instantanement de la noblesse",
        "Le jardin a la francaise avec ses haies geometriques complete parfaitement le manoir"
      ],
      faq: [
        {
          question: "Quelle est la difference entre un manoir et un chateau ?",
          answer: "Un manoir est une residence de prestige sans fortifications militaires (pas de douves, remparts ou tours defensives). Un chateau a un role defensif. Le manoir privilegegie l'elegance et le confort, le chateau la defense et l'autorite."
        },
        {
          question: "Combien de materiaux faut-il pour un manoir ?",
          answer: "Prevoyez 1500-2500 blocs de pierre ou brique pour les murs, 400-600 blocs de bois pour les interieurs et toitures, 200-300 blocs de quartz pour les ornements, et 150-200 blocs de verre. C'est un projet consequent en mode survie."
        }
      ],
      relatedSlugs: ["maison-luxe", "chateau-medieval", "maison-moderne", "deco-interieur", "petit-chateau"]
    }
  },
  {
    slug: "port-medieval",
    keyword: "port medieval minecraft",
    title: "Port Medieval Minecraft : Tuto",
    h1: "Construire un Port Medieval dans Minecraft",
    metaDescription: "Tuto pour construire un port medieval dans Minecraft. Quai, entrepots, navires et ambiance portuaire avec un design authentique.",
    category: "building",
    volume: 210,
    content: {
      intro: "Un port medieval ajoute une dimension maritime a vos constructions Minecraft. Avec ses quais en bois, ses entrepots de marchandises et ses navires a quai, il cree une zone animee et immersive. C'est un excellent projet pour completer un village medieval cotier.",
      sections: [
        {
          heading: "Les quais et appontements",
          content: "Construisez un quai principal en planches de chene ou sapin, s'avancant de 15-20 blocs dans l'eau. La largeur est de 5 blocs avec des barrieres sur les bords. Des pilotis en buches descendent dans l'eau tous les 4 blocs. Des appontements secondaires de 3 blocs de large partent du quai principal en T. Des bittes d'amarrage (barrieres avec des ficelles) retiennent les navires."
        },
        {
          heading: "Entrepots et batiments portuaires",
          content: "Le long du quai, construisez 2-3 entrepots de 9x7 blocs en planches et cobblestone. Les grandes portes en bois (doubles portes) permettent le passage des marchandises. L'interieur contient des coffres empiles, des tonneaux et des barils. Un bureau du maitre du port avec des pupitres et des cartes en cadres item gere les activites. Une taverne de marin complete l'ambiance."
        },
        {
          heading: "Navires a quai",
          content: "Construisez un ou deux navires amarres au quai. Un navire marchand de 15x7 blocs avec une coque arrondie en planches de sapin et un pont plat. Un ou deux mats en buche avec des bannieres blanches comme voiles. La proue et la poupe sont plus hautes avec des escaliers pour les courbes. Des tonneaux et des coffres remplissent la cale. Un petit canot en dalles de bois complete le decor."
        },
        {
          heading: "Ambiance et details maritimes",
          content: "Des lanternes sur des poteaux eclairent le quai la nuit. Des filets de peche (toiles d'araignee sur barrieres) sechent entre les poteaux. Des caisses (coffres empiles) et des sacs (laine marron) encombrent le quai. Un phare en cobblestone et brique sur un rocher proche guide les navires. Des poissons en cadres item decorent les murs des entrepots."
        }
      ],
      tips: [
        "Les buches comme pilotis dans l'eau creent l'aspect authentique d'un quai",
        "Les toiles d'araignee entre les barrieres simulent parfaitement des filets de peche",
        "Un phare sur un rocher au large est un excellent point focal pour le port",
        "Variez la hauteur des batiments le long du quai pour un profil interessant"
      ],
      faq: [
        {
          question: "Comment construire un navire realiste ?",
          answer: "Commencez par la quille (ligne de fond) en planches, puis montez les flancs en courbe avec des escaliers et des dalles. La coque est plus large au milieu et se retreci a la proue et a la poupe. Ajoutez un pont plat, des mats en buche et des bannieres comme voiles."
        },
        {
          question: "Comment simuler des vagues et du mouvement dans l'eau ?",
          answer: "Malheureusement, l'eau dans Minecraft est statique. Cependant, vous pouvez placer du varech et des algues marines pour donner de la vie a l'eau. Des blocs de source d'eau a differentes hauteurs creent des remous autour des pilotis."
        }
      ],
      relatedSlugs: ["maison-medievale", "chateau-medieval", "pont", "maison-viking", "maison-pilotis"]
    }
  },
  {
    slug: "pixel-art",
    keyword: "pixel art sur minecraft",
    title: "Pixel Art Minecraft : Guide et Modeles",
    h1: "Comment Faire du Pixel Art dans Minecraft",
    metaDescription: "Guide complet du pixel art dans Minecraft. Techniques, outils, modeles et palette de couleurs pour creer des oeuvres pixel art impressionnantes.",
    category: "building",
    volume: 390,
    content: {
      intro: "Le pixel art est une forme de construction unique dans Minecraft ou chaque bloc represente un pixel. Des portraits de personnages aux logos en passant par les paysages, les possibilites sont infinies. Ce guide vous apprend les techniques et vous donne les outils pour creer vos propres oeuvres pixel art.",
      sections: [
        {
          heading: "Les bases du pixel art",
          content: "Le pixel art utilise des blocs de laine, beton ou terracotta poses sur un mur vertical ou au sol. Chaque bloc = 1 pixel. Pour debuter, choisissez une image simple de 16x16 pixels (comme un sprite de jeu). Quadrillez l'image et reproduisez-la bloc par bloc. Commencez par le coin inferieur gauche et montez ligne par ligne. Le beton offre 16 couleurs vives, la laine est plus douce, et la terracotta a des tons terreux."
        },
        {
          heading: "Palette de couleurs Minecraft",
          content: "Les blocs de couleur disponibles sont : beton (16 couleurs vives), laine (16 couleurs douces), terracotta (16 tons terreux), terracotta emaille (16 couleurs brillantes), et verre teinté (16 transparents). Pour plus de nuances, melangez des types : le beton vert clair + la laine verte + la terracotta verte donnent 3 verts differents. Les blocs naturels (mousse, herbe, sable, neige) ajoutent des nuances supplementaires."
        },
        {
          heading: "Techniques avancees",
          content: "Le dithering (tramage) melange deux couleurs en damier pour creer une couleur intermediaire vue de loin. L'anti-aliasing place des blocs de couleur intermediaire aux bords pour lisser les courbes. La perspective utilise des blocs plus sombres en bas et plus clairs en haut pour simuler un eclairage. Pour les grands projets, utilisez un convertisseur d'image en pixel art en ligne pour generer le modele bloc par bloc."
        },
        {
          heading: "Projets pixel art populaires",
          content: "Les sprites de personnages de jeux retro (Mario, Pikachu, Link) sont parfaits pour debuter en 16x16. Les logos de marques ou d'equipes sportives font 30x30 environ. Les portraits de personnages font 50x50+ pour etre reconnaissables. Les paysages et scenes complexes peuvent atteindre 100x100+ blocs. Les pixel art au sol (flat) sont visibles en vue aerienne comme des mosaiques."
        }
      ],
      tips: [
        "Le beton colore offre les couleurs les plus vives et uniformes pour le pixel art",
        "Commencez toujours par un modele en 16x16 avant de passer aux grands formats",
        "Regardez votre pixel art de loin regulierement pour verifier le rendu global",
        "Les convertisseurs d'image en pixel art sont indispensables pour les grands projets",
        "Le dithering (damier de 2 couleurs) cree des nuances impossibles avec un seul bloc"
      ],
      faq: [
        {
          question: "Quel bloc utiliser pour le pixel art ?",
          answer: "Le beton colore est le meilleur choix : 16 couleurs vives et une texture uniforme. La laine est une alternative acceptable mais brulable. La terracotta offre des tons plus naturels et terreux. Evitez le verre teinté car il est transparent et se fond dans le fond."
        },
        {
          question: "Comment convertir une image en pixel art Minecraft ?",
          answer: "Utilisez un site web ou une application comme MinecraftArt ou PixelStacker. Uploadez votre image, choisissez la taille en blocs et les types de blocs. L'outil genere un schema bloc par bloc que vous n'avez qu'a reproduire dans le jeu."
        },
        {
          question: "Quelle taille pour un pixel art visible de loin ?",
          answer: "Pour qu'un pixel art soit reconnaissable a 50 blocs de distance, il faut au minimum 20x20 blocs. Un portrait reconnaissable necessite au moins 32x32. Pour un affichage mural dans une base, 16x16 suffit."
        }
      ],
      relatedSlugs: ["idees-construction", "guide-construction", "deco-interieur", "stade-foot", "idees-maison"]
    }
  },
  {
    slug: "toit-maison",
    keyword: "toit maison minecraft",
    title: "Toit de Maison Minecraft : Idees et Tutos",
    h1: "Comment Faire un Toit dans Minecraft",
    metaDescription: "Toutes les techniques pour construire un beau toit dans Minecraft. Toit en A, mansart, plat, pagode et plus. Tutos avec images et astuces.",
    category: "building",
    volume: 170,
    content: {
      intro: "Le toit est souvent ce qui fait ou defait l'apparence d'une maison dans Minecraft. Un bon toit transforme une boite en construction elegante. Des toits en A classiques aux toits mansart complexes, chaque style a sa technique. Maitrisez l'art du toit pour ameliorer instantanement toutes vos constructions.",
      sections: [
        {
          heading: "Toit en A (toit a deux pentes)",
          content: "Le toit le plus courant et le plus simple. Placez des escaliers face a face, montant d'un bloc a chaque rangee de chaque cote, pour creer un triangle. Fermez le sommet avec des dalles. Le debord de toit (1-2 blocs au-dela du mur) est essentiel pour un bon rendu. Utilisez des escaliers en cobblestone pour un style medieval ou en bois pour un style rustique. La pente ideale est de 45 degres (1 bloc horizontal = 1 bloc vertical)."
        },
        {
          heading: "Toit plat moderne",
          content: "Le toit plat utilise des dalles posees en bord superieur pour empecher les mobs de spawner. Ajoutez un muret de 1 bloc autour (murs en cobblestone) pour creer un acrotere. Un toit plat est parfait pour les styles moderne et contemporain. Vous pouvez y ajouter une terrasse accessible, un jardin de toit, ou des equipements decoratifs comme des climatiseurs (blocs de fer)."
        },
        {
          heading: "Toit mansart (brise)",
          content: "Le toit mansart a deux pentes differentes : une pente raide en bas et une pente douce en haut. Montez les 3-4 premiers blocs avec des escaliers verticalement (pente raide), puis continuez avec une pente de 45 degres pour le sommet. Ce style cree un espace habitable sous les toits et donne un aspect tres elegant. Il est parfait pour les manoirs et les maisons bourgeoises."
        },
        {
          heading: "Techniques de finition",
          content: "Le debord de toit est crucial : avancez les premieres rangees d'escaliers de 1-2 blocs au-dela des murs. Les lucarnes (petites fenetres dans le toit) brisent la monotonie et ajoutent de la lumiere aux combles. La faîtiere (rangée du sommet) utilise des dalles pour un rendu propre. Ajoutez des bargeboards (planches de rive) en dalles de bois sous le debord pour le detail. Une cheminee en briques ou cobblestone complete le toit."
        },
        {
          heading: "Toits speciaux",
          content: "Le toit en croupe (quatre pentes) est plus complexe : les 4 cotes montent vers le centre. Le toit en dome utilise un generateur de sphere Minecraft et des dalles/escaliers. Le toit en pagode japonaise a des extremites retroussees en escaliers inverses. Le toit en herbe viking utilise des blocs de mousse sur des dalles. Le toit en tourelle (conique) pour les tours utilise des escaliers en spirale."
        }
      ],
      tips: [
        "Le debord de toit de 1-2 blocs est la regle la plus importante pour un beau toit",
        "Les escaliers sont le bloc de base pour tout type de toit en pente",
        "Melangez les materiaux du toit avec ceux du mur pour du contraste",
        "Les lucarnes ajoutent du detail et de la lumiere au toit",
        "Terminez toujours le sommet avec des dalles pour un rendu propre"
      ],
      faq: [
        {
          question: "Comment empecher les mobs de spawner sur le toit ?",
          answer: "Les dalles en position haute et les escaliers empechent le spawn de mobs. Pour un toit plat, placez des dalles partout ou des boutons invisibles. L'eclairage avec des lanternes aux angles est aussi efficace."
        },
        {
          question: "Quel materiau est le meilleur pour un toit ?",
          answer: "Les escaliers en deepslate ou en brique de pierre noire donnent un toit sombre classique. Les escaliers en bois de sapin pour un style nordique. Les escaliers en prismarine pour un toit bleu-vert unique. Le choix depend du style architectural de votre construction."
        },
        {
          question: "Comment faire un toit pour une maison ronde ?",
          answer: "Suivez un generateur de dome Minecraft en ligne. Posez les escaliers et dalles couche par couche en suivant le patron du cercle qui retrecit a chaque niveau. Le resultat est un dome polygonal convaincant vu de loin."
        }
      ],
      relatedSlugs: ["guide-construction", "maison-facile", "maison-medievale", "maison-japonaise", "plan-maison"]
    }
  },
  {
    slug: "jardin-japonais",
    keyword: "jardin japonais minecraft",
    title: "Jardin Japonais Minecraft : Tuto",
    h1: "Construire un Jardin Japonais dans Minecraft",
    metaDescription: "Tuto pour construire un jardin japonais zen dans Minecraft. Jardin sec, bassin, pont, lanternes en pierre et vegetation traditionnelle.",
    category: "building",
    volume: 170,
    content: {
      intro: "Le jardin japonais est un art de la nature maitrisee, et Minecraft offre tous les outils pour le recreer. Du jardin zen minimaliste au jardin de promenade luxuriant, chaque element a sa place et sa signification. Ce guide vous accompagne dans la creation d'un espace de serenite virtuelle.",
      sections: [
        {
          heading: "Le jardin zen (karesansui)",
          content: "Le jardin zen utilise du sable ou du gravier blanc comme base, representant l'eau. Posez des blocs de sable blanc sur une surface plane de 15x15 minimum. Des pierres (blocs de cobblestone ou d'andesite) sont placees en groupes impairs (3, 5, 7). Des lignes dans le sable sont simulees avec des rails caches sous des dalles de sable. Le tout est borde d'un muret bas en dalles de pierre."
        },
        {
          heading: "Bassin et cours d'eau",
          content: "Creusez un bassin irregular de 7x5 blocs sur 1-2 blocs de profondeur. Bordez-le de blocs de mousse et de pierres irregulieres. Remplissez d'eau et ajoutez des nenuphars. Un petit ruisseau (1 bloc de large) alimente le bassin depuis une fontaine en bambou (shishi-odoshi) : un piston cache derriere des bambous simule le mouvement. Des poissons tropicaux animent l'eau."
        },
        {
          heading: "Vegetation et arbres",
          content: "Les cerisiers en fleurs sont la star du jardin japonais. Plantez-en 2-3 autour du bassin. Des bambous en groupes creent des ecrans naturels. Des azalees en fleurs ajoutent de la couleur au printemps. Des blocs de mousse au sol avec de l'herbe haute simulent un tapis vegetal. Un pin taille (forme arrondie avec des feuilles de chene sculptees) est un classique japonais."
        },
        {
          heading: "Structures et decorations",
          content: "Les lanternes en pierre (toro) sont des piliers de cobblestone surmontes de dalles. Un pont courbe en bois de cerisier enjambe le bassin. Un torii rouge (beton rouge) marque l'entree sacree. Des pas japonais (dalles de pierre espacees) forment un chemin de promenade. Un banc en dalles de bois invite a la contemplation. Des barrieres de bambou delimitent les zones."
        }
      ],
      tips: [
        "L'asymetrie est la regle d'or du jardin japonais : evitez la symetrie parfaite",
        "Les groupes de pierres doivent toujours etre en nombre impair (3, 5, 7)",
        "Le son de l'eau est essentiel : ajoutez au moins un point d'eau avec un courant",
        "Le jardin doit sembler naturel meme s'il est totalement construit a la main"
      ],
      faq: [
        {
          question: "Quels blocs utiliser pour les lanternes en pierre japonaises ?",
          answer: "Empilez des murets de cobblestone (1 bloc), une dalle de pierre, un bloc de cobblestone moussue, et un toit en escaliers de pierre. Pour la lumiere, cachez une lanterne marine ou une bougie a l'interieur du bloc superieur en utilisant un escalier inverse."
        },
        {
          question: "Comment faire un pin taille japonais ?",
          answer: "Placez un tronc en buche de sapin de 4-5 blocs, ajoutez des branches horizontales en buche. Sur chaque branche, posez des blocs de feuilles en forme de nuage arrondi (ovales aplatis). Le pin japonais a des branches etagees avec des masses de feuillage distinctes."
        }
      ],
      relatedSlugs: ["maison-japonaise", "temple-japonais", "pont", "deco-interieur", "idees-construction"]
    }
  },
  {
    slug: "parc-attraction",
    keyword: "parc d attraction minecraft",
    title: "Parc d'Attraction Minecraft : Tuto",
    h1: "Construire un Parc d'Attraction dans Minecraft",
    metaDescription: "Tuto pour construire un parc d'attraction dans Minecraft. Montagne russe, grande roue, manege et attractions avec redstone et rails.",
    category: "building",
    volume: 170,
    content: {
      intro: "Un parc d'attraction dans Minecraft est le projet recreatif ultime, combinant construction esthetique et mecanismes fonctionnels. Des montagnes russes en rails aux manèges a redstone, chaque attraction offre un defi technique unique. Creez un espace de divertissement que vos amis n'oublieront pas.",
      sections: [
        {
          heading: "Montagnes russes en minecart",
          content: "Les montagnes russes utilisent des rails alimentés (powered rails) et des rails classiques. Commencez par un plan de circuit avec des montees et descentes. Les rails alimentés accelerent le minecart : placez-en tous les 25 blocs en montee et au depart. Les descentes n'en ont pas besoin. Ajoutez des virages, des loopings simules (spirales) et des passages en tunnel. Une station de depart avec un bouton de lancement et des rails de detection complete l'attraction."
        },
        {
          heading: "Grande roue et manege",
          content: "La grande roue est decorative (non fonctionnelle en vanilla). Construisez un cercle de 15 blocs de diametre avec des barrieres en fer. Des nacelles en escaliers pendent a intervalles reguliers. Un axe central en barrieres de fer relie le cercle a un support. Pour un manege fonctionnel, utilisez un circuit de rails en cercle avec des minecarts decores. Les passagers tournent en continu grace aux rails alimentes."
        },
        {
          heading: "Attractions aquatiques",
          content: "Un toboggan aquatique utilise des courants d'eau sur des dalles en pente. Commencez en hauteur (15-20 blocs) et descendez en spirale ou en zigzag. Les joueurs glissent dans le courant d'eau jusqu'a un bassin de reception. Un splash ride (canal en bateau) utilise des canaux d'eau de 2 blocs de large avec des bateaux. Les descentes rapides eclaboussent le joueur pour l'effet."
        },
        {
          heading: "Zone d'ambiance et boutiques",
          content: "Amenagez l'espace entre les attractions : des chemins paves en briques multicolores, des lampadaires en barrieres de fer avec des lanternes, des bancs en escaliers face a face, et des poubelles (chaudrons). Des stands de nourriture vendent des pommes dorees et du gateau (cadres item sur des comptoirs). Une entree monumentale avec un panneau lumineux accueille les visiteurs. Des bannieres colorees et de la musique (blocs de note) completent l'ambiance festive."
        }
      ],
      tips: [
        "Les rails alimentes doivent etre espaces de 25 blocs maximum pour maintenir la vitesse",
        "Un circuit de montagne russe de 200 blocs offre une duree de trajet satisfaisante",
        "Les courants d'eau creent des toboggans aquatiques fonctionnels et amusants",
        "Ajoutez des blocs de note le long du circuit pour de la musique pendant le trajet"
      ],
      faq: [
        {
          question: "Comment faire des montagnes russes rapides ?",
          answer: "Placez des rails alimentes sur des blocs de redstone (toujours actifs) tous les 15-20 blocs en terrain plat. En descente, la gravite accelere naturellement le minecart. Ajoutez un rail de propulsion en haut de chaque montee. Plus la premiere descente est haute, plus la vitesse initiale est grande."
        },
        {
          question: "Peut-on faire des attractions fonctionnelles sans mods ?",
          answer: "Oui, les montagnes russes (rails), les canaux en bateau, les toboggans aquatiques et les circuits de minecart sont entierement fonctionnels en vanilla. Les manèges rotatifs ne sont pas possibles sans mods, mais on peut simuler l'effet avec des circuits de rails circulaires."
        },
        {
          question: "Comment attirer les joueurs dans mon parc ?",
          answer: "Construisez une entree impressionnante visible de loin. Variez les types d'attractions (vitesse, eau, defi). Ajoutez des recompenses comme des coffres caches ou des defis de parkour. Sur un serveur, faites de la publicite et organisez une inauguration evenementielle."
        }
      ],
      relatedSlugs: ["stade-foot", "idees-construction", "gratte-ciel", "pont", "guide-construction"]
    }
  },
  {
    slug: "statue",
    keyword: "minecraft statue",
    title: "Statue Minecraft : Guide de Construction",
    h1: "Comment Construire une Statue dans Minecraft",
    metaDescription: "Construisez une statue Minecraft : guide complet avec étapes, blocs recommandés et idées (chevalier, dragon, personnage). Pour Java et Bedrock.",
    category: "building",
    volume: 1900,
    content: {
      intro: "La statue est l'un des projets de construction Minecraft les plus gratifiants : elle structure un paysage, sert de point de repère et impressionne les visiteurs. Que vous vouliez une petite statue de 5 blocs ou un colosse de 100 blocs de haut, la méthode est la même : commencez par un squelette, puis ajoutez la chair. Ce guide vous montre comment passer du croquis à la construction terminée, avec les blocs et les techniques utilisés par les meilleurs builders.",
      sections: [
        { heading: "Choisir le sujet et l'échelle", content: "Avant de poser le premier bloc, décidez de la HAUTEUR finale. Une statue humanoïde fait classiquement 20 à 60 blocs : à 20 blocs vous restez sur du décoratif, à 60+ vous entrez dans le territoire des landmarks. Multipliez l'échelle d'un personnage normal par 5 (statue moyenne) à 15 (colosse). Pour le sujet, les valeurs sûres sont : chevalier en armure, dragon, personnage du jeu (Steve, Alex), animal (loup, ours), ou personnage célèbre. Évitez les visages humains réalistes en début, c'est très technique." },
        { heading: "Construire le squelette en blocs de laine", content: "Commencez TOUJOURS par un squelette en laine colorée : c'est gratuit à casser, ça se voit de loin et ça vous force à fixer les proportions avant de paufiner les détails. Posez d'abord la colonne vertébrale verticale (hauteur totale), puis les bras tendus, les jambes, la tête. Vérifiez les proportions à chaque étape en reculant : la tête doit faire environ 1/7 du corps, les jambes environ la moitié de la hauteur. Une fois satisfait, marchez autour pour voir si elle tient bien sous tous les angles." },
        { heading: "Habiller la statue avec les bons blocs", content: "Les blocs les plus utilisés pour les statues : pierre taillée et pierre moussue (effet ancien), brique de pierre (chevaliers), terre cuite et béton (couleurs vives), prismarine (sous-marin), netherrack/basalte (volcanique), bois rouge sombre (dragon). Pour les zones courbes, mélangez plusieurs nuances proches (pierre + pierre moussue + pierre fissurée) pour donner de la texture. Les escaliers et les dalles permettent de créer des courbes que les blocs pleins ne peuvent pas. Les blocs en panneaux et clôtures servent pour les détails fins." },
        { heading: "Détails et finition", content: "Ce qui sépare une statue moyenne d'une excellente : la base et les détails. Construisez un socle en pierre taillée plus large que les pieds. Ajoutez de la mousse et des vignes qui pendent (effet ancien). Pour les yeux, utilisez 1 bloc en lampe à redstone (yeux qui brillent la nuit). Pour les vêtements, mélangez 2-3 couleurs proches au lieu d'une seule. Une cape en laine ou en bannière apporte du mouvement. Enfin, éclairez la statue avec des torches ou des lanternes cachées pour qu'elle reste visible la nuit." }
      ],
      tips: ["Commencez TOUJOURS par un squelette en laine pour fixer les proportions", "Une statue humanoïde standard fait 20-30 blocs de haut, un colosse 50+ blocs", "Mélangez pierre, pierre moussue et pierre fissurée pour un effet ancien", "Les escaliers et dalles permettent de créer les courbes du corps", "Éclairez la statue avec des lampes à redstone cachées dans les yeux ou la base"],
      faq: [
        { question: "Quelle est la hauteur idéale pour une statue Minecraft ?", answer: "Pour une première statue, visez 25-30 blocs de haut. C'est suffisamment imposant pour être impressionnant sans être ingérable. Une statue de 60+ blocs (colosse) demande plusieurs heures et beaucoup plus de matériaux. Les statues légendaires (Statue de la Liberté, Christ Rédempteur) montent à 80-120 blocs." },
        { question: "Quels sont les meilleurs blocs pour une statue ?", answer: "Pour une statue ancienne : pierre taillée + pierre moussue + pierre fissurée. Pour un chevalier : brique de pierre + fer + lapis-lazuli. Pour un dragon : netherrack + obsidienne + lampes à redstone. Pour une statue colorée : terre cuite ou béton (16 couleurs disponibles)." },
        { question: "Faut-il utiliser des mods pour construire une statue ?", answer: "Non, toutes les statues iconiques de Minecraft sont construites en vanilla. WorldEdit (mod ou plugin serveur) accélère la construction des grandes statues mais n'est pas nécessaire. Litematica permet d'importer un schematic existant pour le copier bloc par bloc." }
      ],
      relatedSlugs: ["statue-de-la-liberte", "tour-eiffel", "petite-statue", "pagode", "fontaine"]
    }
  },
  {
    slug: "petite-statue",
    keyword: "petite statue minecraft",
    title: "Petite Statue Minecraft : Guide de Construction",
    h1: "Comment Construire une Petite Statue dans Minecraft",
    metaDescription: "Construisez une petite statue Minecraft (5-15 blocs) : guide étape par étape avec exemples (animal, chevalier, personnage). Idéal pour décorer une base ou un jardin.",
    category: "building",
    volume: 170,
    content: {
      intro: "Une petite statue Minecraft, c'est entre 5 et 15 blocs de haut : assez pour décorer une entrée, un jardin ou un toit, sans demander des heures de travail. C'est aussi le format idéal pour s'entraîner avant de se lancer dans une statue colossale. Ce guide propose 5 designs simples (animal, chevalier, axolotl, dragon, personnage) avec les blocs exacts à utiliser et les étapes de construction.",
      sections: [
        { heading: "Pourquoi commencer par une petite statue", content: "Les petites statues offrent un excellent ratio temps/résultat : 15-30 minutes de construction pour un élément décoratif marquant. Elles permettent aussi d'apprendre les techniques de proportions et de mélange de blocs sans engager des heures. Une fois plusieurs petites statues réussies, vous serez prêt pour les projets plus ambitieux. Astuce : disposez 3-4 petites statues le long d'une allée pour un effet 'avenue des statues' très puissant visuellement." },
        { heading: "Statue d'animal (chien, ours, loup) en 8 blocs", content: "Pour un loup ou un chien : posez 4 blocs de pierre en H couché pour le corps, 1 bloc surélevé pour la tête, 2 blocs verticaux pour les pattes avant, 2 pour les pattes arrière. Ajoutez un escalier inversé pour la queue. Couleurs : laine grise pour un loup, laine marron pour un ours, laine blanche pour un husky. Total : 8-12 blocs, 5 minutes de construction." },
        { heading: "Mini chevalier en 12 blocs", content: "Posez 1 bloc de fer pour les pieds, 3 blocs de fer pour le torse, 1 bloc de fer pour la tête. Ajoutez 2 escaliers en fer pour les épaules. Pour le casque : 1 dalle de fer en surplomb au-dessus de la tête. Pour l'épée : 1 panneau debout sur le côté. Pour le bouclier : 1 bouclier (ou 1 bloc de cuivre carré) accroché. Hauteur totale : 5-6 blocs. Idéal pour garder une porte ou un pont." },
        { heading: "Mini dragon ou animal mythique", content: "Pour un mini dragon : 3 blocs de netherrack pour le corps allongé, 1 escalier pour la tête, 2 panneaux relevés pour les ailes. Yeux en lampes de redstone (qui brillent la nuit). Pour un mini phénix : utilisez du blackstone et de la pierre rouge avec des lampes de redstone allumées en permanence pour donner l'impression de feu." }
      ],
      tips: ["Une petite statue fait 5 à 15 blocs de haut, parfaite pour décorer en peu de temps", "3-4 petites statues alignées créent un effet 'avenue' très spectaculaire", "Utilisez des escaliers et dalles pour les courbes (oreilles, queue, museau)", "Les yeux en lampes de redstone donnent vie à la statue la nuit", "Posez la statue sur un socle de 1-2 blocs pour la mettre en valeur"],
      faq: [
        { question: "Quelle est la différence avec une grande statue ?", answer: "Une petite statue (5-15 blocs) demande peu de matériaux et se construit en 15-30 minutes. Une grande statue (30+ blocs) nécessite plusieurs heures, beaucoup plus de matériaux et demande de penser un squelette d'abord. Les petites sont parfaites pour la décoration, les grandes pour les landmarks." },
        { question: "Combien de blocs pour une petite statue ?", answer: "Comptez 10 à 50 blocs selon le sujet. Un mini animal fait 8-15 blocs, un mini chevalier 12-20 blocs, une mini créature mythique 20-50 blocs. Avec quelques piles de matériaux, vous pouvez construire 5-10 petites statues." },
        { question: "Peut-on faire une petite statue en survie ?", answer: "Oui, c'est même un excellent projet de survie : matériaux accessibles (pierre, terre cuite, laine), construction rapide. Évitez juste les blocs rares (obsidienne, netherrack si vous n'avez pas accès au Nether) pour vos premières petites statues." }
      ],
      relatedSlugs: ["statue", "fontaine", "tour-chateau", "pagode", "tente"]
    }
  },
  {
    slug: "statue-de-la-liberte",
    keyword: "statue de la liberté minecraft",
    title: "Statue de la Liberté Minecraft : Guide de Construction",
    h1: "Comment Construire la Statue de la Liberté dans Minecraft",
    metaDescription: "Construisez la Statue de la Liberté dans Minecraft : guide étape par étape avec hauteur, blocs (vert-de-gris) et plan détaillé. Pour Java et Bedrock.",
    category: "building",
    volume: 90,
    content: {
      intro: "La Statue de la Liberté est l'une des constructions Minecraft les plus iconiques. Avec ses 93 mètres dans la réalité (statue + socle), elle se traduit en environ 90 à 100 blocs en jeu. Ce guide vous donne le plan complet : hauteur, choix des blocs (vert-de-gris caractéristique), socle, robe, flambeau et torche éclairée. Comptez 4 à 8 heures de construction selon votre rythme.",
      sections: [
        { heading: "Choisir l'emplacement et calculer la hauteur", content: "La Statue de la Liberté complète (statue + socle) fait environ 93 mètres dans la réalité. En Minecraft, comptez 90-100 blocs de haut total : 35-40 blocs pour le socle en pierre, 50-60 blocs pour la statue elle-même. Choisissez un emplacement dégagé sur une île ou en bord de mer pour reproduire l'effet de Liberty Island. Marquez l'empreinte au sol : la base du socle fait environ 15x15 blocs, le pied de la statue 8x8 blocs." },
        { heading: "Construire le socle en pierre", content: "Le socle est une pyramide tronquée carrée : 15x15 à la base, 8x8 au sommet, 35-40 blocs de haut. Utilisez de la brique de pierre, de la pierre taillée et des escaliers pour les corniches. Ajoutez 4 colonnes en pierre polie aux angles. Au sommet du socle, créez une plateforme carrée de 10x10 blocs où la statue se posera. Cette étape représente environ 30% du temps total." },
        { heading: "Construire le corps de la statue en vert-de-gris", content: "Le bloc clé : la couleur 'vert-de-gris' (cuivre oxydé). Utilisez du cuivre oxydé (ou de la laine cyan + lime mélangée si vous n'avez pas accès au cuivre). Construisez d'abord le squelette : colonne vertébrale (50 blocs verticaux), bras gauche tendu vers le ciel (30 blocs), bras droit replié sur le livre. Habillez avec la robe : escaliers et dalles pour les plis. Sculptez le visage avec 5-7 blocs : nez en escalier, front, menton." },
        { heading: "Couronne, flambeau et tablette", content: "La couronne : 7 pointes en escalier sur le sommet de la tête, alternant escaliers droits et inversés. Le flambeau : prolongez le bras gauche avec 3-4 blocs, puis créez une coupe en escalier inversé qui s'élargit, et terminez par 2-3 blocs de glowstone (la flamme). Pour un effet plus dramatique, ajoutez 2-3 lampes à redstone permanentes. La tablette dans la main droite : 3x4 blocs de béton blanc avec quelques pancartes pour 'graver' la date '4 juillet 1776'." }
      ],
      tips: ["Hauteur totale recommandée : 90-100 blocs (35-40 socle + 50-60 statue)", "Le bloc clé : cuivre oxydé (vert-de-gris) ou laine cyan/lime mélangée", "Construisez d'abord le squelette en laine, puis habillez avec les vrais blocs", "Le flambeau brille avec 2-3 blocs de glowstone et lampes à redstone permanentes", "Posez la statue sur une île ou un littoral pour reproduire Liberty Island"],
      faq: [
        { question: "Combien de blocs faut-il pour la Statue de la Liberté ?", answer: "Comptez environ 8000-12000 blocs au total : 4000-5000 pour le socle, 3000-4000 pour le corps, 1000-2000 pour les détails (couronne, flambeau, tablette). Le bloc principal est le cuivre oxydé : prévoyez plusieurs stacks complets." },
        { question: "Combien de temps pour la construire ?", answer: "En vanilla sans aide : 4 à 8 heures pour un joueur expérimenté, 10 à 15 heures pour un débutant. Avec WorldEdit ou Litematica (schematic), 30 à 60 minutes. C'est un projet de week-end." },
        { question: "Est-ce que le cuivre oxydé est obligatoire ?", answer: "Non, mais c'est le plus fidèle (la vraie statue est en cuivre oxydé vert). Alternative : mélanger laine cyan + laine lime + un peu de prismarine claire. Évitez les blocs trop saturés en vert : la couleur réelle est désaturée, presque grise." }
      ],
      relatedSlugs: ["statue", "tour-eiffel", "tour-chateau", "fontaine", "petite-statue"]
    }
  },
  {
    slug: "fontaine",
    keyword: "fontaine minecraft",
    title: "Fontaine Minecraft : Guide de Construction",
    h1: "Comment Construire une Fontaine dans Minecraft",
    metaDescription: "Construisez une fontaine Minecraft : 5 designs (simple, médiévale, japonaise, moderne) avec eau qui coule. Guide étape par étape pour Java et Bedrock.",
    category: "building",
    volume: 1600,
    content: {
      intro: "Une fontaine est l'élément décoratif central qui transforme une place ou un jardin en lieu vivant. En Minecraft, elle combine 3 ingrédients : un socle/bassin en pierre, une structure verticale (souvent une statue ou un pilier), et de l'eau qui coule. Ce guide propose 4 designs (simple, médiévale, moderne, japonaise) avec les blocs exacts et les étapes pas à pas. La fontaine la plus simple se construit en 15 minutes avec 30 blocs.",
      sections: [
        { heading: "Anatomie d'une fontaine Minecraft", content: "Toute fontaine a 3 parties : (1) un BASSIN au sol (carré, octogonal ou rond) qui contient l'eau au repos. (2) une STRUCTURE CENTRALE verticale (pilier, statue, arche) d'où l'eau jaillit. (3) une SOURCE D'EAU au sommet qui s'écoule en cascade. La règle d'or : creusez le bassin de 1 bloc de profondeur, posez le centre, mettez la source d'eau au sommet. L'eau s'écoule naturellement vers le bas et remplit le bassin." },
        { heading: "Fontaine simple en 15 minutes", content: "Creusez un carré 5x5 de 1 bloc de profondeur. Bordez-le avec des escaliers en pierre taillée orientés vers l'intérieur (rebord). Au centre, posez une colonne de 4 blocs de pierre polie. Au sommet, posez 1 seau d'eau : l'eau coule en cascade sur la colonne et remplit le bassin. Total : ~30 blocs, 15 minutes. Pour une variante à 4 jets : ajoutez 4 sources d'eau aux 4 coins du carrelage supérieur." },
        { heading: "Fontaine médiévale en pierre moussue", content: "Bassin octogonal 7 blocs de diamètre, 2 blocs de profondeur. Murs en brique de pierre + brique de pierre moussue alternées (effet ancien). Au centre : un pilier en pierre taillée + colonne ornée par des panneaux et clôtures, surmonté d'une statue d'animal (lion, dauphin, chevalier) qui crache l'eau. Ajoutez de la mousse, des vignes et quelques nénuphars dans le bassin. Éclairez avec 4 lanternes posées sur les coins." },
        { heading: "Fontaine moderne en quartz", content: "Bassin rectangulaire 5x9, 1 bloc de profondeur, sol en quartz lisse. Bordure en quartz ciselé. 3 sources d'eau alignées au-dessus du bassin sur 3 piliers de 5 blocs en quartz lisse. L'eau jaillit en 3 cascades parallèles. Pour un effet 'piscine japonaise' : ajoutez de la lave sous une couche de glace sur les bords (effet thermes) — attention, dangereux si on tombe." }
      ],
      tips: ["Le bassin doit faire 1 bloc de profondeur minimum pour bien retenir l'eau", "Une SOURCE d'eau (seau placé) coule indéfiniment ; un FLUX simple finit par s'arrêter", "Bordez le bassin avec des escaliers ou des dalles pour un rendu propre", "Les fontaines médiévales gagnent à utiliser pierre moussue + vignes + lanternes", "Pour 4 jets symétriques, posez 4 sources d'eau aux 4 coins du sommet"],
      faq: [
        { question: "Pourquoi mon eau ne coule pas correctement ?", answer: "L'eau Minecraft a 7 niveaux de débit. Une SOURCE (seau placé sur un bloc) crée un flux infini. Un FLUX (eau qui coule sans source) s'arrête au bout de 7 blocs. Pour une fontaine, utilisez TOUJOURS une source d'eau au sommet, pas un simple flux." },
        { question: "Comment éviter que les mobs apparaissent dans le bassin ?", answer: "Éclairez bien autour de la fontaine (lanternes, torches cachées) — au moins niveau 8 de lumière. Les mobs hostiles ne spawnent pas en pleine lumière. Vous pouvez aussi placer des dalles ou des nénuphars sur la surface de l'eau pour bloquer les spawns." },
        { question: "Peut-on faire une fontaine sans eau qui coule ?", answer: "Oui, certaines fontaines décoratives utilisent juste de l'eau au repos avec une statue centrale. Visuellement plus statique mais plus simple. Pour un effet 'eau qui jaillit sans couler', utilisez des particules en plaçant un bloc de glace au-dessus de la lave (production de gouttelettes)." }
      ],
      relatedSlugs: ["fontaine-medievale", "petite-fontaine", "moulin", "statue", "jardin-japonais"]
    }
  },
  {
    slug: "petite-fontaine",
    keyword: "petite fontaine minecraft",
    title: "Petite Fontaine Minecraft : Guide de Construction",
    h1: "Comment Construire une Petite Fontaine dans Minecraft",
    metaDescription: "Construisez une petite fontaine Minecraft (3x3) en 5 minutes. Guide simple avec blocs accessibles : pierre, eau, escaliers. Idéale pour décorer une base.",
    category: "building",
    volume: 110,
    content: {
      intro: "Une petite fontaine 3x3 est le projet décoratif le plus rentable de Minecraft : 5 minutes de construction, 15 blocs accessibles dès le début de partie, et un rendu visuel qui transforme totalement une base. Ce guide donne 3 designs ultra-simples (cube central, pilier, pierre brute) que vous pouvez construire en survie sans préparation.",
      sections: [
        { heading: "Design 1 : Fontaine carrée 3x3", content: "Creusez un carré 3x3 de 1 bloc de profondeur. Au centre, posez 1 bloc de pierre polie. Au-dessus, posez 1 seau d'eau : l'eau coule des 4 côtés du bloc central et remplit le bassin. Bordez le bassin avec 8 escaliers en pierre taillée orientés vers l'intérieur. Total : ~15 blocs, 5 minutes." },
        { heading: "Design 2 : Fontaine pilier 3x3", content: "Même bassin 3x3. Au centre, posez 3 blocs verticaux de pierre polie ou de quartz lisse. Au sommet, 1 seau d'eau. L'eau coule sur le pilier et tombe en cascade. Plus haut visuellement et plus élégant. Variante : remplacez le sommet par 1 dalle inversée + 1 source d'eau dessus pour créer un toit-cascade." },
        { heading: "Design 3 : Fontaine ronde avec escaliers", content: "Pour un effet rond sans utiliser de mods, alternez 4 blocs et 4 escaliers (orientation extérieure) en bordure d'un carré 3x3. Cela crée une forme octogonale qui ressemble à un cercle vu d'en haut. Au centre, un mini-pilier de 2 blocs avec source d'eau au sommet. Très joli dans un jardin." },
        { heading: "Personnalisation et mise en scène", content: "Rendez votre petite fontaine unique avec : 4 lanternes posées sur les coins extérieurs (joli la nuit), des nénuphars flottants dans le bassin, un seau d'axolotl dans l'eau (créature passive et colorée), des fleurs plantées tout autour. Variante 'élégante' : remplacez la pierre par du quartz lisse pour un look moderne, ou par de la pierre moussue pour un look ancien." }
      ],
      tips: ["Une petite fontaine 3x3 se construit en 5 minutes avec 15 blocs accessibles", "Le bassin doit faire 1 bloc de profondeur minimum pour retenir l'eau", "Une SOURCE d'eau (seau) crée un flux infini, un simple flux s'arrête au bout de 7 blocs", "Posez 4 lanternes aux coins pour un éclairage chaleureux la nuit", "Ajoutez nénuphars et axolotls pour un bassin vivant"],
      faq: [
        { question: "Combien de blocs pour une petite fontaine ?", answer: "Entre 10 et 20 blocs : 8 escaliers de bordure, 1-3 blocs centraux, 1 source d'eau, et 4 lanternes optionnelles. C'est l'un des projets les moins coûteux du jeu." },
        { question: "Quelle taille minimum pour une fontaine ?", answer: "Le minimum technique est 2x2 (1 bloc d'eau central avec 4 escaliers), mais 3x3 est beaucoup plus joli et reste très petit. En dessous de 3x3, la fontaine paraît tassée." },
        { question: "Faut-il des matériaux rares ?", answer: "Non, tous les blocs nécessaires sont accessibles dès le début : pierre (à miner partout), seau d'eau (3 lingots de fer), escaliers en pierre (faciles à crafter). Une petite fontaine peut se construire en moins d'1 heure de jeu après le spawn." }
      ],
      relatedSlugs: ["fontaine", "fontaine-medievale", "moulin", "jardin-japonais", "pagode"]
    }
  },
  {
    slug: "fontaine-medievale",
    keyword: "fontaine médiévale minecraft",
    title: "Fontaine Médiévale Minecraft : Guide de Construction",
    h1: "Comment Construire une Fontaine Médiévale dans Minecraft",
    metaDescription: "Fontaine médiévale Minecraft : guide complet avec pierre moussue, statues, mousse et lanternes. Tuto étape par étape pour place de village médiéval.",
    category: "building",
    volume: 90,
    content: {
      intro: "La fontaine médiévale est la pièce maîtresse de toute place de village Minecraft : pierre moussue ancienne, statue centrale qui crache l'eau, vignes qui pendent, lanternes qui éclairent la nuit. Ce guide détaille un design octogonal de 7 blocs de diamètre avec statue centrale, le tout buildable en 30-45 minutes avec des blocs accessibles en survie.",
      sections: [
        { heading: "Tracer la base octogonale", content: "Une fontaine médiévale s'inscrit traditionnellement dans un octogone (8 côtés), pas un carré. Pour tracer : posez 4 blocs alignés en croix (nord/sud/est/ouest) à 3 blocs du centre. Reliez les extrémités en diagonale (3 blocs par côté). Creusez l'intérieur de 2 blocs de profondeur. La base totale fait 7x7 blocs avec les coins coupés. C'est plus joli qu'un carré et caractéristique du style médiéval." },
        { heading: "Murs en pierre moussue mélangée", content: "Bordure du bassin : alternez brique de pierre, brique de pierre moussue et brique de pierre fissurée (effet ancien). Mur intérieur du bassin : pierre moussue + cobblestone moussue. Profondeur 2 blocs. Au sommet du mur, alternez dalles et escaliers pour un rebord crénelé typiquement médiéval. La diversité des blocs est CRUCIALE pour le rendu : 1 seul type de bloc = look industriel, 3-4 types mélangés = look médiéval crédible." },
        { heading: "Pilier central et statue", content: "Au centre du bassin, posez une colonne de 5 blocs de brique de pierre. Au sommet, sculptez une petite statue (3-5 blocs) : un dauphin, un lion, un chevalier ou un dragon. Astuce : utilisez un escalier inversé pour la 'gueule' de l'animal, et placez la source d'eau juste devant pour donner l'impression que la statue crache l'eau. La statue centrale doit dépasser le bord du bassin de 2-3 blocs minimum pour bien se voir." },
        { heading: "Détails d'ambiance médiévale", content: "Vignes qui pendent : placez 2-3 vignes sur les murs du bassin, elles descendent toutes seules. Mousse au sol : tapis de mousse autour de la fontaine, parsemé de fleurs sauvages. Lanternes : 4 lanternes posées sur des poteaux de chêne aux 4 angles cardinaux. Quelques nénuphars dans l'eau. Pour pousser le réalisme : placez quelques tonneaux et étagères en bois autour, comme si des marchands ambulants s'arrêtaient ici." }
      ],
      tips: ["Forme octogonale (7x7 avec coins coupés) plus authentiquement médiévale qu'un carré", "Mélangez brique de pierre + pierre moussue + pierre fissurée pour l'effet ancien", "Vignes sur les murs (placement clic droit) + mousse + fleurs autour", "La statue centrale doit dépasser le bord de 2-3 blocs minimum", "Lanternes sur poteaux de chêne aux 4 coins pour l'éclairage de nuit"],
      faq: [
        { question: "Quelle différence entre une fontaine moderne et médiévale ?", answer: "Médiévale : pierre moussue, fissurée, formes octogonales/rondes, vignes, statue d'animal mythique, lanternes. Moderne : quartz lisse, formes géométriques nettes (rectangulaire), eaux multiples parallèles, éclairage LED, pas de mousse ni vignes." },
        { question: "Comment faire pousser de la mousse rapidement ?", answer: "Posez des blocs de mousse, puis utilisez de la poudre d'os : la mousse s'étend en un grand cercle. Vous pouvez aussi laisser pousser naturellement à partir d'un bloc de mousse existant : elle se propage lentement aux blocs adjacents (pierre, terre, racines)." },
        { question: "Où trouver de la pierre moussue facilement ?", answer: "La pierre moussue se trouve dans les donjons, les ruines de portails du Nether et les avant-postes de pillards. Elle se craft aussi en plaçant un bloc de pierre + de la mousse dans la table de craft. C'est l'un des blocs les plus essentiels pour un look médiéval réussi." }
      ],
      relatedSlugs: ["fontaine", "petite-fontaine", "eglise-medievale", "tour-chateau", "moulin-medieval"]
    }
  },
  {
    slug: "moulin",
    keyword: "moulin minecraft",
    title: "Moulin Minecraft : Guide de Construction",
    h1: "Comment Construire un Moulin dans Minecraft",
    metaDescription: "Construisez un moulin Minecraft (à vent ou à eau) : guide complet avec ailes rotatives, mécanisme et plan détaillé. Idéal pour décorer un village médiéval.",
    category: "building",
    volume: 1300,
    content: {
      intro: "Le moulin est l'un des bâtiments les plus iconiques d'un village Minecraft médiéval. Que ce soit un moulin à vent classique avec 4 ailes rotatives ou un moulin à eau avec une roue qui tourne (visuellement, pas mécaniquement), il apporte instantanément une touche pittoresque à n'importe quelle ferme ou village. Ce guide propose les 2 designs avec mesures exactes et liste de blocs.",
      sections: [
        { heading: "Choisir entre moulin à vent et moulin à eau", content: "MOULIN À VENT : 4 ailes en haut d'une tour, idéal sur une colline ou en plaine, design classique néerlandais ou français. Plus haut (15-25 blocs), plus visible. MOULIN À EAU : une grande roue verticale au bord d'une rivière, design rural typique, plus discret mais authentique. Choisissez selon le terrain : vent en hauteur, eau près d'une rivière. Vous pouvez aussi en construire 2 différents pour varier." },
        { heading: "Construire le corps du moulin", content: "Base : carré ou octogone de 5x5 ou 7x7 blocs en brique de pierre + bois de chêne. Hauteur : 6-8 blocs pour le rez-de-chaussée. Toit conique : alternez escaliers et dalles pour créer une pente progressive. Pour un moulin à vent, ajoutez 2 étages avec petites fenêtres en verre. La porte d'entrée principale en bois sombre, avec un porche en panneaux de chêne. Astuce : le moulin doit être un peu plus large à la base qu'au sommet pour donner l'effet trapu typique." },
        { heading: "Ailes du moulin à vent (4 pales)", content: "Au sommet du moulin, posez un bloc de bois sombre orienté (centre de rotation visuel). Construisez 4 pales identiques en croix : chaque pale fait 5-7 blocs de long sur 2 blocs de large. Utilisez panneaux de bois ou trappes pour les voiles entre les pales en chêne. Conseil : alignez les 4 pales en CROIX (vertical+horizontal) ou en X (diagonales) — le X est plus dynamique visuellement, la croix plus traditionnelle. Vous pouvez aussi construire les pales légèrement inclinées vers l'avant pour un effet 3D." },
        { heading: "Roue du moulin à eau", content: "Au bord d'une rivière, construisez la roue verticale : un cercle de 5-7 blocs de diamètre en bois de chêne. Utilisez des escaliers et dalles pour donner la forme circulaire. La roue doit être à moitié immergée dans l'eau (la partie inférieure dans l'eau, la partie supérieure visible). Ajoutez 8 'pales' en panneaux de bois autour de la roue. Le moulin lui-même est plus petit qu'un moulin à vent : 5x5 au sol, 1-2 étages." }
      ],
      tips: ["Choisissez moulin à vent (en hauteur) ou moulin à eau (près d'une rivière) selon le terrain", "Les 4 pales du moulin à vent font 5-7 blocs de long, en croix ou en X", "Utilisez panneaux et trappes en bois pour les voiles entre les pales", "Pour la roue d'eau : escaliers + dalles en cercle, à moitié immergée", "Mélangez brique de pierre + bois pour un rendu authentique français/néerlandais"],
      faq: [
        { question: "Les ailes du moulin tournent-elles dans Minecraft ?", answer: "Pas par défaut en vanilla. Pour des ailes qui tournent réellement, il faut le mod Create (très populaire) qui ajoute des moulins fonctionnels. En vanilla, les ailes sont décoratives mais peuvent être animées avec des armor stands et des command blocks (très complexe)." },
        { question: "Quelle hauteur pour un moulin à vent ?", answer: "Comptez 12 à 20 blocs au-dessus du sol pour le bâtiment, plus 5-7 blocs supplémentaires pour les pales (qui dépassent au-dessus). Total : 17-27 blocs de haut. Plus c'est haut, plus c'est imposant, mais évitez de dépasser 30 blocs (devient peu crédible pour un moulin)." },
        { question: "Quels blocs pour un moulin réaliste ?", answer: "Base et corps : brique de pierre + brique de pierre moussue + bois de chêne. Toit : tuiles en escalier de nether brick (rouge) ou de blackstone (gris foncé). Pales : bois de chêne sombre + panneaux + trappes. Voile : laine blanche ou wool toile (laine blanche teintée légèrement)." }
      ],
      relatedSlugs: ["moulin-medieval", "fontaine-medievale", "eglise", "phare", "tour-chateau"]
    }
  },
  {
    slug: "moulin-medieval",
    keyword: "moulin médiéval minecraft",
    title: "Moulin Médiéval Minecraft : Guide de Construction",
    h1: "Comment Construire un Moulin Médiéval dans Minecraft",
    metaDescription: "Moulin médiéval Minecraft : guide complet avec pierre moussue, charpente apparente et plan détaillé. Style château, abbaye et village ancien.",
    category: "building",
    volume: 90,
    content: {
      intro: "Le moulin médiéval se distingue du moulin classique par son style 'charpente apparente' : structure en colombage (poutres de bois sombre visibles sur fond de pierre claire), toit en tuiles, charpente complexe sur les pales. Ce design plus travaillé prend 1-2 heures à construire mais transforme une simple ferme en place forte médiévale crédible.",
      sections: [
        { heading: "Style colombage : la signature médiévale", content: "Le colombage (poutres de bois apparentes) est LA signature de l'architecture médiévale européenne. Pour le reproduire : sur les murs, alternez bois de chêne foncé (ou de spruce) et torchis (terre cuite blanche/crème). Posez d'abord la structure en bois (poutres verticales tous les 2-3 blocs, poutres horizontales en haut et en bas, plus 1-2 diagonales par panneau), puis remplissez les espaces avec la terre cuite. Le résultat : un effet 'maison à pans de bois' très authentique." },
        { heading: "Construire la base en pierre", content: "Le rez-de-chaussée d'un moulin médiéval est en pierre (résistance à l'humidité et au temps). Hauteur : 4-5 blocs. Utilisez un mélange brique de pierre + brique de pierre moussue + cobblestone moussue. Bordez les coins avec des colonnes en pierre taillée. La porte d'entrée en bois sombre avec un linteau en pierre sculptée (escaliers inversés). Quelques petites fenêtres en verre soufflé (verre teinté blanc cassé)." },
        { heading: "Étages supérieurs en colombage", content: "Étages 2 et 3 : structure en colombage comme expliqué. Le 2e étage doit être légèrement en porte-à-faux (1 bloc plus large que le rez-de-chaussée), classique du médiéval. Toit : pente forte (45°+) en escaliers de nether brick rouge ou de blackstone. Ajoutez 1-2 lucarnes triangulaires sur les pentes. Une cheminée en brique sur le côté (pour le four du meunier)." },
        { heading: "Pales avec charpente apparente", content: "Les pales d'un moulin médiéval sont plus travaillées : structure en croix de bois apparente, voile en panneaux + trappes pour suggérer une toile tendue. Chaque pale : 1 poutre centrale en bois (5-7 blocs) + 4-6 traverses perpendiculaires en bois. Entre les traverses, panneaux ou trappes pour la voile. Au pied du moulin, ajoutez quelques sacs de farine (blocs de béton blanc cassé), une charrette en bois, des outils de paysan." }
      ],
      tips: ["Le colombage (poutres bois sur torchis) est LA signature médiévale", "Le 2e étage doit être en porte-à-faux (1 bloc plus large) pour l'authenticité", "Toit en pente forte (45°+) en nether brick rouge ou blackstone", "Pales avec charpente apparente : poutres + traverses + voile en panneaux/trappes", "Ajoutez sacs de farine, charrette et outils au pied pour l'ambiance"],
      faq: [
        { question: "Quelle différence entre moulin classique et médiéval ?", answer: "Le moulin classique a des murs lisses (pierre ou bois plein), un toit conique simple, des pales basiques. Le moulin médiéval a du colombage apparent, un toit complexe avec lucarnes, des pales travaillées avec charpente visible, et un environnement (charrette, sacs, outils) plus riche." },
        { question: "Combien de temps pour un moulin médiéval ?", answer: "Comptez 1h30 à 3h pour un moulin médiéval complet (vs 30-45 min pour un moulin classique). La complexité du colombage et de la charpente prend du temps, mais le résultat est incomparable." },
        { question: "Quels blocs pour le colombage ?", answer: "Poutres : planches de chêne foncé ou de spruce (évitez le bois clair, pas assez contrasté). Remplissage : terre cuite blanche, terre cuite crème, ou béton blanc cassé. Évitez la laine (texture trop unie). L'idéal est un contraste fort bois sombre/torchis clair." }
      ],
      relatedSlugs: ["moulin", "eglise-medievale", "fontaine-medievale", "tour-chateau", "taverne"]
    }
  },
  {
    slug: "eglise",
    keyword: "eglise minecraft",
    title: "Église Minecraft : Guide de Construction",
    h1: "Comment Construire une Église dans Minecraft",
    metaDescription: "Construisez une église Minecraft : 3 styles (médiévale, gothique, moderne) avec clocher, vitraux et plan complet. Pour Java et Bedrock.",
    category: "building",
    volume: 1300,
    content: {
      intro: "L'église est le bâtiment central de tout village Minecraft médiéval. Avec son clocher, ses vitraux, sa nef centrale et ses contreforts, elle structure l'espace urbain et sert de point de repère visible de loin. Ce guide propose 3 styles (médiévale simple, gothique imposante, moderne épurée) avec dimensions, blocs et étapes détaillées.",
      sections: [
        { heading: "Plan en croix latine (style traditionnel)", content: "Une église traditionnelle suit le plan en croix latine : une NEF centrale (long couloir), un TRANSEPT perpendiculaire (les bras de la croix) et un CHŒUR au bout (où se trouve l'autel). Dimensions standard : nef 15-20 blocs de long, 7 blocs de large ; transept 11x5 blocs ; chœur 5x5 blocs. Cette forme en croix est immédiatement reconnaissable et permet de scénariser les espaces (sacristie, chapelles latérales)." },
        { heading: "Murs et contreforts", content: "Murs principaux en brique de pierre + brique de pierre moussue (mélange anti-monotonie). Hauteur 8-10 blocs pour la nef. Tous les 3-4 blocs sur les murs extérieurs, ajoutez un CONTREFORT : une colonne en pierre qui dépasse du mur d'1 bloc et monte plus haut que le toit. Les contreforts sont la signature de l'architecture gothique et empêchent visuellement les murs de s'effondrer. Au sommet de chaque contrefort, ajoutez un pinacle en escaliers." },
        { heading: "Vitraux colorés", content: "Les vitraux sont l'élément le plus mémorable d'une église. Sur chaque mur latéral de la nef, placez 3-4 grandes fenêtres en VERRE TEINTÉ : alternez bleu, rouge, vert, jaune et violet pour un effet rosace. Format conseillé : fenêtre 2 blocs de large x 4 blocs de haut, encadrée par de la pierre. À l'avant de l'église, créez une grande ROSACE circulaire (5-7 blocs de diamètre) en alternant verre teinté de couleurs vives. La lumière du jour traversant les vitraux crée des reflets magnifiques au sol." },
        { heading: "Clocher et toit", content: "Le clocher se construit à l'avant ou sur le côté. Hauteur : 15-25 blocs au-dessus du toit principal. Forme : tour carrée 5x5 blocs avec ouvertures hautes pour 'voir' la cloche. Au sommet : toit pyramidal en escaliers de pierre, surmonté d'une croix en or (1 bloc d'or + 4 escaliers en or). Toit principal en escaliers de nether brick rouge (tuiles) ou de blackstone (ardoise). Pente forte (45°+) caractéristique du gothique." }
      ],
      tips: ["Plan en croix latine : nef + transept + chœur, immédiatement reconnaissable", "Contreforts tous les 3-4 blocs sur les murs extérieurs (signature gothique)", "Vitraux en verre teinté multicolore (bleu, rouge, vert, jaune, violet)", "Une grande rosace ronde au-dessus de l'entrée fait toute la différence", "Clocher 15-25 blocs plus haut que le toit principal, avec croix dorée au sommet"],
      faq: [
        { question: "Quelle est la différence entre église médiévale et gothique ?", answer: "Médiévale (romane) : murs épais, fenêtres petites en arc rond, plafond bas, ambiance sombre. Gothique : contreforts apparents, fenêtres hautes en arc brisé, vitraux immenses, plafond très haut, ambiance lumineuse. Le gothique est plus impressionnant mais demande plus de travail." },
        { question: "Comment éclairer l'intérieur d'une église ?", answer: "Lanternes pendues au plafond (chaînes + lanternes), chandeliers avec armor stands + torches, lampes de redstone cachées derrière l'autel. Pour un effet 'lumière divine', placez quelques blocs de glowstone juste sous le plafond (cachés par des dalles inversées)." },
        { question: "Faut-il un autel à l'intérieur ?", answer: "Oui, c'est l'élément central qui justifie l'église. Un autel simple : 3 dalles de quartz alignées, 1 chandelier au centre, 1 livre enchanté ouvert (ou un cadre d'objet avec un livre), 2 bougies allumées. À droite et gauche de l'autel : 2 statues d'anges ou de saints (3-4 blocs de haut)." }
      ],
      relatedSlugs: ["eglise-medievale", "interieur-eglise", "moulin", "fontaine-medievale", "manoir"]
    }
  },
  {
    slug: "eglise-medievale",
    keyword: "eglise medieval minecraft",
    title: "Église Médiévale Minecraft : Guide de Construction",
    h1: "Comment Construire une Église Médiévale dans Minecraft",
    metaDescription: "Église médiévale Minecraft : guide complet avec pierre moussue, vitraux et clocher. Style roman ou gothique avec dimensions et blocs détaillés.",
    category: "building",
    volume: 110,
    content: {
      intro: "L'église médiévale Minecraft, c'est l'incarnation de la pierre moussue, des vitraux et du clocher imposant. Construite en style roman (XIe-XIIe siècle) ou gothique (XIIIe-XVe siècle), elle structure tout village historique. Ce guide détaille un design roman simple (1h30 de construction) facilement adaptable en gothique pour les builders confirmés.",
      sections: [
        { heading: "Style roman vs gothique : choisir le bon", content: "STYLE ROMAN (recommandé débutant) : murs très épais, peu de fenêtres mais en arc rond, plafond bas (8 blocs), pas de contreforts, ambiance sombre et trapue. STYLE GOTHIQUE (avancé) : contreforts apparents, immenses vitraux en arc brisé, voûtes hautes (12-15 blocs), arc-boutants extérieurs, ambiance lumineuse et élancée. Pour une première église médiévale, partez sur du roman simple." },
        { heading: "Murs en pierre moussue mélangée", content: "Le secret d'une église médiévale crédible : 3-4 types de pierre mélangés. Utilisez : brique de pierre, brique de pierre moussue, brique de pierre fissurée, et un peu de cobblestone moussue. Posez les blocs de manière irrégulière (pas de motif géométrique) pour simuler une église centenaire. Murs épais : 2 blocs minimum (utilisez un cadre extérieur + intérieur avec 1 bloc d'air entre les deux pour l'ambiance authentique)." },
        { heading: "Petites fenêtres en arc rond", content: "Style roman = fenêtres rares et petites. 4-6 fenêtres par côté de la nef maximum. Forme : 1 bloc large × 3 blocs haut, terminée par 1 escalier inversé en pierre au sommet (effet arc rond). Verre teinté unique par fenêtre (pas multicolore comme dans le gothique) : alternez bleu nuit et rouge sang. La lumière qui traverse crée des taches colorées au sol, magnifique." },
        { heading: "Clocher trapu et croix", content: "Le clocher médiéval roman est trapu (large à la base, pas trop haut) : carré 5x5 blocs, hauteur 15 blocs au-dessus du toit. Au sommet, une chambre des cloches avec ouvertures grandes (3x3 blocs ouverts sur chaque face) et 1 bloc d'or suspendu (la cloche). Toit pyramidal court en escaliers de basalte poli. Au sommet : 1 croix en pierre taillée (1 bloc vertical de 4 blocs + 1 bloc horizontal de 3 blocs au tiers supérieur)." }
      ],
      tips: ["Style roman = trapu, peu de fenêtres en arc rond, plafond bas (recommandé débutant)", "Style gothique = élancé, immenses vitraux en arc brisé, contreforts (avancé)", "Mélangez 3-4 types de pierre (moussue, fissurée, cobblestone) pour le réalisme", "Fenêtres romanes : 1x3 blocs avec escalier inversé au sommet (arc rond)", "Clocher trapu carré 5x5 avec chambre des cloches ouverte au sommet"],
      faq: [
        { question: "Quels blocs pour une église médiévale réaliste ?", answer: "Murs : brique de pierre + brique de pierre moussue + brique fissurée + un peu de cobblestone moussue (mélange irrégulier). Toit : nether brick (rouge) ou blackstone (ardoise) en escaliers. Vitraux : verre teinté bleu nuit, rouge sang, jaune ambre. Clocher : pierre taillée + escaliers de basalte. Cloche : 1 bloc d'or." },
        { question: "Comment vieillir l'église pour qu'elle ait l'air ancienne ?", answer: "Ajoutez de la mousse sur le toit (placement aléatoire de blocs de mousse), des vignes qui pendent des contreforts, quelques blocs cassés (remplacer 5% des briques par de la pierre brute ou de la cobblestone), des fissures verticales en un bloc d'air. Plantez 1-2 arbres morts près de l'église." },
        { question: "Combien de temps pour une église médiévale ?", answer: "Roman simple : 1h30 à 2h pour un bâtiment 25x15 blocs. Gothique avec contreforts et vitraux : 4-6h pour un bâtiment 35x20 blocs. C'est un projet long mais l'un des plus gratifiants à finir." }
      ],
      relatedSlugs: ["eglise", "interieur-eglise", "moulin-medieval", "fontaine-medievale", "manoir"]
    }
  },
  {
    slug: "interieur-eglise",
    keyword: "interieur eglise minecraft",
    title: "Intérieur d'Église Minecraft : Guide de Décoration",
    h1: "Comment Décorer l'Intérieur d'une Église dans Minecraft",
    metaDescription: "Décorez l'intérieur de votre église Minecraft : autel, bancs, vitraux, chandeliers, bénitier. Guide complet avec idées et placements.",
    category: "building",
    volume: 50,
    content: {
      intro: "L'extérieur d'une église impressionne, mais c'est l'intérieur qui retient les visiteurs. Ce guide détaille tous les éléments d'aménagement : autel central, bancs alignés, chandeliers suspendus, bénitier d'entrée, statues latérales, et l'éclairage 'mystique' qui fait toute l'atmosphère. Les techniques fonctionnent pour une église simple comme pour une cathédrale.",
      sections: [
        { heading: "Plan de l'intérieur : nef, autel, allée centrale", content: "Réservez une ALLÉE CENTRALE de 3 blocs de large qui va de la porte d'entrée à l'autel. À gauche et à droite, alignez les BANCS (escaliers en bois inversés, 2 blocs de profondeur). Comptez 8-12 rangées de bancs pour une église moyenne. Au bout, surélevez l'AUTEL de 2 blocs (CHŒUR plus haut que la nef). Sol de la nef en dalles de pierre claire, sol du chœur en dalles de quartz pour souligner la sacralité." },
        { heading: "L'autel et son retable", content: "L'autel central : 3 dalles de quartz alignées posées sur 2 blocs de pierre. Sur l'autel : 2 chandeliers (armor stands + torches), 1 livre enchanté ouvert (cadre d'objet + livre), 1 calice (cadre + lingot d'or). Derrière l'autel, le RETABLE : un mur de 5x5 blocs en quartz décoré avec des bannières religieuses, 2-3 vitraux verticaux étroits, 1 grande croix en or au centre (1 colonne d'or de 4 blocs + 1 traverse d'or de 3 blocs)." },
        { heading: "Bancs, chandeliers et statues", content: "BANCS : alignez des escaliers en bois sombre par 4-5 blocs côte à côte, dos contre dos en double rangée. Comptez 8-12 rangées par côté. CHANDELIERS suspendus : posez des chaînes de 4-5 blocs descendant du plafond, terminez par une lanterne. 6-8 chandeliers répartis le long de la nef. STATUES LATÉRALES : dans des niches dans les murs latéraux, placez 4-6 petites statues de saints (3-4 blocs en quartz blanc, posées sur un piédestal)." },
        { heading: "Éclairage et ambiance mystique", content: "L'ambiance dépend de l'éclairage. Évitez les torches visibles (cassent l'ambiance). Cachez 6-8 blocs de glowstone derrière des dalles inversées au plafond. Sous l'autel, 2 blocs de glowstone donnent un effet 'auréole'. Près de chaque vitrail, 1 glowstone caché dans le mur fait briller le vitrail. Pour les bénitiers d'entrée : 2 chaudrons remplis d'eau de chaque côté de la porte. Quelques bougies allumées (8 sur l'autel, 16 répartis dans l'église) achèvent l'atmosphère." }
      ],
      tips: ["Allée centrale 3 blocs de large + bancs en escaliers inversés alignés", "Chœur surélevé de 2 blocs par rapport à la nef pour la sacralité", "Cachez les sources de lumière (glowstone derrière dalles inversées)", "Chandeliers suspendus = chaînes 4-5 blocs + lanternes au bout", "2 chaudrons d'eau près de l'entrée pour les bénitiers"],
      faq: [
        { question: "Comment faire des bancs d'église réalistes ?", answer: "Alignez des escaliers en bois sombre (chêne foncé ou spruce) par 4-5 côte à côte. Pour les bancs en double rangée : posez 2 escaliers dos à dos avec 1 bloc d'air entre eux pour l'allée. Comptez 8-12 rangées par côté de la nef pour une église moyenne." },
        { question: "Faut-il un orgue dans l'église ?", answer: "C'est un excellent ajout. Construisez-le en hauteur (sur une mezzanine au-dessus de l'entrée) : 5x3 blocs de panneaux noirs (touches de l'orgue) sur une rangée de 7 blocs verticaux de quartz polis (les tuyaux). 4-6 escaliers en bois pour l'enceinte. Très impressionnant visuellement." },
        { question: "Comment animer l'autel pour une cérémonie ?", answer: "Ajoutez des particules autour de l'autel avec un command block (/particle end_rod ~ ~1 ~ 0.3 0.5 0.3 0.01 5). Pour un effet 'consécration', combinez avec /playsound sur un block d'enchantement. Sans command block, utilisez 4 chandeliers allumés en permanence + 1 baton d'incandescence (talisman) dans un cadre." }
      ],
      relatedSlugs: ["eglise", "eglise-medievale", "deco-interieur", "salle-enchantement", "manoir"]
    }
  },
  {
    slug: "labyrinthe",
    keyword: "minecraft labyrinthe",
    title: "Labyrinthe Minecraft : Guide de Construction",
    h1: "Comment Construire un Labyrinthe dans Minecraft",
    metaDescription: "Construisez un labyrinthe Minecraft : haies, murs de pierre, pièges et énigmes. Guide complet avec plan et techniques pour mini-jeu serveur.",
    category: "building",
    volume: 880,
    content: {
      intro: "Le labyrinthe est l'un des projets les plus amusants à construire ET à parcourir dans Minecraft. Que ce soit un petit labyrinthe de jardin pour décorer ou un mega-labyrinthe pour serveur multijoueur, le principe est le même : créer un dédale avec exactement UNE solution. Ce guide explique les algorithmes simples pour générer un labyrinthe sans bug, le choix entre haies/pierre/glace, et comment ajouter pièges et récompenses.",
      sections: [
        { heading: "Tracer le plan sur papier (ou Excel)", content: "AVANT de poser le moindre bloc, dessinez le plan sur papier ou tableur. Format recommandé : grille carrée 16x16 ou 32x32 cases. Marquez l'ENTRÉE (E) et la SORTIE (S). Tracez UN seul chemin valide de E vers S, en zig-zag. Ajoutez ensuite les FAUX CHEMINS (impasses) qui partent du chemin principal mais finissent en cul-de-sac. Plus le labyrinthe a d'impasses, plus il est difficile. Visez 3-5 impasses pour un débutant, 10+ pour un labyrinthe corsé." },
        { heading: "Construire les murs (haies, pierre, glace)", content: "Choix des murs : HAIES (feuilles de chêne) pour un labyrinthe de jardin esthétique. PIERRE/COBBLESTONE pour un labyrinthe sombre, hostile, type donjon. GLACE pour un labyrinthe transparent et glissant (mode hard). Hauteur des murs : MINIMUM 3 blocs (impossible de sauter par-dessus). Largeur des murs : 1 bloc suffit. Largeur des couloirs : 2 blocs minimum (pour passer confortablement). Construisez les murs sur la grille de votre plan papier." },
        { heading: "Ajouter pièges et énigmes", content: "Un labyrinthe sans pièges est trop facile. Idées : (1) Pièges à pression sur le sol → activent un piston qui bouche le chemin de retour. (2) Mobs (zombies, squelettes) lâchés dans des sections sombres. (3) Trous cachés (1 bloc d'air dans le sol, chute de 5+ blocs avec dégâts). (4) Énigmes type 'choisir la bonne porte parmi 3' avec leviers et redstone. (5) Téléporteurs (command blocks) qui renvoient au début. Espacez les pièges, n'en mettez pas un à chaque virage." },
        { heading: "Récompense finale et système de score", content: "Au bout du labyrinthe (sortie), placez une RÉCOMPENSE motivante : un coffre rempli (lingots de diamant, armure enchantée, étoiles du Nether, blocs rares) ou un téléporteur vers une zone exclusive. Pour un labyrinthe de serveur, ajoutez un panneau qui enregistre les vainqueurs (commande /scoreboard). Optionnel : un timer (minuteur en redstone à l'entrée) pour mesurer le temps de parcours. Ajoutez aussi des INDICES dispersés dans certaines impasses (panneaux avec texte 'pas par ici') pour aider sans donner la solution." }
      ],
      tips: ["Plan sur papier AVANT construction : entrée, sortie, 1 seul chemin valide, plusieurs impasses", "Murs minimum 3 blocs de haut (impossible de sauter par-dessus)", "Couloirs 2 blocs de large minimum (pour passer confortablement)", "Variez les pièges : pistons, mobs, trous, énigmes (un piège tous les 4-5 virages)", "Récompense finale motivante : coffre de loot ou téléporteur exclusif"],
      faq: [
        { question: "Quelle taille pour un bon labyrinthe Minecraft ?", answer: "Petit (jardin) : 16x16 blocs, 5 minutes à parcourir, ~30 min de construction. Moyen : 32x32 blocs, 10-15 min de parcours, 2h de construction. Grand (serveur) : 64x64 blocs, 30+ min de parcours, 6-8h de construction. Pour un débutant, partez sur 16x16 ou 24x24." },
        { question: "Comment garantir qu'il y a une seule solution ?", answer: "Tracez d'abord le chemin valide unique sur papier (sans aucune ramification). Puis ajoutez les impasses comme des branches du chemin principal qui se terminent en cul-de-sac. Tant que vous ne créez pas de boucle qui rejoint deux points distincts du chemin valide, il y aura toujours UNE solution unique." },
        { question: "Peut-on générer un labyrinthe automatiquement ?", answer: "Oui, plusieurs solutions : (1) plugins serveur comme MazeMaker, (2) sites externes comme MazeGenerator.net qui exporte une schematic Litematica, (3) datapacks qui génèrent un labyrinthe avec command blocks. Mais construire à la main reste plus satisfaisant." }
      ],
      relatedSlugs: ["base-secrete", "petit-chateau", "donjon-construction", "tour-chateau", "parc-attraction"]
    }
  },
  {
    slug: "phare",
    keyword: "phare minecraft",
    title: "Phare Minecraft : Guide de Construction",
    h1: "Comment Construire un Phare dans Minecraft",
    metaDescription: "Construisez un phare Minecraft fonctionnel : tour cylindrique, lampe rotative au sommet, escalier intérieur. Guide complet avec plan et blocs détaillés.",
    category: "building",
    volume: 880,
    content: {
      intro: "Le phare est le point de repère parfait sur la côte, en bord de lac ou même sur une île au milieu de l'océan. Visible de loin, il sert à la fois de décoration impressionnante et de balise d'orientation pour ne pas se perdre la nuit. Ce guide propose 2 designs : un phare classique (rouge/blanc) et un phare moderne (béton blanc), avec lampe au sommet et escalier intérieur fonctionnel.",
      sections: [
        { heading: "Choisir l'emplacement et la hauteur", content: "Le phare se construit IDÉALEMENT en hauteur naturelle : promontoire rocheux, île de quelques blocs au large, falaise. Hauteur recommandée : 25-40 blocs (visible de très loin). Plus haut, le phare devient instable visuellement. Pour un phare de port, 20-25 blocs suffisent. Pour un phare de pleine mer, 35-40 blocs. La base doit être plus large que le sommet pour la stabilité visuelle (effet conique)." },
        { heading: "Construire la tour cylindrique", content: "Une vraie tour ronde n'est pas possible avec des blocs cubiques, mais on s'en approche avec un OCTOGONE. Tracez un octogone de 5 blocs de diamètre à la base. Empilez les blocs verticalement sur 25-30 blocs de haut. Pour donner l'effet conique, RÉDUISEZ la largeur d'1 bloc tous les 8 blocs de hauteur (passer de 5 à 4 puis 3). Alternez 4 anneaux de pierre blanche (béton blanc ou diorite polie) et 4 anneaux de pierre rouge (terre cuite rouge ou nether brick) pour le motif iconique rouge/blanc." },
        { heading: "Lampe au sommet (lanterne ou phare actif)", content: "Au sommet de la tour, élargissez d'1 bloc pour créer une PLATEFORME 6x6 blocs (la salle de la lanterne). Murs vitrés (verre transparent) avec piliers en pierre aux 4 coins. À l'intérieur : 1 bloc de PHARE (beacon Minecraft, fait avec 3 obsidiennes + 5 verres + 1 étoile du nether) sur une pyramide de 1 niveau (9 blocs de fer/or/diamant/émeraude). Le faisceau monte verticalement, visible de très loin. Toit conique au-dessus en escaliers de pierre rouge." },
        { heading: "Escalier intérieur en colimaçon", content: "L'intérieur du phare doit être accessible (sinon c'est juste de la déco). Construisez un ESCALIER EN COLIMAÇON : 8 escaliers en pierre par révolution (1 par côté de l'octogone), montant régulièrement. Au centre, laissez un PUITS DE LUMIÈRE (1 bloc d'air vertical du sommet à la base). À chaque étage, ajoutez une petite pièce avec une fenêtre (chambre du gardien, salle des cartes, salle radio). Au sommet, l'échelle finale mène à la salle de la lanterne." }
      ],
      tips: ["Hauteur recommandée : 25-40 blocs selon l'emplacement (port=25, île=35-40)", "Forme octogonale pour simuler une tour ronde", "Alternez 4 blocs blancs / 4 blocs rouges pour le motif iconique", "Bloc PHARE + pyramide de fer au sommet pour un faisceau lumineux fonctionnel", "Escalier en colimaçon intérieur + puits de lumière central"],
      faq: [
        { question: "Comment activer le faisceau du phare Minecraft ?", answer: "Posez le bloc PHARE (beacon) sur une pyramide d'au moins 9 blocs de fer/or/diamant/émeraude (niveau 1). Ouvrez le menu en cliquant droit, sélectionnez un effet, payez avec 1 lingot de fer/or/etc. Le faisceau apparaît immédiatement, visible à plusieurs centaines de blocs. Pour augmenter la portée des effets, agrandissez la pyramide (4 niveaux = effets sur 50 blocs autour)." },
        { question: "Faut-il que le phare fonctionne ou peut-il être décoratif ?", answer: "Les deux marchent. PHARE FONCTIONNEL : utilisez un bloc beacon au sommet (visible de très loin, donne des effets autour). PHARE DÉCORATIF : remplacez par des lampes à redstone alimentées en permanence + des lanternes. Le décoratif est moins coûteux (pas besoin d'étoile du nether) mais le faisceau ne monte pas dans le ciel." },
        { question: "Quelle largeur pour la base du phare ?", answer: "5x5 blocs minimum pour qu'il y ait place pour l'escalier intérieur + un peu d'espace habitable. 7x7 pour un phare confortable avec plusieurs pièces aux étages. En dessous de 5x5, l'intérieur est inutilisable. Au-dessus de 9x9, le phare paraît trapu et peu élégant." }
      ],
      relatedSlugs: ["phare-medieval", "tour-chateau", "moulin", "port-medieval", "fontaine"]
    }
  },
  {
    slug: "phare-medieval",
    keyword: "phare médiéval minecraft",
    title: "Phare Médiéval Minecraft : Guide de Construction",
    h1: "Comment Construire un Phare Médiéval dans Minecraft",
    metaDescription: "Phare médiéval Minecraft : guide complet avec pierre moussue, brasero au sommet et tour ronde. Idéal pour port médiéval ou côte historique.",
    category: "building",
    volume: 70,
    content: {
      intro: "Avant les phares modernes à lentille de Fresnel (XIXe siècle), les marins se repéraient grâce aux PHARES MÉDIÉVAUX : grandes tours de pierre avec un BRASERO ouvert au sommet (un feu visible de loin). Ce design plus austère et authentique convient parfaitement à un port médiéval Minecraft. Comptez 1h30 de construction.",
      sections: [
        { heading: "Différences avec un phare moderne", content: "Phare moderne : tour rouge/blanc, lampe électrique au sommet, escalier en colimaçon, salle vitrée. Phare médiéval : tour entièrement en pierre (pas de couleur), BRASERO ouvert au sommet (feu visible la nuit), créneaux/merlons défensifs, escalier extérieur sur certains designs. Le médiéval est plus court (15-25 blocs vs 25-40 pour le moderne) et plus trapu. Il s'inscrit parfaitement dans un système défensif de port (combiné à des murailles)." },
        { heading: "Tour ronde en pierre brute mélangée", content: "Tracez un octogone de 5-7 blocs de diamètre à la base. Murs en mélange : brique de pierre + brique de pierre moussue + cobblestone moussue (pour le côté ancien). Pas d'alternance de couleurs comme le phare moderne — ici, un look uniformément 'usé par le temps'. Hauteur : 15-25 blocs. Tous les 5 blocs de hauteur, ajoutez une CORNICHE en escaliers inversés faisant le tour de la tour (effet stratifié). Petites fenêtres en fente verticale (1 bloc large × 3 hauts) sur les côtés tous les 3-4 blocs." },
        { heading: "Brasero ouvert au sommet", content: "Au sommet, élargissez d'1 bloc pour créer une PLATEFORME OUVERTE 7x7 blocs entourée de créneaux (alternance dalles+blocs sur le pourtour, comme un château). Au centre : un BRASERO. Construction : 4 blocs de pierre en carré creux 3x3 → poser 1 NETHERRACK au centre → poser du FEU dessus (briquet sur netherrack = feu permanent). Le feu brûle indéfiniment et émet de la lumière niveau 15. Visible à 100+ blocs la nuit. Ajoutez 4 piliers d'angle de 4 blocs hauts qui supportent un toit conique en escaliers (toit ouvert sur les côtés pour laisser sortir la fumée)." },
        { heading: "Détails médiévaux et environnement", content: "Pour ancrer le phare dans son époque : ajoutez 2-3 vignes qui pendent des corniches, une cloche en or à mi-hauteur (1 bloc d'or suspendu, qu'on sonne en cas de tempête), un treuil en bois à la base (charrette + chaînes pour monter le bois du brasero). Au pied du phare, construisez une petite hutte du gardien (4x4 blocs en bois + pierre, avec lit, four et coffre). Quelques tonneaux de poisson séché (déco port) achèvent l'ambiance." }
      ],
      tips: ["Brasero au sommet = netherrack + feu (permanent, lumière niveau 15)", "Tour ronde octogonale 5-7 blocs de diamètre, hauteur 15-25 blocs", "Pierre uniformément 'usée' (moussue, fissurée) sans alternance de couleurs", "Cornichesen escaliers inversés tous les 5 blocs (effet stratifié)", "Hutte du gardien à la base + treuil pour monter le bois"],
      faq: [
        { question: "Comment faire un feu permanent en haut du phare ?", answer: "Posez 1 bloc de NETHERRACK et utilisez un briquet dessus : le feu brûle indéfiniment sans s'éteindre. C'est la seule méthode pour un feu permanent en vanilla. Évitez de poser du feu sur du bois (incendie qui se propage) ou sur de la pierre (feu temporaire qui s'éteint)." },
        { question: "Le phare médiéval est-il visible la nuit ?", answer: "Oui, le brasero (feu sur netherrack) émet de la lumière niveau 15, visible à 100+ blocs la nuit. C'est moins puissant qu'un beacon (qui projette un faisceau dans le ciel), mais plus authentique pour un setting médiéval. Augmentez la portée en ajoutant des lanternes sur les créneaux." },
        { question: "Faut-il combiner avec une muraille ?", answer: "Idéal mais pas obligatoire. Un phare médiéval s'intègre parfaitement dans un système de défense côtière : muraille basse en cobblestone moussue + tour de garde + phare au point culminant. Cela transforme un simple phare en complexe portuaire crédible." }
      ],
      relatedSlugs: ["phare", "tour-chateau", "port-medieval", "moulin-medieval", "fontaine-medievale"]
    }
  },
  {
    slug: "tour-eiffel",
    keyword: "tour eiffel minecraft",
    title: "Tour Eiffel Minecraft : Guide de Construction",
    h1: "Comment Construire la Tour Eiffel dans Minecraft",
    metaDescription: "Construisez la Tour Eiffel dans Minecraft : guide étape par étape avec hauteur, charpente métallique et plan détaillé. Pour Java et Bedrock.",
    category: "building",
    volume: 480,
    content: {
      intro: "La Tour Eiffel est l'un des projets de construction Minecraft les plus impressionnants à réussir : 330 mètres dans la réalité, soit 100 à 130 blocs en jeu, avec sa charpente métallique en treillis caractéristique. Ce guide donne le plan complet : 4 pieds d'angle, 2 plateformes (1er et 2e étages), flèche au sommet, et la fameuse charpente diagonale. Comptez 6-10 heures de construction.",
      sections: [
        { heading: "Calculer l'échelle et l'emplacement", content: "La vraie Tour Eiffel mesure 324 mètres. En Minecraft (1 bloc = 1 mètre approximatif), comptez 100-130 blocs de haut pour un rendu fidèle. Empreinte au sol : 30x30 blocs (les 4 pieds forment un carré de 30 blocs de côté). Choisissez un emplacement DÉGAGÉ : grande plaine, bord de rivière (à reproduire la Seine en bonus), ou centre d'une ville Minecraft. Marquez les 4 coins de l'empreinte au sol avec des piquets de bois." },
        { heading: "Construire les 4 pieds d'angle", content: "Les 4 pieds sont la partie la plus visible et complexe. Chaque pied part DU SOL, fait 30-40 blocs de haut, et CONVERGE vers le centre selon une courbe parabolique. Méthode simplifiée : commencez chaque pied en bas par 4 blocs de fer (carré 2x2) au coin du périmètre 30x30. Toutes les 5 hauteurs, RAPPROCHEZ d'1 bloc vers le centre. Au sommet (hauteur ~35), les 4 pieds se rejoignent au-dessus du centre, formant la base du 1er étage. Chaque pied utilise des blocs de fer avec quelques poutres diagonales en panneaux ou en escaliers (pour la charpente apparente)." },
        { heading: "Plateformes 1er et 2e étage", content: "1ER ÉTAGE (vers 35 blocs) : plateforme carrée 12x12 blocs, sol en panneaux de fer ou dalles de fer brut, garde-corps en barreaux de fer (4 blocs de haut autour). À cet étage, vous pouvez créer un mini-restaurant ou une zone d'observation. 2E ÉTAGE (vers 70 blocs) : plateforme plus petite 8x8 blocs, même style. Entre le 1er et le 2e étage, la tour rétrécit progressivement (réduction de largeur tous les 5 blocs). Du 1er au 2e étage, la structure devient une simple colonne carrée de 6x6 blocs en charpente métallique." },
        { heading: "Sommet et antenne", content: "Du 2e étage au sommet (hauteur 100-130), construisez une COLONNE EFFILÉE qui passe de 6x6 à 2x2 blocs en haut. Sommet : 4 blocs de fer en carré 2x2 montant verticalement sur 8-10 blocs (le pylône). Au-dessus, l'ANTENNE : 1 bloc vertical de paratonnerre (Minecraft 1.17+) ou 1 colonne de 3 blocs de fer terminée par 1 dalle. Optionnel : ajoutez 4 lanternes au sommet pour un éclairage nocturne (la vraie Tour Eiffel scintille). Pour les puristes, ajoutez le drapeau français au sommet (3 bannières bleu, blanc, rouge)." }
      ],
      tips: ["Hauteur cible : 100-130 blocs (échelle 1m = 1 bloc)", "Empreinte au sol : 30x30 blocs (les 4 pieds)", "Les 4 pieds CONVERGENT vers le centre (rapprochement d'1 bloc tous les 5 blocs de hauteur)", "Charpente apparente : panneaux et escaliers diagonaux entre les blocs de fer", "1er étage à 35 blocs, 2e étage à 70 blocs, sommet à 100-130 blocs"],
      faq: [
        { question: "Combien de blocs pour la Tour Eiffel Minecraft ?", answer: "Comptez 5000-8000 blocs au total : 2000-3000 pour les 4 pieds, 1500 pour la colonne centrale, 500-1000 pour les plateformes, 1000 pour les détails de charpente diagonale. Le bloc principal est le BLOC DE FER (très demandeur en lingots — prévoyez 50+ stacks)." },
        { question: "Combien de temps pour la construire ?", answer: "En vanilla sans aide : 6 à 10 heures pour un joueur expérimenté, 15-20h pour un débutant. Avec WorldEdit : 30-60 minutes. C'est un projet de week-end ambitieux mais l'un des plus emblématiques." },
        { question: "Faut-il du fer ou du bois pour la Tour Eiffel ?", answer: "La vraie Tour Eiffel est en FER (fer puddlé), donc utilisez les blocs de fer. Si vous manquez de fer, le BLOC DE FER BRUT (raw iron block) ou la couleur GRISE (béton ou laine grise) fonctionnent comme alternatives. Évitez le bois : la Tour Eiffel n'est pas en bois historiquement et c'est un détail majeur." }
      ],
      relatedSlugs: ["statue-de-la-liberte", "tour-chateau", "tour-japonaise", "phare", "statue"]
    }
  },
  {
    slug: "tour-chateau",
    keyword: "tour chateau minecraft",
    title: "Tour de Château Minecraft : Guide de Construction",
    h1: "Comment Construire une Tour de Château dans Minecraft",
    metaDescription: "Construisez une tour de château Minecraft : créneaux, meurtrières, toit conique et escalier intérieur. Guide complet avec dimensions et blocs.",
    category: "building",
    volume: 170,
    content: {
      intro: "La tour de château est un élément architectural fondamental : tour d'angle d'un fort, donjon central, tour de garde isolée. Avec ses créneaux défensifs, ses meurtrières et son toit conique, elle structure visuellement n'importe quel château. Ce guide détaille un design de tour ronde de 5 blocs de diamètre × 20 blocs de haut, parfait pour servir de tour d'angle ou de point d'observation.",
      sections: [
        { heading: "Forme : ronde, carrée ou hexagonale", content: "TOUR RONDE (octogone en réalité) : la plus élégante mais la plus complexe à construire (utiliser des escaliers et dalles pour les coins). TOUR CARRÉE : la plus simple, classique pour un château français médiéval. TOUR HEXAGONALE : compromis entre les deux, idéal pour les châteaux fantaisie. Pour cette guide, on construit une TOUR RONDE (octogonale) qui reste accessible aux débutants. Diamètre standard : 5 blocs (pour intérieur habitable) à 9 blocs (pour grandes tours)." },
        { heading: "Construire le corps de la tour", content: "Tracez un octogone de 5 blocs de diamètre. Empilez verticalement sur 18-22 blocs de haut. Murs en BRIQUE DE PIERRE + BRIQUE DE PIERRE MOUSSUE (mélange anti-monotonie). Tous les 5 blocs de hauteur, ajoutez une CORNICHE en escaliers inversés faisant le tour. Ajoutez 4-6 MEURTRIÈRES verticales (1 bloc large × 2 hauts, en croix avec 1 bloc horizontal au milieu) sur les murs, à des hauteurs variées. La porte d'entrée est à la base (2 blocs hauts × 1 large)." },
        { heading: "Créneaux et chemin de ronde", content: "Au sommet de la tour, élargissez d'1 bloc pour créer une PLATEFORME 7x7 blocs (chemin de ronde). Bordez-la de CRÉNEAUX : alternance de blocs pleins (merlons) et de creux (1 bloc de hauteur entre 2 merlons). Pattern classique : 1 bloc plein, 1 bloc d'air, 1 bloc plein, etc. tout autour de la plateforme. Au sol du chemin de ronde, posez des dalles de pierre. Cette plateforme défensive est l'élément le plus reconnaissable d'une tour de château." },
        { heading: "Toit conique et fanion", content: "Au-dessus du chemin de ronde, construisez le TOIT CONIQUE : superposez des escaliers en pierre rouge (nether brick) en réduisant le diamètre d'1 bloc à chaque niveau. Hauteur du toit : 5-7 blocs. Au sommet, posez 1 bloc de pierre + 1 panneau debout (le mât du fanion). Sur le panneau, suspendez 1 bannière colorée (rouge avec un blason, ou unie selon vos goûts). Ce détail fait toute la différence visuelle." }
      ],
      tips: ["Diamètre standard : 5 blocs (intérieur habitable) à 9 blocs (grandes tours)", "Hauteur recommandée : 18-22 blocs pour une tour proportionnée", "Créneaux au sommet : alternance bloc plein / 1 bloc d'air, pattern classique", "Toit conique en escaliers de nether brick rouge (tuiles)", "Ajoutez un mât de bannière au sommet pour personnaliser"],
      faq: [
        { question: "Quelle hauteur idéale pour une tour de château ?", answer: "Pour une tour d'angle d'un château : 15-20 blocs (proportionnelle aux murailles). Pour un donjon central : 25-35 blocs (doit dominer le reste du château). Pour une tour isolée (tour de garde) : 18-25 blocs. Au-delà de 35 blocs, la tour devient peu crédible architecturalement." },
        { question: "Comment faire un escalier intérieur dans une tour ronde ?", answer: "Un escalier en colimaçon : posez 8 escaliers par révolution (1 par côté de l'octogone), montant régulièrement. Cela demande un diamètre intérieur d'au moins 5 blocs pour être confortable. Alternative plus simple : escalier droit le long d'un mur, avec un palier qui change de direction tous les 5 blocs." },
        { question: "Quels blocs pour une tour médiévale réaliste ?", answer: "Murs : brique de pierre + brique de pierre moussue (60/40) + un peu de brique fissurée. Toit : escaliers de nether brick rouge ou de blackstone. Détails : pierre taillée pour les corniches, panneaux de bois sombre pour les fenêtres internes, bannière colorée au sommet. Évitez la cobblestone seule (look 'cabane'), trop générique." }
      ],
      relatedSlugs: ["chateau-fort", "chateau-medieval", "petit-chateau", "tour-japonaise", "phare-medieval"]
    }
  },
  {
    slug: "tour-japonaise",
    keyword: "tour japonaise minecraft",
    title: "Tour Japonaise Minecraft : Guide de Construction",
    h1: "Comment Construire une Tour Japonaise dans Minecraft",
    metaDescription: "Construisez une pagode ou tour japonaise Minecraft : étages superposés, toits courbés et bois rouge. Guide complet avec design authentique.",
    category: "building",
    volume: 90,
    content: {
      intro: "La tour japonaise (souvent une pagode bouddhiste) est l'un des bâtiments les plus distinctifs de l'architecture asiatique : étages superposés à la même base, toits courbés en avant-toits prononcés, structure en bois rouge. Ce guide détaille une pagode à 5 étages de 25 blocs de haut, design typiquement japonais, en 1-2h de construction.",
      sections: [
        { heading: "Caractéristiques d'une pagode japonaise", content: "3 traits distinctifs à respecter : (1) ÉTAGES IDENTIQUES en plan mais réduits en taille au fur et à mesure (effet pyramidal). (2) AVANT-TOITS COURBÉS qui dépassent largement (1-2 blocs de plus que l'étage en dessous). (3) BOIS ROUGE (warped ou crimson dans Minecraft, ou planches de chêne foncé teintées) pour la structure. Les couleurs typiques sont rouge cinabre + or + blanc cassé. Évitez les couleurs vives modernes." },
        { heading: "Construire le rez-de-chaussée", content: "Base carrée 7x7 blocs en pierre claire (diorite polie ou andésite polie pour l'effet pierre japonaise). Hauteur du rez-de-chaussée : 5 blocs. Murs en planches de bois cherry (cerisier, Minecraft 1.20+) ou en planches de spruce avec poutres horizontales en chêne foncé. Porte centrale d'entrée : 2 blocs hauts × 2 larges, en panneaux de cerisier. Quelques fenêtres rectangulaires basses des 4 côtés (1 bloc large × 2 hauts en verre teinté blanc)." },
        { heading: "Étages supérieurs et avant-toits", content: "Étage 2 : 6x6 blocs (1 plus petit que la base), même hauteur 4-5 blocs. Étage 3 : 5x5. Étage 4 : 4x4. Étage 5 : 3x3. Entre chaque étage, construisez un AVANT-TOIT EN ESCALIERS qui dépasse de 1-2 blocs : alternez escaliers de blackstone (couleur ardoise) avec une rangée de dalles inversées en dessous (pour la courbure). Cet avant-toit est la signature visuelle de la pagode. Aux 4 coins de chaque avant-toit, ajoutez 1 lanterne suspendue (lanterne posée sur une chaîne d'1 bloc)." },
        { heading: "Sommet : flèche et finition", content: "Au-dessus du 5e étage, construisez la FLÈCHE : une colonne de 5-7 blocs de pierre polie au centre, surmontée d'une boule en or (4 blocs en croix de bloc d'or) et terminée par un fil de fer (1 panneau debout). Décoration extérieure : 4 lanternes en pierre devant l'entrée (poteau de pierre + lanterne au sommet), un PETIT JARDIN ZEN à 5 blocs de l'entrée (sable blanc avec quelques pierres rondes et un pont de bois courbé), et 2-3 cerisiers en fleurs à proximité (cerisier Minecraft 1.20+)." }
      ],
      tips: ["Étages identiques en plan mais qui rapetissent au fur et à mesure (effet pyramidal)", "Avant-toits qui dépassent de 1-2 blocs (signature visuelle pagode)", "Bois rouge cherry ou planches de spruce + poutres chêne foncé", "Lanterne suspendue à chaque coin d'avant-toit (4 par étage)", "Jardin zen + cerisiers en fleurs autour pour l'ambiance authentique"],
      faq: [
        { question: "Combien d'étages pour une pagode authentique ?", answer: "Les pagodes japonaises ont traditionnellement un NOMBRE IMPAIR d'étages (3, 5, 7) pour des raisons spirituelles bouddhistes. 3 étages : pagode simple. 5 étages : standard (recommandé pour Minecraft). 7 étages : pagode majestueuse, plus complexe à construire. Évitez les nombres pairs." },
        { question: "Quels blocs pour le rouge japonais ?", answer: "Le rouge japonais (cinabre, vermillon) se reproduit avec : terre cuite rouge (clean, pas glacée), béton rouge (plus saturé), planches de cerisier teintées (Minecraft 1.20+, naturellement roses). Évitez les nether bricks (trop rouges-violets). Pour un effet plus sombre, mélangez avec du bois de spruce sombre." },
        { question: "Quelle différence entre pagode chinoise et japonaise ?", answer: "PAGODE JAPONAISE : étages très clairement séparés par des avant-toits dépassants, bois plus visible, plus sobre. PAGODE CHINOISE : avant-toits plus retroussés vers le haut (pointes), couleurs plus vives (or + rouge + vert), décorations sculptées plus chargées, dragons aux angles. Adaptez selon votre vibe." }
      ],
      relatedSlugs: ["pagode", "temple-japonais", "jardin-japonais", "tour-chateau", "tour-eiffel"]
    }
  },
  {
    slug: "pagode",
    keyword: "pagode minecraft",
    title: "Pagode Minecraft : Guide de Construction",
    h1: "Comment Construire une Pagode dans Minecraft",
    metaDescription: "Construisez une pagode Minecraft authentique : étages superposés, avant-toits courbés et flèche dorée. Guide complet avec dimensions et blocs.",
    category: "building",
    volume: 170,
    content: {
      intro: "La pagode est un édifice bouddhiste asiatique reconnaissable entre tous : tour à plusieurs étages superposés, chacun coiffé d'un avant-toit qui dépasse, surmontée d'une flèche élancée. Apparue en Inde, popularisée en Chine puis raffinée au Japon, elle se prête particulièrement bien à Minecraft grâce à ses formes étagées. Ce guide propose un design 5 étages de 30 blocs de haut.",
      sections: [
        { heading: "Plan général et règles d'or", content: "Une pagode bien construite respecte 4 règles : (1) NOMBRE IMPAIR d'étages (3, 5, 7) pour des raisons spirituelles bouddhistes. (2) ÉTAGES IDENTIQUES en plan, qui rétrécissent en taille de bas en haut. (3) AVANT-TOITS DÉPASSANTS entre chaque étage. (4) FLÈCHE CENTRALE au sommet, plus haute que tout l'édifice. Respecter ces règles transforme une simple tour en pagode crédible. Plan recommandé : 7x7 base → 5 étages → 3x3 sommet, hauteur totale 28-32 blocs." },
        { heading: "Base et pierre fondations", content: "Construisez d'abord une PLATEFORME en pierre claire (diorite polie, granite poli ou andésite polie) de 9x9 blocs. C'est sur cette plateforme que repose la pagode. Hauteur de la plateforme : 1 bloc. Au pourtour, ajoutez 4 marches d'accès (1 escalier sur chaque face). Cette plateforme symbolise le terrain sacré et améliore considérablement le rendu final. Sans plateforme, la pagode 'pose' directement sur l'herbe et perd en majesté." },
        { heading: "5 étages avec avant-toits", content: "Étages : 7x7, 6x6, 5x5, 4x4, 3x3 (du bas au haut). Hauteur de chaque étage : 4-5 blocs. Murs en planches de cherry (cerisier rose) ou en spruce + poutres en chêne foncé. À CHAQUE ÉTAGE, construisez un AVANT-TOIT : une couronne d'escaliers + dalles qui dépasse de 1-2 blocs sur tous les côtés. Style : escaliers de nether brick rouge ou de blackstone (look ardoise). Aux 4 coins de chaque avant-toit, posez 1 lanterne suspendue. Total : 20 lanternes pour les 5 étages, qui éclairent magnifiquement la nuit." },
        { heading: "Flèche, dragons et finition", content: "Au sommet du 5e étage, construisez la FLÈCHE : 7-9 blocs verticaux en pierre polie ou en or, terminée par 1 bloc de paratonnerre (Minecraft 1.17+) ou 1 panneau debout. Pour l'authenticité asiatique, ajoutez aux 4 angles du toit du dernier étage des 'DRAGONS' miniatures : 2-3 escaliers en pierre + 1 dalle qui pointent vers l'extérieur (effet gargouille). Décoration extérieure : 2 grandes lanternes de pierre devant l'entrée (statues lanternes de jardin), 4 cerisiers en fleurs aux 4 coins, gravier blanc pour le chemin d'accès." }
      ],
      tips: ["Nombre IMPAIR d'étages obligatoire (3, 5 ou 7) pour l'authenticité bouddhiste", "Étages qui rétrécissent : 7x7, 6x6, 5x5, 4x4, 3x3 du bas au haut", "Plateforme en pierre claire AVANT de poser la pagode (effet sacré)", "Avant-toits dépassants à CHAQUE étage avec lanternes aux 4 coins", "Flèche centrale au sommet, plus haute que tout l'édifice"],
      faq: [
        { question: "Pagode ou temple japonais : quelle différence ?", answer: "PAGODE : édifice EN HAUTEUR (tour à étages), centré sur la verticalité, sans intérieur habitable réel (chaque étage est petit). TEMPLE JAPONAIS : édifice BAS et LARGE, plusieurs salles intérieures fonctionnelles, toits courbés mais pas étagés. La pagode est un élément RELIGIEUX, le temple est un lieu DE CULTE actif. Vous pouvez construire les deux côte à côte." },
        { question: "Faut-il une cloche dans la pagode ?", answer: "Traditionnellement OUI : à l'intérieur du dernier étage, suspendez 1 bloc d'or (la cloche) à 2 chaînes. Au pied de la pagode, ajoutez aussi une CLOCHE FONCTIONNELLE Minecraft (le bloc cloche) sur un poteau de bois — visiteurs peuvent cliquer dessus pour la sonner. Le son est authentiquement bouddhiste." },
        { question: "Combien de temps pour une pagode 5 étages ?", answer: "Compter 1h30 à 2h30 pour un builder moyen. Les étapes les plus longues : la base (30 min), les avant-toits (45 min), les détails extérieurs (jardin, cerisiers, lanternes — 30 min). C'est un projet qui se termine en une session de jeu et dont le rendu final est très spectaculaire." }
      ],
      relatedSlugs: ["tour-japonaise", "temple-japonais", "jardin-japonais", "tour-chateau", "fontaine"]
    }
  },
  {
    slug: "deco-chambre",
    keyword: "deco chambre minecraft",
    title: "Décoration de Chambre Minecraft : Guide Complet",
    h1: "Comment Décorer une Chambre dans Minecraft",
    metaDescription: "Décorez votre chambre Minecraft : meubles, lit, bureau, étagères, éclairage. Guide complet avec idées modernes, médiévales et japonaises.",
    category: "building",
    volume: 1000,
    content: {
      intro: "La chambre est l'un des espaces les plus personnels de votre base Minecraft : c'est là où vous dormez, stockez vos affaires, et passez du temps tranquille. Une chambre bien décorée transforme une simple pièce en cocon. Ce guide propose 3 styles complets (moderne, médiévale, japonaise) avec meubles construits bloc par bloc : lit, bureau, étagères, lampe, tapis et déco murale.",
      sections: [
        { heading: "Plan d'une chambre fonctionnelle", content: "Une chambre Minecraft confortable fait minimum 7x7 blocs (49 m²), idéalement 9x9 ou plus. Réservez : 1 ZONE LIT (3x4 blocs avec lit + tables de chevet), 1 ZONE BUREAU (3x3 blocs avec bureau + chaise + étagères), 1 ZONE RANGEMENT (mur d'étagères ou armoire), 1 ZONE LIVING (tapis + chaises ou canapé pour lire). Hauteur du plafond : 4 blocs minimum (sinon claustrophobique). Ajoutez 1-2 fenêtres pour la lumière naturelle." },
        { heading: "Meubles : lit, bureau, étagères", content: "LIT : posez 1 lit Minecraft (ou 2 pour un lit double) + 2 tables de chevet (1 bloc + 1 dalle inversée + 1 lanterne sur chaque). BUREAU : 2 escaliers en bois inversés (jambes du bureau) + 1 dalle au-dessus + 1 chaise (1 escalier orienté + 1 panneau debout en dossier). ÉTAGÈRES : 2-3 rangées de bibliothèques contre un mur. ARMOIRE : 2 blocs verticaux de bois + 2 trappes en bois pour les portes. Tous ces meubles utilisent des blocs accessibles dès le début." },
        { heading: "Style moderne : quartz, blanc et bois clair", content: "Une chambre MODERNE : sol en planches de bouleau ou de cerisier, murs en quartz lisse ou en béton blanc, plafond en quartz lisse. Lit double avec drap blanc (lit blanc Minecraft) et tables de chevet noires (béton noir + dalle). Bureau en bouleau avec ordinateur (cadre d'objet sur un bloc + clavier en panneaux). Étagères en bouleau. Tapis gris au sol. Plante en pot dans un coin (1 bloc de gravier + 1 fleur ou cactus). Éclairage LED : lampes à redstone cachées dans le plafond." },
        { heading: "Styles alternatifs : médiéval et japonais", content: "MÉDIÉVAL : sol en planches de chêne foncé, murs en pierre moussue + colombage, plafond en poutres apparentes (poutres de bois posées tous les 2 blocs au plafond). Lit avec drap rouge ou marron. Coffre en bois sombre comme commode. Étagères en bois sombre. Lanterne suspendue au plafond. Tapis en peau d'animal (laine marron). JAPONAIS : sol en tatami (combinaison panneaux de bambou + dalles de cerisier), murs en papier (panneaux de bouleau + cadres en spruce). Futon (lit blanc) directement au sol. Petite table basse en cerisier. Lanterne en papier suspendue. Bonsaï en pot dans un coin." }
      ],
      tips: ["Taille minimum 7x7 blocs, idéal 9x9 ou plus pour le confort", "4 zones distinctes : lit, bureau, rangement, living/lecture", "Plafond minimum 4 blocs de haut (en dessous = claustrophobique)", "Cachez l'éclairage (lampes à redstone derrière dalles inversées) pour un rendu propre", "Adaptez au style global de votre base : moderne, médiéval, japonais ou mixte"],
      faq: [
        { question: "Comment faire un bureau Minecraft ?", answer: "Posez 2 escaliers en bois inversés côte à côte (les jambes du bureau), espacés de 2-3 blocs. Posez 1-2 dalles au-dessus pour former le plateau. Pour la chaise : 1 escalier orienté vers le bureau + 1 panneau debout derrière (le dossier). Ajoutez sur le bureau : 1 cadre d'objet avec un livre, 1 lanterne, 1 pot de fleur." },
        { question: "Quels blocs pour un lit double Minecraft ?", answer: "Posez 2 lits côte à côte (de la même couleur). Visuellement, ça simule un lit double 4x2 blocs. Vous ne pouvez pas dormir à 2 dessus (1 seul joueur peut dormir dans un lit), mais visuellement c'est crédible. Ajoutez 2 tables de chevet aux extrémités (1 dalle + 1 lanterne)." },
        { question: "Comment éclairer une chambre sans torches visibles ?", answer: "Cachez les sources de lumière : (1) Lampes à redstone derrière dalles inversées au plafond. (2) Glowstone caché dans le mur derrière une bibliothèque. (3) Mer luminescente sous une couche de verre dans le sol (effet 'plancher lumineux'). (4) Lanterne dans une étagère partiellement cachée par des livres." }
      ],
      relatedSlugs: ["deco-interieur", "salle-de-bain", "deco-anniversaire", "manoir", "cabane-arbres"]
    }
  },
  {
    slug: "deco-anniversaire",
    keyword: "decoration anniversaire minecraft",
    title: "Décoration d'Anniversaire Minecraft : Guide Complet",
    h1: "Comment Décorer un Anniversaire dans Minecraft",
    metaDescription: "Décorez un anniversaire dans Minecraft : gâteau géant, ballons, banderoles, table festive. Guide complet pour fête multijoueur réussie.",
    category: "building",
    volume: 1000,
    content: {
      intro: "Organiser un anniversaire dans Minecraft (sur un serveur multijoueur ou pour une session entre amis) est devenu une vraie tendance. Avec la bonne décoration, vous pouvez transformer une salle banale en lieu de fête mémorable. Ce guide propose une déco complète : gâteau d'anniversaire géant (déco), ballons en laine, banderoles, table festive, piste de danse et système d'éclairage. Buildable en 1h pour 5-10 invités.",
      sections: [
        { heading: "Plan de la salle de fête", content: "Réservez minimum 15x15 blocs (225 m²) pour 5-10 invités. Sol en blocs colorés (terre cuite glacée bleue, rose, jaune alternées en damier) ou en quartz blanc. Plafond haut : 6 blocs minimum pour les ballons. Délimitez 4 zones : (1) ENTRÉE avec banderole, (2) GÂTEAU GÉANT central, (3) TABLE BUFFET le long d'un mur, (4) PISTE DE DANSE. Murs blancs (laine ou béton blanc) pour faire ressortir la déco colorée." },
        { heading: "Gâteau d'anniversaire géant", content: "Construisez un GÂTEAU GÉANT au centre de la salle (déco, pas un vrai bloc gâteau). Forme cylindrique : empilez 3 étages de cercles en laine blanche (effet glaçage), chaque étage 1 bloc plus petit que le précédent. Étage 1 : 5 blocs de diamètre. Étage 2 : 3 blocs. Étage 3 : 1 bloc. Au sommet : 5-7 BOUGIES allumées (le bloc bougie Minecraft, alignées). Sur les côtés : alternez bandes de laine rouge et blanche (effet 'crème pâtissière'). Sous le gâteau, posez 1 grand plateau en panneaux de bouleau." },
        { heading: "Ballons en laine suspendus", content: "Les BALLONS sont l'élément le plus festif. Pour chaque ballon : suspendez 1 bloc de LAINE coloré (rouge, bleu, jaune, vert, violet, orange) au plafond avec 3-5 blocs de chaîne ou de fil (string sur poteau invisible). Variez les hauteurs (3, 5, 7 blocs sous le plafond) pour un effet aléatoire. Comptez 15-30 ballons répartis dans la salle pour un effet 'fête'. Astuce : alternez les couleurs sans répétition pour un look harmonieux." },
        { heading: "Table buffet et piste de danse", content: "TABLE BUFFET : alignez 6-10 blocs de bois sombre (planches de spruce inversées + dalles au-dessus). Sur la table : alternez gâteaux Minecraft (vrais blocs gâteau), citrouilles tranchées (croûtons), pommes (cadres d'objet avec pommes), bouteilles de potion (potions vides comme jus). PISTE DE DANSE : carré 7x7 en blocs de jukebox + lampes à redstone alternés (alimentés par un circuit pour clignoter). Au-dessus, 1 boule disco (1 bloc de glowstone entouré de boutons)." }
      ],
      tips: ["Salle minimum 15x15 blocs avec plafond 6 blocs de haut (pour les ballons)", "Sol en damier coloré (terre cuite glacée alternée) ou en quartz blanc", "Gâteau géant central : 3 étages de cercles + bougies au sommet", "Ballons en laine colorée suspendus à différentes hauteurs (15-30 ballons)", "Table buffet en bois sombre avec gâteaux + jus + fruits dans des cadres d'objet"],
      faq: [
        { question: "Comment faire un vrai gâteau Minecraft ?", answer: "Le bloc CAKE Minecraft se craft avec 3 seaux de lait + 2 sucres + 1 œuf + 3 blés. Posez-le sur la table buffet : il a 7 parts (mangeable). Pour un gros gâteau visuel, posez plusieurs cakes côte à côte. Pour le gâteau de DÉCOR géant (le centre de la fête), utilisez de la laine blanche empilée comme expliqué." },
        { question: "Comment animer la fête (musique) ?", answer: "Posez un JUKEBOX et insérez un disque musical (15 disques disponibles dans le jeu, trouvables dans des coffres ou récupérés en faisant tuer un creeper par un squelette). Le disque joue automatiquement quand mis dans le jukebox. Pour une boucle infinie sur serveur, utilisez des command blocks qui replacent le disque à chaque fin de morceau." },
        { question: "Combien de personnes pour une fête Minecraft ?", answer: "5-10 personnes est l'idéal pour une fête fluide. Au-delà de 15, le serveur peut lagger et l'ambiance devient confuse. Pour 20+ joueurs, prévoyez 2 salles distinctes connectées par un couloir, avec 2 piste de danse. Réservez aussi des chambres d'invités pour ceux qui veulent dormir en jeu." }
      ],
      relatedSlugs: ["deco-chambre", "deco-interieur", "salle-de-bain", "manoir", "parc-attraction"]
    }
  },
  {
    slug: "tente",
    keyword: "tente minecraft",
    title: "Tente Minecraft : Guide de Construction",
    h1: "Comment Construire une Tente dans Minecraft",
    metaDescription: "Construisez une tente Minecraft : tipi indien, tente de camping ou tente médiévale. Guide complet avec 3 designs et matériaux accessibles.",
    category: "building",
    volume: 210,
    content: {
      intro: "La tente Minecraft est un projet rapide et charmant : 10-20 minutes de construction, peu de blocs, et un rendu très évocateur. Que ce soit pour un camp scout, une mise en scène médiévale ou un campement amérindien (tipi), elle s'intègre parfaitement à un paysage de forêt ou de plaine. Ce guide propose 3 designs distincts avec étapes claires.",
      sections: [
        { heading: "Tente de camping classique (toile triangulaire)", content: "Le design le plus simple : une tente triangulaire blanche posée au sol. Construction : posez 2 escaliers en laine blanche dos à dos (toit triangulaire) au-dessus de 4 blocs au sol formant la base. Multipliez sur 4-6 blocs de longueur pour la profondeur. Devant : laissez 1 ouverture en V (1 escalier de chaque côté). Ajoutez 4 panneaux de bois aux 4 coins (les piquets de tente). Total : 15-20 blocs, 5 minutes. Variantes : laine rouge ou bleue pour une tente colorée." },
        { heading: "Tipi amérindien (cône avec ouverture)", content: "Le tipi est un cône en peau d'animal. Construction : posez 8 blocs en cercle (octogone) de 3 blocs de diamètre. Au-dessus, posez 8 blocs en formant un cône progressivement (chaque rangée plus petite et plus haute). Au sommet, 4 blocs avec 1 bloc d'air central (cheminée pour la fumée). Couleur : laine blanche ou marron (peau de bison). Sur les côtés, dessinez avec des panneaux orientés des motifs tribaux (lignes noires, triangles rouges). Devant : 1 ouverture en V haute de 2 blocs." },
        { heading: "Tente médiévale (rectangulaire avec piliers)", content: "La tente médiévale d'un seigneur ou d'un campement militaire est plus grande et plus structurée. Construction : 4 piliers en bois aux 4 coins d'un rectangle 5x7 blocs. Au-dessus, un toit en pente double (escaliers de laine de chaque côté qui se rejoignent au sommet). Couleur : laine rouge avec bandes blanches verticales (style tournoi). Devant : 1 ouverture large de 3 blocs avec 2 panneaux ouverts (les 'rideaux' relevés). Sur le toit, plantez 1 bannière colorée (le blason du seigneur). Idéal pour un camp avant un château." },
        { heading: "Aménagement intérieur d'une tente", content: "Une tente vide est triste. Aménagez l'intérieur avec : 1 lit (couleur assortie à la tente), 1 coffre, 1 table basse (1 dalle sur 1 bloc), 1 lanterne suspendue au sommet, 1 tapis au sol (laine d'une autre couleur), 1 cadre d'objet avec un objet personnel (épée, bouclier, livre). Pour une tente médiévale, ajoutez 1 armure complète sur un mannequin (armor stand). Pour un tipi, ajoutez 2-3 totems en bois. Ces détails transforment la tente en lieu vivant." }
      ],
      tips: ["Tente triangulaire classique : 2 escaliers de laine dos à dos sur 4-6 blocs de profondeur", "Tipi : octogone de 3 blocs de diamètre + cône progressif + ouverture sommet", "Tente médiévale : 4 piliers + toit en pente double + bannière au sommet", "Couleur de la laine selon le contexte : blanche (camping), rouge (médiéval), marron (tipi)", "Aménagez l'intérieur (lit, coffre, lanterne) pour donner vie"],
      faq: [
        { question: "Quels blocs pour une tente Minecraft ?", answer: "Toile : LAINE (toutes couleurs disponibles) ou PANNEAUX DE BOIS (look canvas). Structure : ESCALIERS de laine ou de bois pour la pente du toit. Piquets : PANNEAUX DE BOIS aux 4 coins. Décor : BANNIÈRES sur le toit (médiéval), CADRES D'OBJET pour suspendre des objets décoratifs." },
        { question: "Combien de blocs pour une tente ?", answer: "Tente de camping : 15-20 blocs (5 min). Tipi : 25-30 blocs (10 min). Tente médiévale : 35-50 blocs avec aménagement intérieur (15-20 min). Excellent ratio temps/effet : peu de blocs pour beaucoup de charme." },
        { question: "Peut-on dormir dans une tente Minecraft ?", answer: "Oui, posez un LIT à l'intérieur. Si vous êtes en survie et qu'il fait nuit, dormir dans le lit avance le temps jusqu'à l'aube. Attention : le bloc lit prend 2 cases (2 blocs de long), donc votre tente doit faire au minimum 3x3 blocs intérieurs pour accueillir un lit + un peu d'espace." }
      ],
      relatedSlugs: ["cabane-arbres", "petite-statue", "fontaine", "ranch", "maison-arbre"]
    }
  },
  {
    slug: "taverne",
    keyword: "taverne minecraft",
    title: "Taverne Minecraft : Guide de Construction",
    h1: "Comment Construire une Taverne dans Minecraft",
    metaDescription: "Construisez une taverne médiévale Minecraft : bar, tables, cheminée, chambres à l'étage. Guide complet avec ambiance authentique.",
    category: "building",
    volume: 210,
    content: {
      intro: "La taverne est le cœur social de tout village médiéval Minecraft : c'est là où les voyageurs s'arrêtent, mangent, boivent et passent la nuit. Un bon design de taverne combine un rez-de-chaussée chaleureux (bar, tables, cheminée) avec un étage d'auberge (chambres à louer). Ce guide détaille une taverne 11x9 blocs sur 2 étages, buildable en 2-3 heures, qui donne immédiatement vie à votre village.",
      sections: [
        { heading: "Plan général : auberge à 2 étages", content: "Plan recommandé : 11 blocs de long × 9 blocs de large × 2 étages. Rez-de-chaussée (hauteur 5 blocs) : SALLE COMMUNE avec bar, tables, cheminée. Étage (hauteur 4 blocs) : 3-4 CHAMBRES D'INVITÉS le long d'un couloir central. Toit en pente forte (45°+) avec lucarnes. Style architectural : COLOMBAGE médiéval (poutres apparentes en chêne foncé sur fond de torchis blanc). Cette empreinte permet de servir 8-12 'clients' en jeu, idéal pour un serveur multijoueur." },
        { heading: "Bar central et tables", content: "Au fond de la salle commune, construisez le BAR : 5-7 blocs de bois sombre (planches de spruce inversées + dalles au-dessus) en 'L' pour permettre au tavernier de circuler derrière. Sur le bar, alignez 5-7 BOUTEILLES (potions vides en cadres d'objet). Derrière le bar, des étagères avec encore plus de bouteilles + tonneaux. AU SOL DE LA SALLE : 4-5 TABLES (1 dalle posée sur 1 panneau debout = table ronde, ou 4 escaliers en carré = table carrée) chacune entourée de 2-4 ESCALIERS retournés (les chaises). Comptez 4 tables pour 12-16 places assises." },
        { heading: "Cheminée et ambiance", content: "La CHEMINÉE est le cœur d'ambiance d'une taverne. Construction : sur le mur opposé au bar, creusez un foyer de 3x2 blocs en brique rouge (nether brick) ou en pierre brute. À l'intérieur, posez 1 NETHERRACK + utilisez un briquet : feu permanent. Au-dessus, montez la cheminée verticalement de 5-7 blocs jusqu'au toit. Sur la cheminée, posez 2 chandeliers (armor stands + torches), 1 horloge ou cadran. Devant la cheminée, posez 1 grand TAPIS rouge ou marron, et 2 fauteuils (escaliers tournés vers le feu)." },
        { heading: "Étage : chambres et couloir", content: "Au 1er étage, créez un COULOIR central de 2 blocs de large reliant l'escalier (au milieu de la salle commune en bas) à l'autre bout du bâtiment. De chaque côté du couloir, 3-4 PORTES qui ouvrent sur des CHAMBRES de 4x4 blocs chacune. Chaque chambre contient : 1 lit, 1 coffre (effets du voyageur), 1 table de chevet (dalle + lanterne), 1 cadre d'objet décoratif. Lucarnes en pignon dans chaque chambre. Variez la couleur des lits pour distinguer les chambres." }
      ],
      tips: ["Plan 11x9 blocs sur 2 étages : salle commune en bas, chambres en haut", "Style colombage médiéval (poutres chêne foncé sur torchis blanc)", "Bar central en L + 4-5 tables avec 2-4 chaises chacune (12-16 places)", "Cheminée centrale = netherrack + feu permanent (lumière niveau 15)", "Couloir central à l'étage + 3-4 chambres de 4x4 blocs avec lit"],
      faq: [
        { question: "Comment faire un bar Minecraft ?", answer: "Posez 5-7 panneaux de bois sombre verticaux (le devant du bar visible aux clients), alignés en 'L' au fond de la salle. Couvrez le sommet avec des dalles de bois (le comptoir). Derrière le bar, laissez 1 bloc d'espace pour la circulation. Sur le comptoir, alignez des bouteilles (potions en cadres d'objet) et 1 cloche pour appeler le tavernier." },
        { question: "Comment éviter que la cheminée mette le feu à la taverne ?", answer: "Le feu sur netherrack est PERMANENT et NE SE PROPAGE PAS aux blocs adjacents (à condition que les blocs autour ne soient PAS inflammables). Construisez le foyer en BRIQUE DE PIERRE ou NETHER BRICK (résistants au feu). Évitez les planches de bois directement autour du feu : utilisez la pierre. Au-dessus, la cheminée peut être en bois (la chaleur ne monte pas dans Minecraft)." },
        { question: "Faut-il un PNJ tavernier ?", answer: "Sur un serveur multijoueur, OUI : un joueur peut roleplay le tavernier. En solo, vous pouvez piéger un VILLAGEOIS PROFESSION 'BOUCHER' (avec un fumoir derrière le bar, le villageois prend automatiquement ce métier). Il vendra des items thématiques. Alternative : un ARMOR STAND habillé avec des vêtements de marchand (cuir teint marron), avec un panneau 'Tavernier'." }
      ],
      relatedSlugs: ["manoir", "fontaine-medievale", "moulin-medieval", "eglise-medievale", "tour-chateau"]
    }
  },
  {
    slug: "maison-tnt",
    keyword: "maison tnt minecraft",
    title: "Maison TNT Minecraft : Guide de Construction",
    h1: "Comment Construire une Maison en TNT dans Minecraft",
    metaDescription: "Construisez une maison en TNT Minecraft : design fun, sécurité (sans explosion accidentelle) et idée de prank multijoueur. Guide complet.",
    category: "building",
    volume: 170,
    content: {
      intro: "La maison en TNT est l'un des designs les plus fun et risqués de Minecraft : tout le bâtiment est construit avec des blocs de TNT (visuellement rouge et noir, ultra reconnaissables). C'est parfait pour un prank multijoueur, une zone de mini-jeu type 'TNT run', ou simplement un projet décoratif explosif. Ce guide explique comment construire la maison en SÉCURITÉ (sans risque d'explosion accidentelle) et comment l'utiliser pour pranker vos amis.",
      sections: [
        { heading: "Mode peaceful ou règles spéciales obligatoires", content: "ATTENTION : la TNT explose si elle est activée par : (1) un signal de redstone, (2) le feu, (3) une pression d'un piston explosif. Pour construire SANS RISQUE, jouez en MODE PEACEFUL ou DÉSACTIVEZ tnt avec /gamerule mobGriefing false. Évitez les blocs en feu à proximité (no torches sur la TNT directement). En multijoueur sur serveur, utilisez la commande /gamerule tntExplodes false (custom plugin) pour empêcher tout déclenchement accidentel." },
        { heading: "Plan : maison cubique 5x5x5 simple", content: "Le design le plus simple : un cube 5x5x5 entièrement en TNT. Construction : posez le sol carré 5x5 en TNT. Empilez 4 murs verticaux de TNT sur 4 blocs de haut. Toit plat 5x5 en TNT. Total : 100 blocs de TNT. Comptez plusieurs heures pour rassembler autant de TNT en survie (chaque TNT = 4 sables + 5 poudres à canon). Découpez 1 PORTE D'ENTRÉE (1x2 blocs) et 2 fenêtres (1x1) en remplaçant la TNT par du verre." },
        { heading: "Variantes plus créatives", content: "MAISON TNT DUO : moitié TNT rouge + moitié TNT non-explosive (modded). Murs en damier rouge/noir. STRUCTURE TNT AVEC DÉCO : posez la TNT comme structure mais ajoutez des éléments décoratifs (fenêtres en verre teinté, porte en bois, jardinières devant). MAISON TNT MULTI-ÉTAGE : 2-3 étages de TNT empilés, avec escalier intérieur en bois. Le contraste TNT (rouge agressif) + bois (chaleureux) crée un look unique. Variante FUN : posez 4-5 sliens TNT au sommet du toit (effet 'bombe stylisée')." },
        { heading: "Utiliser la maison pour un prank multijoueur", content: "Une maison TNT est PARFAITE pour pranker un ami sur serveur : invitez-le à 'visiter votre nouvelle maison'. Préparez secrètement un BOUTON ou LEVIER caché à l'extérieur, connecté par redstone à toute la TNT. Quand votre ami est à l'intérieur... BOUM. Précautions : (1) Sauvegardez une COPIE de la maison avant le prank (avec /world copy ou plugin). (2) Prévenez quand même votre ami que c'est une maison TNT (le suspense fait partie du fun). (3) Filmez la scène pour le partage." }
      ],
      tips: ["Désactivez tntExplodes via /gamerule pour construire sans risque", "Évitez torches/feu/redstone à proximité de la TNT", "Cube simple 5x5x5 = 100 blocs de TNT (1h de farm en survie)", "Mélangez TNT + bois pour un look 'maison piégée stylée'", "Pour pranker : sauvegardez d'abord, puis bouton caché + redstone vers TNT"],
      faq: [
        { question: "La TNT peut-elle exploser sans qu'on le veuille ?", answer: "Oui, plusieurs déclencheurs accidentels : (1) Signal de redstone (lampe, levier, bouton). (2) Mob feu (blaze, ghast). (3) Lave qui touche la TNT. (4) Flèche enflammée. Pour éviter : éloignez tout mob hostile, n'utilisez pas de redstone à proximité, désactivez tntExplodes en gamerule." },
        { question: "Combien de TNT pour une maison complète ?", answer: "Maison cube 5x5x5 : 100 blocs de TNT. Maison 7x7x7 : 220 blocs. Maison à étage 7x7x6 : ~250 blocs. Chaque TNT coûte 4 sables + 5 poudres à canon (drop des creepers). Pour une maison cubique simple, comptez 25 sables + 125 poudres à canon, soit 25 creepers à tuer (long en survie). Astuce : ferme à creepers pour farmer la poudre rapidement." },
        { question: "Peut-on rendre la TNT non-explosive ?", answer: "En vanilla, non — la TNT explose toujours quand activée. Avec des MODS comme MoreCraftingTables ou des datapacks, vous pouvez créer un bloc 'TNT décorative' qui ressemble à la TNT mais ne réagit pas à la redstone. En serveur, désactivez globalement les explosions de TNT via gamerule ou plugin (la TNT existe mais n'explose pas)." }
      ],
      relatedSlugs: ["base-secrete", "labyrinthe", "petit-chateau", "tour-chateau", "parc-attraction"]
    }
  },
  {
    slug: "hangar",
    keyword: "hangar minecraft",
    title: "Hangar Minecraft : Guide de Construction",
    h1: "Comment Construire un Hangar dans Minecraft",
    metaDescription: "Construisez un hangar Minecraft : aviation, agricole ou industriel. Toit voûté, grandes portes coulissantes, intérieur dégagé. Guide complet.",
    category: "building",
    volume: 110,
    content: {
      intro: "Le hangar est un bâtiment industriel utilitaire : grand espace dégagé sous un toit voûté ou en pente, idéal pour stocker des véhicules (avions, véhicules avec mods), du matériel agricole, ou organiser un atelier. Avec son grand volume et son toit caractéristique, c'est aussi un excellent projet d'architecture pour pratiquer les structures sans murs porteurs internes. Ce guide propose 3 styles : hangar aviation, hangar agricole, hangar industriel.",
      sections: [
        { heading: "Hangar aviation (toit voûté arrondi)", content: "Le hangar d'aviation classique : toit en VOÛTE arrondie, grandes portes frontales, intérieur dégagé. Plan : 15 blocs de large × 25 blocs de long × 12 blocs de haut au point culminant. Murs latéraux en BÉTON GRIS ou en TÔLE (panneaux de fer + écorce de spruce). Le toit voûté se construit avec des escaliers de pierre polie : 5 marches de chaque côté qui se rejoignent au sommet. À l'avant, une GRANDE PORTE COULISSANTE 8x8 blocs (8 trappes de fer alignées). Intérieur sans piliers (la voûte tient toute seule visuellement)." },
        { heading: "Hangar agricole (toit en pente double)", content: "Le hangar agricole est plus rustique et moins haut. Plan : 11 blocs de large × 17 blocs de long × 7 blocs de haut. Murs en planches de spruce (look bois usé) avec poutres en chêne foncé tous les 3 blocs. Toit en PENTE DOUBLE (50°) en escaliers de nether brick rouge ou de blackstone. À l'avant, 2 GRANDES PORTES À DOUBLE BATTANT en planches de bois (4 blocs de haut × 2 chaque). Intérieur : 1-2 piliers centraux en bois pour soutenir le toit, sol en gravier (terre battue). Idéal pour stocker tracteurs, matériel agricole, foin (balle de foin Minecraft)." },
        { heading: "Hangar industriel (béton et tôle)", content: "Le hangar industriel moderne : matériaux froids et utilitaires. Plan : 17 blocs de large × 30 blocs de long × 10 blocs de haut. Murs en béton gris clair + bandes horizontales en béton gris foncé (effet panneau industriel). Toit en pente DOUBLE peu marquée (15°) en blackstone polished. Façade avant : 1 GRANDE PORTE D'EXPÉDITION en trappes de fer (5x5 blocs). À côté, 1 PORTE PIÉTONNE en fer (1x2 blocs). Fenêtres horizontales hautes (1 bloc de haut × 5 longs) sur les côtés pour la lumière. Intérieur : sol en béton + bandes jaunes (laine) pour les couloirs piétons." },
        { heading: "Aménagement intérieur d'un hangar", content: "Aménagez l'intérieur selon l'usage : (1) HANGAR AVIATION : un grand vide central avec un avion construit en blocs (50 blocs de long, ailes, hélice/réacteur), 2-3 véhicules de service. (2) HANGAR AGRICOLE : balles de foin empilées, 2-3 tracteurs (blocs orange + roues en blocs noirs), outils accrochés au mur (haches, pelles dans cadres d'objet). (3) HANGAR INDUSTRIEL : palettes (panneaux empilés), conteneurs (blocs verts/bleus 4x4 blocs), grue mobile (structure verticale en fer 8 blocs)." }
      ],
      tips: ["3 styles principaux : aviation (voûte), agricole (pente double), industriel (plat)", "Hauteur recommandée : 7 blocs (agricole) à 12 blocs (aviation)", "Grande porte frontale = trappes de fer alignées (effet porte coulissante)", "Voûte en escaliers de pierre polie qui se rejoignent au sommet", "Aménagez l'intérieur selon l'usage : avion / tracteur / palettes"],
      faq: [
        { question: "Comment faire un toit voûté Minecraft ?", answer: "Utilisez des ESCALIERS DE PIERRE POLIE en arc : chaque côté monte progressivement (1 escalier = 1 bloc plus haut), puis le sommet est plat (3-5 blocs alignés). Plus la voûte est grande, plus le rendu est impressionnant. Alternative plus simple : pente double en escaliers (plus banal mais plus rapide)." },
        { question: "Faut-il des piliers à l'intérieur ?", answer: "Pour un hangar de 11 blocs de large maximum, NON, vous pouvez avoir un intérieur sans pilier (la 'voûte' tient visuellement). Pour 15+ blocs de large, ajoutez 1-2 piliers centraux ou utilisez des poutres en bois apparentes au plafond pour donner l'illusion de soutènement (sans gêner l'espace au sol)." },
        { question: "Quelle est la différence avec un entrepôt ?", answer: "Un HANGAR a un grand espace dégagé, un toit caractéristique (voûte ou pente forte), et une porte d'expédition large. Un ENTREPÔT est plus compartimenté (plusieurs étages, mezzanine, allées), avec rangements verticaux (rayonnages, étagères industrielles). Le hangar est pour stocker du gros, l'entrepôt pour stocker du petit en grand nombre." }
      ],
      relatedSlugs: ["port-medieval", "stade-foot", "ferme-automatique", "entrepot", "atelier"]
    }
  },
  {
    slug: "aqueduc",
    keyword: "aqueduc minecraft",
    title: "Aqueduc Minecraft : Guide de Construction",
    h1: "Comment Construire un Aqueduc dans Minecraft",
    metaDescription: "Construisez un aqueduc romain Minecraft : arches, canal d'eau et structure imposante. Guide complet avec plan et blocs détaillés.",
    category: "building",
    volume: 70,
    content: {
      intro: "L'aqueduc romain est l'un des projets de construction les plus grandioses possibles dans Minecraft : une longue suite d'ARCHES en pierre supportant un CANAL D'EAU qui traverse vallées, rivières et collines. Le Pont du Gard, l'aqueduc de Ségovie ou la Conduite romaine de Lyon ont inspiré des centaines de builds Minecraft. Ce guide détaille la construction d'un aqueduc à 2 niveaux d'arches, 50 blocs de long.",
      sections: [
        { heading: "Choix de l'emplacement et du tracé", content: "L'aqueduc doit relier 2 POINTS distincts : une source d'eau (rivière, lac, source en montagne) et un point d'arrivée (ville, ferme, bassin). Tracez le chemin sur la carte : préférez les TERRAINS DÉGAGÉS (plaines, vallées) où l'aqueduc sera bien visible. Plus le terrain est ACCIDENTÉ, plus l'aqueduc est impressionnant (plus haut sur les vallées, plus bas sur les collines). Hauteur cible : 15-25 blocs au-dessus du sol au point le plus haut. Longueur cible : 50-100 blocs (au-delà, c'est un projet de plusieurs heures)." },
        { heading: "Construction des piliers de base", content: "Posez les PILIERS DE FONDATION tous les 7 blocs le long du tracé. Chaque pilier : carré 3x3 blocs en pierre brute ou cobblestone, montant jusqu'à la hauteur de l'aqueduc moins la hauteur des arches. Au-dessus de chaque pilier, vous construirez une arche. Astuce : posez les piliers sur des FONDATIONS PROFONDES (1-2 blocs sous le sol) pour le réalisme. Ajoutez des CHAÎNAGES horizontaux entre les piliers à mi-hauteur (1 ligne de pierre) pour le style romain." },
        { heading: "Arches semi-circulaires", content: "Au sommet de chaque pilier, construisez une ARCHE SEMI-CIRCULAIRE : 7 blocs de large à la base, qui rétrécit progressivement par escaliers et dalles inversés jusqu'à 1 bloc au sommet. Méthode bloc par bloc (largeur de l'arche = 7) : (1) Au sommet du pilier, 2 blocs verticaux. (2) Puis escaliers inversés tournés vers l'intérieur sur 2-3 niveaux. (3) Au sommet, 3 blocs horizontaux pour fermer l'arche. Répétez sur tous les piliers : vous obtenez une longue colonnade d'arches." },
        { heading: "Canal d'eau au sommet", content: "Au-dessus de toutes les arches, construisez le CANAL : 2 blocs de large, 1 bloc de profondeur, ouvert au-dessus. Bordez les 2 côtés du canal avec des blocs pleins (pierre taillée). Posez 1 SEAU D'EAU au début du canal (côté source) : l'eau coule sur toute la longueur. Pour assurer un FLUX CONTINU, ajoutez 1 source d'eau tous les 7 blocs (au-dessus de chaque pilier). À l'arrivée, faites tomber l'eau dans un BASSIN COLLECTEUR (3x3 blocs) qui alimente votre village. Pour un effet 'moderne romain', ajoutez 4-6 lanternes le long du canal." }
      ],
      tips: ["Tracez le chemin entre 2 points (source d'eau ↔ point d'arrivée) AVANT construction", "Piliers tous les 7 blocs, en pierre brute ou cobblestone", "Arches semi-circulaires avec escaliers et dalles inversés", "Canal au sommet : 2 blocs large, 1 profond, sources d'eau tous les 7 blocs", "Plus le terrain est accidenté, plus l'aqueduc est impressionnant"],
      faq: [
        { question: "Quels blocs pour un aqueduc romain authentique ?", answer: "Pierre brute, cobblestone et pierre taillée pour le corps. Brique de pierre pour les corniches (plus net). Mélangez ces 3 types de pierre pour éviter la monotonie. Évitez le marbre (trop moderne) et le bois (pas authentique). Quelques blocs de mousse pour vieillir l'aqueduc (effet 'romain abandonné depuis 2000 ans')." },
        { question: "Comment faire couler l'eau sur toute la longueur ?", answer: "Posez 1 source d'eau (seau placé) tous les 7 blocs maximum dans le canal. L'eau coule à partir de chaque source et se rejoint pour former un flux continu. Sans source intermédiaire, le flux s'arrête au bout de 7 blocs (limite du jeu). Pour un aqueduc de 50 blocs, comptez 8 seaux d'eau." },
        { question: "Peut-on construire un aqueduc à 2 niveaux d'arches ?", answer: "Oui, c'est même le style le plus impressionnant (Pont du Gard a 3 niveaux). Méthode : construisez d'abord le niveau 1 (arches basses), puis posez sur leur sommet une dalle continue, puis construisez un 2e niveau d'arches plus petites (5 blocs de large) au-dessus. Le canal d'eau est tout en haut. Hauteur totale : 30+ blocs. Projet ambitieux." }
      ],
      relatedSlugs: ["pont", "fontaine", "moulin", "port-medieval", "tour-chateau"]
    }
  },
  {
    slug: "maison-abeille",
    keyword: "maison abeille minecraft",
    title: "Maison Abeille Minecraft : Guide de Construction",
    h1: "Comment Construire une Maison Abeille dans Minecraft",
    metaDescription: "Construisez une maison abeille Minecraft : forme ronde, jaune et noir, alvéoles. Idéal pour ferme à miel ou décoration kawaii.",
    category: "building",
    volume: 70,
    content: {
      intro: "La maison abeille est un design fun et kawaii : un bâtiment rond aux couleurs jaune et noir, qui imite l'apparence d'une abeille géante ou d'un nid. C'est parfait pour décorer une ferme à miel, créer un coin pour enfants dans une base, ou simplement pour se démarquer d'une architecture conventionnelle. Construction rapide (45 min), matériaux accessibles, rendu très original.",
      sections: [
        { heading: "Plan et inspiration : abeille ou alvéoles ?", content: "2 approches possibles : (1) MAISON EN FORME D'ABEILLE : corps rond noir et jaune (rayures), 2 yeux noirs, 4 ailes en panneaux blancs au-dessus, dard pointu à l'arrière. (2) MAISON EN FORME D'ALVÉOLES : structure hexagonale géante (les rayons d'une ruche). Pour ce guide, on combine les 2 : structure hexagonale extérieure avec décoration abeille à l'avant. Diamètre : 9 blocs, hauteur 7 blocs." },
        { heading: "Construire la base hexagonale", content: "Tracez un HEXAGONE de 9 blocs de diamètre au sol. Méthode : posez 1 bloc, puis 4 blocs alignés à 60° (en zigzag), puis 4 autres à 60° dans la direction opposée, etc. Vous obtenez un hexagone régulier. Utilisez du HONEYCOMB BLOCK (blocs de nid d'abeille, Minecraft 1.15+) ou de la TERRE CUITE JAUNE pour les murs. Hauteur des murs : 5 blocs. Le toit hexagonal en pente, en escaliers de béton noir, qui se rejoignent au sommet." },
        { heading: "Décoration extérieure : rayures et yeux", content: "Pour transformer la base hexagonale en VRAIE 'maison abeille' : ajoutez 2-3 RAYURES HORIZONTALES en béton noir autour des murs jaunes (alternez 2 blocs jaunes / 1 bloc noir, sur 3 niveaux). À l'avant, dessinez 2 GRANDS YEUX NOIRS : 2 carrés de béton noir 2x2 blocs, espacés de 2 blocs, à hauteur de l'œil. Au-dessus de la porte, ajoutez 4 PETITES AILES en panneaux blancs (2 paires symétriques). À l'arrière, plantez 1 DARD : 3 blocs de béton noir pointus en triangle dépassant du mur arrière." },
        { heading: "Aménagement intérieur thème miel", content: "Aménagez l'intérieur en thème miel : sol en honeycomb block (blocs de nid d'abeille), murs intérieurs en miel block (blocs de miel, gluants visuellement). Au centre, placez 4-6 RUCHES MINECRAFT (blocs ruche/beehive) qui produisent du miel quand des abeilles sont à proximité. Ajoutez 3-4 BIOMES VOISINS adaptés (champ de fleurs avec 4-5 abeilles peuplées). Lit en laine jaune. Coffres en bois clair. Lanterne au plafond. Excellent pour une FERME À MIEL automatique." }
      ],
      tips: ["Forme hexagonale = base d'une vraie maison abeille (alvéoles)", "Murs en honeycomb block ou terre cuite jaune + rayures noires", "Détails à l'avant : 2 yeux noirs, 4 ailes en panneaux blancs, dard à l'arrière", "Intérieur thème miel : sol en honeycomb, ruches au centre, abeilles autour", "Diamètre 9 blocs, hauteur 7 blocs : 45 minutes de construction"],
      faq: [
        { question: "Quels blocs pour la couleur jaune-abeille ?", answer: "(1) HONEYCOMB BLOCK (Minecraft 1.15+) : couleur naturelle nid d'abeille. (2) TERRE CUITE JAUNE : couleur jaune saturée. (3) BÉTON JAUNE : encore plus saturé. Mélangez les 3 pour un look intéressant. Évitez la laine jaune (texture trop unie)." },
        { question: "Comment construire un hexagone régulier Minecraft ?", answer: "Méthode 'pas à pas' : posez 1 bloc, puis 1 bloc en diagonale (zigzag), 1 bloc droit, 1 bloc en diagonale opposée, etc. Pour un hexagone de 9 blocs de diamètre : 4 blocs côté nord, descente diagonale 2-3 blocs, 4 blocs côté sud-ouest, etc. Avec un peu de pratique, l'hexagone régulier devient naturel. Plus simple : commencez par tracer un OCTOGONE (carré aux coins coupés) si l'hexagone est trop dur." },
        { question: "Comment attirer des abeilles dans la maison ?", answer: "Plantez 5-10 FLEURS (toutes espèces) dans un rayon de 20 blocs de la maison. Si une RUCHE Minecraft contient déjà des abeilles, elles sortent et butinent les fleurs. Pour ajouter des abeilles manuellement, capturez-en (avec un seau d'abeille, après les avoir attirées avec des fleurs) et libérez-les près de votre maison. Elles peupleront les ruches automatiquement." }
      ],
      relatedSlugs: ["maison-champignon", "maison-arbre", "ferme-automatique", "tente", "petite-statue"]
    }
  }
,
  {
    slug: "niche-chien",
    keyword: "niche chien minecraft",
    title: "Niche pour Chien Minecraft : Guide de Construction",
    h1: "Comment Construire une Niche pour Chien dans Minecraft",
    metaDescription: "Construisez une niche pour votre chien Minecraft (loup apprivoisé) : 4 designs (rustique, moderne, médiévale, kawaii) avec étapes et matériaux. Tuto complet en 10 minutes.",
    category: "building",
    volume: 90,
    content: {
      intro: "Votre loup apprivoisé Minecraft mérite mieux qu'un coin de votre maison : une vraie NICHE pour chien lui donne sa propre maison, structure votre jardin et apporte une touche adorable à votre base. Ce guide propose 4 designs distincts (rustique en bois, moderne en quartz, médiévale en pierre, kawaii colorée), tous buildables en 5 à 15 minutes avec des matériaux accessibles dès le début de partie. Bonus : techniques pour faire en sorte que votre loup utilise réellement la niche (assise + bol de nourriture).",
      sections: [
        { heading: "Anatomie d'une niche fonctionnelle", content: "Une bonne niche Minecraft a 4 éléments : (1) ABRI fermé sur 3 côtés (toit + 2 murs latéraux + 1 mur arrière), (2) OUVERTURE FRONTALE de 1x2 blocs minimum (le chien doit pouvoir entrer), (3) SOL DOUX (tapis de laine ou dalle de bois), (4) ÉLÉMENT DE NOURRISSAGE devant (bol de viande crue dans un cadre d'objet). Taille minimum : 3x3 blocs au sol, 3 blocs de haut. C'est juste assez pour qu'un loup adulte y entre confortablement et y dorme. Évitez les niches trop grandes : 5x5+ blocs perdent l'effet 'niche' et deviennent une simple cabane." },
        { heading: "Design rustique en bois (5 minutes, 15 blocs)", content: "Le design le plus simple et accessible. MURS : posez 3 planches de chêne ou de spruce verticales pour le mur arrière, puis 3 planches sur chaque côté. Laissez la façade ouverte (avec juste 1 panneau de bois en haut pour le linteau). TOIT : 2 escaliers en bois posés en V inversé pour former une pente double. SOL : 1 tapis de laine marron à l'intérieur (le 'lit' du chien). DEVANT : 1 cadre d'objet sur le sol contenant un OS (récompense visuelle). Décoration : 1 panneau au-dessus de l'entrée avec le nom du chien. Total : 15 blocs, 5 min." },
        { heading: "Design moderne en quartz (10 minutes, 25 blocs)", content: "Pour une base moderne ou minimaliste. MURS : posez du quartz lisse sur 3 côtés (3x3 sur le mur arrière, 3x2 sur les côtés). TOIT plat en dalles de quartz (3x3 blocs). SOL en quartz lisse avec 1 tapis blanc au centre. ENTRÉE : ouverture frontale 1x2 blocs avec un bouton de quartz à droite (effet 'sonnette'). Devant la niche, posez 2 chaudrons : 1 rempli d'eau (gamelle d'eau), 1 vide où placer un cadre avec viande crue (gamelle de croquettes). 1 lampe à redstone cachée dans le toit (allumée la nuit). Total : 25 blocs, 10 min." },
        { heading: "Design médiéval et design kawaii", content: "DESIGN MÉDIÉVAL : structure en pierre brute + brique de pierre moussue. Toit en escaliers de nether brick rouge (effet tuile). Ajoutez 1 lanterne suspendue à un poteau de bois devant la niche, et 1 panneau gravé avec le nom du chien (style 'Garde du Château'). Touche bonus : 4 vignes qui pendent de chaque côté du toit pour l'effet ancien. DESIGN KAWAII : niche entièrement en laine rose ou jaune, toit en laine d'une autre couleur. Devant la niche : 2 fleurs en pot (1 rose, 1 marguerite) et 1 tapis colorée. À l'intérieur : 1 lit de la même couleur (oui, un VRAI lit Minecraft, votre chien peut s'y asseoir). Idéal pour serveurs familiaux ou bases mignonnes." }
      ],
      tips: ["Taille minimum 3x3x3 blocs : assez pour un loup adulte sans être disproportionné", "Laissez l'ouverture frontale 1x2 blocs (le chien doit y entrer)", "1 tapis de laine au sol = le 'lit' du chien, ajoute beaucoup de charme", "Cadre d'objet avec un OS ou de la viande crue = bol de nourriture visuel", "Faites ASSEOIR votre loup devant la niche (clic droit avec main vide) pour qu'il y reste"],
      faq: [
        { question: "Comment faire en sorte que mon loup utilise la niche ?", answer: "Les loups Minecraft ne 'rentrent' pas automatiquement dans la niche — c'est purement décoratif. Pour qu'ils restent près : (1) Faites ASSEOIR votre loup avec un clic droit (main vide) juste devant ou dans la niche : il y restera assis tant que vous ne lui demandez pas de se lever. (2) Posez 1 lit Minecraft à côté : si vous dormez, le loup attend là. (3) Mettez un collier coloré au loup (clic droit avec un colorant) pour le repérer dans le groupe." },
        { question: "Combien de niches pour plusieurs chiens ?", answer: "Construisez 1 niche par chien si vous avez 2-4 loups, alignées en 'rangée de chenils'. Pour 5+ loups, optez pour une GRANDE niche commune (5x5x4 blocs) qui les abrite tous. Vous pouvez aussi faire un CHENIL à plusieurs compartiments : 4 mini-niches alignées, chacune 3x3 avec une cloison. Les loups apprivoisés peuvent dormir dans la même zone sans problème." },
        { question: "Quels blocs pour une niche réaliste ?", answer: "Bois : planches de chêne (rustique), planches de cerisier (kawaii), planches de spruce (montagne). Pierre : pierre moussue + brique de pierre (médiéval). Toit : escaliers en bois (rustique), dalles de quartz (moderne), nether brick rouge (tuiles médiévales). Touches : tapis de laine (le lit), cadre d'objet avec os, lanterne pour l'éclairage." }
      ],
      relatedSlugs: ["maison-arbre", "tente", "petite-statue", "fontaine", "deco-chambre"]
    }
  }

];
