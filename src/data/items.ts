import type { PageData } from "./types";

export const itemPages: PageData[] = [
  {
    slug: "pousse-de-ble",
    keyword: "pouse de plé minecraft",
    title: "Pousse de Blé Minecraft : Farming Guide",
    h1: "La Pousse de Blé dans Minecraft",
    metaDescription: "Guide complet sur la pousse de blé dans Minecraft. Comment planter, faire pousser et récolter le blé efficacement pour nourrir vos animaux et fabriquer du pain.",
    category: "items",
    volume: 1900,
    content: {
      intro: "Le blé est l'une des premières cultures que vous pouvez mettre en place dans Minecraft. Il sert à fabriquer du pain, des gâteaux et à reproduire les vaches, moutons et chevaux. Maîtriser la culture du blé est essentiel pour tout joueur souhaitant survivre durablement.",
      sections: [
        {
          heading: "Comment planter du blé",
          content: "Pour planter du blé, il faut d'abord labourer un bloc de terre ou d'herbe avec une houe. Placez ensuite des graines de blé sur le sol labouré. Les graines s'obtiennent en cassant des hautes herbes ou en récoltant du blé mature. Assurez-vous qu'une source d'eau se trouve à moins de 4 blocs pour hydrater la terre."
        },
        {
          heading: "Conditions de croissance optimales",
          content: "Le blé nécessite un niveau de lumière d'au moins 9 pour pousser. Il passe par 8 stades de croissance et met en moyenne 10 à 30 minutes pour arriver à maturité. La proximité de l'eau, l'alternance des rangées et la lumière artificielle la nuit accélèrent la croissance. Utilisez de la poudre d'os pour une croissance instantanée."
        },
        {
          heading: "Récolte et utilisation du blé",
          content: "Récoltez le blé lorsqu'il est doré et mature (stade 7). Chaque bloc récolté donne 1 blé et 0 à 3 graines. Le blé sert à fabriquer du pain (3 blés en ligne), des gâteaux, des cookies et des bottes de foin. Il est aussi l'aliment principal pour reproduire les vaches et les moutons."
        },
        {
          heading: "Ferme automatique de blé",
          content: "Vous pouvez automatiser la récolte grâce aux villageois fermiers ou avec un système de pistons et d'eau. Les villageois plantent et récoltent automatiquement le blé, ce qui vous permet de collecter les surplus via des entonnoirs. C'est l'une des fermes les plus simples à construire."
        }
      ],
      tips: [
        "Placez des torches autour de vos champs pour que le blé pousse même la nuit",
        "Alternez les rangées de blé avec des rangées vides pour accélérer la croissance",
        "Utilisez de la poudre d'os pour faire pousser le blé instantanément",
        "Ne sautez pas sur vos terres labourées, cela les retransforme en terre normale",
        "Les villageois fermiers peuvent automatiser entièrement votre production de blé"
      ],
      faq: [
        {
          question: "Combien de temps met le blé à pousser dans Minecraft ?",
          answer: "Le blé met entre 10 et 30 minutes pour atteindre sa maturité dans des conditions normales. L'utilisation de poudre d'os permet une croissance instantanée. L'hydratation et la lumière optimales réduisent ce temps."
        },
        {
          question: "Où trouver des graines de blé ?",
          answer: "Les graines de blé s'obtiennent principalement en cassant des hautes herbes. On peut aussi en trouver dans les coffres de villages, de donjons et en récoltant du blé mature qui donne entre 0 et 3 graines supplémentaires."
        },
        {
          question: "À quoi sert le blé dans Minecraft ?",
          answer: "Le blé sert à fabriquer du pain (3 blés), des gâteaux, des cookies et des bottes de foin. Il est aussi utilisé pour reproduire et attirer les vaches, moutons et chevaux."
        }
      ],
      relatedSlugs: ["canne-a-sucre", "poudre-os", "charbon-de-bois", "terre-cuite", "rayon-de-miel"]
    }
  },
  {
    slug: "coeur-de-grinceur",
    keyword: "coeur de grinceur minecraft",
    title: "Cœur de Grinceur Minecraft : Guide Complet",
    h1: "Le Cœur de Grinceur dans Minecraft",
    metaDescription: "Tout savoir sur le cœur de grinceur dans Minecraft. Comment l'obtenir, ses utilisations et son rôle dans les chambres des épreuves.",
    category: "items",
    volume: 1300,
    content: {
      intro: "Le cœur de grinceur est un item rare ajouté avec la mise à jour 1.21. Il s'agit du noyau de fonctionnement du bloc générateur d'épreuves (trial spawner). Cet objet est convoité pour sa rareté et son rôle unique dans les mécaniques de jeu.",
      sections: [
        {
          heading: "Comment obtenir un cœur de grinceur",
          content: "Le cœur de grinceur ne peut pas être obtenu en survie par des moyens normaux. Il est exclusivement récupérable via des commandes ou le mode créatif. Le bloc de générateur d'épreuves qui contient ce cœur ne peut pas être miné, même avec un outil enchanté Toucher de soie."
        },
        {
          heading: "Rôle dans les chambres des épreuves",
          content: "Le cœur de grinceur est le composant central des générateurs d'épreuves que l'on trouve dans les chambres des épreuves (trial chambers). Ces structures souterraines contiennent des spawners spéciaux qui adaptent la difficulté au nombre de joueurs présents. Le cœur contrôle le comportement de ces spawners."
        },
        {
          heading: "Propriétés techniques",
          content: "Le cœur de grinceur est classé comme un objet de catégorie rare avec une teinte cyan dans son nom. Il ne peut pas être empilé au-delà de 64. En mode créatif, il peut être placé pour créer des générateurs d'épreuves personnalisés via des commandes NBT."
        }
      ],
      tips: [
        "Le cœur de grinceur n'est pas récupérable en mode survie",
        "Explorez les chambres des épreuves pour voir les générateurs qui utilisent ce cœur",
        "En mode créatif, utilisez /give pour obtenir cet item",
        "Les générateurs d'épreuves s'adaptent au nombre de joueurs à proximité"
      ],
      faq: [
        {
          question: "Peut-on miner un générateur d'épreuves pour obtenir le cœur de grinceur ?",
          answer: "Non, le générateur d'épreuves ne peut pas être miné en survie, même avec Toucher de soie. Le cœur de grinceur est uniquement accessible en mode créatif ou via des commandes."
        },
        {
          question: "À quoi sert le cœur de grinceur ?",
          answer: "Il est le composant central des générateurs d'épreuves dans les chambres des épreuves. En mode créatif, il permet de créer et personnaliser ces générateurs spéciaux."
        }
      ],
      relatedSlugs: ["chambre-epreuves", "cle-epreuves", "noyau-lourd", "ornement-oeil", "etoile-nether"]
    }
  },
  {
    slug: "ornement-oeil",
    keyword: "ornement de l'oeil minecraft",
    title: "Ornement de l'Œil Minecraft : Guide",
    h1: "L'Ornement de l'Œil dans Minecraft",
    metaDescription: "Découvrez l'ornement de l'œil dans Minecraft. Comment l'obtenir dans les chambres des épreuves et ses utilisations pour la décoration d'armures.",
    category: "items",
    volume: 1000,
    content: {
      intro: "L'ornement de l'œil est un modèle de forge (armor trim) introduit dans Minecraft 1.21. Il permet de personnaliser l'apparence de vos armures avec un motif unique en forme d'œil. Cet item se trouve exclusivement dans les chambres des épreuves.",
      sections: [
        {
          heading: "Où trouver l'ornement de l'œil",
          content: "L'ornement de l'œil se trouve dans les coffres des chambres des épreuves (trial chambers), des structures souterraines ajoutées en 1.21. Ces structures se génèrent entre les couches -40 et -20. Cherchez des couloirs en cuivre et tuf pour identifier une chambre des épreuves."
        },
        {
          heading: "Comment appliquer l'ornement",
          content: "Pour appliquer l'ornement de l'œil à une pièce d'armure, utilisez une table de forge. Placez l'armure, l'ornement et un lingot de matériau (fer, or, cuivre, diamant, netherite, etc.) qui déterminera la couleur du motif. Chaque matériau donne une teinte différente au motif."
        },
        {
          heading: "Duplication de l'ornement",
          content: "Vous pouvez dupliquer l'ornement de l'œil sur une table de craft en combinant l'ornement original avec 7 diamants et un bloc de pierre. Cela vous permet de décorer toutes les pièces de votre armure sans avoir à trouver plusieurs exemplaires de cet item rare."
        }
      ],
      tips: [
        "Utilisez des matériaux différents pour varier la couleur du motif sur votre armure",
        "Dupliquez l'ornement pour personnaliser chaque pièce d'armure",
        "Les chambres des épreuves se trouvent entre les couches -40 et -20",
        "Combinez avec du quartz pour un motif blanc élégant"
      ],
      faq: [
        {
          question: "Peut-on trouver l'ornement de l'œil ailleurs que dans les chambres des épreuves ?",
          answer: "Non, l'ornement de l'œil est exclusif aux coffres des chambres des épreuves. C'est l'un des modèles de forge les plus récents ajoutés au jeu."
        },
        {
          question: "Comment changer la couleur du motif de l'ornement ?",
          answer: "La couleur dépend du matériau utilisé à la table de forge. Le fer donne un gris clair, l'or un jaune, le cuivre un orange, le diamant un cyan, et la netherite un gris foncé."
        }
      ],
      relatedSlugs: ["modele-de-forge", "chambre-epreuves", "cle-epreuves", "noyau-lourd", "coeur-de-grinceur"]
    }
  },
  {
    slug: "colorant-vert",
    keyword: "colorant vert minecraft",
    title: "Colorant Vert Minecraft : Fabrication",
    h1: "Comment Obtenir du Colorant Vert dans Minecraft",
    metaDescription: "Apprenez à fabriquer du colorant vert dans Minecraft. Cuisson de cactus, utilisations pour teindre laine, verre, armures en cuir et bien plus.",
    category: "items",
    volume: 880,
    content: {
      intro: "Le colorant vert est l'un des 16 colorants disponibles dans Minecraft. Il s'obtient uniquement par la cuisson de cactus dans un four. C'est un colorant de base qui peut aussi servir à créer d'autres couleurs comme le vert citron ou le cyan.",
      sections: [
        {
          heading: "Comment fabriquer du colorant vert",
          content: "Placez un cactus dans un four, un haut fourneau ou un fumoir avec du combustible. La cuisson transforme le cactus en colorant vert. Les cactus poussent naturellement dans les biomes désertiques et les badlands. Vous pouvez aussi les cultiver en les plantant sur du sable."
        },
        {
          heading: "Utilisations du colorant vert",
          content: "Le colorant vert permet de teindre la laine, le verre, la terre cuite, les bougies, le béton en poudre, les armures en cuir et les colliers de loup. Il peut aussi être appliqué directement sur des moutons pour teindre leur laine de façon permanente, ce qui est plus efficace pour la production de masse."
        },
        {
          heading: "Combinaisons de couleurs",
          content: "En combinant le colorant vert avec du colorant blanc, vous obtenez du colorant vert citron. En le mélangeant avec du colorant bleu, vous créez du colorant cyan. Ces mélanges fonctionnent sur la table de craft et permettent d'obtenir toute la palette de couleurs."
        },
        {
          heading: "Ferme automatique de cactus",
          content: "Construisez une ferme à cactus pour produire du colorant vert en masse. Empilez des cactus sur du sable avec des blocs adjacents qui cassent les cactus quand ils poussent. Collectez les items avec des entonnoirs et faites-les cuire automatiquement dans un système de fours."
        }
      ],
      tips: [
        "Teignez directement les moutons pour obtenir plus de laine colorée à chaque tonte",
        "Combinez avec du colorant blanc pour faire du vert citron",
        "Une ferme à cactus automatique fournit un stock illimité de colorant vert",
        "Les cactus ne poussent que sur du sable, avec aucun bloc adjacent"
      ],
      faq: [
        {
          question: "Peut-on obtenir du colorant vert autrement qu'avec un cactus ?",
          answer: "Non, la cuisson de cactus est le seul moyen d'obtenir du colorant vert dans Minecraft. C'est l'un des rares colorants qui nécessite un four pour être fabriqué."
        },
        {
          question: "Quelle est la différence entre colorant vert et teinture verte ?",
          answer: "Ce sont deux noms pour le même item. Depuis la version 1.14, tous les colorants ont été renommés et unifiés sous le terme 'colorant'. Colorant vert et teinture verte désignent le même objet."
        }
      ],
      relatedSlugs: ["colorant-noir", "colorant-blanc", "colorant-gris", "teinture-verte", "terre-cuite"]
    }
  },
  {
    slug: "colorant-noir",
    keyword: "colorant noir minecraft",
    title: "Colorant Noir Minecraft : Fabrication",
    h1: "Comment Obtenir du Colorant Noir dans Minecraft",
    metaDescription: "Guide complet pour obtenir du colorant noir dans Minecraft. Poche d'encre, Wither Rose et toutes les utilisations pour teindre vos objets.",
    category: "items",
    volume: 590,
    content: {
      intro: "Le colorant noir est un colorant de base essentiel dans Minecraft. Il s'obtient principalement à partir de poches d'encre lâchées par les poulpes. C'est un colorant polyvalent utilisé pour teindre de nombreux blocs et objets.",
      sections: [
        {
          heading: "Comment obtenir du colorant noir",
          content: "Le colorant noir s'obtient de deux manières : en plaçant une poche d'encre dans la grille de craft, ou en utilisant une Wither Rose. Les poches d'encre sont lâchées par les poulpes quand ils meurent (1 à 3 par poulpe). Les Wither Roses sont plus rares et apparaissent quand le Wither tue un mob."
        },
        {
          heading: "Utilisations principales",
          content: "Le colorant noir sert à teindre la laine, le verre, la terre cuite, le béton en poudre, les bougies et les armures en cuir en noir. Il est aussi utilisé pour créer du colorant gris (combiné avec du blanc) et du colorant gris clair. On l'utilise fréquemment en décoration pour les constructions modernes."
        },
        {
          heading: "Ferme à poulpes",
          content: "Pour un approvisionnement régulier, construisez une ferme à poulpes. Les poulpes apparaissent dans l'eau entre les couches Y 46 et Y 62 dans les biomes océaniques et rivières. Une ferme simple consiste en un bassin d'eau en hauteur avec un système de mise à mort et de collecte par entonnoirs."
        }
      ],
      tips: [
        "Les poulpes lâchent 1 à 3 poches d'encre à leur mort",
        "Une Wither Rose donne aussi un colorant noir mais elle est plus rare",
        "Combinez colorant noir et blanc pour obtenir du gris",
        "Teignez les moutons en noir pour une production de laine noire illimitée"
      ],
      faq: [
        {
          question: "Où trouver des poulpes dans Minecraft ?",
          answer: "Les poulpes apparaissent naturellement dans les océans et les rivières, entre les couches Y 46 et Y 62. Ils ont besoin d'eau pour spawn et sont assez courants dans ces biomes."
        },
        {
          question: "La Wither Rose est-elle un bon moyen d'obtenir du colorant noir ?",
          answer: "La Wither Rose fonctionne mais elle est très rare car elle n'apparaît que lorsque le Wither tue un mob. Les poches d'encre des poulpes sont bien plus accessibles et recommandées pour une production régulière."
        }
      ],
      relatedSlugs: ["colorant-vert", "colorant-blanc", "colorant-gris", "teinture-noire", "terre-cuite"]
    }
  },
  {
    slug: "colorant-blanc",
    keyword: "colorant blanc minecraft",
    title: "Colorant Blanc Minecraft : Fabrication",
    h1: "Comment Obtenir du Colorant Blanc dans Minecraft",
    metaDescription: "Découvrez comment obtenir du colorant blanc dans Minecraft. Poudre d'os, muguet et toutes les recettes de mélange avec le colorant blanc.",
    category: "items",
    volume: 390,
    content: {
      intro: "Le colorant blanc est un colorant de base indispensable dans Minecraft. Il sert non seulement à teindre des objets en blanc, mais aussi à éclaircir d'autres couleurs pour créer des variantes pastel. Il s'obtient facilement à partir de poudre d'os ou de muguet.",
      sections: [
        {
          heading: "Comment obtenir du colorant blanc",
          content: "Deux méthodes permettent de fabriquer du colorant blanc. La plus courante est de placer de la poudre d'os dans la grille de craft, ce qui donne un colorant blanc. Vous pouvez aussi utiliser un muguet (lily of the valley) que l'on trouve dans les biomes de forêt de fleurs."
        },
        {
          heading: "Mélanges de couleurs avec le blanc",
          content: "Le colorant blanc est essentiel pour créer des couleurs claires. Combiné avec du rouge, il donne du rose. Avec du bleu, il produit du bleu clair. Avec du noir, il crée du gris. Avec du vert, il fait du vert citron. C'est le colorant le plus utilisé dans les mélanges."
        },
        {
          heading: "Utilisations décoratives",
          content: "Utilisez le colorant blanc pour teindre la laine, le verre, la terre cuite, le béton en poudre et les bougies. Le béton blanc et le verre blanc sont très populaires dans les constructions modernes. Les armures en cuir blanches donnent un look clean et minimaliste."
        }
      ],
      tips: [
        "La poudre d'os est la source la plus simple et renouvelable de colorant blanc",
        "Utilisez un composteur pour transformer les déchets végétaux en poudre d'os",
        "Le muguet se trouve uniquement dans les biomes de forêt de fleurs",
        "Le colorant blanc est indispensable pour éclaircir toutes les autres couleurs"
      ],
      faq: [
        {
          question: "Comment obtenir beaucoup de colorant blanc rapidement ?",
          answer: "Construisez une ferme à squelettes pour obtenir de la poudre d'os en masse. Vous pouvez aussi utiliser un composteur avec des restes végétaux pour produire de la poudre d'os de manière renouvelable."
        },
        {
          question: "Quelles couleurs peut-on créer avec le colorant blanc ?",
          answer: "Le blanc peut être combiné avec presque toutes les couleurs : blanc + rouge = rose, blanc + bleu = bleu clair, blanc + noir = gris, blanc + vert = vert citron, blanc + magenta = rose pâle."
        }
      ],
      relatedSlugs: ["colorant-vert", "colorant-noir", "colorant-gris", "poudre-os", "teinture-blanche"]
    }
  },
  {
    slug: "colorant-gris",
    keyword: "colorant gris minecraft",
    title: "Colorant Gris Minecraft : Fabrication",
    h1: "Comment Obtenir du Colorant Gris dans Minecraft",
    metaDescription: "Comment fabriquer du colorant gris dans Minecraft. Recette de craft, utilisations et différence avec le colorant gris clair.",
    category: "items",
    volume: 260,
    content: {
      intro: "Le colorant gris est un colorant secondaire dans Minecraft obtenu en mélangeant du colorant noir et du colorant blanc. Il offre une teinte neutre et élégante, très prisée en décoration pour les constructions contemporaines et industrielles.",
      sections: [
        {
          heading: "Recette du colorant gris",
          content: "Pour fabriquer du colorant gris, placez un colorant noir et un colorant blanc côte à côte dans la grille de craft. Cela produit 2 colorants gris. Le colorant noir vient des poches d'encre et le blanc de la poudre d'os ou du muguet."
        },
        {
          heading: "Différence avec le gris clair",
          content: "Minecraft propose deux nuances de gris : le gris et le gris clair. Le gris clair s'obtient en combinant 1 colorant noir avec 2 colorants blancs, ou en utilisant certaines fleurs comme le trèfle blanc, la tulipe blanche ou la marguerite. Les deux nuances sont distinctes et ne sont pas interchangeables."
        },
        {
          heading: "Utilisations du colorant gris",
          content: "Le colorant gris teint la laine, le verre, la terre cuite, le béton en poudre, les bougies et les armures en cuir. Le béton gris et la terre cuite grise sont particulièrement appréciés pour les routes, les bâtiments modernes et les constructions en pierre stylisées."
        }
      ],
      tips: [
        "Combinez 1 colorant noir + 1 colorant blanc pour obtenir 2 colorants gris",
        "Le béton gris est excellent pour imiter l'asphalte dans vos constructions",
        "Ne confondez pas le colorant gris avec le gris clair, ce sont deux items différents",
        "Teignez un mouton en gris pour une source renouvelable de laine grise"
      ],
      faq: [
        {
          question: "Comment faire du gris clair dans Minecraft ?",
          answer: "Le colorant gris clair s'obtient en combinant 1 colorant noir avec 2 colorants blancs. On peut aussi utiliser directement des fleurs comme la marguerite, le trèfle blanc ou la tulipe blanche dans la grille de craft."
        },
        {
          question: "Peut-on trouver du colorant gris naturellement ?",
          answer: "Non, le colorant gris ne se trouve pas naturellement dans le jeu. Il doit être fabriqué en combinant un colorant noir et un colorant blanc sur la table de craft."
        }
      ],
      relatedSlugs: ["colorant-noir", "colorant-blanc", "colorant-vert", "terre-cuite", "teinture-noire"]
    }
  },
  {
    slug: "teinture-verte",
    keyword: "teinture verte minecraft",
    title: "Teinture Verte Minecraft : Guide",
    h1: "Comment Faire de la Teinture Verte dans Minecraft",
    metaDescription: "Guide complet pour fabriquer de la teinture verte dans Minecraft. Cuisson de cactus au four, utilisations et astuces de production en masse.",
    category: "items",
    volume: 480,
    content: {
      intro: "La teinture verte, aussi appelée colorant vert depuis la version 1.14, est obtenue en faisant cuire des cactus au four. C'est l'un des colorants de base qui ne peut pas être trouvé sous forme naturelle et nécessite obligatoirement une étape de cuisson.",
      sections: [
        {
          heading: "Fabrication de la teinture verte",
          content: "Placez un cactus dans un four avec du combustible pour obtenir un colorant vert. C'est la seule méthode de production. Les cactus se trouvent dans les déserts, les badlands et peuvent être cultivés sur du sable. Un cactus donne un colorant vert après cuisson."
        },
        {
          heading: "Culture de cactus pour production de masse",
          content: "Les cactus poussent automatiquement jusqu'à 3 blocs de hauteur sur du sable, à condition qu'aucun bloc ne soit adjacent. Pour une ferme automatique, placez des cactus sur du sable avec un bloc placé en diagonale au-dessus : le cactus cassera en poussant et tombera dans un entonnoir."
        },
        {
          heading: "Utilisations et mélanges",
          content: "La teinture verte sert à colorer la laine, le verre, la terre cuite, le béton et les armures en cuir. En la combinant avec du colorant blanc, on obtient du vert citron. Avec du bleu, on obtient du cyan. Le verre vert et le béton vert sont très utilisés en construction."
        }
      ],
      tips: [
        "Automatisez la cuisson avec des entonnoirs reliant la ferme aux fours",
        "Les cactus ne poussent pas si un bloc est directement adjacent",
        "Utilisez un haut fourneau pour cuire les cactus plus rapidement",
        "La teinture verte et le colorant vert sont le même objet depuis la 1.14"
      ],
      faq: [
        {
          question: "Peut-on obtenir de la teinture verte sans four ?",
          answer: "Non, la cuisson de cactus au four est le seul moyen d'obtenir de la teinture verte (colorant vert). Il n'existe aucune fleur ou plante qui donne directement cette couleur."
        },
        {
          question: "Teinture verte et colorant vert, quelle différence ?",
          answer: "Aucune différence. Depuis la mise à jour 1.14, les teintures ont été renommées en colorants. Teinture verte est l'ancien nom du colorant vert, mais les deux termes désignent le même objet."
        }
      ],
      relatedSlugs: ["colorant-vert", "colorant-noir", "colorant-blanc", "teinture-noire", "teinture-blanche"]
    }
  },
  {
    slug: "teinture-blanche",
    keyword: "teinture blanche minecraft",
    title: "Teinture Blanche Minecraft : Guide",
    h1: "Comment Faire de la Teinture Blanche dans Minecraft",
    metaDescription: "Fabriquez de la teinture blanche dans Minecraft avec de la poudre d'os ou du muguet. Guide complet avec utilisations et recettes de mélange.",
    category: "items",
    volume: 260,
    content: {
      intro: "La teinture blanche, désormais appelée colorant blanc, est l'un des colorants les plus utiles de Minecraft. Elle permet d'éclaircir d'autres couleurs et de teindre des objets en blanc pur. Sa fabrication est simple et les matériaux sont facilement accessibles.",
      sections: [
        {
          heading: "Comment fabriquer la teinture blanche",
          content: "Placez de la poudre d'os dans la grille de craft pour obtenir du colorant blanc. La poudre d'os s'obtient en craftant des os de squelettes ou via un composteur. Alternativement, le muguet (lily of the valley), une fleur des forêts de fleurs, donne aussi un colorant blanc."
        },
        {
          heading: "Mélanges avec la teinture blanche",
          content: "La teinture blanche est le colorant d'éclaircissement universel. Combinée avec du rouge, elle donne du rose. Avec du bleu, du bleu clair. Avec du noir, du gris. Avec du vert, du vert citron. C'est le colorant le plus polyvalent pour créer de nouvelles teintes."
        },
        {
          heading: "Applications décoratives",
          content: "Le blanc est une couleur de construction très prisée. Le béton blanc offre un rendu moderne et propre, le verre blanc permet des fenêtres élégantes et la laine blanche est la base de nombreux pixel arts. Les bougies blanches complètent les intérieurs minimalistes."
        }
      ],
      tips: [
        "Utilisez un composteur pour produire de la poudre d'os de façon renouvelable",
        "Le muguet ne pousse que dans le biome forêt de fleurs",
        "Teignez un mouton en blanc pour réinitialiser sa couleur à la normale",
        "Le béton blanc est le bloc le plus propre pour les constructions modernes"
      ],
      faq: [
        {
          question: "Où trouver du muguet dans Minecraft ?",
          answer: "Le muguet est une fleur exclusive au biome forêt de fleurs (flower forest). C'est une fleur blanche et petite qui pousse naturellement sur l'herbe de ce biome spécifique."
        },
        {
          question: "Teinture blanche et colorant blanc sont-ils le même objet ?",
          answer: "Oui, depuis la version 1.14 de Minecraft Java, les teintures ont été renommées en colorants. Teinture blanche et colorant blanc désignent exactement le même item."
        }
      ],
      relatedSlugs: ["colorant-blanc", "teinture-verte", "teinture-marron", "teinture-noire", "poudre-os"]
    }
  },
  {
    slug: "teinture-marron",
    keyword: "teinture marron minecraft",
    title: "Teinture Marron Minecraft : Guide",
    h1: "Comment Faire de la Teinture Marron dans Minecraft",
    metaDescription: "Obtenez de la teinture marron dans Minecraft avec des fèves de cacao. Guide complet de fabrication, localisation du cacao et utilisations.",
    category: "items",
    volume: 260,
    content: {
      intro: "La teinture marron, ou colorant marron, est obtenue à partir de fèves de cacao dans Minecraft. C'est l'un des colorants les plus difficiles à trouver car les fèves de cacao ne poussent que dans les biomes de jungle. Ce colorant donne une teinte bois chaleureuse aux objets.",
      sections: [
        {
          heading: "Comment obtenir de la teinture marron",
          content: "Placez une fève de cacao dans la grille de craft pour obtenir un colorant marron. Les fèves de cacao se trouvent naturellement sur les troncs d'arbres de la jungle. Vous pouvez aussi les cultiver en les plaçant sur des bûches de jungle, où elles passeront par 3 stades de croissance."
        },
        {
          heading: "Culture de fèves de cacao",
          content: "Les fèves de cacao se plantent sur n'importe quelle bûche de jungle. Elles passent par 3 stades de maturation. Au stade final, la récolte donne 3 fèves de cacao. Créez une ferme en plaçant des bûches de jungle horizontalement et en plantant les fèves sur les côtés pour un rendement optimal."
        },
        {
          heading: "Utilisations du colorant marron",
          content: "Le colorant marron sert à teindre la laine, le verre, la terre cuite, le béton en poudre, les bougies et les armures en cuir. Le béton marron et la terre cuite marron sont très utilisés pour les constructions en bois stylisées, les chemins de terre et les intérieurs chaleureux."
        }
      ],
      tips: [
        "Les fèves de cacao ne poussent que sur des bûches de jungle",
        "Récoltez les fèves au stade 3 pour obtenir 3 fèves au lieu d'une",
        "Cherchez les biomes de jungle si vous avez besoin de fèves de cacao",
        "Le colorant marron sert aussi à fabriquer des cookies avec du blé"
      ],
      faq: [
        {
          question: "Peut-on faire pousser du cacao hors de la jungle ?",
          answer: "Oui, tant que vous avez des bûches de jungle. Vous pouvez rapporter des bûches et des fèves de cacao dans votre base et créer une ferme n'importe où en posant les fèves sur les bûches de jungle."
        },
        {
          question: "Existe-t-il un autre moyen d'obtenir du colorant marron ?",
          answer: "Non, les fèves de cacao sont le seul moyen d'obtenir du colorant marron dans Minecraft. Il n'existe pas de fleur ou d'alternative pour cette couleur."
        }
      ],
      relatedSlugs: ["teinture-verte", "teinture-blanche", "teinture-noire", "teinture-orange", "colorant-vert"]
    }
  },
  {
    slug: "teinture-noire",
    keyword: "teinture noir minecraft",
    title: "Teinture Noire Minecraft : Guide",
    h1: "Comment Faire de la Teinture Noire dans Minecraft",
    metaDescription: "Guide pour fabriquer de la teinture noire dans Minecraft. Poches d'encre de poulpe, Wither Rose et toutes les utilisations du colorant noir.",
    category: "items",
    volume: 260,
    content: {
      intro: "La teinture noire, renommée colorant noir depuis la version 1.14, est un colorant de base obtenu à partir des poches d'encre de poulpe. C'est une couleur fondamentale pour la décoration et les mélanges de couleurs dans Minecraft.",
      sections: [
        {
          heading: "Sources de teinture noire",
          content: "La teinture noire provient principalement des poches d'encre lâchées par les poulpes (1 à 3 par poulpe). Une alternative est la Wither Rose, une fleur noire qui apparaît quand le Wither tue un mob. Les poulpes lumineux lâchent des poches d'encre lumineuses, qui ne font pas de colorant noir."
        },
        {
          heading: "Utilisations en décoration",
          content: "Le colorant noir est très populaire en construction. Le béton noir offre un look moderne et sophistiqué, le verre noir crée des fenêtres teintées élégantes et la laine noire est idéale pour les détails sombres. Combiné avec de la poudre à canon et du sable, il crée du béton en poudre noir."
        },
        {
          heading: "Mélanges de couleurs",
          content: "Le colorant noir permet de créer du gris (avec du blanc) et du gris clair (avec 2 blancs). Il assombrit aussi les couleurs existantes quand combiné avec elles. C'est un composant essentiel pour obtenir la gamme complète de couleurs en Minecraft."
        }
      ],
      tips: [
        "Les poulpes sont communs dans les océans et rivières, faciles à farmer",
        "Ne confondez pas les poches d'encre normales et lumineuses",
        "Le béton noir est le bloc le plus sombre du jeu, parfait pour les constructions modernes",
        "La Wither Rose inflige des dégâts de wither si vous marchez dessus"
      ],
      faq: [
        {
          question: "Les poulpes lumineux donnent-ils de la teinture noire ?",
          answer: "Non, les poulpes lumineux lâchent des poches d'encre lumineuses, pas des poches d'encre normales. Seuls les poulpes ordinaires donnent les poches d'encre utilisables pour le colorant noir."
        },
        {
          question: "Comment obtenir une Wither Rose ?",
          answer: "La Wither Rose apparaît au sol quand le Wither tue un mob non-mort. C'est un moyen très dangereux d'obtenir du colorant noir. Les poulpes restent la source recommandée."
        }
      ],
      relatedSlugs: ["colorant-noir", "teinture-verte", "teinture-blanche", "teinture-marron", "colorant-gris"]
    }
  },
  {
    slug: "teinture-orange",
    keyword: "teinture orange minecraft",
    title: "Teinture Orange Minecraft : Guide",
    h1: "Comment Faire de la Teinture Orange dans Minecraft",
    metaDescription: "Fabriquez de la teinture orange dans Minecraft. Tulipes oranges, mélange rouge et jaune, et toutes les utilisations du colorant orange.",
    category: "items",
    volume: 210,
    content: {
      intro: "La teinture orange, désormais colorant orange, est une couleur vive et chaleureuse dans Minecraft. Elle peut être obtenue de plusieurs façons : à partir de tulipes oranges, de fleurs de torchis ou en mélangeant du colorant rouge avec du jaune.",
      sections: [
        {
          heading: "Comment obtenir du colorant orange",
          content: "Trois méthodes existent pour fabriquer du colorant orange. Placez une tulipe orange dans la grille de craft pour un colorant orange direct. Vous pouvez aussi combiner un colorant rouge avec un colorant jaune. Enfin, la fleur de torchis (torchflower), ajoutée en 1.20, donne aussi un colorant orange."
        },
        {
          heading: "Où trouver les tulipes oranges",
          content: "Les tulipes oranges poussent naturellement dans les biomes de plaines fleuries et de forêts de fleurs. Elles peuvent aussi être obtenues en utilisant de la poudre d'os sur l'herbe dans ces biomes spécifiques. Récoltez-les et plantez-les chez vous pour un accès facile."
        },
        {
          heading: "Utilisations du colorant orange",
          content: "Le colorant orange sert à teindre tous les objets colorables : laine, verre, terre cuite, béton, bougies et armures en cuir. Le béton orange et la terre cuite orange sont populaires pour les constructions automnales, les toits et les décorations festives comme Halloween."
        }
      ],
      tips: [
        "Combinez du rouge et du jaune si vous n'avez pas de tulipes oranges",
        "La fleur de torchis (1.20+) est une nouvelle source de colorant orange",
        "Utilisez de la poudre d'os dans les plaines fleuries pour faire spawner des tulipes",
        "Le béton orange est idéal pour les constructions de style automnal"
      ],
      faq: [
        {
          question: "Comment obtenir une fleur de torchis ?",
          answer: "La fleur de torchis pousse à partir de graines de torchis, obtenues via l'archéologie en brossant du sable suspect. Plantez les graines sur des terres cultivées et attendez la croissance complète."
        },
        {
          question: "Quelles fleurs donnent du colorant orange ?",
          answer: "Deux fleurs donnent du colorant orange : la tulipe orange et la fleur de torchis (torchflower). Vous pouvez aussi mélanger du colorant rouge et jaune comme alternative."
        }
      ],
      relatedSlugs: ["teinture-verte", "teinture-blanche", "teinture-marron", "teinture-noire", "colorant-vert"]
    }
  },
  {
    slug: "terre-cuite",
    keyword: "terre cuite minecraft",
    title: "Terre Cuite Minecraft : Guide et Couleurs",
    h1: "La Terre Cuite dans Minecraft",
    metaDescription: "Guide complet de la terre cuite dans Minecraft. Fabrication, cuisson, toutes les couleurs disponibles et utilisations en construction.",
    category: "items",
    volume: 880,
    content: {
      intro: "La terre cuite est un bloc décoratif polyvalent dans Minecraft obtenu par la cuisson de blocs d'argile au four. Elle existe en 16 couleurs différentes et peut être émaillée pour créer des motifs uniques. C'est un matériau de construction très apprécié pour sa palette de couleurs chaudes.",
      sections: [
        {
          heading: "Comment fabriquer de la terre cuite",
          content: "Minez des blocs d'argile que l'on trouve au fond des rivières, lacs et océans peu profonds. Placez le bloc d'argile dans un four avec du combustible pour obtenir de la terre cuite. Un bloc d'argile donne un bloc de terre cuite. Vous pouvez aussi trouver de la terre cuite naturellement dans les biomes badlands."
        },
        {
          heading: "Teindre la terre cuite",
          content: "Pour colorer la terre cuite, placez 8 blocs de terre cuite autour d'un colorant dans la grille de craft 3x3. Cela donne 8 blocs de terre cuite colorée. Les 16 couleurs sont disponibles : blanc, orange, magenta, bleu clair, jaune, vert citron, rose, gris, gris clair, cyan, violet, bleu, marron, vert, rouge et noir."
        },
        {
          heading: "Terre cuite émaillée",
          content: "En cuisant de la terre cuite colorée au four, vous obtenez de la terre cuite émaillée avec un motif unique par couleur. Ces blocs ont des motifs décoratifs élaborés et peuvent être orientés dans 4 directions différentes lors de la pose, permettant de créer des mosaïques complexes."
        },
        {
          heading: "Où trouver la terre cuite naturellement",
          content: "Les biomes badlands (mesa) contiennent d'énormes quantités de terre cuite colorée naturelle. On y trouve de la terre cuite orange, jaune, marron, rouge, blanche et gris clair en abondance. Les maisons de villages des plaines et savanes contiennent aussi parfois de la terre cuite."
        }
      ],
      tips: [
        "Les badlands sont la meilleure source de terre cuite en grande quantité",
        "Utilisez un Toucher de soie pour récolter les blocs d'argile entiers",
        "La terre cuite émaillée ne peut pas être poussée par des pistons",
        "8 blocs de terre cuite + 1 colorant = 8 blocs colorés",
        "Orientez la terre cuite émaillée pour créer des motifs complexes"
      ],
      faq: [
        {
          question: "Où trouver de l'argile facilement ?",
          answer: "L'argile se trouve au fond des rivières, des lacs et des océans peu profonds. Les biomes de mangrove en contiennent aussi beaucoup. Les blocs d'argile ont une couleur gris-bleu distinctive facile à repérer sous l'eau."
        },
        {
          question: "Quelle est la différence entre terre cuite et terre cuite émaillée ?",
          answer: "La terre cuite est un bloc uni coloré, tandis que la terre cuite émaillée possède un motif décoratif complexe. La terre cuite émaillée s'obtient en cuisant de la terre cuite colorée au four une seconde fois."
        },
        {
          question: "Peut-on teindre la terre cuite émaillée ?",
          answer: "Non, la terre cuite émaillée ne peut pas être reteinte. Chaque couleur a son propre motif fixe. Pour changer de motif, vous devez utiliser une terre cuite d'une couleur différente."
        }
      ],
      relatedSlugs: ["colorant-vert", "colorant-noir", "colorant-blanc", "pierre-taillee", "brique-terre-crue"]
    }
  },
  {
    slug: "pierre-taillee",
    keyword: "pierre taillée minecraft",
    title: "Pierre Taillée Minecraft : Guide Complet",
    h1: "La Pierre Taillée dans Minecraft",
    metaDescription: "Tout savoir sur la pierre taillée dans Minecraft. Fabrication par cuisson, variantes (moussue, craquelée, sculptée) et utilisations en construction.",
    category: "items",
    volume: 1000,
    content: {
      intro: "La pierre taillée (stone bricks) est un bloc de construction emblématique de Minecraft. Elle se décline en plusieurs variantes : normale, moussue, craquelée et sculptée. On la trouve naturellement dans les forteresses et les igloos, et elle reste un matériau de choix pour les constructions médiévales.",
      sections: [
        {
          heading: "Comment fabriquer de la pierre taillée",
          content: "Placez 4 blocs de pierre (stone) en carré dans la grille de craft 2x2 pour obtenir 4 pierres taillées. La pierre s'obtient en cuisant de la roche (cobblestone) au four. Vous pouvez aussi utiliser un tailleur de pierre pour convertir directement la pierre en variantes de pierre taillée."
        },
        {
          heading: "Variantes de la pierre taillée",
          content: "La pierre taillée moussue se craft en combinant de la pierre taillée avec de la mousse ou du lierre. La pierre taillée craquelée s'obtient en cuisant de la pierre taillée au four. La pierre taillée sculptée se fabrique en empilant 2 dalles de pierre taillée. Chaque variante a une texture unique."
        },
        {
          heading: "Où trouver la pierre taillée naturellement",
          content: "Les forteresses (strongholds) sont principalement construites en pierre taillée et ses variantes. Les ruines sous-marines contiennent de la pierre taillée. Les igloos possèdent un sous-sol en pierre taillée. Les villages des plaines utilisent aussi parfois ce matériau."
        },
        {
          heading: "Utilisations en construction",
          content: "La pierre taillée se décline en escaliers, dalles et murets. Elle est idéale pour les châteaux, forteresses, cathédrales et constructions médiévales. Alternez les variantes (normale, moussue, craquelée) pour donner un aspect vieilli et réaliste à vos bâtiments."
        }
      ],
      tips: [
        "Utilisez le tailleur de pierre pour un craft plus efficace des variantes",
        "Mélangez les variantes pour un look plus réaliste et organique",
        "Les infestées (silverfish) ressemblent à de la pierre taillée normale, attention dans les forteresses",
        "La pierre taillée moussue se fait avec de la mousse ou du lierre",
        "Cuire de la pierre taillée au four donne la variante craquelée"
      ],
      faq: [
        {
          question: "Quelle est la différence entre pierre et pierre taillée ?",
          answer: "La pierre (stone) est le bloc brut obtenu en cuisant de la roche. La pierre taillée (stone bricks) est un bloc décoratif fabriqué en combinant 4 pierres en carré. La pierre taillée a une texture plus travaillée et élégante."
        },
        {
          question: "Comment repérer les pierres taillées infestées ?",
          answer: "Les pierres taillées infestées se cassent plus vite que la normale et libèrent un silverfish. On les trouve principalement dans les forteresses. Elles n'ont aucune indication visuelle, seule la vitesse de minage les trahit."
        }
      ],
      relatedSlugs: ["roche-lisse", "pierre-mousse", "dalle-pierre-lisse", "terre-cuite", "pierre-lumineuse"]
    }
  },
  {
    slug: "roche-lisse",
    keyword: "roche lisse minecraft",
    title: "Roche Lisse Minecraft : Guide",
    h1: "La Roche Lisse dans Minecraft",
    metaDescription: "Comment obtenir de la roche lisse dans Minecraft. Double cuisson au four, utilisations en construction et différence avec la pierre normale.",
    category: "items",
    volume: 590,
    content: {
      intro: "La roche lisse (smooth stone) est un bloc élégant obtenu par la double cuisson de la roche au four. Sa texture uniforme et propre en fait un matériau de construction très prisé pour les sols, les comptoirs et les bâtiments modernes dans Minecraft.",
      sections: [
        {
          heading: "Comment fabriquer de la roche lisse",
          content: "La roche lisse nécessite deux cuissons successives. D'abord, cuisez de la roche (cobblestone) au four pour obtenir de la pierre (stone). Ensuite, recuisez cette pierre au four pour obtenir de la roche lisse. Le processus demande deux fois plus de combustible mais le résultat est un bloc à la texture très propre."
        },
        {
          heading: "Utilisations en construction",
          content: "La roche lisse est utilisable en dalles (slabs) via le tailleur de pierre. Les dalles de roche lisse sont populaires pour les sols modernes, les comptoirs de cuisine et les chemins. Le bloc entier est idéal pour les murs minimalistes. C'est aussi un composant de la recette du haut fourneau."
        },
        {
          heading: "Recette du haut fourneau",
          content: "La roche lisse est un ingrédient essentiel du haut fourneau. Placez 5 lingots de fer en U, 1 four au centre et 3 roches lisses en bas de la grille de craft. Le haut fourneau fond les minerais deux fois plus vite qu'un four normal, ce qui rentabilise la production de roche lisse."
        }
      ],
      tips: [
        "Utilisez un haut fourneau pour accélérer la production de roche lisse",
        "Les dalles de roche lisse sont parmi les plus populaires en construction",
        "Minez la roche avec Toucher de soie pour sauter l'étape cobblestone",
        "La roche lisse est nécessaire pour crafter un haut fourneau"
      ],
      faq: [
        {
          question: "Quelle est la différence entre pierre, roche et roche lisse ?",
          answer: "La roche (cobblestone) est le bloc brut que l'on mine. La pierre (stone) est obtenue en cuisant la roche. La roche lisse (smooth stone) est obtenue en recuisant la pierre. Chaque étape donne un bloc plus lisse et plus propre."
        },
        {
          question: "Peut-on faire des escaliers en roche lisse ?",
          answer: "Non, la roche lisse ne se décline qu'en dalles (slabs), pas en escaliers ni en murets. Pour des escaliers de pierre, utilisez la pierre taillée ou la roche ordinaire."
        }
      ],
      relatedSlugs: ["pierre-taillee", "dalle-pierre-lisse", "pierre-mousse", "pierre-lumineuse", "terre-cuite"]
    }
  },
  {
    slug: "pierre-mousse",
    keyword: "pierre en mousse minecraft",
    title: "Pierre en Mousse Minecraft : Guide",
    h1: "La Pierre en Mousse dans Minecraft",
    metaDescription: "Guide complet sur la pierre en mousse dans Minecraft. Comment l'obtenir avec de la mousse ou du lierre, et ses utilisations en construction.",
    category: "items",
    volume: 590,
    content: {
      intro: "La roche moussue (mossy cobblestone) et la pierre taillée moussue sont des variantes décoratives recouvertes de mousse verte. Elles donnent un aspect ancien et abandonné aux constructions. On les trouve naturellement dans les donjons, les forêts de méga taïga et les villages en ruine.",
      sections: [
        {
          heading: "Comment fabriquer de la pierre moussue",
          content: "Combinez un bloc de roche (cobblestone) avec de la mousse (moss block) ou du lierre (vines) dans la grille de craft pour obtenir de la roche moussue. De même, combinez de la pierre taillée avec de la mousse ou du lierre pour obtenir de la pierre taillée moussue. Les deux recettes fonctionnent."
        },
        {
          heading: "Où trouver la pierre moussue naturellement",
          content: "La roche moussue se génère dans les donjons souterrains, les forêts de méga taïga (au sol entre les arbres), les villages en ruine et les puits de mine abandonnés. La pierre taillée moussue se trouve dans les forteresses. Les ruines sous-marines peuvent aussi en contenir."
        },
        {
          heading: "Utilisations en construction",
          content: "La pierre moussue est parfaite pour les constructions médiévales, les ruines et les chemins de jardin. Alternez-la avec de la roche normale pour un rendu organique. Elle se décline en escaliers, dalles et murets via le tailleur de pierre, offrant une grande flexibilité en construction."
        },
        {
          heading: "Obtenir de la mousse et du lierre",
          content: "La mousse se trouve dans les grottes luxuriantes et peut se propager en utilisant de la poudre d'os sur un bloc de mousse. Le lierre pousse sur les arbres de jungle et les chênes noirs. Vous pouvez aussi acheter de la mousse auprès de villageois errants pour 1 émeraude."
        }
      ],
      tips: [
        "Mélangez roche moussue et roche normale pour un aspect ruine réaliste",
        "Le lierre et la mousse fonctionnent tous les deux pour la recette",
        "Utilisez le tailleur de pierre pour fabriquer escaliers et dalles moussues",
        "La mousse se propage avec de la poudre d'os sur les blocs adjacents"
      ],
      faq: [
        {
          question: "Quelle est la différence entre roche moussue et pierre taillée moussue ?",
          answer: "La roche moussue est de la cobblestone recouverte de mousse, tandis que la pierre taillée moussue est de la stone bricks recouverte de mousse. Les deux ont des textures différentes et s'obtiennent en ajoutant de la mousse ou du lierre au bloc de base."
        },
        {
          question: "Où trouver du lierre facilement ?",
          answer: "Le lierre pousse abondamment dans les biomes de jungle, sur les arbres et les falaises. Il pousse aussi sur les chênes noirs dans les marais. Utilisez des cisailles pour le récolter intégralement."
        }
      ],
      relatedSlugs: ["pierre-taillee", "roche-lisse", "dalle-pierre-lisse", "terre-cuite", "pierre-lumineuse"]
    }
  },
  {
    slug: "pierre-lumineuse",
    keyword: "pierre lumineuse minecraft",
    title: "Pierre Lumineuse Minecraft : Guide",
    h1: "La Pierre Lumineuse dans Minecraft",
    metaDescription: "Tout savoir sur la pierre lumineuse (glowstone) dans Minecraft. Où la trouver au Nether, fabrication et utilisations comme source de lumière.",
    category: "items",
    volume: 210,
    content: {
      intro: "La pierre lumineuse (glowstone) est un bloc lumineux que l'on trouve exclusivement dans le Nether. Elle émet un niveau de lumière de 15, le maximum possible, et constitue l'une des meilleures sources d'éclairage du jeu. Elle sert aussi en alchimie pour renforcer les potions.",
      sections: [
        {
          heading: "Où trouver la pierre lumineuse",
          content: "La pierre lumineuse se génère en grappes au plafond du Nether, dans tous les biomes. Elle forme des amas qui ressemblent à des stalactites brillantes. Miner un bloc de pierre lumineuse sans Toucher de soie donne 2 à 4 poudres de pierre lumineuse. Avec Toucher de soie, vous récupérez le bloc entier."
        },
        {
          heading: "Fabrication et reconstitution",
          content: "Si vous n'avez pas Toucher de soie, vous pouvez reconstituer un bloc de pierre lumineuse en plaçant 4 poudres de glowstone en carré dans la grille de craft. Les sorcières lâchent parfois de la poudre de glowstone. Les villageois clercs en vendent aussi."
        },
        {
          heading: "Utilisations principales",
          content: "La pierre lumineuse éclaire avec un niveau de 15, identique à la lumière du soleil. Elle est utilisable sous l'eau contrairement aux torches. En alchimie, la poudre de glowstone renforce les potions (augmente leur niveau) mais réduit la durée. C'est aussi un bloc décoratif apprécié pour les sols lumineux."
        }
      ],
      tips: [
        "Utilisez Toucher de soie pour récolter les blocs entiers sans perte",
        "La poudre de glowstone renforce les potions au niveau II",
        "La pierre lumineuse fonctionne sous l'eau, contrairement aux torches",
        "Les villageois clercs vendent de la poudre de glowstone"
      ],
      faq: [
        {
          question: "Quel est le niveau de lumière de la pierre lumineuse ?",
          answer: "La pierre lumineuse émet un niveau de lumière de 15, le maximum possible dans Minecraft. C'est le même niveau que la lumière du soleil, les lanternes et les torches."
        },
        {
          question: "Peut-on obtenir de la pierre lumineuse sans aller au Nether ?",
          answer: "Oui, en achetant de la poudre de glowstone aux villageois clercs et en la recombinant en blocs. Les sorcières peuvent aussi lâcher de la poudre de glowstone à leur mort."
        }
      ],
      relatedSlugs: ["baie-lumineuse", "bloc-lumineux", "lampe", "lanterne-cuivre", "etoile-nether"]
    }
  },
  {
    slug: "verre-teinte",
    keyword: "verre teinté minecraft",
    title: "Verre Teinté Minecraft : Craft et Couleurs",
    h1: "Le Verre Teinté dans Minecraft",
    metaDescription: "Guide du verre teinté dans Minecraft. Recette de craft avec les éclats d'améthyste, propriétés uniques et différences avec le verre coloré.",
    category: "items",
    volume: 260,
    content: {
      intro: "Le verre teinté est un bloc spécial ajouté en 1.17 qui bloque la lumière tout en restant transparent visuellement. Contrairement au verre coloré classique, il ne laisse pas passer la lumière et se récupère sans Toucher de soie. C'est un outil de construction unique et polyvalent.",
      sections: [
        {
          heading: "Recette du verre teinté",
          content: "Placez 4 éclats d'améthyste autour d'un bloc de verre dans la grille de craft (en croix) pour obtenir 2 blocs de verre teinté. Les éclats d'améthyste s'obtiennent en minant des amas d'améthyste dans les géodes souterraines avec une pioche en fer ou mieux."
        },
        {
          heading: "Propriétés uniques",
          content: "Le verre teinté a deux propriétés remarquables. Premièrement, il bloque complètement la lumière avec un niveau d'opacité total, contrairement au verre normal. Deuxièmement, il se récupère intégralement quand cassé, sans besoin de Toucher de soie. Il a une teinte gris foncé translucide."
        },
        {
          heading: "Différence avec le verre coloré",
          content: "Le verre coloré (stained glass) est du verre normal teint avec un colorant. Il laisse passer la lumière et nécessite Toucher de soie pour être récupéré. Le verre teinté, lui, bloque la lumière et se récupère sans enchantement. Les deux servent des usages très différents en construction."
        },
        {
          heading: "Utilisations pratiques",
          content: "Le verre teinté est parfait pour créer des pièces sombres avec des fenêtres, des zones de spawning de mobs contrôlées, ou des displays sans fuite de lumière. Il est aussi utilisé dans les fermes à mobs pour laisser voir l'intérieur sans empêcher le spawn des créatures."
        }
      ],
      tips: [
        "Le verre teinté se récupère sans Toucher de soie, ce qui le rend très pratique",
        "Utilisez-le pour bloquer la lumière dans vos fermes à mobs",
        "Les géodes d'améthyste se trouvent entre les couches -64 et 30",
        "2 blocs de verre teinté par craft, c'est moins économique que le verre coloré"
      ],
      faq: [
        {
          question: "Le verre teinté laisse-t-il passer la lumière ?",
          answer: "Non, le verre teinté bloque complètement la lumière, contrairement au verre normal et au verre coloré. C'est sa propriété principale et ce qui le distingue des autres types de verre."
        },
        {
          question: "Faut-il Toucher de soie pour récupérer le verre teinté ?",
          answer: "Non, le verre teinté se récupère intégralement quand vous le cassez, sans aucun enchantement nécessaire. C'est le seul type de verre avec cette propriété."
        }
      ],
      relatedSlugs: ["eclat-amethyste", "pierre-lumineuse", "bloc-lumineux", "terre-cuite", "lampe"]
    }
  },
  {
    slug: "salle-des-coffres",
    keyword: "salle des coffres minecraft",
    title: "Salle des Coffres Minecraft : Guide",
    h1: "La Salle des Coffres dans Minecraft",
    metaDescription: "Guide complet de la salle des coffres dans Minecraft. Comment la trouver dans les chambres des épreuves, butin disponible et stratégies d'exploration.",
    category: "items",
    volume: 1000,
    content: {
      intro: "La salle des coffres est une pièce spéciale que l'on trouve dans les chambres des épreuves (trial chambers) de Minecraft 1.21. Elle contient des coffres de récompense avec du butin rare après avoir complété les défis des spawners d'épreuves. C'est l'objectif principal de l'exploration de ces structures.",
      sections: [
        {
          heading: "Localisation de la salle des coffres",
          content: "La salle des coffres se situe dans les chambres des épreuves, des structures souterraines qui se génèrent entre les couches -40 et -20. Cherchez du cuivre oxydé et du tuf pour identifier l'entrée. La salle des coffres est généralement au centre ou à la fin de la structure, après avoir traversé plusieurs salles de combat."
        },
        {
          heading: "Coffres de récompense",
          content: "Les coffres dans la salle sont des coffres de récompense (vault blocks) qui s'ouvrent avec des clés d'épreuves obtenues en battant les mobs des spawners. Chaque joueur peut ouvrir un coffre une seule fois, ce qui rend le contenu unique par joueur. Les coffres contiennent des objets rares comme des modèles de forge et des enchantements."
        },
        {
          heading: "Butin possible",
          content: "Les coffres de récompense peuvent contenir des modèles de forge exclusifs, des lingots et blocs précieux, des enchantements rares, des pommes dorées enchantées et des objets exclusifs aux chambres des épreuves. Le butin varie selon le type de coffre (normal ou omineux)."
        },
        {
          heading: "Stratégies d'exploration",
          content: "Préparez-vous bien avant d'explorer : apportez une bonne armure, de la nourriture abondante et des potions de soin. Les salles de combat peuvent invoquer de nombreux mobs. Marquez les passages déjà explorés avec des torches. Gardez vos clés d'épreuves pour les coffres les plus rares."
        }
      ],
      tips: [
        "Chaque coffre de récompense ne peut être ouvert qu'une fois par joueur",
        "Apportez de la nourriture et des potions de soin en grande quantité",
        "Les clés d'épreuves s'obtiennent en battant les mobs des spawners",
        "Explorez en multijoueur pour que chaque joueur obtienne son propre butin",
        "Les coffres omineux contiennent un butin encore meilleur"
      ],
      faq: [
        {
          question: "Comment trouver les chambres des épreuves ?",
          answer: "Les chambres des épreuves se génèrent sous terre entre les couches -40 et -20. Cherchez du cuivre oxydé et du tuf lors de vos explorations souterraines. Vous pouvez aussi utiliser la commande /locate structure trial_chambers."
        },
        {
          question: "Peut-on rouvrir un coffre de récompense déjà ouvert ?",
          answer: "Non, chaque coffre de récompense ne peut être ouvert qu'une seule fois par joueur. En multijoueur, chaque joueur peut ouvrir le même coffre pour obtenir son propre butin, mais un joueur ne peut pas l'ouvrir deux fois."
        },
        {
          question: "Qu'est-ce qu'un coffre omineux ?",
          answer: "Les coffres omineux sont une variante rare des coffres de récompense qui contiennent un butin supérieur. Ils nécessitent des clés d'épreuves omineux, obtenues en affrontant les spawners sous l'effet d'un mauvais présage."
        }
      ],
      relatedSlugs: ["chambre-epreuves", "cle-epreuves", "coeur-de-grinceur", "noyau-lourd", "ornement-oeil"]
    }
  },
  {
    slug: "modele-de-forge",
    keyword: "modèle de forge minecraft",
    title: "Modèle de Forge Minecraft : Guide Complet",
    h1: "Le Modèle de Forge dans Minecraft",
    metaDescription: "Tous les modèles de forge dans Minecraft. Comment les trouver, les dupliquer et personnaliser vos armures avec des motifs uniques.",
    category: "items",
    volume: 1000,
    content: {
      intro: "Les modèles de forge (armor trims) sont des items ajoutés en 1.20 qui permettent de personnaliser l'apparence de vos armures. Il existe plus de 16 modèles différents, chacun trouvable dans une structure spécifique. Combinés avec différents matériaux, ils offrent des dizaines de combinaisons visuelles.",
      sections: [
        {
          heading: "Comment utiliser un modèle de forge",
          content: "Utilisez une table de forge (smithing table) pour appliquer un modèle. Placez le modèle de forge, la pièce d'armure et un matériau de couleur (lingot de fer, d'or, de cuivre, diamant, etc.) dans les emplacements. Le matériau choisi détermine la couleur du motif sur l'armure."
        },
        {
          heading: "Liste des modèles et leurs structures",
          content: "Chaque modèle est associé à une structure : Coast (épave), Dune (temple du désert), Eye (chambre des épreuves), Host (chambre des épreuves), Raiser (chambre des épreuves), Rib (forteresse du Nether), Sentry (pillager outpost), Shaper (cité antique), Silence (cité antique), Snout (bastion), Spire (cité de l'End), Tide (monument), Vex (manoir), Ward (cité antique), Wayfinder (chambre des épreuves), Wild (temple de la jungle)."
        },
        {
          heading: "Dupliquer les modèles de forge",
          content: "Chaque modèle peut être dupliqué sur la table de craft en combinant le modèle original avec 7 diamants et un bloc spécifique qui varie selon le modèle. Cela permet de décorer toutes vos pièces d'armure sans devoir chercher plusieurs exemplaires du même modèle."
        },
        {
          heading: "Matériaux de couleur",
          content: "Le fer donne un gris argenté, l'or un jaune doré, le cuivre un orange, le diamant un bleu cyan, la netherite un gris sombre, le quartz un blanc, le lapis un bleu foncé, l'émeraude un vert et l'améthyste un violet. Chaque combinaison modèle + matériau crée un look unique."
        }
      ],
      tips: [
        "Dupliquez vos modèles avec 7 diamants pour équiper une armure complète",
        "Essayez différents matériaux pour trouver la combinaison de couleurs parfaite",
        "Les modèles les plus rares viennent des cités antiques et des bastions",
        "La netherite donne le motif le plus sombre et le plus discret",
        "Vous pouvez appliquer un modèle sur n'importe quel type d'armure"
      ],
      faq: [
        {
          question: "Combien de modèles de forge existent dans Minecraft ?",
          answer: "Il existe plus de 16 modèles de forge différents, chacun trouvable dans une structure spécifique du monde. La mise à jour 1.21 en a ajouté plusieurs nouveaux dans les chambres des épreuves."
        },
        {
          question: "Les modèles de forge changent-ils les stats de l'armure ?",
          answer: "Non, les modèles de forge sont purement cosmétiques. Ils ne modifient pas les statistiques de protection de l'armure. Seul l'aspect visuel est changé."
        },
        {
          question: "Peut-on retirer un modèle une fois appliqué ?",
          answer: "Non, une fois un modèle appliqué à une pièce d'armure, il ne peut pas être retiré. Vous pouvez cependant le remplacer par un autre modèle en utilisant à nouveau la table de forge."
        }
      ],
      relatedSlugs: ["ornement-oeil", "chambre-epreuves", "noyau-lourd", "etoile-nether", "livre-enchante"]
    }
  },
  {
    slug: "code-couleur",
    keyword: "code couleur minecraft",
    title: "Code Couleur Minecraft : Tous les Codes",
    h1: "Tous les Codes Couleur dans Minecraft",
    metaDescription: "Liste complète des codes couleur Minecraft pour le chat, les pancartes et les livres. Codes avec le symbole § et codes de formatage.",
    category: "items",
    volume: 1000,
    content: {
      intro: "Les codes couleur Minecraft permettent de personnaliser la couleur du texte dans le chat, sur les pancartes, dans les livres et via les commandes. Ils utilisent le symbole § suivi d'un caractère pour définir la couleur ou le style du texte. Ces codes sont essentiels pour la personnalisation de serveurs.",
      sections: [
        {
          heading: "Liste des codes couleur",
          content: "Voici tous les codes : §0 Noir, §1 Bleu foncé, §2 Vert foncé, §3 Cyan foncé, §4 Rouge foncé, §5 Violet, §6 Or, §7 Gris, §8 Gris foncé, §9 Bleu, §a Vert, §b Cyan, §c Rouge, §d Rose, §e Jaune, §f Blanc. Chaque code change la couleur de tout le texte qui suit jusqu'au prochain code."
        },
        {
          heading: "Codes de formatage",
          content: "En plus des couleurs, Minecraft propose des codes de formatage : §k Texte obfusqué (caractères aléatoires), §l Gras, §m Barré, §n Souligné, §o Italique, §r Reset (réinitialise la couleur et le formatage). Ces codes peuvent être combinés avec les codes couleur."
        },
        {
          heading: "Utilisation sur les serveurs",
          content: "Sur les serveurs Minecraft, les codes couleur sont souvent utilisés avec le symbole & au lieu de § dans les fichiers de configuration et les plugins. Les plugins comme EssentialsX convertissent automatiquement &6 en §6 (or). C'est la méthode standard pour colorer les messages, rangs et noms."
        },
        {
          heading: "Utilisation dans les commandes",
          content: "Dans les commandes /tellraw et /title, utilisez le format JSON avec la propriété 'color' au lieu du symbole §. Par exemple : /tellraw @a {\"text\":\"Bonjour\",\"color\":\"gold\"}. Les couleurs acceptées sont : black, dark_blue, dark_green, dark_aqua, dark_red, dark_purple, gold, gray, dark_gray, blue, green, aqua, red, light_purple, yellow, white."
        }
      ],
      tips: [
        "Utilisez & au lieu de § dans les configurations de serveur et plugins",
        "Le code §r réinitialise toute mise en forme et couleur",
        "En Bedrock, le § peut être tapé directement dans les pancartes et le chat",
        "Combinez couleur et formatage : §6§l pour du texte doré en gras",
        "Les commandes JSON (/tellraw) utilisent les noms de couleurs en anglais"
      ],
      faq: [
        {
          question: "Comment taper le symbole § dans Minecraft ?",
          answer: "En Java, utilisez Alt+0167 sur le pavé numérique (Windows) ou Option+6 (Mac). En Bedrock, le § est accessible directement sur le clavier. Sur serveur, utilisez & qui est converti automatiquement par les plugins."
        },
        {
          question: "Les codes couleur fonctionnent-ils dans le chat vanilla ?",
          answer: "En Java vanilla, les codes couleur avec § ne fonctionnent pas directement dans le chat. Il faut utiliser /tellraw avec le format JSON. En Bedrock, le § fonctionne directement dans le chat et sur les pancartes."
        },
        {
          question: "Peut-on utiliser des couleurs personnalisées ?",
          answer: "En Java 1.16+, les commandes JSON supportent les codes hexadécimaux avec le format #RRGGBB, permettant des millions de couleurs personnalisées. Par exemple : {\"text\":\"Texte\",\"color\":\"#FF5733\"}."
        }
      ],
      relatedSlugs: ["livre-enchante", "motif-banniere", "lampe", "modele-de-forge", "terre-cuite"]
    }
  },
  {
    slug: "lampe",
    keyword: "lampe dans minecraft",
    title: "Lampe Minecraft : Tous les Types d'Éclairage",
    h1: "Les Lampes et Éclairages dans Minecraft",
    metaDescription: "Guide complet des lampes et sources de lumière dans Minecraft. Lampe de redstone, lanternes, torches, bougies et tous les blocs lumineux.",
    category: "items",
    volume: 1600,
    content: {
      intro: "L'éclairage est fondamental dans Minecraft, tant pour la décoration que pour empêcher les mobs hostiles d'apparaître. Le jeu propose de nombreuses sources de lumière, de la simple torche à la lampe de redstone sophistiquée. Voici un guide complet de toutes les options d'éclairage disponibles.",
      sections: [
        {
          heading: "La lampe de redstone",
          content: "La lampe de redstone se craft avec 1 pierre lumineuse entourée de 4 redstone. Elle émet un niveau de lumière de 15 quand activée par un signal redstone et s'éteint sans signal. C'est la seule source de lumière contrôlable, idéale pour les systèmes automatiques et les constructions interactives."
        },
        {
          heading: "Torches et lanternes",
          content: "La torche émet un niveau de lumière de 14 et se craft avec un charbon + un bâton. La lanterne, plus décorative, émet un niveau 15 et se fabrique avec 8 pépites de fer + 1 torche. La torche de l'âme et la lanterne de l'âme émettent un niveau 10 avec une lumière bleutée, suffisante pour empêcher le spawn de mobs."
        },
        {
          heading: "Bougies et sources décoratives",
          content: "Les bougies, ajoutées en 1.17, émettent un niveau de lumière de 3 par bougie (jusqu'à 4 par bloc, soit niveau 12). Les baies lumineuses émettent un niveau 14. Le bloc de la mer émet un niveau 15. Le lichen lumineux émet un niveau 7. Chaque source a son esthétique propre pour varier les ambiances."
        },
        {
          heading: "Niveaux de lumière et spawn de mobs",
          content: "Les mobs hostiles apparaissent quand le niveau de lumière est de 0 (depuis la 1.18). Auparavant, le seuil était de 7. Toute source de lumière empêche donc le spawn dans un rayon qui dépend de son intensité. Placez des torches tous les 12 blocs pour sécuriser une zone."
        },
        {
          heading: "Sources de lumière sous-marines",
          content: "Sous l'eau, les torches ne fonctionnent pas. Utilisez plutôt la pierre lumineuse, les lanternes marines, le lichen lumineux ou les conduits. La lanterne marine se craft avec des prismarines et est spécialement conçue pour l'éclairage sous-marin."
        }
      ],
      tips: [
        "Les lanternes émettent plus de lumière (15) que les torches (14)",
        "Depuis la 1.18, les mobs ne spawnent qu'au niveau de lumière 0",
        "La lampe de redstone est la seule source de lumière activable/désactivable",
        "Sous l'eau, utilisez la pierre lumineuse ou les lanternes marines",
        "Les bougies sont empilables jusqu'à 4 par bloc pour plus de lumière"
      ],
      faq: [
        {
          question: "Quelle est la source de lumière la plus puissante ?",
          answer: "Plusieurs sources émettent le niveau maximum de 15 : la pierre lumineuse, la lanterne, le bloc de la mer, la lampe de redstone (activée), le feu de camp et la lanterne des âmes lumineuse. Les torches émettent 14."
        },
        {
          question: "Comment empêcher les mobs de spawn dans ma base ?",
          answer: "Depuis la 1.18, les mobs hostiles ne spawnent qu'au niveau de lumière 0. Il suffit de placer des torches ou lanternes tous les 12 blocs environ pour maintenir un niveau de lumière supérieur à 0 partout."
        },
        {
          question: "Comment crafter une lampe de redstone ?",
          answer: "Placez 1 pierre lumineuse au centre de la grille 3x3 et 4 redstone en croix autour. La lampe s'allume uniquement quand elle reçoit un signal redstone d'un levier, bouton ou circuit."
        }
      ],
      relatedSlugs: ["lanterne-cuivre", "baie-lumineuse", "bloc-lumineux", "pierre-lumineuse", "verre-teinte"]
    }
  },
  {
    slug: "lanterne-cuivre",
    keyword: "lanterne en cuivre minecraft",
    title: "Lanterne en Cuivre Minecraft : Guide",
    h1: "La Lanterne en Cuivre dans Minecraft",
    metaDescription: "Guide complet de la lanterne en cuivre dans Minecraft. Craft, oxydation, cirage et toutes les variantes de cette source de lumière décorative.",
    category: "items",
    volume: 720,
    content: {
      intro: "La lanterne en cuivre est un bloc décoratif ajouté dans Minecraft 1.21 qui combine les mécaniques d'éclairage avec le système d'oxydation du cuivre. Elle existe en plusieurs stades d'oxydation, offrant des variations de couleur du orange cuivré au vert-de-gris patiné.",
      sections: [
        {
          heading: "Recette de craft",
          content: "La lanterne en cuivre se fabrique en combinant des lingots de cuivre avec une torche dans la grille de craft. Placez 3 lingots de cuivre en haut, la torche au centre et 3 lingots de cuivre en bas. Le résultat est une lanterne en cuivre fraîchement fabriquée au stade non-oxydé."
        },
        {
          heading: "Oxydation et variantes",
          content: "Comme tous les blocs de cuivre, la lanterne s'oxyde progressivement en 4 stades : cuivre normal (orange), exposé (brun), altéré (vert clair) et oxydé (vert). Chaque stade change la couleur de la lanterne. L'oxydation prend du temps réel et se propage progressivement."
        },
        {
          heading: "Cirage et protection",
          content: "Appliquez de la cire d'abeille sur la lanterne en cuivre pour stopper l'oxydation à son stade actuel. Utilisez une nid d'abeille dans la grille de craft avec la lanterne. Vous pouvez aussi gratter la cire avec une hache. Pour inverser l'oxydation, utilisez une hache sur le bloc."
        },
        {
          heading: "Utilisation en décoration",
          content: "Les différents stades d'oxydation permettent de créer des gradients de couleur dans vos constructions. Mélangez les stades pour un aspect ancien et réaliste. La lanterne en cuivre est particulièrement adaptée aux constructions steampunk, médiévales ou industrielles."
        }
      ],
      tips: [
        "Cirez vos lanternes à différents stades d'oxydation pour varier les couleurs",
        "Utilisez une hache pour retirer l'oxydation ou la cire",
        "Les éclairs nettoient instantanément l'oxydation du cuivre à proximité",
        "Combinez avec d'autres blocs de cuivre pour un thème cohérent"
      ],
      faq: [
        {
          question: "La lanterne en cuivre émet-elle autant de lumière qu'une lanterne normale ?",
          answer: "Oui, la lanterne en cuivre émet un niveau de lumière de 15, identique à la lanterne classique. L'oxydation ne change que l'apparence, pas le niveau de lumière émis."
        },
        {
          question: "Comment empêcher la lanterne en cuivre de s'oxyder ?",
          answer: "Appliquez de la cire d'abeille (honeycomb) sur la lanterne via la grille de craft ou en cliquant directement dessus avec de la cire. Cela fige la lanterne à son stade d'oxydation actuel."
        }
      ],
      relatedSlugs: ["lampe", "pierre-lumineuse", "baie-lumineuse", "bloc-lumineux", "coffre-cuivre"]
    }
  },
  {
    slug: "baie-lumineuse",
    keyword: "baie lumineuse minecraft",
    title: "Baie Lumineuse Minecraft : Guide",
    h1: "Les Baies Lumineuses dans Minecraft",
    metaDescription: "Tout savoir sur les baies lumineuses dans Minecraft. Où les trouver dans les grottes luxuriantes, comment les cultiver et les utiliser.",
    category: "items",
    volume: 260,
    content: {
      intro: "Les baies lumineuses (glow berries) sont une source de nourriture et de lumière ajoutées en 1.17. Elles poussent sur des lianes de plafond dans les grottes luxuriantes et émettent un niveau de lumière de 14. C'est l'un des seuls aliments qui sert aussi de décoration lumineuse.",
      sections: [
        {
          heading: "Où trouver les baies lumineuses",
          content: "Les baies lumineuses se génèrent naturellement dans les grottes luxuriantes (lush caves), accrochées au plafond sur des lianes de caverne. Ces grottes se trouvent sous les biomes d'azalée en surface. Les baies sont aussi présentes dans les coffres des puits de mine abandonnés."
        },
        {
          heading: "Culture des baies lumineuses",
          content: "Pour cultiver des baies lumineuses, placez-les sur la face inférieure d'un bloc (au plafond). Une liane poussera vers le bas et produira des baies au bout. Utilisez de la poudre d'os pour accélérer la croissance. Récoltez les baies en cliquant dessus sans casser la liane."
        },
        {
          heading: "Utilisations",
          content: "Les baies lumineuses restaurent 2 points de faim quand mangées. Leur principale utilité est décorative : les lianes avec baies émettent un niveau de lumière de 14, créant un éclairage naturel et organique. Elles sont aussi utilisées comme appât pour les renards et dans le composteur."
        }
      ],
      tips: [
        "Placez les baies sous un bloc pour créer une liane lumineuse descendante",
        "Récoltez les baies sans casser la liane pour qu'elles repoussent",
        "Les renards adorent les baies lumineuses et peuvent être attirés avec",
        "Utilisez de la poudre d'os pour accélérer la pousse des lianes"
      ],
      faq: [
        {
          question: "Les baies lumineuses sont-elles une bonne source de nourriture ?",
          answer: "Non, elles ne restaurent que 2 points de faim (1 cuisse). Leur intérêt est principalement décoratif et lumineux. Utilisez d'autres aliments pour vous nourrir efficacement."
        },
        {
          question: "Comment trouver une grotte luxuriante ?",
          answer: "Cherchez des azalées en surface : les arbres d'azalée indiquent la présence d'une grotte luxuriante en dessous. Creusez sous l'azalée pour atteindre la grotte. Les grottes luxuriantes se génèrent entre les couches 0 et -64."
        }
      ],
      relatedSlugs: ["lampe", "pierre-lumineuse", "bloc-lumineux", "lanterne-cuivre", "canne-a-sucre"]
    }
  },
  {
    slug: "bloc-lumineux",
    keyword: "bloc lumineux minecraft",
    title: "Bloc Lumineux Minecraft : Guide",
    h1: "Le Bloc Lumineux dans Minecraft",
    metaDescription: "Guide du bloc lumineux (light block) dans Minecraft. Comment l'obtenir, régler son niveau de lumière et l'utiliser pour l'éclairage invisible.",
    category: "items",
    volume: 480,
    content: {
      intro: "Le bloc lumineux (light block) est un bloc invisible qui émet de la lumière à un niveau réglable de 0 à 15. Il est uniquement disponible via des commandes et est principalement utilisé par les créateurs de maps et les constructeurs pour un éclairage sans source visible.",
      sections: [
        {
          heading: "Comment obtenir le bloc lumineux",
          content: "Le bloc lumineux n'est pas craftable et n'apparaît pas en survie. Utilisez la commande /give @s light_block pour l'obtenir. En Bedrock, la commande est /give @s light_block 1 15 (où 15 est le niveau de lumière). En Java, vous pouvez aussi le trouver dans l'inventaire créatif sous l'onglet items."
        },
        {
          heading: "Réglage du niveau de lumière",
          content: "En Java, faites un clic droit sur le bloc lumineux avec un autre bloc lumineux pour ajuster son niveau de lumière de 0 à 15. Chaque clic augmente le niveau de 1. En Bedrock, le niveau est défini par la valeur de données lors du /give. Le niveau 15 est équivalent à la lumière du soleil."
        },
        {
          heading: "Utilisations créatives",
          content: "Le bloc lumineux est parfait pour éclairer des zones sans source visible de lumière. Les créateurs de maps l'utilisent pour empêcher le spawn de mobs tout en gardant une esthétique propre. Il est aussi utile pour éclairer l'intérieur des bâtiments sans torches ni lanternes visibles."
        }
      ],
      tips: [
        "Le bloc lumineux est invisible pour les joueurs en survie",
        "Utilisez le niveau 15 pour un éclairage maximum invisible",
        "Idéal pour les maps aventure et les constructions showcase",
        "En Java, tenez un bloc lumineux pour voir les blocs lumineux déjà placés"
      ],
      faq: [
        {
          question: "Le bloc lumineux est-il visible en jeu ?",
          answer: "Non, le bloc lumineux est totalement invisible en mode survie. En mode créatif, il affiche une texture de particules quand vous tenez un bloc lumineux en main, ce qui permet de les repérer."
        },
        {
          question: "Peut-on utiliser le bloc lumineux en survie ?",
          answer: "Le bloc lumineux ne peut être obtenu que par commandes ou en mode créatif. Il n'existe pas de recette de craft. C'est un outil principalement destiné aux créateurs de maps et aux administrateurs de serveurs."
        }
      ],
      relatedSlugs: ["lampe", "pierre-lumineuse", "baie-lumineuse", "lanterne-cuivre", "verre-teinte"]
    }
  },
  {
    slug: "coquille-nautile",
    keyword: "coquille de nautile minecraft",
    title: "Coquille de Nautile Minecraft : Guide",
    h1: "La Coquille de Nautile dans Minecraft",
    metaDescription: "Comment obtenir des coquilles de nautile dans Minecraft. Pêche, noyés et utilisation pour crafter le conduit, le bloc le plus puissant sous l'eau.",
    category: "items",
    volume: 320,
    content: {
      intro: "La coquille de nautile est un item rare dans Minecraft nécessaire pour fabriquer le conduit, un bloc extrêmement puissant qui confère la respiration aquatique, la vision nocturne et les dégâts aux mobs hostiles sous l'eau. Obtenir 8 coquilles demande de la patience.",
      sections: [
        {
          heading: "Comment obtenir des coquilles de nautile",
          content: "Il existe trois méthodes pour obtenir des coquilles de nautile. La pêche offre environ 0.8% de chance avec une canne non enchantée (trésor). Les noyés (drowned) tenant une coquille la lâchent à 100% en mourant. Les villageois errants (wandering traders) en vendent parfois pour 5 émeraudes."
        },
        {
          heading: "Fabrication du conduit",
          content: "Le conduit se craft en plaçant 1 cœur de la mer au centre de la grille 3x3, entouré de 8 coquilles de nautile. Le cœur de la mer se trouve dans les coffres des trésors enfouis. Une fois activé avec un cadre de prismarines, le conduit accorde la respiration aquatique, la vision nocturne et attaque les mobs hostiles."
        },
        {
          heading: "Optimiser la collecte",
          content: "Pour farmer les coquilles efficacement, construisez une ferme à noyés. Les zombies qui se noient deviennent des noyés et ont une chance de tenir une coquille de nautile. Vous pouvez aussi pêcher avec une canne enchantée Chance de la mer III pour augmenter significativement les chances de trouver des coquilles."
        }
      ],
      tips: [
        "Chance de la mer III augmente vos chances de pêcher des coquilles",
        "Les noyés avec une coquille en main la lâchent toujours à leur mort",
        "Il faut 8 coquilles + 1 cœur de la mer pour crafter un conduit",
        "Les villageois errants vendent parfois des coquilles pour 5 émeraudes"
      ],
      faq: [
        {
          question: "Combien de coquilles faut-il pour un conduit ?",
          answer: "Il faut exactement 8 coquilles de nautile et 1 cœur de la mer pour fabriquer un conduit. Le cœur de la mer se trouve dans les coffres des trésors enfouis repérables avec des cartes au trésor."
        },
        {
          question: "Les coquilles de nautile ont-elles d'autres utilisations ?",
          answer: "Non, la fabrication du conduit est l'unique utilisation des coquilles de nautile. Elles n'ont pas d'autre recette ni utilisation dans le jeu."
        }
      ],
      relatedSlugs: ["eclat-amethyste", "etoile-nether", "rayon-de-miel", "poudre-os", "totem-immortalite"]
    }
  },
  {
    slug: "rayon-de-miel",
    keyword: "rayon de miel minecraft",
    title: "Rayon de Miel Minecraft : Guide",
    h1: "Le Rayon de Miel dans Minecraft",
    metaDescription: "Guide complet du rayon de miel dans Minecraft. Comment le récolter des ruches, utilisations en craft et astuces pour éviter la colère des abeilles.",
    category: "items",
    volume: 480,
    content: {
      intro: "Le rayon de miel (honeycomb) est un item obtenu en récoltant des nids d'abeilles ou des ruches dans Minecraft. Il sert à fabriquer des ruches, des bougies, de la cire et des blocs de rayon de miel. C'est un matériau essentiel pour l'apiculture et la protection du cuivre.",
      sections: [
        {
          heading: "Comment récolter du rayon de miel",
          content: "Utilisez des cisailles sur un nid d'abeilles ou une ruche quand le niveau de miel est au maximum (niveau 5, visible par le miel qui coule). Cela donne 3 rayons de miel. Placez un feu de camp sous le nid avant la récolte pour empêcher les abeilles de devenir hostiles."
        },
        {
          heading: "Utilisations principales",
          content: "Le rayon de miel sert à crafter des ruches (6 planches + 3 rayons de miel), des blocs de rayon de miel (4 rayons en carré) et des bougies (1 ficelle + 1 rayon de miel). C'est aussi l'ingrédient pour cirer les blocs de cuivre et empêcher leur oxydation."
        },
        {
          heading: "Cirage du cuivre",
          content: "Faites un clic droit avec un rayon de miel sur n'importe quel bloc de cuivre pour le cirer et arrêter son oxydation. En craft, combinez un bloc de cuivre avec un rayon de miel. Les blocs cirés conservent leur stade d'oxydation indéfiniment."
        },
        {
          heading: "Élevage d'abeilles",
          content: "Pour une production régulière, élevez des abeilles. Placez des fleurs près des ruches pour que les abeilles les pollinisent et remplissent la ruche. Deux abeilles nourries de fleurs se reproduisent. Chaque ruche peut contenir jusqu'à 3 abeilles et se remplit plus vite avec plus d'abeilles actives."
        }
      ],
      tips: [
        "Placez toujours un feu de camp sous la ruche avant de récolter",
        "Les cisailles récoltent le rayon de miel, les fioles récoltent le miel liquide",
        "Cirez vos blocs de cuivre à différents stades d'oxydation pour varier les couleurs",
        "Les dispenseurs avec cisailles peuvent automatiser la récolte"
      ],
      faq: [
        {
          question: "Comment éviter que les abeilles attaquent lors de la récolte ?",
          answer: "Placez un feu de camp directement sous le nid ou la ruche (à 5 blocs max en dessous). La fumée calme les abeilles et elles ne deviendront pas hostiles lors de la récolte."
        },
        {
          question: "Quelle est la différence entre miel et rayon de miel ?",
          answer: "Le miel s'obtient avec une fiole vide sur la ruche pleine et donne une fiole de miel (aliment). Le rayon de miel s'obtient avec des cisailles et donne un item de craft. Les deux nécessitent un nid au niveau de miel 5."
        }
      ],
      relatedSlugs: ["lanterne-cuivre", "coffre-cuivre", "canne-a-sucre", "poudre-os", "charbon-de-bois"]
    }
  },
  {
    slug: "poudre-os",
    keyword: "poudre d'os minecraft",
    title: "Poudre d'Os Minecraft : Utilisation",
    h1: "La Poudre d'Os dans Minecraft",
    metaDescription: "Guide complet de la poudre d'os dans Minecraft. Comment l'obtenir, faire pousser les cultures instantanément et toutes les utilisations.",
    category: "items",
    volume: 480,
    content: {
      intro: "La poudre d'os (bone meal) est l'un des items les plus polyvalents de Minecraft. Elle sert de fertilisant pour accélérer la croissance des cultures, de colorant blanc et de nourriture pour le composteur. C'est un item indispensable pour tout fermier efficace.",
      sections: [
        {
          heading: "Comment obtenir de la poudre d'os",
          content: "La poudre d'os s'obtient principalement en craftant des os (1 os = 3 poudres d'os). Les os viennent des squelettes, des poissons et des coffres de donjons. Le composteur produit aussi de la poudre d'os quand rempli de matières végétales. Les farine de poisson des pêcheurs villageois en donnent aussi."
        },
        {
          heading: "Utilisation comme fertilisant",
          content: "Faites un clic droit avec de la poudre d'os sur une culture pour accélérer sa croissance. Le blé, les carottes, les pommes de terre et les betteraves gagnent 2 à 5 stades de croissance. Les arbres poussent instantanément à partir de jeunes pousses. L'herbe se couvre de hautes herbes et de fleurs."
        },
        {
          heading: "Le composteur",
          content: "Le composteur transforme les déchets végétaux en poudre d'os. Chaque matière végétale a une chance différente de remplir le composteur d'un niveau. Quand les 7 niveaux sont remplis, récoltez pour obtenir 1 poudre d'os. Les plantes hautes, gâteaux et citrouilles ont le meilleur taux de compostage."
        },
        {
          heading: "Utilisations spéciales",
          content: "La poudre d'os peut aussi faire pousser de la mousse sur des blocs adjacents, propager le dripleaf, faire grandir les champignons géants, créer des récifs de corail et faire pousser du kelp. Utilisée dans l'eau, elle génère de l'herbe marine. C'est un outil aux possibilités vastes."
        }
      ],
      tips: [
        "1 os donne 3 poudres d'os, c'est très rentable",
        "Le composteur est la meilleure source renouvelable de poudre d'os",
        "Utilisez-la sur la mousse pour la propager aux blocs adjacents",
        "En mode automatique, les dispenseurs peuvent appliquer la poudre d'os",
        "La poudre d'os fait aussi office de colorant blanc"
      ],
      faq: [
        {
          question: "La poudre d'os fait-elle pousser toutes les plantes instantanément ?",
          answer: "Non, la poudre d'os accélère la croissance mais ne la rend pas toujours instantanée. Les cultures comme le blé gagnent 2 à 5 stades par application. Les arbres et champignons géants poussent instantanément. La canne à sucre et le cactus ne sont pas affectés par la poudre d'os en Java."
        },
        {
          question: "Comment automatiser la production de poudre d'os ?",
          answer: "Construisez une ferme à squelettes avec un spawner pour obtenir des os en masse. Alternativement, reliez une ferme automatique de culture à des composteurs via des entonnoirs pour une production de poudre d'os entièrement automatisée."
        }
      ],
      relatedSlugs: ["pousse-de-ble", "colorant-blanc", "canne-a-sucre", "charbon-de-bois", "teinture-blanche"]
    }
  },
  {
    slug: "eclat-amethyste",
    keyword: "éclat d'améthyste minecraft",
    title: "Éclat d'Améthyste Minecraft : Guide",
    h1: "L'Éclat d'Améthyste dans Minecraft",
    metaDescription: "Guide complet des éclats d'améthyste dans Minecraft. Où trouver les géodes, comment miner les amas et crafts avec les éclats d'améthyste.",
    category: "items",
    volume: 390,
    content: {
      intro: "Les éclats d'améthyste sont des items ajoutés en 1.17 que l'on obtient en minant des amas d'améthyste dans les géodes souterraines. Ils servent à fabriquer du verre teinté, des longues-vues et des capteurs sculk. Les géodes d'améthyste sont des structures géologiques fascinantes à explorer.",
      sections: [
        {
          heading: "Trouver une géode d'améthyste",
          content: "Les géodes d'améthyste se génèrent entre les couches -64 et 30, entourées de calcite et de basalte lisse. Elles sont assez communes et vous les croiserez souvent en minant. Cherchez des blocs de basalte lisse et de calcite pour repérer une géode. L'intérieur contient des blocs d'améthyste et des amas en croissance."
        },
        {
          heading: "Miner les éclats correctement",
          content: "Seuls les amas d'améthyste pleinement développés (stade 4) lâchent des éclats quand minés. Utilisez une pioche en fer ou mieux pour obtenir 4 éclats par amas. L'enchantement Fortune augmente le rendement. Les bourgeons d'améthyste (stades 1 à 3) ne lâchent rien sans Toucher de soie."
        },
        {
          heading: "Recettes avec les éclats",
          content: "Les éclats d'améthyste servent dans 3 recettes principales : le verre teinté (4 éclats + 1 verre), la longue-vue (2 éclats + 1 lingot de cuivre) et le capteur sculk calibré (3 éclats + 1 capteur sculk). Le verre teinté est particulièrement utile car il bloque la lumière."
        }
      ],
      tips: [
        "Seuls les amas au stade 4 (pleinement développés) donnent des éclats",
        "Fortune III augmente le nombre d'éclats par amas miné",
        "Les géodes se trouvent entre les couches -64 et 30",
        "Le bloc bourgeonnant d'améthyste fait repousser les amas avec le temps"
      ],
      faq: [
        {
          question: "Les amas d'améthyste repoussent-ils ?",
          answer: "Oui, les amas repoussent sur les blocs bourgeonnants d'améthyste avec le temps. Cependant, les blocs bourgeonnants ne peuvent pas être déplacés ou minés (même avec Toucher de soie). Vous devez revenir à la géode pour de nouvelles récoltes."
        },
        {
          question: "Peut-on farmer l'améthyste de façon automatique ?",
          answer: "Partiellement. Les amas poussent naturellement sur les blocs bourgeonnants et peuvent être cassés automatiquement par des pistons. Cependant, c'est lent et peu efficace comparé au minage manuel dans plusieurs géodes."
        }
      ],
      relatedSlugs: ["verre-teinte", "coquille-nautile", "eclat-echo", "pierre-lumineuse", "debris-antique"]
    }
  },
  {
    slug: "etoile-nether",
    keyword: "étoile du nether minecraft",
    title: "Étoile du Nether Minecraft : Guide",
    h1: "L'Étoile du Nether dans Minecraft",
    metaDescription: "Comment obtenir l'étoile du Nether dans Minecraft en battant le Wither. Guide complet du combat et utilisation pour la balise (beacon).",
    category: "items",
    volume: 260,
    content: {
      intro: "L'étoile du Nether est l'un des items les plus rares et précieux de Minecraft. Elle ne s'obtient qu'en tuant le Wither, un boss qu'il faut invoquer manuellement. Cette étoile est l'ingrédient principal pour fabriquer une balise (beacon), le bloc le plus puissant du jeu.",
      sections: [
        {
          heading: "Comment invoquer le Wither",
          content: "Pour invoquer le Wither, placez 4 blocs de sable des âmes en T et 3 crânes de wither squelette sur le dessus. Les crânes s'obtiennent en tuant des wither squelettes dans les forteresses du Nether (2.5% de chance de drop). Invoquez le Wither dans un espace confiné sous terre pour limiter les dégâts."
        },
        {
          heading: "Vaincre le Wither",
          content: "Le Wither a 300 points de vie et deux phases. En première phase, attaquez à l'arc ou à l'arbalète. À 50% de vie, il gagne un bouclier et ne peut être touché qu'au corps à corps. Utilisez une épée en netherite avec Châtiment V. Préparez des potions de force, de régénération et des pommes dorées enchantées."
        },
        {
          heading: "Fabrication de la balise",
          content: "Craftez la balise avec 3 obsidiennes en bas, 1 étoile du Nether au centre et 5 blocs de verre en haut et sur les côtés. Placez la balise sur une pyramide de blocs de fer, d'or, de diamant, d'émeraude ou de netherite. Une pyramide complète de 4 niveaux débloque tous les effets : vitesse, hâte, résistance, force et saut."
        }
      ],
      tips: [
        "Invoquez le Wither sous terre dans un tunnel en obsidienne",
        "Looting III augmente les chances d'obtenir des crânes de wither squelette",
        "Apportez beaucoup de potions de soin et de pommes dorées pour le combat",
        "Le Wither détruit tous les blocs sauf la bedrock et les blocs de structure"
      ],
      faq: [
        {
          question: "Combien de crânes de wither squelette faut-il ?",
          answer: "Il faut exactement 3 crânes de wither squelette pour invoquer le Wither. Avec un taux de drop de 2.5%, il faut en moyenne tuer 120 wither squelettes pour obtenir les 3 crânes. Looting III augmente considérablement ce taux."
        },
        {
          question: "La balise fonctionne-t-elle sans pyramide ?",
          answer: "La balise s'active avec un minimum de 9 blocs en dessous (pyramide niveau 1), mais n'offre qu'un seul effet avec une portée limitée. Une pyramide complète de 4 niveaux (164 blocs) débloque tous les effets et la portée maximale de 50 blocs."
        }
      ],
      relatedSlugs: ["noyau-lourd", "totem-immortalite", "debris-antique", "coquille-nautile", "eclat-echo"]
    }
  },
  {
    slug: "noyau-lourd",
    keyword: "noyau lourd minecraft",
    title: "Noyau Lourd Minecraft : Guide Complet",
    h1: "Le Noyau Lourd dans Minecraft",
    metaDescription: "Tout savoir sur le noyau lourd dans Minecraft 1.21. Comment l'obtenir dans les chambres des épreuves et l'utiliser pour crafter la masse.",
    category: "items",
    volume: 390,
    content: {
      intro: "Le noyau lourd (heavy core) est un item rare introduit dans Minecraft 1.21. Il est le composant principal pour fabriquer la masse (mace), une nouvelle arme dévastatrice. Cet item ne se trouve que dans les coffres omineux des chambres des épreuves.",
      sections: [
        {
          heading: "Comment obtenir le noyau lourd",
          content: "Le noyau lourd est exclusivement trouvable dans les coffres omineux (ominous vaults) des chambres des épreuves. Pour ouvrir ces coffres, vous avez besoin de clés d'épreuves omineux, obtenues en battant des spawners d'épreuves sous l'effet d'un mauvais présage (bad omen). C'est l'un des drops les plus rares du jeu."
        },
        {
          heading: "Fabrication de la masse (mace)",
          content: "La masse se craft en combinant 1 noyau lourd et 1 tige de brise (breeze rod) dans la grille de craft. La tige de brise s'obtient en tuant des Breezes dans les chambres des épreuves. La masse est une arme de mêlée unique qui inflige des dégâts proportionnels à la hauteur de chute."
        },
        {
          heading: "Puissance de la masse",
          content: "La masse est une arme révolutionnaire dont les dégâts augmentent avec la distance de chute. Plus vous tombez de haut en frappant, plus les dégâts sont élevés, sans limite théorique. De plus, toucher un ennemi en tombant annule tous les dégâts de chute. Combinée avec le vent, c'est dévastateur."
        }
      ],
      tips: [
        "Cherchez les coffres omineux dans les chambres des épreuves pour le noyau lourd",
        "Le mauvais présage est nécessaire pour activer les spawners omineux",
        "La masse inflige des dégâts croissants selon la hauteur de chute",
        "Combinez la masse avec l'enchantement Densité pour maximiser les dégâts"
      ],
      faq: [
        {
          question: "Comment activer le mauvais présage pour les coffres omineux ?",
          answer: "Tuez un capitaine de pillards pour obtenir l'effet de mauvais présage. En entrant dans une chambre des épreuves avec cet effet, les spawners deviennent omineux et lâchent des clés d'épreuves omineux pour ouvrir les coffres contenant potentiellement le noyau lourd."
        },
        {
          question: "La masse est-elle meilleure qu'une épée en netherite ?",
          answer: "Cela dépend de la situation. La masse excelle dans les combats aériens et les attaques en chute. Pour le combat au sol standard, l'épée en netherite reste plus fiable. La masse est une arme situationnelle extrêmement puissante."
        }
      ],
      relatedSlugs: ["cle-epreuves", "chambre-epreuves", "salle-des-coffres", "coeur-de-grinceur", "etoile-nether"]
    }
  },
  {
    slug: "cle-epreuves",
    keyword: "clé d'épreuves minecraft",
    title: "Clé d'Épreuves Minecraft : Guide",
    h1: "La Clé d'Épreuves dans Minecraft",
    metaDescription: "Guide de la clé d'épreuves dans Minecraft 1.21. Comment l'obtenir en battant les spawners, utilisation pour ouvrir les coffres de récompense.",
    category: "items",
    volume: 170,
    content: {
      intro: "La clé d'épreuves (trial key) est un item de Minecraft 1.21 qui sert à ouvrir les coffres de récompense dans les chambres des épreuves. Elle s'obtient en terminant les défis des générateurs d'épreuves. C'est la monnaie d'échange principale de ces structures souterraines.",
      sections: [
        {
          heading: "Comment obtenir une clé d'épreuves",
          content: "Les clés d'épreuves sont lâchées par les générateurs d'épreuves (trial spawners) une fois tous les mobs invoqués éliminés. Chaque joueur participant au combat reçoit sa propre clé. Les spawners se réinitialisent après un cooldown, permettant de farmer les clés en revisitant."
        },
        {
          heading: "Utilisation des clés",
          content: "Utilisez les clés d'épreuves pour ouvrir les coffres de récompense (vault blocks) situés dans les salles des coffres. Faites un clic droit sur un coffre avec la clé en main. Chaque coffre ne peut être ouvert qu'une seule fois par joueur, peu importe le nombre de clés possédées."
        },
        {
          heading: "Clé d'épreuves omineux",
          content: "La variante omineux de la clé s'obtient en battant les spawners d'épreuves omineux, activés par le mauvais présage. Ces clés omineux ouvrent les coffres omineux qui contiennent un butin supérieur, incluant potentiellement le noyau lourd et d'autres items exclusifs."
        }
      ],
      tips: [
        "Chaque joueur reçoit sa propre clé après un combat de spawner",
        "Les spawners se réinitialisent après un cooldown de 30 minutes",
        "Gardez les clés omineux pour les coffres les plus rares",
        "Les clés normales et omineux ouvrent des types de coffres différents"
      ],
      faq: [
        {
          question: "Combien de clés peut-on obtenir par visite ?",
          answer: "Vous obtenez une clé par spawner d'épreuves vaincu. Le nombre total dépend du nombre de salles de combat dans la chambre des épreuves. Chaque spawner a un cooldown de 30 minutes avant de pouvoir être réactivé."
        },
        {
          question: "Les clés d'épreuves ont-elles d'autres utilisations ?",
          answer: "Non, les clés d'épreuves servent uniquement à ouvrir les coffres de récompense (vault blocks) dans les chambres des épreuves. Elles n'ont pas d'autre utilisation en craft ou en jeu."
        }
      ],
      relatedSlugs: ["chambre-epreuves", "salle-des-coffres", "noyau-lourd", "coeur-de-grinceur", "ornement-oeil"]
    }
  },
  {
    slug: "chambre-epreuves",
    keyword: "chambre des épreuves minecraft",
    title: "Chambre des Épreuves Minecraft : Guide",
    h1: "La Chambre des Épreuves dans Minecraft",
    metaDescription: "Guide complet de la chambre des épreuves dans Minecraft 1.21. Comment la trouver, l'explorer et obtenir les meilleures récompenses.",
    category: "items",
    volume: 320,
    content: {
      intro: "La chambre des épreuves (trial chamber) est une structure souterraine massive ajoutée dans Minecraft 1.21. Elle contient des spawners d'épreuves adaptatifs, des Breezes comme nouveaux mobs et des coffres de récompense avec du butin exclusif. C'est l'attraction majeure de la mise à jour.",
      sections: [
        {
          heading: "Comment trouver une chambre des épreuves",
          content: "Les chambres des épreuves se génèrent sous terre entre les couches -40 et -20, dans tous les biomes. Cherchez du cuivre oxydé et du tuf lors de vos explorations minières. Vous pouvez aussi utiliser la commande /locate structure trial_chambers. Les cartographes villageois peuvent vendre des cartes indiquant leur emplacement."
        },
        {
          heading: "Structure et exploration",
          content: "La chambre des épreuves est composée de couloirs en cuivre et tuf, de salles de combat avec des spawners d'épreuves et de salles de récompense avec des coffres. Les salles de combat invoquent des mobs adaptés au nombre de joueurs présents. Les Breezes sont des mobs exclusifs qui lancent des charges de vent."
        },
        {
          heading: "Butin et récompenses",
          content: "Les coffres de récompense contiennent des modèles de forge exclusifs, le noyau lourd (dans les coffres omineux), des enchantements rares, des matériaux précieux et des objets uniques. Le butin est personnalisé par joueur, rendant l'exploration en multijoueur très rentable."
        },
        {
          heading: "Préparation recommandée",
          content: "Avant d'explorer, équipez une armure en diamant ou netherite, emportez beaucoup de nourriture, des potions de soin et de force, des flèches en quantité et des blocs pour vous protéger. Les combats peuvent être intenses, surtout en mode omineux."
        }
      ],
      tips: [
        "Les chambres des épreuves se trouvent entre les couches -40 et -20",
        "Les Breezes lancent des charges de vent qui vous propulsent",
        "Explorez en multijoueur pour que chaque joueur obtienne son propre butin",
        "Le mode omineux active des spawners plus difficiles mais des coffres meilleurs",
        "Utilisez les blocs pour créer des abris temporaires pendant les combats"
      ],
      faq: [
        {
          question: "Les chambres des épreuves sont-elles réutilisables ?",
          answer: "Partiellement. Les spawners d'épreuves se réinitialisent après 30 minutes de cooldown, permettant de refaire les combats et obtenir de nouvelles clés. Cependant, les coffres de récompense ne peuvent être ouverts qu'une seule fois par joueur."
        },
        {
          question: "Qu'est-ce qu'un Breeze ?",
          answer: "Le Breeze est un mob hostile exclusif aux chambres des épreuves. Il lance des charges de vent qui infligent des dégâts et propulsent les joueurs. Il est agile et se déplace en sautant. Les tiges de Breeze (breeze rods) sont nécessaires pour crafter la masse."
        }
      ],
      relatedSlugs: ["cle-epreuves", "salle-des-coffres", "noyau-lourd", "coeur-de-grinceur", "ornement-oeil"]
    }
  },
  {
    slug: "totem-immortalite",
    keyword: "totem d'immortalité minecraft",
    title: "Totem d'Immortalité Minecraft : Guide",
    h1: "Le Totem d'Immortalité dans Minecraft",
    metaDescription: "Guide du totem d'immortalité dans Minecraft. Comment l'obtenir des évocateurs, son fonctionnement et astuces pour ne jamais mourir.",
    category: "items",
    volume: 260,
    content: {
      intro: "Le totem d'immortalité est un item de survie qui vous empêche de mourir une fois. Lorsque vous subissez des dégâts mortels avec le totem en main, il s'active et vous restaure de la vie au lieu de vous laisser mourir. C'est l'un des items les plus précieux pour les aventuriers.",
      sections: [
        {
          heading: "Comment obtenir le totem d'immortalité",
          content: "Le totem d'immortalité est uniquement lâché par les évocateurs (evokers) à leur mort. Les évocateurs se trouvent dans les manoirs des bois (woodland mansions) et dans les raids de villages (à partir de la vague 5). Les raids sont la méthode la plus accessible pour farmer des totems."
        },
        {
          heading: "Fonctionnement du totem",
          content: "Le totem doit être tenu dans la main principale ou secondaire (off-hand) pour fonctionner. Quand vous recevez des dégâts mortels, le totem s'active et est consommé. Il vous restaure 1 cœur de vie, vous accorde Régénération II pendant 40 secondes et Absorption II pendant 5 secondes. Il supprime aussi tous les effets négatifs."
        },
        {
          heading: "Stratégies d'utilisation",
          content: "Gardez toujours un totem dans votre main secondaire lors d'explorations dangereuses. C'est particulièrement crucial dans le Nether, l'End et lors de combats de boss. Avoir un stock de totems permet de prendre des risques calculés. Combinez avec une armure en netherite pour une survie maximale."
        }
      ],
      tips: [
        "Gardez toujours un totem dans votre main secondaire (off-hand)",
        "Les raids de villages sont la meilleure source de totems renouvelable",
        "Le totem fonctionne contre tous les types de dégâts, y compris le vide sous Y -64",
        "L'enchantement Looting n'affecte pas le drop du totem (toujours 1)",
        "Le totem sauve aussi de la lave et des explosions de creepers"
      ],
      faq: [
        {
          question: "Le totem d'immortalité fonctionne-t-il si je le garde dans l'inventaire ?",
          answer: "Non, le totem doit être tenu dans la main principale ou dans la main secondaire (off-hand) pour s'activer. Un totem dans l'inventaire ou dans un coffre ne vous protégera pas."
        },
        {
          question: "Le totem protège-t-il contre le vide (void) ?",
          answer: "Le totem s'active bien si vous tombez dans le vide, mais vous continuerez à tomber et mourrez peu après à cause des dégâts continus du vide. Il ne fait que retarder la mort dans le vide, sans vous sauver vraiment."
        }
      ],
      relatedSlugs: ["etoile-nether", "livre-enchante", "ancre-reapparition", "noyau-lourd", "coquille-nautile"]
    }
  },
  {
    slug: "ancre-reapparition",
    keyword: "ancre de réapparition minecraft",
    title: "Ancre de Réapparition Minecraft : Guide",
    h1: "L'Ancre de Réapparition dans Minecraft",
    metaDescription: "Guide de l'ancre de réapparition dans Minecraft. Comment la crafter, la charger avec du glowstone et l'utiliser pour respawn dans le Nether.",
    category: "items",
    volume: 170,
    content: {
      intro: "L'ancre de réapparition (respawn anchor) permet de définir un point de réapparition dans le Nether, là où les lits explosent. Elle se charge avec de la pierre lumineuse et offre jusqu'à 4 respawns. C'est un item indispensable pour les aventuriers du Nether en mode survie.",
      sections: [
        {
          heading: "Recette de craft",
          content: "L'ancre de réapparition se fabrique avec 3 blocs de pierre lumineuse en haut, 3 pierres des pleurs (crying obsidian) en bas et 3 pierres des pleurs au milieu. La pierre des pleurs s'obtient dans les portails en ruine, les coffres de bastions et par troc avec les Piglins."
        },
        {
          heading: "Chargement et utilisation",
          content: "Placez l'ancre dans le Nether et faites un clic droit avec de la pierre lumineuse pour la charger. Chaque glowstone ajoute une charge (maximum 4). Cliquez à nouveau sans glowstone pour définir votre point de réapparition. Chaque mort consomme une charge. Quand elle est vide, rechargez-la."
        },
        {
          heading: "Précautions importantes",
          content: "L'ancre de réapparition explose si vous l'utilisez dans l'Overworld ou l'End, comme un lit dans le Nether. L'explosion est puissante et peut vous tuer. Assurez-vous de ne l'activer que dans le Nether. Gardez toujours de la pierre lumineuse de rechange pour la recharger."
        }
      ],
      tips: [
        "Ne jamais activer l'ancre hors du Nether, elle explose violemment",
        "Gardez de la pierre lumineuse en stock pour recharger l'ancre",
        "La pierre des pleurs se trouve dans les portails en ruine et les bastions",
        "4 charges permettent 4 réapparitions dans le Nether"
      ],
      faq: [
        {
          question: "Comment obtenir de la pierre des pleurs ?",
          answer: "La pierre des pleurs s'obtient dans les portails en ruine (courants en surface et dans le Nether), dans les coffres de bastions et par troc avec les Piglins en leur donnant des lingots d'or. C'est un matériau assez accessible."
        },
        {
          question: "L'ancre fonctionne-t-elle dans l'Overworld ?",
          answer: "Non, l'ancre de réapparition ne fonctionne que dans le Nether. L'activer dans l'Overworld ou l'End provoque une explosion massive. C'est l'inverse du lit qui ne fonctionne que dans l'Overworld."
        }
      ],
      relatedSlugs: ["totem-immortalite", "etoile-nether", "pierre-lumineuse", "soul-sand", "verrue-nether"]
    }
  },
  {
    slug: "coffre-cuivre",
    keyword: "coffre en cuivre minecraft",
    title: "Coffre en Cuivre Minecraft : Guide",
    h1: "Le Coffre en Cuivre dans Minecraft",
    metaDescription: "Guide du coffre en cuivre dans Minecraft. Recette de craft, fonctionnalités uniques, oxydation et comparaison avec le coffre classique.",
    category: "items",
    volume: 170,
    content: {
      intro: "Le coffre en cuivre est un bloc de stockage décoratif ajouté dans Minecraft 1.21. Comme tous les blocs de cuivre, il s'oxyde progressivement et peut être ciré. Il offre un espace de stockage plus petit que le coffre classique mais avec une esthétique unique.",
      sections: [
        {
          heading: "Recette de craft",
          content: "Le coffre en cuivre se fabrique avec 2 lingots de cuivre et 1 coffre normal dans la grille de craft. Placez le coffre au centre et les lingots de cuivre de chaque côté. Cela donne un coffre en cuivre qui peut stocker 27 emplacements d'items, comme un coffre normal."
        },
        {
          heading: "Oxydation et cirage",
          content: "Le coffre en cuivre passe par 4 stades d'oxydation : normal (orange), exposé (brun), altéré (vert clair) et oxydé (vert-de-gris). L'oxydation est purement cosmétique et n'affecte pas le stockage. Appliquez de la cire d'abeille pour figer l'apparence au stade souhaité."
        },
        {
          heading: "Utilisations décoratives",
          content: "Le coffre en cuivre est principalement choisi pour son esthétique. Ses 4 stades d'oxydation offrent des variations de couleur qui s'harmonisent avec les constructions en cuivre. Utilisez-le dans les intérieurs steampunk, les ports, les caves et les constructions industrielles."
        }
      ],
      tips: [
        "Le coffre en cuivre a la même capacité que le coffre normal (27 slots)",
        "Cirez le coffre au stade d'oxydation qui vous convient le mieux",
        "Les coffres en cuivre ne peuvent pas être doublés comme les coffres normaux",
        "L'oxydation est purement esthétique, vos items restent en sécurité"
      ],
      faq: [
        {
          question: "Peut-on faire un double coffre en cuivre ?",
          answer: "Non, les coffres en cuivre ne peuvent pas être combinés en double coffre. Chaque coffre en cuivre reste individuel avec ses 27 emplacements. Pour plus de stockage, placez-en plusieurs côte à côte."
        },
        {
          question: "L'oxydation du coffre affecte-t-elle son contenu ?",
          answer: "Non, l'oxydation est purement visuelle et n'a aucun effet sur les items stockés à l'intérieur. Vos objets sont en sécurité quel que soit le stade d'oxydation du coffre."
        }
      ],
      relatedSlugs: ["lanterne-cuivre", "rayon-de-miel", "salle-des-coffres", "livre-enchante", "charbon-de-bois"]
    }
  },
  {
    slug: "livre-enchante",
    keyword: "livre enchanté minecraft",
    title: "Livre Enchanté Minecraft : Guide",
    h1: "Le Livre Enchanté dans Minecraft",
    metaDescription: "Guide complet du livre enchanté dans Minecraft. Comment l'obtenir, appliquer les enchantements et combiner les livres sur une enclume.",
    category: "items",
    volume: 320,
    content: {
      intro: "Le livre enchanté est un item clé dans Minecraft qui stocke un enchantement applicable à un outil, une arme ou une armure via l'enclume. C'est le moyen le plus flexible d'enchanter vos équipements car il permet de choisir précisément quel enchantement appliquer à quel objet.",
      sections: [
        {
          heading: "Comment obtenir des livres enchantés",
          content: "Les livres enchantés s'obtiennent de plusieurs façons : en enchantant un livre normal sur la table d'enchantement, en pêchant (trésor), dans les coffres de donjons et structures, en échangeant avec des villageois bibliothécaires ou en les trouvant dans les chambres des épreuves. Les bibliothécaires sont la source la plus fiable."
        },
        {
          heading: "Application via l'enclume",
          content: "Placez l'outil ou l'armure dans le premier emplacement de l'enclume et le livre enchanté dans le second. Le coût en niveaux d'expérience varie selon l'enchantement et le nombre d'enchantements déjà présents sur l'objet. Le livre est consommé dans le processus."
        },
        {
          heading: "Combinaison de livres",
          content: "Vous pouvez combiner deux livres enchantés du même enchantement et niveau sur l'enclume pour obtenir le niveau supérieur. Par exemple, 2 livres Protection III donnent 1 livre Protection IV. C'est la méthode standard pour obtenir des enchantements de niveau maximum."
        },
        {
          heading: "Farming via les villageois",
          content: "Les villageois bibliothécaires échangent des livres enchantés contre des émeraudes et un livre. Réinitialisez leurs échanges en cassant et replaçant leur lutrin jusqu'à obtenir l'enchantement souhaité. C'est la méthode la plus fiable pour cibler des enchantements spécifiques."
        }
      ],
      tips: [
        "Les bibliothécaires sont la meilleure source de livres enchantés ciblés",
        "Combinez 2 livres de même enchantement pour monter au niveau supérieur",
        "Réinitialisez le métier d'un bibliothécaire en cassant son lutrin",
        "La pêche avec Chance de la mer III donne régulièrement des livres enchantés",
        "Les livres enchantés ne s'usent pas tant qu'ils ne sont pas appliqués"
      ],
      faq: [
        {
          question: "Peut-on mettre plusieurs enchantements sur un même livre ?",
          answer: "Oui, en combinant des livres sur l'enclume, vous pouvez cumuler plusieurs enchantements différents sur un seul livre. Cela permet d'appliquer tous les enchantements en une seule opération sur l'enclume, réduisant le coût total."
        },
        {
          question: "Pourquoi l'enclume dit 'Trop cher' ?",
          answer: "L'enclume refuse les opérations coûtant plus de 39 niveaux. Plus un objet a été modifié sur l'enclume, plus le coût augmente. Pour éviter cela, planifiez l'ordre de vos enchantements et combinez les livres ensemble avant de les appliquer."
        }
      ],
      relatedSlugs: ["modele-de-forge", "code-couleur", "totem-immortalite", "coffre-cuivre", "etoile-nether"]
    }
  },
  {
    slug: "charbon-de-bois",
    keyword: "charbon de bois minecraft",
    title: "Charbon de Bois Minecraft : Guide",
    h1: "Le Charbon de Bois dans Minecraft",
    metaDescription: "Comment fabriquer du charbon de bois dans Minecraft. Cuisson de bûches, différence avec le charbon normal et utilisations comme combustible.",
    category: "items",
    volume: 390,
    content: {
      intro: "Le charbon de bois est une alternative au charbon classique dans Minecraft, obtenu en cuisant des bûches de bois au four. Il a exactement les mêmes propriétés que le charbon de mine : il fait des torches, alimente les fours et se combine en blocs. C'est souvent le premier combustible fabriqué en début de partie.",
      sections: [
        {
          heading: "Comment fabriquer du charbon de bois",
          content: "Placez n'importe quelle bûche de bois (chêne, bouleau, épicéa, acacia, etc.) dans un four avec du combustible. La cuisson transforme la bûche en charbon de bois. Vous pouvez même utiliser des planches de bois comme combustible pour cuire les premières bûches, bien que ce soit moins efficace."
        },
        {
          heading: "Différence avec le charbon normal",
          content: "Le charbon de bois et le charbon de mine sont fonctionnellement identiques : mêmes recettes, même durée de combustion (8 items par charbon), même utilisation pour les torches. La seule différence est qu'ils ne s'empilent pas ensemble. Le charbon de bois est plus accessible car il ne nécessite que du bois."
        },
        {
          heading: "Utilisations du charbon de bois",
          content: "Le charbon de bois sert à fabriquer des torches (1 charbon + 1 bâton = 4 torches), à alimenter les fours (8 items par charbon), à crafter des feux de camp et des torches de l'âme. 9 charbons de bois se combinent en un bloc de charbon, stockage compact et excellent combustible (80 items)."
        }
      ],
      tips: [
        "En début de partie, cuisez vos premières bûches avec des planches comme combustible",
        "Le charbon de bois est renouvelable contrairement au charbon de mine",
        "9 charbons de bois = 1 bloc de charbon, le meilleur combustible compact",
        "Le charbon de bois et le charbon normal ne s'empilent pas ensemble"
      ],
      faq: [
        {
          question: "Le charbon de bois est-il aussi efficace que le charbon normal ?",
          answer: "Oui, les deux sont strictement identiques en termes de performance : 8 items fondus par charbon, même recettes. Le charbon de bois a l'avantage d'être renouvelable grâce aux arbres."
        },
        {
          question: "Peut-on mélanger charbon de bois et charbon normal ?",
          answer: "Non, ils ne s'empilent pas dans le même slot d'inventaire car ce sont techniquement deux items différents. Cependant, ils peuvent être utilisés de façon interchangeable dans toutes les recettes."
        }
      ],
      relatedSlugs: ["pousse-de-ble", "poudre-os", "canne-a-sucre", "rayon-de-miel", "terre-cuite"]
    }
  },
  {
    slug: "canne-a-sucre",
    keyword: "canne a sucre minecraft",
    title: "Canne à Sucre Minecraft : Farming Guide",
    h1: "La Canne à Sucre dans Minecraft",
    metaDescription: "Guide complet de la canne à sucre dans Minecraft. Où la trouver, comment la cultiver, ferme automatique et utilisations pour le papier et le sucre.",
    category: "items",
    volume: 480,
    content: {
      intro: "La canne à sucre est une plante essentielle dans Minecraft qui sert à fabriquer du papier et du sucre. Elle pousse au bord de l'eau sur du sable, de la terre ou de l'herbe. Une ferme à canne à sucre est l'une des premières fermes automatiques que tout joueur devrait construire.",
      sections: [
        {
          heading: "Où trouver la canne à sucre",
          content: "La canne à sucre pousse naturellement au bord des rivières, des lacs et des océans sur presque tous les biomes. Elle se génère sur du sable, de la terre, de l'herbe, du podzol ou de la terre rouge, à condition qu'un bloc d'eau soit adjacent. Récoltez-la en cassant le bloc du bas ou du milieu."
        },
        {
          heading: "Culture de la canne à sucre",
          content: "Plantez la canne à sucre sur un bloc de terre, sable ou herbe adjacent à de l'eau. Elle pousse jusqu'à 3 blocs de hauteur. Récoltez les 2 blocs du haut en laissant la base pour qu'elle repousse automatiquement. La croissance est indépendante de la lumière mais dépend de ticks aléatoires."
        },
        {
          heading: "Ferme automatique",
          content: "La ferme automatique la plus simple utilise des observateurs et des pistons. Placez un observateur face à la canne à sucre au niveau 2, relié à un piston qui casse le bloc. Les items tombent dans l'eau et sont collectés par des entonnoirs. Cette ferme est compacte et très efficace."
        },
        {
          heading: "Utilisations",
          content: "3 cannes à sucre en ligne donnent 3 papiers, nécessaires pour les livres, les cartes, les fusées et les tables d'enchantement. 1 canne à sucre donne 1 sucre, utilisé pour les gâteaux, les tartes à la citrouille et les potions de rapidité. Le papier est aussi utilisable pour les échanges avec les villageois."
        }
      ],
      tips: [
        "Laissez toujours le bloc de base en place pour que la canne repousse",
        "La canne à sucre doit être adjacente à de l'eau pour être plantée",
        "La poudre d'os ne fonctionne pas sur la canne à sucre en Java Edition",
        "Construisez une ferme automatique avec observateurs et pistons",
        "Le papier s'échange bien avec les villageois bibliothécaires et cartographes"
      ],
      faq: [
        {
          question: "La poudre d'os accélère-t-elle la croissance de la canne à sucre ?",
          answer: "En Java Edition, non. La poudre d'os n'a aucun effet sur la canne à sucre. En Bedrock Edition, oui, la poudre d'os fait pousser la canne à sucre instantanément. C'est une des différences majeures entre les deux versions."
        },
        {
          question: "Quelle est la vitesse de croissance de la canne à sucre ?",
          answer: "La canne à sucre pousse d'un bloc environ toutes les 18 minutes en moyenne, mais c'est basé sur des ticks aléatoires. Il n'y a pas de moyen d'accélérer la croissance en Java. Construire une grande ferme compense la lenteur individuelle."
        }
      ],
      relatedSlugs: ["pousse-de-ble", "poudre-os", "charbon-de-bois", "verrue-nether", "rayon-de-miel"]
    }
  },
  {
    slug: "verrue-nether",
    keyword: "verrue du nether minecraft",
    title: "Verrue du Nether Minecraft : Guide",
    h1: "La Verrue du Nether dans Minecraft",
    metaDescription: "Guide de la verrue du Nether dans Minecraft. Où la trouver, comment la cultiver et son rôle essentiel dans le brassage de potions.",
    category: "items",
    volume: 260,
    content: {
      intro: "La verrue du Nether est l'ingrédient de base de presque toutes les potions dans Minecraft. Sans elle, l'alchimie est quasi impossible. Elle se trouve dans les forteresses du Nether et peut être cultivée sur du sable des âmes dans n'importe quelle dimension.",
      sections: [
        {
          heading: "Où trouver la verrue du Nether",
          content: "La verrue du Nether pousse naturellement dans les escaliers des forteresses du Nether, plantée sur du sable des âmes. On la trouve aussi dans les cours des bastions du Nether. Récoltez-la au stade mature (3ème stade) pour obtenir 2 à 4 verrues par plante. Gardez-en toujours pour replanter."
        },
        {
          heading: "Culture de la verrue du Nether",
          content: "Plantez la verrue du Nether sur du sable des âmes dans n'importe quelle dimension (Overworld, Nether, End). Elle ne nécessite ni eau ni lumière pour pousser. La croissance passe par 4 stades et prend en moyenne 10 à 35 minutes. La poudre d'os ne fonctionne pas sur la verrue du Nether."
        },
        {
          heading: "Rôle dans l'alchimie",
          content: "La verrue du Nether est le premier ingrédient de presque toutes les recettes de potions. Elle transforme une fiole d'eau en potion maladroite (awkward potion), la base de la majorité des potions. Sans elle, seule la potion de faiblesse peut être brassée directement."
        }
      ],
      tips: [
        "Récoltez toujours au stade mature pour maximiser le rendement",
        "La verrue pousse dans toutes les dimensions, pas uniquement au Nether",
        "Cultivez un stock conséquent car elle est la base de toutes les potions",
        "La poudre d'os n'accélère pas la croissance de la verrue du Nether"
      ],
      faq: [
        {
          question: "La verrue du Nether pousse-t-elle dans l'Overworld ?",
          answer: "Oui, la verrue du Nether pousse sur du sable des âmes dans toutes les dimensions. Elle n'a pas besoin de lumière, d'eau ou d'être dans le Nether. Ramenez du sable des âmes et des verrues à votre base pour démarrer une culture."
        },
        {
          question: "Quelles potions peut-on faire sans verrue du Nether ?",
          answer: "Seule la potion de faiblesse peut être brassée sans verrue du Nether (fiole d'eau + œil d'araignée fermenté). Toutes les autres potions nécessitent une potion maladroite, qui elle-même requiert une verrue du Nether."
        }
      ],
      relatedSlugs: ["soul-sand", "canne-a-sucre", "poudre-os", "pousse-de-ble", "etoile-nether"]
    }
  },
  {
    slug: "soul-sand",
    keyword: "soul sand minecraft",
    title: "Soul Sand Minecraft : Guide Complet",
    h1: "Le Soul Sand dans Minecraft",
    metaDescription: "Guide du soul sand (sable des âmes) dans Minecraft. Où le trouver, propriétés de ralentissement, colonnes de bulles et utilisations.",
    category: "items",
    volume: 210,
    content: {
      intro: "Le soul sand (sable des âmes) est un bloc du Nether qui ralentit les entités qui marchent dessus. Il a des propriétés uniques comme la création de colonnes de bulles ascendantes dans l'eau et la culture de la verrue du Nether. C'est aussi un composant pour invoquer le Wither.",
      sections: [
        {
          heading: "Où trouver le soul sand",
          content: "Le soul sand se génère abondamment dans le Nether, principalement dans les biomes de vallée de sable des âmes (soul sand valley) et dans les forteresses du Nether. Il forme des couches épaisses dans les vallées. On le trouve aussi dans les bastions. Il est minable avec n'importe quel outil mais la pelle est la plus rapide."
        },
        {
          heading: "Propriétés spéciales",
          content: "Le soul sand ralentit les joueurs et les mobs qui marchent dessus. Il est légèrement plus bas qu'un bloc normal (15/16 de bloc), créant un petit enfoncement. Dans l'eau, un bloc de soul sand génère une colonne de bulles ascendante qui propulse les joueurs et les items vers le haut."
        },
        {
          heading: "Colonnes de bulles",
          content: "Placez du soul sand au fond d'une colonne d'eau source pour créer un ascenseur à bulles. Chaque bloc d'eau au-dessus doit être un bloc source (utilisez du kelp pour convertir l'eau courante). Cette mécanique est utilisée pour les ascenseurs à eau, les fermes à items et les pièges à mobs."
        },
        {
          heading: "Invocation du Wither",
          content: "Le soul sand est nécessaire pour invoquer le Wither. Placez 4 blocs de soul sand en forme de T et posez 3 crânes de wither squelette sur les 3 blocs du haut. Le Wither apparaît et commence à charger son explosion initiale. Préparez-vous au combat."
        }
      ],
      tips: [
        "Les bottes avec l'enchantement Agilité du soul speed annulent le ralentissement",
        "Le soul sand + eau = colonne de bulles ascendante (ascenseur)",
        "Le magma + eau = colonne de bulles descendante (descenseur)",
        "Utilisez du kelp pour convertir l'eau courante en sources dans votre ascenseur",
        "Le soul sand est le seul bloc sur lequel la verrue du Nether pousse"
      ],
      faq: [
        {
          question: "Quelle est la différence entre soul sand et soul soil ?",
          answer: "Le soul sand ralentit les entités et crée des colonnes de bulles, tandis que le soul soil n'a pas ces propriétés. Les deux permettent la torche des âmes et le feu des âmes, mais seul le soul sand fait pousser la verrue du Nether et crée des bulles."
        },
        {
          question: "Comment faire un ascenseur à eau avec du soul sand ?",
          answer: "Placez du soul sand au fond d'un tube vertical fermé de 1x1. Remplissez le tube d'eau source à chaque niveau (utilisez du kelp puis cassez-le). Les bulles créées par le soul sand propulsent vers le haut rapidement."
        }
      ],
      relatedSlugs: ["verrue-nether", "etoile-nether", "ancre-reapparition", "debris-antique", "pierre-lumineuse"]
    }
  },
  {
    slug: "eclat-echo",
    keyword: "éclat d'écho minecraft",
    title: "Éclat d'Écho Minecraft : Guide",
    h1: "L'Éclat d'Écho dans Minecraft",
    metaDescription: "Guide de l'éclat d'écho dans Minecraft. Comment l'obtenir des cités antiques, utilisation pour crafter la boussole de récupération.",
    category: "items",
    volume: 170,
    content: {
      intro: "L'éclat d'écho (echo shard) est un item rare introduit en 1.19 que l'on trouve exclusivement dans les cités antiques (ancient cities). Son utilisation principale est la fabrication de la boussole de récupération, un outil précieux qui pointe vers le lieu de votre dernière mort.",
      sections: [
        {
          heading: "Où trouver les éclats d'écho",
          content: "Les éclats d'écho se trouvent uniquement dans les coffres des cités antiques, des structures gigantesques situées dans les biomes des grottes profondes (deep dark) à partir de la couche -52. Ils ont environ 30% de chance d'apparaître dans les coffres. Soyez discret car les capteurs sculk et le Warden veillent."
        },
        {
          heading: "Fabrication de la boussole de récupération",
          content: "La boussole de récupération se craft avec 8 éclats d'écho autour d'une boussole normale dans la grille de craft 3x3. Elle pointe vers le lieu de votre dernière mort dans la même dimension, facilitant la récupération de vos items. Si vous n'êtes pas mort ou êtes dans une autre dimension, elle tourne aléatoirement."
        },
        {
          heading: "Exploration des cités antiques",
          content: "Les cités antiques sont dangereuses à cause du Warden. Accroupissez-vous en permanence pour éviter d'activer les capteurs sculk. Utilisez de la laine et des tapis pour étouffer vos bruits de pas. Le Warden est extrêmement puissant et peut tuer en 2 coups même avec une armure en netherite."
        }
      ],
      tips: [
        "Accroupissez-vous toujours dans les cités antiques pour éviter le Warden",
        "Il faut 8 éclats d'écho pour une boussole de récupération",
        "Utilisez de la laine pour bloquer les capteurs sculk",
        "La boussole de récupération ne fonctionne que dans la dimension de votre mort"
      ],
      faq: [
        {
          question: "L'éclat d'écho a-t-il d'autres utilisations que la boussole ?",
          answer: "Non, actuellement la boussole de récupération est la seule recette utilisant des éclats d'écho. C'est un item à usage unique en terme de craft."
        },
        {
          question: "Comment éviter le Warden dans les cités antiques ?",
          answer: "Restez accroupi en permanence, placez de la laine sur les capteurs sculk et évitez de casser des blocs bruyants. Si le Warden apparaît, ne l'affrontez pas : fuyez silencieusement. Il disparaît après 60 secondes sans détection."
        }
      ],
      relatedSlugs: ["eclat-amethyste", "etoile-nether", "debris-antique", "noyau-lourd", "totem-immortalite"]
    }
  },
  {
    slug: "debris-antique",
    keyword: "débris antique minecraft",
    title: "Débris Antique Minecraft : Guide",
    h1: "Les Débris Antiques dans Minecraft",
    metaDescription: "Guide des débris antiques dans Minecraft. Où les trouver au Nether, meilleure couche de minage et transformation en lingots de netherite.",
    category: "items",
    volume: 140,
    content: {
      intro: "Les débris antiques (ancient debris) sont le minerai le plus rare de Minecraft, trouvable uniquement dans le Nether. Ils sont la première étape pour obtenir de la netherite, le matériau le plus puissant du jeu. Leur minage demande de la patience et une bonne stratégie.",
      sections: [
        {
          heading: "Où trouver les débris antiques",
          content: "Les débris antiques se génèrent dans le Nether entre les couches Y 8 et Y 119, avec une concentration maximale autour de la couche Y 15. On en trouve en moyenne 1 à 3 par chunk. Ils ne se génèrent jamais exposés à l'air, toujours entourés d'autres blocs. Une pioche en diamant minimum est requise."
        },
        {
          heading: "Méthodes de minage efficaces",
          content: "La méthode la plus efficace est le bed mining : les lits explosent dans le Nether et révèlent les débris antiques qui résistent aux explosions. Minez à la couche Y 15, creusez un tunnel et placez un lit au bout avec un bloc entre vous et le lit. Les TNT fonctionnent aussi. Le minage classique en branche est plus lent mais plus sûr."
        },
        {
          heading: "Transformation en netherite",
          content: "Cuisez les débris antiques au four pour obtenir des fragments de netherite. Combinez 4 fragments de netherite avec 4 lingots d'or sur la table de craft pour obtenir 1 lingot de netherite. Utilisez ensuite la table de forge pour améliorer un outil ou une armure en diamant en netherite."
        }
      ],
      tips: [
        "La couche Y 15 est optimale pour trouver des débris antiques",
        "Les débris résistent aux explosions, utilisez des lits ou TNT pour les révéler",
        "Il faut 4 débris antiques (4 fragments) + 4 lingots d'or pour 1 lingot de netherite",
        "Apportez des potions de résistance au feu pour le minage au Nether"
      ],
      faq: [
        {
          question: "Combien de débris antiques faut-il pour une armure complète en netherite ?",
          answer: "Il faut 16 débris antiques au total pour une armure complète : 4 par pièce (casque, plastron, jambières, bottes). Avec les outils (épée, pioche, hache, pelle), il faut 36 débris antiques pour tout équiper."
        },
        {
          question: "Le bed mining est-il dangereux ?",
          answer: "Oui, les explosions de lits dans le Nether sont puissantes. Gardez toujours au moins 5 blocs entre vous et le lit, portez une armure en diamant avec Protection anti-explosion et ayez des potions de résistance au feu. Les débris antiques résistent à l'explosion mais pas vous."
        }
      ],
      relatedSlugs: ["etoile-nether", "eclat-echo", "soul-sand", "noyau-lourd", "totem-immortalite"]
    }
  },
  {
    slug: "membrane-phantom",
    keyword: "membrane de phantom minecraft",
    title: "Membrane de Phantom Minecraft : Guide",
    h1: "La Membrane de Phantom dans Minecraft",
    metaDescription: "Guide de la membrane de phantom dans Minecraft. Comment l'obtenir, réparation de l'élytre et fabrication de potions de chute lente.",
    category: "items",
    volume: 140,
    content: {
      intro: "La membrane de phantom est un item lâché par les phantoms, des mobs volants qui attaquent les joueurs n'ayant pas dormi depuis au moins 3 jours. Sa valeur est considérable car c'est le seul moyen de réparer les élytres et de brasser des potions de chute lente.",
      sections: [
        {
          heading: "Comment obtenir des membranes",
          content: "Les phantoms apparaissent la nuit au-dessus des joueurs qui n'ont pas dormi depuis 3 jours ou plus dans un lit. Ils lâchent 0 à 1 membrane à leur mort (augmenté avec Looting). Pour les farmer, restez éveillé 3 nuits, puis combattez-les à l'épée ou à l'arc. Ils attaquent en piqué depuis les airs."
        },
        {
          heading: "Réparation de l'élytre",
          content: "La membrane de phantom est le seul matériau pour réparer l'élytre sur l'enclume. Chaque membrane restaure 25% de la durabilité. Vous aurez besoin de 4 membranes pour une réparation complète. C'est beaucoup plus efficace que de combiner deux élytres usées. L'enchantement Raccommodage est une alternative."
        },
        {
          heading: "Potion de chute lente",
          content: "En ajoutant une membrane de phantom à une potion maladroite dans l'alambic, vous obtenez une potion de chute lente. Cet effet réduit drastiquement la vitesse de chute et annule les dégâts de chute. C'est extrêmement utile dans l'End pour éviter de tomber dans le vide."
        }
      ],
      tips: [
        "Ne dormez pas pendant 3 nuits pour faire apparaître les phantoms",
        "Looting III augmente le nombre de membranes obtenues",
        "Gardez des membranes en stock pour réparer vos élytres",
        "La potion de chute lente est vitale dans l'End"
      ],
      faq: [
        {
          question: "Combien de membranes faut-il pour réparer une élytre ?",
          answer: "Chaque membrane de phantom restaure environ 25% de durabilité sur l'enclume. Il faut donc 4 membranes pour une réparation complète. L'enchantement Raccommodage sur l'élytre est une alternative qui se répare automatiquement avec l'XP."
        },
        {
          question: "Comment empêcher les phantoms d'apparaître ?",
          answer: "Dormez dans un lit au moins une fois tous les 3 jours pour réinitialiser le compteur d'insomnie. Vous n'avez pas besoin de passer la nuit entière, juste de cliquer sur le lit. Les chats effraient aussi les phantoms."
        }
      ],
      relatedSlugs: ["totem-immortalite", "etoile-nether", "coquille-nautile", "eclat-echo", "ancre-reapparition"]
    }
  },
  {
    slug: "motif-banniere",
    keyword: "motif de bannière minecraft",
    title: "Motifs de Bannière Minecraft : Guide Complet",
    h1: "Tous les Motifs de Bannière dans Minecraft",
    metaDescription: "Guide complet de tous les motifs de bannière dans Minecraft. Comment les obtenir, les appliquer et créer des designs personnalisés.",
    category: "items",
    volume: 210,
    content: {
      intro: "Les motifs de bannière sont des items spéciaux qui permettent d'ajouter des designs uniques aux bannières via le métier à tisser. Il existe plusieurs motifs rares comme le crâne, la fleur et le globe. Combinés avec les colorants, ils offrent des possibilités de personnalisation quasi infinies.",
      sections: [
        {
          heading: "Comment utiliser les motifs de bannière",
          content: "Placez un métier à tisser et insérez une bannière, un colorant et un motif de bannière dans les emplacements. Le motif sera appliqué à la bannière avec la couleur choisie. Vous pouvez superposer jusqu'à 6 couches de motifs sur une même bannière, créant des designs complexes et uniques."
        },
        {
          heading: "Motifs spéciaux et comment les obtenir",
          content: "Le motif Crâne s'obtient en combinant du papier avec un crâne de wither squelette. Le motif Fleur se craft avec une marguerite. Le motif Globe s'achète auprès d'un cartographe villageois. Le motif Piglin se trouve dans les coffres de bastions. Le motif Flow et le motif Guster viennent des chambres des épreuves."
        },
        {
          heading: "Motifs de base sans item",
          content: "De nombreux motifs sont accessibles directement au métier à tisser sans item spécial : rayures, diagonales, croix, bordures, gradient et plus. Expérimentez avec ces motifs de base et différentes couleurs pour créer des bannières élaborées sans avoir besoin d'items rares."
        },
        {
          heading: "Copier et sauvegarder des bannières",
          content: "Pour copier une bannière, placez la bannière décorée et une bannière vierge de même couleur dans la grille de craft. La bannière vierge prend le design de l'originale. Les bannières peuvent être placées sur des boucliers pour les personnaliser aussi."
        }
      ],
      tips: [
        "Superposez jusqu'à 6 couches de motifs pour des designs complexes",
        "Les motifs de base sont gratuits au métier à tisser, sans item requis",
        "Copiez vos meilleures bannières en les craftant avec une bannière vierge",
        "Appliquez une bannière à un bouclier pour le personnaliser"
      ],
      faq: [
        {
          question: "Combien de couches de motifs peut-on mettre sur une bannière ?",
          answer: "Vous pouvez appliquer jusqu'à 6 couches de motifs sur une même bannière dans le métier à tisser. Chaque couche peut utiliser un motif et une couleur différents, permettant des designs très détaillés."
        },
        {
          question: "Comment mettre une bannière sur un bouclier ?",
          answer: "Placez un bouclier et une bannière dans la grille de craft. Le design de la bannière sera appliqué au bouclier. Cette fonctionnalité est exclusive à la version Java Edition."
        }
      ],
      relatedSlugs: ["code-couleur", "modele-de-forge", "livre-enchante", "tesson-poterie", "terre-cuite"]
    }
  },
  {
    slug: "tesson-poterie",
    keyword: "tesson de poterie minecraft",
    title: "Tesson de Poterie Minecraft : Guide",
    h1: "Les Tessons de Poterie dans Minecraft",
    metaDescription: "Guide des tessons de poterie dans Minecraft. Comment les obtenir par archéologie, les utiliser pour décorer des vases et tous les motifs disponibles.",
    category: "items",
    volume: 170,
    content: {
      intro: "Les tessons de poterie (pottery sherds) sont des items décoratifs ajoutés en 1.20 obtenus via le système d'archéologie. En brossant du sable ou du gravier suspect dans les structures, vous découvrez des tessons avec des motifs uniques. Ils servent à décorer les vases en argile.",
      sections: [
        {
          heading: "Comment obtenir des tessons de poterie",
          content: "Les tessons s'obtiennent en utilisant une brosse sur des blocs de sable suspect ou de gravier suspect trouvés dans certaines structures. Les ruines sous-marines (chaudes et froides), les puits de désert, les ruines de sentier et les cités antiques contiennent ces blocs. Chaque structure offre des motifs différents."
        },
        {
          heading: "Fabrication des vases décorés",
          content: "Combinez 4 tessons de poterie (ou briques) en losange dans la grille de craft pour créer un vase décoré. Chaque face du vase affiche le motif du tesson utilisé. Vous pouvez mélanger tessons et briques normales pour un design personnalisé sur chaque face."
        },
        {
          heading: "Tous les motifs disponibles",
          content: "Il existe plus de 20 motifs de tessons différents : Angler, Archer, Arms Up, Blade, Brewer, Burn, Danger, Explorer, Friend, Heart, Heartbreak, Howl, Miner, Mourner, Plenty, Prize, Sheaf, Shelter, Skull, Snort, Flow, Guster et Scrape. Chaque motif est associé à une structure spécifique."
        }
      ],
      tips: [
        "Brossez délicatement les blocs suspects pour ne pas les casser",
        "Chaque structure offre des motifs de tessons différents",
        "Mélangez tessons et briques pour des designs de vases uniques",
        "Les vases décorés peuvent stocker un stack d'items à l'intérieur"
      ],
      faq: [
        {
          question: "Où trouver une brosse dans Minecraft ?",
          answer: "La brosse se craft avec 1 plume, 1 lingot de cuivre et 1 bâton alignés verticalement. C'est un outil à durabilité limitée utilisé exclusivement pour l'archéologie sur les blocs suspects."
        },
        {
          question: "Les vases décorés servent-ils de stockage ?",
          answer: "Oui, depuis la 1.20.3, les vases décorés peuvent stocker un seul stack d'items (64 ou moins selon l'item). Ils se cassent en dropping leur contenu quand détruits sans Toucher de soie."
        }
      ],
      relatedSlugs: ["motif-banniere", "mosaique-bambou", "terre-cuite", "brique-terre-crue", "modele-de-forge"]
    }
  },
  {
    slug: "mosaique-bambou",
    keyword: "mosaique de bambou minecraft",
    title: "Mosaïque de Bambou Minecraft : Guide",
    h1: "La Mosaïque de Bambou dans Minecraft",
    metaDescription: "Guide de la mosaïque de bambou dans Minecraft. Recette de craft, utilisations décoratives et toute la famille de blocs en bambou.",
    category: "items",
    volume: 170,
    content: {
      intro: "La mosaïque de bambou est un bloc décoratif ajouté en 1.20 qui fait partie de la nouvelle famille de blocs en bambou. Son motif en tissage croisé apporte une touche asiatique et naturelle aux constructions. Elle se décline en dalles et escaliers pour une intégration complète.",
      sections: [
        {
          heading: "Recette de la mosaïque de bambou",
          content: "La mosaïque de bambou se fabrique en empilant 2 dalles de bambou verticalement dans la grille de craft. Les dalles de bambou s'obtiennent via le tailleur de pierre ou en plaçant 3 planches de bambou en ligne. Les planches de bambou se craftent avec 2 blocs de bambou côte à côte."
        },
        {
          heading: "Famille de blocs en bambou",
          content: "La mise à jour 1.20 a introduit toute une famille de blocs en bambou : planches, dalles, escaliers, clôtures, portes, trappes, boutons, plaques de pression, bateaux, pancartes et la mosaïque. Le bambou est le premier bois obtenu à partir d'une plante et non d'un arbre."
        },
        {
          heading: "Utilisations décoratives",
          content: "La mosaïque de bambou est parfaite pour les constructions asiatiques, les pavillons de jardin et les intérieurs naturels. Son motif unique se distingue des autres planches de bois. Alternez avec les planches de bambou classiques pour varier les textures. Les dalles et escaliers de mosaïque complètent les possibilités."
        }
      ],
      tips: [
        "2 dalles de bambou empilées = 1 bloc de mosaïque de bambou",
        "Le bambou pousse très vite et fournit une source de bois renouvelable",
        "Combinez mosaïque et planches de bambou pour plus de variété",
        "Le radeau en bambou est la variante du bateau pour le bambou"
      ],
      faq: [
        {
          question: "Comment obtenir des planches de bambou ?",
          answer: "Placez 2 blocs de bambou côte à côte dans la grille de craft pour obtenir 2 planches de bambou. Les blocs de bambou s'obtiennent en retirant l'écorce de bambou avec une hache ou en plaçant 9 bambous en carré 3x3."
        },
        {
          question: "Peut-on utiliser la mosaïque de bambou comme combustible ?",
          answer: "Oui, comme tous les blocs en bois, la mosaïque de bambou peut servir de combustible dans le four. Cependant, les bambous eux-mêmes sont un combustible très faible et il est plus rentable de les transformer en planches d'abord."
        }
      ],
      relatedSlugs: ["tesson-poterie", "dalle-pierre-lisse", "brique-terre-crue", "terre-cuite", "pierre-taillee"]
    }
  },
  {
    slug: "dalle-pierre-lisse",
    keyword: "dalle de pierre lisse minecraft",
    title: "Dalle de Pierre Lisse Minecraft : Guide",
    h1: "La Dalle de Pierre Lisse dans Minecraft",
    metaDescription: "Guide de la dalle de pierre lisse dans Minecraft. Recette de craft, utilisations en construction et différences avec les autres dalles de pierre.",
    category: "items",
    volume: 260,
    content: {
      intro: "La dalle de pierre lisse (smooth stone slab) est l'une des dalles les plus utilisées en construction dans Minecraft. Sa texture propre et uniforme en fait un choix populaire pour les sols, comptoirs et détails architecturaux. Elle nécessite de la roche lisse, obtenue par double cuisson.",
      sections: [
        {
          heading: "Recette de craft",
          content: "Placez 3 blocs de roche lisse en ligne horizontale dans la grille de craft pour obtenir 6 dalles de pierre lisse. La roche lisse s'obtient en cuisant de la roche (cobblestone) au four pour obtenir de la pierre, puis en recuisant la pierre pour obtenir de la roche lisse. Vous pouvez aussi utiliser le tailleur de pierre."
        },
        {
          heading: "Avantages en construction",
          content: "La dalle de pierre lisse a une texture grise uniforme très propre. Contrairement aux dalles de roche ou de pierre, elle n'a pas de texture craquelée ou rugueuse. Placée en demi-bloc, elle permet de créer des sols légèrement surélevés, des comptoirs, des trottoirs et des détails fins."
        },
        {
          heading: "Comparaison avec les autres dalles de pierre",
          content: "Minecraft propose plusieurs dalles de pierre : roche (cobblestone), pierre (stone), pierre taillée (stone bricks), roche lisse (smooth stone) et andésite/diorite/granite. La dalle de pierre lisse est la plus épurée visuellement, tandis que la dalle de roche est la plus facile à obtenir."
        }
      ],
      tips: [
        "Utilisez le tailleur de pierre pour un craft plus efficace",
        "La dalle de pierre lisse est parfaite pour les comptoirs de cuisine",
        "Combinez les dalles du haut et du bas pour un bloc plein",
        "Les mobs ne spawnent pas sur les dalles placées sur la moitié inférieure"
      ],
      faq: [
        {
          question: "Les mobs peuvent-ils spawn sur les dalles ?",
          answer: "Les mobs ne peuvent pas spawn sur les dalles placées sur la moitié inférieure d'un bloc. Les dalles sur la moitié supérieure ou les doubles dalles permettent le spawn. C'est une mécanique utile pour sécuriser des zones."
        },
        {
          question: "Quelle est la méthode la plus rapide pour produire des dalles de pierre lisse ?",
          answer: "Utilisez des hauts fourneaux pour accélérer la double cuisson (cobblestone > pierre > roche lisse). Minez avec Toucher de soie pour obtenir directement de la pierre et sauter la première cuisson. Puis craftez les dalles au tailleur de pierre."
        }
      ],
      relatedSlugs: ["roche-lisse", "pierre-taillee", "pierre-mousse", "mosaique-bambou", "terre-cuite"]
    }
  },
  {
    slug: "brique-terre-crue",
    keyword: "brique de terre crue minecraft",
    title: "Brique de Terre Crue Minecraft : Guide",
    h1: "La Brique de Terre Crue dans Minecraft",
    metaDescription: "Guide de la brique de terre crue dans Minecraft. Comment la fabriquer avec de l'argile, la cuire et ses utilisations en décoration.",
    category: "items",
    volume: 140,
    content: {
      intro: "La brique de terre crue (mud brick) est un bloc décoratif ajouté en 1.19 fabriqué à partir de boue séchée. Elle offre une texture terreuse et rustique parfaite pour les constructions de style désertique, les villages et les bâtiments anciens. Elle se décline en dalles, escaliers et murets.",
      sections: [
        {
          heading: "Comment fabriquer des briques de terre crue",
          content: "Placez 4 blocs de boue emballée (packed mud) en carré dans la grille de craft 2x2 pour obtenir 4 briques de terre crue. La boue emballée se fabrique en combinant 1 bloc de boue avec 1 blé dans la grille de craft. La boue s'obtient en utilisant une fiole d'eau sur de la terre."
        },
        {
          heading: "Obtenir de la boue",
          content: "Utilisez une fiole d'eau sur un bloc de terre pour le transformer en boue. La boue se génère aussi naturellement dans le biome de mangrove. Elle a des propriétés physiques uniques : les entités s'enfoncent légèrement dedans et elle peut être séchée avec des stalactites de dripstone."
        },
        {
          heading: "Variantes et utilisations",
          content: "Les briques de terre crue se déclinent en dalles, escaliers et murets via le tailleur de pierre. Leur texture brun clair est unique et se marie bien avec la terre cuite, le grès et le bois d'acacia. Elles sont idéales pour les constructions africaines, moyen-orientales et les villages rustiques."
        }
      ],
      tips: [
        "Terre + fiole d'eau = boue, boue + blé = boue emballée",
        "4 boues emballées = 4 briques de terre crue",
        "Le biome de mangrove est une source naturelle de boue",
        "Combinez avec de la terre cuite pour des constructions rustiques variées"
      ],
      faq: [
        {
          question: "Peut-on sécher la boue en argile ?",
          answer: "Oui, placez de la boue au-dessus d'un bloc avec une stalactite de dripstone en dessous. La boue se transforme lentement en argile, offrant un moyen renouvelable d'obtenir de l'argile."
        },
        {
          question: "Les briques de terre crue sont-elles aussi solides que les briques normales ?",
          answer: "Les briques de terre crue ont une résistance aux explosions inférieure aux briques de pierre classiques. Elles sont principalement un bloc décoratif et ne sont pas recommandées pour les constructions défensives."
        }
      ],
      relatedSlugs: ["terre-cuite", "mosaique-bambou", "dalle-pierre-lisse", "tesson-poterie", "pierre-taillee"]
    }
  }
];
