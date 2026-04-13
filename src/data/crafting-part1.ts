import type { PageData } from "./types";

export const craftingPagesPart1: PageData[] = [
  {
    slug: "table-enchantement",
    keyword: "table d'enchantement minecraft",
    title: "Table d'Enchantement Minecraft : Craft, Utilisation et Guide Complet",
    h1: "Comment Faire une Table d'Enchantement dans Minecraft",
    metaDescription: "Apprenez à crafter une table d'enchantement dans Minecraft. Recette complète, matériaux nécessaires et guide d'utilisation détaillé.",
    category: "crafting",
    volume: 4400,
    content: {
      intro: "La table d'enchantement est l'un des blocs les plus importants de Minecraft, permettant d'appliquer des enchantements magiques à vos outils, armes et armures. Elle est indispensable pour progresser dans le jeu et affronter les défis les plus difficiles. Découvrez comment la fabriquer et l'utiliser efficacement pour maximiser la puissance de votre équipement.",
      sections: [
        {
          heading: "Recette de Craft de la Table d'Enchantement",
          content: "Pour crafter une table d'enchantement, vous devez placer un livre au centre de la rangée supérieure de la table de craft, deux diamants de chaque côté du livre sur la rangée du milieu, et quatre blocs d'obsidienne sur la rangée inférieure ainsi qu'un bloc d'obsidienne au centre de la rangée du milieu. La recette nécessite donc 1 livre, 2 diamants et 4 blocs d'obsidienne au total. Le livre se fabrique avec 3 papiers et 1 cuir, tandis que l'obsidienne se récolte avec une pioche en diamant sur de la lave refroidie par l'eau."
        },
        {
          heading: "Matériaux Nécessaires",
          content: "Les diamants se trouvent principalement entre les couches -64 et 16, avec une concentration optimale autour de la couche -59. L'obsidienne se forme lorsque de l'eau coule sur de la lave source et nécessite une pioche en diamant ou en netherite pour être minée (environ 10 secondes de minage). Le livre requiert du cuir, obtenu en tuant des vaches, et du papier fabriqué à partir de canne à sucre. Prévoyez du temps pour rassembler ces ressources, surtout les diamants et l'obsidienne qui sont les plus difficiles à obtenir."
        },
        {
          heading: "Utilisation et Optimisation",
          content: "Une fois posée, la table d'enchantement vous permet d'enchanter des objets en échange de niveaux d'expérience et de lapis-lazuli. Pour débloquer les enchantements de niveau maximum (niveau 30), entourez votre table de 15 bibliothèques placées à un bloc de distance et à la même hauteur ou un bloc au-dessus. Chaque bibliothèque doit avoir une ligne de vue directe vers la table, sans bloc intermédiaire. Les enchantements proposés sont aléatoires mais dépendent du niveau requis, ce qui vous permet de viser des enchantements plus puissants en utilisant les emplacements de niveau 30."
        }
      ],
      tips: [
        "Placez exactement 15 bibliothèques autour de la table pour atteindre le niveau maximum d'enchantement (niveau 30).",
        "Utilisez un enchantement de niveau 1 sur un objet jetable pour réinitialiser les enchantements proposés si aucun ne vous convient.",
        "Gardez toujours du lapis-lazuli en réserve : il faut entre 1 et 3 lapis-lazuli par enchantement selon le niveau choisi.",
        "Placez des torches ou des dalles entre les bibliothèques et la table pour bloquer leur effet et réduire le niveau d'enchantement disponible si nécessaire."
      ],
      faq: [
        {
          question: "Combien de bibliothèques faut-il pour avoir le niveau 30 d'enchantement ?",
          answer: "Il faut exactement 15 bibliothèques placées à un bloc de distance de la table d'enchantement, à la même hauteur ou un bloc au-dessus. La disposition classique est un carré de 5x5 avec la table au centre, les bibliothèques formant un U sur trois côtés avec une ouverture pour accéder à la table."
        },
        {
          question: "Peut-on déplacer une table d'enchantement sans la perdre ?",
          answer: "Oui, vous pouvez miner la table d'enchantement avec n'importe quelle pioche et la récupérer en tant qu'objet. Elle ne perd aucune propriété lors du déplacement. Attention cependant, si vous la minez sans pioche, elle ne droppera pas."
        }
      ],
      relatedSlugs: ["craft-bibliotheque", "longue-vue", "table-archerie"]
    }
  },
  {
    slug: "haut-fourneau",
    keyword: "haut fourneau minecraft",
    title: "Haut Fourneau Minecraft : Craft et Utilisation",
    h1: "Comment Faire un Haut Fourneau dans Minecraft",
    metaDescription: "Découvrez comment crafter un haut fourneau dans Minecraft. Recette de fabrication, matériaux et avantages par rapport au four classique.",
    category: "crafting",
    volume: 2900,
    content: {
      intro: "Le haut fourneau est un bloc de cuisson spécialisé dans la fonte des minerais et des armures métalliques, fonctionnant deux fois plus vite qu'un four classique. Il est particulièrement utile pour les joueurs qui minent beaucoup de ressources et souhaitent gagner du temps. C'est aussi le bloc de métier des villageois armuriers.",
      sections: [
        {
          heading: "Recette de Craft du Haut Fourneau",
          content: "La recette du haut fourneau nécessite 5 lingots de fer, 1 four et 3 pierres lisses. Placez le four au centre de la grille de craft, les 5 lingots de fer sur la rangée supérieure et sur les côtés de la rangée du milieu, puis les 3 pierres lisses sur la rangée inférieure. Le four se fabrique avec 8 blocs de pierre (cobblestone), et la pierre lisse s'obtient en cuisant de la pierre normale dans un four. C'est une recette accessible assez tôt dans le jeu si vous avez accès au fer."
        },
        {
          heading: "Matériaux Nécessaires",
          content: "Les 5 lingots de fer s'obtiennent en cuisant du minerai de fer brut dans un four classique. Le fer se trouve entre les couches -64 et 320, avec une concentration maximale autour de la couche 16. La pierre lisse est obtenue en cuisant de la pierre (stone) dans un four, elle-même obtenue en cuisant du cobblestone. Vous aurez donc besoin d'un four existant pour créer les composants du haut fourneau, ce qui en fait un craft de progression naturelle."
        },
        {
          heading: "Utilisation et Avantages",
          content: "Le haut fourneau fond les minerais et les équipements métalliques deux fois plus rapidement qu'un four classique, mais consomme le combustible au même rythme proportionnel. Il ne peut pas cuire de nourriture ni traiter d'autres matériaux comme le sable ou le bois. En contrepartie de cette spécialisation, il donne moitié moins d'expérience par objet fondu. Placé dans un village, il transforme un villageois sans métier en armurier, ce qui permet d'acheter et vendre des pièces d'armure."
        }
      ],
      tips: [
        "Utilisez le haut fourneau exclusivement pour les minerais et le four classique pour la nourriture et les autres matériaux.",
        "Placez un haut fourneau dans un village pour créer un villageois armurier et obtenir des échanges d'armures en diamant.",
        "Le haut fourneau peut être alimenté par un entonnoir (hopper) pour automatiser la fonte des minerais.",
        "Fondre des armures et outils en fer ou en or dans le haut fourneau vous donne des pépites du métal correspondant."
      ],
      faq: [
        {
          question: "Le haut fourneau est-il plus efficace en combustible que le four ?",
          answer: "Non, le haut fourneau consomme le combustible à la même vitesse proportionnelle que le four. Il fond simplement deux fois plus vite, mais utilise aussi le carburant deux fois plus vite. Le rendement en combustible est donc identique au four classique."
        },
        {
          question: "Peut-on cuire de la nourriture dans un haut fourneau ?",
          answer: "Non, le haut fourneau ne peut fondre que les minerais (fer, or, cuivre, etc.) et les équipements métalliques. Pour cuire de la nourriture, utilisez un four classique ou un fumoir, qui cuit la nourriture deux fois plus vite que le four."
        }
      ],
      relatedSlugs: ["pierre-lisse", "tailleur-de-pierre", "craft-observateur"]
    }
  },
  {
    slug: "feu-artifice",
    keyword: "feu d'artifice minecraft",
    title: "Feu d'Artifice Minecraft : Craft et Guide Complet",
    h1: "Comment Faire un Feu d'Artifice dans Minecraft",
    metaDescription: "Guide complet pour crafter des feux d'artifice dans Minecraft. Recettes des fusées et étoiles, couleurs, formes et effets spéciaux.",
    category: "crafting",
    volume: 3600,
    content: {
      intro: "Les feux d'artifice de Minecraft offrent un système de personnalisation incroyablement riche, permettant de créer des spectacles pyrotechniques colorés et variés. Ils servent aussi de propulseur pour les élytres, ce qui les rend essentiels pour le vol. Apprenez à maîtriser les différentes combinaisons pour créer vos propres feux d'artifice uniques.",
      sections: [
        {
          heading: "Recette des Fusées et Étoiles de Feu d'Artifice",
          content: "Le craft des feux d'artifice se fait en deux étapes. D'abord, créez une étoile de feu d'artifice en combinant de la poudre à canon avec un ou plusieurs colorants dans la table de craft. Ensuite, combinez cette étoile avec du papier et de la poudre à canon pour obtenir la fusée finale. Vous pouvez ajouter jusqu'à 7 étoiles par fusée et utiliser 1 à 3 unités de poudre à canon pour contrôler la durée de vol. Plus vous ajoutez de poudre à canon, plus la fusée monte haut avant d'exploser."
        },
        {
          heading: "Couleurs, Formes et Effets Spéciaux",
          content: "Les couleurs sont déterminées par les colorants ajoutés lors de la fabrication de l'étoile. Vous pouvez mélanger plusieurs colorants pour créer des combinaisons de couleurs. Pour les formes, ajoutez une tête de mob pour une forme de creeper, une pépite d'or pour une étoile, une plume pour une explosion en rafale, ou une charge de feu pour une grosse explosion sphérique. Sans ajout spécial, l'explosion sera une petite boule par défaut. Vous pouvez aussi ajouter un diamant pour un effet de traînée ou de la poussière de pierre lumineuse pour un effet scintillant."
        },
        {
          heading: "Utilisation pour le Vol en Élytre",
          content: "Les fusées de feu d'artifice sans étoile (papier + poudre à canon uniquement) sont utilisées comme propulseur pour les élytres. En volant avec des élytres équipées, faites un clic droit avec la fusée en main pour obtenir un boost de vitesse. La durée du boost dépend du nombre de poudre à canon utilisé : 1 poudre donne un court boost, 3 poudres donnent le boost le plus long et le plus puissant. Attention : utiliser une fusée contenant une étoile vous infligera des dégâts lors du boost."
        }
      ],
      tips: [
        "Pour le vol en élytre, craftez des fusées sans étoile (juste papier + 3 poudres à canon) pour le meilleur boost sans risque de dégâts.",
        "Combinez la poussière de pierre lumineuse ET le diamant sur une même étoile pour cumuler l'effet scintillant et la traînée.",
        "Vous pouvez re-teindre une étoile de feu d'artifice déjà craftée en la combinant avec de nouveaux colorants pour ajouter un effet de fondu de couleur.",
        "Utilisez une arbalète pour tirer des fusées de feu d'artifice comme projectiles offensifs, infligeant des dégâts aux ennemis."
      ],
      faq: [
        {
          question: "Comment faire un feu d'artifice en forme de creeper ?",
          answer: "Pour obtenir une explosion en forme de tête de creeper, ajoutez une tête de mob (n'importe laquelle) lors du craft de l'étoile de feu d'artifice. Combinez la poudre à canon, le colorant de votre choix et la tête de mob dans la table de craft pour créer l'étoile, puis fabriquez la fusée normalement."
        },
        {
          question: "Les feux d'artifice peuvent-ils infliger des dégâts ?",
          answer: "Oui, les fusées contenant au moins une étoile de feu d'artifice infligent des dégâts lors de l'explosion. Cela fonctionne aussi bien en les tirant avec une arbalète qu'en les utilisant comme boost d'élytre. Les dégâts augmentent avec le nombre d'étoiles dans la fusée."
        }
      ],
      relatedSlugs: ["canne-a-peche", "table-enchantement", "craft-observateur"]
    }
  },
  {
    slug: "feu-de-camp",
    keyword: "feu de camp minecraft",
    title: "Feu de Camp Minecraft : Craft et Utilisation",
    h1: "Comment Faire un Feu de Camp dans Minecraft",
    metaDescription: "Apprenez à fabriquer un feu de camp dans Minecraft. Recette de craft, cuisson de nourriture, signal de fumée et toutes les utilisations.",
    category: "crafting",
    volume: 1600,
    content: {
      intro: "Le feu de camp est un bloc décoratif et fonctionnel qui permet de cuire de la nourriture sans combustible, de créer un signal de fumée visible de loin et de repousser certains mobs. C'est un excellent ajout à toute base pour son esthétique chaleureuse et ses multiples utilisations pratiques.",
      sections: [
        {
          heading: "Recette de Craft du Feu de Camp",
          content: "Pour fabriquer un feu de camp, placez 1 charbon ou charbon de bois au centre de la grille de craft, 3 bâtons en forme de V inversé au-dessus et sur les côtés du charbon, et 3 bûches (n'importe quel type de bois) sur la rangée inférieure. Les bâtons se craftent à partir de planches de bois (2 planches = 4 bâtons) et les bûches sont obtenues en coupant des arbres. Vous pouvez aussi trouver des feux de camp naturellement dans les villages de la taïga."
        },
        {
          heading: "Cuisson et Signal de Fumée",
          content: "Le feu de camp peut cuire jusqu'à 4 aliments simultanément sans nécessiter de combustible. Chaque aliment met 30 secondes à cuire, ce qui est plus lent qu'un four mais gratuit en ressources. Faites un clic droit avec un aliment cru en main pour le placer sur le feu. La fumée du feu de camp monte normalement de 10 blocs, mais si vous placez une botte de foin sous le feu, la fumée s'élève jusqu'à 24 blocs, créant un excellent signal visible de très loin."
        },
        {
          heading: "Autres Utilisations",
          content: "Le feu de camp est un excellent outil pour récolter du miel en toute sécurité. Placez-le sous une ruche ou un nid d'abeilles pour calmer les abeilles avant de récolter le miel ou les rayons. Il repousse aussi certains mobs passifs et peut servir de source de lumière avec un niveau de luminosité de 15. Pour éteindre un feu de camp, utilisez une pelle dessus ou versez de l'eau. Un feu éteint peut être rallumé avec un briquet ou une charge de feu."
        }
      ],
      tips: [
        "Placez une botte de foin sous le feu de camp pour multiplier la hauteur de la colonne de fumée et créer un repère visible de loin.",
        "Utilisez le feu de camp sous une ruche pour récolter du miel sans vous faire piquer par les abeilles.",
        "Le feu de camp ne brûle pas les objets qui tombent dessus, contrairement à la lave, ce qui le rend sûr comme décoration.",
        "Minez le feu de camp avec un outil enchanté Toucher de Soie pour le récupérer intact, sinon vous n'obtiendrez que du charbon."
      ],
      faq: [
        {
          question: "Combien de nourriture peut-on cuire en même temps sur un feu de camp ?",
          answer: "Le feu de camp peut cuire jusqu'à 4 aliments simultanément. Chaque pièce de nourriture met 30 secondes à cuire. Bien que plus lent qu'un four, il ne consomme aucun combustible, ce qui le rend économique pour cuire en début de partie."
        },
        {
          question: "Le feu de camp peut-il mettre le feu aux blocs environnants ?",
          answer: "Non, contrairement au feu normal, le feu de camp ne propage pas les flammes aux blocs adjacents. Vous pouvez l'utiliser en toute sécurité à l'intérieur de structures en bois sans risque d'incendie."
        }
      ],
      relatedSlugs: ["craft-feu-de-camp", "canne-a-peche", "gateau"]
    }
  },
  {
    slug: "porte-armure",
    keyword: "porte armure minecraft",
    title: "Porte-Armure Minecraft : Craft et Guide Complet",
    h1: "Comment Faire un Porte-Armure dans Minecraft",
    metaDescription: "Découvrez comment crafter un porte-armure dans Minecraft. Recette de fabrication, personnalisation et poses pour exposer vos armures.",
    category: "crafting",
    volume: 1900,
    content: {
      intro: "Le porte-armure est une entité décorative qui permet d'exposer vos pièces d'armure, vos têtes de mob et même des citrouilles sculptées. C'est un incontournable pour organiser et décorer votre base. Depuis les mises à jour récentes, il offre aussi des possibilités de poses variées sur la version Bedrock.",
      sections: [
        {
          heading: "Recette de Craft du Porte-Armure",
          content: "Pour fabriquer un porte-armure, vous avez besoin de 6 bâtons et 1 dalle de pierre lisse. Placez les 3 bâtons sur la rangée supérieure, 1 bâton au centre de la rangée du milieu, et dans la rangée inférieure, placez 1 bâton à gauche, 1 dalle de pierre lisse au centre et 1 bâton à droite. La dalle de pierre lisse se fabrique à partir de 3 blocs de pierre lisse alignés horizontalement. Les bâtons sont obtenus en plaçant 2 planches verticalement dans la table de craft."
        },
        {
          heading: "Équipement et Personnalisation",
          content: "Vous pouvez équiper le porte-armure avec un casque, un plastron, des jambières, des bottes et un objet dans chaque main (sur Bedrock). Faites un clic droit avec la pièce d'armure en main pour l'équiper sur le porte-armure, et un clic droit à main vide tout en s'accroupissant pour retirer une pièce. Les têtes de mob (creeper, squelette, zombie, etc.) et les citrouilles sculptées peuvent être placées sur l'emplacement du casque. Sur la version Bedrock, vous pouvez aussi interagir pour changer la pose du porte-armure."
        },
        {
          heading: "Utilisations Créatives",
          content: "Les porte-armures sont très utilisés en décoration pour créer des salles d'exposition, des gardes statiques devant une entrée ou des mannequins dans des boutiques de roleplay. En utilisant des commandes, il est possible de créer des porte-armures invisibles, de petite taille ou avec des poses personnalisées sur la version Java. Les joueurs redstone les utilisent aussi comme mécanisme de détection avec des plaques de pression, car ils sont considérés comme des entités."
        }
      ],
      tips: [
        "Sur Bedrock Edition, accroupissez-vous et interagissez avec le porte-armure pour changer sa pose entre 13 positions différentes.",
        "Utilisez la commande /summon armor_stand ~ ~ ~ {Invisible:1b} pour créer un porte-armure invisible sur Java Edition.",
        "Les porte-armures peuvent être poussés par des pistons, ce qui permet de créer des mécanismes redstone intéressants.",
        "Vous pouvez nommer un porte-armure avec une étiquette sur une enclume pour lui donner un nom visible."
      ],
      faq: [
        {
          question: "Comment mettre des bras sur un porte-armure dans Minecraft Java ?",
          answer: "Sur la version Java, les porte-armures n'ont pas de bras visibles par défaut. Pour en ajouter, vous devez utiliser la commande /summon armor_stand ~ ~ ~ {ShowArms:1b}. Sur la version Bedrock, les porte-armures ont des bras par défaut."
        },
        {
          question: "Peut-on mettre autre chose que de l'armure sur un porte-armure ?",
          answer: "Oui, en plus des pièces d'armure classiques, vous pouvez placer des têtes de mob (creeper, squelette, zombie, dragon), des citrouilles sculptées et des élytres sur un porte-armure. Sur Bedrock, il est aussi possible de lui mettre des objets en main."
        }
      ],
      relatedSlugs: ["pierre-lisse", "lit", "table-enchantement"]
    }
  },
  {
    slug: "gateau",
    keyword: "gateau dans minecraft",
    title: "Gâteau Minecraft : Recette de Craft et Utilisation",
    h1: "Comment Faire un Gâteau dans Minecraft",
    metaDescription: "Apprenez à crafter un gâteau dans Minecraft. Recette complète avec les ingrédients, utilisation comme bloc de nourriture et décoration.",
    category: "crafting",
    volume: 1600,
    content: {
      intro: "Le gâteau est un aliment unique dans Minecraft car il se place comme un bloc et peut être mangé en plusieurs parts. Contrairement aux autres nourritures, il ne se consomme pas directement depuis l'inventaire. C'est aussi un élément de décoration apprécié et un composant utile dans certains circuits de redstone avec les comparateurs.",
      sections: [
        {
          heading: "Recette de Craft du Gâteau",
          content: "La recette du gâteau est l'une des plus complexes du jeu. Vous avez besoin de 3 seaux de lait sur la rangée supérieure, 2 sucres et 1 œuf sur la rangée du milieu (sucre à gauche, œuf au centre, sucre à droite), et 3 blés sur la rangée inférieure. Les seaux de lait s'obtiennent en faisant un clic droit sur une vache avec un seau en fer. Après le craft, les seaux vides vous sont rendus. Le sucre se fabrique à partir de canne à sucre."
        },
        {
          heading: "Consommation et Points de Faim",
          content: "Le gâteau se place sur un bloc solide et possède 7 parts. Chaque part restaure 2 points de faim (1 cuisse) et 0.4 de saturation. Un gâteau complet restaure donc 14 points de faim au total. Pour manger une part, faites un clic droit sur le gâteau posé. Contrairement aux autres aliments, manger une part est instantané et ne nécessite pas d'animation. Le gâteau ne peut pas être reposé une fois qu'une part a été mangée."
        },
        {
          heading: "Utilisations Spéciales",
          content: "Le gâteau peut être utilisé avec un comparateur de redstone pour émettre un signal dont la puissance varie selon le nombre de parts restantes (de 14 pour un gâteau plein à 0 pour un gâteau consommé). C'est utile pour créer des systèmes de détection. Vous pouvez aussi placer une bougie sur un gâteau intact pour créer un gâteau d'anniversaire décoratif. Le gâteau est également utilisé dans le succès 'Le mensonge' en référence au jeu Portal."
        }
      ],
      tips: [
        "Gardez vos seaux vides après avoir crafté le gâteau : ils vous sont automatiquement rendus dans la table de craft.",
        "Placez une bougie de n'importe quelle couleur sur un gâteau intact pour créer un gâteau d'anniversaire décoratif.",
        "Le gâteau est le seul aliment qui peut être partagé entre plusieurs joueurs, car chacun peut prendre une part.",
        "Utilisez un comparateur de redstone connecté à un gâteau pour créer un système de signal à 7 niveaux différents."
      ],
      faq: [
        {
          question: "Combien de points de faim restaure un gâteau complet ?",
          answer: "Un gâteau complet possède 7 parts, chacune restaurant 2 points de faim. Au total, un gâteau entier restaure 14 points de faim (7 cuisses). Cependant, la saturation est assez faible comparée à d'autres aliments comme le steak."
        },
        {
          question: "Peut-on empiler les gâteaux dans l'inventaire ?",
          answer: "Non, les gâteaux ne sont pas empilables dans l'inventaire. Chaque gâteau occupe un emplacement individuel, ce qui les rend peu pratiques comme source de nourriture en exploration. Ils sont davantage utilisés pour la décoration ou les circuits redstone."
        }
      ],
      relatedSlugs: ["feu-de-camp", "craft-feu-de-camp", "canne-a-peche"]
    }
  },
  {
    slug: "pierre-lisse",
    keyword: "pierre lisse minecraft",
    title: "Pierre Lisse Minecraft : Comment la Fabriquer",
    h1: "Comment Faire de la Pierre Lisse dans Minecraft",
    metaDescription: "Découvrez comment fabriquer de la pierre lisse dans Minecraft. Guide complet avec la méthode de cuisson, utilisations et recettes associées.",
    category: "crafting",
    volume: 1300,
    content: {
      intro: "La pierre lisse est un bloc de construction élégant obtenu en cuisant de la pierre ordinaire dans un four. Son apparence uniforme et sans texture rocheuse la rend très populaire pour les constructions modernes et épurées. Elle est également un ingrédient essentiel pour crafter plusieurs blocs importants comme le haut fourneau.",
      sections: [
        {
          heading: "Comment Obtenir de la Pierre Lisse",
          content: "La pierre lisse s'obtient en cuisant de la pierre (stone) dans un four, un haut fourneau ou un fumoir. La pierre elle-même est obtenue en cuisant du cobblestone dans un four. Il y a donc deux étapes de cuisson : cobblestone → pierre → pierre lisse. Chaque cuisson consomme du combustible, donc prévoyez suffisamment de charbon ou de bois. Un four met 10 secondes par bloc, tandis qu'un haut fourneau réduit ce temps à 5 secondes par bloc."
        },
        {
          heading: "Utilisations en Construction",
          content: "La pierre lisse est un bloc de construction très polyvalent grâce à sa texture propre et uniforme. Elle peut être transformée en dalles de pierre lisse au tailleur de pierre ou dans la table de craft (3 pierres lisses = 6 dalles). Les dalles de pierre lisse sont particulièrement appréciées pour les sols, les comptoirs et les éléments architecturaux modernes. La pierre lisse a aussi une résistance aux explosions supérieure à celle de la pierre normale, ce qui en fait un bon choix pour les constructions défensives."
        },
        {
          heading: "Recettes de Craft Utilisant la Pierre Lisse",
          content: "La pierre lisse est un composant clé de plusieurs recettes importantes. Elle sert à fabriquer le haut fourneau (3 pierres lisses + 5 lingots de fer + 1 four), les dalles de pierre lisse, et le porte-armure (1 dalle de pierre lisse + 6 bâtons). On peut aussi utiliser le tailleur de pierre pour la convertir plus efficacement en dalles ou en escaliers. C'est un matériau de base à toujours avoir en stock dans vos coffres."
        }
      ],
      tips: [
        "Utilisez un haut fourneau pour cuire la pierre en pierre lisse deux fois plus rapidement qu'avec un four classique.",
        "Automatisez la production en enchaînant deux fours avec des entonnoirs : le premier transforme le cobblestone en pierre, le second en pierre lisse.",
        "La pierre lisse a une résistance aux explosions de 6, identique à celle de la pierre, ce qui la rend solide face aux creepers.",
        "Utilisez le tailleur de pierre pour convertir 1 pierre lisse en 2 dalles, un meilleur ratio que la table de craft pour les dalles."
      ],
      faq: [
        {
          question: "Quelle est la différence entre la pierre, la pierre taillée et la pierre lisse ?",
          answer: "Le cobblestone (pierre taillée) est ce que vous obtenez en minant de la pierre. La pierre (stone) s'obtient en cuisant du cobblestone. La pierre lisse (smooth stone) s'obtient en cuisant la pierre une deuxième fois. Chaque variante a une texture de plus en plus uniforme."
        },
        {
          question: "Peut-on obtenir de la pierre lisse sans four ?",
          answer: "Non, la cuisson est la seule méthode pour obtenir de la pierre lisse en mode survie. Cependant, vous pouvez la trouver naturellement dans certaines maisons de village en tant que bloc décoratif, ou l'obtenir en mode créatif directement depuis l'inventaire."
        }
      ],
      relatedSlugs: ["haut-fourneau", "tailleur-de-pierre", "porte-armure"]
    }
  },
  {
    slug: "tailleur-de-pierre",
    keyword: "tailleur de pierre minecraft",
    title: "Tailleur de Pierre Minecraft : Craft et Utilisation",
    h1: "Comment Faire un Tailleur de Pierre dans Minecraft",
    metaDescription: "Guide complet du tailleur de pierre dans Minecraft. Recette de craft, utilisation pour tailler les blocs de pierre et avantages pratiques.",
    category: "crafting",
    volume: 1600,
    content: {
      intro: "Le tailleur de pierre est un bloc utilitaire qui permet de transformer les blocs de pierre en leurs variantes décoratives de manière plus efficace que la table de craft. Il économise des matériaux en offrant un ratio de conversion avantageux pour les dalles, escaliers et murets. C'est aussi le bloc de métier des villageois maçons.",
      sections: [
        {
          heading: "Recette de Craft du Tailleur de Pierre",
          content: "La recette du tailleur de pierre est simple et accessible dès le début du jeu. Vous avez besoin de 1 lingot de fer et 3 blocs de pierre (stone, pas cobblestone). Placez le lingot de fer au centre de la rangée supérieure et les 3 blocs de pierre sur la rangée du milieu. Notez que vous devez utiliser de la pierre cuite (obtenue en cuisant du cobblestone dans un four) et non du cobblestone brut. Le lingot de fer s'obtient en fondant du minerai de fer."
        },
        {
          heading: "Fonctionnement et Interface",
          content: "Faites un clic droit sur le tailleur de pierre pour ouvrir son interface. Placez un bloc de pierre dans l'emplacement de gauche, et toutes les variantes possibles apparaîtront à droite. Sélectionnez la variante souhaitée et récupérez le résultat. Le tailleur de pierre accepte la pierre, le cobblestone, le granite, la diorite, l'andésite, le grès, le prismarin, et bien d'autres types de pierres. Chaque bloc source offre différentes options : dalles, escaliers, murets, blocs taillés, etc."
        },
        {
          heading: "Avantages par Rapport à la Table de Craft",
          content: "Le principal avantage du tailleur de pierre est l'économie de matériaux. Par exemple, dans la table de craft, il faut 6 blocs de pierre pour obtenir 6 escaliers. Au tailleur de pierre, 1 seul bloc de pierre donne 1 escalier. Pour les dalles, la table de craft donne 6 dalles pour 3 blocs, tandis que le tailleur de pierre donne 2 dalles pour 1 bloc, soit un meilleur ratio. De plus, le tailleur de pierre permet des conversions en une seule étape qui nécessiteraient plusieurs crafts successifs autrement."
        }
      ],
      tips: [
        "Utilisez toujours le tailleur de pierre pour fabriquer des escaliers : vous économisez 5 blocs par rapport à la table de craft.",
        "Le tailleur de pierre permet de transformer directement la pierre en briques de pierre taillée en une seule étape.",
        "Placez un tailleur de pierre dans un village pour créer un villageois maçon qui vend des blocs de construction variés.",
        "Le tailleur de pierre est indestructible par les explosions de creepers, ce qui en fait un bon bloc à placer aux entrées."
      ],
      faq: [
        {
          question: "Le tailleur de pierre fonctionne-t-il avec tous les types de pierre ?",
          answer: "Le tailleur de pierre fonctionne avec la plupart des blocs de pierre : pierre, cobblestone, granite, diorite, andésite, grès, prismarin, pierres de l'End, pierres du Nether, et leurs variantes. Il ne fonctionne pas avec les métaux, le bois ou d'autres matériaux non-pierreux."
        },
        {
          question: "Est-ce que le tailleur de pierre donne de l'expérience ?",
          answer: "Non, le tailleur de pierre ne donne pas de points d'expérience lors de son utilisation. C'est un outil purement utilitaire pour la conversion de blocs. Son avantage principal réside dans l'économie de matériaux et la simplification des recettes."
        }
      ],
      relatedSlugs: ["pierre-lisse", "haut-fourneau", "table-cartographie"]
    }
  },
  {
    slug: "table-archerie",
    keyword: "table d'archerie minecraft",
    title: "Table d'Archerie Minecraft : Craft et Guide",
    h1: "Comment Faire une Table d'Archerie dans Minecraft",
    metaDescription: "Apprenez à crafter une table d'archerie dans Minecraft. Recette de fabrication, fonctionnement et utilisation avec les villageois.",
    category: "crafting",
    volume: 1300,
    content: {
      intro: "La table d'archerie, aussi appelée table de tir à l'arc, est un bloc fonctionnel de Minecraft qui sert principalement de bloc de métier pour les villageois. Elle transforme un villageois sans profession en fabricant de flèches. Bien qu'elle n'ait pas de fonction directe pour le joueur, elle est essentielle pour le commerce de flèches et d'arcs.",
      sections: [
        {
          heading: "Recette de Craft de la Table d'Archerie",
          content: "Pour fabriquer une table d'archerie, vous avez besoin de 2 silex et 4 planches de n'importe quel type de bois. Placez les 2 silex sur les deux premières cases de la rangée supérieure, puis les 4 planches sur les deux premières colonnes des rangées du milieu et du bas (formant un carré de 2x2 sous les silex). Le silex s'obtient en minant du gravier, avec environ 10% de chance de drop par bloc. Utilisez une pelle enchantée Fortune III pour augmenter considérablement le taux de drop."
        },
        {
          heading: "Utilisation avec les Villageois",
          content: "La table d'archerie est le bloc de métier du fabricant de flèches (fletcher). Placez-la près d'un villageois sans profession et celui-ci adoptera le métier de fabricant de flèches. Ce villageois propose alors des échanges très utiles : achat de bâtons et de silex, vente de flèches normales et de flèches à effet. Au niveau maître, il peut vendre des flèches spéciales comme les flèches de lenteur ou de faiblesse, et des arcs enchantés très puissants."
        },
        {
          heading: "Intérêt Stratégique",
          content: "Le fabricant de flèches est l'un des villageois les plus utiles du jeu pour les joueurs qui utilisent l'arc comme arme principale. Son échange de base (32 bâtons pour 1 émeraude) est l'un des plus rentables du jeu pour gagner des émeraudes facilement. De plus, les flèches à effet vendues au niveau maître sont normalement très coûteuses à fabriquer soi-même car elles nécessitent des potions persistantes. La table d'archerie peut aussi être utilisée comme combustible dans un four, brûlant pendant 15 secondes."
        }
      ],
      tips: [
        "Minez du gravier avec une pelle enchantée Fortune III pour obtenir du silex à chaque coup garanti.",
        "L'échange de 32 bâtons contre 1 émeraude chez le fabricant de flèches est l'un des meilleurs moyens de farmer des émeraudes.",
        "Montez votre fabricant de flèches au niveau maître pour accéder aux arcs enchantés et flèches à effet.",
        "Si les échanges proposés ne vous conviennent pas, détruisez et replacez la table avant que le villageois ait été échangé une première fois."
      ],
      faq: [
        {
          question: "La table d'archerie a-t-elle une fonction pour le joueur ?",
          answer: "Non, en dehors de servir de bloc de métier pour les villageois, la table d'archerie n'a actuellement aucune fonction interactive pour le joueur. Mojang a mentionné qu'une fonctionnalité pourrait être ajoutée dans une future mise à jour, mais pour l'instant, son seul usage est de créer des villageois fabricants de flèches."
        },
        {
          question: "Peut-on utiliser n'importe quel type de bois pour crafter la table d'archerie ?",
          answer: "Oui, vous pouvez utiliser n'importe quel type de planches pour la recette (chêne, bouleau, sapin, acacia, chêne noir, jungle, mangrove, cerisier, bambou). Vous pouvez même mélanger différents types de planches dans la même recette."
        }
      ],
      relatedSlugs: ["table-de-fleche", "table-enchantement", "canne-a-peche"]
    }
  },
  {
    slug: "table-de-fleche",
    keyword: "table de fleche minecraft",
    title: "Table de Flèche Minecraft : Craft et Utilisation",
    h1: "Comment Faire une Table de Flèche dans Minecraft",
    metaDescription: "Guide pour crafter une table de flèche dans Minecraft. Recette identique à la table d'archerie, villageois fabricant de flèches et échanges.",
    category: "crafting",
    volume: 1000,
    content: {
      intro: "La table de flèche, également connue sous le nom de table d'archerie ou fletching table, est un bloc utilitaire qui permet d'attribuer le métier de fabricant de flèches aux villageois. Elle est indispensable pour obtenir des flèches à effet et des arcs enchantés via le commerce villageois. Son craft est simple et accessible dès le début du jeu.",
      sections: [
        {
          heading: "Recette de Craft",
          content: "La table de flèche se fabrique avec 2 silex et 4 planches de bois. Les silex se placent sur les deux premières cases de la rangée du haut, et les 4 planches forment un carré 2x2 en dessous. N'importe quel type de planches convient pour cette recette, et vous pouvez même combiner des planches de bois différents. Le silex est obtenu en cassant du gravier, avec une chance de base de 10% qui augmente avec l'enchantement Fortune sur votre pelle."
        },
        {
          heading: "Le Fabricant de Flèches",
          content: "Quand un villageois sans métier se trouve à proximité d'une table de flèche, il devient fabricant de flèches. Ce villageois offre cinq niveaux d'échanges commerciaux. Au niveau novice, il achète des bâtons. Au niveau apprenti, il achète du silex et vend des flèches. Aux niveaux supérieurs, il propose des arcs, des arbalètes et des flèches à effet variées. Les flèches à effet sont particulièrement intéressantes car elles appliquent des effets de potion aux mobs touchés."
        },
        {
          heading: "Stratégie de Commerce",
          content: "Pour maximiser l'utilité de votre fabricant de flèches, commencez par faire l'échange de bâtons pour gagner de l'expérience commerciale et des émeraudes. Les bâtons sont extrêmement faciles à obtenir en masse avec une ferme d'arbres. Une fois le villageois monté en niveau, vous aurez accès aux flèches à effet qui sont normalement très coûteuses à fabriquer manuellement car elles nécessitent des potions persistantes de dragon. Les flèches de lenteur et de poison sont particulièrement efficaces en combat."
        }
      ],
      tips: [
        "Créez une ferme de gravier avec des torches pour obtenir du silex en grande quantité facilement.",
        "Les flèches à effet du fabricant de flèches niveau maître sont bien plus efficaces que de les crafter vous-même.",
        "Bloquez le villageois à côté de la table de flèche pour l'empêcher de s'en éloigner et perdre son métier.",
        "Combinez un fabricant de flèches avec un bibliothécaire pour obtenir un arc Infinity et des flèches à effet."
      ],
      faq: [
        {
          question: "Quelle est la différence entre la table de flèche et la table d'archerie ?",
          answer: "Il n'y a aucune différence. La table de flèche et la table d'archerie sont le même bloc (fletching table en anglais). Les deux noms sont utilisés par la communauté francophone pour désigner exactement le même objet, avec la même recette et les mêmes fonctions."
        },
        {
          question: "Comment obtenir des flèches à effet avec la table de flèche ?",
          answer: "Vous ne craftez pas les flèches à effet directement avec la table. Placez la table près d'un villageois pour qu'il devienne fabricant de flèches, puis montez son niveau en commerçant avec lui. Aux niveaux expert et maître, il proposera des flèches à effet en échange d'émeraudes."
        }
      ],
      relatedSlugs: ["table-archerie", "canne-a-peche", "table-enchantement"]
    }
  },
  {
    slug: "selle",
    keyword: "comment faire une selle sur minecraft",
    title: "Selle Minecraft : Comment l'Obtenir",
    h1: "Comment Obtenir une Selle dans Minecraft",
    metaDescription: "Découvrez comment obtenir une selle dans Minecraft. La selle ne se craft pas : trouvez-la dans les coffres, par la pêche ou le commerce.",
    category: "crafting",
    volume: 880,
    content: {
      intro: "La selle est un objet essentiel pour monter les chevaux, les ânes, les mules, les cochons et les striders dans Minecraft. Contrairement à la croyance populaire, la selle ne peut pas être craftée dans une table de fabrication. Elle doit être trouvée dans le monde ou obtenue par d'autres moyens, ce qui la rend relativement rare et précieuse.",
      sections: [
        {
          heading: "Où Trouver une Selle",
          content: "Les selles se trouvent dans les coffres de nombreuses structures générées naturellement. Les donjons souterrains ont environ 28% de chance de contenir une selle, les temples du désert environ 24%, les bastions du Nether environ 14%, et les forteresses du Nether environ 13%. Les temples de la jungle, les villages (maison du tanneur) et les avant-postes de pillards sont aussi des sources possibles. Explorez ces structures systématiquement pour maximiser vos chances de trouver une selle."
        },
        {
          heading: "Obtenir une Selle par la Pêche et le Commerce",
          content: "La pêche offre une chance de base d'environ 0.8% de pêcher une selle en tant que trésor. L'enchantement Chance de la Mer augmente cette probabilité, passant à environ 1.2% au niveau I, 1.5% au niveau II, et 1.9% au niveau III. Le commerce avec les villageois est une autre option fiable : un tanneur (leatherworker) de niveau maître vend des selles pour 6 émeraudes. Bien que coûteux, c'est la méthode la plus fiable pour obtenir des selles en quantité."
        },
        {
          heading: "Utilisation de la Selle",
          content: "Pour utiliser une selle, faites un clic droit sur un cheval apprivoisé, un cochon ou un strider en tenant la selle en main. Sur un cheval, vous pouvez le diriger librement. Sur un cochon, vous aurez besoin d'une carotte sur un bâton pour le contrôler. Sur un strider (dans le Nether), utilisez un champignon biscornu sur un bâton. La selle peut être récupérée en tuant l'animal ou en ouvrant l'inventaire du cheval. Les selles ne sont pas empilables : chaque selle occupe un emplacement d'inventaire."
        }
      ],
      tips: [
        "Le meilleur moyen d'obtenir des selles en quantité est de monter un tanneur au niveau maître dans un village.",
        "Utilisez une canne à pêche enchantée Chance de la Mer III pour presque doubler vos chances de pêcher une selle.",
        "Les bastions du Nether, particulièrement les salles de trésor, ont un excellent taux de selles dans leurs coffres.",
        "Ne tentez pas de crafter une selle : aucune recette n'existe dans le jeu vanilla, même avec des mods courants."
      ],
      faq: [
        {
          question: "Peut-on crafter une selle dans Minecraft ?",
          answer: "Non, il est impossible de crafter une selle dans Minecraft vanilla. C'est l'un des rares objets du jeu qui ne possède aucune recette de fabrication. Vous devez la trouver dans des coffres de structures, la pêcher, ou l'acheter à un villageois tanneur de niveau maître."
        },
        {
          question: "Peut-on récupérer une selle posée sur un animal ?",
          answer: "Oui, pour les chevaux, ânes et mules, ouvrez leur inventaire (touche d'inventaire en montant dessus) et retirez la selle. Pour les cochons et striders, vous devrez malheureusement tuer l'animal pour récupérer la selle, car ils n'ont pas d'inventaire accessible."
        }
      ],
      relatedSlugs: ["laisse", "canne-a-peche", "table-enchantement"]
    }
  },
  {
    slug: "laisse",
    keyword: "laisse dans minecraft",
    title: "Laisse Minecraft : Craft et Utilisation",
    h1: "Comment Faire une Laisse dans Minecraft",
    metaDescription: "Apprenez à crafter une laisse dans Minecraft. Recette avec ficelle et boule de slime, utilisation pour attacher et guider les animaux.",
    category: "crafting",
    volume: 880,
    content: {
      intro: "La laisse est un objet pratique qui permet d'attacher et de guider la plupart des mobs passifs dans Minecraft. Elle est particulièrement utile pour transporter des animaux vers votre base ou les garder en place dans un enclos. Sa recette nécessite de la ficelle et une boule de slime, ce qui la rend accessible assez tôt dans le jeu.",
      sections: [
        {
          heading: "Recette de Craft de la Laisse",
          content: "Pour crafter une laisse, placez 2 ficelles sur les deux premières cases de la rangée supérieure, 1 ficelle et 1 boule de slime sur les deux premières cases de la rangée du milieu, et 1 ficelle sur la dernière case de la rangée inférieure. Cette recette produit 2 laisses à chaque craft. La ficelle s'obtient en tuant des araignées (0-2 ficelles par araignée) ou en détruisant des toiles d'araignée. La boule de slime provient des slimes qui apparaissent dans les marais ou dans les chunks de slime sous la couche 40."
        },
        {
          heading: "Comment Utiliser la Laisse",
          content: "Faites un clic droit sur un mob avec la laisse en main pour l'attacher. Le mob vous suivra alors dans un rayon d'environ 10 blocs. Si vous vous éloignez trop, la laisse se casse et tombe au sol. Vous pouvez aussi attacher la laisse à une clôture en faisant un clic droit sur la clôture pendant qu'un mob est attaché, ce qui maintient l'animal en place. La laisse fonctionne sur la plupart des animaux passifs et neutres : chevaux, vaches, moutons, cochons, lamas, perroquets, renards, etc."
        },
        {
          heading: "Mobs Compatibles et Cas Particuliers",
          content: "La laisse fonctionne sur presque tous les mobs passifs et certains mobs neutres comme les loups et les abeilles. Elle ne fonctionne pas sur les villageois, les chauves-souris, les golems de fer ni sur la plupart des mobs hostiles. Un cas particulier intéressant est le marchand ambulant qui apparaît avec des lamas déjà attachés par des laisses : si vous tuez le marchand ou détachez les lamas, vous récupérez les laisses. C'est une source alternative pratique de laisses en début de partie."
        }
      ],
      tips: [
        "Tuez le marchand ambulant (ou attendez qu'il disparaisse) pour récupérer 2 laisses gratuites de ses lamas.",
        "Attachez la laisse à une clôture pour garder vos animaux en place de manière permanente dans votre enclos.",
        "Vous pouvez attacher plusieurs animaux avec plusieurs laisses simultanément pour déplacer un troupeau entier.",
        "Les lamas forment naturellement une caravane : attachez un seul lama avec une laisse et les autres le suivront automatiquement."
      ],
      faq: [
        {
          question: "Peut-on attacher un villageois avec une laisse ?",
          answer: "Non, les villageois ne peuvent pas être attachés avec une laisse dans Minecraft vanilla. Pour déplacer un villageois, vous devrez utiliser un bateau, un wagonnet, ou le pousser physiquement. Certains joueurs utilisent aussi des rails pour les transporter sur de longues distances."
        },
        {
          question: "Comment trouver des boules de slime pour crafter des laisses ?",
          answer: "Les boules de slime sont lâchées par les slimes, qui apparaissent la nuit dans les biomes de marais ou en permanence dans les chunks de slime sous la couche 40. Vous pouvez aussi obtenir des boules de slime en échange d'émeraudes auprès d'un villageois marchand ambulant ou en tuant des pandas bébés qui éternuent."
        }
      ],
      relatedSlugs: ["selle", "canne-a-peche", "lit"]
    }
  },
  {
    slug: "lit",
    keyword: "lit dans minecraft",
    title: "Lit Minecraft : Craft et Couleurs",
    h1: "Comment Faire un Lit dans Minecraft",
    metaDescription: "Guide complet pour crafter un lit dans Minecraft. Recette de fabrication, toutes les couleurs disponibles et utilisation pour le spawn.",
    category: "crafting",
    volume: 880,
    content: {
      intro: "Le lit est l'un des objets les plus fondamentaux de Minecraft, permettant de passer la nuit, de définir votre point de réapparition et d'éviter les phantoms. Disponible en 16 couleurs différentes, il est souvent le premier objet que les joueurs fabriquent en début de partie. Dormir dans un lit est essentiel pour la survie à long terme.",
      sections: [
        {
          heading: "Recette de Craft du Lit",
          content: "Pour fabriquer un lit, placez 3 blocs de laine de la même couleur sur la rangée supérieure et 3 planches de bois (n'importe quel type) sur la rangée inférieure de la table de craft. La couleur du lit dépend de la couleur de la laine utilisée. La laine s'obtient en tondant des moutons avec des cisailles (1-3 blocs par mouton) ou en tuant des moutons (1 bloc). Les planches s'obtiennent en plaçant un bloc de bûche dans la table de craft."
        },
        {
          heading: "Les 16 Couleurs Disponibles",
          content: "Le lit existe en 16 couleurs correspondant aux 16 colorants du jeu : blanc, orange, magenta, bleu clair, jaune, vert clair (lime), rose, gris, gris clair, cyan, violet, bleu, marron, vert, rouge et noir. Vous pouvez teindre un lit existant en plaçant le lit et un colorant dans la table de craft, sans avoir besoin de refabriquer le lit entièrement. Les moutons blancs sont les plus courants, ce qui rend le lit blanc le plus facile à obtenir en début de partie."
        },
        {
          heading: "Utilisation et Mécaniques",
          content: "Dormir dans un lit passe la nuit instantanément et définit votre point de réapparition (spawn point). Vous ne pouvez dormir que la nuit ou pendant un orage. En multijoueur, tous les joueurs (ou un pourcentage configurable) doivent dormir pour passer la nuit. Attention : utiliser un lit dans le Nether ou l'End provoque une explosion massive, plus puissante que la TNT. Cette mécanique est d'ailleurs exploitée par les speedrunners pour tuer le dragon de l'End rapidement."
        }
      ],
      tips: [
        "Dormez au moins une fois toutes les 3 nuits en jeu pour éviter l'apparition des phantoms qui attaquent les joueurs insomniaques.",
        "Un lit placé dans le Nether explose avec une force de 5 : certains joueurs l'utilisent comme arme contre le dragon de l'End.",
        "Vous pouvez changer la couleur d'un lit déjà crafté en le combinant avec un colorant dans la table de craft.",
        "Placez toujours un lit dans votre base principale et dormez-y pour mettre à jour votre point de réapparition."
      ],
      faq: [
        {
          question: "Que se passe-t-il si on utilise un lit dans le Nether ?",
          answer: "Le lit explose violemment si vous essayez de dormir dans le Nether ou dans l'End. L'explosion a une puissance de 5 (plus forte que la TNT à 4) et crée du feu. Cette mécanique est intentionnelle car il n'y a pas de cycle jour/nuit dans ces dimensions."
        },
        {
          question: "Comment éviter les phantoms dans Minecraft ?",
          answer: "Les phantoms apparaissent après 3 nuits sans dormir. Pour les éviter, dormez régulièrement dans un lit. Il suffit de commencer à dormir pour réinitialiser le compteur, même si la nuit ne passe pas (en multijoueur). Vous pouvez aussi les empêcher avec la règle de jeu doInsomnia en mode créatif."
        }
      ],
      relatedSlugs: ["porte-armure", "laisse", "selle"]
    }
  },
  {
    slug: "longue-vue",
    keyword: "longue vue minecraft",
    title: "Longue-Vue Minecraft : Craft et Utilisation",
    h1: "Comment Faire une Longue-Vue dans Minecraft",
    metaDescription: "Apprenez à crafter une longue-vue dans Minecraft. Recette avec éclat d'améthyste et lingot de cuivre, zoom et utilisation détaillée.",
    category: "crafting",
    volume: 590,
    content: {
      intro: "La longue-vue est un objet d'observation ajouté dans la mise à jour 1.17 Caves & Cliffs qui permet de zoomer sur des zones éloignées. Elle se fabrique avec des éclats d'améthyste et du cuivre, deux ressources introduites dans cette même mise à jour. C'est un outil pratique pour repérer des structures, des mobs ou des biomes à distance.",
      sections: [
        {
          heading: "Recette de Craft de la Longue-Vue",
          content: "La longue-vue se fabrique en plaçant 1 éclat d'améthyste en haut et 2 lingots de cuivre en dessous, verticalement au centre de la table de craft. Les éclats d'améthyste s'obtiennent en minant des amas d'améthyste matures dans les géodes d'améthyste avec une pioche en fer ou mieux. Le cuivre se mine dans les grottes et se fond dans un four pour obtenir des lingots. La recette est simple mais nécessite de trouver une géode d'améthyste."
        },
        {
          heading: "Fonctionnement du Zoom",
          content: "Pour utiliser la longue-vue, maintenez le clic droit en la tenant en main. L'écran se rétrécit à un carré au centre avec un effet de vignette, offrant un zoom significatif d'environ x10 sur la zone visée. Votre champ de vision est considérablement réduit pendant l'utilisation, ce qui limite votre vision périphérique. Le zoom est fixe et ne peut pas être ajusté. Pendant l'utilisation, votre vitesse de déplacement est réduite, comme lorsque vous utilisez un arc."
        },
        {
          heading: "Trouver les Géodes d'Améthyste",
          content: "Les géodes d'améthyste se trouvent sous terre, généralement entre les couches -58 et 30. Elles sont reconnaissables à leur coque extérieure en calcite et tuf lisse, avec un intérieur tapissé de blocs d'améthyste bourgeonnante. Les amas d'améthyste poussent en quatre stades sur les blocs bourgeonnants, et seul le stade final (amas d'améthyste) donne des éclats lorsqu'il est miné. Les géodes peuvent parfois être partiellement visibles depuis la surface, surtout dans les biomes côtiers."
        }
      ],
      tips: [
        "Utilisez la longue-vue pour repérer les structures comme les villages, les temples ou les portails en ruine à distance.",
        "Ne minez pas les blocs d'améthyste bourgeonnante : ils font pousser de nouveaux amas d'améthyste avec le temps.",
        "La pioche enchantée Toucher de Soie sur les amas d'améthyste donne le bloc entier au lieu des éclats.",
        "Combinez la longue-vue avec un point en hauteur pour une vision maximale du terrain environnant."
      ],
      faq: [
        {
          question: "Où trouver des éclats d'améthyste pour la longue-vue ?",
          answer: "Les éclats d'améthyste s'obtiennent en minant des amas d'améthyste matures (le stade final de croissance) dans les géodes d'améthyste souterraines. Chaque amas mature donne 4 éclats avec une pioche normale, ou plus avec l'enchantement Fortune. Les géodes se trouvent entre les couches -58 et 30."
        },
        {
          question: "La longue-vue a-t-elle une durabilité limitée ?",
          answer: "Non, la longue-vue a une durabilité infinie et ne s'use jamais. Vous pouvez l'utiliser autant de fois que vous le souhaitez sans qu'elle ne se casse. C'est un outil permanent une fois crafté."
        }
      ],
      relatedSlugs: ["table-enchantement", "craft-bibliotheque", "carte"]
    }
  },
  {
    slug: "table-cartographie",
    keyword: "table de cartographie minecraft",
    title: "Table de Cartographie Minecraft : Craft et Guide",
    h1: "Comment Faire une Table de Cartographie dans Minecraft",
    metaDescription: "Guide pour crafter une table de cartographie dans Minecraft. Recette, agrandissement de cartes, verrouillage et utilisation complète.",
    category: "crafting",
    volume: 590,
    content: {
      intro: "La table de cartographie est un bloc utilitaire spécialisé dans la manipulation des cartes dans Minecraft. Elle permet d'agrandir, de copier, de verrouiller et de renommer les cartes de manière plus simple et économique qu'avec la table de craft. C'est aussi le bloc de métier des villageois cartographes, qui vendent des cartes spéciales très utiles.",
      sections: [
        {
          heading: "Recette de Craft",
          content: "La table de cartographie se fabrique avec 2 papiers et 4 planches de bois. Placez les 2 papiers sur les deux premières cases de la rangée supérieure, puis les 4 planches en carré 2x2 sur les rangées du milieu et du bas. N'importe quel type de planches convient. Le papier se fabrique à partir de canne à sucre (3 cannes = 3 papiers). C'est une recette très accessible dès le début du jeu si vous avez trouvé de la canne à sucre près d'un point d'eau."
        },
        {
          heading: "Fonctionnalités de la Table",
          content: "La table de cartographie offre quatre fonctions principales. Premièrement, placer une carte avec du papier l'agrandit d'un niveau de zoom (4 niveaux max). Deuxièmement, placer une carte avec une carte vide crée une copie. Troisièmement, placer une carte avec une vitre la verrouille définitivement, empêchant toute mise à jour. Quatrièmement, vous pouvez renommer votre carte. L'agrandissement est plus économique qu'avec la table de craft car il ne nécessite qu'un seul papier au lieu de huit."
        },
        {
          heading: "Le Villageois Cartographe",
          content: "Placée dans un village, la table de cartographie transforme un villageois sans métier en cartographe. Ce villageois est extrêmement utile car il vend des cartes d'explorateur qui mènent à des structures rares. La carte d'explorateur de l'océan mène à un monument sous-marin, et la carte d'explorateur de la forêt mène à un manoir. Au niveau maître, il peut vendre des bannières de globe pour décorer vos cartes. Le cartographe achète aussi du papier et des boussoles."
        }
      ],
      tips: [
        "Utilisez la table de cartographie plutôt que la table de craft pour agrandir vos cartes : 1 papier au lieu de 8.",
        "Verrouillez vos cartes avec une vitre pour garder un instantané permanent d'une zone, même si elle change par la suite.",
        "Achetez les cartes d'explorateur au cartographe pour trouver facilement les monuments océaniques et les manoirs.",
        "Copiez vos cartes importantes en double pour en garder une copie de sauvegarde dans un coffre."
      ],
      faq: [
        {
          question: "Combien de fois peut-on agrandir une carte ?",
          answer: "Une carte peut être agrandie 4 fois au total, allant du niveau 0 (128x128 blocs) au niveau 4 (2048x2048 blocs). Chaque agrandissement double la zone couverte. La table de cartographie est le moyen le plus économique de le faire, ne nécessitant qu'un papier par agrandissement."
        },
        {
          question: "Comment verrouiller une carte dans Minecraft ?",
          answer: "Pour verrouiller une carte, placez-la dans la table de cartographie avec une vitre (glass pane). La carte verrouillée ne se mettra plus jamais à jour, conservant l'image actuelle de la zone de manière permanente. C'est utile pour garder un historique de vos constructions ou pour créer des cartes décoratives."
        }
      ],
      relatedSlugs: ["carte", "longue-vue", "craft-bibliotheque"]
    }
  },
  {
    slug: "carte",
    keyword: "comment faire une carte minecraft",
    title: "Carte Minecraft : Craft et Utilisation Complète",
    h1: "Comment Faire une Carte dans Minecraft",
    metaDescription: "Découvrez comment crafter une carte dans Minecraft. Recette de fabrication, exploration, agrandissement et astuces pour la cartographie.",
    category: "crafting",
    volume: 590,
    content: {
      intro: "La carte est un outil de navigation essentiel dans Minecraft qui permet de visualiser le terrain exploré autour de vous. Elle se remplit automatiquement au fur et à mesure de votre exploration et peut être agrandie, copiée et affichée dans des cadres. Maîtriser la cartographie est indispensable pour s'orienter dans les mondes immenses de Minecraft.",
      sections: [
        {
          heading: "Recette de Craft de la Carte",
          content: "Pour fabriquer une carte vide, placez 8 papiers autour d'une boussole au centre de la table de craft 3x3. La boussole se fabrique avec 4 lingots de fer autour d'une poudre de redstone. Le papier s'obtient à partir de canne à sucre (3 cannes alignées = 3 papiers). Vous pouvez aussi fabriquer une carte vide sans boussole en utilisant seulement 9 papiers, mais cette carte n'affichera pas votre position. Sur Bedrock Edition, une carte vide basique se crée avec 1 seul papier dans la table de cartographie."
        },
        {
          heading: "Exploration et Remplissage",
          content: "Tenez la carte en main et explorez pour la remplir automatiquement. La carte de base (niveau 0) couvre une zone de 128x128 blocs. Elle se remplit uniquement avec les zones que vous visitez physiquement en la tenant. Les zones non explorées restent vides et de couleur parchemin. Un curseur blanc indique votre position et direction sur la carte. Pour les cartes avec boussole, d'autres joueurs tenant la même carte copiée apparaissent aussi comme des curseurs, facilitant le jeu en équipe."
        },
        {
          heading: "Agrandissement et Affichage",
          content: "Agrandissez votre carte en la plaçant dans la table de cartographie avec du papier (1 papier par niveau). Chaque agrandissement double la taille de la zone couverte : 128, 256, 512, 1024, puis 2048 blocs de côté. Pour afficher une carte au mur, placez un cadre (item frame) sur un mur et fixez la carte dedans. Vous pouvez combiner plusieurs cartes agrandies au même niveau dans des cadres adjacents pour créer une immense carte murale qui se connecte automatiquement."
        }
      ],
      tips: [
        "Créez une carte murale en plaçant plusieurs cartes de même niveau dans des cadres adjacents pour une vue d'ensemble de votre monde.",
        "Utilisez la table de cartographie plutôt que la table de craft pour agrandir vos cartes et économiser du papier.",
        "Les bannières placées dans le monde apparaissent comme des marqueurs sur votre carte avec leur couleur et leur nom.",
        "Copiez vos cartes explorées et gardez un exemplaire en sécurité dans votre base en cas de mort en exploration."
      ],
      faq: [
        {
          question: "Comment ajouter des marqueurs sur une carte ?",
          answer: "Vous pouvez ajouter des marqueurs sur une carte en utilisant une bannière. Placez une bannière nommée dans le monde, puis faites un clic droit dessus avec votre carte en main. La bannière apparaîtra comme un marqueur coloré sur la carte avec son nom affiché. Cela fonctionne uniquement sur la version Java."
        },
        {
          question: "Quelle est la taille maximale d'une carte ?",
          answer: "Une carte peut couvrir au maximum une zone de 2048x2048 blocs au niveau de zoom 4. C'est le niveau d'agrandissement maximum. Pour couvrir une zone plus large, vous devrez utiliser plusieurs cartes adjacentes et les assembler sur un mur à l'aide de cadres."
        }
      ],
      relatedSlugs: ["table-cartographie", "longue-vue", "canne-a-peche"]
    }
  },
  {
    slug: "canne-a-peche",
    keyword: "canne a peche minecraft",
    title: "Canne à Pêche Minecraft : Craft et Enchantements",
    h1: "Comment Faire une Canne à Pêche dans Minecraft",
    metaDescription: "Guide complet de la canne à pêche dans Minecraft. Recette de craft, enchantements recommandés, pêche de trésors et astuces de pro.",
    category: "crafting",
    volume: 590,
    content: {
      intro: "La canne à pêche est un outil polyvalent dans Minecraft qui sert non seulement à pêcher des poissons, mais aussi à obtenir des trésors rares comme des livres enchantés, des arcs et des selles. Avec les bons enchantements, elle devient un moyen très efficace de farmer des ressources précieuses. Elle peut même être utilisée comme arme pour repousser les mobs.",
      sections: [
        {
          heading: "Recette de Craft",
          content: "La canne à pêche se fabrique avec 3 bâtons et 2 ficelles. Placez les bâtons en diagonale du coin inférieur gauche au coin supérieur droit, et les 2 ficelles verticalement sous le bâton le plus à droite. Les bâtons s'obtiennent en craftant 2 planches de bois, et la ficelle provient des araignées ou des toiles d'araignée. C'est une recette très accessible dès la première nuit si vous tuez quelques araignées. Vous pouvez aussi occasionnellement en trouver une enchantée dans les coffres de structures."
        },
        {
          heading: "Enchantements Recommandés",
          content: "Les enchantements transforment la canne à pêche en un outil de farming puissant. Chance de la Mer (Luck of the Sea) augmente les chances de pêcher des trésors et réduit les déchets. Appât (Lure) réduit le temps d'attente entre chaque prise. Solidité (Unbreaking) prolonge la durabilité. Raccommodage (Mending) est le meilleur enchantement possible car il répare la canne avec l'expérience gagnée en pêchant, la rendant pratiquement éternelle. La combinaison idéale est Chance de la Mer III + Appât III + Solidité III + Raccommodage."
        },
        {
          heading: "Trésors et Mécanique de Pêche",
          content: "La pêche peut donner trois catégories d'objets : poissons (85% de base), déchets (10%) et trésors (5%). Les trésors incluent des livres enchantés, des arcs enchantés, des cannes à pêche enchantées, des selles, des étiquettes et des coquilles de nautile. Avec Chance de la Mer III, les trésors passent à environ 11.3% et les déchets tombent à 4.2%. Pour que la pêche fonctionne, le bobber doit être dans l'eau à ciel ouvert. Des particules de bulles s'approchent du flotteur pour signaler une prise imminente."
        }
      ],
      tips: [
        "La canne à pêche parfaite combine Chance de la Mer III, Appât III, Solidité III et Raccommodage pour un farming infini.",
        "Pêchez en plein air avec le bobber dans au moins 5x4x5 blocs d'eau libre pour éviter de réduire les chances de trésor.",
        "Utilisez la canne à pêche comme arme défensive : le crochet repousse les mobs à distance et peut les tirer vers vous.",
        "Surveillez les particules de bulles qui se déplacent vers votre flotteur pour anticiper le moment de la touche."
      ],
      faq: [
        {
          question: "Quels trésors peut-on pêcher avec une canne à pêche ?",
          answer: "Les trésors pêchables incluent des livres enchantés (avec des enchantements aléatoires), des arcs enchantés, des cannes à pêche enchantées, des selles, des étiquettes de nom, des coquilles de nautile et des nénuphars. L'enchantement Chance de la Mer III augmente considérablement ces chances."
        },
        {
          question: "La canne à pêche peut-elle être réparée ?",
          answer: "Oui, vous pouvez réparer une canne à pêche de trois façons : en combinant deux cannes à pêche dans la table de craft ou sur une enclume, en utilisant l'enchantement Raccommodage qui la répare avec l'expérience gagnée, ou en la combinant sur une enclume avec des ficelles. Le Raccommodage est la meilleure option car la pêche donne de l'expérience."
        }
      ],
      relatedSlugs: ["selle", "table-enchantement", "laisse"]
    }
  },
  {
    slug: "ascenseur",
    keyword: "comment faire un ascenseur minecraft",
    title: "Ascenseur Minecraft : Comment le Construire",
    h1: "Comment Faire un Ascenseur dans Minecraft",
    metaDescription: "Apprenez à construire un ascenseur dans Minecraft. Guide complet avec ascenseur à eau, à bulles, à pistons et autres méthodes efficaces.",
    category: "crafting",
    volume: 480,
    content: {
      intro: "L'ascenseur est une construction mécanique essentielle pour se déplacer verticalement dans vos bases Minecraft. Bien qu'il n'existe pas de bloc d'ascenseur dans le jeu, plusieurs méthodes ingénieuses permettent de créer des systèmes de transport vertical efficaces. L'ascenseur à bulles est la méthode la plus populaire et la plus simple à mettre en place.",
      sections: [
        {
          heading: "Ascenseur à Bulles (Colonne de Bulles)",
          content: "L'ascenseur à bulles est la méthode la plus efficace. Construisez une colonne de blocs de pierre ou autre avec un espace de 1x1 au centre, rempli d'eau source à chaque niveau. Placez un bloc d'âme (soul sand) en bas pour créer un courant ascendant, ou un bloc de magma pour un courant descendant. Chaque bloc d'eau doit être un bloc source (pas de l'eau courante), donc utilisez du varech (kelp) pour convertir automatiquement l'eau courante en blocs sources en le plaçant du bas vers le haut. Retirez ensuite le varech."
        },
        {
          heading: "Construction Étape par Étape",
          content: "Commencez par creuser ou construire un tube vertical de la hauteur désirée. Le tube doit faire au minimum 1x1 bloc à l'intérieur. Placez un bloc d'âme au fond pour la montée. Remplissez toute la colonne d'eau en plaçant de l'eau au sommet, puis plantez du varech du bas vers le haut pour convertir chaque bloc en eau source. Cassez ensuite le varech. Les bulles devraient monter visiblement dans la colonne. Pour la descente, construisez une colonne séparée avec un bloc de magma au fond."
        },
        {
          heading: "Autres Types d'Ascenseurs",
          content: "L'ascenseur à pistons utilise des pistons collants activés séquentiellement pour pousser le joueur vers le haut, mais il est complexe à construire et nécessite beaucoup de redstone. L'ascenseur à échelle est le plus simple mais le plus lent : placez simplement des échelles sur un mur vertical. L'ascenseur à eau en cascade utilise des panneaux ou des portes placées tous les 2 blocs dans un couloir vertical rempli d'eau pour créer des poches d'air permettant de respirer pendant la montée."
        }
      ],
      tips: [
        "Utilisez du varech (kelp) pour convertir facilement toute l'eau courante en blocs d'eau source dans votre colonne.",
        "Construisez deux colonnes côte à côte : une avec du soul sand pour monter et une avec du magma pour descendre.",
        "Placez une trappe ouverte en haut de la colonne pour empêcher l'eau de déborder tout en permettant le passage.",
        "Le bloc d'âme propulse le joueur vers le haut à grande vitesse, ce qui est plus rapide que n'importe quel autre ascenseur."
      ],
      faq: [
        {
          question: "Comment faire pour que toute l'eau devienne des blocs sources ?",
          answer: "Plantez du varech (kelp) dans la colonne d'eau du bas vers le haut. Le varech convertit automatiquement chaque bloc d'eau courante en bloc d'eau source. Une fois que toute la colonne est convertie, cassez le varech et les blocs sources resteront en place."
        },
        {
          question: "Peut-on utiliser un ascenseur à bulles dans le Nether ?",
          answer: "Non, l'eau ne peut pas être placée dans le Nether, donc les ascenseurs à bulles ne fonctionnent pas dans cette dimension. Dans le Nether, vous devrez utiliser des ascenseurs à pistons, des échelles, ou des blocs de slime propulsés par des pistons."
        }
      ],
      relatedSlugs: ["craft-observateur", "pierre-lisse", "haut-fourneau"]
    }
  },
  {
    slug: "craft-feu-de-camp",
    keyword: "craft feu de camp minecraft",
    title: "Craft Feu de Camp Minecraft : Recette Complète",
    h1: "Craft du Feu de Camp dans Minecraft",
    metaDescription: "Recette complète du craft du feu de camp dans Minecraft. Matériaux nécessaires, variante des âmes et guide d'utilisation détaillé.",
    category: "crafting",
    volume: 480,
    content: {
      intro: "Le craft du feu de camp est une recette simple mais essentielle à connaître dans Minecraft. Ce bloc multifonction permet de cuire de la nourriture gratuitement, de signaler votre position avec sa fumée et de calmer les abeilles. Il existe aussi une variante mystique : le feu de camp des âmes, émettant une lumière bleutée.",
      sections: [
        {
          heading: "Recette Détaillée du Feu de Camp",
          content: "Le craft du feu de camp standard nécessite 1 charbon (ou charbon de bois), 3 bâtons et 3 bûches de bois. Dans la table de craft 3x3, placez le charbon au centre, puis 1 bâton au-dessus du charbon et 1 bâton de chaque côté (formant un + avec le charbon au centre). Les 3 bûches occupent toute la rangée inférieure. N'importe quel type de bois fonctionne pour les bûches : chêne, bouleau, sapin, acacia, jungle, chêne noir, mangrove, cerisier ou bambou."
        },
        {
          heading: "Variante : Feu de Camp des Âmes",
          content: "Le feu de camp des âmes (soul campfire) se craft de la même manière mais en remplaçant le charbon par du sable des âmes ou de la terre des âmes. Ce bloc émet une flamme bleue caractéristique et un niveau de lumière de 10 (contre 15 pour le feu normal). Sa particularité est qu'il repousse les piglins dans le Nether, ce qui en fait un excellent bloc de sécurité. Il inflige aussi 2 cœurs de dégâts par seconde aux entités qui marchent dessus, contre 1 cœur pour la version normale."
        },
        {
          heading: "Guide d'Utilisation Complet",
          content: "Le feu de camp cuit jusqu'à 4 aliments simultanément en 30 secondes chacun sans combustible. Pour y placer de la nourriture, faites un clic droit avec l'aliment cru en main. Sous une ruche, il calme les abeilles pour récolter le miel en sécurité. Avec une botte de foin en dessous, sa fumée monte à 24 blocs au lieu de 10, créant un signal visible de loin. Éteignez-le avec une pelle ou de l'eau, et rallumez-le avec un briquet ou une charge de feu. Minez-le avec Toucher de Soie pour le récupérer intact."
        }
      ],
      tips: [
        "Le charbon de bois fonctionne aussi bien que le charbon pour crafter un feu de camp, pratique en début de partie.",
        "Placez le feu de camp des âmes dans le Nether pour repousser les piglins sans avoir à porter d'armure en or.",
        "Empilez plusieurs bottes de foin sous le feu de camp : seule celle directement en dessous compte pour amplifier la fumée.",
        "Le feu de camp normal émet un niveau de lumière de 15, le maximum possible, ce qui en fait une excellente source de lumière."
      ],
      faq: [
        {
          question: "Peut-on utiliser du charbon de bois au lieu du charbon pour le feu de camp ?",
          answer: "Oui, le charbon et le charbon de bois sont interchangeables dans la recette du feu de camp. Le charbon de bois s'obtient en cuisant des bûches de bois dans un four, ce qui le rend accessible dès le début de la partie sans avoir besoin de trouver du charbon dans les mines."
        },
        {
          question: "Quelle est la différence entre le feu de camp normal et celui des âmes ?",
          answer: "Le feu de camp des âmes émet une flamme bleue, un niveau de lumière de 10 (contre 15), inflige 2 cœurs de dégâts (contre 1), et repousse les piglins dans le Nether. Il se craft avec du sable des âmes à la place du charbon. Fonctionnellement, il cuit la nourriture de la même manière."
        }
      ],
      relatedSlugs: ["feu-de-camp", "haut-fourneau", "gateau"]
    }
  },
  {
    slug: "craft-observateur",
    keyword: "craft observateur minecraft",
    title: "Craft Observateur Minecraft : Recette et Utilisation",
    h1: "Comment Crafter un Observateur dans Minecraft",
    metaDescription: "Recette du craft de l'observateur dans Minecraft. Matériaux, fonctionnement du détecteur de blocs et utilisations en redstone détaillées.",
    category: "crafting",
    volume: 480,
    content: {
      intro: "L'observateur est un bloc de redstone puissant qui détecte les changements d'état des blocs adjacents et émet un signal redstone en réponse. C'est un composant fondamental pour de nombreuses fermes automatiques et systèmes de redstone avancés. Sa capacité à détecter pratiquement tout changement de bloc en fait un outil extrêmement polyvalent.",
      sections: [
        {
          heading: "Recette de Craft de l'Observateur",
          content: "L'observateur se fabrique avec 6 blocs de cobblestone, 2 poudres de redstone et 1 quartz du Nether. Dans la table de craft, placez 3 cobblestones sur la rangée supérieure, 2 poudres de redstone aux extrémités de la rangée du milieu avec le quartz au centre, et 3 cobblestones sur la rangée inférieure. Le quartz du Nether s'obtient en minant le minerai de quartz dans le Nether, ce qui signifie que vous devez avoir accès au Nether pour fabriquer cet objet."
        },
        {
          heading: "Fonctionnement et Détection",
          content: "L'observateur possède une face d'observation (avec un visage) et une face de sortie (avec un point rouge). Quand un bloc devant la face d'observation change d'état (placement, destruction, croissance de culture, changement de redstone, etc.), l'observateur émet une impulsion redstone de 1 tick depuis sa face arrière. Il détecte tout : la pousse des plantes, le changement de niveau d'eau, le mouvement des pistons, la mise à jour d'un bloc de redstone, et bien plus encore."
        },
        {
          heading: "Utilisations en Redstone",
          content: "L'observateur est utilisé dans d'innombrables mécanismes. Pour les fermes automatiques, il détecte la croissance des cultures (canne à sucre, cactus, bambou) pour activer des pistons de récolte. En combinant deux observateurs face à face, vous créez un horloge redstone ultra-rapide qui s'active indéfiniment. Il est aussi utilisé dans les machines volantes à base de pistons collants, les systèmes de tri automatique, et les détecteurs de présence. C'est le composant redstone le plus versatile du jeu."
        }
      ],
      tips: [
        "Deux observateurs placés face à face créent une horloge redstone très rapide, utile pour de nombreux circuits.",
        "Utilisez l'observateur pour détecter automatiquement la pousse de la canne à sucre et activer un piston de récolte.",
        "L'observateur peut détecter quand un four finit de cuire un objet, permettant d'automatiser des systèmes de cuisson.",
        "Orientez bien la face d'observation (le visage) vers le bloc que vous voulez surveiller et la sortie vers votre circuit redstone."
      ],
      faq: [
        {
          question: "Que détecte exactement l'observateur ?",
          answer: "L'observateur détecte tout changement d'état du bloc directement devant sa face d'observation. Cela inclut le placement et la destruction de blocs, la croissance des plantes, les changements d'état de la redstone, les mouvements de pistons, les changements de niveau d'eau, et même les modifications d'état des blocs comme l'ouverture d'un coffre."
        },
        {
          question: "Comment orienter correctement un observateur ?",
          answer: "L'observateur se place avec sa face d'observation (le visage avec des yeux) orientée vers la direction que vous regardez lors du placement. La face de sortie (le point rouge) sera donc à l'opposé. Le signal redstone sort par la face arrière (le point rouge), et la détection se fait par la face avant (le visage)."
        }
      ],
      relatedSlugs: ["ascenseur", "haut-fourneau", "table-enchantement"]
    }
  },
  {
    slug: "craft-bibliotheque",
    keyword: "craft bibliothèque minecraft",
    title: "Craft Bibliothèque Minecraft : Recette Complète",
    h1: "Comment Crafter une Bibliothèque dans Minecraft",
    metaDescription: "Recette du craft de la bibliothèque dans Minecraft. Matériaux nécessaires, placement pour la table d'enchantement et toutes les utilisations.",
    category: "crafting",
    volume: 480,
    content: {
      intro: "La bibliothèque est un bloc essentiel dans Minecraft, indispensable pour améliorer la table d'enchantement et accéder aux enchantements de niveau maximum. Elle sert aussi de décoration et de bloc de métier pour les villageois bibliothécaires. Savoir la crafter et la placer correctement est fondamental pour tout joueur souhaitant enchanter efficacement son équipement.",
      sections: [
        {
          heading: "Recette de Craft de la Bibliothèque",
          content: "La bibliothèque se fabrique avec 6 planches de bois et 3 livres. Dans la table de craft, placez 3 planches sur la rangée supérieure, 3 livres sur la rangée du milieu, et 3 planches sur la rangée inférieure. Les livres se craftent chacun avec 3 papiers et 1 cuir. Le papier provient de la canne à sucre (3 cannes = 3 papiers) et le cuir des vaches ou des chevaux. Au total, pour 15 bibliothèques (une salle d'enchantement complète), il faut 90 planches, 45 livres, 135 papiers et 45 cuirs."
        },
        {
          heading: "Placement pour la Table d'Enchantement",
          content: "Pour maximiser les enchantements, entourez votre table d'enchantement de 15 bibliothèques. La disposition classique forme un U de 5x5 blocs avec la table au centre. Les bibliothèques doivent être placées exactement à 1 bloc de distance de la table, au même niveau ou 1 bloc au-dessus. Aucun bloc ne doit se trouver entre la bibliothèque et la table (même pas des torches ou de la neige). Des particules de lettres flottantes entre les bibliothèques et la table confirment que le lien est actif."
        },
        {
          heading: "Autres Utilisations",
          content: "La bibliothèque placée dans un village transforme un villageois sans métier en bibliothécaire. Le bibliothécaire est l'un des villageois les plus utiles car il vend des livres enchantés spécifiques, ce qui permet de cibler les enchantements voulus au lieu de compter sur le hasard de la table d'enchantement. La bibliothèque peut aussi être minée avec Toucher de Soie pour la récupérer intacte. Sans cet enchantement, elle ne donne que 3 livres. En tant que combustible, elle brûle pendant 15 secondes dans un four."
        }
      ],
      tips: [
        "Il faut exactement 15 bibliothèques pour atteindre le niveau maximum d'enchantement (niveau 30) sur la table.",
        "Minez les bibliothèques avec Toucher de Soie pour les récupérer intactes au lieu d'obtenir seulement 3 livres.",
        "Créez un villageois bibliothécaire pour acheter des livres enchantés spécifiques : c'est plus fiable que la table d'enchantement.",
        "Les particules de lettres qui flottent des bibliothèques vers la table confirment que le placement est correct."
      ],
      faq: [
        {
          question: "Combien de bibliothèques faut-il pour la table d'enchantement ?",
          answer: "Il faut exactement 15 bibliothèques pour débloquer le niveau maximum (30) de la table d'enchantement. Elles doivent être placées à 1 bloc de distance de la table, au même niveau ou 1 bloc au-dessus, sans aucun bloc entre elles et la table. La disposition classique est un carré ouvert de 5x5."
        },
        {
          question: "Peut-on récupérer une bibliothèque sans Toucher de Soie ?",
          answer: "Non, sans l'enchantement Toucher de Soie sur votre pioche, la bibliothèque se détruit et ne donne que 3 livres. C'est une perte de 6 planches par bibliothèque. Utilisez toujours une pioche enchantée Toucher de Soie pour déplacer vos bibliothèques sans perte de matériaux."
        }
      ],
      relatedSlugs: ["table-enchantement", "longue-vue", "table-cartographie"]
    }
  }
];
