import type { PageData } from "./types";

export const potionsPages: PageData[] = [
  {
    slug: "invisibilite",
    keyword: "potion d'invisibilité minecraft",
    title: "Potion d'Invisibilité Minecraft : Recette Complète",
    h1: "Comment Faire une Potion d'Invisibilité dans Minecraft",
    metaDescription: "Découvrez la recette complète de la potion d'invisibilité Minecraft. Ingrédients, étapes de fabrication et astuces pour rester invisible.",
    category: "potions",
    volume: 1900,
    content: {
      intro: "La potion d'invisibilité est l'une des potions les plus utiles de Minecraft, permettant de devenir totalement invisible aux yeux des mobs et des joueurs pendant 3 minutes (ou 8 minutes en version prolongée). Elle se brasse en corrompant une potion de vision nocturne avec un oeil d'araignée fermenté. Particulièrement prisée en PvP et pour explorer des zones dangereuses sans se faire repérer, voici comment la préparer étape par étape.",
      sections: [
        {
          heading: "Ingrédients nécessaires",
          content: "Pour brasser une potion d'invisibilité, vous aurez besoin de : un alambic, de la poudre de Blaze (combustible), une fiole d'eau, une verrue du Nether, une carotte dorée et un oeil d'araignée fermenté. La carotte dorée se craft en entourant une carotte de 8 pépites d'or. L'oeil d'araignée fermenté s'obtient en combinant un oeil d'araignée, du sucre et un champignon marron sur une table de craft."
        },
        {
          heading: "Étapes de brassage",
          content: "Étape 1 : Brassez une potion étrange (fiole d'eau + verrue du Nether dans l'alambic). Étape 2 : Ajoutez une carotte dorée pour obtenir une potion de vision nocturne (3:00). Étape 3 : Ajoutez un oeil d'araignée fermenté pour corrompre la potion de vision nocturne en potion d'invisibilité (3:00). L'oeil d'araignée fermenté est l'agent de corruption qui inverse l'effet de la potion."
        },
        {
          heading: "Prolonger la durée et variantes",
          content: "En ajoutant de la poudre de redstone à la potion d'invisibilité, la durée passe de 3:00 à 8:00. Ajoutez de la poudre à canon pour créer une potion d'invisibilité jetable (splash), utilisable sur d'autres joueurs ou créatures. Ajoutez ensuite un souffle de dragon à la version splash pour obtenir une potion d'invisibilité persistante qui crée un nuage au sol. Il n'existe pas de version niveau II pour cette potion."
        },
        {
          heading: "Limites de l'invisibilité",
          content: "L'invisibilité ne cache pas votre armure, les objets tenus en main, ni certains éléments visuels (laine des moutons, collier des chiens, yeux des araignées, citrouille des golems). Les mobs peuvent vous détecter si vous portez une armure : la distance de détection augmente avec chaque pièce d'armure portée. Sans armure, les créatures hostiles deviennent neutres envers vous. Les particules de la potion restent visibles."
        }
      ],
      tips: [
        "Retirez toute votre armure pour que les créatures hostiles deviennent neutres envers vous",
        "Utilisez de la poudre de redstone pour prolonger l'effet de 3:00 à 8:00",
        "Un marchand ambulant peut vendre une potion d'invisibilité prolongée pour 5 émeraudes",
        "Un marchand ambulant a 8,5% de chances de lâcher une potion d'invisibilité à sa mort s'il en buvait une",
        "Ajoutez de la poudre à canon pour créer une version jetable, puis du souffle de dragon pour une version persistante"
      ],
      faq: [
        {
          question: "Les mobs peuvent-ils me voir avec une potion d'invisibilité ?",
          answer: "Cela dépend de votre armure. Sans armure, les créatures habituellement hostiles deviennent neutres. Chaque pièce d'armure augmente la distance de détection. Certains éléments visuels comme la laine des moutons, les yeux des araignées ou le collier des chiens ne sont pas masqués par l'invisibilité."
        },
        {
          question: "Combien de temps dure la potion d'invisibilité ?",
          answer: "La version de base dure 3:00 (3 minutes). En ajoutant de la poudre de redstone, la durée passe à 8:00 (8 minutes). Il n'existe pas de version niveau II pour cette potion."
        },
        {
          question: "Peut-on rendre un mob invisible ?",
          answer: "Oui, en lui lançant une potion d'invisibilité jetable (splash). Cela fonctionne aussi sous forme persistante pour affecter toute entité traversant le nuage."
        }
      ],
      relatedSlugs: ["faiblesse", "force", "soin", "respiration-aquatique", "fiole-eau"]
    }
  },
  {
    slug: "faiblesse",
    keyword: "potion de faiblesse minecraft",
    title: "Potion de Faiblesse Minecraft : Recette Complète",
    h1: "Comment Faire une Potion de Faiblesse dans Minecraft",
    metaDescription: "Recette complète de la potion de faiblesse Minecraft. Indispensable pour soigner les villageois zombies et affaiblir vos ennemis.",
    category: "potions",
    volume: 1900,
    content: {
      intro: "La potion de faiblesse est essentielle dans Minecraft, notamment pour guérir les villageois zombies. C'est l'une des rares potions qui peut se brasser directement à partir d'une fiole d'eau, sans passer par la potion étrange. Elle réduit les dégâts de mêlée de 4 points de dégâts (2 coeurs) et dure 1:30 en version de base.",
      sections: [
        {
          heading: "Ingrédients et recette",
          content: "La potion de faiblesse se brasse directement à partir d'une fiole d'eau et d'un oeil d'araignée fermenté dans l'alambic, avec de la poudre de Blaze comme combustible. L'oeil d'araignée fermenté se craft avec un oeil d'araignée, du sucre et un champignon marron. C'est la seule potion qui peut être brassée sans passer par la potion étrange (verrue du Nether non requise)."
        },
        {
          heading: "Guérir un villageois zombie",
          content: "Pour soigner un villageois zombie : 1) Lancez-lui une potion de faiblesse jetable (splash). 2) Donnez-lui une pomme dorée en faisant un clic droit dessus. Le processus de guérison prend entre 3 et 5 minutes, pendant lesquelles le villageois tremblera. Protégez-le du soleil et des mobs pendant la conversion. La difficulté ne doit pas être en Paisible."
        },
        {
          heading: "Variantes de la potion",
          content: "Durée de base : 1:30. Avec de la poudre de redstone : 4:00 (prolongée). Ajoutez de la poudre à canon pour créer une potion de faiblesse jetable (splash), indispensable pour guérir les villageois zombies. Ajoutez du souffle de dragon à la version splash pour obtenir une potion persistante. Il n'existe pas de version niveau II pour cette potion."
        },
        {
          heading: "Utilisations stratégiques",
          content: "La potion de faiblesse réduit les dégâts d'attaque de mêlée de la cible de 4 points de dégâts (2 coeurs). En PvP, c'est un outil puissant pour affaiblir un adversaire. La version persistante permet de contrôler une zone. On trouve aussi une potion de faiblesse jetable dans l'alambic du sous-sol des igloos."
        }
      ],
      tips: [
        "Gardez toujours des potions de faiblesse splash pour guérir les villageois zombies",
        "C'est la seule potion qui peut être brassée sans verrue du Nether (directement depuis la fiole d'eau)",
        "Un villageois guéri offre des réductions permanentes sur ses échanges",
        "Construisez un abri autour du villageois zombie pendant la guérison (3 à 5 minutes)",
        "On trouve une potion de faiblesse jetable dans le sous-sol des igloos"
      ],
      faq: [
        {
          question: "Comment transformer la potion de faiblesse en version jetable ?",
          answer: "Placez la potion de faiblesse dans l'alambic et ajoutez de la poudre à canon. Vous obtiendrez une potion de faiblesse splash que vous pouvez lancer sur les mobs ou joueurs."
        },
        {
          question: "Pourquoi la guérison du villageois zombie ne fonctionne pas ?",
          answer: "Assurez-vous d'utiliser la version splash (jetable) de la potion, pas la version buvable. Le villageois doit recevoir une pomme dorée après la potion. Vérifiez que la difficulté n'est pas en Paisible. Le processus prend 3 à 5 minutes."
        },
        {
          question: "Quelle est la durée de la potion de faiblesse ?",
          answer: "La version de base dure 1:30 (1 minute 30). Avec de la poudre de redstone, la durée passe à 4:00 (4 minutes). L'effet réduit les dégâts de mêlée de 4 points (2 coeurs)."
        }
      ],
      relatedSlugs: ["invisibilite", "force", "soin", "craft-potion-faiblesse", "fiole-eau"]
    }
  },
  {
    slug: "force",
    keyword: "potion de force minecraft",
    title: "Potion de Force Minecraft : Recette Complète",
    h1: "Comment Faire une Potion de Force dans Minecraft",
    metaDescription: "Fabriquez la potion de force Minecraft pour augmenter vos dégâts au corps à corps. Recette, ingrédients et variante Force II.",
    category: "potions",
    volume: 480,
    content: {
      intro: "La potion de force augmente vos dégâts de mêlée de 3 points de dégâts (1,5 coeur) par niveau dans Minecraft. La version de base dure 3:00, la version prolongée 8:00, et la version Force II dure 1:30 avec +6 points de dégâts. Elle est indispensable pour affronter le Wither, l'Ender Dragon ou en PvP.",
      sections: [
        {
          heading: "Recette de la potion de force",
          content: "Étape 1 : Brassez une potion étrange (fiole d'eau + verrue du Nether) dans l'alambic. Étape 2 : Ajoutez de la poudre de Blaze pour obtenir la potion de force (3:00). La poudre de Blaze s'obtient en plaçant un bâton de Blaze dans la grille de craft. Les bâtons de Blaze sont lâchés par les Blazes dans les forteresses du Nether. La poudre de Blaze sert aussi de combustible pour l'alambic."
        },
        {
          heading: "Effets et durées exactes",
          content: "Potion de force (base) : +3 points de dégâts de mêlée (+1,5 coeur), durée 3:00. Potion de force prolongée : +3 points de dégâts, durée 8:00. Potion de Force II : +6 points de dégâts (+3 coeurs), durée 1:30. Les dégâts bonus s'ajoutent par niveau : niveau I = +3, niveau II = +6."
        },
        {
          heading: "Force II : maximiser les dégâts",
          content: "Pour créer une potion de Force II, ajoutez de la poudre lumineuse (glowstone dust) à la potion de force dans l'alambic. La poudre lumineuse s'obtient en cassant des blocs de pierre lumineuse dans le Nether. Attention : ajouter de la poudre lumineuse à une potion prolongée la ramène au palier II (et inversement, ajouter de la redstone à Force II donne la version prolongée)."
        },
        {
          heading: "Stratégies de combat",
          content: "Buvez la potion de force avant d'engager un combat de boss. Contre le Wither, combinez-la avec une potion de régénération et une armure en Netherite. On peut trouver des potions de force dans les coffres de ravitaillement des Chambres des épreuves (20,4% de chance) et dans les Générateurs des épreuves funestes (7% de chance)."
        }
      ],
      tips: [
        "La poudre de Blaze est à la fois l'ingrédient de la potion et le combustible de l'alambic",
        "La poudre lumineuse amplifie au niveau II, la poudre de redstone prolonge la durée",
        "Force II + épée Netherite Tranchant V élimine la plupart des mobs en un coup",
        "Combinez avec une potion de rapidité pour un combo offensif dévastateur",
        "On peut trouver des potions de force dans les Chambres des épreuves"
      ],
      faq: [
        {
          question: "La potion de force affecte-t-elle les dégâts à distance ?",
          answer: "Non, la potion de force n'augmente que les dégâts au corps à corps (mêlée). Les flèches et autres projectiles ne sont pas affectés par cet effet."
        },
        {
          question: "Peut-on cumuler Force I et Force II ?",
          answer: "Non, seul le niveau le plus élevé s'applique. Si vous buvez une potion de Force II alors que Force I est actif, seul l'effet de Force II (+6 dégâts) sera en vigueur pendant 1:30."
        },
        {
          question: "Combien de dégâts bonus donne la potion de force ?",
          answer: "Force I ajoute +3 points de dégâts (1,5 coeur) par coup de mêlée. Force II ajoute +6 points de dégâts (3 coeurs) par coup. Les dégâts augmentent de 3 par niveau."
        }
      ],
      relatedSlugs: ["force-2", "faiblesse", "soin", "rapidite", "resistance-feu"]
    }
  },
  {
    slug: "soin",
    keyword: "potion de soin minecraft",
    title: "Potion de Soin Minecraft : Recette Complète",
    h1: "Comment Faire une Potion de Soin dans Minecraft",
    metaDescription: "Apprenez à brasser la potion de soin Minecraft. Restaurez vos points de vie instantanément avec cette recette détaillée.",
    category: "potions",
    volume: 390,
    content: {
      intro: "La potion de soin restaure instantanément 4 points de vie (2 coeurs) en version de base, ou 8 points de vie (4 coeurs) en version II. L'effet est instantané, ce qui la rend indispensable en combat. Elle inflige aussi des dégâts aux mobs morts-vivants. Deux potions de soin II se trouvent dans l'alambic des navires des cités de l'End.",
      sections: [
        {
          heading: "Recette de brassage",
          content: "Étape 1 : Brassez une potion étrange (fiole d'eau + verrue du Nether). Étape 2 : Ajoutez une tranche de pastèque scintillante. La tranche de pastèque scintillante se craft en entourant une tranche de pastèque de 8 pépites d'or sur la table de craft. La potion de soin de base restaure instantanément 4 points de vie (2 coeurs)."
        },
        {
          heading: "Potion de soin II",
          content: "Ajoutez de la poudre lumineuse pour obtenir une potion de soin II qui restaure 8 points de vie (4 coeurs). Les points de vie doublent à chaque niveau supplémentaire. L'effet reste instantané. C'est la version recommandée pour les combats difficiles. Il n'existe pas de version prolongée car l'effet est instantané."
        },
        {
          heading: "Versions jetables et persistantes",
          content: "Ajoutez de la poudre à canon pour créer une potion de soin jetable (splash) qui soigne dans une zone. Ajoutez ensuite du souffle de dragon pour obtenir une potion persistante qui crée un nuage de soin au sol. La potion splash peut aussi servir d'arme contre les morts-vivants."
        },
        {
          heading: "Utilisation contre les morts-vivants",
          content: "Les potions de soin infligent des dégâts aux mobs morts-vivants (zombies, squelettes, wither squelettes, phantoms, zombie drownés). La potion de soin inflige 6 points de dégâts par niveau aux morts-vivants. Inversement, les potions de dégâts soignent les morts-vivants. La potion de dégâts inflige aussi 6 points de dégâts par niveau aux entités vivantes."
        }
      ],
      tips: [
        "Emportez toujours des potions de soin II en exploration (restaure 8 PV instantanément)",
        "Utilisez la version splash sur les morts-vivants pour leur infliger des dégâts",
        "La tranche de pastèque scintillante nécessite 8 pépites d'or autour d'une tranche de pastèque",
        "Deux potions de soin II sont trouvables dans les navires des cités de l'End",
        "Une sorcière a 8,5% de chances de lâcher une potion de soin à sa mort"
      ],
      faq: [
        {
          question: "Quelle est la différence entre potion de soin et potion de régénération ?",
          answer: "La potion de soin restaure des PV instantanément (4 PV base, 8 PV niveau II). La potion de régénération restaure les PV progressivement : 1 demi-coeur toutes les 2,5 secondes pendant 0:45 (soit 18 PV au total en base). En combat, la potion de soin est plus utile pour une guérison d'urgence."
        },
        {
          question: "Pourquoi la potion de soin blesse-t-elle les zombies ?",
          answer: "Dans Minecraft, les effets de soin et de dégâts sont inversés pour les mobs morts-vivants. La potion de soin leur inflige 6 points de dégâts par niveau, tandis que la potion de dégâts les soigne."
        }
      ],
      relatedSlugs: ["force", "faiblesse", "invisibilite", "rapidite", "fiole-eau"]
    }
  },
  {
    slug: "souffle",
    keyword: "potion de souffle minecraft",
    title: "Potion de Souffle Minecraft : Recette Complète",
    h1: "Comment Faire une Potion de Souffle dans Minecraft",
    metaDescription: "Créez la potion de souffle Minecraft pour transformer vos potions splash en potions persistantes. Guide complet du souffle de dragon.",
    category: "potions",
    volume: 210,
    content: {
      intro: "Le souffle de dragon est un ingrédient unique dans Minecraft, obtenu en capturant l'attaque de souffle de l'Ender Dragon avec une fiole vide. Il permet de transformer n'importe quelle potion splash en potion persistante qui crée un nuage d'effet au sol. Depuis la 1.21, il existe aussi une potion de souffle (Wind Charging) brassable avec un bâton de Breeze, qui confère l'effet Souffle pendant 3:00.",
      sections: [
        {
          heading: "Comment obtenir le souffle de dragon",
          content: "Pour récupérer le souffle de dragon, rendez-vous dans l'End et affrontez l'Ender Dragon. Quand le dragon crache son souffle violet au sol (attaque de zone), approchez-vous et utilisez une fiole vide sur le nuage de particules violettes. Chaque nuage permet de remplir une fiole. Emportez au moins 10 fioles vides pour accumuler suffisamment de souffle."
        },
        {
          heading: "Créer des potions persistantes",
          content: "Placez une potion splash dans l'alambic et ajoutez le souffle de dragon comme ingrédient. La potion splash se transforme en potion persistante. Quand vous lancez une potion persistante, elle crée un nuage d'effet au sol qui dure environ 30 secondes et affecte toute entité qui le traverse. Le nuage rétrécit à chaque application d'effet."
        },
        {
          heading: "Potion de souffle (Wind Charging - 1.21+)",
          content: "Depuis la version 1.21, une potion de souffle (Wind Charging) existe. Elle se brasse en ajoutant un bâton de Breeze à une potion étrange. L'effet Souffle dure 3:00 et permet au joueur de créer des explosions de vent similaires à celles du Breeze. Le bâton de Breeze est lâché par les Breeze dans les Chambres des épreuves."
        },
        {
          heading: "Meilleures potions persistantes",
          content: "Les potions persistantes les plus utiles sont : dégâts (pièges), poison (contrôle de zone), soin (aide en groupe), lenteur (bloquer un passage), et régénération (zone de soin). Le nuage dure environ 30 secondes mais rétrécit à chaque fois qu'il applique son effet sur une entité."
        }
      ],
      tips: [
        "Emportez au moins 10 fioles vides pour collecter suffisamment de souffle de dragon",
        "Le nuage d'une potion persistante dure environ 30 secondes et rétrécit à chaque application",
        "Les potions persistantes sont idéales pour créer des pièges défensifs",
        "Vous pouvez ré-invoquer l'Ender Dragon avec 4 cristaux de l'End pour obtenir plus de souffle",
        "La potion de souffle (Wind Charging, 1.21+) se brasse avec un bâton de Breeze"
      ],
      faq: [
        {
          question: "Peut-on obtenir le souffle de dragon sans combattre le dragon ?",
          answer: "Non, le souffle de dragon ne s'obtient qu'en collectant l'attaque de souffle de l'Ender Dragon avec une fiole vide. Il faut obligatoirement aller dans l'End. Vous pouvez ré-invoquer le dragon avec 4 cristaux de l'End."
        },
        {
          question: "Combien de temps dure le nuage d'une potion persistante ?",
          answer: "Le nuage dure environ 30 secondes, mais il rétrécit à chaque fois qu'il applique son effet sur une entité. Plus il y a de cibles qui traversent le nuage, plus il disparaît vite."
        },
        {
          question: "Quelle est la différence entre le souffle de dragon et la potion de souffle ?",
          answer: "Le souffle de dragon est un ingrédient qui transforme les potions splash en potions persistantes. La potion de souffle (Wind Charging, ajoutée en 1.21) est une potion buvable qui confère l'effet Souffle pendant 3:00, brassée avec un bâton de Breeze."
        }
      ],
      relatedSlugs: ["soin", "force", "invisibilite", "faiblesse", "fiole-eau"]
    }
  },
  {
    slug: "respiration-aquatique",
    keyword: "potion respiration aquatique minecraft",
    title: "Potion de Respiration Aquatique Minecraft",
    h1: "Comment Faire une Potion de Respiration Aquatique",
    metaDescription: "Brassez la potion de respiration aquatique Minecraft pour explorer les océans. Recette complète, ingrédients et durée prolongée.",
    category: "potions",
    volume: 170,
    content: {
      intro: "La potion de respiration aquatique empêche votre barre d'oxygène de diminuer sous l'eau et offre une meilleure visibilité aquatique dans Minecraft. Elle dure 3:00 en version de base et 8:00 en version prolongée. Indispensable pour explorer les monuments sous-marins et affronter les Gardiens. On peut aussi la trouver dans les coffres de trésor enfoui avec 66,7% de chances.",
      sections: [
        {
          heading: "Recette de brassage",
          content: "Étape 1 : Brassez une potion étrange (fiole d'eau + verrue du Nether). Étape 2 : Ajoutez un poisson-globe (pufferfish). Le poisson-globe s'obtient en pêchant dans n'importe quel plan d'eau ou en tuant un poisson-globe dans les océans chauds et tièdes. La potion de base dure 3:00 et il n'existe pas de version niveau II."
        },
        {
          heading: "Prolonger la durée à 8 minutes",
          content: "Ajoutez de la poudre de redstone à la potion pour prolonger la durée de 3:00 à 8:00. C'est fortement recommandé pour explorer les monuments sous-marins. Il n'existe pas de version niveau II pour cette potion (la poudre lumineuse n'a pas d'effet d'amplification). Associée à la potion de vision nocturne, elle offre une visibilité normale sous l'eau."
        },
        {
          heading: "Explorer les monuments sous-marins",
          content: "Combinez la potion de respiration aquatique avec l'enchantement Affinité Aquatique (minage plus rapide sous l'eau) et Aisance Aquatique (déplacement plus rapide). Emportez du lait pour contrer l'effet de Fatigue de Minage infligé par les Grands Gardiens. La potion de vision nocturne est aussi très utile pour voir clairement sous l'eau."
        },
        {
          heading: "Autres moyens d'obtention",
          content: "On trouve une potion de respiration aquatique dans les coffres de trésor enfoui (66,7% de chance). Les sorcières ont 8,5% de chances d'en lâcher une si elles en buvaient à leur mort. Les Piglins ne troquent pas cette potion. Le casque avec Respiration III ajoute 45 secondes d'air. Le conduit donne une respiration aquatique illimitée dans un rayon."
        }
      ],
      tips: [
        "Prolongez toujours la durée avec de la poudre de redstone (3:00 -> 8:00) avant d'explorer",
        "Combinez avec la potion de vision nocturne pour une visibilité normale sous l'eau",
        "Emportez du lait pour contrer la Fatigue de Minage des Grands Gardiens",
        "Les coffres de trésor enfoui contiennent une potion de respiration aquatique (66,7%)",
        "Les portes placées sous l'eau créent des poches d'air de secours"
      ],
      faq: [
        {
          question: "Où trouver des poissons-globes pour la potion ?",
          answer: "Les poissons-globes s'obtiennent par la pêche (catégorie déchet) ou en tuant les poissons-globes qui nagent dans les océans chauds et tièdes. L'enchantement Chance de la Mer augmente vos chances de pêcher des trésors mais réduit les déchets."
        },
        {
          question: "La potion empêche-t-elle de se noyer complètement ?",
          answer: "Oui, pendant la durée de l'effet (3:00 ou 8:00 prolongée), votre barre d'oxygène ne diminue pas du tout. Vous ne subirez aucun dégât de noyade tant que l'effet est actif."
        },
        {
          question: "Existe-t-il une version niveau II de la potion ?",
          answer: "Non, la potion de respiration aquatique n'a pas de version niveau II. Seule la poudre de redstone peut la modifier pour prolonger sa durée de 3:00 à 8:00."
        }
      ],
      relatedSlugs: ["invisibilite", "soin", "force", "rapidite", "fiole-eau"]
    }
  },
  {
    slug: "rapidite",
    keyword: "potion de rapidité minecraft",
    title: "Potion de Rapidité Minecraft : Recette Complète",
    h1: "Comment Faire une Potion de Rapidité dans Minecraft",
    metaDescription: "Brassez la potion de rapidité Minecraft pour vous déplacer plus vite. Recette, ingrédients et variante Rapidité II détaillés.",
    category: "potions",
    volume: 70,
    content: {
      intro: "La potion de rapidité augmente votre vitesse de déplacement de 20% (6,6 blocs/s en courant) en version de base, ou de 40% (8 blocs/s en courant) en version II. Elle augmente aussi le champ de vision. La version de base dure 3:00, la prolongée 8:00, et la version II dure 1:30.",
      sections: [
        {
          heading: "Recette de brassage",
          content: "Étape 1 : Brassez une potion étrange (fiole d'eau + verrue du Nether). Étape 2 : Ajoutez du sucre. Le sucre s'obtient facilement en plaçant une canne à sucre dans la grille de craft. La potion de rapidité de base augmente la vitesse de 20% pendant 3:00."
        },
        {
          heading: "Rapidité II et durée prolongée",
          content: "Ajoutez de la poudre lumineuse pour obtenir Rapidité II (+40% de vitesse, 8 blocs/s en courant, durée 1:30). Ajoutez de la poudre de redstone pour la version prolongée (+20% de vitesse, durée 8:00). Attention : passer d'un palier à l'autre remplace l'ancien. Poudre lumineuse sur version prolongée donne niveau II, et poudre de redstone sur niveau II donne la version prolongée."
        },
        {
          heading: "Corruption en potion de lenteur",
          content: "Ajouter un oeil d'araignée fermenté à une potion de rapidité la corrompt en potion de lenteur (1:30, -15% de vitesse). La potion de lenteur a aussi une version prolongée (4:00) et une version Lenteur IV (0:20, -60% de vitesse). Le palier est généralement conservé après corruption."
        },
        {
          heading: "Stratégies d'utilisation",
          content: "En PvP, la rapidité est souvent la potion la plus importante car elle vous permet d'esquiver les attaques et de poursuivre vos adversaires. On peut trouver des potions de rapidité dans les Générateurs des épreuves des Chambres des épreuves (5% de chance). Les sorcières ont 8,5% de chances d'en lâcher une à leur mort."
        }
      ],
      tips: [
        "Le sucre est l'ingrédient le plus facile à obtenir pour une potion",
        "Rapidité II (+40% vitesse, 8 blocs/s en courant) est indispensable en PvP compétitif",
        "Combinez avec Force pour un combo offensif redoutable en mêlée",
        "Utilisez la version prolongée (8:00) pour les longues explorations",
        "Les sorcières ont 8,5% de chances de lâcher une potion de rapidité à leur mort"
      ],
      faq: [
        {
          question: "La potion de rapidité affecte-t-elle la vitesse de minage ?",
          answer: "Non, la potion de rapidité n'augmente que la vitesse de déplacement et le champ de vision. Pour miner plus vite, utilisez l'enchantement Efficacité sur vos outils ou l'effet Hâte (donné par les balises)."
        },
        {
          question: "Peut-on cumuler rapidité avec des bottes Célérité de l'Âme ?",
          answer: "Oui, les effets se cumulent. Avec Rapidité II et Célérité de l'Âme III sur le soul sand, vous atteignez une vitesse extrême."
        },
        {
          question: "Quelle est la vitesse exacte avec la potion de rapidité ?",
          answer: "Rapidité I : 6,6 blocs par seconde en courant (+20%). Rapidité II : 8 blocs par seconde en courant (+40%). Sans potion, la vitesse de course est de 5,6 blocs par seconde."
        }
      ],
      relatedSlugs: ["force", "soin", "invisibilite", "faiblesse", "fiole-eau"]
    }
  },
  {
    slug: "chance",
    keyword: "potion de chance minecraft",
    title: "Potion de Chance Minecraft : Recette Complète",
    h1: "Comment Faire une Potion de Chance dans Minecraft",
    metaDescription: "Tout savoir sur la potion de chance Minecraft. Disponibilité, effets sur le loot et comment l'obtenir en Java et Bedrock.",
    category: "potions",
    volume: 70,
    content: {
      intro: "La potion de chance est un objet exclusif à l'Édition Java de Minecraft qui augmente l'attribut chance de 1 point, améliorant la qualité du loot. Elle n'est pas brassable dans un alambic et ne peut être obtenue qu'en mode Créatif ou via des commandes. Sa durée est de 5:00. Elle n'existe pas en Édition Bedrock.",
      sections: [
        {
          heading: "Obtenir la potion de chance",
          content: "La potion de chance ne peut pas être brassée dans un alambic. Elle est disponible uniquement dans l'inventaire Créatif de l'Édition Java ou via des commandes. Utilisez /give @s minecraft:potion{Potion:\"luck\"} pour l'obtenir. L'effet Chance peut aussi être appliqué directement avec /effect give @s luck 300 0."
        },
        {
          heading: "Effets de la chance",
          content: "L'effet Chance augmente l'attribut generic.luck de 1 point par niveau pendant 5:00. Cela améliore les tables de loot, augmentant les chances d'obtenir des objets rares en pêchant et dans certaines structures. La potion de chance n'est pas renouvelable car elle ne peut être obtenue qu'en Créatif ou par commandes."
        },
        {
          heading: "Chance vs Fortune vs Chance de la Mer",
          content: "Ne confondez pas la potion de chance avec l'enchantement Fortune (augmente les drops de minerais) ou Chance de la Mer (augmente les trésors de pêche et réduit les déchets). La potion de chance affecte l'attribut global generic.luck du joueur, tandis que ces enchantements sont spécifiques à l'outil utilisé. L'effet Malchance existe aussi et réduit l'attribut chance."
        }
      ],
      tips: [
        "La potion de chance n'est disponible qu'en Édition Java (mode Créatif ou commandes)",
        "Durée : 5:00 avec +1 en attribut chance",
        "Utilisez /effect give @s luck 300 0 pour l'effet sans la potion",
        "En survie, préférez l'enchantement Chance de la Mer III pour la pêche",
        "L'effet Malchance existe aussi et a l'effet inverse (-1 en attribut chance)"
      ],
      faq: [
        {
          question: "Peut-on brasser la potion de chance en survie ?",
          answer: "Non, la potion de chance ne peut pas être brassée dans un alambic. Elle n'est disponible que dans l'inventaire Créatif de l'Édition Java ou via des commandes."
        },
        {
          question: "La potion de chance fonctionne-t-elle sur Bedrock ?",
          answer: "Non, l'effet de chance et la potion de chance n'existent pas en Édition Bedrock. Ils sont exclusifs à l'Édition Java et accessibles uniquement en Créatif ou par commandes."
        },
        {
          question: "Combien de temps dure la potion de chance ?",
          answer: "La potion de chance dure 5:00 (5 minutes) et augmente l'attribut generic.luck de 1 point, améliorant la qualité du loot."
        }
      ],
      relatedSlugs: ["force", "rapidite", "invisibilite", "soin", "fiole-eau"]
    }
  },
  {
    slug: "resistance-feu",
    keyword: "potion résistance au feu minecraft",
    title: "Potion de Résistance au Feu Minecraft",
    h1: "Comment Faire une Potion de Résistance au Feu",
    metaDescription: "Brassez la potion de résistance au feu Minecraft pour survivre à la lave et au feu. Recette essentielle pour explorer le Nether.",
    category: "potions",
    volume: 90,
    content: {
      intro: "La potion de résistance au feu procure une immunité totale contre les dégâts de feu, de lave et les attaques des Blazes dans Minecraft. Elle dure 3:00 en version de base et 8:00 en version prolongée. Il n'existe pas de version niveau II. C'est la potion indispensable pour explorer le Nether en sécurité.",
      sections: [
        {
          heading: "Recette de brassage",
          content: "Étape 1 : Brassez une potion étrange (fiole d'eau + verrue du Nether). Étape 2 : Ajoutez de la crème de magma. La crème de magma s'obtient en tuant des cubes de magma dans le Nether ou en combinant de la poudre de Blaze et une boule de slime sur la table de craft (recette sans forme)."
        },
        {
          heading: "Durée et version prolongée",
          content: "Potion de base : 3:00 d'immunité totale au feu. Version prolongée (poudre de redstone) : 8:00. Il n'existe pas de version niveau II pour cette potion car l'immunité est déjà totale. La poudre lumineuse ne permet pas d'amplifier cette potion."
        },
        {
          heading: "Exploration du Nether en sécurité",
          content: "Avec cette potion active, vous pouvez nager dans la lave sans subir de dégâts. C'est extrêmement utile pour chercher des débris antiques (Netherite) dans les lacs de lave du Nether. Les Piglins ont environ 1,71% de chances de troquer une potion de résistance au feu contre un lingot d'or, et 1,71% pour la version jetable."
        },
        {
          heading: "Autres moyens d'obtention",
          content: "Les Piglins troquent cette potion (1,71% par troc avec un lingot d'or). Les sorcières ont 8,5% de chances d'en lâcher une à leur mort si elles en buvaient. On peut aussi la corrompre en potion de lenteur avec un oeil d'araignée fermenté. Les enchantements Protection contre le feu sur l'armure offrent une protection partielle alternative."
        }
      ],
      tips: [
        "Emportez toujours 2-3 potions prolongées (8:00) pour chaque expédition au Nether",
        "Vous pouvez nager dans la lave pour chercher des débris antiques (Netherite)",
        "La crème de magma se craft avec poudre de Blaze + boule de slime",
        "Les Piglins peuvent troquer cette potion contre un lingot d'or (1,71%)",
        "Il n'existe pas de version niveau II car l'immunité est déjà totale"
      ],
      faq: [
        {
          question: "La potion protège-t-elle de tous les types de feu ?",
          answer: "Oui, la résistance au feu procure l'immunité contre le feu, la lave, les boules de feu des Blazes et Ghasts, et tout dégât de type feu. L'immunité est totale pendant toute la durée de l'effet."
        },
        {
          question: "Peut-on nager dans la lave avec cette potion ?",
          answer: "Oui, vous pouvez nager dans la lave sans subir de dégâts pendant 3:00 (ou 8:00 en version prolongée). La visibilité reste cependant très réduite dans la lave."
        },
        {
          question: "Comment obtenir la potion de résistance au feu sans alambic ?",
          answer: "Les Piglins du Nether ont 1,71% de chances de troquer une potion de résistance au feu (et 1,71% pour la version jetable) contre un lingot d'or. Les sorcières peuvent aussi en lâcher une à leur mort."
        }
      ],
      relatedSlugs: ["force", "soin", "rapidite", "invisibilite", "fiole-eau"]
    }
  },
  {
    slug: "force-2",
    keyword: "potion de force 2 minecraft",
    title: "Potion de Force II Minecraft : Recette",
    h1: "Comment Faire une Potion de Force II dans Minecraft",
    metaDescription: "Fabriquez la potion de Force II Minecraft pour doubler vos dégâts au corps à corps. Recette et comparaison avec Force I.",
    category: "potions",
    volume: 70,
    content: {
      intro: "La potion de Force II est la version amplifiée de la potion de force, ajoutant +6 points de dégâts de mêlée (3 coeurs) par coup au lieu de +3. Elle dure 1:30 (moitié de la durée de base). Elle se brasse en ajoutant de la poudre lumineuse à une potion de force. Indispensable pour les combats de boss et le PvP de haut niveau.",
      sections: [
        {
          heading: "Recette de la potion de Force II",
          content: "Étape 1 : Brassez une potion étrange (fiole d'eau + verrue du Nether). Étape 2 : Ajoutez de la poudre de Blaze pour obtenir une potion de force (3:00). Étape 3 : Ajoutez de la poudre lumineuse (glowstone dust) pour amplifier au niveau II. La poudre lumineuse s'obtient en cassant des blocs de pierre lumineuse dans le Nether (2 à 4 poudres par bloc)."
        },
        {
          heading: "Comparaison Force I vs Force II",
          content: "Force I : +3 points de dégâts de mêlée (+1,5 coeur), durée 3:00 (ou 8:00 prolongée). Force II : +6 points de dégâts de mêlée (+3 coeurs), durée 1:30. La durée d'une potion amplifiée est toujours la moitié de la durée de base. Les dégâts augmentent de 3 points par niveau."
        },
        {
          heading: "Interaction entre paliers",
          content: "Ajouter de la poudre de redstone à une potion de Force II la transforme en potion de force prolongée (8:00, +3 dégâts). Inversement, ajouter de la poudre lumineuse à la version prolongée donne Force II. Les deux paliers (prolongé et niveau II) sont mutuellement exclusifs."
        },
        {
          heading: "Combos de combat optimaux",
          content: "Avec une épée en Netherite enchantée Tranchant V et Force II, vous infligez des dégâts considérables par coup critique. Ajoutez une potion de rapidité II pour dominer totalement au corps à corps. Ce combo peut éliminer un joueur en armure de diamant en quelques coups."
        }
      ],
      tips: [
        "La poudre lumineuse (glowstone dust) est l'ingrédient pour amplifier au niveau II",
        "La durée de Force II (1:30) est la moitié de la durée de base (3:00)",
        "Les dégâts bonus par niveau : +3 (Force I), +6 (Force II)",
        "Ajoutez de la poudre de redstone à Force II pour revenir à la version prolongée (8:00)",
        "On peut trouver des potions de force dans les Chambres des épreuves"
      ],
      faq: [
        {
          question: "Vaut-il mieux Force I prolongée ou Force II ?",
          answer: "Force I prolongée (8:00, +3 dégâts) est meilleure pour l'exploration. Force II (1:30, +6 dégâts) est supérieure pour les combats courts et intenses comme les boss ou le PvP."
        },
        {
          question: "Force II fonctionne-t-elle sur les flèches ?",
          answer: "Non, la potion de force n'affecte que les dégâts au corps à corps (mêlée). Les dégâts des flèches dépendent de l'enchantement Puissance de l'arc, pas de l'effet Force."
        },
        {
          question: "Peut-on passer de Force II à Force I prolongée ?",
          answer: "Oui, ajoutez de la poudre de redstone à une potion de Force II dans l'alambic. Elle se transformera en potion de force prolongée (8:00, +3 dégâts). Les paliers prolongé et niveau II sont mutuellement exclusifs."
        }
      ],
      relatedSlugs: ["force", "soin", "rapidite", "invisibilite", "resistance-feu"]
    }
  },
  {
    slug: "fiole-eau",
    keyword: "fiole d'eau minecraft",
    title: "Fiole d'Eau Minecraft : Craft et Utilisation",
    h1: "Comment Obtenir une Fiole d'Eau dans Minecraft",
    metaDescription: "La fiole d'eau est la base de toutes les potions Minecraft. Découvrez comment la crafter, la remplir et commencer l'alchimie.",
    category: "potions",
    volume: 260,
    content: {
      intro: "La fiole d'eau est le point de départ de presque toutes les potions dans Minecraft. C'est la base des potions étranges (avec verrue du Nether) et directement de la potion de faiblesse (avec oeil d'araignée fermenté). Les Piglins ont environ 2,13% de chances de troquer une fiole d'eau contre un lingot d'or.",
      sections: [
        {
          heading: "Crafter une fiole en verre",
          content: "Pour fabriquer une fiole en verre, placez 3 blocs de verre en forme de V dans la grille de craft (un en bas à gauche, un en bas au centre, un en bas à droite). Vous obtiendrez 3 fioles vides. Le verre s'obtient en cuisant du sable dans un four."
        },
        {
          heading: "Remplir la fiole d'eau",
          content: "Prenez la fiole vide en main et faites un clic droit sur n'importe quelle source d'eau ou un chaudron rempli d'eau. Un bloc d'eau source ne se consomme pas et peut remplir un nombre illimité de fioles. Un chaudron plein peut remplir exactement 3 fioles (son niveau d'eau diminue d'un tiers à chaque remplissage). En Édition Bedrock, un chaudron peut aussi contenir des potions."
        },
        {
          heading: "L'alambic et le brassage",
          content: "Placez les fioles d'eau dans les 3 emplacements du bas de l'alambic. L'alambic nécessite de la poudre de Blaze comme combustible (1 poudre = 20 brassages). La première étape pour la plupart des potions est d'ajouter une verrue du Nether pour créer une potion étrange, qui sert de base à toutes les potions primaires. Exception : la potion de faiblesse se brasse directement depuis la fiole d'eau."
        },
        {
          heading: "Autres utilisations des fioles",
          content: "Les fioles vides servent aussi à collecter du souffle de dragon (en utilisant la fiole sur l'attaque de souffle de l'Ender Dragon) et du miel (en utilisant la fiole sur une ruche pleine). Des fioles d'eau peuvent être pêchées comme déchet. Les Piglins ont 2,13% de chances d'en troquer une contre un lingot d'or."
        }
      ],
      tips: [
        "Gardez toujours un stock de fioles vides pour le brassage et la collecte de souffle de dragon",
        "Un seul bloc d'eau source peut remplir un nombre infini de fioles",
        "L'alambic peut brasser 3 potions simultanément avec 1 ingrédient",
        "1 poudre de Blaze = 20 brassages dans l'alambic",
        "Les Piglins troquent des fioles d'eau contre des lingots d'or (2,13%)"
      ],
      faq: [
        {
          question: "Combien de fioles peut-on remplir avec un chaudron ?",
          answer: "Un chaudron plein peut remplir exactement 3 fioles, son niveau diminuant d'un tiers à chaque remplissage. En Édition Bedrock, un chaudron peut aussi contenir 1 à 3 fioles de n'importe quelle potion."
        },
        {
          question: "Peut-on obtenir des fioles d'eau autrement qu'en les craftant ?",
          answer: "Oui : les sorcières peuvent en lâcher, on peut les pêcher comme déchet, et les Piglins ont 2,13% de chances d'en troquer une contre un lingot d'or. Mais la méthode la plus efficace reste de crafter des fioles en verre et de les remplir."
        },
        {
          question: "Combien de brassages peut-on faire avec une poudre de Blaze ?",
          answer: "Une seule poudre de Blaze alimente l'alambic pour 20 brassages. Chaque brassage transforme jusqu'à 3 fioles simultanément, donc une poudre de Blaze peut produire jusqu'à 60 potions."
        }
      ],
      relatedSlugs: ["faiblesse", "force", "invisibilite", "soin", "rapidite"]
    }
  }
];
