import type { PageData } from "./types";

export const craftingPagesPart3: PageData[] = [
  {
    slug: "portail",
    keyword: "comment faire un portail dans minecraft",
    title: "Portails Minecraft : Guide de Tous les Portails",
    h1: "Comment Faire un Portail dans Minecraft",
    metaDescription: "Apprenez comment faire un portail dans Minecraft : portail du Nether en obsidienne, portail de l'End et astuces pour les construire facilement.",
    category: "crafting",
    volume: 170,
    content: {
      intro: "Les portails sont des structures essentielles dans Minecraft qui vous permettent de voyager entre les différentes dimensions du jeu. Le portail du Nether, construit en obsidienne, vous transporte dans une dimension infernale remplie de ressources uniques. Le portail de l'End, quant à lui, se trouve dans les forteresses et mène au combat final contre l'Ender Dragon.",
      sections: [
        {
          heading: "Construire le Portail du Nether",
          content: "Le portail du Nether nécessite au minimum 10 blocs d'obsidienne (ou 14 pour un cadre complet avec les coins). Disposez les blocs en un rectangle de 4 blocs de large sur 5 blocs de haut. L'obsidienne s'obtient en versant de l'eau sur de la lave source, puis en la minant avec une pioche en diamant ou en néthérite. Une fois le cadre construit, allumez-le avec un briquet (silex et acier) pour activer le portail violet. Vous pouvez économiser de l'obsidienne en utilisant d'autres blocs pour les coins du cadre."
        },
        {
          heading: "Trouver et Activer le Portail de l'End",
          content: "Le portail de l'End ne se craft pas : il se trouve dans la salle du portail des forteresses souterraines (strongholds). Pour le localiser, lancez des yeux de l'Ender dans le ciel et suivez leur trajectoire. Une fois la forteresse trouvée, repérez la salle du portail contenant 12 cadres. Chaque cadre doit contenir un oeil de l'Ender pour activer le portail. Les yeux de l'Ender se fabriquent en combinant une perle de l'Ender et de la poudre de Blaze dans l'inventaire."
        },
        {
          heading: "Astuces et Portails Spéciaux",
          content: "Dans le Nether, chaque bloc parcouru équivaut à 8 blocs dans l'Overworld, ce qui rend les portails très utiles pour le voyage rapide. Vous pouvez créer un réseau de portails du Nether pour relier vos bases éloignées. Attention au placement : deux portails trop proches dans l'Overworld peuvent mener au même portail dans le Nether. En mode créatif, vous pouvez aussi construire des portails de tailles personnalisées, allant jusqu'à 23x23 blocs pour le portail du Nether."
        }
      ],
      tips: [
        "Vous pouvez créer un portail du Nether sans pioche en diamant en utilisant un moule d'eau et de lave pour former l'obsidienne directement en place.",
        "Placez des dalles devant votre portail du Nether pour empêcher les Piglins zombifiés de passer dans l'Overworld.",
        "Notez les coordonnées de votre portail dans l'Overworld et divisez X et Z par 8 pour trouver l'emplacement idéal dans le Nether.",
        "Les portails de l'End ont parfois des yeux déjà placés naturellement, ce qui réduit le nombre d'yeux de l'Ender nécessaires."
      ],
      faq: [
        {
          question: "Peut-on construire un portail du Nether sans diamant ?",
          answer: "Oui, en utilisant la technique du moule à lave. Placez des blocs pour former le cadre, versez de la lave dans chaque emplacement puis de l'eau pour la transformer en obsidienne sur place, sans avoir besoin de la miner."
        },
        {
          question: "Combien d'yeux de l'Ender faut-il pour le portail de l'End ?",
          answer: "Il faut au maximum 12 yeux de l'Ender pour remplir tous les cadres du portail. Cependant, certains cadres peuvent déjà contenir un oeil naturellement (environ 10% de chance chacun), donc prévoyez-en au moins 15 pour être sûr d'en avoir assez en comptant ceux utilisés pour localiser la forteresse."
        }
      ],
      relatedSlugs: ["pioche", "boussole", "torche"]
    }
  },
  {
    slug: "bibliotheque",
    keyword: "comment faire une bibliothèque sur minecraft",
    title: "Bibliothèque Minecraft : Craft et Enchantements",
    h1: "Comment Faire une Bibliothèque dans Minecraft",
    metaDescription: "Découvrez comment faire une bibliothèque sur Minecraft : recette de craft avec livres et bois, placement optimal pour la table d'enchantement.",
    category: "crafting",
    volume: 170,
    content: {
      intro: "La bibliothèque est un bloc décoratif et fonctionnel indispensable dans Minecraft. Elle est principalement utilisée pour améliorer les enchantements de la table d'enchantement en augmentant le niveau maximum des sorts disponibles. Avec 15 bibliothèques correctement placées, vous débloquez les enchantements de niveau 30, les plus puissants du jeu.",
      sections: [
        {
          heading: "Recette de Craft de la Bibliothèque",
          content: "Pour crafter une bibliothèque, vous avez besoin de 3 livres et 6 planches de bois (n'importe quel type). Dans la table de craft, placez les 3 livres sur la ligne du milieu et remplissez les lignes du haut et du bas avec les 6 planches de bois. Chaque livre nécessite 3 feuilles de papier et 1 cuir. Le papier se fabrique avec 3 cannes à sucre alignées horizontalement. Au total, pour 15 bibliothèques, il vous faudra 45 livres (135 papiers et 45 cuirs) et 90 planches de bois."
        },
        {
          heading: "Placement Optimal pour les Enchantements",
          content: "Pour maximiser le niveau d'enchantement, placez 15 bibliothèques autour de votre table d'enchantement. Les bibliothèques doivent être à exactement 1 bloc de distance de la table, avec un espace d'air entre elles et la table. La disposition classique consiste à former un U de bibliothèques sur 2 niveaux de hauteur autour de la table. Assurez-vous qu'aucun bloc (même des torches) ne se trouve entre les bibliothèques et la table, car cela bloquerait leur effet."
        },
        {
          heading: "Autres Utilisations de la Bibliothèque",
          content: "En dehors des enchantements, les bibliothèques servent de décoration pour créer des salles de lecture ou des bureaux réalistes. Elles peuvent être détruites pour récupérer 3 livres, ce qui en fait une source de livres pratique. Les bibliothèques sont aussi un excellent combustible dans le fourneau, fondant 1,5 objet par bloc. Dans les villages, les maisons de bibliothécaires contiennent naturellement des bibliothèques que vous pouvez récupérer."
        }
      ],
      tips: [
        "Installez une ferme à cannes à sucre automatique pour produire du papier en masse, nécessaire à la fabrication des livres.",
        "Les bibliothèques trouvées dans les villages et les forteresses peuvent être récupérées gratuitement avec un outil doté de Toucher de Soie.",
        "Placez exactement 15 bibliothèques autour de la table d'enchantement pour atteindre le niveau 30, le maximum possible.",
        "Utilisez un outil avec l'enchantement Toucher de Soie pour récupérer la bibliothèque entière au lieu de seulement 3 livres."
      ],
      faq: [
        {
          question: "Combien de bibliothèques faut-il pour le niveau 30 d'enchantement ?",
          answer: "Il faut exactement 15 bibliothèques placées correctement autour de la table d'enchantement pour atteindre le niveau 30. Elles doivent être à un bloc de distance avec de l'air entre elles et la table, et peuvent être empilées sur 2 niveaux."
        },
        {
          question: "Peut-on utiliser n'importe quel type de bois pour crafter une bibliothèque ?",
          answer: "Oui, vous pouvez utiliser n'importe quel type de planches de bois (chêne, sapin, bouleau, jungle, acacia, chêne noir, palétuviers, cerisier, bambou) et même mélanger différents types dans la même recette."
        }
      ],
      relatedSlugs: ["cadre", "tableau", "porte", "echafaudage"]
    }
  },
  {
    slug: "porte",
    keyword: "comment faire une porte sur minecraft",
    title: "Porte Minecraft : Craft et Types",
    h1: "Comment Faire une Porte dans Minecraft",
    metaDescription: "Apprenez comment faire une porte sur Minecraft : recette de craft en bois ou fer, tous les types de portes et leurs utilisations détaillées.",
    category: "crafting",
    volume: 170,
    content: {
      intro: "Les portes sont des éléments essentiels pour sécuriser vos constructions dans Minecraft. Elles existent en plusieurs variantes de bois ainsi qu'en fer, chacune avec ses propriétés uniques. Les portes en bois s'ouvrent à la main tandis que les portes en fer nécessitent un signal de redstone, offrant une sécurité supplémentaire contre les mobs.",
      sections: [
        {
          heading: "Recette de Craft des Portes en Bois",
          content: "Pour fabriquer une porte en bois, placez 6 planches du même type de bois dans la table de craft, en remplissant les deux colonnes de gauche (2x3). Cette recette produit 3 portes. Vous pouvez utiliser n'importe lequel des types de bois disponibles : chêne, sapin, bouleau, jungle, acacia, chêne noir, palétuviers, cerisier ou bambou. Chaque type de bois donne une porte avec une apparence différente, permettant de varier le style architectural de vos constructions."
        },
        {
          heading: "Porte en Fer et Sécurité",
          content: "La porte en fer se craft avec 6 lingots de fer disposés de la même manière que les portes en bois (deux colonnes de 3). Contrairement aux portes en bois, elle ne peut pas être ouverte par un clic droit ni par les villageois. Elle nécessite un bouton, un levier, une plaque de pression ou un signal de redstone pour s'ouvrir. Cette propriété en fait le choix idéal pour protéger votre base des zombies, car ceux-ci peuvent casser les portes en bois en difficulté Hard."
        },
        {
          heading: "Placement et Mécanismes Avancés",
          content: "Les portes occupent deux blocs de hauteur et peuvent être placées pour s'ouvrir vers la gauche ou la droite selon votre position. Pour créer une double porte, placez deux portes côte à côte. En redstone, vous pouvez synchroniser leur ouverture avec un seul signal. Les portes sont aussi utiles comme source d'air temporaire sous l'eau dans certaines versions. Pensez à utiliser des trappes pour compléter vos systèmes de portes dans des conceptions plus complexes."
        }
      ],
      tips: [
        "En difficulté Difficile, les zombies peuvent casser les portes en bois. Utilisez des portes en fer ou placez la porte un bloc plus haut pour les bloquer.",
        "Placez deux portes côte à côte avec un bouton au centre pour créer une élégante double porte fonctionnelle.",
        "Les portes en bois peuvent être utilisées comme combustible dans un fourneau en cas d'urgence.",
        "Les villageois peuvent ouvrir les portes en bois mais pas les portes en fer, ce qui est utile pour contrôler leurs déplacements."
      ],
      faq: [
        {
          question: "Comment ouvrir une porte en fer dans Minecraft ?",
          answer: "Une porte en fer ne s'ouvre pas avec un clic droit. Vous devez utiliser un mécanisme de redstone : bouton, levier, plaque de pression (en pierre de préférence pour que les mobs ne l'activent pas) ou un circuit de redstone plus complexe."
        },
        {
          question: "Les portes empêchent-elles les mobs de passer ?",
          answer: "Les portes fermées bloquent tous les mobs. Cependant, en difficulté Difficile, les zombies peuvent casser les portes en bois après quelques secondes. Les portes en fer sont indestructibles par les mobs et offrent donc une protection totale."
        }
      ],
      relatedSlugs: ["piston", "distributeur", "bibliotheque"]
    }
  },
  {
    slug: "torche",
    keyword: "comment faire une torche sur minecraft",
    title: "Torche Minecraft : Craft et Variantes",
    h1: "Comment Faire une Torche dans Minecraft",
    metaDescription: "Découvrez comment faire une torche sur Minecraft : recette avec charbon et bâton, variantes de redstone et soul torch, guide d'éclairage.",
    category: "crafting",
    volume: 170,
    content: {
      intro: "La torche est l'un des objets les plus fondamentaux de Minecraft, indispensable dès les premiers instants de jeu. Elle fournit un niveau de lumière de 14, suffisant pour empêcher les mobs hostiles d'apparaître dans un rayon de plusieurs blocs. Il existe plusieurs variantes de torches, chacune avec des propriétés d'éclairage et des usages spécifiques.",
      sections: [
        {
          heading: "Recette de la Torche Classique",
          content: "Pour fabriquer 4 torches, placez 1 charbon (ou charbon de bois) au-dessus de 1 bâton dans la grille de craft. Les bâtons s'obtiennent en plaçant 2 planches de bois verticalement. Le charbon se mine dans les veines de minerai de charbon trouvées en surface ou sous terre. Le charbon de bois, alternative identique, s'obtient en faisant cuire un bloc de bûche dans un fourneau. Cette recette simple vous accompagnera tout au long de votre aventure."
        },
        {
          heading: "Variantes : Torche de Redstone et Torche des Âmes",
          content: "La torche de redstone se fabrique avec 1 poudre de redstone au-dessus d'un bâton. Elle émet un signal de redstone permanent et un faible niveau de lumière de 7, insuffisant pour empêcher le spawn de mobs. La torche des âmes (soul torch) utilise du sable des âmes ou de la terre des âmes à la place du charbon, avec un bâton et du charbon. Elle produit une flamme bleue avec un niveau de lumière de 10 et repousse les Piglins dans le Nether, ce qui en fait un outil défensif précieux."
        },
        {
          heading: "Stratégies d'Éclairage Optimales",
          content: "Les mobs hostiles apparaissent dans les zones où le niveau de lumière est de 0 (depuis la 1.18). Placez une torche tous les 12 blocs sur un terrain plat pour couvrir toute la zone. Dans les grottes, placez-les plus fréquemment à cause des recoins et des variations de terrain. Les torches peuvent être placées sur le sol et sur les murs. Pensez aussi aux lanternes et aux lampes de redstone pour un éclairage permanent et esthétique dans vos constructions avancées."
        }
      ],
      tips: [
        "Faites cuire des bûches dans un fourneau pour obtenir du charbon de bois si vous ne trouvez pas de minerai de charbon au début du jeu.",
        "Placez des torches sur votre gauche en explorant les grottes pour retrouver facilement la sortie en les gardant sur votre droite.",
        "Les torches des âmes repoussent les Piglins dans le Nether, utilisez-les pour sécuriser vos chemins.",
        "Une seule torche de redstone peut alimenter un circuit de redstone de manière permanente sans avoir besoin de levier."
      ],
      faq: [
        {
          question: "Quelle est la différence entre le charbon et le charbon de bois pour les torches ?",
          answer: "Il n'y a aucune différence fonctionnelle. Le charbon se mine dans le monde et le charbon de bois se fabrique en cuisant des bûches. Les deux produisent exactement 4 torches par unité et sont interchangeables dans toutes les recettes."
        },
        {
          question: "Tous les combien de blocs faut-il placer une torche pour empêcher le spawn de mobs ?",
          answer: "Depuis la version 1.18, les mobs n'apparaissent qu'au niveau de lumière 0. Une torche (niveau 14) couvre environ 12 blocs sur terrain plat. En pratique, espacez vos torches de 10-12 blocs pour une couverture sûre, et plus rapprochées dans les grottes sinueuses."
        }
      ],
      relatedSlugs: ["pioche", "fabriquer-haut-fourneau", "craft-haut-fourneau", "portail"]
    }
  },
  {
    slug: "boussole",
    keyword: "comment faire une boussole sur minecraft",
    title: "Boussole Minecraft : Craft et Utilisation",
    h1: "Comment Faire une Boussole dans Minecraft",
    metaDescription: "Apprenez comment faire une boussole sur Minecraft : recette avec fer et redstone, utilisation pour retrouver le spawn et créer une carte.",
    category: "crafting",
    volume: 170,
    content: {
      intro: "La boussole est un outil de navigation pratique dans Minecraft qui pointe toujours vers le point d'apparition mondial (world spawn). Elle est également un composant essentiel pour fabriquer des cartes et des cartes de localisation. Depuis l'ajout de la boussole de récupération, cet objet a gagné encore plus d'utilité pour les joueurs explorateurs.",
      sections: [
        {
          heading: "Recette de Craft de la Boussole",
          content: "Pour crafter une boussole, placez 1 poudre de redstone au centre de la grille de craft 3x3 et entourez-la de 4 lingots de fer en forme de croix (haut, bas, gauche, droite). Vous obtiendrez une boussole dont l'aiguille pointe vers le point d'apparition mondial. La poudre de redstone se trouve en minant du minerai de redstone sous le niveau Y=16, et les lingots de fer s'obtiennent en faisant fondre du minerai de fer dans un fourneau."
        },
        {
          heading: "Utilisation et Boussole Magnétisée",
          content: "Par défaut, la boussole pointe vers le spawn mondial. Cependant, en combinant une boussole avec une pierre d'aimant (lodestone) sur une table de craft ou en cliquant droit sur la pierre d'aimant, vous créez une boussole magnétisée qui pointe vers cette pierre. Cette fonctionnalité est extrêmement utile pour marquer des lieux importants comme votre base principale. La boussole magnétisée fonctionne dans toutes les dimensions, à condition que la pierre d'aimant soit dans la même dimension."
        },
        {
          heading: "La Boussole de Récupération",
          content: "La boussole de récupération (Recovery Compass) est une variante spéciale qui pointe vers le dernier emplacement où vous êtes mort. Elle se fabrique avec 1 boussole entourée de 8 fragments d'écho, trouvés uniquement dans les cités antiques (ancient cities) du Deep Dark. Cette boussole est invaluable pour récupérer votre équipement après une mort en exploration. Si vous n'êtes pas mort récemment ou si vous êtes dans une autre dimension, l'aiguille tourne de manière aléatoire."
        }
      ],
      tips: [
        "Combinez une boussole avec 8 feuilles de papier sur la table de craft pour créer une carte de localisation qui montre votre position.",
        "La boussole ne fonctionne pas normalement dans le Nether ou l'End : l'aiguille tourne de manière erratique sauf si elle est magnétisée.",
        "Utilisez une pierre d'aimant pour faire pointer la boussole vers votre base plutôt que vers le spawn mondial.",
        "Les villageois bibliothécaires vendent parfois des boussoles, ce qui peut être plus simple que de les crafter."
      ],
      faq: [
        {
          question: "La boussole fonctionne-t-elle dans le Nether ?",
          answer: "Non, une boussole normale tourne de manière aléatoire dans le Nether et l'End. Pour naviguer dans ces dimensions, utilisez une boussole magnétisée liée à une pierre d'aimant placée dans la même dimension."
        },
        {
          question: "Comment fabriquer une boussole de récupération ?",
          answer: "Placez une boussole au centre de la grille de craft et entourez-la de 8 fragments d'écho. Les fragments d'écho se trouvent exclusivement dans les coffres des cités antiques du Deep Dark, ce qui en fait un objet rare et précieux."
        }
      ],
      relatedSlugs: ["pioche", "portail", "craft-longue-vue", "torche"]
    }
  },
  {
    slug: "pioche",
    keyword: "comment faire une pioche minecraft",
    title: "Pioche Minecraft : Craft et Matériaux",
    h1: "Comment Faire une Pioche dans Minecraft",
    metaDescription: "Découvrez comment faire une pioche Minecraft : recettes pour bois, pierre, fer, or, diamant et néthérite. Guide complet de craft et matériaux.",
    category: "crafting",
    volume: 210,
    content: {
      intro: "La pioche est l'outil le plus important de Minecraft, indispensable pour miner la majorité des blocs du jeu. Elle existe en six niveaux de matériaux, chacun offrant une durabilité et une vitesse de minage différentes. Choisir la bonne pioche au bon moment est crucial pour progresser efficacement dans votre aventure.",
      sections: [
        {
          heading: "Recettes de Craft selon les Matériaux",
          content: "Toutes les pioches se craftent de la même manière : 3 unités du matériau en ligne horizontale en haut et 2 bâtons verticalement au centre. La pioche en bois utilise 3 planches, la pioche en pierre 3 pavés (cobblestone), la pioche en fer 3 lingots de fer, la pioche en or 3 lingots d'or, et la pioche en diamant 3 diamants. La pioche en néthérite s'obtient différemment : en combinant une pioche en diamant avec un lingot de néthérite sur une table de forge (smithing table)."
        },
        {
          heading: "Durabilité et Vitesse de Minage",
          content: "Chaque matériau offre une durabilité différente : bois (59), pierre (131), fer (250), or (32), diamant (1561) et néthérite (2031). La vitesse de minage augmente avec le niveau, sauf pour l'or qui est le plus rapide mais le moins durable. Certains blocs nécessitent un niveau minimum de pioche pour dropper : le fer et le lapis-lazuli nécessitent une pioche en pierre minimum, l'or et les diamants une pioche en fer, et l'obsidienne une pioche en diamant minimum."
        },
        {
          heading: "Enchantements Recommandés pour les Pioches",
          content: "Les enchantements améliorent considérablement votre pioche. Efficacité (jusqu'au niveau V) augmente la vitesse de minage de manière drastique. Solidité (Unbreaking III) triple la durabilité effective. Raccommodage (Mending) répare la pioche avec l'expérience collectée, la rendant quasiment éternelle. Fortune III multiplie les drops de minerais comme le diamant et le lapis-lazuli. Toucher de Soie permet de récupérer les blocs intacts, comme le minerai de diamant ou la pierre au lieu du pavé."
        }
      ],
      tips: [
        "Craftez votre première pioche en bois immédiatement pour miner de la pierre, puis passez directement à la pioche en pierre.",
        "Gardez toujours une pioche en fer de rechange dans votre inventaire en cas de casse au fond d'une mine.",
        "La pioche en or mine plus vite que le diamant mais casse très rapidement : elle est surtout utile pour les enchantements sur la table d'enchantement.",
        "Combinez Fortune III sur une pioche en diamant pour maximiser vos récoltes de diamants, d'émeraudes et de lapis-lazuli."
      ],
      faq: [
        {
          question: "Quelle pioche faut-il pour miner de l'obsidienne ?",
          answer: "Il faut au minimum une pioche en diamant pour miner de l'obsidienne et la récupérer. Une pioche en néthérite fonctionne aussi. Avec une pioche inférieure, le bloc se casse mais ne donne rien. Le minage prend environ 9,4 secondes avec une pioche en diamant sans enchantement."
        },
        {
          question: "Comment obtenir une pioche en néthérite ?",
          answer: "Vous ne pouvez pas crafter directement une pioche en néthérite. Fabriquez d'abord une pioche en diamant, puis combinez-la avec un modèle de forge en néthérite et un lingot de néthérite sur une table de forge. Le lingot de néthérite s'obtient en combinant 4 fragments de néthérite et 4 lingots d'or."
        }
      ],
      relatedSlugs: ["torche", "seau", "portail", "fabriquer-haut-fourneau"]
    }
  },
  {
    slug: "bateau",
    keyword: "comment faire un bateau sur minecraft",
    title: "Bateau Minecraft : Craft et Navigation",
    h1: "Comment Faire un Bateau dans Minecraft",
    metaDescription: "Apprenez comment faire un bateau sur Minecraft : recette de craft avec planches de bois, navigation, bateau-coffre et astuces de transport.",
    category: "crafting",
    volume: 210,
    content: {
      intro: "Le bateau est le moyen de transport aquatique principal dans Minecraft, permettant de traverser les océans et les rivières rapidement. Depuis les mises à jour récentes, vous pouvez aussi fabriquer des bateaux-coffres pour transporter des objets pendant vos voyages. Les bateaux existent en plusieurs variantes de bois, chacune avec une apparence unique.",
      sections: [
        {
          heading: "Recette de Craft du Bateau",
          content: "Pour crafter un bateau, placez 5 planches de bois du même type dans la table de craft : 3 planches sur la ligne du bas et 1 planche de chaque côté sur la ligne du milieu, formant un U. Sur l'édition Bedrock, il faut aussi ajouter une pelle en bois au centre de la ligne du milieu. Vous obtenez un bateau correspondant au type de bois utilisé. Pour un bateau-coffre, ajoutez un coffre à côté d'un bateau standard dans la table de craft."
        },
        {
          heading: "Navigation et Contrôles",
          content: "Pour utiliser un bateau, placez-le sur l'eau avec un clic droit puis montez dedans avec un autre clic droit. Utilisez les touches ZQSD pour le diriger. Le bateau peut transporter un passager supplémentaire (joueur ou mob), ce qui est utile pour déplacer des animaux ou des villageois. Sur la glace, les bateaux glissent à très grande vitesse, ce qui en fait le moyen de transport le plus rapide du jeu sur les routes de glace compactée (packed ice ou blue ice)."
        },
        {
          heading: "Astuces de Transport avec les Bateaux",
          content: "Les autoroutes de glace avec des bateaux sont l'un des moyens de transport les plus efficaces dans Minecraft. Sur de la glace bleue, un bateau peut atteindre environ 70 blocs par seconde, bien plus rapide que l'élytre. Les bateaux protègent aussi contre les dégâts de chute : si vous atterrissez dans un bateau, vous ne subissez aucun dégât. Un bateau-coffre offre 27 emplacements de stockage supplémentaires, parfait pour les expéditions minières lointaines."
        }
      ],
      tips: [
        "Construisez une autoroute de glace bleue dans le Nether pour le transport le plus rapide possible : chaque bloc dans le Nether vaut 8 dans l'Overworld.",
        "Placez un mob dans un bateau pour le transporter facilement, y compris les villageois pour peupler vos villages artificiels.",
        "Le bateau-coffre permet de transporter des ressources pendant les explorations maritimes sans encombrer votre inventaire.",
        "Les bateaux ne coulent pas et ne prennent pas de dégâts au contact des nénuphars, qui sont simplement détruits."
      ],
      faq: [
        {
          question: "Peut-on utiliser un bateau sur la terre ferme ?",
          answer: "Les bateaux sont principalement conçus pour l'eau, mais ils fonctionnent très bien sur la glace où ils sont extrêmement rapides. Sur la terre ferme, ils avancent très lentement et ne sont pas pratiques sauf pour descendre des pentes sans dégâts de chute."
        },
        {
          question: "Comment faire un bateau-coffre ?",
          answer: "Placez un bateau et un coffre côte à côte dans la grille de craft. Le bateau-coffre remplace le siège passager par un coffre de 27 emplacements. Vous pouvez aussi placer un coffre directement sur un bateau en jeu avec un clic droit dans certaines versions."
        }
      ],
      relatedSlugs: ["seau", "porte", "pioche", "echafaudage"]
    }
  },
  {
    slug: "tableau",
    keyword: "comment faire un tableau minecraft",
    title: "Tableau Minecraft : Craft et Guide",
    h1: "Comment Faire un Tableau dans Minecraft",
    metaDescription: "Découvrez comment faire un tableau Minecraft : recette de craft avec laine et bâtons, tous les motifs disponibles et astuces de décoration.",
    category: "crafting",
    volume: 140,
    content: {
      intro: "Les tableaux (paintings) sont des éléments décoratifs populaires dans Minecraft qui ajoutent de la vie à vos constructions. Ils existent en différentes tailles et motifs, tous inspirés de peintures réelles ou créées spécialement pour le jeu. Le tableau affiché est choisi aléatoirement en fonction de l'espace mural disponible.",
      sections: [
        {
          heading: "Recette de Craft du Tableau",
          content: "Pour fabriquer un tableau, placez 1 laine (de n'importe quelle couleur) au centre de la grille de craft 3x3 et entourez-la de 8 bâtons. La couleur de la laine n'affecte pas le motif du tableau obtenu. Les bâtons se fabriquent avec des planches de bois et la laine s'obtient en tondant des moutons avec des cisailles ou en tuant des moutons. Chaque craft produit un seul tableau."
        },
        {
          heading: "Tailles et Motifs des Tableaux",
          content: "Les tableaux existent en plusieurs tailles : 1x1, 1x2, 2x1, 2x2, 4x2, 4x3 et 4x4 blocs. Lorsque vous placez un tableau, le jeu choisit aléatoirement un motif parmi ceux qui correspondent à l'espace disponible sur le mur. Pour obtenir un grand tableau, assurez-vous d'avoir un mur dégagé suffisamment large et haut. Vous pouvez casser et replacer le tableau jusqu'à obtenir le motif souhaité. Depuis la version 1.21, certains motifs spéciaux peuvent être obtenus via des modèles de tableau."
        },
        {
          heading: "Utilisations Décoratives et Passages Secrets",
          content: "Les tableaux sont traversables par les joueurs, ce qui les rend parfaits pour dissimuler des passages secrets. Placez un tableau devant une ouverture de 1x2 dans un mur et vous pouvez marcher à travers. Cette technique est très utilisée dans les bases multijoueurs pour cacher des salles de trésor. Les tableaux peuvent aussi être combinés avec des cadres et d'autres éléments décoratifs pour créer des galeries d'art élaborées dans vos constructions."
        }
      ],
      tips: [
        "Placez des blocs temporaires autour de l'espace de placement pour forcer une taille spécifique de tableau.",
        "Les tableaux peuvent cacher des passages secrets car les joueurs peuvent les traverser.",
        "Cassez et replacez le tableau plusieurs fois pour changer aléatoirement le motif affiché.",
        "Utilisez des cadres lumineux avec des objets nommés pour créer des décorations murales personnalisées en complément des tableaux."
      ],
      faq: [
        {
          question: "La couleur de la laine influence-t-elle le motif du tableau ?",
          answer: "Non, la couleur de la laine utilisée dans la recette n'a aucune influence sur le motif du tableau. Le motif est déterminé aléatoirement en fonction de l'espace disponible sur le mur au moment du placement."
        },
        {
          question: "Comment obtenir un tableau spécifique ?",
          answer: "Le moyen le plus simple est de placer et casser le tableau jusqu'à obtenir le motif voulu. Contrôlez la taille en limitant l'espace mural avec des blocs. Depuis la 1.21, vous pouvez utiliser des modèles de tableau combinés avec un tableau dans la table de craft pour obtenir des motifs spécifiques."
        }
      ],
      relatedSlugs: ["cadre", "bibliotheque", "porte", "echafaudage"]
    }
  },
  {
    slug: "piston",
    keyword: "comment faire un piston minecraft",
    title: "Piston Minecraft : Craft et Mécanismes",
    h1: "Comment Faire un Piston dans Minecraft",
    metaDescription: "Apprenez comment faire un piston Minecraft : recette de craft, piston collant, mécanismes redstone et exemples de circuits pratiques.",
    category: "crafting",
    volume: 140,
    content: {
      intro: "Le piston est un composant fondamental de la redstone dans Minecraft, capable de pousser des blocs lorsqu'il est activé. Combiné avec une boule de slime, il devient un piston collant qui peut aussi tirer les blocs. Ces mécanismes sont à la base de nombreuses machines automatiques, portes secrètes et systèmes de fermes dans le jeu.",
      sections: [
        {
          heading: "Recette de Craft du Piston et du Piston Collant",
          content: "Le piston standard se craft avec 3 planches de bois en ligne du haut, 1 lingot de fer au centre, 1 poudre de redstone en bas au centre, et 3 pavés (cobblestone) sur les emplacements restants du milieu et du bas. Pour fabriquer un piston collant, placez 1 boule de slime au-dessus d'un piston normal dans la grille de craft. Les boules de slime s'obtiennent en tuant des slimes, trouvés dans les marais la nuit ou dans les chunks à slimes sous le niveau Y=40."
        },
        {
          heading: "Fonctionnement et Limites des Pistons",
          content: "Un piston pousse jusqu'à 12 blocs lorsqu'il reçoit un signal de redstone. Le piston collant peut en plus tirer un bloc vers lui en se rétractant. Certains blocs ne peuvent pas être poussés : l'obsidienne, la bedrock, les blocs de commande, les cadres de portail de l'End et les entités de type bloc (coffres, fours, etc.). Le piston a besoin d'un espace vide devant lui pour s'étendre. Ces propriétés en font un outil polyvalent mais avec des contraintes à bien comprendre."
        },
        {
          heading: "Applications Pratiques en Redstone",
          content: "Les pistons sont utilisés dans de nombreux mécanismes : portes cachées (3x3, 4x4 ou même plus), fermes automatiques à cactus, cannes à sucre ou arbres, systèmes de tri d'objets, ascenseurs à blocs, et machines volantes utilisant des pistons collants et des blocs de slime. Les portes à pistons sont particulièrement populaires car elles offrent une entrée invisible dans votre base. Un circuit d'horloge de redstone combiné à des pistons permet de créer des systèmes automatisés puissants."
        }
      ],
      tips: [
        "Les pistons collants ne tirent pas les blocs en Bedrock Edition si le signal de redstone est retiré trop rapidement (1 tick).",
        "Utilisez un piston quasi-connecté (BUD switch) pour détecter les changements de blocs adjacents en Java Edition.",
        "Les blocs de slime et de miel attachés aux pistons collants déplacent les blocs adjacents, permettant de créer des machines volantes.",
        "Un piston peut casser les citrouilles et les melons cultivés automatiquement, ce qui est la base des fermes automatiques de ces cultures."
      ],
      faq: [
        {
          question: "Combien de blocs un piston peut-il pousser ?",
          answer: "Un piston peut pousser un maximum de 12 blocs à la fois. Si plus de 12 blocs se trouvent devant lui, il ne s'étendra pas. Cette limite s'applique aussi bien au piston standard qu'au piston collant."
        },
        {
          question: "Comment trouver des boules de slime pour le piston collant ?",
          answer: "Les boules de slime droppent des slimes. Ceux-ci apparaissent dans les marais la nuit (surtout lors des pleines lunes) et dans les chunks à slimes sous le niveau Y=40. Vous pouvez utiliser un outil en ligne comme chunkbase.com pour localiser les chunks à slimes de votre seed."
        }
      ],
      relatedSlugs: ["distributeur", "porte", "torche", "meule"]
    }
  },
  {
    slug: "seau",
    keyword: "comment faire un seau minecraft",
    title: "Seau Minecraft : Craft et Utilisations",
    h1: "Comment Faire un Seau dans Minecraft",
    metaDescription: "Découvrez comment faire un seau Minecraft : recette de craft avec lingots de fer, utilisation pour l'eau, la lave, le lait et les poissons.",
    category: "crafting",
    volume: 140,
    content: {
      intro: "Le seau est un outil polyvalent et essentiel dans Minecraft, permettant de transporter de l'eau, de la lave, du lait et même des poissons. Il est souvent l'un des premiers outils en fer que vous fabriquez, car l'eau est indispensable pour l'agriculture, la protection contre la lave et la fabrication d'obsidienne. Un seau d'eau est aussi votre meilleure assurance vie contre les chutes.",
      sections: [
        {
          heading: "Recette de Craft du Seau",
          content: "Pour fabriquer un seau, placez 3 lingots de fer dans la table de craft en forme de V : un lingot à gauche et un à droite sur la ligne du milieu, et un lingot au centre de la ligne du bas. Les lingots de fer s'obtiennent en faisant fondre du minerai de fer brut dans un fourneau. Chaque recette produit un seul seau. Pensez à en crafter plusieurs car vous en aurez besoin fréquemment pour différentes tâches."
        },
        {
          heading: "Différents Types de Liquides et Contenus",
          content: "Le seau peut collecter plusieurs types de contenus. Un seau d'eau se remplit en cliquant droit sur un bloc source d'eau. Un seau de lave fonctionne de la même manière sur un bloc source de lave. Le seau de lait se remplit en cliquant droit sur une vache ou une chèvre, et le lait annule tous les effets de statut. Vous pouvez aussi capturer des poissons vivants (morue, saumon, poisson-globe, poisson tropical, axolotl) en cliquant droit dessus avec un seau d'eau."
        },
        {
          heading: "Utilisations Avancées du Seau",
          content: "Le seau d'eau est un outil de survie crucial : versez de l'eau sous vos pieds en tombant pour annuler les dégâts de chute (technique du MLG water bucket). Le seau de lave sert de combustible exceptionnel dans le fourneau, fondant 100 objets par seau. Utilisez l'eau pour créer des sources d'eau infinies (deux blocs d'eau dans un carré de 2x2 ou une tranchée de 3 blocs) ou pour transformer la lave en obsidienne. Le seau de poudreuse permet de collecter et placer de la neige poudreuse."
        }
      ],
      tips: [
        "Un seau de lave est le meilleur combustible du jeu : il fait fondre 100 objets, bien plus que le charbon (8 objets).",
        "Gardez toujours un seau d'eau sur votre barre d'accès rapide en exploration pour vous sauver des chutes.",
        "Créez une source d'eau infinie en plaçant 2 seaux d'eau dans les coins opposés d'un trou de 2x2 blocs.",
        "Le seau de lait supprime tous les effets de statut, y compris le poison et le Wither, ce qui est vital dans certains combats."
      ],
      faq: [
        {
          question: "Peut-on empiler les seaux dans l'inventaire ?",
          answer: "Les seaux vides s'empilent par 16. Les seaux remplis (eau, lave, lait, poisson) ne s'empilent pas et occupent chacun un emplacement d'inventaire. Pensez à vider vos seaux quand vous n'avez plus besoin de leur contenu."
        },
        {
          question: "Comment fonctionne la technique du MLG water bucket ?",
          answer: "Lorsque vous tombez d'une grande hauteur, regardez vers le bas et placez rapidement un seau d'eau au sol juste avant l'impact. L'eau annule tous les dégâts de chute. C'est une technique avancée qui demande de la pratique mais qui sauve la vie, surtout dans le Nether (où l'eau ne fonctionne pas, utilisez plutôt un bateau ou des toiles d'araignée)."
        }
      ],
      relatedSlugs: ["pioche", "fabriquer-haut-fourneau", "bateau", "portail"]
    }
  },
  {
    slug: "fabriquer-haut-fourneau",
    keyword: "comment faire un haut fourneau sur minecraft",
    title: "Haut Fourneau Minecraft : Fabrication Détaillée",
    h1: "Comment Fabriquer un Haut Fourneau dans Minecraft",
    metaDescription: "Apprenez comment faire un haut fourneau sur Minecraft : recette détaillée avec fer et fourneau, fondre les minerais deux fois plus vite.",
    category: "crafting",
    volume: 140,
    content: {
      intro: "Le haut fourneau (blast furnace) est une version améliorée du fourneau classique dans Minecraft, spécialisée dans la fonte des minerais et des armures/outils en métal. Il fond les objets deux fois plus vite que le fourneau standard, ce qui le rend indispensable pour les joueurs qui minent beaucoup. Il sert aussi de bloc de profession pour le villageois armurier.",
      sections: [
        {
          heading: "Recette de Craft du Haut Fourneau",
          content: "Pour crafter un haut fourneau, vous avez besoin de 5 lingots de fer, 3 blocs de pierre lisse (smooth stone) et 1 fourneau standard. Placez les 3 lingots de fer en ligne du haut, puis 1 lingot de fer, le fourneau et 1 lingot de fer sur la ligne du milieu, et enfin les 3 blocs de pierre lisse en ligne du bas. La pierre lisse s'obtient en cuisant de la pierre (stone) dans un fourneau, ce qui signifie qu'il faut d'abord cuire du pavé en pierre, puis cuire la pierre en pierre lisse."
        },
        {
          heading: "Fonctionnement et Avantages",
          content: "Le haut fourneau fond les minerais et les objets en métal deux fois plus vite que le fourneau classique (5 secondes au lieu de 10). Cependant, il consomme le combustible deux fois plus vite également, donc la quantité de combustible nécessaire reste la même. Il ne peut fondre que les minerais (fer, or, cuivre, etc.) et les équipements en métal ou chaîne. Il ne peut pas cuire la nourriture ni transformer d'autres matériaux comme le sable en verre, ces tâches restent réservées au fourneau standard ou au fumoir."
        },
        {
          heading: "Utilisation comme Bloc de Profession",
          content: "En plaçant un haut fourneau près d'un villageois sans profession, celui-ci deviendra armurier. Les armuriers sont des villageois très utiles qui vendent des pièces d'armure en fer et en diamant à des niveaux de commerce élevés. Ils achètent aussi du charbon et du fer, ce qui est un bon moyen de convertir vos ressources minières en émeraudes. Assurez-vous que le villageois a accès au haut fourneau et qu'aucun autre villageois n'est déjà lié à ce bloc."
        }
      ],
      tips: [
        "Pour faire de la pierre lisse, cuisez du pavé en pierre, puis cuisez la pierre obtenue une seconde fois dans le fourneau.",
        "Le haut fourneau est idéal pour fondre rapidement de grandes quantités de fer brut ou de cuivre brut après une session de minage.",
        "Placez un entonnoir sous le haut fourneau pour collecter automatiquement les lingots fondus.",
        "Utilisez le haut fourneau pour recycler les armures et outils en métal inutiles en pépites de fer ou d'or."
      ],
      faq: [
        {
          question: "Le haut fourneau est-il plus économique que le fourneau classique ?",
          answer: "Non, le haut fourneau utilise le combustible deux fois plus vite pour compenser sa vitesse double. Le coût en combustible par objet fondu est identique. Son avantage est uniquement la rapidité, ce qui vous fait gagner du temps d'attente."
        },
        {
          question: "Peut-on cuire de la nourriture dans un haut fourneau ?",
          answer: "Non, le haut fourneau ne peut fondre que les minerais et les objets métalliques (armures et outils en fer, or, chaîne). Pour cuire de la nourriture rapidement, utilisez le fumoir qui fonctionne sur le même principe de vitesse double mais pour les aliments."
        }
      ],
      relatedSlugs: ["craft-haut-fourneau", "pioche", "seau", "meule"]
    }
  },
  {
    slug: "citrouille-sculptee",
    keyword: "comment faire une citrouille sculptée minecraft",
    title: "Citrouille Sculptée Minecraft : Guide Complet",
    h1: "Comment Faire une Citrouille Sculptée dans Minecraft",
    metaDescription: "Découvrez comment faire une citrouille sculptée Minecraft : utilisation des cisailles, création de golems et lanternes citrouilles.",
    category: "crafting",
    volume: 140,
    content: {
      intro: "La citrouille sculptée est un bloc unique dans Minecraft qui s'obtient en utilisant des cisailles sur une citrouille normale. Elle est essentielle pour créer les golems de fer et de neige, et peut être portée comme casque pour éviter de provoquer les Endermen. Combinée à une torche, elle devient une lanterne citrouille décorative.",
      sections: [
        {
          heading: "Comment Sculpter une Citrouille",
          content: "Contrairement à la plupart des objets, la citrouille sculptée ne se fabrique pas sur la table de craft. Placez d'abord une citrouille normale dans le monde (trouvée dans les plaines ou cultivée à partir de graines), puis utilisez des cisailles (shears) dessus avec un clic droit. La citrouille obtient alors un visage sculpté et laisse tomber 4 graines de citrouille. Les cisailles se craftent avec 2 lingots de fer en diagonale dans la grille de craft."
        },
        {
          heading: "Création de Golems",
          content: "La citrouille sculptée est le composant final pour créer des golems. Pour un golem de fer, empilez 4 blocs de fer en T (3 en haut, 1 en dessous au centre) et placez la citrouille sculptée sur le bloc central du haut. Le golem de fer protège contre les mobs hostiles. Pour un golem de neige, empilez 2 blocs de neige verticalement et posez la citrouille sculptée par-dessus. Le golem de neige lance des boules de neige sur les ennemis et laisse une traînée de neige derrière lui."
        },
        {
          heading: "Lanterne Citrouille et Casque",
          content: "Combinez une citrouille sculptée avec une torche dans la table de craft pour obtenir une lanterne citrouille (jack o'lantern). Ce bloc décoratif émet un niveau de lumière de 15, le maximum possible, supérieur même à la torche. La citrouille sculptée peut aussi être portée comme casque : elle n'offre aucune protection, mais les Endermen ne deviennent pas hostiles quand vous les regardez. L'inconvénient est un effet de citrouille sur l'écran qui réduit votre champ de vision."
        }
      ],
      tips: [
        "Portez une citrouille sculptée sur la tête pour explorer l'End sans provoquer les Endermen accidentellement.",
        "Les golems de fer créés par le joueur n'attaquent jamais le joueur, contrairement à ceux des villages qui peuvent devenir hostiles.",
        "Cultivez des citrouilles avec une ferme automatique à pistons pour un approvisionnement constant.",
        "La lanterne citrouille est l'une des sources de lumière les plus puissantes avec un niveau de 15, utilisez-la pour les grandes zones à éclairer."
      ],
      faq: [
        {
          question: "Où trouver des citrouilles dans Minecraft ?",
          answer: "Les citrouilles apparaissent naturellement dans la plupart des biomes herbus, principalement dans les plaines. Elles sont assez rares à l'état sauvage. Vous pouvez aussi les cultiver à partir de graines de citrouille trouvées dans les coffres de donjons ou obtenues en plaçant une citrouille dans la grille de craft."
        },
        {
          question: "Peut-on crafter une citrouille sculptée sur la table de craft ?",
          answer: "Non, la citrouille sculptée ne se fabrique pas sur la table de craft. Vous devez placer une citrouille normale dans le monde et utiliser des cisailles (clic droit) dessus pour la sculpter. C'est le seul moyen d'obtenir une citrouille sculptée."
        }
      ],
      relatedSlugs: ["torche", "seau", "pioche", "cadre"]
    }
  },
  {
    slug: "meule",
    keyword: "comment faire une meule sur minecraft",
    title: "Meule Minecraft : Craft et Utilisation",
    h1: "Comment Faire une Meule dans Minecraft",
    metaDescription: "Apprenez comment faire une meule sur Minecraft : recette de craft, réparation d'outils, suppression d'enchantements et récupération d'XP.",
    category: "crafting",
    volume: 140,
    content: {
      intro: "La meule (grindstone) est un bloc utilitaire dans Minecraft qui permet de réparer des outils et armures tout en supprimant leurs enchantements non-maudits. Elle restitue une partie de l'expérience investie dans les enchantements, ce qui en fait un excellent moyen de recycler des équipements enchantés. La meule sert aussi de bloc de profession pour le villageois armurier.",
      sections: [
        {
          heading: "Recette de Craft de la Meule",
          content: "Pour fabriquer une meule, placez 2 bâtons dans les coins supérieurs gauche et droit de la grille 3x3, 1 dalle de pierre au centre de la ligne du haut, et 2 planches de bois (n'importe quel type) sous les bâtons sur la ligne du milieu. La dalle de pierre s'obtient en craftant 3 blocs de pierre en ligne. Vous pouvez aussi trouver des meules dans les villages, notamment chez les armuriers, et les récupérer avec une pioche."
        },
        {
          heading: "Réparation et Suppression d'Enchantements",
          content: "La meule a deux emplacements d'entrée. En y plaçant deux outils ou armures du même type, elle les combine en un seul avec une durabilité cumulée plus un bonus de 5%. Contrairement à l'enclume, la meule supprime tous les enchantements non-maudits et restitue de l'expérience proportionnelle aux enchantements retirés. C'est un excellent moyen de désenchanter des équipements trouvés dans les donjons pour récupérer de l'XP. La malédiction du lien éternel et la malédiction de disparition ne peuvent pas être retirées."
        },
        {
          heading: "Meule vs Enclume : Comparaison",
          content: "La meule et l'enclume remplissent des rôles complémentaires. La meule répare gratuitement (pas de coût en niveaux) mais supprime les enchantements. L'enclume répare en conservant les enchantements mais coûte des niveaux d'expérience et s'use avec le temps. Utilisez la meule pour les outils non enchantés ou pour recycler des enchantements indésirables. Réservez l'enclume pour combiner et préserver des enchantements précieux sur votre meilleur équipement."
        }
      ],
      tips: [
        "Utilisez la meule pour désenchanter les équipements de mob farm et récupérer de l'expérience gratuitement.",
        "La meule est parfaite pour nettoyer un outil avec des enchantements indésirables avant de le ré-enchanter à la table d'enchantement.",
        "Combinez deux outils endommagés du même type dans la meule pour obtenir un outil avec plus de durabilité grâce au bonus de 5%.",
        "Placez une meule à côté d'un villageois sans profession pour créer un armurier qui vend des pièces d'armure."
      ],
      faq: [
        {
          question: "La meule peut-elle retirer les malédictions ?",
          answer: "Non, la meule ne peut pas retirer les enchantements de malédiction (Malédiction du Lien Éternel et Malédiction de Disparition). Aucun bloc du jeu ne permet de retirer ces malédictions. La seule solution est de combiner l'objet maudit dans une grille de craft avec un autre objet du même type."
        },
        {
          question: "Récupère-t-on toute l'expérience des enchantements supprimés ?",
          answer: "Non, la meule ne restitue qu'une partie de l'expérience investie dans les enchantements. La quantité d'XP rendue est aléatoire mais proportionnelle au niveau et au nombre d'enchantements retirés. C'est tout de même un bonus appréciable, surtout pour les objets avec des enchantements de haut niveau."
        }
      ],
      relatedSlugs: ["pioche", "fabriquer-haut-fourneau", "piston", "bibliotheque"]
    }
  },
  {
    slug: "ruche",
    keyword: "comment faire une ruche minecraft",
    title: "Ruche Minecraft : Craft et Miel",
    h1: "Comment Faire une Ruche dans Minecraft",
    metaDescription: "Découvrez comment faire une ruche Minecraft : recette avec planches et rayons de miel, récolte du miel, élevage d'abeilles et astuces.",
    category: "crafting",
    volume: 90,
    content: {
      intro: "La ruche (beehive) est la version craftable du nid d'abeilles naturel dans Minecraft. Elle permet d'élever des abeilles et de récolter du miel et des rayons de miel de manière organisée. Les abeilles sont des créatures passives qui pollinisent les cultures et accélèrent la croissance des plantes à proximité.",
      sections: [
        {
          heading: "Recette de Craft de la Ruche",
          content: "Pour fabriquer une ruche, placez 3 planches de bois (n'importe quel type) en ligne du haut, 3 rayons de miel sur la ligne du milieu, et 3 planches de bois en ligne du bas. Les rayons de miel s'obtiennent en utilisant des cisailles sur un nid d'abeilles ou une ruche pleine (niveau de miel 5). Il faut donc d'abord trouver un nid d'abeilles naturel dans un biome de plaines, de forêt de fleurs ou de prairie pour obtenir les premiers rayons."
        },
        {
          heading: "Récolte du Miel et des Rayons",
          content: "Une ruche se remplit progressivement quand les abeilles y déposent du pollen après avoir visité des fleurs. Le niveau de miel va de 0 à 5, visible par le miel qui dégouline de la ruche. Au niveau 5, utilisez une bouteille en verre pour collecter une bouteille de miel, ou des cisailles pour obtenir 3 rayons de miel. Important : placez toujours un feu de camp sous la ruche avant la récolte pour calmer les abeilles, sinon elles deviendront hostiles et vous piqueront, mourant après leur attaque."
        },
        {
          heading: "Élevage et Déplacement des Abeilles",
          content: "Les abeilles peuvent être reproduites en leur donnant des fleurs. Tenez une fleur en main pour les attirer et les guider vers votre ruche. Chaque ruche peut abriter jusqu'à 3 abeilles. Pour déplacer une ruche avec ses abeilles, minez-la avec un outil enchantement Toucher de Soie pendant la nuit ou sous la pluie quand les abeilles sont à l'intérieur. Les abeilles pollinisent les cultures à proximité, accélérant leur croissance de manière significative, ce qui en fait d'excellentes alliées pour l'agriculture."
        }
      ],
      tips: [
        "Placez toujours un feu de camp sous la ruche avant de récolter pour éviter que les abeilles ne deviennent hostiles.",
        "Utilisez Toucher de Soie sur une pioche pour déplacer une ruche ou un nid d'abeilles sans perdre les abeilles à l'intérieur.",
        "Plantez des fleurs près de vos ruches pour que les abeilles produisent du miel plus rapidement.",
        "Les abeilles pollinisent les cultures proches en volant au-dessus, accélérant la croissance du blé, des carottes, des pommes de terre et d'autres plantes."
      ],
      faq: [
        {
          question: "Combien d'abeilles peuvent vivre dans une ruche ?",
          answer: "Chaque ruche ou nid d'abeilles peut abriter un maximum de 3 abeilles. Si vous avez plus d'abeilles, vous devrez fabriquer des ruches supplémentaires. Les abeilles choisissent automatiquement une ruche disponible à proximité."
        },
        {
          question: "Comment empêcher les abeilles de devenir hostiles lors de la récolte ?",
          answer: "Placez un feu de camp directement sous la ruche (jusqu'à 5 blocs en dessous, sans obstacle). La fumée calme les abeilles et vous pouvez récolter le miel ou les rayons sans danger. Vous pouvez cacher le feu de camp sous un bloc de tapis pour un look plus propre."
        }
      ],
      relatedSlugs: ["citrouille-sculptee", "seau", "torche", "cadre"]
    }
  },
  {
    slug: "cadre",
    keyword: "craft cadre minecraft",
    title: "Cadre Minecraft : Craft et Utilisation",
    h1: "Comment Crafter un Cadre dans Minecraft",
    metaDescription: "Découvrez le craft du cadre Minecraft : recette avec cuir et bâtons, cadre lumineux, affichage d'objets et astuces de décoration complètes.",
    category: "crafting",
    volume: 320,
    content: {
      intro: "Le cadre (item frame) est un objet décoratif incontournable dans Minecraft qui permet d'afficher n'importe quel objet ou bloc sur un mur. Depuis l'ajout du cadre lumineux (glow item frame), les possibilités de décoration se sont encore élargies. Les cadres sont aussi utilisés dans les systèmes de redstone pour créer des mécanismes de sélection.",
      sections: [
        {
          heading: "Recette de Craft du Cadre et du Cadre Lumineux",
          content: "Pour crafter un cadre, placez 1 cuir au centre de la grille 3x3 et entourez-le de 8 bâtons. Chaque craft produit un seul cadre. Le cuir s'obtient en tuant des vaches, des chevaux, des lamas ou en craftant 4 peaux de lapin ensemble. Pour le cadre lumineux, combinez un cadre normal avec un sac d'encre lumineux (glow ink sac) obtenu en tuant des calmars lumineux trouvés sous l'eau dans les grottes et les océans."
        },
        {
          heading: "Affichage d'Objets et Rotation",
          content: "Placez un cadre sur un mur avec un clic droit, puis insérez un objet avec un second clic droit. Chaque clic droit supplémentaire fait tourner l'objet de 45 degrés dans le sens horaire, offrant 8 orientations possibles. Le cadre lumineux affiche l'objet avec un effet brillant visible même dans l'obscurité, parfait pour les panneaux indicateurs dans les mines sombres. Les cartes placées dans un cadre s'affichent sur toute la surface du bloc, permettant de créer des cartes murales géantes."
        },
        {
          heading: "Utilisations en Redstone et Décoration",
          content: "Les cadres émettent un signal de redstone via un comparateur en fonction de la rotation de l'objet affiché (0 à 8 niveaux). Cette propriété permet de créer des serrures à combinaison, des sélecteurs de canal et d'autres mécanismes interactifs. En décoration, les cadres sont parfaits pour étiqueter les coffres avec leur contenu, créer des galeries d'objets, ou afficher des cartes pour une salle de cartographie. Combinez plusieurs cartes dans des cadres adjacents pour créer une carte murale impressionnante."
        }
      ],
      tips: [
        "Placez des cartes dans des cadres adjacents sur un mur pour créer une carte murale géante de votre monde.",
        "Utilisez les cadres lumineux pour étiqueter vos coffres dans les zones sombres comme les sous-sols.",
        "Un comparateur de redstone peut lire la rotation d'un objet dans un cadre, permettant de créer des serrures secrètes.",
        "Les cadres invisibles (obtenus par commande) permettent de créer des décorations flottantes sans le cadre en bois visible."
      ],
      faq: [
        {
          question: "Comment obtenir un cadre lumineux ?",
          answer: "Combinez un cadre normal avec un sac d'encre lumineux dans la table de craft. Les sacs d'encre lumineux sont droppés par les calmars lumineux (glow squid) qui apparaissent dans les plans d'eau souterrains et les océans dans l'obscurité."
        },
        {
          question: "Les cadres peuvent-ils être placés au sol ou au plafond ?",
          answer: "Oui, depuis les versions récentes de Minecraft, les cadres peuvent être placés sur les murs, au sol et au plafond. Cela ouvre de nombreuses possibilités de décoration, comme afficher des objets sur une table (sol) ou créer un lustre décoratif (plafond)."
        }
      ],
      relatedSlugs: ["tableau", "bibliotheque", "torche", "echafaudage"]
    }
  },
  {
    slug: "distributeur",
    keyword: "craft distributeur minecraft",
    title: "Distributeur Minecraft : Craft et Redstone",
    h1: "Comment Crafter un Distributeur dans Minecraft",
    metaDescription: "Découvrez le craft du distributeur Minecraft : recette avec arc et redstone, différence avec le dropper et utilisations en redstone.",
    category: "crafting",
    volume: 210,
    content: {
      intro: "Le distributeur (dispenser) est un bloc de redstone puissant dans Minecraft qui peut tirer des projectiles, placer des blocs et effectuer diverses actions automatiquement. Il est au coeur de nombreuses fermes automatiques et systèmes de défense. À ne pas confondre avec le dropper qui lui se contente de lâcher les objets sans les utiliser.",
      sections: [
        {
          heading: "Recette de Craft du Distributeur",
          content: "Pour crafter un distributeur, placez 1 arc au centre de la grille 3x3, 1 poudre de redstone en bas au centre, et remplissez les 7 emplacements restants avec des pavés (cobblestone). L'arc peut être endommagé, ce qui est utile pour recycler les arcs usés. Le distributeur possède un inventaire de 9 emplacements pouvant contenir différents objets. Chaque activation éjecte ou utilise un objet aléatoire parmi ceux présents dans son inventaire."
        },
        {
          heading: "Actions Spéciales selon les Objets",
          content: "Le distributeur n'éjecte pas simplement les objets : il les utilise de manière intelligente. Les flèches et boules de feu sont tirées comme projectiles. Les seaux d'eau et de lave placent le liquide devant le distributeur. Les briquets allument le feu. Les oeufs, boules de neige et potions de jet sont lancés. Les armures sont équipées sur les joueurs ou entités devant lui. Les feux d'artifice sont lancés en l'air. Les cisailles tondent les moutons et les TNT sont amorcées. Ce comportement en fait un bloc extrêmement polyvalent."
        },
        {
          heading: "Applications Pratiques en Redstone",
          content: "Les distributeurs sont essentiels dans de nombreuses fermes automatiques. Avec un seau d'eau et un circuit d'horloge, ils créent des systèmes d'irrigation automatique pour les fermes de cultures. Avec des briquets, ils peuvent allumer des portails du Nether automatiquement. En défense, remplissez-les de flèches pour créer des tourelles automatiques. Les distributeurs de lave sont utilisés dans les pièges anti-mobs. Combinés avec des entonnoirs, ils peuvent être rechargés automatiquement pour un fonctionnement continu."
        }
      ],
      tips: [
        "Les distributeurs avec des seaux d'eau sont parfaits pour les fermes automatiques : ils versent et récupèrent l'eau alternativement.",
        "Un distributeur de TNT activé par un circuit d'horloge crée un canon à TNT efficace pour le minage en masse.",
        "Utilisez un arc endommagé pour le craft afin de recycler les arcs usés récupérés sur les squelettes.",
        "Placez un entonnoir au-dessus du distributeur pour le recharger automatiquement en projectiles."
      ],
      faq: [
        {
          question: "Quelle est la différence entre un distributeur et un dropper ?",
          answer: "Le distributeur (dispenser) utilise les objets (tire les flèches, place l'eau, etc.) tandis que le dropper les lâche simplement comme objets au sol. Le distributeur se craft avec un arc, le dropper sans. Pour automatiser des tâches, le distributeur est bien plus versatile."
        },
        {
          question: "Comment alimenter un distributeur en redstone ?",
          answer: "Le distributeur s'active avec n'importe quel signal de redstone : bouton, levier, plaque de pression, fil de redstone, répéteur, comparateur ou observateur. Pour une activation répétée, utilisez un circuit d'horloge de redstone qui envoie des impulsions à intervalles réguliers."
        }
      ],
      relatedSlugs: ["piston", "porte", "torche", "seau"]
    }
  },
  {
    slug: "masse",
    keyword: "craft masse minecraft",
    title: "Masse Minecraft : Craft et Guide",
    h1: "Comment Crafter une Masse dans Minecraft",
    metaDescription: "Découvrez le craft de la masse Minecraft (mace) : recette avec tige de brise et coeur de braise, dégâts de chute et enchantements.",
    category: "crafting",
    volume: 170,
    content: {
      intro: "La masse (mace) est une arme puissante ajoutée dans la version 1.21 de Minecraft. Elle se distingue par sa mécanique unique de dégâts augmentés en fonction de la distance de chute. Plus vous tombez de haut avant de frapper un ennemi, plus les dégâts sont dévastateurs. C'est une arme parfaite pour les combats aériens et les attaques en plongée.",
      sections: [
        {
          heading: "Recette de Craft de la Masse",
          content: "La masse se craft en plaçant 1 coeur de braise (breeze rod) au-dessus de 1 bloc de braise renforcé (heavy core) dans la grille de craft. Le coeur de braise s'obtient en tuant des Breezes, des mobs qui apparaissent dans les chambres de Trial (trial chambers). Le bloc de braise renforcé est une récompense rare des coffres de voûte (vault) dans ces mêmes structures. Les deux composants sont exclusifs aux chambres de Trial, rendant la masse un objet de fin de jeu."
        },
        {
          heading: "Mécanique de Dégâts de Chute",
          content: "La masse inflige des dégâts de base normaux, mais sa puissance vient de la mécanique de chute. Chaque bloc de chute avant l'impact ajoute des dégâts supplémentaires significatifs. En frappant un ennemi après une chute de 10 blocs, les dégâts sont déjà considérables. Après 50 blocs ou plus, la masse peut éliminer la plupart des mobs en un seul coup. L'impact annule aussi vos dégâts de chute, ce qui signifie que vous atterrissez en sécurité tant que vous touchez une cible."
        },
        {
          heading: "Enchantements Spéciaux de la Masse",
          content: "La masse possède des enchantements uniques. Densité (Density) augmente les dégâts supplémentaires par bloc de chute, rendant chaque attaque en plongée encore plus dévastatrice. Fendeur (Breach) réduit l'armure de la cible, efficace contre les mobs et joueurs lourdement équipés. Rafale de Vent (Wind Burst) crée une explosion de vent à l'impact qui vous propulse vers le haut, permettant d'enchaîner les attaques en plongée sans avoir besoin de plateforme. Ces enchantements font de la masse une arme extrêmement versatile."
        }
      ],
      tips: [
        "Utilisez l'enchantement Rafale de Vent pour enchaîner les attaques en plongée en étant propulsé vers le haut après chaque impact.",
        "Combinez la masse avec des charges de vent pour vous propulser en l'air avant de frapper, augmentant considérablement les dégâts.",
        "La masse annule vos dégâts de chute si vous touchez un mob, ce qui la rend sûre pour les attaques en plongée.",
        "Explorez les chambres de Trial en difficulté normale ou plus pour maximiser vos chances de trouver un bloc de braise renforcé."
      ],
      faq: [
        {
          question: "Où trouver les matériaux pour crafter la masse ?",
          answer: "Les deux matériaux se trouvent dans les chambres de Trial (trial chambers), des structures souterraines. Le coeur de braise drop des Breezes, un mob spécial de ces structures. Le bloc de braise renforcé (heavy core) est une récompense rare des coffres de voûte après avoir complété un trial spawner."
        },
        {
          question: "La masse est-elle meilleure que l'épée en diamant ?",
          answer: "Cela dépend de la situation. Pour les combats au sol classiques, l'épée en diamant ou néthérite reste plus polyvalente. La masse excelle dans les attaques en plongée où ses dégâts de chute la rendent bien supérieure. Avec l'enchantement Rafale de Vent, elle peut être dévastatrice même en combat régulier grâce aux enchaînements aériens."
        }
      ],
      relatedSlugs: ["pioche", "craft-longue-vue", "distributeur", "boussole"]
    }
  },
  {
    slug: "craft-longue-vue",
    keyword: "craft longue vue minecraft",
    title: "Craft Longue-Vue Minecraft : Recette",
    h1: "Comment Crafter une Longue-Vue dans Minecraft",
    metaDescription: "Découvrez le craft de la longue-vue Minecraft : recette avec fragment d'améthyste et lingot de cuivre, zoom et utilisations pratiques.",
    category: "crafting",
    volume: 140,
    content: {
      intro: "La longue-vue (spyglass) est un outil d'observation ajouté dans la version 1.17 de Minecraft. Elle permet de zoomer sur des zones éloignées pour repérer des structures, des mobs ou des biomes à distance. Fabriquée avec de l'améthyste et du cuivre, elle est relativement simple à obtenir une fois que vous avez trouvé une géode d'améthyste.",
      sections: [
        {
          heading: "Recette de Craft de la Longue-Vue",
          content: "Pour crafter une longue-vue, placez 1 fragment d'améthyste en haut et 2 lingots de cuivre verticalement en dessous dans la grille de craft (colonne centrale). Les fragments d'améthyste se récoltent en cassant les amas d'améthyste matures dans les géodes d'améthyste, trouvées entre les niveaux Y=-58 et Y=30. Le cuivre se mine abondamment partout sous terre et se fond en lingots dans un fourneau. C'est une recette économique nécessitant peu de matériaux."
        },
        {
          heading: "Utilisation et Fonctionnement du Zoom",
          content: "Tenez la longue-vue en main et maintenez le clic droit pour activer le zoom. Le champ de vision se réduit considérablement, offrant un grossissement équivalent à environ 10x. Pendant l'utilisation, un effet de vignette carrée entoure votre écran, simulant le regard à travers une lentille. Vous ne pouvez pas vous déplacer rapidement en utilisant la longue-vue car votre vitesse est réduite. La longue-vue n'a pas de durabilité et ne s'use pas, vous pouvez l'utiliser indéfiniment."
        },
        {
          heading: "Situations Pratiques et Astuces",
          content: "La longue-vue est particulièrement utile pour repérer les structures à distance : villages, temples du désert, bastions, forteresses du Nether et cités de l'End. Depuis un point élevé, vous pouvez planifier votre route d'exploration efficacement. Elle est aussi pratique pour identifier les mobs dangereux avant de s'en approcher. En multijoueur, utilisez-la pour surveiller votre base ou repérer d'autres joueurs. Combinez-la avec l'optifine ou des shaders pour une expérience visuelle encore meilleure."
        }
      ],
      tips: [
        "Grimpez sur un point élevé comme une montagne pour maximiser l'utilité de la longue-vue et repérer les structures lointaines.",
        "La longue-vue n'a pas de durabilité, vous pouvez l'utiliser autant que vous voulez sans risque de casse.",
        "Utilisez Fortune III sur votre pioche pour obtenir plus de fragments d'améthyste par amas cassé.",
        "La longue-vue fonctionne dans toutes les dimensions, y compris le Nether et l'End."
      ],
      faq: [
        {
          question: "Où trouver des fragments d'améthyste ?",
          answer: "Les fragments d'améthyste s'obtiennent en cassant les amas d'améthyste matures (les plus grands, avec des cristaux visibles) dans les géodes d'améthyste. Ces géodes sont des structures sphériques souterraines trouvées entre Y=-58 et Y=30, entourées de calcite et de tuf. Utilisez une pioche avec Fortune III pour obtenir jusqu'à 16 fragments par amas."
        },
        {
          question: "La longue-vue peut-elle être enchantée ?",
          answer: "Non, la longue-vue ne peut recevoir aucun enchantement, ni sur la table d'enchantement ni sur l'enclume. Elle n'a pas non plus de durabilité, donc aucun enchantement n'est nécessaire. C'est un outil simple mais efficace qui remplit parfaitement son rôle de zoom."
        }
      ],
      relatedSlugs: ["boussole", "masse", "pioche", "torche"]
    }
  },
  {
    slug: "echafaudage",
    keyword: "craft échafaudage minecraft",
    title: "Échafaudage Minecraft : Craft et Utilisation",
    h1: "Comment Crafter un Échafaudage dans Minecraft",
    metaDescription: "Découvrez le craft de l'échafaudage Minecraft : recette avec bambou et ficelle, construction en hauteur et astuces de placement rapide.",
    category: "crafting",
    volume: 170,
    content: {
      intro: "L'échafaudage (scaffolding) est un bloc utilitaire dans Minecraft spécialement conçu pour faciliter la construction en hauteur. Il se place rapidement, se grimpe facilement et se détruit instantanément en cassant le bloc du bas. C'est l'outil idéal pour les grands projets de construction et les travaux en hauteur.",
      sections: [
        {
          heading: "Recette de Craft de l'Échafaudage",
          content: "Pour crafter 6 échafaudages, placez 6 bambous et 1 ficelle dans la grille 3x3 : bambou en haut à gauche, ficelle en haut au centre, bambou en haut à droite, bambou au milieu à gauche, bambou au milieu à droite, et bambou en bas au centre. Le bambou pousse naturellement dans les jungles et se cultive très facilement en le plantant sur du sable, de la terre ou du gravier. La ficelle s'obtient en tuant des araignées ou en cassant des toiles d'araignée."
        },
        {
          heading: "Placement et Mécanique de l'Échafaudage",
          content: "L'échafaudage se place latéralement en cliquant sur le côté d'un autre échafaudage, s'étendant horizontalement jusqu'à 6 blocs sans support. Au-delà, il tombe comme du sable. En cliquant sur le dessus, il s'empile verticalement sans limite. Pour monter, entrez dans la colonne d'échafaudage et maintenez la touche de saut. Pour descendre, maintenez la touche d'accroupissement. La destruction du bloc le plus bas fait tomber toute la colonne, offrant un démontage instantané."
        },
        {
          heading: "Stratégies de Construction Efficace",
          content: "L'échafaudage révolutionne la construction en hauteur. Pour un grand bâtiment, construisez d'abord une structure d'échafaudage autour du périmètre, travaillez depuis les plateformes, puis détruisez tout en cassant les blocs du bas. Les échafaudages sont aussi utiles pour descendre en toute sécurité dans des ravins ou des grottes profondes. En mode survie, cultivez une grande ferme de bambou pour ne jamais manquer de matériaux. Pensez à emporter de la ficelle supplémentaire car c'est souvent le composant limitant."
        }
      ],
      tips: [
        "Cassez le bloc d'échafaudage le plus bas pour faire tomber toute la colonne instantanément, un démontage ultra rapide.",
        "L'échafaudage s'étend horizontalement jusqu'à 6 blocs sans support en dessous, utile pour les ponts temporaires.",
        "Cultivez du bambou en masse car il pousse très vite et est nécessaire en grande quantité pour les projets de construction.",
        "Maintenez la touche d'accroupissement pour descendre lentement à travers l'échafaudage sans tomber."
      ],
      faq: [
        {
          question: "L'échafaudage peut-il flotter dans les airs ?",
          answer: "L'échafaudage peut s'étendre horizontalement jusqu'à 6 blocs depuis un point d'ancrage sans tomber. Au-delà de cette limite, il tombe sous l'effet de la gravité comme le sable. Verticalement, il peut s'empiler aussi haut que vous le souhaitez tant qu'il repose sur un bloc solide au sol."
        },
        {
          question: "Où trouver du bambou facilement ?",
          answer: "Le bambou pousse naturellement dans les biomes de jungle et de jungle de bambou. Vous pouvez aussi le trouver dans les coffres de temples de la jungle ou pêcher des bambous. Une fois obtenu, plantez-le et il pousse très rapidement, jusqu'à 12-16 blocs de haut, offrant un approvisionnement quasi illimité."
        }
      ],
      relatedSlugs: ["bateau", "cadre", "torche", "porte"]
    }
  },
  {
    slug: "craft-haut-fourneau",
    keyword: "craft haut fourneau minecraft",
    title: "Craft Haut Fourneau Minecraft : Recette",
    h1: "Recette du Haut Fourneau dans Minecraft",
    metaDescription: "La recette complète du craft haut fourneau Minecraft : 5 lingots de fer, 3 pierres lisses et 1 fourneau pour fondre les minerais rapidement.",
    category: "crafting",
    volume: 140,
    content: {
      intro: "Le haut fourneau est un bloc de cuisson spécialisé qui fond les minerais et les équipements métalliques deux fois plus vite qu'un fourneau classique. Sa recette de craft est accessible dès le milieu de partie quand vous disposez de suffisamment de fer. Voici le guide détaillé de sa fabrication avec toutes les étapes nécessaires.",
      sections: [
        {
          heading: "Matériaux Nécessaires et Préparation",
          content: "Pour crafter un haut fourneau, rassemblez 5 lingots de fer, 1 fourneau et 3 blocs de pierre lisse. Les lingots de fer s'obtiennent en fondant du fer brut dans un fourneau. Le fourneau se craft avec 8 pavés en cercle dans la grille 3x3. La pierre lisse demande une double cuisson : d'abord cuire du pavé en pierre ordinaire, puis cuire cette pierre en pierre lisse. Prévoyez du combustible supplémentaire pour ces étapes de préparation, environ 11 unités de charbon au total pour préparer tous les composants."
        },
        {
          heading: "Disposition dans la Grille de Craft",
          content: "Dans la table de craft 3x3, disposez les matériaux ainsi : 3 lingots de fer sur la ligne du haut, 1 lingot de fer à gauche, le fourneau au centre, et 1 lingot de fer à droite sur la ligne du milieu, puis 3 pierres lisses sur la ligne du bas. Vérifiez bien que vous utilisez de la pierre lisse (smooth stone) et non de la pierre ordinaire ou du pavé, car c'est une erreur fréquente. La pierre lisse a une texture uniforme et lisse, sans les fissures visibles du pavé."
        },
        {
          heading: "Optimisation et Système de Fonderie",
          content: "Pour maximiser l'efficacité de votre haut fourneau, construisez un système de fonderie automatique. Placez un entonnoir au-dessus pour alimenter en minerais, un entonnoir sur le côté pour le combustible, et un entonnoir en dessous pour collecter les résultats. Avec ce système, vous pouvez laisser fondre des stacks entiers de minerais sans intervention. Construisez plusieurs hauts fourneaux en parallèle pour traiter de grandes quantités après vos sessions de minage intensif. Le seau de lave comme combustible est particulièrement efficace ici."
        }
      ],
      tips: [
        "Ne confondez pas la pierre lisse avec le pavé ou la pierre ordinaire : la pierre lisse nécessite deux cuissons successives.",
        "Automatisez votre haut fourneau avec des entonnoirs pour un fonctionnement en continu pendant que vous explorez.",
        "Construisez plusieurs hauts fourneaux côte à côte pour traiter rapidement les gros retours de mine.",
        "Le haut fourneau donne de l'expérience à la collecte des lingots fondus, tout comme le fourneau classique."
      ],
      faq: [
        {
          question: "Comment faire de la pierre lisse pour le haut fourneau ?",
          answer: "La pierre lisse nécessite deux étapes de cuisson. D'abord, faites cuire du pavé (cobblestone) dans un fourneau pour obtenir de la pierre (stone). Ensuite, refaites cuire cette pierre pour obtenir de la pierre lisse (smooth stone). Chaque étape utilise une unité de combustible."
        },
        {
          question: "Quels objets peut-on fondre dans le haut fourneau ?",
          answer: "Le haut fourneau ne fond que les minerais (fer, or, cuivre, etc.) et les équipements métalliques (armures et outils en fer, or, chaîne). Il ne peut pas cuire la nourriture, le sable, l'argile ou d'autres matériaux. Pour ces objets, utilisez le fourneau classique ou le fumoir (pour la nourriture uniquement)."
        }
      ],
      relatedSlugs: ["fabriquer-haut-fourneau", "pioche", "seau", "meule"]
    }
  }
];
