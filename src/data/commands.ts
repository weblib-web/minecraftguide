import type { PageData } from "./types";

export const commandsPages: PageData[] = [
  {
    slug: "guide-commandes",
    keyword: "commande dans minecraft",
    title: "Commandes Minecraft : Guide Complet",
    h1: "Toutes les Commandes dans Minecraft",
    metaDescription: "Guide complet des commandes Minecraft. Téléportation, mode de jeu, météo, inventaire et toutes les commandes essentielles.",
    category: "commands",
    volume: 1300,
    content: {
      intro: "Les commandes Minecraft sont des instructions tapées dans le chat qui modifient le jeu. Elles permettent de se téléporter, changer le mode de jeu, modifier la météo et bien plus. Elles nécessitent les cheats activés ou les droits opérateur sur un serveur.",
      sections: [
        { heading: "Commandes de base", content: "/gamemode creative (mode créatif), /gamemode survival (survie), /tp @p x y z (téléportation), /give @p item quantité (donner un objet), /time set day (mettre le jour), /weather clear (temps clair). Ce sont les commandes les plus utilisées au quotidien." },
        { heading: "Commandes de gestion", content: "/gamerule keepInventory true (garder inventaire à la mort), /gamerule doDaylightCycle false (arrêter le cycle jour/nuit), /difficulty peaceful (difficulté paisible), /kill @e[type=!player] (tuer tous les mobs). Ces commandes modifient les règles du jeu." },
        { heading: "Commandes avancées", content: "/fill x1 y1 z1 x2 y2 z2 block (remplir une zone), /clone x1 y1 z1 x2 y2 z2 x3 y3 z3 (copier une structure), /summon entity x y z (invoquer une entité), /effect give @p effect duration amplifier (donner un effet). Ces commandes sont puissantes pour la construction et le test." },
        { heading: "Sélecteurs de cibles", content: "@p (joueur le plus proche), @a (tous les joueurs), @r (joueur aléatoire), @e (toutes les entités), @s (l'exécuteur). Les sélecteurs acceptent des filtres : @e[type=zombie,distance=..10] cible les zombies à 10 blocs maximum." }
      ],
      tips: [
        "Activez les cheats lors de la création du monde ou via /publish en LAN",
        "Utilisez Tab pour l'auto-complétion des commandes",
        "Les coordonnées relatives ~ ~ ~ utilisent votre position actuelle",
        "La commande /gamerule keepInventory true sauve beaucoup de frustration"
      ],
      faq: [
        { question: "Comment activer les commandes en survie ?", answer: "Lors de la création du monde, activez 'Autoriser les commandes'. En partie existante, ouvrez au LAN avec /publish et activez les cheats. Sur serveur, demandez les droits opérateur." },
        { question: "Les commandes désactivent-elles les succès ?", answer: "En Java, les succès (advancements) ne sont pas affectés. En Bedrock, activer les cheats désactive les succès (achievements) pour ce monde de manière permanente." }
      ],
      relatedSlugs: ["tp", "jour", "garder-inventaire", "codes-triche", "liste-commandes"]
    }
  },
  {
    slug: "tp",
    keyword: "commande tp minecraft",
    title: "Commande TP Minecraft : Téléportation",
    h1: "Commande /tp dans Minecraft",
    metaDescription: "Maîtrisez la commande /tp Minecraft pour vous téléporter. Syntaxe, coordonnées et téléportation vers d'autres joueurs.",
    category: "commands",
    volume: 590,
    content: {
      intro: "La commande /tp (teleport) est l'une des commandes les plus utilisées dans Minecraft. Elle permet de se téléporter instantanément à des coordonnées précises ou vers un autre joueur. Indispensable pour les créateurs et les administrateurs de serveurs.",
      sections: [
        { heading: "Syntaxe de base", content: "/tp x y z vous téléporte aux coordonnées spécifiées. /tp joueur vous téléporte vers un autre joueur. /tp joueur1 joueur2 téléporte joueur1 vers joueur2. Les coordonnées peuvent être absolues (100 64 200) ou relatives (~ ~10 ~ pour 10 blocs au-dessus)." },
        { heading: "Coordonnées relatives", content: "Le symbole ~ représente votre position actuelle. ~5 signifie 5 blocs dans la direction positive. ~-5 signifie 5 blocs dans la direction négative. /tp ~ ~100 ~ vous téléporte 100 blocs au-dessus de votre position actuelle. C'est très utile pour les ajustements." },
        { heading: "Téléportation avec rotation", content: "/tp @s x y z yaw pitch permet de spécifier la direction du regard après la téléportation. Yaw est la rotation horizontale (0=sud, 90=ouest, 180=nord, 270=est). Pitch est l'inclinaison (-90=haut, 90=bas). Utile pour les maps aventure." },
        { heading: "Exemples pratiques", content: "/tp @s 0 100 0 (aller au centre du monde en hauteur), /tp @a @s (téléporter tous les joueurs vers vous), /tp @s ~ ~-50 ~ (descendre de 50 blocs), /tp @e[type=villager] ~ ~ ~ (téléporter les villageois vers vous)." }
      ],
      tips: [
        "Utilisez ~ pour les coordonnées relatives à votre position",
        "F3 (Java) affiche vos coordonnées actuelles pour la téléportation",
        "/tp @a @s téléporte tous les joueurs vers vous",
        "Attention à ne pas vous téléporter dans un bloc solide"
      ],
      faq: [
        { question: "Comment se téléporter vers un biome spécifique ?", answer: "Utilisez d'abord /locate biome nom_du_biome pour trouver les coordonnées, puis /tp pour vous y rendre. Exemple : /locate biome cherry_grove puis /tp @s x y z." },
        { question: "/tp et /teleport sont-ils différents ?", answer: "Non, /tp est l'alias court de /teleport. Les deux fonctionnent de manière identique avec la même syntaxe." }
      ],
      relatedSlugs: ["guide-commandes", "se-teleporter", "jour", "garder-inventaire", "liste-commandes"]
    }
  },
  {
    slug: "jour",
    keyword: "commande jour minecraft",
    title: "Commande Jour Minecraft : Mettre le Jour",
    h1: "Commande pour Mettre le Jour dans Minecraft",
    metaDescription: "Mettez le jour dans Minecraft avec la commande /time set day. Toutes les variantes de temps et cycle jour/nuit expliquées.",
    category: "commands",
    volume: 480,
    content: {
      intro: "Marre de la nuit et des mobs hostiles ? La commande /time set day remet instantanément le jour dans Minecraft. Vous pouvez aussi fixer le temps, accélérer le cycle ou l'arrêter complètement.",
      sections: [
        { heading: "Commandes de temps", content: "/time set day (jour, 1000 ticks), /time set noon (midi, 6000), /time set night (nuit, 13000), /time set midnight (minuit, 18000). Vous pouvez aussi utiliser des valeurs numériques : /time set 0 pour l'aube exacte." },
        { heading: "Arrêter le cycle jour/nuit", content: "/gamerule doDaylightCycle false arrête le cycle jour/nuit. Le temps reste figé à l'heure actuelle. Combinez avec /time set day pour un jour permanent. Pour relancer le cycle : /gamerule doDaylightCycle true." },
        { heading: "Avancer le temps", content: "/time add 1000 avance le temps de 1000 ticks (environ 50 secondes réelles). /time add 24000 fait passer un jour complet. Un jour Minecraft complet dure 24000 ticks, soit 20 minutes en temps réel." }
      ],
      tips: [
        "/time set day est la commande la plus simple pour remettre le jour",
        "/gamerule doDaylightCycle false fixe le temps en permanence",
        "Un jour Minecraft = 24000 ticks = 20 minutes réelles",
        "L'aube est à 0, midi à 6000, le coucher à 12000, minuit à 18000"
      ],
      faq: [
        { question: "La commande affecte-t-elle les spawns de mobs ?", answer: "Oui, mettre le jour empêche les mobs hostiles de spawner en surface. Les mobs déjà présents ne disparaissent pas immédiatement mais les zombies et squelettes brûlent au soleil." },
        { question: "Peut-on avoir un temps différent par joueur ?", answer: "Non, le temps est global pour tout le monde sur le serveur. Il n'est pas possible d'avoir le jour pour un joueur et la nuit pour un autre en vanilla." }
      ],
      relatedSlugs: ["guide-commandes", "mettre-jour", "enlever-pluie", "commande-pluie", "garder-inventaire"]
    }
  },
  {
    slug: "bedrock",
    keyword: "commande minecraft bedrock",
    title: "Commandes Minecraft Bedrock : Guide",
    h1: "Toutes les Commandes Minecraft Bedrock",
    metaDescription: "Guide complet des commandes Minecraft Bedrock. Différences avec Java, syntaxe spécifique et commandes exclusives Bedrock.",
    category: "commands",
    volume: 720,
    content: {
      intro: "Les commandes Minecraft Bedrock sont similaires à celles de Java mais avec des différences de syntaxe importantes. Certaines commandes sont exclusives à Bedrock et d'autres ont des paramètres différents. Ce guide couvre les spécificités de Bedrock.",
      sections: [
        { heading: "Différences principales", content: "En Bedrock, les sélecteurs de cibles sont les mêmes mais certains filtres diffèrent. Les commandes /data et /attribute n'existent pas. /execute a une syntaxe complètement différente. Les NBT tags ne sont pas supportés dans les commandes. Ces différences affectent les créations de maps et les serveurs." },
        { heading: "Commandes essentielles Bedrock", content: "/tp, /gamemode, /time, /weather, /give, /kill, /summon fonctionnent de manière similaire. /gamerule keepinventory true (notez la casse en minuscule). /effect @s speed 60 1 pour l'effet de vitesse. La syntaxe est généralement plus simple qu'en Java." },
        { heading: "Commandes exclusives Bedrock", content: "/camerashake pour secouer la caméra, /dialogue pour les dialogues PNJ, /fog pour les effets de brouillard, /music pour la musique de fond. Ces commandes sont utilisées dans les maps aventure et le Marketplace content." },
        { heading: "Blocs de commande", content: "Les blocs de commande en Bedrock fonctionnent différemment. Le bloc de commande à chaîne doit pointer dans la direction du suivant. Les command blocks conditionnels vérifient le succès du bloc précédent. Le tick delay est en ticks de redstone, pas en ticks de jeu." }
      ],
      tips: [
        "Les commandes Bedrock n'utilisent pas les NBT tags",
        "La syntaxe de /execute est très différente de Java",
        "Activez les cheats dans les paramètres du monde (désactive les succès)",
        "Utilisez / dans le chat pour accéder à la liste des commandes disponibles"
      ],
      faq: [
        { question: "Les commandes Java fonctionnent-elles sur Bedrock ?", answer: "La plupart des commandes de base (/tp, /give, /time) fonctionnent similairement. Cependant, les commandes avancées (/data, /execute avec la nouvelle syntaxe Java) ne sont pas compatibles." },
        { question: "Comment activer les commandes sur Bedrock ?", answer: "Dans les paramètres du monde, activez 'Triche'. Attention : cela désactive les succès/achievements pour ce monde de manière permanente sur Bedrock." }
      ],
      relatedSlugs: ["guide-commandes", "tp", "liste-commandes", "codes-triche", "garder-inventaire"]
    }
  },
  {
    slug: "codes-triche",
    keyword: "code de triche minecraft",
    title: "Codes de Triche Minecraft : Liste Complète",
    h1: "Tous les Codes de Triche dans Minecraft",
    metaDescription: "Liste complète des codes de triche Minecraft. Mode créatif, invincibilité, items infinis et toutes les triches disponibles.",
    category: "commands",
    volume: 260,
    content: {
      intro: "Les codes de triche dans Minecraft sont en réalité des commandes intégrées au jeu. Contrairement à d'autres jeux, Minecraft offre des outils officiels pour modifier votre expérience. Voici les commandes les plus utiles pour tricher légalement.",
      sections: [
        { heading: "Mode de jeu", content: "/gamemode creative (objets infinis, vol, invincibilité), /gamemode spectator (traverser les blocs, invisibilité), /gamemode adventure (survie sans casser les blocs). Le mode créatif est la triche la plus utilisée pour construire librement." },
        { heading: "Invincibilité et effets", content: "/effect give @s resistance 99999 255 (résistance quasi-infinie), /effect give @s regeneration 99999 255 (régénération constante), /effect give @s saturation 99999 255 (plus jamais faim). Ces commandes vous rendent pratiquement invincible en survie." },
        { heading: "Items et ressources", content: "/give @s diamond 64 (stack de diamants), /give @s netherite_ingot 64, /give @s enchanted_golden_apple 64. Vous pouvez vous donner n'importe quel objet en quantité illimitée avec la commande /give." },
        { heading: "Contrôle du monde", content: "/gamerule keepInventory true (garder inventaire), /gamerule mobGriefing false (les mobs ne détruisent plus les blocs), /gamerule doFireTick false (le feu ne se propage plus). Ces règles rendent la survie beaucoup plus facile." }
      ],
      tips: [
        "Le mode créatif est la triche la plus complète",
        "/gamerule keepInventory true est la commande de confort numéro 1",
        "Les effets avec durée 99999 durent environ 83 minutes réelles",
        "/kill @e[type=!player] élimine tous les mobs instantanément"
      ],
      faq: [
        { question: "Les triches sont-elles banales sur les serveurs ?", answer: "Seuls les opérateurs du serveur peuvent utiliser les commandes. Sur les serveurs publics, les triches sont gérées par des plugins anti-cheat. L'utilisation de mods de triche peut entraîner un ban." },
        { question: "Peut-on désactiver les triches après les avoir activées ?", answer: "En Java, oui, en ouvrant au LAN et en désactivant les cheats. En Bedrock, une fois les cheats activés, les succès sont désactivés définitivement pour ce monde." }
      ],
      relatedSlugs: ["guide-commandes", "creatif", "garder-inventaire", "tp", "liste-commandes"]
    }
  },
  {
    slug: "garder-inventaire",
    keyword: "commande pour garder son inventaire minecraft",
    title: "Garder son Inventaire Minecraft : Commande",
    h1: "Commande pour Garder son Inventaire dans Minecraft",
    metaDescription: "Gardez votre inventaire après la mort dans Minecraft avec /gamerule keepInventory true. Activation et fonctionnement détaillé.",
    category: "commands",
    volume: 210,
    content: {
      intro: "Perdre tout son inventaire à la mort est frustrant dans Minecraft. La commande /gamerule keepInventory true résout ce problème en vous permettant de garder tous vos objets et votre XP même après être mort. C'est la règle de confort la plus populaire.",
      sections: [
        { heading: "La commande", content: "Tapez /gamerule keepInventory true dans le chat. Vous devez avoir les cheats activés. Désormais, quand vous mourrez, vous conserverez tous vos objets et votre barre d'XP. Pour désactiver : /gamerule keepInventory false." },
        { heading: "Ce qui est conservé", content: "Tout votre inventaire (hotbar, inventaire principal, armure équipée, offhand), votre barre d'XP complète et les objets dans votre écran de craft. Rien n'est lâché au sol. C'est comme si la mort n'avait pas de conséquence matérielle." },
        { heading: "Impact sur le gameplay", content: "Cette règle rend le jeu beaucoup plus détendu, surtout pour les nouveaux joueurs ou les constructeurs. Elle enlève le stress de perdre un équipement de valeur. Cependant, elle réduit aussi le challenge et la tension de la survie." }
      ],
      tips: [
        "La commande est /gamerule keepInventory true (attention aux majuscules)",
        "Fonctionne aussi en multijoueur si vous êtes opérateur",
        "L'XP est aussi conservée, pas seulement les items",
        "Idéal pour les joueurs qui préfèrent la construction à la survie"
      ],
      faq: [
        { question: "Cette commande fonctionne-t-elle sur Bedrock ?", answer: "Oui, /gamerule keepinventory true fonctionne sur Bedrock. Notez que sur Bedrock, c'est en minuscule (keepinventory au lieu de keepInventory). L'activation des cheats est nécessaire." },
        { question: "Peut-on activer keepInventory sans les cheats ?", answer: "Non, les gamerules nécessitent les cheats activés. En Java, ouvrez au LAN temporairement avec les cheats pour taper la commande, puis refermez. La règle reste active." }
      ],
      relatedSlugs: ["guide-commandes", "codes-triche", "tp", "jour", "creatif"]
    }
  },
  {
    slug: "xp",
    keyword: "commande xp minecraft",
    title: "Commande XP Minecraft : Guide",
    h1: "Commande /xp dans Minecraft",
    metaDescription: "Gérez votre expérience avec la commande /xp Minecraft. Ajouter, retirer et définir les niveaux d'XP facilement.",
    category: "commands",
    volume: 140,
    content: {
      intro: "La commande /xp permet de manipuler votre expérience dans Minecraft. Vous pouvez ajouter des niveaux pour les enchantements, donner de l'XP à d'autres joueurs ou remettre votre niveau à zéro.",
      sections: [
        { heading: "Syntaxe", content: "/xp add @s 30 levels (ajouter 30 niveaux), /xp set @s 0 levels (remettre à 0), /xp add @s 1000 points (ajouter 1000 points d'XP). En Java, vous pouvez aussi utiliser /experience à la place de /xp." },
        { heading: "Niveaux vs points", content: "Les niveaux et les points sont différents. Le coût en points pour monter d'un niveau augmente avec le niveau. Ajouter '30 levels' est bien plus rapide qu'ajouter les points équivalents. Pour les enchantements, vous avez besoin du niveau 30." },
        { heading: "Utilisations pratiques", content: "Utilisez /xp add @s 30 levels avant chaque session d'enchantement. Pour tester des enchantements, donnez-vous des niveaux illimités. Sur les serveurs, les administrateurs peuvent récompenser les joueurs avec de l'XP." }
      ],
      tips: [
        "/xp add @s 30 levels est la commande la plus utile pour enchanter",
        "Les points et les niveaux ne sont pas la même chose",
        "En Java, /experience est l'alias complet de /xp",
        "Vous pouvez donner de l'XP à d'autres joueurs par leur nom"
      ],
      faq: [
        { question: "Peut-on donner de l'XP à un autre joueur ?", answer: "Oui, remplacez @s par le nom du joueur : /xp add NomDuJoueur 30 levels. Vous devez être opérateur pour utiliser cette commande sur d'autres joueurs." },
        { question: "Le niveau 30 suffit-il pour tous les enchantements ?", answer: "Oui, le niveau 30 est le maximum utilisable à la table d'enchantement. Avoir plus de 30 niveaux n'améliore pas les enchantements mais constitue une réserve pour les enclumes." }
      ],
      relatedSlugs: ["guide-commandes", "codes-triche", "creatif", "tp", "liste-commandes"]
    }
  },
  {
    slug: "creatif",
    keyword: "commande minecraft creatif",
    title: "Commande Mode Créatif Minecraft",
    h1: "Commande pour Passer en Créatif dans Minecraft",
    metaDescription: "Passez en mode créatif Minecraft avec /gamemode creative. Vol, objets infinis et invincibilité en une seule commande.",
    category: "commands",
    volume: 210,
    content: {
      intro: "Le mode créatif est le mode de construction libre de Minecraft. Vous avez accès à tous les blocs, pouvez voler et êtes invincible. La commande pour y accéder est simple mais nécessite les cheats activés.",
      sections: [
        { heading: "La commande", content: "/gamemode creative ou /gamemode 1 (ancien format). Pour revenir en survie : /gamemode survival ou /gamemode 0. Les cheats doivent être activés. Sur serveur, vous devez être opérateur." },
        { heading: "Capacités du mode créatif", content: "Vol libre (double appui sur espace), accès à tous les blocs et items dans l'inventaire créatif, destruction instantanée des blocs, invincibilité (sauf /kill et le vide), pas de faim ni de dégâts de chute. C'est le mode idéal pour construire." },
        { heading: "Autres modes de jeu", content: "/gamemode spectator (traverser les blocs, invisible, vision des mobs), /gamemode adventure (survie sans casser les blocs, pour les maps aventure). Le mode spectateur est utile pour explorer le monde sans interagir avec lui." }
      ],
      tips: [
        "/gamemode creative est le plus simple pour la construction",
        "Double espace pour voler, Shift pour descendre en vol",
        "Le mode spectateur permet de voir à travers les mobs",
        "L'inventaire créatif a un onglet de recherche pour trouver les blocs"
      ],
      faq: [
        { question: "Peut-on passer du créatif au survie et garder les objets ?", answer: "Oui, les objets de votre inventaire restent quand vous changez de mode. Cependant, sur certains serveurs, cela est considéré comme de la triche et peut être bloqué." },
        { question: "Le mode créatif est-il disponible en multijoueur ?", answer: "Oui, mais seuls les opérateurs peuvent changer de mode de jeu. Les plugins de serveur peuvent aussi restreindre l'accès au mode créatif." }
      ],
      relatedSlugs: ["guide-commandes", "codes-triche", "garder-inventaire", "tp", "liste-commandes"]
    }
  },
  {
    slug: "enlever-pluie",
    keyword: "comment enlever la pluie sur minecraft bedrock",
    title: "Enlever la Pluie Minecraft : Commande",
    h1: "Comment Enlever la Pluie dans Minecraft",
    metaDescription: "Arrêtez la pluie dans Minecraft avec /weather clear. Commande pour Bedrock et Java, temps clair permanent et gestion météo.",
    category: "commands",
    volume: 1900,
    content: {
      intro: "La pluie dans Minecraft peut être gênante, réduisant la visibilité et rendant l'exploration moins agréable. Heureusement, une simple commande suffit pour retrouver un ciel bleu. Voici comment gérer la météo sur Bedrock et Java.",
      sections: [
        { heading: "Commande rapide", content: "/weather clear arrête la pluie ou l'orage immédiatement. /weather clear 999999 maintient le temps clair pendant environ 14 jours en temps réel. La commande fonctionne de manière identique sur Java et Bedrock Edition." },
        { heading: "Temps clair permanent", content: "/gamerule doWeatherCycle false désactive complètement le cycle météo. Combinez avec /weather clear pour un ciel bleu permanent. Pour relancer la météo : /gamerule doWeatherCycle true. C'est la solution définitive." },
        { heading: "Autres options météo", content: "/weather rain (pluie), /weather thunder (orage). Les orages sont nécessaires pour l'enchantement Canalisation du trident et pour transformer les creepers en creepers chargés. Vous pouvez forcer un orage quand vous en avez besoin." }
      ],
      tips: [
        "/weather clear est la commande la plus simple pour arrêter la pluie",
        "/gamerule doWeatherCycle false pour un temps clair permanent",
        "Les orages sont utiles pour le trident Canalisation, ne les bloquez pas toujours",
        "La commande est identique sur Java et Bedrock"
      ],
      faq: [
        { question: "La pluie affecte-t-elle le gameplay ?", answer: "La pluie éteint les mobs en feu, empêche l'enchantement Flamme de fonctionner et rend les Endermen hostiles (ils se téléportent pour éviter la pluie). Elle n'affecte pas les spawns de mobs." },
        { question: "Comment déclencher un orage pour le trident ?", answer: "Utilisez /weather thunder pour forcer un orage. Cela permet d'utiliser l'enchantement Canalisation du trident et de créer des creepers chargés par la foudre." }
      ],
      relatedSlugs: ["commande-pluie", "jour", "mettre-jour", "guide-commandes", "bedrock"]
    }
  },
  {
    slug: "world-edit",
    keyword: "commande world edit minecraft",
    title: "Commandes WorldEdit Minecraft : Guide",
    h1: "Commandes WorldEdit dans Minecraft",
    metaDescription: "Maîtrisez les commandes WorldEdit Minecraft. Sélection, remplissage, copie et transformation de terrain à grande échelle.",
    category: "commands",
    volume: 210,
    content: {
      intro: "WorldEdit est un plugin/mod de construction à grande échelle pour Minecraft. Il permet de sélectionner, copier, coller et modifier des zones entières en quelques commandes. C'est l'outil standard pour les grands projets de construction.",
      sections: [
        { heading: "Commandes de sélection", content: "//wand pour obtenir l'outil de sélection (hache en bois). Clic gauche pour le point 1, clic droit pour le point 2. //pos1 et //pos2 pour sélectionner avec des coordonnées. //expand 10 up pour étendre la sélection de 10 blocs vers le haut." },
        { heading: "Commandes de modification", content: "//set stone (remplir de pierre), //replace dirt stone (remplacer terre par pierre), //walls glass (créer des murs en verre), //hollow (creuser l'intérieur). //undo pour annuler la dernière action, //redo pour la refaire." },
        { heading: "Copier et coller", content: "//copy pour copier la sélection, //paste pour la coller, //rotate 90 pour tourner la copie de 90 degrés, //flip pour retourner. //schematic save nom pour sauvegarder une structure, //schematic load nom pour la charger." },
        { heading: "Outils de terrain", content: "//sphere stone 10 (sphère de pierre rayon 10), //cyl stone 5 10 (cylindre rayon 5 hauteur 10), //smooth 5 (lisser le terrain 5 fois). Le pinceau //br sphere stone 5 peint des sphères à distance pour le terrain naturel." }
      ],
      tips: [
        "//undo est votre meilleur ami, n'hésitez pas à tester",
        "Les schematics permettent de sauvegarder et partager des constructions",
        "Le pinceau (//br) est idéal pour le terraforming naturel",
        "//replace est plus précis que //set pour modifier le terrain existant"
      ],
      faq: [
        { question: "WorldEdit est-il un mod ou un plugin ?", answer: "Les deux. WorldEdit existe comme plugin Bukkit/Spigot pour les serveurs et comme mod Fabric/Forge pour le solo. Les commandes sont identiques dans les deux versions." },
        { question: "WorldEdit est-il disponible sur Bedrock ?", answer: "Pas directement. Il existe des addons similaires pour Bedrock mais avec des fonctionnalités réduites. Les commandes vanilla /fill et /clone offrent des alternatives limitées." }
      ],
      relatedSlugs: ["guide-commandes", "liste-commandes", "codes-triche", "creatif", "tp"]
    }
  },
  {
    slug: "se-teleporter",
    keyword: "comment se tp sur minecraft",
    title: "Se Téléporter Minecraft : Guide",
    h1: "Comment se Téléporter dans Minecraft",
    metaDescription: "Toutes les méthodes pour se téléporter dans Minecraft. Commande /tp, perles d'Ender, portails et chorus fruit détaillés.",
    category: "commands",
    volume: 260,
    content: {
      intro: "La téléportation dans Minecraft peut se faire de plusieurs façons : commandes, perles d'Ender, portails ou chorus fruit. Que vous ayez les cheats ou non, il existe une solution pour chaque situation. Voici toutes les méthodes disponibles.",
      sections: [
        { heading: "Commande /tp", content: "La méthode la plus directe. /tp x y z vous téléporte instantanément. Nécessite les cheats activés. Utilisez F3 pour connaître les coordonnées de votre destination. C'est la méthode privilégiée en créatif ou sur les serveurs avec permissions." },
        { heading: "Perles d'Ender", content: "Les perles d'Ender vous téléportent où elles atterrissent quand vous les lancez. Elles infligent 5 dégâts de chute (réductibles par Chute Amortie). Elles sont obtenues en tuant des Endermen. C'est la seule téléportation disponible en survie sans commandes." },
        { heading: "Portails", content: "Le portail du Nether offre un voyage rapide (1 bloc Nether = 8 blocs Overworld). Le portail de l'End vous emmène dans la dimension finale. Les portails de l'End des îles extérieures vous ramènent à l'île principale. C'est la téléportation longue distance la plus efficace en survie." },
        { heading: "Chorus fruit", content: "Manger un chorus fruit vous téléporte aléatoirement dans un rayon de 8 blocs. C'est imprévisible mais utile pour se dégager d'une situation dangereuse. Les chorus fruit se trouvent dans les îles extérieures de l'End." }
      ],
      tips: [
        "/tp est la méthode la plus rapide si les commandes sont disponibles",
        "Les perles d'Ender infligent 5 dégâts, utilisez Chute Amortie",
        "Le réseau Nether est 8x plus rapide que voyager dans l'Overworld",
        "Les chorus fruit sont un téléporteur d'urgence imprévisible"
      ],
      faq: [
        { question: "Comment se téléporter sans commandes ?", answer: "Utilisez les perles d'Ender pour de courtes distances, le réseau de portails du Nether pour les longues distances, et les chorus fruit pour les urgences. Il n'existe pas de téléportation précise en survie sans commandes." },
        { question: "Les perles d'Ender fonctionnent-elles dans toutes les dimensions ?", answer: "Oui, les perles d'Ender fonctionnent dans l'Overworld, le Nether et l'End. Elles ne permettent pas de changer de dimension, seulement de se déplacer à l'intérieur d'une même dimension." }
      ],
      relatedSlugs: ["tp", "guide-commandes", "liste-commandes", "codes-triche", "afficher-coordonnees"]
    }
  },
  {
    slug: "liste-commandes",
    keyword: "liste commande minecraft",
    title: "Liste des Commandes Minecraft : Référence",
    h1: "Liste Complète des Commandes Minecraft",
    metaDescription: "Référence complète de toutes les commandes Minecraft. Classées par catégorie avec syntaxe et exemples pour Java et Bedrock.",
    category: "commands",
    volume: 210,
    content: {
      intro: "Minecraft possède des dizaines de commandes pour contrôler tous les aspects du jeu. Cette liste de référence classe toutes les commandes par catégorie pour un accès rapide. Utilisez Tab dans le chat pour l'auto-complétion.",
      sections: [
        { heading: "Commandes de joueur", content: "/gamemode, /tp, /give, /clear, /effect, /xp, /enchant, /kill, /spawnpoint, /spreadplayers. Ces commandes affectent directement le joueur : son mode, sa position, son inventaire, ses effets et son expérience." },
        { heading: "Commandes de monde", content: "/time, /weather, /gamerule, /difficulty, /worldborder, /setworldspawn, /locate, /locatebiome, /seed. Ces commandes modifient les propriétés globales du monde : temps, météo, règles et localisation de structures." },
        { heading: "Commandes d'entités", content: "/summon, /data (Java), /attribute (Java), /ride (Bedrock), /tag, /team. Ces commandes créent et modifient les entités (mobs, items, projectiles) dans le monde." },
        { heading: "Commandes de blocs", content: "/fill, /clone, /setblock, /place. Ces commandes placent et modifient des blocs en masse. /fill est la plus utilisée pour la construction rapide. /clone copie une zone vers un autre emplacement." },
        { heading: "Commandes de serveur", content: "/op, /deop, /ban, /kick, /whitelist, /say, /tell, /msg, /title, /bossbar. Ces commandes gèrent les joueurs et la communication sur les serveurs multijoueur." }
      ],
      tips: [
        "Tapez / dans le chat pour voir toutes les commandes disponibles",
        "Tab complète automatiquement les commandes et les arguments",
        "Les blocs de commande peuvent automatiser les commandes",
        "La plupart des commandes fonctionnent sur Java et Bedrock"
      ],
      faq: [
        { question: "Combien de commandes Minecraft a-t-il ?", answer: "Minecraft Java Edition possède environ 60 commandes et Bedrock environ 50. Le nombre exact dépend de la version et certaines commandes sont exclusives à une édition." },
        { question: "Les commandes sont-elles les mêmes sur Java et Bedrock ?", answer: "Les commandes de base sont similaires mais pas identiques. /execute a une syntaxe différente, /data n'existe pas sur Bedrock, et certaines commandes sont exclusives à une édition." }
      ],
      relatedSlugs: ["guide-commandes", "tp", "codes-triche", "bedrock", "creatif"]
    }
  },
  {
    slug: "afficher-coordonnees",
    keyword: "comment afficher les coordonnées sur minecraft",
    title: "Afficher les Coordonnées Minecraft : Guide",
    h1: "Comment Afficher les Coordonnées dans Minecraft",
    metaDescription: "Affichez vos coordonnées dans Minecraft sur Java et Bedrock. F3, paramètres et commandes pour voir votre position exacte.",
    category: "commands",
    volume: 210,
    content: {
      intro: "Connaître vos coordonnées est essentiel dans Minecraft pour le minage, la navigation et le partage de positions. La méthode varie entre Java et Bedrock Edition. Voici comment afficher vos coordonnées sur chaque plateforme.",
      sections: [
        { heading: "Java Edition : F3", content: "Appuyez sur F3 pour afficher l'écran de debug complet. Vos coordonnées XYZ sont affichées en haut à gauche. X est la direction est-ouest, Y est l'altitude (profondeur/hauteur), Z est la direction nord-sud. L'écran de debug affiche aussi le biome, la direction du regard et la lumière." },
        { heading: "Bedrock Edition : paramètres", content: "Allez dans Paramètres > Jeu > Afficher les coordonnées et activez l'option. Les coordonnées s'affichent en permanence en haut à gauche de l'écran. Sur console, cette option est dans les paramètres du monde." },
        { heading: "Comprendre les coordonnées", content: "X : position est (+) ou ouest (-). Y : altitude (0 = niveau de la mer historique, -64 = bedrock, 320 = limite haute). Z : position sud (+) ou nord (-). Les coordonnées sont essentielles pour noter les positions de base, de structures et pour le minage ciblé." }
      ],
      tips: [
        "F3 sur Java affiche bien plus que les coordonnées (biome, lumière, etc.)",
        "Sur Bedrock, activez les coordonnées dans les paramètres du monde",
        "Notez les coordonnées de votre base pour toujours retrouver le chemin",
        "Y est l'altitude : important pour le minage de diamants (Y=-58)"
      ],
      faq: [
        { question: "Les coordonnées sont-elles visibles en multijoueur ?", answer: "Sur Java, F3 fonctionne toujours. Sur Bedrock, le créateur du monde doit activer l'option. Sur certains serveurs, les coordonnées peuvent être désactivées par un plugin." },
        { question: "Comment noter ses coordonnées facilement ?", answer: "Prenez une capture d'écran (F2 sur Java) ou utilisez un livre et une plume dans le jeu pour noter les coordonnées importantes. Certains joueurs utilisent aussi des maps et des marqueurs." }
      ],
      relatedSlugs: ["guide-commandes", "tp", "se-teleporter", "liste-commandes", "bedrock"]
    }
  },
  {
    slug: "ecrire-couleur",
    keyword: "ecrire en couleur minecraft",
    title: "Écrire en Couleur Minecraft : Guide",
    h1: "Comment Écrire en Couleur dans Minecraft",
    metaDescription: "Écrivez en couleur dans Minecraft avec les codes de formatage. Panneaux, livres et chat coloré avec le symbole section.",
    category: "commands",
    volume: 140,
    content: {
      intro: "Le texte coloré dans Minecraft ajoute de la personnalité à vos panneaux, livres et messages de chat. Les codes de couleur utilisent le symbole section (§) suivi d'un code. Voici comment colorer votre texte sur Java et Bedrock.",
      sections: [
        { heading: "Codes de couleur", content: "§0 noir, §1 bleu foncé, §2 vert foncé, §3 cyan, §4 rouge foncé, §5 violet, §6 or, §7 gris, §8 gris foncé, §9 bleu, §a vert, §b cyan clair, §c rouge, §d rose, §e jaune, §f blanc. Placez le code avant le texte à colorer." },
        { heading: "Codes de formatage", content: "§l gras, §o italique, §n souligné, §m barré, §k texte brouillé, §r réinitialiser le formatage. Vous pouvez combiner couleur et formatage : §c§l pour du texte rouge et gras." },
        { heading: "Application selon la plateforme", content: "Sur Bedrock, le symbole § est accessible directement sur le clavier. Sur Java, il faut copier-coller le symbole ou utiliser la commande /tellraw pour le chat coloré. Les panneaux et les livres acceptent les codes sur les deux versions." }
      ],
      tips: [
        "§r réinitialise le formatage, utilisez-le entre les sections de couleur",
        "Sur Bedrock, le § est directement accessible au clavier",
        "Sur Java, utilisez /tellraw pour le chat coloré avancé",
        "Les codes fonctionnent dans les livres, panneaux et certains messages"
      ],
      faq: [
        { question: "Comment écrire le symbole § sur Java PC ?", answer: "Sur Java PC, le symbole § n'est pas tapable directement dans le chat. Copiez-le depuis un site web ou utilisez la commande /tellraw pour le texte formaté en JSON. Sur les panneaux, certains mods ajoutent le support du §." },
        { question: "Les couleurs fonctionnent-elles sur les serveurs ?", answer: "Cela dépend du serveur. La plupart des serveurs utilisent le symbole & au lieu de § pour les codes de couleur dans le chat, via des plugins comme EssentialsX." }
      ],
      relatedSlugs: ["guide-commandes", "codes-triche", "liste-commandes", "bedrock", "activer-commandes"]
    }
  },
  {
    slug: "feuilles-commande",
    keyword: "quelles commandes pour que les feuilles ne tombent plus minecraft",
    title: "Empêcher les Feuilles de Tomber Minecraft",
    h1: "Commande pour Empêcher les Feuilles de Tomber",
    metaDescription: "Empêchez la disparition des feuilles dans Minecraft. Commande gamerule pour contrôler le decay des feuilles et garder vos arbres.",
    category: "commands",
    volume: 320,
    content: {
      intro: "Les feuilles dans Minecraft disparaissent naturellement quand elles ne sont plus connectées à un tronc de bois. C'est le leaf decay. Pour les constructeurs, cela peut ruiner des designs arborés. Voici comment empêcher les feuilles de tomber.",
      sections: [
        { heading: "Commande gamerule", content: "La commande /gamerule randomTickSpeed 0 arrête tous les ticks aléatoires, ce qui empêche les feuilles de disparaître. Cependant, cela arrête aussi la croissance des cultures, la propagation de l'herbe et d'autres mécaniques. C'est une solution radicale." },
        { heading: "Feuilles placées par le joueur", content: "Les feuilles placées manuellement par le joueur ne subissent PAS le leaf decay. Si vous construisez un arbre bloc par bloc, les feuilles que vous placez resteront en permanence. C'est la solution la plus propre pour les constructions personnalisées." },
        { heading: "Solution avec cisailles", content: "Utilisez des cisailles ou Toucher de Soie pour récolter les feuilles, puis replacez-les. Les feuilles récoltées et replacées sont considérées comme des feuilles 'persistantes' et ne disparaissent pas. C'est la solution recommandée pour la décoration." }
      ],
      tips: [
        "Les feuilles placées par le joueur ne disparaissent jamais",
        "Récoltez les feuilles avec des cisailles puis replacez-les pour les rendre persistantes",
        "/gamerule randomTickSpeed 0 arrête le leaf decay mais aussi les cultures",
        "Les feuilles naturelles disparaissent si elles sont à plus de 7 blocs d'un tronc"
      ],
      faq: [
        { question: "Existe-t-il une gamerule spécifique pour le leaf decay ?", answer: "Non, il n'existe pas de gamerule dédiée au leaf decay en vanilla. Le randomTickSpeed 0 arrête tous les ticks aléatoires. Pour cibler uniquement les feuilles, utilisez la méthode du placement manuel." },
        { question: "Les feuilles placées par le joueur lâchent-elles des items ?", answer: "Oui, les feuilles persistantes (placées par le joueur) lâchent les mêmes items (pousses, bâtons, pommes) quand elles sont cassées. La seule différence est qu'elles ne disparaissent pas naturellement." }
      ],
      relatedSlugs: ["guide-commandes", "codes-triche", "creatif", "liste-commandes", "activer-commandes"]
    }
  },
  {
    slug: "activer-commandes",
    keyword: "comment activer les commandes minecraft",
    title: "Activer les Commandes Minecraft : Guide",
    h1: "Comment Activer les Commandes dans Minecraft",
    metaDescription: "Activez les commandes (cheats) dans Minecraft. Création du monde, partie existante et serveurs expliqués pas à pas.",
    category: "commands",
    volume: 140,
    content: {
      intro: "Les commandes Minecraft nécessitent d'être activées avant utilisation. La méthode dépend de si vous créez un nouveau monde ou voulez les activer dans une partie existante. Voici comment faire sur Java et Bedrock.",
      sections: [
        { heading: "Nouveau monde", content: "Java : lors de la création, cliquez sur 'Plus d'options du monde' et activez 'Autoriser les commandes'. Bedrock : dans les paramètres du monde, activez 'Activer les triches'. Les deux méthodes activent les commandes dès le départ." },
        { heading: "Partie existante (Java)", content: "Appuyez sur Échap, cliquez sur 'Ouvrir au LAN', cochez 'Autoriser les commandes', puis cliquez sur 'Lancer le monde en LAN'. Les commandes sont maintenant actives. Cette activation est temporaire et doit être refaite à chaque session." },
        { heading: "Partie existante (Bedrock)", content: "Allez dans les paramètres du monde et activez 'Activer les triches'. Attention : cela désactive les succès/achievements DÉFINITIVEMENT pour ce monde. Il n'y a aucun moyen de les réactiver." },
        { heading: "Sur un serveur", content: "Les commandes sont contrôlées par les permissions. En tant qu'opérateur (/op), vous avez accès à toutes les commandes. Les plugins de permissions (LuckPerms, etc.) permettent de donner des commandes spécifiques à certains joueurs." }
      ],
      tips: [
        "Sur Java, l'ouverture LAN permet d'activer les commandes temporairement",
        "Sur Bedrock, activer les triches désactive les succès définitivement",
        "Sur serveur, demandez les permissions à l'administrateur",
        "Les blocs de commande nécessitent aussi les commandes activées"
      ],
      faq: [
        { question: "Activer les commandes désactive-t-il les succès ?", answer: "Sur Java, non. Les advancements restent disponibles même avec les commandes. Sur Bedrock, oui, les achievements sont désactivés DÉFINITIVEMENT pour ce monde." },
        { question: "Peut-on désactiver les commandes après les avoir activées ?", answer: "Sur Java, fermez simplement le LAN (quittez et rechargez le monde). Sur Bedrock, vous pouvez désactiver les triches dans les paramètres, mais les succès restent désactivés." }
      ],
      relatedSlugs: ["guide-commandes", "codes-triche", "bedrock", "liste-commandes", "creatif"]
    }
  },
  {
    slug: "commande-pluie",
    keyword: "commande pour enlever la pluie minecraft",
    title: "Commande Enlever la Pluie Minecraft",
    h1: "Commande pour Enlever la Pluie dans Minecraft",
    metaDescription: "Enlevez la pluie Minecraft avec /weather clear. Commande simple et rapide pour retrouver le temps clair immédiatement.",
    category: "commands",
    volume: 140,
    content: {
      intro: "La pluie gêne la visibilité et peut être agaçante lors de longues sessions de construction ou d'exploration. Voici la commande simple pour l'arrêter et les options avancées pour gérer la météo dans Minecraft.",
      sections: [
        { heading: "Commande simple", content: "/weather clear arrête immédiatement la pluie ou l'orage. C'est la commande la plus directe. Ajoutez un nombre de secondes pour la durée : /weather clear 100000 pour environ 28 heures de temps clair." },
        { heading: "Météo permanente", content: "/gamerule doWeatherCycle false arrête le cycle météo. Le temps reste figé à son état actuel. Combinez /weather clear puis /gamerule doWeatherCycle false pour un temps clair permanent sans avoir à retaper la commande." },
        { heading: "Forcer d'autres météos", content: "/weather rain pour la pluie, /weather thunder pour l'orage. L'orage est nécessaire pour le trident Canalisation et pour charger les creepers avec la foudre. Activez l'orage temporairement quand vous en avez besoin." }
      ],
      tips: [
        "/weather clear est la commande la plus utilisée pour le temps",
        "Combinez avec doWeatherCycle false pour un résultat permanent",
        "N'oubliez pas que les orages sont utiles pour certaines mécaniques",
        "La commande fonctionne identiquement sur Java et Bedrock"
      ],
      faq: [
        { question: "La pluie a-t-elle un impact sur le gameplay ?", answer: "Oui : elle éteint les mobs en feu, rend le ciel plus sombre (augmentant légèrement les spawns), affecte les Endermen et empêche l'effet Flamme de fonctionner. Les cultures poussent normalement sous la pluie." },
        { question: "Peut-on avoir de la neige sans pluie ?", answer: "La neige tombe dans les biomes froids à la place de la pluie. Désactiver la pluie avec /weather clear désactive aussi la neige. Vous ne pouvez pas avoir l'un sans l'autre." }
      ],
      relatedSlugs: ["enlever-pluie", "jour", "mettre-jour", "guide-commandes", "liste-commandes"]
    }
  },
  {
    slug: "mettre-jour",
    keyword: "comment mettre le jour sur minecraft",
    title: "Mettre le Jour Minecraft : Commande",
    h1: "Comment Mettre le Jour dans Minecraft",
    metaDescription: "Remettez le jour dans Minecraft avec /time set day. Commande rapide pour arrêter la nuit et ses mobs hostiles.",
    category: "commands",
    volume: 210,
    content: {
      intro: "La nuit dans Minecraft apporte son lot de mobs hostiles et de dangers. Pour les constructeurs ou les joueurs qui préfèrent la tranquillité, remettre le jour est une commande essentielle. Voici comment faire simplement.",
      sections: [
        { heading: "Commande rapide", content: "/time set day remet immédiatement le jour (6000 ticks, soit midi environ). /time set 0 met l'heure à l'aube. /time set 6000 met l'heure à midi pile. Choisissez l'heure qui vous convient." },
        { heading: "Jour permanent", content: "/gamerule doDaylightCycle false fige le temps. Combinez avec /time set day pour un jour éternel. Les mobs hostiles ne spawneront plus en surface. Pour relancer le cycle : /gamerule doDaylightCycle true." },
        { heading: "Dormir dans un lit", content: "Sans commandes, dormir dans un lit passe la nuit instantanément. En multijoueur, tous les joueurs doivent dormir (ou la majorité sur certains serveurs avec un plugin). C'est la méthode vanilla pour les joueurs en survie." }
      ],
      tips: [
        "/time set day est la commande la plus simple",
        "Combinez avec doDaylightCycle false pour un jour permanent",
        "En survie sans commandes, utilisez un lit pour passer la nuit",
        "Les mobs hostiles en surface brûlent au soleil (sauf certains)"
      ],
      faq: [
        { question: "Le jour permanent empêche-t-il les spawns de mobs ?", answer: "En surface, oui. Les mobs hostiles ne spawnt pas à la lumière du soleil. Cependant, les mobs souterrains, dans les grottes et les spawners continuent de fonctionner normalement." },
        { question: "Les villageois dorment-ils si le jour est permanent ?", answer: "Non, si le cycle jour/nuit est arrêté pendant le jour, les villageois ne dorment jamais. Cela peut affecter les fermes à golems de fer qui nécessitent que les villageois dorment." }
      ],
      relatedSlugs: ["jour", "enlever-pluie", "commande-pluie", "guide-commandes", "garder-inventaire"]
    }
  }
];
