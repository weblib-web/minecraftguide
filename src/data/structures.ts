import type { PageData } from "./types";

export const structuresPages: PageData[] = [
  {
    slug: "portail-end",
    keyword: "portail de l end minecraft",
    title: "Portail de l'End Minecraft : Guide Complet",
    h1: "Le Portail de l'End dans Minecraft",
    metaDescription: "Trouvez et activez le portail de l'End dans Minecraft. Localisation de la forteresse, yeux d'Ender et accès à l'Ender Dragon.",
    category: "structures",
    volume: 480,
    content: {
      intro: "Le portail de l'End est la seule façon d'accéder à la dimension de l'End et d'affronter l'Ender Dragon dans Minecraft. Situé au cœur d'une forteresse souterraine, le trouver et l'activer est une étape majeure de la progression. Voici le guide complet.",
      sections: [
        { heading: "Fabriquer des yeux d'Ender", content: "Les yeux d'Ender sont essentiels pour localiser et activer le portail. Craftez-les en combinant une perle d'Ender (drop d'Enderman) et de la poudre de Blaze (bâton de Blaze crafté). Préparez au moins 12 yeux d'Ender : jusqu'à 12 pour compléter le portail, plus quelques-uns pour la localisation." },
        { heading: "Localiser la forteresse", content: "Lancez un œil d'Ender en l'air : il volera dans la direction de la forteresse la plus proche, puis retombera (avec une chance de se casser). Avancez dans cette direction et relancez régulièrement. Quand l'œil commence à descendre vers le sol, la forteresse est directement en dessous. Creusez pour la trouver." },
        { heading: "Trouver la salle du portail", content: "La forteresse est un labyrinthe de couloirs en pierre taillée avec des bibliothèques, des spawners de poissons d'argent et des coffres. La salle du portail contient le cadre en 12 blocs au-dessus d'un bassin de lave avec un spawner de poissons d'argent. Certains cadres ont déjà un œil d'Ender." },
        { heading: "Activer le portail", content: "Placez un œil d'Ender dans chaque cadre vide du portail (clic droit). Le portail s'active quand les 12 cadres sont remplis, créant un vortex étoilé noir. Attention : l'entrée dans le portail est un aller sans retour immédiat vers l'End. Préparez-vous avant de sauter." },
        { heading: "Préparation pour l'End", content: "Avant de sauter, équipez une armure enchantée complète, un arc avec des flèches, des potions de soin et de régénération, des blocs pour grimper et un seau d'eau. L'End est une plateforme flottante au-dessus du vide. Un citrouille sculptée sur la tête empêche les Endermen de devenir hostiles." }
      ],
      tips: [
        "Préparez au moins 15 yeux d'Ender pour avoir de la marge",
        "Les forteresses se trouvent généralement entre 600 et 1200 blocs du spawn",
        "Certains cadres du portail sont pré-remplis, économisant des yeux d'Ender",
        "Emportez un lit dans l'End pour fixer votre point de respawn à proximité"
      ],
      faq: [
        { question: "Peut-on construire un portail de l'End ?", answer: "Non, contrairement au portail du Nether, le portail de l'End ne peut pas être construit par le joueur. Vous devez trouver celui qui existe dans une forteresse. Les cadres de portail ne sont pas disponibles en survie." },
        { question: "Combien de forteresses y a-t-il par monde ?", answer: "En Java Edition, il y a 128 forteresses par monde, réparties en anneaux autour du point de spawn. Le premier anneau contient 3 forteresses entre 1408 et 2688 blocs du centre." }
      ],
      relatedSlugs: ["portail-nether", "forteresse-nether", "donjon", "carte-tresor", "village"]
    }
  },
  {
    slug: "portail-nether",
    keyword: "portail nether minecraft",
    title: "Portail du Nether Minecraft : Guide",
    h1: "Le Portail du Nether dans Minecraft",
    metaDescription: "Construisez un portail du Nether dans Minecraft. Dimensions, obsidienne nécessaire et astuces pour le Nether dans ce guide.",
    category: "structures",
    volume: 320,
    content: {
      intro: "Le portail du Nether est votre porte d'accès vers la dimension infernale de Minecraft. Construit en obsidienne et activé par le feu, il vous transporte dans le Nether où vous trouverez des ressources uniques et des dangers mortels. Voici comment le construire.",
      sections: [
        { heading: "Construire le portail", content: "Le portail minimum nécessite 10 blocs d'obsidienne disposés en rectangle de 4 blocs de large sur 5 de haut (sans les coins). La taille maximale est de 23x23 blocs. L'obsidienne se mine avec une pioche en diamant ou Netherite et se forme quand de l'eau coule sur de la lave source." },
        { heading: "Activer le portail", content: "Allumez un feu à l'intérieur du cadre en obsidienne avec un briquet (fer + silex). Le portail s'active en créant un effet violet tourbillonnant. Restez dans le portail pendant 4 secondes pour être téléporté. En cas d'urgence, vous pouvez aussi utiliser une boule de feu ou la foudre." },
        { heading: "Astuce sans pioche en diamant", content: "Vous pouvez créer un portail sans miner d'obsidienne en utilisant la technique du moule à eau et lave. Construisez un moule avec des blocs quelconques, versez de l'eau à côté de la lave source pour former l'obsidienne directement en forme de portail. Cette technique est très utilisée en speedrun." },
        { heading: "Correspondance Overworld-Nether", content: "Les coordonnées du Nether sont divisées par 8 par rapport à l'Overworld. Un bloc dans le Nether correspond à 8 blocs dans l'Overworld. Utilisez cette propriété pour créer des routes dans le Nether et voyager 8 fois plus vite entre des bases éloignées." }
      ],
      tips: [
        "1 bloc dans le Nether = 8 blocs dans l'Overworld pour le voyage rapide",
        "Un portail minimum ne nécessite que 10 obsidiennes (sans les coins)",
        "Construisez un abri autour de votre portail côté Nether pour la sécurité",
        "Emportez toujours un briquet de rechange en cas de Ghast qui détruit le portail"
      ],
      faq: [
        { question: "Les mobs peuvent-ils traverser le portail ?", answer: "Oui, la plupart des mobs peuvent traverser les portails du Nether. Les zombified piglins et autres mobs du Nether peuvent apparaître du côté Overworld si le portail reste actif longtemps." },
        { question: "Peut-on avoir plusieurs portails du Nether ?", answer: "Oui, vous pouvez construire autant de portails que vous le souhaitez. Chaque portail créera un portail correspondant dans l'autre dimension, basé sur les coordonnées divisées par 8." }
      ],
      relatedSlugs: ["portail-end", "forteresse-nether", "donjon", "village", "carte-tresor"]
    }
  },
  {
    slug: "forteresse-nether",
    keyword: "forteresse du nether minecraft",
    title: "Forteresse du Nether Minecraft : Guide",
    h1: "La Forteresse du Nether dans Minecraft",
    metaDescription: "Explorez la forteresse du Nether Minecraft. Localisation, Blazes, verrues du Nether et butin dans ce guide de survie complet.",
    category: "structures",
    volume: 140,
    content: {
      intro: "La forteresse du Nether est une structure massive en briques du Nether, essentielle pour la progression car elle contient les Blazes et les verrues du Nether. Sans ces ressources, impossible de brasser des potions ou d'activer le portail de l'End.",
      sections: [
        { heading: "Localiser une forteresse", content: "Les forteresses du Nether se génèrent le long de l'axe nord-sud dans le Nether, souvent entre les coordonnées Z positives. Voyagez vers le nord ou le sud en restant à une altitude moyenne (Y=50-70). Elles sont repérables de loin grâce à leurs ponts et tours en briques sombres." },
        { heading: "Ressources à collecter", content: "Les Blazes apparaissent aux spawners de Blazes sur les plateformes de la forteresse. Tuez-les pour obtenir des bâtons de Blaze (poudre de Blaze + yeux d'Ender). Les verrues du Nether poussent dans des jardins intérieurs sur du soul sand. Récoltez-en beaucoup pour le brassage de potions." },
        { heading: "Coffres et butin", content: "Les coffres de la forteresse contiennent des lingots d'or, des armures en or, des selles, des pépites de fer et parfois des diamants. Les couloirs contiennent aussi des spawners de wither squelettes, qui lâchent du charbon, des os et rarement des crânes de wither squelette pour invoquer le Wither." },
        { heading: "Stratégie de combat", content: "Les Blazes sont les mobs les plus dangereux de la forteresse. Ils lancent des boules de feu en rafale et volent. Utilisez des boules de neige (3 dégâts aux Blazes) ou combattez-les en mêlée avec une potion de résistance au feu. Les wither squelettes appliquent l'effet Wither qui draine vos PV." }
      ],
      tips: [
        "Les boules de neige infligent 3 dégâts aux Blazes, emportez-en beaucoup",
        "Plantez des verrues du Nether sur du soul sand pour une source infinie",
        "Les wither squelettes ne spawnt que dans les forteresses du Nether",
        "Bloquez les spawners de Blaze avec des dalles pour contrôler les spawns"
      ],
      faq: [
        { question: "Comment trouver une forteresse rapidement ?", answer: "Voyagez le long de l'axe Z (nord-sud) au niveau Y=50-70. Les forteresses se génèrent en bandes sur cet axe. En créatif, utilisez /locate structure fortress." },
        { question: "Combien de bâtons de Blaze faut-il ?", answer: "Prévoyez au minimum 7 bâtons de Blaze : 1 pour l'alambic et 6 pour les yeux d'Ender. Idéalement, récoltez-en 12-15 pour avoir de la marge pour le brassage." }
      ],
      relatedSlugs: ["portail-nether", "portail-end", "donjon", "carte-tresor", "village"]
    }
  },
  {
    slug: "carte-tresor",
    keyword: "carte au trésor minecraft",
    title: "Carte au Trésor Minecraft : Guide",
    h1: "La Carte au Trésor dans Minecraft",
    metaDescription: "Trouvez et utilisez les cartes au trésor Minecraft. Localisation, lecture de la carte et butin des coffres enfouis.",
    category: "structures",
    volume: 480,
    content: {
      intro: "Les cartes au trésor sont des objets spéciaux dans Minecraft qui mènent à des coffres enfouis sur les plages. Elles contiennent un X rouge marquant l'emplacement exact du trésor, incluant souvent un cœur de la mer. Voici comment les trouver et les utiliser.",
      sections: [
        { heading: "Où trouver des cartes au trésor", content: "Les cartes au trésor se trouvent dans les coffres des épaves de navires et des ruines sous-marines. Les épaves sont des bateaux naufragés visibles près des côtes ou au fond de l'océan. Les ruines sous-marines se trouvent au fond des océans. Nagez avec les dauphins qui peuvent vous guider vers ces structures." },
        { heading: "Lire la carte", content: "La carte montre un X rouge qui marque le trésor. Votre position est indiquée par un point blanc qui se déplace en temps réel. Marchez dans la direction qui rapproche votre point du X. Quand votre indicateur est pile sur le X, creusez vers le bas pour trouver le coffre enfoui." },
        { heading: "Le coffre enfoui", content: "Le coffre est généralement enterré sous 1-3 blocs de sable ou de gravier sur une plage. Il contient des lingots de fer, d'or, des émeraudes, des diamants, de la nourriture et surtout le cœur de la mer. Le cœur de la mer est nécessaire pour construire un conduit, un bloc très puissant pour l'exploration sous-marine." },
        { heading: "Construire un conduit", content: "Le cœur de la mer se combine avec 8 coquilles de nautile sur la table de craft pour créer un conduit. Placé dans un cadre de prismarine sous l'eau, le conduit octroie la respiration aquatique, la vision nocturne et le minage rapide dans un large rayon. C'est le meilleur outil pour une base sous-marine." }
      ],
      tips: [
        "Les dauphins nourris avec du poisson cru vous guident vers les trésors",
        "Creusez au centre exact du X sur la carte pour trouver le coffre",
        "Chaque épave contient jusqu'à 3 coffres avec différents butins",
        "Le cœur de la mer ne se trouve que dans les coffres enfouis"
      ],
      faq: [
        { question: "Le trésor est-il toujours sous le sable ?", answer: "Le coffre est généralement enfoui sous du sable ou du gravier sur une plage, mais il peut parfois se retrouver sous de la pierre ou dans l'eau à cause de la génération du terrain." },
        { question: "Peut-on trouver plusieurs cœurs de la mer ?", answer: "Oui, chaque coffre enfoui contient un cœur de la mer. Trouvez plusieurs cartes au trésor pour obtenir des cœurs supplémentaires, mais un seul conduit suffit." }
      ],
      relatedSlugs: ["portail-end", "village", "donjon", "monument", "ruine-sentier"]
    }
  },
  {
    slug: "ruine-sentier",
    keyword: "ruine de sentier minecraft",
    title: "Ruines de Sentier Minecraft : Guide",
    h1: "Les Ruines de Sentier dans Minecraft",
    metaDescription: "Découvrez les ruines de sentier Minecraft ajoutées en 1.20. Localisation, tessons de poterie et archéologie dans ce guide.",
    category: "structures",
    volume: 210,
    content: {
      intro: "Les ruines de sentier sont des structures introduites avec le système d'archéologie de Minecraft 1.20. Ces petites structures partiellement enterrées contiennent du sable suspect que vous pouvez brosser pour découvrir des tessons de poterie et d'autres objets rares.",
      sections: [
        { heading: "Localisation des ruines", content: "Les ruines de sentier se génèrent dans les déserts, les jungles et les biomes de savane. Elles sont partiellement enfouies dans le sol et ressemblent à des chemins de terre cuite en ruine. Cherchez des blocs de terre cuite colorés partiellement visibles au sol." },
        { heading: "Le système d'archéologie", content: "Utilisez un pinceau (brosse) sur les blocs de sable suspect ou de gravier suspect trouvés dans les ruines. Le brossage est lent et révèle progressivement un objet caché. Si vous cassez le bloc au lieu de le brosser, l'objet est détruit. Soyez patient et prudent." },
        { heading: "Tessons de poterie", content: "Les tessons de poterie sont les objets les plus intéressants des ruines. Quatre tessons peuvent être combinés sur la table de craft pour créer un pot décoré unique. Chaque tesson a un motif différent, permettant de créer des combinaisons personnalisées pour la décoration." },
        { heading: "Autres butins", content: "En plus des tessons, le sable suspect peut contenir des teintures, des émeraudes, des graines de blé, des bougies et d'autres petits objets. Les ruines de sentier du désert contiennent des tessons différents de ceux des jungles, encourageant l'exploration de tous les biomes." }
      ],
      tips: [
        "Craftez un pinceau avec une plume, un bâton et un fil de cuivre",
        "Ne cassez jamais le sable suspect directement, vous perdrez l'objet",
        "Chaque biome a des tessons de poterie exclusifs",
        "Les pots décorés sont purement décoratifs mais très esthétiques"
      ],
      faq: [
        { question: "Combien de tessons différents existe-t-il ?", answer: "Il existe 20 tessons de poterie différents, chacun avec un motif unique. Ils sont répartis dans différentes structures archéologiques à travers le monde." },
        { question: "Le pinceau s'use-t-il ?", answer: "Oui, le pinceau a une durabilité limitée de 64 utilisations. Emportez plusieurs pinceaux si vous prévoyez de fouiller une grande zone archéologique." }
      ],
      relatedSlugs: ["village", "donjon", "carte-tresor", "monument", "poste-douane"]
    }
  },
  {
    slug: "poste-douane",
    keyword: "post de douane minecraft",
    title: "Poste de Douane Minecraft : Guide",
    h1: "Le Poste de Douane dans Minecraft",
    metaDescription: "Tout savoir sur le poste de douane (avant-poste de pillards) Minecraft. Localisation, raid et butin dans ce guide complet.",
    category: "structures",
    volume: 590,
    content: {
      intro: "Le poste de douane, ou avant-poste de pillards, est une tour hostile dans Minecraft qui abrite des pillards armés d'arbalètes. Vaincre le capitaine des pillards déclenche l'effet Mauvais Présage, permettant de lancer un raid sur un village. C'est une structure importante du gameplay.",
      sections: [
        { heading: "Localiser un avant-poste", content: "Les avant-postes de pillards se génèrent dans les plaines, les déserts, les savanes, les taigas et les biomes enneigés. Ils sont repérables de loin grâce à leur grande tour en bois sombre avec une bannière de pillard au sommet. Ils apparaissent souvent près des villages." },
        { heading: "Structure et mobs", content: "L'avant-poste est composé d'une tour principale de plusieurs étages avec un coffre au sommet. Des structures secondaires (tentes, cages) entourent la tour. Les pillards respawnt continuellement autour de la structure. Le capitaine porte une bannière sur la tête et a un indicateur spécial." },
        { heading: "Déclencher un raid", content: "En tuant le capitaine des pillards (celui avec la bannière), vous obtenez l'effet Mauvais Présage. Si vous entrez dans un village avec cet effet, un raid commence : des vagues de pillards, ravageurs, évocateurs et sorcières attaquent le village. Buvez du lait pour annuler l'effet." },
        { heading: "Récompenses des raids", content: "En repoussant toutes les vagues du raid, les villageois vous récompensent avec l'effet Héros du Village, qui offre des réductions importantes sur les échanges. Les mobs du raid lâchent aussi des émeraudes, des arbalètes et des totems d'immortalité (des évocateurs)." }
      ],
      tips: [
        "Buvez du lait pour annuler le Mauvais Présage si vous ne voulez pas de raid",
        "Le capitaine respawne, vous pouvez obtenir le Mauvais Présage plusieurs fois",
        "Les cages autour de l'avant-poste contiennent parfois des golems de fer prisonniers",
        "L'effet Héros du Village dure 40 minutes et offre de grosses réductions"
      ],
      faq: [
        { question: "Les pillards respawnt-ils à l'avant-poste ?", answer: "Oui, les pillards continuent de spawner autour de l'avant-poste indéfiniment. Vous ne pouvez pas vider la structure définitivement sans placer des torches ou des dalles partout." },
        { question: "Combien de vagues y a-t-il dans un raid ?", answer: "En difficulté Normale, un raid comporte 5 vagues. En Difficile, il y en a 7 avec des mobs plus nombreux et plus dangereux à chaque vague." }
      ],
      relatedSlugs: ["village", "donjon", "carte-tresor", "portail-nether", "monument"]
    }
  },
  {
    slug: "donjon",
    keyword: "donjon dans minecraft",
    title: "Donjon Minecraft : Guide Complet",
    h1: "Les Donjons dans Minecraft",
    metaDescription: "Trouvez et exploitez les donjons Minecraft. Spawners de mobs, coffres et comment créer une ferme à XP avec un donjon.",
    category: "structures",
    volume: 320,
    content: {
      intro: "Les donjons sont de petites structures souterraines dans Minecraft contenant un spawner de mobs et jusqu'à deux coffres. Bien qu'ils soient petits, ils sont extrêmement utiles pour créer des fermes à XP automatiques. Voici comment les trouver et les exploiter.",
      sections: [
        { heading: "Trouver un donjon", content: "Les donjons se génèrent aléatoirement sous terre à n'importe quelle altitude. Ils sont en roche et pavé mousse, avec un spawner au centre. Écoutez les sons de mobs (zombies, squelettes, araignées) en explorant des grottes. Les spawners émettent aussi des particules de flamme visibles." },
        { heading: "Types de spawners", content: "Les donjons contiennent un des trois types de spawners : zombie (50%), squelette (25%) ou araignée (25%). Les spawners de squelettes sont les plus prisés car les squelettes lâchent des os (poudre d'os) et des flèches. Les spawners de zombies sont utiles pour les fermes à XP." },
        { heading: "Butin des coffres", content: "Les coffres des donjons contiennent de la nourriture, des selles, des disques de musique, des lingots de fer, des pommes dorées et des graines enchantées. Le butin est aléatoire mais souvent intéressant en début de partie. On y trouve parfois des pommes dorées enchantées très rares." },
        { heading: "Créer une ferme à XP", content: "Le spawner est un outil puissant pour l'XP. Creusez un canal d'eau qui pousse les mobs vers un point de collecte, avec une chute de 22 blocs pour les laisser à demi-cœur. Ensuite, frappez-les une fois pour les tuer et récolter l'XP. Le spawner active quand un joueur est à moins de 16 blocs." }
      ],
      tips: [
        "Éclairez d'abord le donjon avec des torches avant de fouiller les coffres",
        "Ne détruisez jamais un spawner, c'est irremplaçable pour les fermes à XP",
        "Le spawner ne fonctionne que si un joueur est à moins de 16 blocs",
        "Les spawners de squelettes sont les meilleurs pour le farming d'os et flèches"
      ],
      faq: [
        { question: "Peut-on déplacer un spawner ?", answer: "Non, les spawners ne peuvent pas être déplacés ni récoltés avec Toucher de Soie. Vous devez construire votre ferme autour du spawner à son emplacement d'origine." },
        { question: "Comment empêcher un spawner de fonctionner ?", answer: "Placez des torches autour du spawner pour que le niveau de lumière dépasse 7. Les mobs ne pourront plus apparaître. Retirez les torches pour réactiver le spawner." }
      ],
      relatedSlugs: ["village", "carte-tresor", "portail-end", "monument", "forteresse-nether"]
    }
  },
  {
    slug: "village",
    keyword: "village dans minecraft",
    title: "Village Minecraft : Guide Complet",
    h1: "Les Villages dans Minecraft",
    metaDescription: "Tout savoir sur les villages Minecraft. Villageois, échanges, métiers et comment protéger votre village des raids et zombies.",
    category: "structures",
    volume: 590,
    content: {
      intro: "Les villages sont parmi les structures les plus importantes de Minecraft. Ils abritent des villageois avec des métiers variés qui proposent des échanges commerciaux, des cultures, des forges et bien d'autres ressources. Protéger et développer un village est un aspect majeur du gameplay.",
      sections: [
        { heading: "Types de villages", content: "Les villages varient selon le biome : plaines (bois de chêne), désert (grès), taiga (bois de sapin), savane (acacia) et neige (bois de sapin et neige). Chaque type a une architecture unique. Ils contiennent des maisons, des fermes, une forge, un puits et parfois une bibliothèque ou un temple." },
        { heading: "Les villageois et leurs métiers", content: "Chaque villageois peut avoir un métier lié à un bloc de travail : fermier (composteur), bibliothécaire (pupitre), forgeron d'armes (meule), armurier (haut fourneau), etc. Un villageois sans métier prendra le métier du bloc de travail le plus proche. Cassez et replacez le bloc pour changer son métier." },
        { heading: "Système d'échange", content: "Les villageois proposent des échanges en émeraudes. Plus vous échangez, plus le villageois monte en niveau (novice, apprenti, compagnon, expert, maître), débloquant de meilleurs échanges. Les bibliothécaires peuvent vendre n'importe quel livre enchanté, ce qui en fait les villageois les plus utiles." },
        { heading: "Protéger le village", content: "Les villages sont attaqués par les zombies la nuit et les raids de pillards. Éclairez tout le village avec des torches, construisez un mur d'enceinte et placez des golems de fer (4 blocs de fer + citrouille). Ajoutez des portes en fer avec des boutons pour empêcher les zombies d'entrer dans les maisons." },
        { heading: "Agrandir le village", content: "Pour ajouter des villageois, construisez plus de maisons avec des lits et assurez-vous qu'ils ont de la nourriture. Les villageois se reproduisent quand ils ont assez de lits et de nourriture. Lancez-leur du pain, des carottes ou des pommes de terre pour déclencher la reproduction." }
      ],
      tips: [
        "Les bibliothécaires sont les meilleurs villageois pour les livres enchantés",
        "Guérissez des villageois zombies pour obtenir des réductions permanentes",
        "Placez des lits et des blocs de travail pour créer de nouveaux villageois métiers",
        "Un golem de fer protège le village contre les mobs hostiles",
        "N'oubliez pas d'éclairer le village pour empêcher les spawns de mobs"
      ],
      faq: [
        { question: "Comment trouver un village ?", answer: "Les villages se trouvent dans les plaines, déserts, taïgas, savanes et toundras enneigées. Utilisez /locate structure village pour le trouver en commande, ou explorez ces biomes." },
        { question: "Comment empêcher les zombies d'attaquer le village ?", answer: "Éclairez entièrement le village avec des torches, construisez un mur, remplacez les portes en bois par des portes en fer et placez des golems de fer pour patrouiller." }
      ],
      relatedSlugs: ["poste-douane", "carte-tresor", "donjon", "monument", "portail-nether"]
    }
  },
  {
    slug: "monument",
    keyword: "monument in minecraft",
    title: "Monument Sous-Marin Minecraft : Guide",
    h1: "Le Monument Sous-Marin dans Minecraft",
    metaDescription: "Explorez le monument sous-marin Minecraft. Gardiens, éponges, prismarine et stratégies pour conquérir cette structure dangereuse.",
    category: "structures",
    volume: 210,
    content: {
      intro: "Le monument sous-marin est l'une des structures les plus imposantes et dangereuses de Minecraft. Gardé par des Gardiens et des Grands Gardiens, il contient de la prismarine, des éponges et de l'or. Le conquérir est un véritable défi qui demande une bonne préparation.",
      sections: [
        { heading: "Localiser un monument", content: "Les monuments se génèrent dans les biomes d'océan profond. Ils sont repérables grâce à leur taille imposante et la couleur bleu-vert de la prismarine. Utilisez une carte d'exploration océanique (achetée à un villageois cartographe) pour localiser le monument le plus proche." },
        { heading: "Les Gardiens et Grands Gardiens", content: "Les Gardiens sont des mobs aquatiques hostiles qui attaquent avec un rayon laser. Les 3 Grands Gardiens sont des boss qui infligent l'effet Fatigue de Minage III, empêchant de casser les blocs. Il faut tuer les 3 Grands Gardiens pour lever la malédiction. Buvez du lait pour temporairement annuler l'effet." },
        { heading: "Stratégie de conquête", content: "Préparez des potions de respiration aquatique prolongées, de la nourriture et une armure enchantée. L'enchantement Empalement sur un trident est très efficace contre les Gardiens. Entrez par le toit et progressez systématiquement pour trouver et éliminer les 3 Grands Gardiens, situés dans des salles spécifiques." },
        { heading: "Butin et ressources", content: "Le monument contient de la prismarine (blocs de construction uniques), des lanternes de mer (éclairage sous-marin), de l'or dans une salle secrète et des éponges dans la salle des éponges. Les éponges sont très utiles pour absorber l'eau et construire des bases sous-marines." }
      ],
      tips: [
        "Tuez les 3 Grands Gardiens en priorité pour supprimer la Fatigue de Minage",
        "L'enchantement Empalement est dévastateur contre les mobs aquatiques",
        "Un conduit activé dans le monument facilite grandement l'exploration",
        "Les éponges séchées au four peuvent être réutilisées pour absorber l'eau"
      ],
      faq: [
        { question: "Combien de Grands Gardiens y a-t-il ?", answer: "Chaque monument contient exactement 3 Grands Gardiens. Ils ne respawnt pas une fois tués, contrairement aux Gardiens normaux qui continuent d'apparaître." },
        { question: "Où se trouve l'or dans le monument ?", answer: "L'or est dans une salle secrète au centre du monument, derrière des blocs de prismarine sombre. Il y a 8 blocs d'or empilés, soit 72 lingots d'or au total." }
      ],
      relatedSlugs: ["village", "donjon", "carte-tresor", "portail-end", "forteresse-nether"]
    }
  }
];
