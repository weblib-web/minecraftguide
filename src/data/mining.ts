import type { PageData } from "./types";

export const miningPages: PageData[] = [
  {
    slug: "couche-fer",
    keyword: "couche fer minecraft",
    title: "Couche du Fer Minecraft : Où le Trouver",
    h1: "À Quelle Couche Trouver du Fer dans Minecraft",
    metaDescription: "Trouvez du fer facilement dans Minecraft. Meilleures couches de minage, biomes optimaux et techniques pour maximiser vos récoltes.",
    category: "mining",
    volume: 1300,
    content: {
      intro: "Le fer est le minerai le plus polyvalent de Minecraft, utilisé pour l'armure, les outils, les seaux, les rails et bien plus. Depuis la mise à jour 1.18, la distribution des minerais a été entièrement refondue : le fer possède désormais deux pics de génération distincts et une plage de hauteur très large, de Y=-64 à Y=320.",
      sections: [
        { heading: "Distribution du fer depuis 1.18", content: "Le fer se génère entre Y=-64 et Y=320 avec deux pics de concentration. Le premier pic se situe autour de Y=14 (d'après les données réelles de génération) et le second autour de Y=232 en montagne. Fait notable : le fer est absent entre Y=73 et Y=79, créant un trou dans sa distribution. En dessous de Y=0, vous trouverez la variante des abîmes (deepslate), deux fois plus longue à miner. La pioche en pierre minimum est requise pour miner le fer." },
        { heading: "Miner en montagne", content: "Le fer est exceptionnellement abondant en altitude dans les biomes de montagne (pics dentelés, pics gelés, pics rocheux, pentes enneigées, bosquets, prairies). Au-dessus de Y=80, la génération augmente considérablement avec un pic théorique à Y=232. Le minage en montagne est souvent plus rapide et moins dangereux car le minerai est visible à flanc de falaise, sans risque de lave ou de mobs hostiles." },
        { heading: "Drops et enchantements", content: "Le minerai de fer lâche 1 fer brut (depuis la 1.17). L'enchantement Fortune augmente le nombre de fer brut obtenu : Fortune I donne 1-2, Fortune II donne 1-3, Fortune III donne 1-4 (moyenne de 2,2 par bloc). L'enchantement Toucher de Soie permet de récupérer le bloc de minerai intact pour le fondre plus tard. Le fer brut doit être fondu dans un four ou haut fourneau pour obtenir un lingot." },
        { heading: "Alternatives au minage", content: "Les golems de fer lâchent 3-5 lingots de fer à leur mort, ce qui rend les fermes à golems très efficaces (des centaines de lingots par heure). Les zombies ont 2,5 % de chance de lâcher un lingot de fer. Les coffres de villages, donjons, temples et mines abandonnées contiennent aussi du fer. Les forgerons de village sont une source fiable en début de partie." }
      ],
      tips: [
        "Le pic optimal pour le fer est Y=14 en souterrain (données réelles de génération)",
        "En montagne, le fer est encore plus abondant avec un pic vers Y=232",
        "Le fer est absent entre Y=73 et Y=79 : évitez cette zone pour le minage",
        "Pioche en pierre minimum requise (bois ne fonctionne pas)",
        "Fortune III donne en moyenne 2,2 fer brut par minerai au lieu de 1",
        "Les fermes à golems de fer sont la meilleure source à long terme"
      ],
      faq: [
        { question: "Quelle est la meilleure couche pour le fer ?", answer: "Y=14 est le pic optimal en minage souterrain d'après les données réelles de génération (1.18+). En montagne, le fer est encore plus abondant vers Y=232. Attention : le fer est absent entre Y=73 et Y=79." },
        { question: "Fortune fonctionne-t-elle sur le minerai de fer ?", answer: "Oui, depuis la 1.17, le minerai de fer lâche du fer brut et l'enchantement Fortune augmente la quantité : Fortune III donne entre 1 et 4 fer brut par bloc, soit une moyenne de 2,2." },
        { question: "Quelle pioche faut-il pour miner le fer ?", answer: "Une pioche en pierre minimum est nécessaire. Une pioche en bois ne donnera rien. Utilisez une pioche en fer ou mieux avec Fortune III pour maximiser vos récoltes." }
      ],
      relatedSlugs: ["couche-diamant", "couche-minerais", "couche-charbon", "couche-cuivre", "trouver-fer"]
    }
  },
  {
    slug: "couche-diamant",
    keyword: "couche diamant minecraft 1.21",
    title: "Couche Diamant Minecraft 1.21 : Guide de Minage",
    h1: "À Quelle Couche Trouver du Diamant dans Minecraft 1.21",
    metaDescription: "Meilleure couche pour le diamant en Minecraft 1.21. Guide optimisé du minage de diamants avec techniques et enchantements.",
    category: "mining",
    volume: 590,
    content: {
      intro: "Le diamant reste la ressource la plus convoitée de Minecraft. Depuis la 1.18, les diamants se génèrent entre Y=-64 et Y=16 avec une distribution triangulaire inversée : plus vous descendez, plus ils sont fréquents. Le pic de concentration se situe à Y=-59 et cette distribution n'a pas changé en 1.21.",
      sections: [
        { heading: "La meilleure couche : Y=-59", content: "Les diamants se génèrent entre Y=-64 et Y=16, avec une concentration maximale à Y=-59. La probabilité augmente linéairement vers le bas. Cependant, miner à Y=-59 signifie être juste au-dessus de la bedrock, ce qui peut être gênant. Y=-58 est le compromis idéal : vos pieds sont à Y=-58 et votre tête à Y=-57, scannant deux couches de forte concentration. Une pioche en fer minimum est requise pour miner le diamant." },
        { heading: "Technique de strip mining", content: "À Y=-58, creusez un long couloir de 1 bloc de large et 2 blocs de haut. Tous les 2 blocs sur les côtés, creusez une branche de 50 blocs de long. Cette technique maximise le nombre de blocs scannés avec un minimum d'effort. Emportez beaucoup de pioches et de torches. En dessous de Y=0, le minerai est dans de l'ardoise des abîmes (deepslate), deux fois plus longue à miner que la pierre." },
        { heading: "La lave : obstacle majeur", content: "À cette profondeur, les lacs de lave aquifères sont fréquents (la lave remplace l'eau sous Y=-54). Emportez toujours un seau d'eau pour transformer la lave en obsidienne. La potion de résistance au feu est très utile. Ne minez jamais directement au-dessus ou en dessous de vous sans précaution." },
        { heading: "Enchantements essentiels", content: "Fortune III est indispensable : chaque minerai de diamant lâche 1 diamant de base, mais Fortune III donne entre 1 et 4 diamants par bloc (moyenne de 2,2, soit plus du double). Efficacité V accélère considérablement le minage du deepslate. Solidité III prolonge la durée de votre pioche, et Raccommodage la répare avec l'XP collectée." }
      ],
      tips: [
        "Minez à Y=-58 pour le meilleur ratio diamants/minute (juste au-dessus de la bedrock)",
        "Fortune III donne en moyenne 2,2 diamants par minerai au lieu de 1",
        "Pioche en fer minimum requise pour miner le diamant",
        "Emportez toujours un seau d'eau contre les lacs de lave aquifères",
        "Utilisez des torches régulièrement pour empêcher le spawn de mobs hostiles",
        "Ne creusez jamais sous vos pieds à cette profondeur"
      ],
      faq: [
        { question: "Les diamants sont-ils plus rares en 1.21 qu'avant ?", answer: "Non, la distribution est identique à celle de la 1.18. Les diamants sont concentrés plus bas qu'avant la 1.18 (l'ancien Y=11 ne fonctionne plus). Le pic est à Y=-59 avec une distribution triangulaire inversée." },
        { question: "Vaut-il mieux Fortune III ou Toucher de Soie ?", answer: "Fortune III donne en moyenne 2,2 diamants par minerai, contre 1 seul avec Toucher de Soie. Toucher de Soie est utile si vous voulez stocker les blocs de minerai pour les casser plus tard avec une pioche Fortune III. C'est une bonne stratégie en début de partie." },
        { question: "Quelle pioche faut-il pour miner le diamant ?", answer: "Une pioche en fer minimum est nécessaire. Les pioches en bois et en pierre ne permettent pas de récupérer le diamant. Idéalement, utilisez une pioche en diamant ou Netherite avec Fortune III et Efficacité V." }
      ],
      relatedSlugs: ["couche-fer", "couche-minerais", "trouver-diamant", "meilleure-couche-diamant", "couche-redstone"]
    }
  },
  {
    slug: "couche-minerais",
    keyword: "couche minerai minecraft",
    title: "Couches des Minerais Minecraft : Guide Complet",
    h1: "Toutes les Couches de Minerais dans Minecraft",
    metaDescription: "Guide complet des couches de tous les minerais Minecraft. Charbon, fer, or, diamant, émeraude, cuivre, lapis et redstone.",
    category: "mining",
    volume: 720,
    content: {
      intro: "Depuis Minecraft 1.18, la distribution des minerais a été entièrement refondée avec un monde étendu de Y=-64 à Y=320. Chaque minerai possède une plage de génération unique avec un ou plusieurs pics de concentration. Ce guide résume les couches optimales pour chaque minerai, basé sur les données réelles de génération du wiki officiel (édition Java 1.21).",
      sections: [
        { heading: "Charbon (pioche en bois minimum)", content: "Le charbon se génère entre Y=0 et Y=320, avec un pic réel autour de Y=45. Il est très commun en surface et en altitude, et ne se génère plus en dessous de Y=0. Les veines sont grandes (jusqu'à 17 blocs). Drop : 1 charbon par minerai, Fortune III donne jusqu'à 4." },
        { heading: "Cuivre et fer (pioche en pierre minimum)", content: "Le cuivre se génère entre Y=-16 et Y=112 avec un pic à Y=43. Les filons sont plus gros dans les cavernes de spéléothèmes (grottes de stalactites). Drop : 2 à 5 cuivre brut par minerai. Le fer se génère entre Y=-64 et Y=320 avec un pic à Y=14 (absent entre Y=73 et Y=79). Un second pic existe en montagne à Y=232. Drop : 1 fer brut. Fortune III augmente les drops des deux." },
        { heading: "Or, lapis-lazuli et redstone", content: "L'or (pioche en fer min.) se génère entre Y=-64 et Y=32, pic à Y=-18. Dans les Badlands, l'or est aussi présent entre Y=32 et Y=256. Drop : 1 or brut. Le lapis-lazuli (pioche en pierre min.) se génère entre Y=-64 et Y=64, pic à Y=-2. Drop : 4 à 9 lapis. La redstone (pioche en fer min.) se génère entre Y=-64 et Y=15 principalement, pic à Y=-59. Drop : 4 à 5 poudres de redstone." },
        { heading: "Diamant et émeraude (pioche en fer minimum)", content: "Le diamant se génère entre Y=-64 et Y=16 avec un pic à Y=-59 (distribution triangulaire inversée). Drop : 1 diamant, Fortune III donne 1-4. L'émeraude se génère uniquement dans les biomes de montagne (prairie, bosquet, pentes enneigées, pics dentelés/gelés/rocheux, collines venteuses) entre Y=-16 et Y=320, pic réel à Y=85. L'émeraude ne génère que des veines d'un seul bloc. Drop : 1 émeraude." },
        { heading: "Résumé des pics optimaux (données réelles)", content: "Charbon : Y=45 | Cuivre : Y=43 | Lapis-lazuli : Y=-2 | Fer : Y=14 (ou Y=232 en montagne) | Or : Y=-18 (ou Badlands pour plus haut) | Redstone : Y=-59 | Diamant : Y=-59 | Émeraude : Y=85 (montagne uniquement). Les minerais des abîmes (deepslate, sous Y=0) donnent les mêmes drops mais sont deux fois plus longs à miner." }
      ],
      tips: [
        "Y=-58 est la meilleure couche polyvalente pour diamant, redstone et or simultanément",
        "Minez en montagne pour le fer (Y=232), l'émeraude (Y=85) et le charbon",
        "Le cuivre est concentré dans les cavernes de spéléothèmes (filons plus gros)",
        "L'or est beaucoup plus abondant dans les biomes Badlands (Y=-64 à Y=256)",
        "Fortune III fonctionne sur tous les minerais qui lâchent une ressource directement",
        "Les minerais des abîmes (sous Y=0) donnent les mêmes drops, juste plus longs à miner"
      ],
      faq: [
        { question: "Quelle est la meilleure couche polyvalente ?", answer: "Y=-58 est excellente pour le diamant (pic à Y=-59), la redstone (pic à Y=-59), l'or (pic à Y=-18) et le lapis-lazuli simultanément. Pour le fer et le charbon, minez plutôt en surface ou en montagne." },
        { question: "Le deepslate affecte-t-il les drops ?", answer: "Non, les minerais des abîmes (deepslate) donnent exactement les mêmes drops que les versions normales en pierre. La seule différence est que le deepslate est deux fois plus long à miner (temps de minage doublé)." },
        { question: "Quelles pioches pour quels minerais ?", answer: "Pioche en bois : charbon. Pioche en pierre : cuivre, lapis-lazuli, fer. Pioche en fer : or, redstone, diamant, émeraude. Pioche en diamant : débris antiques (Nether). Utiliser une pioche d'un tier inférieur ne donnera rien." }
      ],
      relatedSlugs: ["couche-fer", "couche-diamant", "couche-charbon", "couche-cuivre", "couche-redstone"]
    }
  },
  {
    slug: "couche-charbon",
    keyword: "couche charbon minecraft",
    title: "Couche du Charbon Minecraft : Guide",
    h1: "À Quelle Couche Trouver du Charbon dans Minecraft",
    metaDescription: "Trouvez du charbon rapidement dans Minecraft. Meilleures couches de minage et alternatives pour obtenir du combustible facilement.",
    category: "mining",
    volume: 320,
    content: {
      intro: "Le charbon est le combustible de base et la source de torches dans Minecraft. C'est le minerai le plus commun du jeu et le seul minable avec une pioche en bois. Depuis la 1.18, il ne se génère plus en dessous de Y=0 et sa distribution a été concentrée en surface et en altitude.",
      sections: [
        { heading: "Distribution du charbon (1.18+)", content: "Le charbon se génère entre Y=0 et Y=320, avec un pic de concentration réel autour de Y=45 (d'après les données de génération). Les veines de charbon sont grandes, souvent de 10 à 17 blocs. C'est un minerai très commun classé comme 'très commun' sur le wiki officiel. Il est totalement absent en dessous de Y=0 (pas de variante des abîmes naturelle en génération standard)." },
        { heading: "Minage en surface et altitude", content: "La méthode la plus simple pour trouver du charbon est d'explorer les flancs de collines, les montagnes et les entrées de grottes. Le charbon est très visible avec ses taches noires sur la pierre grise. En début de partie, explorez entre Y=30 et Y=60 pour maximiser vos trouvailles. En montagne, le charbon est abondant partout sur les parois rocheuses." },
        { heading: "Drops et Fortune", content: "Le minerai de charbon lâche 1 charbon et donne 0-2 XP. L'enchantement Fortune augmente les drops : Fortune I donne 1-2, Fortune II donne 1-3, Fortune III donne 1-4 charbon par bloc. Une pioche en bois suffit pour miner le charbon (c'est le seul minerai minable en bois dans l'Overworld). Toucher de Soie permet de récupérer le bloc intact." },
        { heading: "Alternatives au charbon", content: "Le charbon de bois (bois cuit au four) est un substitut parfait pour les torches et la cuisson (8 items par charbon). Les seaux de lave sont le meilleur combustible du jeu (cuisent 100 items). En fin de partie, les fermes automatiques à bois et les blaze rods rendent le charbon obsolète comme combustible." }
      ],
      tips: [
        "Le charbon est plus abondant autour de Y=45, explorez les collines et montagnes",
        "C'est le seul minerai de l'Overworld minable avec une pioche en bois",
        "Le charbon ne se génère plus en dessous de Y=0 depuis la 1.18",
        "Fortune III donne jusqu'à 4 charbons par minerai au lieu de 1",
        "Le charbon de bois remplace parfaitement le charbon pour les torches et la cuisson",
        "Un seau de lave cuit 100 items, contre 8 pour un charbon"
      ],
      faq: [
        { question: "Pourquoi ne trouve-t-on plus de charbon en profondeur ?", answer: "Depuis la 1.18, le charbon ne se génère plus en dessous de Y=0. Sa distribution a été déplacée vers la surface et l'altitude (Y=0 à Y=320, pic à Y=45). C'est un choix de game design pour inciter le minage en surface en début de partie." },
        { question: "Le charbon et le charbon de bois sont-ils identiques ?", answer: "Fonctionnellement oui : les deux cuisent 8 items et fabriquent 4 torches. La seule différence est que le charbon de bois ne peut pas être transformé en bloc de charbon (9 charbons = 1 bloc)." },
        { question: "Quelle pioche pour le charbon ?", answer: "Une pioche en bois suffit. Le charbon est le seul minerai de l'Overworld qui peut être miné avec le tier le plus bas. Tous les autres minerais nécessitent au minimum une pioche en pierre." }
      ],
      relatedSlugs: ["couche-fer", "couche-minerais", "couche-cuivre", "couche-diamant", "couche-redstone"]
    }
  },
  {
    slug: "couche-cuivre",
    keyword: "couche cuivre minecraft",
    title: "Couche du Cuivre Minecraft : Guide",
    h1: "À Quelle Couche Trouver du Cuivre dans Minecraft",
    metaDescription: "Découvrez où miner du cuivre dans Minecraft. Meilleure couche, biomes optimaux et utilisations du cuivre dans le jeu.",
    category: "mining",
    volume: 210,
    content: {
      intro: "Le cuivre est un minerai introduit en 1.17 qui s'oxyde avec le temps, changeant de couleur du orange au vert turquoise. Il se génère entre Y=-16 et Y=112 avec un pic réel à Y=43. Il sert à fabriquer des longues-vues, des paratonnerres et des blocs décoratifs. Une pioche en pierre minimum est requise.",
      sections: [
        { heading: "Distribution du cuivre", content: "Le cuivre se génère entre Y=-16 et Y=112, avec un pic de concentration réel à Y=43 (données de génération). C'est un minerai de surface et mi-profondeur classé comme 'commun'. Les veines sont grandes, souvent de 6 à 20 blocs de cuivre brut, ce qui en fait un minerai facile à collecter en masse. Il est absent en dessous de Y=-17 et au-dessus de Y=112." },
        { heading: "Biome optimal : cavernes de spéléothèmes", content: "Le cuivre est encore plus abondant dans les cavernes de spéléothèmes (dripstone caves), où les filons sont générés plus gros. C'est le seul minerai qui bénéficie d'un bonus de taille de filon dans un biome spécifique. Cherchez les stalactites et stalagmites pour identifier ce biome souterrain." },
        { heading: "Drops et Fortune", content: "Le minerai de cuivre lâche 2 à 5 cuivre brut par bloc (ce qui est généreux comparé aux autres minerais). Fortune augmente ce nombre : Fortune III peut donner jusqu'à 20 cuivre brut par bloc. Le cuivre brut doit être fondu dans un four ou haut fourneau pour obtenir des lingots de cuivre. Une pioche en pierre minimum est nécessaire." },
        { heading: "Blocs de cuivre et oxydation", content: "Le cuivre est unique car ses blocs changent de couleur avec le temps : cuivre normal (orange), exposé (orange-vert), altéré (vert), oxydé (turquoise). Chaque stade prend environ 50-80 minutes de jeu réel. Appliquez de la cire (rayon de miel, clic droit) pour figer la couleur. Utilisez une hache pour retirer un niveau d'oxydation ou la cire." }
      ],
      tips: [
        "Y=43 est la couche optimale réelle pour le cuivre (pic de génération)",
        "Le cuivre se génère entre Y=-16 et Y=112 uniquement",
        "Les cavernes de spéléothèmes ont des filons de cuivre plus gros",
        "Chaque minerai lâche 2 à 5 cuivre brut (le plus généreux des minerais)",
        "Fortune III peut donner jusqu'à 20 cuivre brut par bloc",
        "Appliquez de la cire d'abeille pour figer la couleur du cuivre"
      ],
      faq: [
        { question: "Le cuivre sert-il à faire des outils ?", answer: "Non, le cuivre ne permet pas de fabriquer des outils ou de l'armure en vanilla. Il sert principalement à la décoration (blocs de cuivre, toit en cuivre) et à quelques objets utilitaires : longue-vue (avec un éclat d'améthyste) et paratonnerre." },
        { question: "Comment empêcher le cuivre de s'oxyder ?", answer: "Appliquez un rayon de miel (clic droit) sur le bloc de cuivre pour le cirer. Le bloc restera à son stade d'oxydation actuel indéfiniment. Utilisez une hache pour retirer la cire ou un niveau d'oxydation." },
        { question: "Quelle pioche pour le cuivre ?", answer: "Une pioche en pierre minimum est nécessaire. Le cuivre est au même tier que le fer et le lapis-lazuli en termes de pioche requise. Une pioche en bois ne donnera rien." }
      ],
      relatedSlugs: ["couche-fer", "couche-minerais", "couche-charbon", "couche-diamant", "couche-redstone"]
    }
  },
  {
    slug: "couche-redstone",
    keyword: "couche redstone minecraft 1.21",
    title: "Couche Redstone Minecraft : Guide",
    h1: "À Quelle Couche Trouver de la Redstone dans Minecraft",
    metaDescription: "Localisez la redstone dans Minecraft 1.21. Meilleure couche de minage et conseils pour collecter ce minerai essentiel.",
    category: "mining",
    volume: 260,
    content: {
      intro: "La redstone est le composant électronique de Minecraft, nécessaire pour les circuits, pistons, comparateurs et de nombreux mécanismes automatisés. Elle se génère en profondeur entre Y=-64 et Y=15, avec un pic de concentration à Y=-59, soit au même niveau que le diamant. Une pioche en fer minimum est requise.",
      sections: [
        { heading: "Distribution de la redstone", content: "La redstone se génère principalement entre Y=-64 et Y=15, avec un pic à Y=-59 (même couche que le diamant). Elle utilise une distribution triangulaire inversée similaire au diamant : plus on descend, plus elle est fréquente. Elle est classée 'peu commun' mais reste bien plus abondante que le diamant à couche égale. Elle est absente au-dessus de Y=15 dans sa distribution principale." },
        { heading: "Drops et Fortune", content: "Un bloc de minerai de redstone lâche 4 à 5 poudres de redstone de base et donne 1-5 XP. L'enchantement Fortune augmente les drops de manière significative : Fortune III peut donner jusqu'à 8 poudres par bloc. Une pioche en fer minimum est obligatoire. Toucher de Soie permet de récupérer le bloc de minerai intact." },
        { heading: "Minage efficace", content: "Minez à Y=-58 en strip mining pour trouver de la redstone et des diamants simultanément. La redstone est beaucoup plus commune que le diamant (environ 8 fois plus fréquente), vous en accumulerez rapidement des stacks. En dessous de Y=0, le deepslate ralentit le minage : Efficacité V est très recommandé." },
        { heading: "Utilisations de la redstone", content: "La poudre de redstone sert aux circuits de redstone (portes automatiques, fermes automatiques, canons à TNT), comme ingrédient d'alchimie pour prolonger les potions, et pour crafter des boussoles, montres et blocs de redstone (9 poudres). Le bloc de redstone est aussi une source d'alimentation permanente pour les circuits." }
      ],
      tips: [
        "Y=-58 est optimal pour la redstone ET le diamant simultanément (pic à Y=-59)",
        "Pioche en fer minimum obligatoire (bois et pierre ne fonctionnent pas)",
        "Un minerai lâche 4-5 poudres de base, jusqu'à 8 avec Fortune III",
        "La redstone sert aussi d'ingrédient de brassage pour prolonger les potions",
        "La redstone est environ 8 fois plus abondante que le diamant à Y=-58",
        "Un bloc de redstone (9 poudres) sert de source d'alimentation permanente"
      ],
      faq: [
        { question: "La redstone est-elle rare ?", answer: "Non, la redstone est classée 'peu commun' mais reste très abondante en profondeur. Un seul voyage de minage à Y=-58 peut rapporter plusieurs stacks de poudre. Elle est environ 8 fois plus fréquente que le diamant à cette couche." },
        { question: "Quel outil pour miner la redstone ?", answer: "Une pioche en fer minimum est nécessaire. C'est le même tier que l'or, le diamant et l'émeraude. Une pioche en bois ou en pierre ne donnera aucun drop. Utilisez Fortune III pour maximiser les poudres récoltées (jusqu'à 8 par bloc)." }
      ],
      relatedSlugs: ["couche-diamant", "couche-fer", "couche-minerais", "couche-charbon", "couche-cuivre"]
    }
  },
  {
    slug: "trouver-diamant",
    keyword: "ou trouver du diamant minecraft",
    title: "Trouver du Diamant Minecraft : Guide Optimisé",
    h1: "Où Trouver du Diamant dans Minecraft",
    metaDescription: "Guide optimisé pour trouver du diamant dans Minecraft. Techniques de minage, meilleure altitude et enchantements recommandés.",
    category: "mining",
    volume: 210,
    content: {
      intro: "Le diamant est la ressource la plus recherchée de Minecraft pour les outils et l'armure de haut niveau. Il se génère entre Y=-64 et Y=16 avec un pic à Y=-59. Avec les bonnes techniques et une pioche en fer minimum, vous pouvez maximiser vos trouvailles efficacement.",
      sections: [
        { heading: "Altitude optimale", content: "Les diamants se génèrent entre Y=-64 et Y=16 avec une distribution triangulaire inversée, atteignant un maximum à Y=-59. La couche Y=-58 est recommandée car elle évite la bedrock tout en restant dans la zone de concentration maximale. Appuyez sur F3 (Java) pour voir vos coordonnées, ou activez l'affichage dans les paramètres (Bedrock)." },
        { heading: "Strip mining vs exploration de grottes", content: "Le strip mining à Y=-58 est la méthode la plus fiable : creusez des tunnels parallèles de 1x2 espacés de 2 blocs. L'exploration de grandes grottes profondes peut aussi révéler des diamants exposés sur les parois, mais c'est plus aléatoire et dangereux (mobs, lave). Les biomes Deep Dark contiennent aussi des grottes avec des diamants exposés. Combinez les deux méthodes." },
        { heading: "Enchantements indispensables", content: "Fortune III est l'enchantement le plus important : chaque minerai lâche 1 diamant de base, mais Fortune III donne 1-4 diamants (moyenne 2,2, soit plus du double). Efficacité V est essentiel car le deepslate est deux fois plus long à miner. Raccommodage répare votre pioche avec l'XP. Conseil : si vous n'avez pas Fortune III, utilisez Toucher de Soie pour stocker les blocs et les casser plus tard avec Fortune." },
        { heading: "Pioche et préparation", content: "Une pioche en fer minimum est requise pour miner le diamant. Emportez : plusieurs pioches en fer/diamant, un seau d'eau (contre la lave), des torches, de la nourriture et une armure en fer. La potion de résistance au feu est un excellent bonus. N'oubliez pas une table de craft et un four pour les urgences." }
      ],
      tips: [
        "Minez à Y=-58, juste au-dessus de la bedrock, pour maximiser les diamants",
        "Ne minez jamais de diamants sans Fortune III : marquez-les et revenez plus tard",
        "Fortune III donne en moyenne 2,2 diamants par minerai (pioche en fer min.)",
        "Emportez un seau d'eau contre les lacs de lave aquifères fréquents sous Y=-54",
        "Efficacité V est essentiel car le deepslate est deux fois plus long à miner",
        "Les grottes du Deep Dark exposent parfois des diamants naturellement"
      ],
      faq: [
        { question: "Combien de diamants trouve-t-on en moyenne par heure ?", answer: "Avec le strip mining à Y=-58 et une pioche Efficacité V, comptez 10-20 minerais de diamant par heure. Avec Fortune III, cela donne 22-44 diamants effectifs en moyenne." },
        { question: "Les diamants se trouvent-ils près de la lave ?", answer: "C'est un mythe populaire. Les diamants se génèrent indépendamment de la lave. Cependant, sous Y=-54, les lacs de lave aquifères sont fréquents, donc vous en verrez souvent ensemble à cette profondeur." },
        { question: "Quelle pioche pour le diamant ?", answer: "Pioche en fer minimum. Les pioches en bois et en pierre ne donnent rien. Idéalement, utilisez une pioche en diamant ou Netherite avec Fortune III + Efficacité V + Raccommodage." }
      ],
      relatedSlugs: ["couche-diamant", "meilleure-couche-diamant", "couche-minerais", "couche-fer", "trouver-netherite"]
    }
  },
  {
    slug: "trouver-fer",
    keyword: "ou trouver du fer minecraft",
    title: "Trouver du Fer Minecraft : Guide",
    h1: "Où Trouver du Fer dans Minecraft",
    metaDescription: "Localisez le fer rapidement dans Minecraft. Meilleures couches, biomes de montagne et fermes à golems pour le fer illimité.",
    category: "mining",
    volume: 170,
    content: {
      intro: "Le fer est le minerai le plus utile de Minecraft : outils, armure, seaux, rails, chaînes et bien plus. Il se génère entre Y=-64 et Y=320 (la plus grande plage de tous les minerais) avec un pic à Y=14 en souterrain et Y=232 en montagne. Pioche en pierre minimum requise.",
      sections: [
        { heading: "Minage souterrain", content: "Le fer a un pic de génération réel à Y=14 en souterrain. Pour le minage classique, creusez à Y=14 en strip mining. Note importante : le fer est absent entre Y=73 et Y=79, évitez cette zone. Un minerai de fer lâche 1 fer brut, et Fortune III donne 1-4 fer brut (moyenne 2,2). Le fer brut doit être fondu pour obtenir un lingot." },
        { heading: "Minage en montagne (le plus efficace)", content: "Le fer est exceptionnellement abondant en altitude dans les biomes de montagne (prairie, bosquet, pentes enneigées, pics). Le pic à Y=232 offre la plus forte concentration du jeu. Le fer est directement visible sur les parois rocheuses, pas besoin de creuser de tunnels. C'est plus rapide et plus sûr qu'en souterrain." },
        { heading: "Explorer les grottes", content: "Les grottes géantes de la 1.18+ exposent énormément de minerais de fer sur les murs. Explorez les grottes entre Y=0 et Y=40 pour trouver du fer en abondance. Emportez des torches et un seau d'eau. Les grandes veines de minerai de fer (raw iron blocks + ore) peuvent contenir des centaines de blocs dans les grandes grottes." },
        { heading: "Ferme à golems de fer", content: "La meilleure source de fer à long terme est une ferme à golems de fer automatique. Les golems lâchent 3-5 lingots de fer à leur mort. Une ferme bien conçue peut produire 300-400 lingots par heure. C'est le meilleur investissement du jeu et rend le minage de fer obsolète en milieu de partie." }
      ],
      tips: [
        "Y=14 est le pic réel en souterrain, Y=232 en montagne",
        "Le fer est absent entre Y=73 et Y=79 (trou dans la distribution)",
        "Les montagnes sont la meilleure source de fer en début de partie",
        "Pioche en pierre minimum requise pour miner le fer",
        "Fortune III donne en moyenne 2,2 fer brut par minerai",
        "Construisez une ferme à golems de fer dès que possible (300+ lingots/h)"
      ],
      faq: [
        { question: "Quel est le moyen le plus rapide d'obtenir du fer ?", answer: "En début de partie, explorez les montagnes à flanc de falaise (fer visible directement). À long terme, une ferme à golems de fer produit 300-400 lingots par heure automatiquement." },
        { question: "Le fer est-il plus commun en montagne ?", answer: "Oui, le fer a un pic de génération majeur à Y=232 en montagne. C'est le meilleur endroit pour le miner à flanc de falaise sans creuser de tunnel. Les biomes de montagne (pics dentelés, bosquets, pentes enneigées) sont les plus riches." }
      ],
      relatedSlugs: ["couche-fer", "couche-minerais", "trouver-diamant", "trouver-argile", "couche-charbon"]
    }
  },
  {
    slug: "trouver-argile",
    keyword: "ou trouver de l'argile minecraft",
    title: "Trouver de l'Argile Minecraft : Guide",
    h1: "Où Trouver de l'Argile dans Minecraft",
    metaDescription: "Localisez l'argile dans Minecraft pour fabriquer des briques et de la terre cuite. Biomes aquatiques et méthodes de collecte.",
    category: "mining",
    volume: 210,
    content: {
      intro: "L'argile est un bloc gris-bleu trouvé sous l'eau dans Minecraft, nécessaire pour fabriquer des briques, de la terre cuite et des blocs décoratifs. Depuis la 1.18, les grottes luxuriantes sont devenues une source majeure d'argile en plus des biomes aquatiques.",
      sections: [
        { heading: "Localisation de l'argile", content: "L'argile se trouve principalement au fond des rivières, des lacs et des océans peu profonds. Cherchez les blocs gris-bleu sous l'eau, souvent en groupes de 4-12 blocs. Les marécages et les mangroves sont les biomes de surface les plus riches en argile. L'argile n'est pas un minerai au sens classique et peut être minée avec n'importe quel outil." },
        { heading: "Grottes luxuriantes", content: "Depuis la 1.18, les grottes luxuriantes (lush caves) contiennent beaucoup d'argile au fond des bassins d'eau souterrains. C'est la meilleure source en grande quantité. Cherchez des azalées en surface pour localiser une grotte luxuriante en dessous (les azalées poussent au-dessus des grottes luxuriantes)." },
        { heading: "Récolte et transformation", content: "Minez l'argile avec n'importe quel outil (ou à la main) pour obtenir 4 boules d'argile par bloc. Toucher de Soie permet de récupérer le bloc entier. Cuisez les boules d'argile dans un four pour obtenir des briques, puis combinez 4 briques pour un bloc de briques. Pour la terre cuite, cuisez directement le bloc d'argile au four." }
      ],
      tips: [
        "Les marécages et mangroves ont le plus d'argile en surface",
        "Les grottes luxuriantes sont la meilleure source souterraine d'argile",
        "Utilisez Toucher de Soie pour récolter le bloc d'argile entier (plus compact)",
        "4 boules d'argile = 1 bloc d'argile, reformable sur la table de craft",
        "Cherchez des azalées en surface pour trouver des grottes luxuriantes en dessous"
      ],
      faq: [
        { question: "Peut-on farmer l'argile ?", answer: "Il n'existe pas de ferme automatique d'argile en vanilla. Cependant, les grottes luxuriantes et les marécages en contiennent suffisamment pour la plupart des projets de construction." },
        { question: "Quelle est la différence entre briques et terre cuite ?", answer: "Les briques se fabriquent en cuisant les boules d'argile puis en les assemblant (4 briques = 1 bloc). La terre cuite se fait en cuisant le bloc d'argile directement au four. La terre cuite peut être teinte en 16 couleurs avec des teintures." }
      ],
      relatedSlugs: ["couche-fer", "trouver-fer", "trouver-andesite", "couche-minerais", "trouver-diamant"]
    }
  },
  {
    slug: "trouver-andesite",
    keyword: "ou trouver de l'andésite minecraft",
    title: "Trouver de l'Andésite Minecraft : Guide",
    h1: "Où Trouver de l'Andésite dans Minecraft",
    metaDescription: "Localisez l'andésite dans Minecraft pour vos constructions. Couches de génération et recette de craft alternative détaillées.",
    category: "mining",
    volume: 260,
    content: {
      intro: "L'andésite est un bloc de pierre décorative gris foncé dans Minecraft, très prisé en construction pour son esthétique naturelle. Elle se trouve naturellement sous terre entre Y=0 et Y=160 ou peut être craftée. C'est un bloc commun qui ne nécessite aucun outil spécial.",
      sections: [
        { heading: "Génération naturelle", content: "L'andésite se génère naturellement entre Y=0 et Y=160 en veines de taille variable mélangées à la pierre. Elle est très commune et vous en trouverez en minant n'importe où dans cette plage. Les grottes exposent souvent de grandes quantités d'andésite sur leurs parois. N'importe quelle pioche suffit pour la miner." },
        { heading: "Recette de craft", content: "L'andésite se craft en combinant 1 diorite + 1 pavé dans la grille de craft (2x1). La diorite elle-même se craft avec 2 pavés + 2 quartz du Nether en alternance (2x2). Cela permet de produire de l'andésite en quantité illimitée si vous avez accès au quartz du Nether." },
        { heading: "Variantes et utilisation", content: "L'andésite peut être polie dans le tailleur de pierre pour un look plus lisse. L'andésite polie se combine bien avec la pierre taillée pour les constructions médiévales et les chemins. Vous pouvez en faire des escaliers, des dalles et des murs via le tailleur de pierre pour plus d'options décoratives." }
      ],
      tips: [
        "L'andésite est très commune entre Y=0 et Y=160, minez n'importe où",
        "Craftez-la avec 1 diorite + 1 pavé pour une source illimitée",
        "L'andésite polie est idéale pour les routes et chemins médiévaux",
        "Le tailleur de pierre est le meilleur outil pour transformer l'andésite en variantes"
      ],
      faq: [
        { question: "Peut-on fabriquer de l'andésite sans miner ?", answer: "Oui, craftez-la avec 1 diorite + 1 pavé. La diorite se craft avec 2 pavés + 2 quartz du Nether en alternance. Le quartz du Nether est la seule ressource non-renouvelable nécessaire." },
        { question: "L'andésite a-t-elle des propriétés spéciales ?", answer: "Non, l'andésite est purement décorative. Elle a la même résistance aux explosions que la pierre (6). Elle peut remplacer le pavé dans certaines recettes de craft." }
      ],
      relatedSlugs: ["trouver-argile", "couche-minerais", "trouver-fer", "couche-diamant", "couche-fer"]
    }
  },
  {
    slug: "trouver-netherite",
    keyword: "comment trouver de la netherite sur minecraft",
    title: "Trouver de la Netherite Minecraft : Guide",
    h1: "Comment Trouver de la Netherite dans Minecraft",
    metaDescription: "Guide complet pour trouver de la Netherite dans Minecraft. Débris antiques, technique du lit et transformation en lingots.",
    category: "mining",
    volume: 140,
    content: {
      intro: "La Netherite est le matériau le plus résistant de Minecraft, surpassant le diamant en durabilité et en puissance. Pour l'obtenir, il faut trouver des débris antiques dans le Nether, un minerai très rare qui nécessite une pioche en diamant minimum. Les débris antiques se génèrent entre Y=8 et Y=119 avec un pic à Y=15.",
      sections: [
        { heading: "Les débris antiques", content: "Les débris antiques sont le minerai le plus rare du jeu (classé 'très rare'). Ils se génèrent dans le Nether entre Y=8 et Y=119, avec un pic de concentration à Y=15. En moyenne, on trouve environ 1,7 débris par chunk. Ils résistent aux explosions et ne brûlent pas dans la lave. Une pioche en diamant minimum est obligatoire pour les miner (c'est le seul minerai qui l'exige)." },
        { heading: "Technique du lit (bed mining)", content: "Les lits explosent dans le Nether quand on essaie de dormir. Placez un lit à Y=15, mettez un bloc solide entre vous et le lit pour vous protéger, puis cliquez sur le lit. L'explosion dégage une grande zone et les débris antiques résistent à l'explosion, restant visibles dans la cavité. C'est la méthode la plus efficace et la moins coûteuse." },
        { heading: "Technique du TNT", content: "Similaire au bed mining mais plus coûteuse en ressources. Placez du TNT à Y=15 et allumez-le. L'avantage est que le TNT ne cause pas de dégâts de feu, réduisant le risque de mort. Les débris antiques résistent à l'explosion du TNT. Emportez beaucoup de TNT et une potion de résistance au feu." },
        { heading: "Transformer en Netherite", content: "Les débris antiques doivent d'abord être fondus dans un four ou haut fourneau pour obtenir des fragments de Netherite (1 débris = 1 fragment). Combinez ensuite 4 fragments de Netherite + 4 lingots d'or sur la table de craft pour obtenir 1 lingot de Netherite. Utilisez une table de forgeron pour améliorer un outil ou une pièce d'armure en diamant vers la Netherite." }
      ],
      tips: [
        "Y=15 est la meilleure couche pour les débris antiques (pic de concentration)",
        "Pioche en diamant minimum obligatoire (c'est le seul minerai qui l'exige)",
        "La technique du lit est gratuite mais dangereuse : utilisez des blocs de protection",
        "Les débris antiques résistent aux explosions et ne brûlent pas dans la lave",
        "Il faut 4 débris antiques pour UN seul lingot de Netherite (4 fragments + 4 or)",
        "Emportez une potion de résistance au feu pour survivre aux explosions et à la lave"
      ],
      faq: [
        { question: "Combien de débris antiques pour un set complet ?", answer: "Il faut 4 débris par lingot et 1 lingot par pièce d'équipement. Un set complet d'armure (4 pièces) + outils principaux (épée, pioche, hache, pelle = 4 pièces) nécessite 32 débris antiques, soit 8 lingots." },
        { question: "La Netherite est-elle résistante à la lave ?", answer: "Oui, les objets en Netherite ne brûlent pas dans la lave et flottent à la surface. Les débris antiques eux-mêmes sont aussi résistants au feu et aux explosions. C'est un avantage majeur sur le diamant." },
        { question: "Quelle pioche pour les débris antiques ?", answer: "Une pioche en diamant minimum est obligatoire. C'est le seul minerai du jeu qui exige ce tier. Les pioches en fer, pierre ou bois ne donnent aucun drop. Une pioche en Netherite fonctionne aussi, évidemment." }
      ],
      relatedSlugs: ["couche-diamant", "trouver-diamant", "couche-minerais", "couche-fer", "ancienne-cite"]
    }
  },
  {
    slug: "meilleure-couche-diamant",
    keyword: "meilleur couche diamant minecraft",
    title: "Meilleure Couche Diamant Minecraft : Optimisation",
    h1: "La Meilleure Couche pour le Diamant dans Minecraft",
    metaDescription: "Optimisez votre minage de diamants Minecraft. Analyse détaillée de la meilleure couche et techniques de strip mining efficaces.",
    category: "mining",
    volume: 210,
    content: {
      intro: "Trouver la couche optimale pour le diamant est crucial pour tout joueur Minecraft. Depuis la 1.18, les diamants utilisent une distribution triangulaire inversée entre Y=-64 et Y=16 : plus vous descendez, plus ils sont fréquents. Le pic est à Y=-59 et une pioche en fer minimum est requise.",
      sections: [
        { heading: "Analyse de la distribution", content: "Les diamants utilisent une distribution triangulaire inversée entre Y=-64 et Y=16. La probabilité augmente linéairement vers le bas, atteignant son maximum théorique à Y=-64. Cependant, la bedrock à Y=-64 et Y=-63 réduit l'espace minable. En pratique, Y=-59 est le pic réel de concentration d'après les données de génération du wiki officiel." },
        { heading: "Y=-58 : le compromis parfait", content: "Y=-58 offre la concentration maximale de diamants sans obstruction de bedrock. À cette couche, vos pieds sont à Y=-58 et votre tête à Y=-57, vous permettant de scanner deux couches simultanément. Creusez des tunnels de 1x2 espacés de 2 blocs pour couvrir efficacement la zone. En dessous de Y=0, tout est en deepslate : Efficacité V est fortement recommandé." },
        { heading: "Comparaison avec l'ancien Y=11", content: "Avant la 1.18, Y=11 était la couche standard pour les diamants (juste au-dessus des lacs de lave). Ce n'est plus du tout le cas : à Y=11, les diamants sont maintenant extrêmement rares car la distribution a été inversée. En 1.18+, descendez impérativement à Y=-58 pour des résultats optimaux." },
        { heading: "Maximiser avec les enchantements", content: "Fortune III est indispensable pour le diamant : chaque minerai donne 1 diamant de base, mais Fortune III donne 1-4 (moyenne 2,2). Efficacité V compense le minage lent du deepslate. Raccommodage maintient votre pioche indéfiniment. Conseil : si vous n'avez pas encore Fortune III, utilisez Toucher de Soie pour stocker les minerais et les casser plus tard." }
      ],
      tips: [
        "Y=-58 est la meilleure couche pratique, confirmée par les données de génération",
        "Creusez des tunnels de 1x2 tous les 2 blocs pour une couverture optimale",
        "L'ancien Y=11 ne fonctionne plus depuis la 1.18 (distribution inversée)",
        "Fortune III donne en moyenne 2,2 diamants par minerai (plus du double)",
        "Efficacité V est essentiel pour compenser la lenteur du deepslate",
        "Pioche en fer minimum requise (diamant ou Netherite recommandé)"
      ],
      faq: [
        { question: "Y=-59 ou Y=-58, laquelle est vraiment la meilleure ?", answer: "Y=-59 a techniquement la plus forte concentration de diamants d'après les données réelles. Y=-58 évite la bedrock plus facilement et permet de scanner Y=-58 et Y=-57 en marchant. La différence est minime : les deux sont excellentes." },
        { question: "Le strip mining est-il meilleur que l'exploration de grottes ?", answer: "Pour les diamants, le strip mining à Y=-58 est plus fiable et régulier. L'exploration de grottes peut révéler des veines exposées par chance mais est plus aléatoire et dangereuse (mobs, lave). Le strip mining offre un taux de diamants par heure plus constant." }
      ],
      relatedSlugs: ["couche-diamant", "trouver-diamant", "couche-minerais", "couche-fer", "trouver-netherite"]
    }
  },
  {
    slug: "ancienne-cite",
    keyword: "ancienne cité minecraft",
    title: "Ancienne Cité Minecraft : Guide Complet",
    h1: "L'Ancienne Cité dans Minecraft",
    metaDescription: "Explorez l'ancienne cité Minecraft sans invoquer le Warden. Localisation, butin rare et stratégies de survie dans le Deep Dark.",
    category: "mining",
    volume: 480,
    content: {
      intro: "L'ancienne cité est la structure la plus mystérieuse et dangereuse de Minecraft, située dans le biome Deep Dark. Elle contient des coffres avec du loot exclusif mais est gardée par les sculk sensors et le Warden, un mob quasi-invincible avec 500 PV. L'exploration requiert prudence et préparation.",
      sections: [
        { heading: "Localiser une ancienne cité", content: "Les anciennes cités se génèrent dans le biome Deep Dark, entre Y=-52 et Y=-20. Elles apparaissent généralement sous les biomes de montagne ou de plateau. Utilisez /locate structure ancient_city en commande pour la trouver. En survie, descendez profondément sous les montagnes et cherchez les blocs de sculk (texture bleu-vert sombre)." },
        { heading: "Le système de sculk", content: "Les sculk sensors détectent les vibrations (pas, blocs cassés, projectiles, ouverture de coffres) et transmettent le signal aux sculk shriekers. Après 4 activations de shrieker dans un rayon de 48 blocs, le Warden est invoqué. Accroupissez-vous en permanence pour éviter de produire des vibrations de pas. La laine et les tapis bloquent complètement les vibrations." },
        { heading: "Le Warden", content: "Le Warden possède 500 PV (250 coeurs) et inflige 30 dégâts en Difficile, tuant un joueur en armure de Netherite en 2 coups. Il est aveugle mais détecte les vibrations et l'odeur des joueurs. Son attaque sonique à distance traverse les murs. NE COMBATTEZ PAS le Warden : il n'a aucun drop intéressant. Fuyez en silence ou distrayez-le avec des projectiles." },
        { heading: "Butin exclusif", content: "Les coffres contiennent : fragments de disque de musique (exclusifs), gabarits de forgeron (pour l'armure décorative de Netherite), pommes dorées enchantées, enchantements Swift Sneak/Furtivité Rapide (exclusif, jusqu'au niveau III), poudre d'écho (exclusive, pour les capteurs de sculk calibrés). Le loot justifie le risque pour les joueurs bien équipés." }
      ],
      tips: [
        "Accroupissez-vous EN PERMANENCE dans l'ancienne cité",
        "Placez de la laine ou des tapis sur les sculk sensors pour bloquer les vibrations",
        "N'essayez JAMAIS de combattre le Warden (500 PV, pas de drops utiles)",
        "Emportez des boules de neige ou des flèches pour distraire les sensors à distance",
        "Les bottes avec Furtivité Rapide III vous permettent de vous déplacer accroupi plus vite",
        "Le Warden disparaît après 60 secondes sans détecter de vibrations"
      ],
      faq: [
        { question: "Peut-on tuer le Warden ?", answer: "Techniquement oui, mais c'est extrêmement difficile (500 PV, 30 dégâts en Difficile, attaque sonique à distance). Il ne lâche qu'une sculk catalyst, ce qui ne vaut pas le risque. La fuite ou la discrétion sont toujours la meilleure option." },
        { question: "Comment obtenir Furtivité Rapide III ?", answer: "L'enchantement Furtivité Rapide (Swift Sneak) se trouve exclusivement dans les coffres des anciennes cités. Il s'applique aux jambières et augmente la vitesse d'accroupissement de 15% par niveau (45% au niveau III)." }
      ],
      relatedSlugs: ["couche-diamant", "trouver-netherite", "couche-minerais", "trouver-diamant", "hauteur-max"]
    }
  },
  {
    slug: "hauteur-max",
    keyword: "hauteur max minecraft",
    title: "Hauteur Max Minecraft : Limites du Monde",
    h1: "La Hauteur Maximum dans Minecraft",
    metaDescription: "Découvrez les limites de hauteur du monde Minecraft. Hauteur maximale de construction, profondeur minimale et bedrock.",
    category: "mining",
    volume: 170,
    content: {
      intro: "Connaître les limites de hauteur de Minecraft est essentiel pour le minage, la construction et l'exploration. Depuis la 1.18, le monde a été considérablement étendu en profondeur (Y=-64) et en hauteur (Y=320), doublant pratiquement l'espace vertical disponible.",
      sections: [
        { heading: "Limites actuelles (1.18+)", content: "Le monde Minecraft s'étend de Y=-64 (profondeur minimale, bedrock) à Y=320 (hauteur maximale). La zone constructible couvre 384 blocs de hauteur. La bedrock se trouve à Y=-64 (fond) et le bloc le plus haut plaçable est Y=319. En dessous de Y=0, la pierre est remplacée par l'ardoise des abîmes (deepslate), plus résistante." },
        { heading: "Avant vs après 1.18", content: "Avant la 1.18, le monde allait de Y=0 à Y=256 (256 blocs). La 1.18 a ajouté 64 blocs de profondeur (Y=-64 à Y=0) et 64 blocs de hauteur (Y=256 à Y=320), totalisant 384 blocs. Les anciens chunks sont automatiquement étendus en profondeur lors de la mise à jour. Cela a permis l'ajout du deepslate, du Deep Dark et de montagnes plus réalistes." },
        { heading: "Le Nether et l'End", content: "Le Nether a un sol de bedrock à Y=0 et un plafond de bedrock à Y=127 (128 blocs d'espace). L'End n'a pas de plafond de bedrock mais la limite de Y=320 s'applique. Les plateformes de l'End se trouvent autour de Y=60. Les débris antiques dans le Nether se génèrent entre Y=8 et Y=119." },
        { heading: "Impact sur le gameplay et le minage", content: "L'extension en profondeur a ajouté les minerais en deepslate, le biome Deep Dark et les anciennes cités. Les diamants, redstone et or sont désormais concentrés en profondeur (pic à Y=-59). L'extension en hauteur permet des montagnes atteignant Y=256+ avec du fer et de l'émeraude abondants. Les élytra sont encore plus utiles avec ces hauteurs." }
      ],
      tips: [
        "La hauteur constructible va de Y=-64 à Y=319 (384 blocs au total)",
        "Utilisez F3 (Java) ou les paramètres (Bedrock) pour voir votre altitude exacte",
        "Sous Y=0, le deepslate remplace la pierre (deux fois plus long à miner)",
        "Le plafond du Nether est à Y=127, les débris antiques entre Y=8 et Y=119",
        "Les montagnes naturelles atteignent Y=256 avec du fer et de l'émeraude"
      ],
      faq: [
        { question: "Peut-on construire au-dessus de Y=320 ?", answer: "Non, Y=319 est le bloc le plus haut plaçable. Tenter de placer un bloc au-dessus ne fonctionnera pas. Cette limite est codée en dur dans le jeu et s'applique à tous les mondes (Overworld, Nether, End)." },
        { question: "Le plafond du Nether est-il accessible ?", answer: "En Java Edition, il est possible de monter au-dessus du plafond de bedrock du Nether via un glitch avec l'Ender Pearl. L'espace plat au-dessus est souvent utilisé pour construire des routes de transport rapide (ice roads)." }
      ],
      relatedSlugs: ["couche-minerais", "couche-diamant", "ancienne-cite", "couche-fer", "trouver-netherite"]
    }
  }
];
