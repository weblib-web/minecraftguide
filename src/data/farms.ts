import type { PageData } from "./types";

export const farmsPages: PageData[] = [
  {
    slug: "fer",
    keyword: "ferme a fer minecraft",
    title: "Ferme à Fer Minecraft : Guide de Construction",
    h1: "Comment Construire une Ferme à Fer dans Minecraft",
    metaDescription: "Construisez une ferme à fer automatique Minecraft. Guide étape par étape avec villageois, golems et système de collecte.",
    category: "farms",
    volume: 1000,
    content: {
      intro: "La ferme à fer est l'une des constructions automatiques les plus importantes dans Minecraft. Elle exploite les golems de fer générés par les villageois pour produire du fer en continu. Une ferme bien conçue peut rapporter plusieurs centaines de lingots par heure.",
      sections: [
        { heading: "Principe de fonctionnement", content: "Les villageois génèrent des golems de fer quand ils sont effrayés et ont dormi récemment. En plaçant 3 villageois avec des lits et un zombie pour les effrayer cycliquement, les golems apparaissent régulièrement. Ils sont ensuite tués automatiquement par de la lave pour récupérer les lingots." },
        { heading: "Matériaux nécessaires", content: "Vous aurez besoin de 3 lits, 3 blocs de travail (composteurs), 20+ blocs solides, 1 seau de lave, 1 seau d'eau, des dalles, des panneaux et 1 zombie nommé (étiquette). Les villageois doivent être transportés sur place, ce qui est souvent la partie la plus complexe." },
        { heading: "Construction pas à pas", content: "Construisez une plateforme en hauteur avec 3 pods pour les villageois (1 lit + 1 composteur chacun). Au centre, un espace de spawn pour les golems avec de l'eau qui les pousse vers un canal. Le canal mène à une zone de mise à mort avec de la lave suspendue au-dessus de panneaux. Le zombie est maintenu dans une cellule visible des villageois." },
        { heading: "Optimisation", content: "La version de base produit environ 40 lingots/heure. Pour augmenter la production, construisez plusieurs modules empilés verticalement avec des groupes de villageois séparés. Chaque module ajoute environ 40 lingots/heure. Les fermes les plus efficaces utilisent 4 modules pour 160+ lingots/heure." }
      ],
      tips: [
        "Nommez le zombie avec une étiquette pour qu'il ne despawn pas",
        "Vérifiez que les villageois ont bien accès à leurs lits et blocs de travail",
        "La ferme doit être à plus de 64 blocs du village le plus proche",
        "Les golems ne spawnt que si les villageois ont dormi et ont un métier",
        "Utilisez des wagonnets pour transporter les villageois plus facilement"
      ],
      faq: [
        { question: "Pourquoi ma ferme ne produit-elle pas de golems ?", answer: "Vérifiez que les 3 villageois ont des lits, des blocs de travail et qu'ils voient le zombie. Ils doivent avoir dormi au moins une fois et travaillé. Assurez-vous qu'aucun autre village n'est à proximité." },
        { question: "Cette ferme fonctionne-t-elle en Bedrock ?", answer: "Le principe est similaire mais les mécaniques de spawn des golems diffèrent en Bedrock. Le nombre de villageois nécessaire est de 10+ et les conditions de spawn sont légèrement différentes." }
      ],
      relatedSlugs: ["xp", "canne-a-sucre", "automatique", "laine", "fer-bedrock"]
    }
  },
  {
    slug: "canne-a-sucre",
    keyword: "ferme a canne a sucre minecraft",
    title: "Ferme à Canne à Sucre Minecraft : Guide",
    h1: "Construire une Ferme à Canne à Sucre dans Minecraft",
    metaDescription: "Construisez une ferme à canne à sucre automatique Minecraft. Design simple avec pistons et observateurs pour du papier illimité.",
    category: "farms",
    volume: 390,
    content: {
      intro: "La canne à sucre est essentielle pour le papier (livres, cartes, fusées d'élytra) et le sucre (potions, gâteaux). Une ferme automatique utilisant des observateurs et des pistons est simple à construire et produit en continu sans intervention.",
      sections: [
        { heading: "Design de base", content: "Placez de la canne à sucre sur du sable ou de la terre adjacente à l'eau. Derrière chaque canne, placez un observateur pointant vers la canne. Derrière l'observateur, un piston. Quand la canne pousse à 3 blocs, l'observateur détecte le changement et active le piston qui casse le bloc du milieu." },
        { heading: "Système de collecte", content: "Placez un canal d'eau au pied des cannes qui pousse les items vers un entonnoir connecté à un coffre. Utilisez des blocs de verre ou des dalles pour empêcher les items de s'échapper. L'eau transporte automatiquement les cannes cassées vers le point de collecte." },
        { heading: "Agrandir la ferme", content: "Répétez le design en lignes parallèles pour augmenter la production. Une rangée de 16 cannes produit environ 1 stack de canne à sucre par heure. Ajoutez autant de rangées que nécessaire. La ferme peut être construite sur plusieurs niveaux pour une production massive." },
        { heading: "Optimisation par biome", content: "La canne à sucre pousse à la même vitesse dans tous les biomes, mais elle nécessite un niveau de lumière suffisant. La poudre d'os NE fonctionne PAS sur la canne à sucre en Java Edition (mais oui en Bedrock). En Java, la seule façon d'accélérer est d'augmenter le nombre de plantations." }
      ],
      tips: [
        "La canne à sucre doit être plantée sur sable/terre adjacente à l'eau",
        "Un observateur + piston par canne est le design le plus fiable",
        "La canne à sucre ne pousse pas au-dessus de 3 blocs de haut",
        "En Bedrock, la poudre d'os accélère la croissance de la canne à sucre"
      ],
      faq: [
        { question: "À quelle vitesse pousse la canne à sucre ?", answer: "La canne à sucre pousse d'un bloc environ toutes les 18 minutes en moyenne. La vitesse est affectée par le tick aléatoire du jeu et ne peut pas être accélérée en Java Edition." },
        { question: "La canne à sucre a-t-elle besoin de lumière ?", answer: "Non, contrairement aux cultures, la canne à sucre pousse indépendamment du niveau de lumière. Vous pouvez construire une ferme souterraine sans éclairage." }
      ],
      relatedSlugs: ["fer", "xp", "automatique", "bois", "laine"]
    }
  },
  {
    slug: "xp",
    keyword: "ferme a xp minecraft",
    title: "Ferme à XP Minecraft : Guide Complet",
    h1: "Comment Construire une Ferme à XP dans Minecraft",
    metaDescription: "Les meilleures fermes à XP Minecraft. Spawner de mobs, Enderman, et designs efficaces pour monter de niveau rapidement.",
    category: "farms",
    volume: 320,
    content: {
      intro: "L'expérience est nécessaire pour les enchantements et la réparation d'outils dans Minecraft. Les fermes à XP automatisent la collecte d'XP en tuant des mobs de manière contrôlée. Plusieurs designs existent selon votre progression dans le jeu.",
      sections: [
        { heading: "Ferme de spawner (début de jeu)", content: "Trouvez un donjon avec un spawner de zombies ou de squelettes. Creusez un canal d'eau qui pousse les mobs vers une chute de 22 blocs. Les mobs arrivent en bas avec un demi-cœur de vie. Frappez-les une fois pour les tuer et récolter l'XP. C'est la ferme la plus accessible en début de partie." },
        { heading: "Ferme d'Endermen (milieu de jeu)", content: "Dans l'End, les Endermen spawnt en masse sur les îles extérieures. Construisez une plateforme de 2 blocs de haut que les Endermen ne peuvent pas traverser. Frappez leurs pieds pour les tuer. C'est la meilleure ferme à XP du jeu en termes d'efficacité, produisant des niveaux 0-30 en quelques secondes." },
        { heading: "Ferme de Piglins zombifiés (Nether)", content: "Dans le Nether, construisez une grande plateforme au-dessus du toit de bedrock ou dans le Nether. Les piglins zombifiés spawnt en masse. Utilisez de l'eau (impossible dans le Nether) remplacée par des entonnoirs ou un système de portail pour les transporter et les regrouper." },
        { heading: "Ferme de Gardiens (avancé)", content: "Videz un monument sous-marin et exploitez les spawns de Gardiens. C'est extrêmement efficace mais demande un travail colossal de drainage. Les Gardiens donnent beaucoup d'XP et du prismarine. C'est considéré comme un projet de fin de jeu." }
      ],
      tips: [
        "La ferme de spawner est la plus simple à construire en début de partie",
        "La ferme d'Endermen dans l'End est la plus efficace du jeu",
        "Utilisez Raccommodage sur vos outils pour convertir l'XP en durabilité",
        "Les fermes à XP sont aussi d'excellentes sources de loot (os, flèches, perles)"
      ],
      faq: [
        { question: "Quelle est la ferme à XP la plus efficace ?", answer: "La ferme d'Endermen dans l'End est de loin la plus efficace, permettant de passer du niveau 0 au niveau 30 en moins de 30 secondes. Elle nécessite cependant d'avoir vaincu l'Ender Dragon." },
        { question: "Les fermes à XP fonctionnent-elles AFK ?", answer: "La plupart nécessitent de frapper les mobs manuellement pour l'XP. Certains designs utilisent des loups apprivoisés ou des systèmes automatiques, mais l'XP nécessite généralement la présence du joueur." }
      ],
      relatedSlugs: ["fer", "canne-a-sucre", "automatique", "xp-1-21", "poulet"]
    }
  },
  {
    slug: "automatique",
    keyword: "ferme automatique minecraft",
    title: "Ferme Automatique Minecraft : Guide Complet",
    h1: "Les Fermes Automatiques dans Minecraft",
    metaDescription: "Guide des meilleures fermes automatiques Minecraft. Fer, nourriture, XP et ressources : automatisez votre survie efficacement.",
    category: "farms",
    volume: 320,
    content: {
      intro: "Les fermes automatiques transforment votre expérience Minecraft en éliminant le farming répétitif. Des cultures aux mobs, en passant par les minerais, presque tout peut être automatisé. Voici un tour d'horizon des fermes essentielles à construire.",
      sections: [
        { heading: "Fermes de nourriture", content: "Les fermes de culture utilisent des villageois fermiers qui récoltent et replantent automatiquement le blé, les carottes et les pommes de terre. Un entonnoir sous les blocs de culture collecte les excédents. Les fermes de poulets automatiques utilisent des distributeurs et de la lave pour cuire les poulets instantanément." },
        { heading: "Fermes de ressources", content: "La ferme à fer (golems), la ferme de laine (moutons et cisailles via distributeur), la ferme de canne à sucre (observateurs + pistons) et la ferme de bois (TNT ou pistons) couvrent les besoins en matériaux de base. Chacune a un design spécifique optimisé." },
        { heading: "Fermes de mobs", content: "Les dark rooms (salles sombres) sont de grandes chambres où les mobs hostiles spawnt naturellement puis sont poussés par l'eau vers un point de collecte. Les fermes de spawner exploitent les spawners de donjon. Les fermes du Nether ciblent les Blazes et les piglins zombifiés." },
        { heading: "Fermes Redstone avancées", content: "Les trieurs automatiques utilisent des entonnoirs et des comparateurs pour trier les items par type. Les systèmes de stockage automatique combinent trieurs et coffres étiquetés. Les fermes de TNT automatiques copient du TNT pour le minage massif. Ces systèmes demandent une bonne maîtrise de la redstone." }
      ],
      tips: [
        "Commencez par une ferme de nourriture et une ferme à fer",
        "Les entonnoirs sont la base de toute automatisation",
        "Placez vos fermes dans les chunks chargés pour qu'elles fonctionnent en continu",
        "Les observateurs sont les meilleurs détecteurs de changement pour les fermes"
      ],
      faq: [
        { question: "Les fermes fonctionnent-elles quand je suis loin ?", answer: "Non, les fermes ne fonctionnent que dans les chunks chargés, typiquement un rayon de 128 blocs autour du joueur. Certains serveurs ont des chunk loaders pour contourner cette limite." },
        { question: "Quelle est la première ferme à construire ?", answer: "La ferme de culture automatique avec villageois est la plus utile en début de partie, suivie de la ferme à fer qui fournit un matériau essentiel en continu." }
      ],
      relatedSlugs: ["fer", "canne-a-sucre", "xp", "bois", "guide-automatique"]
    }
  },
  {
    slug: "bois",
    keyword: "ferme a bois minecraft",
    title: "Ferme à Bois Minecraft : Guide",
    h1: "Comment Construire une Ferme à Bois dans Minecraft",
    metaDescription: "Construisez une ferme à bois automatique ou semi-automatique Minecraft. Designs optimisés pour une récolte de bois efficace.",
    category: "farms",
    volume: 210,
    content: {
      intro: "Le bois est la ressource la plus utilisée dans Minecraft pour la construction, le craft et le combustible. Une ferme à bois semi-automatique accélère considérablement la collecte. Les designs fully automatiques sont possibles mais complexes.",
      sections: [
        { heading: "Ferme semi-automatique simple", content: "Plantez des arbres en rangées avec 2 blocs d'espacement. Limitez la hauteur en plaçant un bloc à 7 blocs au-dessus du sol pour forcer les chênes à rester petits. Récoltez manuellement avec une hache Efficacité V. Replantez les pousses collectées. C'est le design le plus pratique." },
        { heading: "Ferme TNT automatique", content: "Les designs avancés utilisent du TNT pour casser les arbres automatiquement. Un système de redstone détecte la croissance de l'arbre (observateur), puis active un TNT qui détruit le tronc. L'eau récupère les bûches et les pousses. Coûteux en poudre à canon mais entièrement automatique." },
        { heading: "Ferme de bambou (alternative)", content: "Le bambou pousse extrêmement vite et peut servir de combustible alternatif au bois. Une ferme de bambou avec observateurs et pistons produit des centaines de bambous par heure. Le bambou cuit moins d'items que le bois mais la quantité compense largement." }
      ],
      tips: [
        "Limitez la hauteur des chênes en plaçant un bloc à 7 blocs de hauteur",
        "L'enchantement Efficacité V rend la coupe manuelle très rapide",
        "Le bambou est une alternative plus facile à automatiser que le bois",
        "Utilisez le mod TreeCapitator ou Couper les Arbres pour le bois en vanilla"
      ],
      faq: [
        { question: "Peut-on automatiser complètement la récolte de bois ?", answer: "Oui, avec des designs utilisant du TNT et des systèmes de détection par observateurs. Ces fermes sont cependant coûteuses et bruyantes. La ferme semi-automatique reste plus pratique pour la plupart des joueurs." },
        { question: "Quel arbre est le plus efficace à farmer ?", answer: "Le chêne petit (hauteur limitée) est le plus pratique car il reste à taille gérable. Le bouleau donne toujours des arbres de taille fixe, ce qui le rend prévisible." }
      ],
      relatedSlugs: ["fer", "canne-a-sucre", "automatique", "laine", "poulet"]
    }
  },
  {
    slug: "laine",
    keyword: "ferme a laine minecraft",
    title: "Ferme à Laine Minecraft : Guide",
    h1: "Comment Construire une Ferme à Laine dans Minecraft",
    metaDescription: "Construisez une ferme à laine automatique Minecraft avec moutons et distributeurs. Design simple et efficace pour toutes les couleurs.",
    category: "farms",
    volume: 210,
    content: {
      intro: "La laine est un matériau de construction coloré et un composant essentiel pour les lits et les bannières. Une ferme automatique utilise des distributeurs avec des cisailles pour tondre les moutons régulièrement, produisant de la laine en continu.",
      sections: [
        { heading: "Design de la ferme", content: "Enfermez un mouton dans un espace de 1x1 avec de l'herbe au sol. Placez un observateur qui détecte quand l'herbe repousse (le mouton mange l'herbe pour repousser sa laine). Connectez l'observateur à un distributeur contenant des cisailles. Le distributeur tond le mouton automatiquement." },
        { heading: "Système de collecte", content: "Placez un entonnoir sous le mouton pour récupérer la laine tombée. Connectez l'entonnoir à un coffre. La laine tombe directement à travers le bloc d'herbe si vous utilisez une trappe ouverte sous le mouton. Alternativement, l'eau peut transporter la laine vers un point central." },
        { heading: "Toutes les couleurs", content: "Teignez les moutons avec différents colorants avant de les enfermer. Un mouton teint produit toujours de la laine de sa couleur. Construisez 16 modules identiques avec un mouton de chaque couleur pour une production complète. Les moutons ont besoin d'herbe pour repousser leur laine." }
      ],
      tips: [
        "Le mouton doit avoir de l'herbe sous lui pour repousser sa laine",
        "Un distributeur avec des cisailles tond automatiquement le mouton",
        "Teignez le mouton une seule fois, il gardera sa couleur en repoussant",
        "Chaque module ne nécessite qu'un seul mouton et un distributeur"
      ],
      faq: [
        { question: "À quelle vitesse le mouton repousse-t-il sa laine ?", answer: "Le mouton repousse sa laine après avoir mangé de l'herbe, ce qui prend environ 1 à 2 minutes. La production est d'environ 1 laine par minute par mouton." },
        { question: "Les cisailles s'usent-elles dans le distributeur ?", answer: "Oui, les cisailles ont 238 utilisations. Replacez-les dans le distributeur quand elles sont usées, ou empilez plusieurs cisailles dans le distributeur." }
      ],
      relatedSlugs: ["fer", "canne-a-sucre", "automatique", "poulet", "vache"]
    }
  },
  {
    slug: "poulet",
    keyword: "ferme a poulet minecraft",
    title: "Ferme à Poulet Minecraft : Guide",
    h1: "Comment Construire une Ferme à Poulet dans Minecraft",
    metaDescription: "Construisez une ferme à poulet automatique Minecraft. Poulet rôti et plumes en continu avec ce design simple et efficace.",
    category: "farms",
    volume: 170,
    content: {
      intro: "La ferme à poulet est l'une des premières fermes automatiques que tout joueur devrait construire. Elle produit du poulet cuit et des plumes sans intervention, fournissant une source de nourriture fiable dès le début de la partie.",
      sections: [
        { heading: "Design compact", content: "Placez un entonnoir au sol connecté à un coffre. Au-dessus de l'entonnoir, placez une dalle (demi-bloc). Au-dessus de la dalle, un espace de 1 bloc d'eau pour les poulets. Un distributeur au-dessus lance les œufs collectés par l'entonnoir. La lave au-dessus des bébés cuit les poulets adultes." },
        { heading: "Fonctionnement", content: "Les poules pondent des œufs qui tombent sur l'entonnoir, sont collectés et redistribués par le distributeur. Les œufs lancés ont 1/8 de chance de faire éclore un poussin. Les poussins grandissent et sont tués par la lave (les bébés sont assez petits pour survivre sous la dalle). Le poulet cuit tombe dans l'entonnoir." },
        { heading: "Mise à l'échelle", content: "Le design de base avec 20 poules produit assez de nourriture pour un joueur. Pour une production de masse, utilisez plusieurs modules ou agrandissez la chambre à poules. Ajoutez un système de redstone avec un horloge pour réguler le lancement des œufs et éviter la surpopulation." }
      ],
      tips: [
        "Les bébés poulets sont assez petits pour passer sous la dalle et survivre",
        "Limitez le nombre de poulets à 20-30 pour éviter les lags d'entité",
        "Les plumes sont utiles pour les flèches et les livres",
        "Cette ferme est idéale en début de partie pour la nourriture automatique"
      ],
      faq: [
        { question: "Pourquoi utiliser une dalle au lieu d'un bloc ?", answer: "La dalle crée un espace de demi-bloc où la lave ne descend pas mais les poulets adultes dépassent. Les bébés passent en dessous de la dalle et ne sont pas touchés par la lave." },
        { question: "Peut-on utiliser cette ferme pour les œufs uniquement ?", answer: "Oui, retirez simplement la lave. Les poules pondront des œufs qui seront collectés par l'entonnoir. Vous obtiendrez des stacks d'œufs pour le craft de gâteaux ou comme projectiles." }
      ],
      relatedSlugs: ["fer", "vache", "automatique", "laine", "canne-a-sucre"]
    }
  },
  {
    slug: "vache",
    keyword: "ferme a vache minecraft",
    title: "Ferme à Vache Minecraft : Guide",
    h1: "Comment Construire une Ferme à Vache dans Minecraft",
    metaDescription: "Construisez une ferme à vache Minecraft pour du cuir et du steak illimité. Design semi-automatique simple et efficace.",
    category: "farms",
    volume: 140,
    content: {
      intro: "Les vaches fournissent du cuir (essentiel pour les livres et l'armure), du steak (meilleure nourriture du jeu) et du lait. Une ferme semi-automatique permet de les élever et les récolter efficacement avec un minimum d'effort.",
      sections: [
        { heading: "Design de la ferme", content: "Construisez un enclos de 5x5 avec des clôtures. Attirez 2 vaches avec du blé. Nourrissez-les pour les faire se reproduire. Quand l'enclos est plein (20-30 vaches), tuez les adultes avec une épée enchantée Butin III. Gardez toujours 2 vaches pour la reproduction." },
        { heading: "Système semi-automatique", content: "Construisez un couloir étroit (1 bloc de large) avec de l'eau qui pousse les vaches vers un point de collecte. Placez de la lave à la fin du couloir pour les tuer et cuire le steak automatiquement. Un entonnoir collecte le steak cuit et le cuir. Gardez les reproducteurs dans un enclos séparé." },
        { heading: "Optimiser avec Butin III", content: "L'enchantement Butin III sur une épée augmente les drops de cuir de 0-2 à 0-5 par vache. C'est énorme pour la production de livres (qui nécessitent du cuir pour les bibliothèques). Le steak cuit restaure 8 points de faim, en faisant l'une des meilleures nourritures." }
      ],
      tips: [
        "Le steak cuit est l'une des meilleures nourritures du jeu (8 points de faim)",
        "Butin III augmente considérablement les drops de cuir",
        "Gardez toujours au moins 2 vaches pour la reproduction",
        "Le cuir est nécessaire pour les bibliothèques (livres + étagères)"
      ],
      faq: [
        { question: "Quelle est la meilleure nourriture dans Minecraft ?", answer: "Le steak cuit et le porc cuit sont les meilleures nourritures classiques (8 faim, 12.8 saturation). Les carottes dorées sont légèrement meilleures en saturation mais beaucoup plus coûteuses." },
        { question: "Peut-on automatiser complètement l'élevage de vaches ?", answer: "En vanilla, l'élevage nécessite de nourrir manuellement les vaches avec du blé. La mise à mort et la collecte peuvent être automatisées, mais la reproduction reste manuelle." }
      ],
      relatedSlugs: ["poulet", "fer", "automatique", "laine", "canne-a-sucre"]
    }
  },
  {
    slug: "canne-sucre-1-21",
    keyword: "ferme canne a sucre minecraft 1.21",
    title: "Ferme Canne à Sucre Minecraft 1.21",
    h1: "Ferme à Canne à Sucre Minecraft 1.21",
    metaDescription: "Ferme à canne à sucre optimisée pour Minecraft 1.21. Design à observateurs fonctionnel avec les dernières mécaniques du jeu.",
    category: "farms",
    volume: 170,
    content: {
      intro: "La ferme à canne à sucre reste un classique en 1.21. Le design à base d'observateurs et de pistons fonctionne parfaitement dans cette version. Voici un design optimisé qui exploite au mieux les mécaniques actuelles du jeu.",
      sections: [
        { heading: "Design 1.21 optimisé", content: "Le design n'a pas changé fondamentalement depuis la 1.15. Placez de la canne à sucre avec de l'eau adjacente. Un observateur détecte la croissance du 3e bloc. Un piston casse le bloc. Les items tombent dans l'eau et sont collectés par des entonnoirs. Ce design est 100% compatible 1.21." },
        { heading: "Layout double face", content: "Pour maximiser l'espace, placez les cannes des deux côtés d'un canal d'eau central. Les observateurs et pistons sont dos à dos. Cette configuration double la production par surface. Un entonnoir central sous le canal d'eau collecte tout." },
        { heading: "Production et rendement", content: "En 1.21, la vitesse de croissance de la canne à sucre n'a pas changé. Comptez environ 4.5 cannes par heure par plant. Une ferme de 64 plants (32 de chaque côté) produit environ 4.5 stacks par heure, suffisant pour la majorité des besoins en papier et fusées." }
      ],
      tips: [
        "Le design observateur/piston n'a pas changé en 1.21",
        "Placez les cannes des deux côtés du canal d'eau pour doubler la production",
        "64 plants suffisent pour la plupart des joueurs",
        "Vérifiez que les observateurs pointent vers la canne, pas vers le piston"
      ],
      faq: [
        { question: "Y a-t-il des changements en 1.21 pour les fermes de canne à sucre ?", answer: "Non, les mécaniques de croissance de la canne à sucre sont identiques. Les designs existants fonctionnent sans modification en 1.21." },
        { question: "Combien de papier cette ferme produit-elle ?", answer: "3 cannes à sucre = 3 papiers. Avec 64 plants produisant ~4.5 stacks/heure, vous obtenez environ 4.5 stacks de papier par heure, ce qui est plus que suffisant." }
      ],
      relatedSlugs: ["canne-a-sucre", "automatique", "fer", "xp-1-21", "four-auto-1-21"]
    }
  },
  {
    slug: "fer-bedrock",
    keyword: "ferme à fer minecraft 1.21 bedrock",
    title: "Ferme à Fer Minecraft 1.21 Bedrock",
    h1: "Ferme à Fer Minecraft 1.21 Bedrock",
    metaDescription: "Construisez une ferme à fer Minecraft Bedrock 1.21. Design adapté aux mécaniques spécifiques de l'édition Bedrock.",
    category: "farms",
    volume: 170,
    content: {
      intro: "Les fermes à fer en Bedrock Edition ont des mécaniques différentes de Java. Les golems de fer spawnt différemment et nécessitent plus de villageois. Ce guide vous montre un design optimisé spécifiquement pour Bedrock 1.21.",
      sections: [
        { heading: "Différences Java vs Bedrock", content: "En Bedrock, les golems de fer nécessitent 10 villageois minimum (contre 3 en Java) et 10 lits. Les villageois n'ont pas besoin d'être effrayés par un zombie mais doivent avoir travaillé et dormi récemment. Le taux de spawn est également plus bas qu'en Java." },
        { heading: "Design Bedrock", content: "Construisez une plateforme avec 10 pods de villageois, chacun avec un lit et un bloc de travail. Au centre, un espace de spawn de 16x16 blocs pour les golems. L'eau pousse les golems vers un point de collecte avec de la lave pour les tuer. Les lingots et coquelicots sont collectés par des entonnoirs." },
        { heading: "Optimisation Bedrock", content: "En Bedrock, placez les villageois aussi proche que possible du centre de spawn. Le rayon de détection des lits est plus petit. Assurez-vous que chaque villageois peut accéder à son lit (pathfinding). La production est d'environ 30-40 lingots/heure avec un design optimal." }
      ],
      tips: [
        "10 villageois minimum sont nécessaires en Bedrock (vs 3 en Java)",
        "Pas besoin de zombie pour effrayer les villageois en Bedrock",
        "Vérifiez le pathfinding des villageois vers leurs lits",
        "La production est naturellement plus basse qu'en Java"
      ],
      faq: [
        { question: "Pourquoi ma ferme Java ne fonctionne-t-elle pas en Bedrock ?", answer: "Les mécaniques de spawn des golems sont complètement différentes en Bedrock. Vous avez besoin de 10 villageois au lieu de 3, et le mécanisme de peur par zombie n'est pas nécessaire." },
        { question: "Peut-on empiler plusieurs modules en Bedrock ?", answer: "Oui, mais les modules doivent être espacés d'au moins 64 blocs verticalement pour que les villages soient considérés comme séparés en Bedrock." }
      ],
      relatedSlugs: ["fer", "automatique", "xp", "canne-sucre-1-21", "four-auto-1-21"]
    }
  },
  {
    slug: "guide-automatique",
    keyword: "ferme minecraft automatique",
    title: "Fermes Automatiques Minecraft : Guide Complet",
    h1: "Guide des Fermes Automatiques Minecraft",
    metaDescription: "Guide complet des fermes automatiques Minecraft. Classement par difficulté et utilité pour optimiser votre progression.",
    category: "farms",
    volume: 140,
    content: {
      intro: "Les fermes automatiques sont le cœur de l'efficacité dans Minecraft. Ce guide classe les meilleures fermes par ordre de priorité pour vous aider à décider quoi construire en premier selon votre progression dans le jeu.",
      sections: [
        { heading: "Priorité 1 : Nourriture et fer", content: "La ferme de culture (villageois fermier) et la ferme à fer (golems) sont les deux premières fermes à construire. La nourriture automatique élimine le besoin de farmer manuellement. Le fer automatique fournit les matériaux pour les seaux, rails, et chaînes dont vous aurez constamment besoin." },
        { heading: "Priorité 2 : XP et canne à sucre", content: "La ferme à XP (spawner ou Enderman) est cruciale pour les enchantements. La ferme à canne à sucre produit le papier nécessaire pour les livres, cartes et fusées d'élytra. Ces deux fermes accélèrent considérablement votre progression en milieu de partie." },
        { heading: "Priorité 3 : Laine, poulet et bois", content: "La ferme à laine (moutons automatiques), la ferme à poulet (œufs/poulet cuit) et la ferme de bambou/bois complètent votre infrastructure de base. Elles sont moins urgentes mais très pratiques pour la construction et l'alimentation." },
        { heading: "Priorité 4 : Projets avancés", content: "Le trieur automatique, la ferme de Gardiens, la ferme de Blazes et la ferme de Wither Squelettes sont des projets de fin de jeu. Ils demandent beaucoup de ressources mais offrent des rendements impressionnants et complètent votre infrastructure de farming." }
      ],
      tips: [
        "Construisez une ferme de nourriture et une ferme à fer en priorité",
        "La ferme à XP est nécessaire dès que vous avez accès à l'enchantement",
        "Le trieur automatique devient indispensable quand vous avez plusieurs fermes",
        "Regroupez vos fermes dans une zone pour faciliter la collecte"
      ],
      faq: [
        { question: "Par quelle ferme commencer en survie ?", answer: "Commencez par une ferme de blé automatique (villageois) pour la nourriture, puis une ferme à fer pour les lingots. Ensuite, construisez une ferme à XP quand vous accédez aux enchantements." },
        { question: "Combien de fermes faut-il pour être autonome ?", answer: "Avec 5-6 fermes de base (nourriture, fer, XP, canne à sucre, laine, poulet), vous êtes autonome pour la majorité des ressources. Les fermes avancées sont un bonus." }
      ],
      relatedSlugs: ["automatique", "fer", "xp", "canne-a-sucre", "trieur-automatique"]
    }
  },
  {
    slug: "xp-1-21",
    keyword: "ferme a xp minecraft 1.21",
    title: "Ferme XP Minecraft 1.21 : Guide",
    h1: "Ferme à XP dans Minecraft 1.21",
    metaDescription: "Les meilleures fermes à XP pour Minecraft 1.21. Designs actualisés et compatibles avec les dernières mécaniques du jeu.",
    category: "farms",
    volume: 170,
    content: {
      intro: "En Minecraft 1.21, les fermes à XP restent essentielles pour les enchantements et la réparation. Les nouvelles salle des épreuves offrent aussi une source d'XP intéressante. Voici les meilleurs designs actualisés pour cette version.",
      sections: [
        { heading: "Ferme d'Endermen (toujours la meilleure)", content: "La ferme d'Endermen dans l'End reste la plus efficace en 1.21. Le design classique avec une plateforme à 2 blocs de haut au-dessus du vide fonctionne parfaitement. Les Endermen spawnt en masse et donnent 5 XP chacun. Vous atteignez le niveau 30 en moins de 30 secondes." },
        { heading: "Ferme de spawner optimisée", content: "Les fermes de spawner (zombie/squelette) restent excellentes en début de partie. En 1.21, aucun changement n'affecte leur fonctionnement. Le design avec chute de 22 blocs + frappe manuelle est toujours le standard. Ajoutez un trident avec Channeling pour un kill automatique pendant les orages." },
        { heading: "Chambres des épreuves (nouveau en 1.21)", content: "Les chambres des épreuves sont une nouvelle source d'XP et de loot en 1.21. Les spawners d'épreuves génèrent des mobs ajustés au nombre de joueurs et donnent des récompenses uniques. Ce n'est pas une ferme automatique mais une excellente source d'XP en exploration." }
      ],
      tips: [
        "La ferme d'Endermen reste la meilleure option en 1.21",
        "Les chambres des épreuves offrent de l'XP et du loot exclusif",
        "Les spawners de donjon fonctionnent identiquement en 1.21",
        "Raccommodage + ferme à XP = outils éternels"
      ],
      faq: [
        { question: "Les fermes à XP ont-elles changé en 1.21 ?", answer: "Non, les mécaniques d'XP et de spawn sont identiques. Les designs existants fonctionnent sans modification. Les chambres des épreuves sont un ajout, pas un remplacement." },
        { question: "Les chambres des épreuves valent-elles le coup pour l'XP ?", answer: "Elles sont bonnes pour le loot exclusif (clés, armure) mais moins efficaces que les fermes dédiées pour l'XP pure. Considérez-les comme un bonus d'exploration." }
      ],
      relatedSlugs: ["xp", "fer", "automatique", "canne-sucre-1-21", "fer-bedrock"]
    }
  },
  {
    slug: "trieur-automatique",
    keyword: "trieur automatique minecraft",
    title: "Trieur Automatique Minecraft : Guide",
    h1: "Construire un Trieur Automatique dans Minecraft",
    metaDescription: "Construisez un trieur automatique Minecraft avec entonnoirs et comparateurs. Organisez vos items automatiquement dans des coffres.",
    category: "farms",
    volume: 170,
    content: {
      intro: "Le trieur automatique est un système Redstone qui trie vos items par type et les range dans des coffres dédiés. C'est un projet essentiel pour organiser la production de vos fermes automatiques et éviter le chaos dans votre stockage.",
      sections: [
        { heading: "Principe de fonctionnement", content: "Le trieur utilise des entonnoirs verrouillés par des comparateurs. Chaque module de tri contient un entonnoir avec l'item à trier (41 du bon item + 4 items de remplissage). Quand l'item correct arrive, le comparateur détecte le signal et déverrouille l'entonnoir qui transfère l'item vers le coffre désigné." },
        { heading: "Construction d'un module", content: "Chaque module nécessite : 1 entonnoir d'entrée (en haut), 1 entonnoir de tri, 1 comparateur, 1 répéteur, 2 torches de redstone et 1 entonnoir de sortie vers le coffre. Remplissez l'entonnoir de tri avec 41 exemplaires de l'item à trier et 4 items non-empilables (comme des pelles en bois renommées)." },
        { heading: "Connecter les modules", content: "Les modules se placent en série : l'entonnoir du haut transporte les items le long de la ligne. Chaque module vérifie si l'item correspond. Si oui, il est détourné vers le coffre. Si non, il continue vers le module suivant. À la fin, un coffre poubelle récupère les items non triés." },
        { heading: "Dimensionnement", content: "Prévoyez un module par type d'item à trier. Pour une base standard, 20-30 modules couvrent les items les plus courants (fer, or, diamant, charbon, redstone, bois, pierre, etc.). Le système est extensible : ajoutez des modules à la fin de la ligne pour de nouvelles catégories." }
      ],
      tips: [
        "Utilisez 41 items + 4 items de remplissage non-empilables dans chaque entonnoir",
        "Les items de remplissage doivent être uniques (renommés à l'enclume)",
        "Placez un coffre poubelle à la fin de la ligne pour les items non triés",
        "Testez chaque module individuellement avant de connecter la ligne complète"
      ],
      faq: [
        { question: "Pourquoi 41 items et 4 items de remplissage ?", answer: "Ce ratio maintient le signal du comparateur à 1, ce qui est le seuil exact pour le tri. Quand un item supplémentaire entre, le signal passe à 2 et déverrouille l'entonnoir de sortie. Les 4 items de remplissage empêchent l'entonnoir de se vider complètement." },
        { question: "Le trieur peut-il trier les items non-empilables ?", answer: "Non, les items non-empilables (outils, armures, potions) ne peuvent pas être triés avec le design standard. Des designs spéciaux avec allay ou systèmes alternatifs sont nécessaires." }
      ],
      relatedSlugs: ["automatique", "fer", "guide-automatique", "canne-a-sucre", "xp"]
    }
  },
  {
    slug: "four-auto-1-21",
    keyword: "four automatique minecraft 1.21",
    title: "Four Automatique Minecraft 1.21 : Guide",
    h1: "Four Automatique dans Minecraft 1.21",
    metaDescription: "Construisez un four automatique Minecraft 1.21. Système d'alimentation et de collecte automatique avec entonnoirs et coffres.",
    category: "farms",
    volume: 140,
    content: {
      intro: "Le four automatique est un système simple mais indispensable qui cuit vos items en continu sans intervention. En combinant des entonnoirs et des coffres, vous créez un système de cuisson qui se nourrit automatiquement en items et en combustible.",
      sections: [
        { heading: "Design de base", content: "Placez un four au centre. Un entonnoir au-dessus alimente en items à cuire, connecté à un coffre d'entrée. Un entonnoir sur le côté alimente en combustible, connecté à un coffre de combustible. Un entonnoir en dessous collecte les items cuits vers un coffre de sortie. C'est tout !" },
        { heading: "Système multi-fours", content: "Un seul four est lent (1 item toutes les 10 secondes). Pour accélérer, placez plusieurs fours en parallèle avec un système d'entonnoirs qui distribue les items. 8 fours en parallèle cuisent 8 items simultanément, soit 48 items par minute. Utilisez un super smelter de 16 fours pour une production maximale." },
        { heading: "Choix du combustible", content: "Le seau de lave (100 items) est le plus efficace mais non-empilable. Le bloc de charbon (80 items) est le meilleur combustible empilable. Le bambou séché (1.5 items) est facilement automatisable. En fin de partie, les seaux de lave du Nether via une ferme de basalte sont idéaux." }
      ],
      tips: [
        "8 fours en parallèle sont le sweet spot pour la plupart des joueurs",
        "Le bloc de charbon est le meilleur combustible empilable (80 items)",
        "Les hauts fourneaux cuisent 2x plus vite mais uniquement les minerais",
        "Le fumoir cuit la nourriture 2x plus vite que le four classique"
      ],
      faq: [
        { question: "Haut fourneau ou four classique ?", answer: "Le haut fourneau cuit les minerais 2x plus vite mais ne cuit pas la nourriture ni les blocs. Le four classique est polyvalent. Idéalement, utilisez les deux dans votre système automatique." },
        { question: "Combien de fours pour un super smelter ?", answer: "16 fours est le standard pour un super smelter efficace, cuisinant 96 items par minute. Au-delà, les entonnoirs ne suivent plus la distribution et deviennent le goulot d'étranglement." }
      ],
      relatedSlugs: ["automatique", "trieur-automatique", "fer", "canne-sucre-1-21", "guide-automatique"]
    }
  }
];
