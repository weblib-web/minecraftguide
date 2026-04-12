import type { PageData } from "./types";

export const biomesPages: PageData[] = [
  {
    slug: "nouveau-biome",
    keyword: "nouveau biome minecraft",
    title: "Nouveaux Biomes Minecraft : Guide",
    h1: "Les Nouveaux Biomes dans Minecraft",
    metaDescription: "Découvrez les nouveaux biomes ajoutés à Minecraft. Cerisiers, grottes luxuriantes, chênes pâles et bien plus dans ce guide complet.",
    category: "biomes",
    volume: 590,
    content: {
      intro: "Minecraft ajoute régulièrement de nouveaux biomes qui enrichissent l'exploration et offrent des ressources uniques. Des grottes luxuriantes aux forêts de cerisiers, chaque mise à jour apporte son lot de nouveautés. Voici un tour d'horizon des biomes les plus récents.",
      sections: [
        {
          heading: "Le biome Cerisier (1.20)",
          content: "Ajouté dans la mise à jour 1.20 Trails & Tales, le biome cerisier se distingue par ses arbres roses magnifiques dont les pétales tombent en permanence. On y trouve du bois de cerisier unique pour la construction, ainsi que des abeilles et des fleurs en abondance. C'est un biome rare qui apparaît en collines."
        },
        {
          heading: "Les grottes luxuriantes (1.18)",
          content: "Les grottes luxuriantes sont des cavernes souterraines remplies de végétation : lianes lumineuses, spore blossoms, drip leaves et axolotls. Elles se génèrent sous les biomes avec des azalées en surface. C'est le seul endroit où trouver des axolotls naturellement."
        },
        {
          heading: "Le jardin pâle et le chêne pâle (1.21.4)",
          content: "Le biome du jardin pâle abrite les chênes pâles, des arbres à l'écorce blanchâtre avec des branches pendantes appelées mousse pâle. Ce biome est inquiétant avec son ambiance brumeuse. C'est l'habitat du Creaking, un nouveau mob hostile qui ne bouge que quand vous ne le regardez pas."
        },
        {
          heading: "Les grottes de stalactites (1.18)",
          content: "Ces grottes spectaculaires contiennent des stalactites et stalagmites en dripstone. L'eau qui s'écoule à travers les stalactites remplit les chaudrons en dessous. Les stalactites pointues infligent des dégâts de chute aux entités qui tombent dessus, créant des pièges naturels."
        },
        {
          heading: "Biomes du Deep Dark (1.19)",
          content: "Le Deep Dark est un biome souterrain sombre et dangereux généré en profondeur, souvent entre Y=-1 et Y=-64. Il contient des sculk sensors et des sculk shriekers qui peuvent invoquer le Warden si vous faites trop de bruit. Les anciennes cités s'y génèrent avec des coffres rares."
        }
      ],
      tips: [
        "Cherchez des azalées en surface pour localiser les grottes luxuriantes en dessous",
        "Le biome cerisier est rare mais facilement repérable grâce à sa couleur rose",
        "Dans le Deep Dark, accroupissez-vous pour éviter d'activer les sculk sensors",
        "Les stalactites de dripstone peuvent être récoltées et replantées",
        "Le jardin pâle ne se génère que dans les forêts sombres"
      ],
      faq: [
        {
          question: "Comment trouver les nouveaux biomes facilement ?",
          answer: "Utilisez la commande /locatebiome suivie du nom du biome pour obtenir ses coordonnées. Par exemple, /locatebiome cherry_grove pour le biome cerisier."
        },
        {
          question: "Les nouveaux biomes sont-ils disponibles sur Bedrock ?",
          answer: "Oui, tous les biomes ajoutés depuis la 1.18 sont disponibles sur les deux éditions Java et Bedrock, avec quelques différences mineures de génération."
        }
      ],
      relatedSlugs: ["cerisier", "chene-pale", "montagne", "neige-poudreuse", "ocean-chaud"]
    }
  },
  {
    slug: "montagne",
    keyword: "biome montagne minecraft",
    title: "Biome Montagne Minecraft : Guide",
    h1: "Le Biome Montagne dans Minecraft",
    metaDescription: "Explorez le biome montagne Minecraft : pics enneigés, chèvres, ressources et conseils de survie en altitude dans ce guide détaillé.",
    category: "biomes",
    volume: 260,
    content: {
      intro: "Les montagnes de Minecraft ont été entièrement refondues dans la mise à jour 1.18 Caves & Cliffs. Elles atteignent désormais des hauteurs impressionnantes avec des sous-biomes variés, des chèvres et des paysages spectaculaires. Explorons ces sommets ensemble.",
      sections: [
        {
          heading: "Sous-biomes de montagne",
          content: "Les montagnes se divisent en plusieurs sous-biomes : les prairies de montagne (herbe et fleurs), les forêts de montagne (arbres de montagne), les pentes enneigées (neige épaisse), les pics gelés (glace et neige) et les pics déchiquetés (pierre exposée). Chaque sous-biome a ses propres caractéristiques."
        },
        {
          heading: "Mobs et ressources",
          content: "Les chèvres sont le mob emblématique des montagnes. Elles peuvent sauter très haut et charger les joueurs pour les pousser dans le vide. Les chèvres criardes lâchent des cornes de chèvre utilisables comme instrument. On trouve aussi du minerai d'émeraude exclusivement dans les biomes de montagne."
        },
        {
          heading: "Construire en montagne",
          content: "Les montagnes offrent des emplacements spectaculaires pour construire. Les grottes naturelles dans la roche peuvent servir de base. Les prairies de montagne sont idéales pour des chalets, tandis que les pics offrent des vues panoramiques parfaites pour des châteaux ou des tours de guet."
        },
        {
          heading: "Dangers et survie",
          content: "Le principal danger en montagne est la chute. Les pentes abruptes et les chèvres qui vous poussent peuvent être fatales. La neige poudreuse ralentit et gèle le joueur. Emportez des bottes en cuir pour marcher sur la neige poudreuse sans vous enfoncer."
        }
      ],
      tips: [
        "Les bottes en cuir empêchent de s'enfoncer dans la neige poudreuse",
        "Les émeraudes se trouvent exclusivement dans les biomes de montagne",
        "Méfiez-vous des chèvres criardes qui vous chargent vers les falaises",
        "Utilisez un seau d'eau de secours pour les chutes accidentelles"
      ],
      faq: [
        {
          question: "Quelle est la hauteur maximale des montagnes ?",
          answer: "Depuis la 1.18, les montagnes peuvent atteindre Y=256, soit la limite maximale du monde. Les pics les plus hauts atteignent généralement Y=200-240."
        },
        {
          question: "Comment trouver des émeraudes en montagne ?",
          answer: "Les émeraudes se génèrent entre Y=-16 et Y=320 dans les biomes de montagne, avec un pic de génération autour de Y=236. Minez en altitude pour de meilleurs résultats."
        }
      ],
      relatedSlugs: ["nouveau-biome", "cerisier", "neige-poudreuse", "ocean-chaud", "monde-amplifie"]
    }
  },
  {
    slug: "cerisier",
    keyword: "biome cerisier minecraft",
    title: "Biome Cerisier Minecraft : Guide",
    h1: "Le Biome Cerisier dans Minecraft",
    metaDescription: "Découvrez le biome cerisier Minecraft ajouté en 1.20. Bois de cerisier, pétales roses, mobs et ressources uniques de ce biome.",
    category: "biomes",
    volume: 210,
    content: {
      intro: "Le biome cerisier (Cherry Grove) est l'un des ajouts les plus populaires de la mise à jour 1.20 Trails & Tales. Avec ses arbres roses spectaculaires et ses pétales qui tombent comme de la neige, c'est un biome idéal pour la construction esthétique et la détente.",
      sections: [
        {
          heading: "Localiser le biome cerisier",
          content: "Le biome cerisier se génère dans les zones de montagne, généralement entre Y=100 et Y=200. Il est assez rare mais facilement repérable grâce à la couleur rose distinctive de ses arbres. Utilisez /locatebiome cherry_grove pour le trouver rapidement en mode créatif."
        },
        {
          heading: "Bois de cerisier et crafts",
          content: "Le bois de cerisier a une teinte rose unique qui se retrouve dans tous les blocs craftés : planches, escaliers, dalles, portes, trappes, bateaux et panneaux. C'est le bois le plus esthétique pour les constructions romantiques ou japonaises. Les feuilles de cerisier produisent des pétales roses en permanence."
        },
        {
          heading: "Faune et flore",
          content: "Le biome cerisier héberge des abeilles en abondance grâce aux nombreuses fleurs au sol. Les cochons, moutons et lapins y apparaissent naturellement. Les pétales roses peuvent être collectés (jusqu'à 4 par bloc) et utilisés comme teinture rose ou pour la décoration."
        },
        {
          heading: "Idées de construction",
          content: "Le biome cerisier est parfait pour construire des temples japonais, des jardins zen ou des maisons romantiques. Combinez le bois de cerisier avec de la pierre, du bambou et des lanternes pour un style japonais authentique. Les pétales de cerisier au sol ajoutent une touche naturelle à vos chemins."
        }
      ],
      tips: [
        "Collectez les pétales de cerisier pour obtenir de la teinture rose",
        "Le bois de cerisier est idéal pour les constructions de style japonais",
        "Les abeilles du biome cerisier sont une excellente source de miel",
        "Plantez des pousses de cerisier pour recréer le biome ailleurs"
      ],
      faq: [
        {
          question: "Peut-on replanter des cerisiers ailleurs ?",
          answer: "Oui, les feuilles de cerisier lâchent des pousses que vous pouvez planter n'importe où. L'arbre poussera avec la même apparence rose, mais les pétales au sol ne se généreront pas naturellement hors du biome."
        },
        {
          question: "Le biome cerisier est-il rare ?",
          answer: "Oui, il est relativement rare car il ne se génère que dans les zones de montagne. Il est cependant plus facile à repérer que d'autres biomes grâce à sa couleur rose distinctive visible de loin."
        }
      ],
      relatedSlugs: ["nouveau-biome", "montagne", "chene-pale", "ocean-chaud", "neige-poudreuse"]
    }
  },
  {
    slug: "ocean-chaud",
    keyword: "ocean chaud minecraft",
    title: "Océan Chaud Minecraft : Guide",
    h1: "Le Biome Océan Chaud dans Minecraft",
    metaDescription: "Explorez le biome océan chaud Minecraft avec ses récifs de corail, poissons tropicaux et trésors sous-marins. Guide complet.",
    category: "biomes",
    volume: 90,
    content: {
      intro: "L'océan chaud est le biome aquatique le plus coloré et vivant de Minecraft. Rempli de récifs de corail, de poissons tropicaux et de dauphins, c'est un véritable aquarium naturel. Il recèle aussi des trésors enfouis et des épaves de navires.",
      sections: [
        {
          heading: "Caractéristiques de l'océan chaud",
          content: "L'océan chaud se distingue par son eau turquoise claire et ses fonds couverts de sable. Les récifs de corail colorés (rose, rouge, jaune, bleu, violet) abritent une biodiversité marine impressionnante. Le fond marin est généralement peu profond, facilitant l'exploration."
        },
        {
          heading: "Faune marine",
          content: "On y trouve des poissons tropicaux de 2700 variantes différentes, des poissons-globes, des dauphins et des tortues marines. Les dauphins peuvent vous guider vers des trésors enfouis si vous nagez près d'eux. Les tortues pondent leurs œufs sur les plages adjacentes."
        },
        {
          heading: "Récolter du corail",
          content: "Le corail doit être récolté avec un outil enchanté Toucher de Soie pour rester vivant. Hors de l'eau, les blocs de corail meurent et deviennent gris. Placez-les dans l'eau pour les garder colorés. Les éventails de corail sont parfaits pour la décoration de bases sous-marines."
        },
        {
          heading: "Trésors et exploration",
          content: "Les épaves de navires et les ruines sous-marines se génèrent fréquemment dans les océans chauds. Les coffres contiennent des cartes au trésor, des lingots de fer et d'or, et parfois des cœurs de la mer pour fabriquer un conduit. Utilisez une potion de respiration aquatique pour explorer sereinement."
        }
      ],
      tips: [
        "Utilisez Toucher de Soie pour récolter du corail vivant",
        "Nagez avec les dauphins pour qu'ils vous guident vers des trésors",
        "Le corail meurt hors de l'eau, placez-le toujours dans l'eau",
        "Les poissons tropicaux se capturent avec un seau d'eau"
      ],
      faq: [
        {
          question: "Comment trouver un océan chaud ?",
          answer: "Les océans chauds se trouvent près des biomes chauds comme les déserts et les savanes. Utilisez /locatebiome warm_ocean pour les trouver directement."
        },
        {
          question: "Le corail peut-il survivre dans un aquarium ?",
          answer: "Oui, tant que le bloc de corail est adjacent à de l'eau, il reste vivant. Vous pouvez créer de superbes aquariums avec du corail et des poissons tropicaux dans des seaux."
        }
      ],
      relatedSlugs: ["nouveau-biome", "montagne", "cerisier", "neige-poudreuse", "monde-amplifie"]
    }
  },
  {
    slug: "monde-amplifie",
    keyword: "monde amplifie minecraft",
    title: "Monde Amplifié Minecraft : Guide",
    h1: "Le Mode Monde Amplifié dans Minecraft",
    metaDescription: "Découvrez le mode monde amplifié Minecraft avec ses montagnes géantes et falaises vertigineuses. Paramètres et conseils de survie.",
    category: "biomes",
    volume: 140,
    content: {
      intro: "Le monde amplifié est un type de génération spéciale dans Minecraft qui pousse le terrain à ses extrêmes. Les montagnes atteignent la limite de hauteur du monde, les falaises sont vertigineuses et le terrain est spectaculaire. C'est un mode exigeant mais visuellement impressionnant.",
      sections: [
        {
          heading: "Comment activer le monde amplifié",
          content: "Lors de la création d'un nouveau monde en Java Edition, sélectionnez le type de monde 'Amplifié' dans les options de monde. Ce mode nécessite un ordinateur puissant car il génère beaucoup plus de terrain en hauteur. Il n'est pas disponible en Bedrock Edition."
        },
        {
          heading: "Caractéristiques du terrain",
          content: "Le monde amplifié exagère toutes les formations de terrain. Les montagnes atteignent Y=256, les vallées sont profondes et les falaises verticales sont courantes. Les rivières coulent dans des canyons spectaculaires et les forêts peuvent se retrouver perchées à des centaines de blocs de hauteur."
        },
        {
          heading: "Défis de survie",
          content: "La survie en monde amplifié est beaucoup plus difficile. Les chutes mortelles sont fréquentes, les déplacements sont lents à cause du terrain accidenté, et trouver des zones plates pour construire est un défi. L'élytra devient presque indispensable pour se déplacer efficacement."
        },
        {
          heading: "Performance et optimisation",
          content: "Le monde amplifié consomme beaucoup plus de RAM et de puissance graphique. Réduisez la distance de rendu à 8-12 chunks, désactivez les particules et utilisez un mod d'optimisation comme Sodium ou OptiFine pour maintenir un framerate correct."
        }
      ],
      tips: [
        "Emportez toujours un seau d'eau pour les chutes accidentelles",
        "L'élytra est presque obligatoire pour les déplacements longue distance",
        "Réduisez la distance de rendu pour améliorer les performances",
        "Les vallées profondes sont les meilleurs endroits pour construire une base"
      ],
      faq: [
        {
          question: "Le monde amplifié est-il disponible sur Bedrock ?",
          answer: "Non, le monde amplifié est exclusif à Java Edition. Bedrock ne propose pas ce type de génération de monde."
        },
        {
          question: "Peut-on utiliser des seeds en mode amplifié ?",
          answer: "Oui, les seeds fonctionnent en mode amplifié. Le même seed produira le même terrain, mais avec les formations amplifiées. Les structures comme les villages apparaissent aux mêmes coordonnées."
        }
      ],
      relatedSlugs: ["nouveau-biome", "montagne", "cerisier", "neige-poudreuse", "ocean-chaud"]
    }
  },
  {
    slug: "chene-pale",
    keyword: "chêne pale minecraft",
    title: "Chêne Pâle Minecraft : Nouveau Biome",
    h1: "Le Chêne Pâle dans Minecraft",
    metaDescription: "Découvrez le chêne pâle et le jardin pâle de Minecraft. Nouveau biome, mousse pâle, Creaking et ressources exclusives.",
    category: "biomes",
    volume: 140,
    content: {
      intro: "Le chêne pâle est un nouvel arbre introduit avec le biome Jardin Pâle (Pale Garden) dans Minecraft. Ce biome à l'atmosphère inquiétante abrite la mousse pâle, des arbres blanchâtres et le Creaking, un mob hostile unique. Un ajout qui enrichit considérablement l'exploration.",
      sections: [
        {
          heading: "Le biome Jardin Pâle",
          content: "Le Jardin Pâle est un sous-biome de la forêt sombre avec une atmosphère brumeuse et décolorée. Les couleurs y sont désaturées, créant une ambiance inquiétante. Aucune musique ne joue dans ce biome, renforçant le sentiment d'isolement. Il est relativement rare."
        },
        {
          heading: "Le bois de chêne pâle",
          content: "Le chêne pâle produit un bois blanchâtre unique avec des branches pendantes couvertes de mousse pâle. Les planches de chêne pâle ont une teinte très claire, idéale pour les constructions hivernales ou fantomatiques. C'est une nouvelle famille de bois complète avec portes, trappes et escaliers."
        },
        {
          heading: "La mousse pâle",
          content: "La mousse pâle pousse sur les chênes pâles et peut être récoltée pour la décoration. Elle pend des branches comme des lianes blanchâtres. C'est un excellent bloc décoratif pour créer des ambiances fantomatiques ou hivernales dans vos constructions."
        },
        {
          heading: "Le Creaking : nouveau mob hostile",
          content: "Le Creaking est un mob hostile en bois qui n'apparaît que dans le Jardin Pâle la nuit. Il ne bouge que quand vous ne le regardez pas, similaire aux Endermen inversés. Il est invulnérable tant que son cœur de Creaking (un bloc caché dans un arbre) n'est pas détruit."
        }
      ],
      tips: [
        "Cherchez le cœur de Creaking dans les troncs des chênes pâles pour vaincre le Creaking",
        "Le Jardin Pâle se génère uniquement dans les forêts sombres",
        "La mousse pâle est un excellent bloc décoratif pour les builds horreur",
        "Ne détournez jamais le regard du Creaking en combat"
      ],
      faq: [
        {
          question: "Comment trouver le Jardin Pâle ?",
          answer: "Le Jardin Pâle se génère dans les forêts sombres. Cherchez des zones avec des arbres blanchâtres et une atmosphère brumeuse. Utilisez /locatebiome pale_garden pour le trouver directement."
        },
        {
          question: "Comment vaincre le Creaking ?",
          answer: "Le Creaking est invulnérable aux attaques directes. Vous devez trouver et détruire son cœur de Creaking, un bloc caché dans le tronc d'un chêne pâle proche. Suivez les particules pour le localiser."
        }
      ],
      relatedSlugs: ["nouveau-biome", "cerisier", "montagne", "neige-poudreuse", "ocean-chaud"]
    }
  },
  {
    slug: "neige-poudreuse",
    keyword: "neige poudreuse minecraft",
    title: "Neige Poudreuse Minecraft : Guide",
    h1: "La Neige Poudreuse dans Minecraft",
    metaDescription: "Tout savoir sur la neige poudreuse Minecraft. Comment l'éviter, l'utiliser et survivre à ses effets de gel dans ce guide complet.",
    category: "biomes",
    volume: 260,
    content: {
      intro: "La neige poudreuse est un bloc piège unique dans Minecraft qui ressemble à de la neige normale mais dans lequel les entités s'enfoncent. Introduite en 1.17, elle ajoute un vrai danger aux biomes enneigés et offre des mécaniques de gameplay originales.",
      sections: [
        {
          heading: "Où trouver la neige poudreuse",
          content: "La neige poudreuse se génère naturellement dans les biomes de montagne enneigée et les pentes neigeuses. Elle remplace aléatoirement certains blocs de neige au sol. On peut aussi la collecter avec un seau, ce qui donne un seau de neige poudreuse plaçable n'importe où."
        },
        {
          heading: "Effets sur le joueur et les mobs",
          content: "En s'enfonçant dans la neige poudreuse, le joueur commence à geler. Un effet de gel progressif recouvre l'écran de givre et inflige des dégâts après 7 secondes d'immersion totale. Les mobs en feu s'éteignent au contact. Les squelettes transformés en strays après un séjour prolongé dans la neige."
        },
        {
          heading: "Comment éviter la neige poudreuse",
          content: "Les bottes en cuir permettent de marcher sur la neige poudreuse sans s'y enfoncer. C'est la seule armure qui offre cette protection. Gardez une paire de bottes en cuir dans votre inventaire quand vous explorez les montagnes enneigées. Les renards sont naturellement immunisés."
        },
        {
          heading: "Utilisations créatives",
          content: "La neige poudreuse est excellente pour créer des pièges défensifs autour de votre base. Les mobs qui tombent dedans sont ralentis et gelés. Vous pouvez aussi l'utiliser pour transformer des squelettes en strays, qui lâchent des flèches de lenteur. C'est aussi un bloc décoratif intéressant."
        }
      ],
      tips: [
        "Les bottes en cuir empêchent de s'enfoncer dans la neige poudreuse",
        "Un seau permet de collecter et replacer la neige poudreuse comme piège",
        "Les squelettes piégés dans la neige poudreuse deviennent des strays",
        "Appuyez sur la touche de saut pour sortir rapidement de la neige",
        "Les entités en feu s'éteignent au contact de la neige poudreuse"
      ],
      faq: [
        {
          question: "La neige poudreuse peut-elle tuer le joueur ?",
          answer: "Oui, si vous restez immergé assez longtemps, les dégâts de gel finiront par vous tuer. Appuyez sur la touche de saut pour remonter et sortir du bloc."
        },
        {
          question: "Peut-on collecter la neige poudreuse ?",
          answer: "Oui, utilisez un seau vide sur un bloc de neige poudreuse pour le collecter. Vous pouvez ensuite le placer n'importe où, comme de l'eau ou de la lave."
        }
      ],
      relatedSlugs: ["nouveau-biome", "montagne", "cerisier", "chene-pale", "ocean-chaud"]
    }
  }
];
