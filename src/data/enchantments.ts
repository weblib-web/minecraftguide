import type { PageData } from "./types";

export const enchantmentsPages: PageData[] = [
  {
    slug: "densite",
    keyword: "enchantement densité minecraft",
    title: "Enchantement Densité Minecraft : Guide Complet",
    h1: "Enchantement Densité dans Minecraft",
    metaDescription: "Tout savoir sur l'enchantement Densité Minecraft. Augmentez les dégâts de la masse en fonction de la chute. Niveaux et utilisation.",
    category: "enchantments",
    volume: 590,
    content: {
      intro: "L'enchantement Densité est un enchantement de la masse dans Minecraft, ajouté avec la mise à jour 1.21. Il augmente les dégâts infligés par bloc tombé lors d'une attaque fracassante (attaque plongeante). Niveau maximum : V. Plus vous tombez de haut, plus les dégâts sont dévastateurs.",
      sections: [
        { heading: "Fonctionnement de Densité", content: "Densité augmente les dégâts de l'attaque fracassante de la masse de 0,5 par bloc de chute par niveau d'enchantement. Avec Densité V, chaque bloc de chute ajoute 2,5 dégâts supplémentaires. Pour une chute de 10 blocs, cela représente 25 points de dégâts bonus, suffisant pour éliminer la majorité des mobs en un seul coup. L'attaque fracassante se déclenche en frappant une entité en tombant." },
        { heading: "Niveaux et obtention", content: "Densité va du niveau I au niveau V. Il s'obtient à la table d'enchantement, par les livres enchantés des coffres ou via les villageois bibliothécaires. Ce n'est pas un enchantement de trésor. Densité est mutuellement exclusif avec Châtiment, Fléau des Arthropodes et Brèche sur la masse." },
        { heading: "Stratégies de combat", content: "Utilisez une charge de vent (wind charge) pour vous propulser en l'air puis frappez en retombant. L'attaque fracassante de la masse annule vos propres dégâts de chute si vous touchez un mob. Vous pouvez aussi utiliser l'élytra pour prendre de la hauteur. La masse avec Densité V est l'arme la plus puissante du jeu en dégâts par coup grâce à l'attaque fracassante." }
      ],
      tips: [
        "Densité V + chute de 20 blocs = 50 dégâts bonus (25 coeurs)",
        "Utilisez une charge de vent pour vous propulser avant l'attaque fracassante",
        "L'attaque fracassante annule vos dégâts de chute si elle touche un mob",
        "Mutuellement exclusif avec Châtiment, Fléau des Arthropodes et Brèche"
      ],
      faq: [
        { question: "Densité est-il meilleur que Tranchant ?", answer: "Densité est spécifique à la masse et à l'attaque fracassante. Tranchant ne s'applique pas à la masse. Pour les dégâts de mêlée classiques, l'épée avec Tranchant V reste supérieure. Densité excelle dans les attaques aériennes avec des dégâts potentiellement illimités." },
        { question: "Peut-on mettre Densité sur une épée ?", answer: "Non, Densité est exclusif à la masse (mace). Il ne peut pas être appliqué sur les épées, haches ou autres armes. Les enchantements exclusifs de la masse sont Densité, Brèche et Rafale de Vent." }
      ],
      relatedSlugs: ["enchantement-masse", "rafale-de-vent", "chute-amortie", "meilleur-enchantement-epee", "liste-enchantements"]
    }
  },
  {
    slug: "affinite-aquatique",
    keyword: "affinité aquatique minecraft",
    title: "Affinité Aquatique Minecraft : Enchantement Guide",
    h1: "Enchantement Affinité Aquatique dans Minecraft",
    metaDescription: "L'enchantement Affinité Aquatique Minecraft accélère le minage sous l'eau. Obtention, application sur le casque et combinaisons.",
    category: "enchantments",
    volume: 590,
    content: {
      intro: "Affinité Aquatique (Aqua Affinity) est un enchantement de casque qui supprime le ralentissement du minage sous l'eau. Niveau maximum : I. Sans cet enchantement, miner sous l'eau est 5 fois plus lent. Il est indispensable pour explorer et piller les monuments sous-marins.",
      sections: [
        { heading: "Effet de l'enchantement", content: "Normalement, miner sous l'eau est 5 fois plus lent qu'en surface. Si vous n'avez pas les pieds au sol, c'est 25 fois plus lent. Affinité Aquatique supprime la pénalité liée à l'eau, ramenant la vitesse de minage à la normale. C'est un enchantement de niveau I uniquement, il n'existe pas de niveaux supérieurs. Il n'est pas un enchantement de trésor et s'obtient à la table d'enchantement." },
        { heading: "Obtention", content: "Affinité Aquatique s'obtient à la table d'enchantement en enchantant un casque ou une carapace de tortue, par les livres enchantés trouvés dans les coffres ou achetés aux bibliothécaires, ou par combinaison à l'enclume. Compatible avec tous les casques : cuir, fer, or, diamant, Netherite et carapace de tortue." },
        { heading: "Combinaisons recommandées", content: "Combinez Affinité Aquatique avec Apnée III (Respiration, plus d'air sous l'eau) sur le casque, et Agilité Aquatique III sur les bottes (nage plus rapide). Ajoutez Protection IV et Solidité III sur l'armure complète, ainsi qu'Épines III si souhaité. Cette combinaison rend l'exploration sous-marine presque aussi confortable que sur terre." }
      ],
      tips: [
        "Affinité Aquatique n'a qu'un seul niveau (I), pas besoin de chercher un niveau supérieur",
        "Indispensable pour piller les monuments sous-marins et les ruines",
        "Combinez avec Apnée III (Respiration) pour rester sous l'eau longtemps",
        "S'applique uniquement sur le casque et la carapace de tortue"
      ],
      faq: [
        { question: "Affinité Aquatique fonctionne-t-elle avec un conduit ?", answer: "Oui, les effets se cumulent. Le conduit donne déjà le minage normal sous l'eau, mais Affinité Aquatique assure que vous êtes couvert même hors de la portée du conduit." },
        { question: "Peut-on mettre Affinité Aquatique sur un casque en Netherite ?", answer: "Oui, Affinité Aquatique fonctionne sur tous les casques : cuir, fer, or, diamant, Netherite et même la carapace de tortue." }
      ],
      relatedSlugs: ["aisance-aquatique", "enchantement-armure", "enchantement-bottes", "protection", "liste-enchantements"]
    }
  },
  {
    slug: "aisance-aquatique",
    keyword: "aisance aquatique minecraft",
    title: "Aisance Aquatique Minecraft : Enchantement Guide",
    h1: "Enchantement Aisance Aquatique dans Minecraft",
    metaDescription: "Nagez plus vite avec l'enchantement Aisance Aquatique Minecraft. Niveaux, application sur les bottes et exploration sous-marine.",
    category: "enchantments",
    volume: 480,
    content: {
      intro: "Agilité Aquatique (Depth Strider, aussi appelé Aisance Aquatique) est un enchantement de bottes qui augmente la vitesse de déplacement sous l'eau. Niveau maximum : III. Au niveau III, vous nagez presque aussi vite que vous marchez sur terre. Ce n'est pas un enchantement de trésor.",
      sections: [
        { heading: "Niveaux et effets", content: "Agilité Aquatique a 3 niveaux. Chaque niveau réduit la pénalité de mouvement dans l'eau d'un tiers. Au niveau III, vous vous déplacez sous l'eau à la vitesse de marche normale. C'est une amélioration drastique par rapport à la nage de base. S'applique uniquement aux bottes." },
        { heading: "Agilité Aquatique vs Semelles Givrantes", content: "Agilité Aquatique et Semelles Givrantes (Frost Walker, niveau max II) sont mutuellement exclusifs sur les bottes. Semelles Givrantes gèle l'eau sous vos pieds pour marcher dessus, tandis qu'Agilité Aquatique accélère la nage sous l'eau. Pour l'exploration sous-marine, Agilité Aquatique est nettement supérieur." },
        { heading: "Combinaisons optimales", content: "Bottes idéales : Agilité Aquatique III + Protection IV + Chute Amortie IV + Solidité III + Raccommodage. Vous pouvez aussi ajouter Agilité des Âmes III (Soul Speed) et Épines III. Pour l'exploration sous-marine complète, ajoutez Affinité Aquatique et Apnée III sur le casque." }
      ],
      tips: [
        "Agilité Aquatique III = vitesse de marche normale sous l'eau",
        "Mutuellement exclusif avec Semelles Givrantes (Frost Walker)",
        "S'applique uniquement aux bottes",
        "Combinez avec Apnée III et Affinité Aquatique pour l'exploration sous-marine"
      ],
      faq: [
        { question: "Agilité Aquatique affecte-t-elle la nage en surface ?", answer: "Oui, elle accélère aussi la nage en surface, pas uniquement la nage sous l'eau. C'est utile pour traverser les rivières et les océans plus rapidement." },
        { question: "Peut-on nager plus vite qu'en marchant ?", answer: "Avec Agilité Aquatique III et une potion de rapidité, oui. La potion de rapidité s'applique aussi dans l'eau, vous permettant de dépasser la vitesse de marche normale." }
      ],
      relatedSlugs: ["affinite-aquatique", "chute-amortie", "enchantement-bottes", "protection", "liste-enchantements"]
    }
  },
  {
    slug: "chute-amortie",
    keyword: "chute amortie minecraft",
    title: "Chute Amortie Minecraft : Enchantement Guide",
    h1: "Enchantement Chute Amortie dans Minecraft",
    metaDescription: "Réduisez les dégâts de chute avec l'enchantement Chute Amortie Minecraft. Niveaux, bottes et protection contre la chute.",
    category: "enchantments",
    volume: 480,
    content: {
      intro: "Chute Amortie (Feather Falling) est un enchantement de bottes qui réduit les dommages reçus causés par les chutes. Niveau maximum : IV. Ce n'est pas un enchantement de trésor. C'est un enchantement de survie quasi-obligatoire pour l'exploration et le combat.",
      sections: [
        { heading: "Niveaux et réduction", content: "Chaque niveau de Chute Amortie réduit les dégâts de chute de 12%. Au niveau IV maximum, la réduction est de 48%. Combiné avec Protection IV sur les 4 pièces d'armure (4% par niveau par pièce = 64%), la réduction totale atteint le plafond de 80%, permettant de survivre à des chutes de plus de 100 blocs." },
        { heading: "Combinaison avec Protection", content: "Protection réduit aussi les dégâts de chute. Avec Chute Amortie IV sur les bottes (48%) et Protection IV sur les 4 pièces d'armure (64%), la réduction est plafonnée à 80%. Cela signifie qu'une chute de 50 blocs ne vous coûtera que quelques coeurs. Compatible avec Agilité Aquatique III, Agilité des Âmes III, Solidité III et Raccommodage sur les mêmes bottes." },
        { heading: "Situations d'utilisation", content: "Chute Amortie est essentiel dans l'End (plateformes flottantes au-dessus du vide), en montagne (falaises abruptes), et dans le Nether (lacs de lave en contrebas). C'est aussi crucial pour utiliser l'élytra, car les atterrissages ratés peuvent être fatals sans cette protection. Réduit aussi les dégâts d'Ender Pearl." }
      ],
      tips: [
        "Chute Amortie IV + Protection IV sur 4 pièces = 80% de réduction (plafond)",
        "Indispensable pour l'élytra et l'exploration de l'End",
        "Compatible avec tous les autres enchantements de bottes (Agilité Aquatique, Agilité des Âmes)",
        "Réduit aussi les dégâts des Ender Pearls"
      ],
      faq: [
        { question: "Chute Amortie protège-t-elle des dégâts d'Ender Pearl ?", answer: "Oui, les dégâts d'Ender Pearl sont considérés comme des dégâts de chute et sont réduits par Chute Amortie. C'est très utile pour le PvP et le speedrun." },
        { question: "Chute Amortie est-il compatible avec Agilité Aquatique ?", answer: "Oui, les deux enchantements sont compatibles sur les bottes. Vous pouvez avoir Chute Amortie IV et Agilité Aquatique III simultanément, ainsi qu'Agilité des Âmes III." }
      ],
      relatedSlugs: ["protection", "aisance-aquatique", "enchantement-bottes", "enchantement-armure", "liste-enchantements"]
    }
  },
  {
    slug: "fleau-arthropodes",
    keyword: "fléau des arthropodes minecraft",
    title: "Fléau des Arthropodes Minecraft : Guide",
    h1: "Enchantement Fléau des Arthropodes dans Minecraft",
    metaDescription: "Fléau des Arthropodes Minecraft : dégâts bonus contre araignées et silverfish. Niveaux, utilité et comparaison avec Tranchant.",
    category: "enchantments",
    volume: 390,
    content: {
      intro: "Le Fléau des Arthropodes (Bane of Arthropods) augmente les dégâts infligés aux araignées, poissons d'argent (silverfish) et aux endermites. Niveau maximum : V. Ce n'est pas un enchantement de trésor. Il s'applique aux épées, haches et à la masse.",
      sections: [
        { heading: "Mobs affectés", content: "Les arthropodes dans Minecraft incluent : araignées, araignées venimeuses des cavernes, poissons d'argent (silverfish) et endermites. Chaque niveau ajoute 2,5 dégâts bonus contre ces mobs et applique un effet de lenteur IV pendant 1 à 3,5 secondes (augmente avec le niveau). Au niveau V, c'est 12,5 dégâts bonus par coup." },
        { heading: "Comparaison avec Tranchant", content: "Tranchant V augmente les dégâts contre TOUS les mobs de 3 points. Fléau V ajoute 12,5 dégâts mais uniquement contre les arthropodes. Fléau est 4x plus efficace que Tranchant contre les arthropodes, mais totalement inutile contre les autres mobs. Tranchant est le choix polyvalent standard." },
        { heading: "Compatibilité et obtention", content: "Fléau des Arthropodes est mutuellement exclusif avec Tranchant et Châtiment. Il peut être appliqué sur les épées, les haches (via l'enclume) et la masse. Sur la masse, il est aussi exclusif avec Densité et Brèche. Obtenu à la table d'enchantement, via les livres enchantés ou les villageois." }
      ],
      tips: [
        "Préférez Tranchant pour une utilisation générale",
        "Mutuellement exclusif avec Tranchant et Châtiment",
        "L'effet de lenteur IV est utile pour ralentir les araignées rapides",
        "S'applique aux épées, haches et à la masse"
      ],
      faq: [
        { question: "Fléau des Arthropodes est-il utile ?", answer: "Rarement. Tranchant est presque toujours supérieur car il augmente les dégâts contre tous les mobs. Fléau n'est utile que si vous combattez exclusivement des araignées ou des poissons d'argent dans des situations spécifiques." },
        { question: "Quels mobs sont des arthropodes ?", answer: "Les araignées, araignées venimeuses des cavernes, poissons d'argent (silverfish) et endermites. Ce sont les seuls mobs affectés par Fléau des Arthropodes dans le jeu." }
      ],
      relatedSlugs: ["meilleur-enchantement-epee", "chatiment", "enchantement-epee", "liste-enchantements", "protection"]
    }
  },
  {
    slug: "malediction-disparition",
    keyword: "malédiction de disparition minecraft",
    title: "Malédiction de Disparition Minecraft : Guide",
    h1: "Malédiction de Disparition dans Minecraft",
    metaDescription: "Comprendre la malédiction de disparition Minecraft. L'objet disparaît à votre mort. Comment l'éviter et la contourner.",
    category: "enchantments",
    volume: 390,
    content: {
      intro: "La Malédiction de Disparition (Curse of Vanishing) est un enchantement de trésor négatif de niveau I : l'objet enchanté est détruit à la mort du joueur au lieu de tomber au sol. C'est particulièrement dangereux sur les équipements rares. Il peut s'appliquer à presque tous les objets enchantables.",
      sections: [
        { heading: "Fonctionnement", content: "Quand vous mourez avec un objet portant la Malédiction de Disparition, cet objet est détruit au lieu de rester au sol. Il disparaît complètement. La meule ne peut pas retirer les malédictions (seuls les enchantements non maudits sont supprimés). C'est un enchantement de trésor, ce qui signifie qu'il ne peut pas être obtenu à la table d'enchantement." },
        { heading: "Comment l'obtenir (ou l'éviter)", content: "La Malédiction de Disparition apparaît dans les coffres de structures, sur les échanges de villageois et via les livres enchantés trouvés en pêchant. Elle ne peut PAS être obtenue à la table d'enchantement. Elle ne peut pas être retirée par la meule (les malédictions résistent au désenchantement). La boussole et la boussole de récupération peuvent aussi recevoir cette malédiction." },
        { heading: "Stratégies de contournement", content: "Gardez l'objet maudit dans un coffre quand vous explorez des zones dangereuses. Utilisez la commande /gamerule keepInventory true en solo pour annuler l'effet. En multijoueur PvP, certains enchantent intentionnellement leurs objets avec cette malédiction pour empêcher l'ennemi de les récupérer après un kill." }
      ],
      tips: [
        "Rangez les objets maudits dans un coffre avant les situations dangereuses",
        "La meule ne retire PAS les malédictions, seulement les enchantements normaux",
        "C'est un enchantement de trésor : introuvable à la table d'enchantement",
        "En PvP, la malédiction peut être utilisée stratégiquement contre vos ennemis"
      ],
      faq: [
        { question: "Peut-on retirer la malédiction de disparition ?", answer: "Non, aucun moyen vanilla ne permet de retirer cette malédiction. La meule supprime les enchantements normaux mais pas les malédictions. L'objet gardera la malédiction en permanence." },
        { question: "La malédiction de disparition est-elle héritée par combinaison ?", answer: "Oui, si vous combinez un objet maudit avec un autre à l'enclume, l'objet résultant gardera la malédiction. Faites attention aux combinaisons à l'enclume." }
      ],
      relatedSlugs: ["liste-enchantements", "protection", "fortune", "toucher-de-soie", "enchantement-armure"]
    }
  },
  {
    slug: "toucher-de-soie",
    keyword: "toucher de soie minecraft",
    title: "Toucher de Soie Minecraft : Enchantement Guide",
    h1: "Enchantement Toucher de Soie dans Minecraft",
    metaDescription: "L'enchantement Toucher de Soie Minecraft récupère les blocs intacts. Verre, minerais, herbe : tout ce que vous pouvez récolter.",
    category: "enchantments",
    volume: 390,
    content: {
      intro: "Toucher de Soie (Silk Touch) est un enchantement qui permet d'obtenir des blocs normalement irrécupérables dans leur forme d'origine. Niveau maximum : I. Ce n'est pas un enchantement de trésor. Il s'applique aux pioches, pelles, haches et houes. Mutuellement exclusif avec Fortune.",
      sections: [
        { heading: "Blocs récupérables", content: "Toucher de Soie permet de récupérer : le verre et les vitres, les blocs de minerai (diamant, émeraude, charbon, etc.), l'herbe, le mycélium, la pierre (au lieu du pavé), le corail vivant, les blocs de glace, la pierre lumineuse (glowstone) et les feuilles. C'est la seule façon de récupérer certains blocs dans leur forme d'origine." },
        { heading: "Toucher de Soie vs Fortune", content: "Les deux sont mutuellement exclusifs sur les pioches, pelles, haches et houes. Fortune augmente les ressources obtenues par le minage (plus de diamants), Toucher de Soie récupère le bloc intact. Stratégie optimale : minez avec Toucher de Soie pour stocker les minerais, puis cassez-les chez vous avec Fortune III." },
        { heading: "Utilisations essentielles", content: "Indispensable pour : récupérer du verre et des vitres sans les casser, obtenir de la pierre au lieu du pavé, récupérer du corail vivant, collecter de la glace pour les routes de bateaux dans le Nether, et préserver les blocs de minerai pour les casser ultérieurement avec Fortune III. Fonctionne aussi sur les cisailles en Bedrock Edition." }
      ],
      tips: [
        "Utilisez la stratégie Toucher de Soie + Fortune : stockez les minerais et cassez-les avec Fortune III",
        "S'applique aux pioches, pelles, haches et houes",
        "Mutuellement exclusif avec Fortune",
        "Niveau I uniquement, pas besoin de chercher un niveau supérieur"
      ],
      faq: [
        { question: "Toucher de Soie fonctionne-t-il sur les spawners ?", answer: "Non, les spawners ne peuvent pas être récupérés avec Toucher de Soie en vanilla. C'est l'un des rares blocs qui résiste à cet enchantement." },
        { question: "Peut-on mettre Toucher de Soie sur une pelle ?", answer: "Oui, Toucher de Soie fonctionne sur les pioches, pelles, haches et houes. Sur une pelle, il permet de récupérer la neige en bloc au lieu de boules de neige. En Bedrock Edition, il fonctionne aussi sur les cisailles." }
      ],
      relatedSlugs: ["fortune", "enchantement-pioche", "liste-enchantements", "minage-optimise", "affilage"]
    }
  },
  {
    slug: "meilleur-enchantement-epee",
    keyword: "meilleur enchantement épée minecraft",
    title: "Meilleurs Enchantements Épée Minecraft",
    h1: "Les Meilleurs Enchantements d'Épée dans Minecraft",
    metaDescription: "Découvrez les meilleurs enchantements pour votre épée Minecraft. Tranchant V, Butin III, Raccommodage et la combo parfaite.",
    category: "enchantments",
    volume: 390,
    content: {
      intro: "L'épée est votre arme principale dans Minecraft et ses enchantements font toute la différence en combat. D'après le wiki, les enchantements d'épée sont : Tranchant V, Châtiment V, Fléau V (mutuellement exclusifs), Aura de Feu II, Butin III, Recul II, Affilage III (Java Edition), Solidité III et Raccommodage.",
      sections: [
        { heading: "L'épée parfaite", content: "La meilleure épée possible combine : Tranchant V (dégâts max), Butin III (plus de drops), Aura de Feu II (dégâts de feu), Recul II (repousse les mobs), Affilage III (Java Edition, dégâts de balayage), Solidité III (durabilité) et Raccommodage (réparation par XP). En Netherite, c'est l'arme ultime." },
        { heading: "Tranchant V : priorité absolue", content: "Tranchant V (Sharpness) ajoute 3 dégâts à chaque coup contre tous les mobs et joueurs. C'est toujours le premier enchantement à obtenir. Il est mutuellement exclusif avec Châtiment et Fléau des Arthropodes. Une épée en Netherite Tranchant V inflige 11 dégâts de base (5,5 coeurs)." },
        { heading: "Butin III et Aura de Feu II", content: "Butin III (Looting) augmente le butin que les créatures lâchent à leur mort. Aura de Feu II (Fire Aspect) met la cible en feu, infligeant des dégâts de feu supplémentaires et cuisant automatiquement la viande. Attention : Aura de Feu est inutile dans le Nether contre les mobs résistants au feu." },
        { heading: "Raccommodage vs Solidité", content: "Raccommodage (Mending, enchantement de trésor) répare l'épée avec les orbes d'expérience collectées. Solidité III (Unbreaking) augmente la durabilité. Prenez les DEUX pour une épée éternelle. Raccommodage ne s'obtient pas à la table d'enchantement, seulement via coffres, pêche et villageois." }
      ],
      tips: [
        "Tranchant V est toujours la priorité numéro 1",
        "Raccommodage est un enchantement de trésor : obtenez-le via les villageois ou la pêche",
        "Évitez Aura de Feu si vous chassez dans le Nether (mobs résistants au feu)",
        "Butin III est essentiel pour le farming de ressources rares",
        "Affilage III (Sweeping Edge, Java Edition uniquement) augmente les dégâts de balayage"
      ],
      faq: [
        { question: "Faut-il mettre Recul sur l'épée ?", answer: "C'est discutable. Recul II (Knockback) est utile contre les creepers mais gênant contre les mobs normaux car ils sont repoussés loin. En PvP, c'est généralement un désavantage." },
        { question: "Peut-on avoir tous les enchantements sur une seule épée ?", answer: "Oui, via l'enclume en combinant des livres enchantés. Vous pouvez mettre Tranchant V + Butin III + Aura de Feu II + Recul II + Affilage III + Solidité III + Raccommodage. L'ordre de combinaison est important pour minimiser le coût en XP." }
      ],
      relatedSlugs: ["enchantement-epee", "affilage", "aura-de-feu", "chatiment", "liste-enchantements"]
    }
  },
  {
    slug: "enchantement-masse",
    keyword: "masse minecraft enchantement",
    title: "Enchantements de la Masse Minecraft : Guide",
    h1: "Tous les Enchantements de la Masse dans Minecraft",
    metaDescription: "Guide complet des enchantements de la masse Minecraft. Densité, Rafale de Vent et les meilleurs combos pour cette arme.",
    category: "enchantments",
    volume: 480,
    content: {
      intro: "La masse (mace) est une arme introduite en 1.21 avec des enchantements exclusifs et des enchantements partagés. Son attaque fracassante inflige des dégâts massifs proportionnels à la hauteur de chute. D'après le wiki, les enchantements disponibles sont : Densité V, Brèche IV, Châtiment V, Fléau V (mutuellement exclusifs), Rafale de Vent III, Aura de Feu II, Solidité III et Raccommodage.",
      sections: [
        { heading: "Enchantements exclusifs de la masse", content: "La masse possède 4 enchantements mutuellement exclusifs : Densité V (dégâts bonus par bloc de chute, +0,5/bloc/niveau), Brèche IV (réduit l'efficacité de l'armure de la cible de 15% par niveau), Châtiment V (dégâts vs morts-vivants) et Fléau des Arthropodes V (dégâts vs arthropodes). Elle accepte aussi Rafale de Vent III (enchantement de trésor) qui est compatible avec tous les enchantements de dégâts." },
        { heading: "Densité vs Brèche vs Rafale de Vent", content: "Densité V maximise les dégâts de l'attaque fracassante (+0,5 par bloc de chute par niveau). Brèche IV réduit l'armure ennemie de 60% au niveau max, idéal en PvP. Rafale de Vent III (enchantement de trésor) émet une rafale de vent propulsant l'attaquant vers le haut pour enchaîner les attaques. En solo PvE, Densité est supérieur. En PvP, Brèche excelle." },
        { heading: "Enchantements standards compatibles", content: "La masse accepte aussi : Aura de Feu II (met la cible en feu), Solidité III (durabilité) et Raccommodage (réparation XP, enchantement de trésor). La masse optimale : Densité V + Rafale de Vent III + Aura de Feu II + Solidité III + Raccommodage." },
        { heading: "Stratégie d'attaque fracassante", content: "L'attaque fracassante se déclenche en tombant et en frappant une entité avant de toucher le sol. Les dégâts annulent aussi vos propres dégâts de chute. Utilisez une charge de vent pour vous propulser en l'air puis frappez en retombant. Avec Rafale de Vent, vous rebondissez automatiquement pour enchaîner les attaques." }
      ],
      tips: [
        "L'attaque fracassante annule vos dégâts de chute si vous touchez une entité",
        "Densité V est le meilleur choix pour les dégâts PvE, Brèche IV pour le PvP",
        "Rafale de Vent III est un enchantement de trésor compatible avec les autres",
        "Raccommodage est indispensable, obtenez-le via coffres, pêche ou villageois"
      ],
      faq: [
        { question: "La masse est-elle meilleure que l'épée ?", answer: "Pour les attaques fracassantes, la masse est de loin supérieure avec des dégâts potentiellement illimités. Pour le combat au sol classique, l'épée reste meilleure grâce à Tranchant V et sa vitesse d'attaque. L'idéal est d'avoir les deux." },
        { question: "Comment obtenir la masse ?", answer: "La masse se craft avec un noyau lourd (trouvé dans les coffres des chambres des épreuves) et un bâton de Blaze. Le noyau lourd est un butin rare des chambres des épreuves (trial chambers)." }
      ],
      relatedSlugs: ["densite", "rafale-de-vent", "meilleur-enchantement-epee", "liste-enchantements", "enchantement-epee"]
    }
  },
  {
    slug: "chatiment",
    keyword: "enchantement chatiment minecraft",
    title: "Enchantement Châtiment Minecraft : Guide",
    h1: "Enchantement Châtiment dans Minecraft",
    metaDescription: "L'enchantement Châtiment Minecraft augmente les dégâts contre les morts-vivants. Zombies, squelettes et Wither : guide complet.",
    category: "enchantments",
    volume: 140,
    content: {
      intro: "Châtiment (Smite) est un enchantement qui augmente les dégâts infligés aux créatures mort-vivantes. Niveau maximum : V. Ce n'est pas un enchantement de trésor. Il s'applique aux épées, haches (via enclume) et à la masse. Mutuellement exclusif avec Tranchant et Fléau des Arthropodes.",
      sections: [
        { heading: "Mobs affectés", content: "Châtiment affecte tous les morts-vivants : zombies (toutes variantes incluant noyés et husks), squelettes (toutes variantes incluant strays et wither squelettes), phantoms, zombified piglins, le Wither, les chevaux squelettes et les zoglins. Chaque niveau ajoute 2,5 dégâts, soit 12,5 au niveau V." },
        { heading: "Châtiment V vs Tranchant V", content: "Châtiment V ajoute 12,5 dégâts contre les morts-vivants, contre 3 pour Tranchant V. Contre un zombie, Châtiment V est 4 fois plus efficace. Cependant, Châtiment ne fait rien contre les creepers, Endermen et autres non-morts-vivants. Tranchant reste le choix polyvalent. Sur la masse, Châtiment est mutuellement exclusif avec Densité et Brèche en plus." },
        { heading: "Utilisation optimale", content: "Gardez une épée Châtiment V spécifiquement pour le combat contre le Wither. Le Wither a 300 PV (Java Edition) et Châtiment V réduit drastiquement le temps de combat. C'est aussi excellent pour les fermes à zombies et squelettes, ou pour explorer la nuit. Peut aussi se mettre sur les haches via l'enclume." }
      ],
      tips: [
        "Châtiment V est le meilleur enchantement pour combattre le Wither",
        "Gardez une épée Châtiment en plus de votre épée Tranchant principale",
        "12,5 dégâts bonus au niveau V contre les morts-vivants",
        "S'applique aux épées, haches (via enclume) et à la masse"
      ],
      faq: [
        { question: "Châtiment est-il meilleur que Tranchant pour le Wither ?", answer: "Oui, largement. Châtiment V ajoute 12,5 dégâts contre le Wither (créature mort-vivante), bien plus que les 3 dégâts de Tranchant V. C'est le choix optimal pour ce boss." },
        { question: "Les zombified piglins sont-ils des morts-vivants ?", answer: "Oui, les zombified piglins sont classés comme morts-vivants et sont affectés par Châtiment. C'est utile pour les fermes d'XP dans le Nether." }
      ],
      relatedSlugs: ["meilleur-enchantement-epee", "enchantement-epee", "fleau-arthropodes", "affilage", "liste-enchantements"]
    }
  },
  {
    slug: "flamme",
    keyword: "enchantement flamme minecraft",
    title: "Enchantement Flamme Minecraft : Guide",
    h1: "Enchantement Flamme dans Minecraft",
    metaDescription: "L'enchantement Flamme Minecraft enflamme vos flèches. Dégâts de feu, cuisson automatique et combinaisons avec l'arc.",
    category: "enchantments",
    volume: 140,
    content: {
      intro: "Flamme (Flame) est un enchantement d'arc qui met la cible en feu. Niveau maximum : I. Ce n'est pas un enchantement de trésor. Les flèches tirées s'enflamment et les animaux tués par le feu lâchent directement de la viande cuite.",
      sections: [
        { heading: "Effet", content: "Flamme n'a qu'un seul niveau (I). Les flèches tirées s'enflamment et mettent la cible en feu pendant 5 secondes, infligeant 4 dégâts de feu supplémentaires au total (2 coeurs). Les animaux tués par le feu lâchent de la viande cuite au lieu de la viande crue. C'est un enchantement exclusif à l'arc." },
        { heading: "Arc parfait", content: "D'après le wiki, l'arc peut recevoir : Puissance V (dégâts), Frappe II (recul des flèches), Flamme I (feu), Solidité III (durabilité) et soit Infinité soit Raccommodage (mutuellement exclusifs). Puissance V + Flamme permet de tuer la plupart des mobs en un seul tir pleinement chargé." },
        { heading: "Limitations", content: "Les flèches enflammées ne fonctionnent pas sous la pluie ni sous l'eau. Les mobs résistants au feu (blazes, magma cubes, ghasts, striders) ne subissent pas les dégâts de feu. Le feu ne fait pas de dégâts aux joueurs ayant la résistance au feu." }
      ],
      tips: [
        "Les animaux tués par le feu lâchent de la viande cuite automatiquement",
        "Flamme n'a qu'un seul niveau (I), pas besoin d'enchanter au-dessus",
        "Inutile contre les mobs du Nether résistants au feu",
        "Les flèches Flamme peuvent allumer du TNT et activer des portails du Nether"
      ],
      faq: [
        { question: "Flamme fonctionne-t-il avec les flèches spéciales ?", answer: "Oui, les flèches à pointe (tipped arrows) combinées avec Flamme appliquent à la fois l'effet de la potion et le feu. C'est très puissant en PvP." },
        { question: "Flamme ou Infinité en premier ?", answer: "Les deux sont compatibles sur le même arc. Flamme ajoute des dégâts de feu, Infinité permet de tirer sans consommer de flèches. Par contre, Infinité et Raccommodage sont mutuellement exclusifs." }
      ],
      relatedSlugs: ["infinite", "enchantement-arc", "aura-de-feu", "charge-rapide", "liste-enchantements"]
    }
  },
  {
    slug: "infinite",
    keyword: "enchantement infinité minecraft",
    title: "Enchantement Infinité Minecraft : Guide",
    h1: "Enchantement Infinité dans Minecraft",
    metaDescription: "L'enchantement Infinité Minecraft donne des flèches illimitées à votre arc. Obtention et choix entre Infinité et Raccommodage.",
    category: "enchantments",
    volume: 140,
    content: {
      intro: "Infinité (Infinity) est un enchantement d'arc qui permet de tirer des flèches sans en consommer. Niveau maximum : I. Ce n'est pas un enchantement de trésor. Vous n'avez besoin que d'une seule flèche dans votre inventaire pour tirer indéfiniment. Mutuellement exclusif avec Raccommodage.",
      sections: [
        { heading: "Fonctionnement", content: "Avec Infinité, chaque flèche normale tirée ne se consomme pas. Vous avez besoin d'au moins 1 flèche dans votre inventaire. Les flèches tirées avec Infinité ne peuvent pas être ramassées au sol. Important : les flèches à pointe (tipped arrows) et les flèches spectrales SONT consommées malgré Infinité, seules les flèches normales sont infinies." },
        { heading: "Infinité vs Raccommodage", content: "D'après le wiki, Infinité et Raccommodage sont mutuellement exclusifs sur l'arc. C'est le seul objet où ces deux enchantements s'excluent. Infinité économise des flèches mais l'arc finit par casser (durabilité 384, ou 1536 avec Solidité III). Raccommodage répare l'arc avec les orbes d'XP mais vous devez farmer des flèches." },
        { heading: "Recommandation", content: "Pour la plupart des joueurs, Raccommodage est le meilleur choix car un arc Puissance V + Flamme est coûteux à remplacer. Les flèches sont faciles à obtenir (ferme de squelettes, craft avec bâton + silex + plume). Cependant, en début de partie, Infinité est plus pratique." }
      ],
      tips: [
        "Infinité ne fonctionne PAS avec les flèches à pointe ni spectrales",
        "Mutuellement exclusif avec Raccommodage sur l'arc uniquement",
        "Une seule flèche normale suffit dans l'inventaire pour tirer indéfiniment",
        "L'arc a 384 de durabilité de base, Solidité III la multiplie"
      ],
      faq: [
        { question: "Vaut-il mieux Infinité ou Raccommodage ?", answer: "Raccommodage est généralement recommandé car un arc pleinement enchanté (Puissance V + Flamme + Frappe II + Solidité III) est coûteux à recréer. Les flèches sont faciles à obtenir via une ferme de squelettes." },
        { question: "Peut-on avoir Infinité et Raccommodage ?", answer: "Non, ces deux enchantements sont mutuellement exclusifs sur l'arc. C'est le seul équipement où Raccommodage et un autre enchantement s'excluent. Vous devez choisir l'un ou l'autre." }
      ],
      relatedSlugs: ["flamme", "enchantement-arc", "meilleur-enchantement-epee", "liste-enchantements", "fortune"]
    }
  },
  {
    slug: "loyaute",
    keyword: "enchantement loyauté minecraft",
    title: "Enchantement Loyauté Minecraft : Guide",
    h1: "Enchantement Loyauté dans Minecraft",
    metaDescription: "L'enchantement Loyauté Minecraft fait revenir votre trident après l'avoir lancé. Niveaux, vitesse de retour et combinaisons.",
    category: "enchantments",
    volume: 170,
    content: {
      intro: "Loyauté (Loyalty) est un enchantement de trident qui permet au trident de revenir vers le joueur une fois lancé. Niveau maximum : III. Ce n'est pas un enchantement de trésor. C'est un enchantement quasi-obligatoire pour utiliser le trident à distance sans le perdre.",
      sections: [
        { heading: "Niveaux et vitesse", content: "Loyauté a 3 niveaux. Plus le niveau est élevé, plus le trident revient vite. Au niveau III, le retour est presque instantané. Sans Loyauté, le trident lancé reste planté dans le sol ou la cible et doit être récupéré manuellement." },
        { heading: "Incompatibilités", content: "D'après le wiki, Loyauté et Canalisation peuvent être utilisées ensemble, mais ni l'un ni l'autre ne peut être utilisé avec Impulsion (Riptide). Le trident a donc deux configurations : combat à distance (Loyauté + Canalisation) ou transport aquatique (Impulsion). Ce sont deux tridents séparés." },
        { heading: "Le trident parfait", content: "D'après le tableau du wiki, le trident accepte : Raccommodage, Solidité III, Empalement V en combinaison libre, puis Canalisation dans une colonne exclusive, et Loyauté III vs Impulsion III dans une autre colonne exclusive. Trident de combat : Loyauté III + Canalisation + Empalement V + Solidité III + Raccommodage. Trident de transport : Impulsion III + Solidité III + Raccommodage." }
      ],
      tips: [
        "Loyauté III est presque instantané, le niveau I est lent",
        "Loyauté et Canalisation sont compatibles ensemble",
        "Loyauté et Impulsion (Riptide) sont mutuellement exclusifs",
        "Le trident ne revient pas si vous le lancez dans le vide de l'End"
      ],
      faq: [
        { question: "Le trident revient-il toujours ?", answer: "Oui, sauf si vous le lancez dans le vide de l'End. Dans ce cas, il est perdu définitivement. Le trident traverse les blocs pour revenir vers le joueur." },
        { question: "Loyauté fonctionne-t-il sous l'eau ?", answer: "Oui, le trident revient même sous l'eau. Le trident est d'ailleurs conçu pour le combat aquatique, surtout avec Empalement V qui augmente les dégâts infligés aux créatures aquatiques." }
      ],
      relatedSlugs: ["canalisation", "enchantement-epee", "liste-enchantements", "protection", "fortune"]
    }
  },
  {
    slug: "enchantement-pioche",
    keyword: "enchantement pioche minecraft",
    title: "Enchantements Pioche Minecraft : Guide Complet",
    h1: "Tous les Enchantements de Pioche dans Minecraft",
    metaDescription: "Guide complet des enchantements de pioche Minecraft. Fortune, Efficacité, Toucher de Soie et la pioche parfaite.",
    category: "enchantments",
    volume: 140,
    content: {
      intro: "La pioche est l'outil le plus utilisé de Minecraft. D'après le wiki, les enchantements de pioche sont : Efficacité V, Fortune III ou Toucher de Soie (mutuellement exclusifs), Solidité III et Raccommodage. Voici comment créer la pioche parfaite.",
      sections: [
        { heading: "La pioche parfaite", content: "D'après le tableau du wiki, la pioche accepte : Raccommodage, Solidité III, Efficacité V en combinaison libre, puis Fortune III ou Toucher de Soie (mutuellement exclusifs). La pioche idéale en Netherite : Efficacité V + Fortune III + Solidité III + Raccommodage. Ayez une deuxième pioche avec Toucher de Soie." },
        { heading: "Efficacité V", content: "Efficacité V augmente considérablement la vitesse de minage. En Netherite avec Efficacité V, la pierre se casse presque instantanément. Combiné avec un beacon Hâte II, le minage devient instantané sur la plupart des blocs. L'enchantabilité de la Netherite (15) offre de bonnes chances d'obtenir Efficacité V à la table." },
        { heading: "Fortune III vs Toucher de Soie", content: "Fortune III augmente les ressources obtenues par le minage : en moyenne 2,2 diamants par minerai au lieu de 1 (max 4). Toucher de Soie permet d'obtenir les blocs normalement irrécupérables (verre, pierre, minerai intact). Les deux sont mutuellement exclusifs. Stratégie optimale : minez avec Toucher de Soie, stockez, puis cassez avec Fortune III." },
        { heading: "Raccommodage : l'éternité", content: "Raccommodage (enchantement de trésor) répare la pioche avec les orbes d'expérience collectées. Il ne s'obtient pas à la table d'enchantement mais via les coffres, la pêche ou les villageois bibliothécaires. Avec Raccommodage + Solidité III, votre pioche en Netherite (durabilité 2031) ne cassera pratiquement jamais." }
      ],
      tips: [
        "Ayez deux pioches : une Fortune III et une Toucher de Soie",
        "Efficacité V + Hâte II du beacon = minage instantané",
        "Raccommodage est un enchantement de trésor, obtenez-le via les villageois",
        "Fortune III donne en moyenne 2,2 diamants par minerai (max 4)"
      ],
      faq: [
        { question: "Quelle pioche pour commencer ?", answer: "Enchantez d'abord Efficacité pour miner plus vite. Ensuite, obtenez Fortune III pour les diamants. Toucher de Soie vient en troisième comme outil secondaire. L'or a la meilleure enchantabilité (22) mais est trop fragile." },
        { question: "Fortune et Toucher de Soie sont-ils compatibles ?", answer: "Non, ils sont mutuellement exclusifs d'après le wiki. Vous ne pouvez pas avoir les deux sur la même pioche. C'est pourquoi la plupart des joueurs ont deux pioches." }
      ],
      relatedSlugs: ["fortune", "toucher-de-soie", "minage-optimise", "liste-enchantements", "meilleur-enchantement-epee"]
    }
  },
  {
    slug: "enchantement-armure",
    keyword: "enchantement armure minecraft",
    title: "Enchantements Armure Minecraft : Guide Complet",
    h1: "Tous les Enchantements d'Armure dans Minecraft",
    metaDescription: "Guide complet des enchantements d'armure Minecraft. Protection, Raccommodage et la meilleure configuration pour chaque pièce.",
    category: "enchantments",
    volume: 110,
    content: {
      intro: "L'armure enchantée fait la différence entre la vie et la mort dans Minecraft. D'après le wiki, les 4 types de protection (Protection, Feu, Projectiles, Explosions) sont mutuellement exclusifs sur chaque pièce. Chaque pièce a aussi des enchantements spécifiques. Voici l'armure parfaite.",
      sections: [
        { heading: "L'armure parfaite", content: "D'après le wiki : Casque : Protection IV + Apnée III + Affinité Aquatique + Épines III + Solidité III + Raccommodage. Plastron : Protection IV + Épines III + Solidité III + Raccommodage. Jambières : Protection IV + Furtivité Rapide III + Épines III + Solidité III + Raccommodage. Bottes : Protection IV + Chute Amortie IV + Agilité Aquatique III + Agilité des Âmes III + Épines III + Solidité III + Raccommodage." },
        { heading: "Types de Protection", content: "Les 4 protections sont mutuellement exclusives sur chaque pièce : Protection IV (réduit tous les dégâts de 4% par niveau, soit 16% par pièce, 64% total), Protection contre le Feu IV, Protection contre les Projectiles IV, Protection contre les Explosions IV. Chaque protection spécifique offre le double de réduction pour son type. Le plafond de réduction est 80%." },
        { heading: "Enchantements spéciaux par pièce", content: "D'après le wiki : le casque et la carapace de tortue reçoivent Apnée III et Affinité Aquatique I. Les jambières reçoivent Furtivité Rapide III (enchantement de trésor). Les bottes reçoivent Chute Amortie IV, Agilité des Âmes III (enchantement de trésor), et Agilité Aquatique III ou Semelles Givrantes II (mutuellement exclusifs). Épines III est disponible sur toutes les pièces." }
      ],
      tips: [
        "Protection IV sur les 4 pièces = 64% de réduction de tous les dégâts",
        "Raccommodage (enchantement de trésor) sur chaque pièce rend l'armure éternelle",
        "Épines III inflige des dégâts aux attaquants mais use la durabilité plus vite",
        "Furtivité Rapide III (trésor) ne se trouve que dans les anciennes cités"
      ],
      faq: [
        { question: "Protection ou Protection contre le Feu ?", answer: "Protection IV est meilleure dans la majorité des cas car elle réduit TOUS les types de dégâts de 4% par niveau par pièce. Protection contre le Feu IV n'est supérieure que pour les dégâts de feu spécifiquement, utile si vous passez beaucoup de temps dans le Nether." },
        { question: "Peut-on avoir tous les enchantements sur une pièce ?", answer: "Pas tous. Les 4 types de protection sont mutuellement exclusifs sur une même pièce. Sur les bottes, Agilité Aquatique et Semelles Givrantes sont aussi exclusifs. Mais tous les autres enchantements sont librement combinables." }
      ],
      relatedSlugs: ["protection", "chute-amortie", "enchantement-bottes", "affinite-aquatique", "liste-enchantements"]
    }
  },
  {
    slug: "enchantement-bottes",
    keyword: "enchantement botte minecraft",
    title: "Enchantements Bottes Minecraft : Guide Complet",
    h1: "Tous les Enchantements de Bottes dans Minecraft",
    metaDescription: "Les meilleurs enchantements de bottes Minecraft. Chute Amortie, Aisance Aquatique, Célérité de l'Âme et Protection : guide.",
    category: "enchantments",
    volume: 140,
    content: {
      intro: "Les bottes sont la pièce d'armure avec le plus d'enchantements exclusifs dans Minecraft. D'après le wiki : Chute Amortie IV, Agilité Aquatique III ou Semelles Givrantes II (exclusifs), Agilité des Âmes III (trésor), plus les enchantements d'armure standards.",
      sections: [
        { heading: "Bottes parfaites", content: "D'après le wiki, les bottes acceptent : Raccommodage, Solidité III, Épines III, Chute Amortie IV, Agilité des Âmes III (enchantement de trésor), Protection IV (ou autre protection), et Agilité Aquatique III ou Semelles Givrantes II (mutuellement exclusifs). Config optimale : Protection IV + Chute Amortie IV + Agilité Aquatique III + Agilité des Âmes III + Solidité III + Raccommodage." },
        { heading: "Enchantements exclusifs aux bottes", content: "Chute Amortie IV (réduit dégâts de chute de 12% par niveau), Agilité Aquatique III (vitesse de nage), Agilité des Âmes III (enchantement de trésor, vitesse sur soul sand et neige poudreuse) et Semelles Givrantes II (enchantement de trésor, gèle l'eau). Agilité Aquatique et Semelles Givrantes sont mutuellement exclusifs. Agilité des Âmes est compatible avec les deux." },
        { heading: "Choix selon l'activité", content: "Pour l'exploration générale : Agilité Aquatique III. Pour le Nether (soul sand) : Agilité des Âmes III (compatible avec tout sauf Semelles Givrantes). Semelles Givrantes II est un enchantement de trésor qui gèle l'eau sous vos pieds pour marcher dessus. Gardez deux paires de bottes pour différentes situations." }
      ],
      tips: [
        "Agilité Aquatique III est le choix standard, Semelles Givrantes II est de niche",
        "Agilité des Âmes III est un enchantement de trésor (introuvable à la table)",
        "Chute Amortie IV est quasi-obligatoire sur toute paire de bottes",
        "Les bottes en cuir marchent sur la neige poudreuse (pas besoin d'enchantement)"
      ],
      faq: [
        { question: "Agilité Aquatique ou Semelles Givrantes ?", answer: "Agilité Aquatique III est presque toujours supérieur. Semelles Givrantes II gèle l'eau pour marcher dessus mais empêche de nager efficacement. C'est un enchantement de niche et de trésor (introuvable à la table d'enchantement)." },
        { question: "Agilité des Âmes est-il compatible avec Agilité Aquatique ?", answer: "Oui, d'après le wiki, Agilité des Âmes III est dans la colonne 'toute combinaison' et est compatible avec Agilité Aquatique III. Vous pouvez avoir les deux sur les mêmes bottes." }
      ],
      relatedSlugs: ["chute-amortie", "aisance-aquatique", "enchantement-armure", "protection", "liste-enchantements"]
    }
  },
  {
    slug: "enchantement-canne-a-peche",
    keyword: "enchantement canne a peche minecraft",
    title: "Enchantements Canne à Pêche Minecraft : Guide",
    h1: "Tous les Enchantements de Canne à Pêche dans Minecraft",
    metaDescription: "Enchantez votre canne à pêche Minecraft. Chance de la Mer, Appât et Raccommodage pour pêcher des trésors rares facilement.",
    category: "enchantments",
    volume: 90,
    content: {
      intro: "La canne à pêche peut recevoir 4 enchantements d'après le wiki : Chance de la Mer III, Appât III, Solidité III et Raccommodage. Tous sont librement combinables. Avec les bons enchantements, la pêche devient une source fiable de trésors rares.",
      sections: [
        { heading: "La canne parfaite", content: "D'après le wiki, la canne à pêche accepte : Raccommodage, Solidité III, Appât III et Chance de la Mer III, tous combinables. La canne parfaite a donc les 4. Aucun de ces enchantements n'est mutuellement exclusif. Raccommodage est un enchantement de trésor (introuvable à la table d'enchantement)." },
        { heading: "Chance de la Mer III", content: "Chance de la Mer (Luck of the Sea) augmente la chance d'obtenir des trésors et réduit celle d'obtenir des déchets en pêchant. Au niveau III, le taux de trésors passe d'environ 5% à 11,3%. Les trésors incluent : livres enchantés, arcs enchantés, cannes enchantées, selles, étiquettes (name tags) et coquilles de nautile." },
        { heading: "Appât III", content: "Appât (Lure) augmente le taux de poissons qui mordent à l'hameçon, réduisant le temps d'attente. Au niveau III, l'attente est réduite d'environ 15 secondes. Combiné avec Chance de la Mer III, vous obtenez des trésors beaucoup plus rapidement. Ces deux enchantements ne sont pas mutuellement exclusifs." }
      ],
      tips: [
        "Chance de la Mer III + Appât III = trésors réguliers (environ toutes les 5-6 minutes)",
        "Vous pouvez pêcher des livres enchantés de trésor comme Raccommodage",
        "La pêche est une bonne source d'XP en début de partie",
        "Pêchez à ciel ouvert avec de l'eau d'au moins 1 bloc de profondeur"
      ],
      faq: [
        { question: "La pêche est-elle rentable pour les enchantements ?", answer: "Oui, surtout en début de partie. Les livres enchantés pêchés peuvent contenir n'importe quel enchantement, y compris les enchantements de trésor comme Raccommodage. C'est l'une des rares façons d'obtenir Raccommodage sans villageois." },
        { question: "La pluie affecte-t-elle la pêche ?", answer: "Oui, la pluie réduit le temps d'attente d'environ 20%. Pêchez pendant les orages pour les résultats les plus rapides, surtout combiné avec Appât III. La ligne doit être à l'air libre." }
      ],
      relatedSlugs: ["chance-de-la-mer", "liste-enchantements", "fortune", "toucher-de-soie", "enchantement-arc"]
    }
  },
  {
    slug: "enchantement-arbalete",
    keyword: "enchantement arbalète minecraft",
    title: "Enchantements Arbalète Minecraft : Guide",
    h1: "Tous les Enchantements d'Arbalète dans Minecraft",
    metaDescription: "Guide des enchantements d'arbalète Minecraft. Multi-tir, Perforant, Charge Rapide et la configuration optimale pour l'arbalète.",
    category: "enchantments",
    volume: 70,
    content: {
      intro: "D'après le wiki, l'arbalète accepte : Raccommodage, Solidité III, Charge Rapide III (tous combinables), puis Perforation IV ou Tir Multiple (mutuellement exclusifs). Ces enchantements transforment l'arbalète en arme redoutable.",
      sections: [
        { heading: "Tir Multiple", content: "Tir Multiple (Multishot) tire 3 projectiles en éventail au lieu d'un seul, mais ne consomme qu'une seule flèche. Niveau maximum : I. C'est dévastateur contre les groupes de mobs. Seul le projectile central peut être récupéré. Mutuellement exclusif avec Perforation." },
        { heading: "Perforation IV", content: "Perforation (Piercing) permet à l'arbalète de transpercer plusieurs entités avec une flèche. Au niveau IV, une flèche traverse 5 entités alignées. C'est excellent contre les hordes de zombies ou en embuscade. Mutuellement exclusif avec Tir Multiple." },
        { heading: "Charge Rapide III", content: "Charge Rapide (Quick Charge) augmente la vitesse de rechargement de l'arbalète. Au niveau III, le chargement passe de 1,25 seconde à environ 0,5 seconde. C'est indispensable car le défaut majeur de l'arbalète est son temps de rechargement. Compatible avec tous les autres enchantements." }
      ],
      tips: [
        "Charge Rapide III est l'enchantement prioritaire pour l'arbalète",
        "Tir Multiple (Multishot) vs Perforation (Piercing) : groupes vs lignes",
        "L'arbalète peut tirer des feux d'artifice pour des dégâts de zone",
        "Tir Multiple + feux d'artifice = triple explosion (ne consomme qu'une fusée)"
      ],
      faq: [
        { question: "Arbalète ou arc ?", answer: "L'arc a un DPS supérieur grâce au tir continu. L'arbalète excelle en dégâts par tir et en mobilité (pré-chargement possible). Les enchantements sont aussi très différents : l'arc a Puissance V et Flamme, l'arbalète a Tir Multiple et Perforation." },
        { question: "Tir Multiple avec les feux d'artifice fonctionne-t-il ?", answer: "Oui, Tir Multiple tire 3 feux d'artifice mais n'en consomme qu'un seul. Les trois explosent à l'impact, triplant les dégâts de zone. C'est la combinaison la plus puissante de l'arbalète." }
      ],
      relatedSlugs: ["charge-rapide", "enchantement-arc", "flamme", "infinite", "liste-enchantements"]
    }
  },
  {
    slug: "protection",
    keyword: "protection enchantement minecraft",
    title: "Enchantement Protection Minecraft : Guide",
    h1: "Enchantement Protection dans Minecraft",
    metaDescription: "L'enchantement Protection Minecraft réduit tous les dégâts. Niveaux, types de protection et configuration optimale pour l'armure.",
    category: "enchantments",
    volume: 170,
    content: {
      intro: "Protection (Protection) est l'enchantement d'armure le plus polyvalent de Minecraft. Il réduit les dommages reçus de tous types. Niveau maximum : IV. Ce n'est pas un enchantement de trésor. Mutuellement exclusif avec Protection contre le Feu, les Projectiles et les Explosions sur chaque pièce.",
      sections: [
        { heading: "Fonctionnement", content: "Chaque niveau de Protection réduit les dégâts de 4%. Au niveau IV, c'est 16% par pièce d'armure. Avec Protection IV sur les 4 pièces, vous réduisez tous les dégâts de 64%. La réduction des enchantements s'applique après la réduction de base de l'armure elle-même (points d'armure et résistance)." },
        { heading: "Protection vs protections spécifiques", content: "Les 4 types sont mutuellement exclusifs sur chaque pièce : Protection IV, Protection contre le Feu IV, Protection contre les Projectiles IV, Protection contre les Explosions IV. Les protections spécifiques offrent 8% par niveau pour leur type (vs 4% pour Protection). Mais Protection IV est universelle et réduit TOUS les types de dégâts." },
        { heading: "Maximum de protection", content: "La réduction totale des enchantements de protection est plafonnée à 80%. Avec Protection IV sur 4 pièces (64%), vous êtes proche du plafond. Chute Amortie IV ajoute 48% spécifiquement pour les chutes, ce qui avec Protection IV (64%) atteint le plafond de 80% pour les dégâts de chute." }
      ],
      tips: [
        "Protection IV sur les 4 pièces = 64% de réduction de tous les dégâts",
        "Mutuellement exclusif avec les 3 autres types de protection sur chaque pièce",
        "Le plafond de réduction des enchantements de protection est de 80%",
        "Se cumule avec Chute Amortie pour les dégâts de chute"
      ],
      faq: [
        { question: "Peut-on mixer Protection et Protection contre le Feu ?", answer: "Pas sur la même pièce, ils sont mutuellement exclusifs. Mais vous pouvez mettre Protection IV sur le casque et Protection contre le Feu IV sur le plastron par exemple, même si c'est rarement optimal." },
        { question: "Protection réduit-elle les dégâts de chute ?", answer: "Oui, Protection réduit TOUS les types de dégâts, y compris les chutes. Protection IV sur 4 pièces (64%) + Chute Amortie IV (48%) = 80% de réduction des dégâts de chute (plafond atteint)." }
      ],
      relatedSlugs: ["enchantement-armure", "chute-amortie", "enchantement-bottes", "liste-enchantements", "affinite-aquatique"]
    }
  },
  {
    slug: "fortune",
    keyword: "fortune enchantement minecraft",
    title: "Enchantement Fortune Minecraft : Guide",
    h1: "Enchantement Fortune dans Minecraft",
    metaDescription: "L'enchantement Fortune Minecraft multiplie vos drops de minerai. Fortune III triple les diamants. Guide complet de l'enchantement.",
    category: "enchantments",
    volume: 170,
    content: {
      intro: "Fortune (Fortune) est un enchantement qui augmente les ressources obtenues par le minage. Niveau maximum : III. Ce n'est pas un enchantement de trésor. S'applique aux pioches, pelles, haches et houes. Mutuellement exclusif avec Toucher de Soie.",
      sections: [
        { heading: "Blocs affectés", content: "Fortune augmente les drops de : diamant, émeraude, charbon, lapis-lazuli, redstone, quartz du Nether, fer brut, cuivre brut, or brut, améthyste et graines de blé/betterave. S'applique aux pioches, pelles, haches et houes. C'est un enchantement extrêmement polyvalent qui affecte presque tous les minerais et certains blocs." },
        { heading: "Fortune III en détail", content: "Fortune III donne en moyenne 2,2 diamants par minerai (au lieu de 1). Le maximum possible est 4 diamants par bloc. Pour le charbon et le lapis, l'augmentation est encore plus spectaculaire. L'enchantabilité du matériau affecte les chances d'obtenir Fortune III à la table : or (22) est le meilleur, diamant (10) est moyen, Netherite (15) est bon." },
        { heading: "Stratégie Fortune + Toucher de Soie", content: "Les deux sont mutuellement exclusifs. La stratégie optimale est de miner avec Toucher de Soie pour stocker les blocs de minerai, puis de les casser chez vous avec Fortune III. Cela garantit que chaque minerai bénéficie de Fortune III. Cette technique fonctionne sur les pioches, pelles et haches." }
      ],
      tips: [
        "Ne minez JAMAIS de diamants sans Fortune III si possible",
        "Fortune III donne en moyenne 2,2 diamants par minerai (max 4)",
        "Mutuellement exclusif avec Toucher de Soie",
        "S'applique aux pioches, pelles, haches et houes"
      ],
      faq: [
        { question: "Fortune fonctionne-t-elle sur le fer depuis la 1.17 ?", answer: "Oui, depuis la 1.17, le minerai de fer lâche du fer brut et Fortune augmente la quantité. C'est un changement majeur qui rend Fortune encore plus indispensable pour tous les minerais." },
        { question: "Fortune et Butin sont-ils le même enchantement ?", answer: "Non, Fortune augmente les ressources obtenues par le minage (blocs), Butin (Looting) augmente le butin que les créatures lâchent à leur mort. Ce sont deux enchantements séparés." }
      ],
      relatedSlugs: ["toucher-de-soie", "enchantement-pioche", "minage-optimise", "liste-enchantements", "meilleur-enchantement-epee"]
    }
  },
  {
    slug: "furtivite-rapide",
    keyword: "furtivité rapide minecraft",
    title: "Furtivité Rapide Minecraft : Enchantement Guide",
    h1: "Enchantement Furtivité Rapide dans Minecraft",
    metaDescription: "L'enchantement Furtivité Rapide Minecraft accélère votre accroupissement. Exclusif aux anciennes cités du Deep Dark. Guide complet.",
    category: "enchantments",
    volume: 320,
    content: {
      intro: "Furtivité Rapide (Swift Sneak) est un enchantement de trésor de jambières qui augmente la vitesse de déplacement du joueur lorsqu'il s'accroupit. Niveau maximum : III. C'est un enchantement de trésor exclusif aux coffres des anciennes cités du Deep Dark.",
      sections: [
        { heading: "Effet et niveaux", content: "Furtivité Rapide augmente la vitesse d'accroupissement. Au niveau III, vous vous accroupissez à 75% de la vitesse de marche normale (au lieu de 30% sans enchantement). C'est une différence énorme qui rend le Deep Dark beaucoup plus gérable et la construction en hauteur plus confortable." },
        { heading: "Obtention exclusive", content: "D'après le wiki, c'est un enchantement de trésor. Il ne peut être trouvé QUE dans les coffres des anciennes cités du Deep Dark. Il n'apparaît pas à la table d'enchantement, ni chez les villageois, ni en pêchant. C'est l'un des enchantements les plus rares du jeu." },
        { heading: "Utilisation au-delà du Deep Dark", content: "Furtivité Rapide est aussi utile en PvP pour se déplacer discrètement, en construction pour placer des blocs en étant accroupi au bord des falaises, et en exploration générale. D'après le wiki, il est compatible avec tous les autres enchantements de jambières : Protection IV, Épines III, Solidité III et Raccommodage." }
      ],
      tips: [
        "Enchantement de trésor EXCLUSIF aux coffres des anciennes cités",
        "Indispensable pour explorer le Deep Dark sans réveiller le Warden",
        "S'applique uniquement aux jambières",
        "Compatible avec Protection IV, Épines III, Solidité III et Raccommodage"
      ],
      faq: [
        { question: "Peut-on obtenir Furtivité Rapide sans aller dans le Deep Dark ?", answer: "Non, c'est un enchantement de trésor exclusif aux coffres des anciennes cités. Il n'apparaît ni à la table d'enchantement, ni chez les villageois, ni en pêchant. L'exploration du Deep Dark est obligatoire." },
        { question: "Furtivité Rapide est-il compatible avec Protection ?", answer: "Oui, d'après le wiki, les jambières acceptent Raccommodage, Solidité III, Épines III et Furtivité Rapide III en combinaison libre, plus un type de protection (Protection IV, Feu IV, Projectiles IV ou Explosions IV)." }
      ],
      relatedSlugs: ["liste-enchantements", "enchantement-armure", "enchantement-bottes", "protection", "chute-amortie"]
    }
  },
  {
    slug: "aura-de-feu",
    keyword: "aura de feu minecraft",
    title: "Aura de Feu Minecraft : Enchantement Guide",
    h1: "Enchantement Aura de Feu dans Minecraft",
    metaDescription: "L'enchantement Aura de Feu Minecraft enflamme les mobs au corps à corps. Viande cuite automatiquement et dégâts bonus de feu.",
    category: "enchantments",
    volume: 320,
    content: {
      intro: "Aura de Feu (Fire Aspect) est un enchantement qui met la cible en feu au corps à corps. Niveau maximum : II. Ce n'est pas un enchantement de trésor. D'après le wiki, il s'applique aux épées, à la masse et à la lance. Les animaux tués par le feu lâchent de la viande cuite.",
      sections: [
        { heading: "Niveaux et dégâts", content: "Aura de Feu a 2 niveaux. Le niveau I inflige 3 secondes de feu (environ 2,5 dégâts de feu). Le niveau II inflige 7 secondes de feu (environ 5 dégâts de feu). Les dégâts de feu s'ajoutent aux dégâts de base de l'arme. Compatible avec les épées, la masse et la lance d'après le wiki." },
        { heading: "Avantages en survie", content: "Aura de Feu est excellent pour la chasse : les vaches, moutons et poulets lâchent de la viande cuite sans avoir besoin d'un four. Sur la masse, Aura de Feu II se combine avec Densité V ou Brèche IV pour encore plus de dégâts. C'est un enchantement polyvalent pour la survie." },
        { heading: "Inconvénients", content: "Évitez Aura de Feu dans le Nether (la plupart des mobs sont résistants au feu). Contre les Endermen, le feu les téléporte aléatoirement, rendant le combat frustrant. En PvP, le joueur adverse peut boire du lait ou avoir une potion de résistance au feu." }
      ],
      tips: [
        "Excellent pour la chasse, la viande cuite tombe directement",
        "S'applique aux épées, à la masse et à la lance",
        "Évitez dans le Nether, la plupart des mobs résistent au feu",
        "Les Endermen en feu se téléportent aléatoirement"
      ],
      faq: [
        { question: "Aura de Feu fonctionne-t-elle sous la pluie ?", answer: "Les mobs sont bien enflammés mais la pluie éteint rapidement le feu, réduisant considérablement les dégâts bonus. L'enchantement est moins efficace sous la pluie." },
        { question: "Peut-on mettre Aura de Feu sur la masse ?", answer: "Oui, d'après le wiki, Aura de Feu II est compatible avec la masse. Il se combine avec les enchantements exclusifs comme Densité V et Rafale de Vent III." }
      ],
      relatedSlugs: ["meilleur-enchantement-epee", "enchantement-epee", "flamme", "chatiment", "liste-enchantements"]
    }
  },
  {
    slug: "charge-rapide",
    keyword: "charge rapide minecraft",
    title: "Charge Rapide Minecraft : Enchantement Guide",
    h1: "Enchantement Charge Rapide dans Minecraft",
    metaDescription: "L'enchantement Charge Rapide Minecraft accélère le rechargement de l'arbalète. Niveaux, impact et configuration optimale.",
    category: "enchantments",
    volume: 140,
    content: {
      intro: "Charge Rapide (Quick Charge) augmente la vitesse de rechargement de l'arbalète. Niveau maximum : III. Ce n'est pas un enchantement de trésor. C'est l'enchantement le plus important pour rendre l'arbalète compétitive face à l'arc.",
      sections: [
        { heading: "Niveaux et vitesse", content: "Chaque niveau réduit le temps de chargement de 0,25 seconde. L'arbalète met 1,25 seconde à charger de base. Au niveau III, le chargement est d'environ 0,5 seconde. D'après le wiki, Charge Rapide est compatible avec tous les autres enchantements de l'arbalète (Tir Multiple, Perforation, Solidité, Raccommodage)." },
        { heading: "Obtention", content: "Charge Rapide s'obtient à la table d'enchantement, via les livres enchantés des coffres, les pillards (qui portent parfois des arbalètes enchantées) et les villageois bibliothécaires. Ce n'est pas un enchantement de trésor, il est relativement commun." },
        { heading: "Impact sur le gameplay", content: "Sans Charge Rapide, l'arbalète est trop lente pour le combat rapproché. Avec Charge Rapide III, elle devient viable avec Tir Multiple (3 projectiles) ou Perforation IV (traverse 5 entités). L'arbalète peut aussi tirer des feux d'artifice pour des dégâts de zone." }
      ],
      tips: [
        "Charge Rapide III est indispensable, ne jouez jamais l'arbalète sans",
        "Pré-chargez l'arbalète avant le combat pour un premier tir instantané",
        "Les pillards lâchent parfois des arbalètes avec Charge Rapide",
        "Combinez avec Tir Multiple pour 3 projectiles quasi-instantanés"
      ],
      faq: [
        { question: "Charge Rapide va-t-elle au-delà du niveau III ?", answer: "En vanilla, Charge Rapide III est le maximum d'après le wiki. Des niveaux supérieurs existent via des commandes mais le niveau III est suffisant pour un chargement presque instantané (0,5 seconde)." },
        { question: "Charge Rapide fonctionne-t-elle avec les feux d'artifice ?", answer: "Oui, Charge Rapide réduit aussi le temps de chargement des feux d'artifice dans l'arbalète. Combiné avec Tir Multiple, vous tirez 3 fusées quasi-instantanément." }
      ],
      relatedSlugs: ["enchantement-arbalete", "enchantement-arc", "flamme", "infinite", "liste-enchantements"]
    }
  },
  {
    slug: "minage-optimise",
    keyword: "minage optimisé minecraft",
    title: "Minage Optimisé Minecraft : Enchantement Guide",
    h1: "Enchantement Minage Optimisé dans Minecraft",
    metaDescription: "L'enchantement Minage Optimisé Minecraft mine 3x3 blocs d'un seul coup. Nouveau en 1.21, guide complet et obtention.",
    category: "enchantments",
    volume: 170,
    content: {
      intro: "Note : Minage Optimisé n'apparaît pas dans la liste officielle des enchantements du wiki Minecraft français. Il pourrait s'agir d'un mod ou d'une fonctionnalité non confirmée. Les enchantements de pioche confirmés par le wiki sont : Efficacité V, Fortune III, Toucher de Soie, Solidité III et Raccommodage.",
      sections: [
        { heading: "Enchantements de pioche confirmés", content: "D'après le wiki officiel, la pioche accepte : Raccommodage, Solidité III, Efficacité V (tous combinables), et Fortune III ou Toucher de Soie (mutuellement exclusifs). Ces enchantements sont les seuls disponibles en survie vanilla pour les pioches, pelles et houes." },
        { heading: "Efficacité V : l'alternative au minage 3x3", content: "Efficacité V est l'enchantement qui accélère le plus le minage. Combiné avec un beacon Hâte II, la plupart des blocs se cassent instantanément. En Netherite (enchantabilité 15), les chances d'obtenir Efficacité V à la table sont bonnes. C'est la meilleure option pour le minage rapide en vanilla." },
        { heading: "Combinaison optimale pour le minage", content: "Pour le minage en masse en vanilla : pioche Netherite + Efficacité V + Fortune III + Solidité III + Raccommodage. Avec un beacon Hâte II, vous minez instantanément. Gardez une deuxième pioche avec Toucher de Soie pour les blocs spéciaux (verre, pierre, minerais à stocker)." }
      ],
      tips: [
        "Efficacité V + beacon Hâte II = minage instantané en vanilla",
        "Les enchantements confirmés pour la pioche sont : Efficacité V, Fortune III, Toucher de Soie, Solidité III, Raccommodage",
        "Fortune III et Toucher de Soie sont mutuellement exclusifs",
        "Raccommodage + Solidité III rendent la pioche Netherite quasi-éternelle (durabilité 2031)"
      ],
      faq: [
        { question: "Minage Optimisé existe-t-il en vanilla ?", answer: "Minage Optimisé n'apparaît pas dans la liste officielle des enchantements du wiki Minecraft. Les enchantements de pioche en vanilla sont : Efficacité V, Fortune III, Toucher de Soie, Solidité III et Raccommodage." },
        { question: "Comment miner le plus rapidement possible ?", answer: "Pioche Netherite + Efficacité V + beacon Hâte II. Cette combinaison permet de casser la pierre instantanément. Ajoutez Fortune III pour maximiser les drops ou Toucher de Soie pour les blocs spéciaux." }
      ],
      relatedSlugs: ["enchantement-pioche", "fortune", "toucher-de-soie", "liste-enchantements", "densite"]
    }
  },
  {
    slug: "rafale-de-vent",
    keyword: "rafale de vent minecraft",
    title: "Rafale de Vent Minecraft : Enchantement Guide",
    h1: "Enchantement Rafale de Vent dans Minecraft",
    metaDescription: "L'enchantement Rafale de Vent Minecraft projette les ennemis avec la masse. Contrôle de foule et combos aériens dans ce guide.",
    category: "enchantments",
    volume: 170,
    content: {
      intro: "Rafale de Vent (Wind Burst) est un enchantement de trésor exclusif à la masse dans Minecraft 1.21. D'après le wiki, il émet une rafale de vent (comme celle d'une charge de vent) lors d'une attaque fracassante sur une entité, propulsant l'attaquant vers le haut. Niveau maximum : III.",
      sections: [
        { heading: "Fonctionnement", content: "D'après le wiki, lors d'une attaque fracassante de masse sur une entité, Rafale de Vent émet une rafale de vent similaire à celle d'une charge de vent, propulsant l'attaquant vers le haut. Cela permet d'enchaîner les attaques fracassantes sans toucher le sol, créant des combos aériens spectaculaires." },
        { heading: "Niveaux et force", content: "Rafale de Vent a 3 niveaux. La force de propulsion augmente par niveau d'après le wiki. Au niveau III, la propulsion est suffisante pour enchaîner 3-4 attaques fracassantes consécutives sur un groupe de mobs. C'est un enchantement de trésor, introuvable à la table d'enchantement." },
        { heading: "Rafale de Vent et Densité", content: "D'après le wiki, Rafale de Vent III est dans la colonne 'toute combinaison' de la masse et est compatible avec Densité, Brèche, Châtiment ou Fléau (qui sont mutuellement exclusifs entre eux). Vous pouvez donc avoir Rafale de Vent III + Densité V sur la même masse pour des dégâts maximaux ET des combos aériens." }
      ],
      tips: [
        "Enchantement de trésor : introuvable à la table d'enchantement",
        "Compatible avec Densité V pour des dégâts + combos aériens",
        "Permet d'enchaîner les attaques fracassantes sans toucher le sol",
        "La propulsion vers le haut annule vos dégâts de chute"
      ],
      faq: [
        { question: "Peut-on voler indéfiniment avec Rafale de Vent ?", answer: "En théorie, si des entités sont présentes, vous pouvez enchaîner les attaques fracassantes. En pratique, il faut retomber sur une entité à chaque fois. C'est situationnel mais très puissant contre les groupes de mobs." },
        { question: "Rafale de Vent est-il compatible avec Densité ?", answer: "Oui, d'après le wiki, Rafale de Vent III est compatible avec tous les autres enchantements de la masse, y compris Densité V, Brèche IV, Aura de Feu II, Solidité III et Raccommodage." }
      ],
      relatedSlugs: ["densite", "enchantement-masse", "meilleur-enchantement-epee", "liste-enchantements", "chute-amortie"]
    }
  },
  {
    slug: "chance-de-la-mer",
    keyword: "chance de la mer minecraft",
    title: "Chance de la Mer Minecraft : Enchantement Guide",
    h1: "Enchantement Chance de la Mer dans Minecraft",
    metaDescription: "L'enchantement Chance de la Mer Minecraft augmente les trésors de pêche. Plus de livres enchantés et moins de déchets.",
    category: "enchantments",
    volume: 260,
    content: {
      intro: "Chance de la Mer (Luck of the Sea) est un enchantement de canne à pêche qui augmente la chance d'obtenir des trésors et réduit celle d'obtenir des déchets en pêchant. Niveau maximum : III. Ce n'est pas un enchantement de trésor.",
      sections: [
        { heading: "Effet par niveau", content: "D'après le wiki, Chance de la Mer augmente la chance d'obtenir des trésors et réduit les déchets. Au niveau III, le taux de trésors passe d'environ 5% à 11,3%. Les déchets sont quasi-éliminés. C'est l'enchantement le plus important de la canne à pêche avec Appât." },
        { heading: "Trésors obtenables", content: "Les trésors de pêche incluent : livres enchantés (avec n'importe quel enchantement, y compris les enchantements de trésor comme Raccommodage), arcs enchantés, cannes à pêche enchantées, selles, étiquettes (name tags) et coquilles de nautile. Les livres enchantés sont les plus précieux." },
        { heading: "Combinaison optimale", content: "D'après le wiki, la canne à pêche accepte : Raccommodage, Solidité III, Appât III et Chance de la Mer III, tous librement combinables. Chance de la Mer III + Appât III est le duo indispensable. Appât réduit le temps d'attente, Chance augmente les trésors. Ajoutez Solidité III et Raccommodage pour une canne éternelle." }
      ],
      tips: [
        "Chance de la Mer III + Appât III = trésors environ toutes les 5-6 minutes",
        "Les livres enchantés pêchés peuvent contenir Raccommodage ou d'autres trésors",
        "Pêchez à ciel ouvert avec la ligne exposée au ciel",
        "La pluie réduit le temps d'attente d'environ 20%"
      ],
      faq: [
        { question: "Peut-on pêcher des enchantements de trésor ?", answer: "Oui, les livres enchantés pêchés peuvent contenir n'importe quel enchantement, y compris les enchantements de trésor comme Raccommodage, Agilité des Âmes, Furtivité Rapide et les malédictions." },
        { question: "Chance de la Mer fonctionne-t-elle dans toutes les eaux ?", answer: "Oui, l'enchantement fonctionne dans tous les plans d'eau d'au moins 1 bloc de profondeur. La ligne doit être à l'air libre (pas sous un toit) pour pouvoir obtenir des trésors." }
      ],
      relatedSlugs: ["enchantement-canne-a-peche", "fortune", "liste-enchantements", "toucher-de-soie", "enchantement-arc"]
    }
  },
  {
    slug: "liste-enchantements",
    keyword: "liste enchantement minecraft",
    title: "Liste de Tous les Enchantements Minecraft",
    h1: "Liste Complète des Enchantements Minecraft",
    metaDescription: "Liste complète de tous les enchantements Minecraft classés par catégorie. Armes, armures, outils et enchantements spéciaux.",
    category: "enchantments",
    volume: 260,
    content: {
      intro: "D'après le wiki Minecraft, le jeu compte plus de 40 enchantements applicables aux armes, armures et outils. Les enchantements de trésor (Raccommodage, Furtivité Rapide, Agilité des Âmes, Semelles Givrantes, Rafale de Vent, malédictions) ne s'obtiennent pas à la table d'enchantement.",
      sections: [
        { heading: "Enchantements d'épée et de masse", content: "Épée : Tranchant V, Châtiment V, Fléau V (exclusifs), Aura de Feu II, Butin III, Recul II, Affilage III (Java), Solidité III, Raccommodage. Masse : Densité V, Brèche IV, Châtiment V, Fléau V (exclusifs), Rafale de Vent III (trésor), Aura de Feu II, Solidité III, Raccommodage. Lance : Tranchant V, Châtiment V, Fléau V (exclusifs), Aura de Feu II, Butin III, Recul II, Élan III, Solidité III, Raccommodage." },
        { heading: "Enchantements d'arc et arbalète", content: "Arc : Puissance V, Frappe II (recul), Flamme I, Solidité III, et Infinité I ou Raccommodage (exclusifs). Arbalète : Charge Rapide III, Solidité III, Raccommodage, et Tir Multiple I ou Perforation IV (exclusifs)." },
        { heading: "Enchantements d'armure", content: "Toutes pièces : Protection IV / Feu IV / Projectiles IV / Explosions IV (exclusifs entre eux), Épines III, Solidité III, Raccommodage. Casque : + Apnée III, Affinité Aquatique I. Jambières : + Furtivité Rapide III (trésor). Bottes : + Chute Amortie IV, Agilité des Âmes III (trésor), et Agilité Aquatique III ou Semelles Givrantes II (exclusifs)." },
        { heading: "Enchantements d'outils", content: "Pioche/Pelle/Houe/Hache : Efficacité V, Solidité III, Raccommodage, et Fortune III ou Toucher de Soie I (exclusifs). La hache accepte aussi les enchantements de dégâts (Tranchant V, Châtiment V, Fléau V). Trident : Empalement V, Solidité III, Raccommodage, Canalisation I, et Loyauté III ou Impulsion III (exclusifs)." },
        { heading: "Enchantements de trésor et malédictions", content: "Les enchantements de trésor ne s'obtiennent PAS à la table d'enchantement : Raccommodage I (réparation par XP), Furtivité Rapide III (anciennes cités uniquement), Agilité des Âmes III, Semelles Givrantes II, Rafale de Vent III, Malédiction du Lien Éternel I, Malédiction de Disparition I. La meule ne peut pas retirer les malédictions." }
      ],
      tips: [
        "Raccommodage est un enchantement de trésor : obtenu via coffres, pêche ou villageois",
        "Protection IV sur chaque pièce d'armure = 64% de réduction (plafond 80%)",
        "Fortune III donne en moyenne 2,2 diamants par minerai (max 4)",
        "Les malédictions ne peuvent jamais être retirées par la meule",
        "L'enclume permet de combiner des enchantements via des livres enchantés"
      ],
      faq: [
        { question: "Combien d'enchantements Minecraft a-t-il au total ?", answer: "D'après le wiki, Minecraft possède plus de 40 enchantements distincts incluant Affilage (Java), Densité, Brèche, Élan et Rafale de Vent ajoutés en 1.21. Le nombre varie entre Java et Bedrock Edition." },
        { question: "Quels sont les enchantements de trésor ?", answer: "Les enchantements de trésor (introuvables à la table d'enchantement) sont : Raccommodage, Furtivité Rapide, Agilité des Âmes, Semelles Givrantes, Rafale de Vent, Malédiction du Lien Éternel et Malédiction de Disparition." }
      ],
      relatedSlugs: ["meilleur-enchantement-epee", "enchantement-pioche", "enchantement-armure", "fortune", "protection"]
    }
  },
  {
    slug: "canalisation",
    keyword: "enchantement canalisation minecraft",
    title: "Enchantement Canalisation Minecraft : Guide",
    h1: "Enchantement Canalisation dans Minecraft",
    metaDescription: "L'enchantement Canalisation Minecraft invoque la foudre avec votre trident pendant les orages. Fonctionnement et utilisations.",
    category: "enchantments",
    volume: 70,
    content: {
      intro: "Canalisation (Channeling) est un enchantement de trident qui fait tomber la foudre sur la créature ou le joueur ciblé pendant un orage. Niveau maximum : I. Ce n'est pas un enchantement de trésor. Compatible avec Loyauté mais pas avec Impulsion.",
      sections: [
        { heading: "Fonctionnement", content: "D'après le wiki, Canalisation fait tomber la foudre sur la créature ou le joueur ciblé quand le trident les touche pendant un orage. Niveau I uniquement. La cible doit être à ciel ouvert (pas sous un toit) et il doit y avoir un orage. Canalisation et Loyauté sont compatibles d'après le wiki, mais ni l'un ni l'autre ne peut être combiné avec Impulsion." },
        { heading: "Transformations de mobs", content: "La foudre de Canalisation peut transformer : les cochons en zombified piglins, les villageois en sorcières, les creepers en creepers chargés (explosion environ 2x plus puissante) et les vaches champignon rouges en brunes (et vice versa). C'est le seul moyen fiable de créer des creepers chargés en survie." },
        { heading: "Creepers chargés et têtes de mobs", content: "Les creepers chargés sont l'utilisation la plus utile de Canalisation. Quand un creeper chargé tue un zombie, squelette ou creeper, le mob tué lâche sa tête (bloc décoratif). C'est le seul moyen d'obtenir des têtes de mob en survie vanilla. Trident idéal : Canalisation + Loyauté III + Empalement V + Solidité III + Raccommodage." }
      ],
      tips: [
        "Niveau I uniquement, ne fonctionne que pendant les orages à ciel ouvert",
        "Compatible avec Loyauté III, incompatible avec Impulsion (Riptide)",
        "Transforme les creepers en creepers chargés pour obtenir des têtes de mobs",
        "Les cochons frappés deviennent des zombified piglins, les villageois des sorcières"
      ],
      faq: [
        { question: "Peut-on invoquer la foudre par temps clair ?", answer: "Non, Canalisation nécessite absolument un orage. Vous pouvez utiliser /weather thunder pour forcer un orage en mode créatif ou avec les commandes activées." },
        { question: "Canalisation est-il compatible avec Loyauté ?", answer: "Oui, d'après le wiki, Canalisation et Loyauté peuvent être utilisées ensemble. Cela permet de lancer le trident, invoquer la foudre et le récupérer automatiquement. Seul Impulsion (Riptide) est incompatible." }
      ],
      relatedSlugs: ["loyaute", "liste-enchantements", "enchantement-epee", "flamme", "aura-de-feu"]
    }
  },
  {
    slug: "enchantement-arc",
    keyword: "arc minecraft enchantement",
    title: "Enchantements Arc Minecraft : Guide Complet",
    h1: "Tous les Enchantements d'Arc dans Minecraft",
    metaDescription: "Guide complet des enchantements d'arc Minecraft. Puissance V, Flamme, Infinité et la configuration optimale pour votre arc.",
    category: "enchantments",
    volume: 140,
    content: {
      intro: "D'après le wiki, l'arc accepte : Puissance V, Frappe II (recul des flèches), Flamme I, Solidité III (tous combinables), et Infinité I ou Raccommodage (mutuellement exclusifs). Un arc bien enchanté peut éliminer la plupart des mobs en un seul tir.",
      sections: [
        { heading: "L'arc parfait", content: "D'après le tableau du wiki, l'arc a : Solidité III, Puissance V, Frappe II, Flamme I en combinaison libre, puis Infinité ou Raccommodage (mutuellement exclusifs). L'arc parfait : Puissance V + Flamme I + Frappe II + Solidité III + Raccommodage (ou Infinité si vous préférez le confort)." },
        { heading: "Puissance V", content: "Puissance (Power) augmente les dégâts infligés par les flèches. Au niveau V, un tir pleinement chargé inflige environ 23 dégâts (11,5 coeurs), tuant la plupart des mobs en un seul tir. C'est l'enchantement prioritaire de l'arc. Niveau maximum : V." },
        { heading: "Frappe II", content: "Frappe (Punch, à ne pas confondre avec Recul/Knockback pour la mêlée) augmente le recul de la cible lorsqu'elle reçoit une flèche. Niveau maximum : II. C'est utile pour maintenir la distance avec les mobs de mêlée et pour pousser les mobs dans des pièges ou dans le vide." }
      ],
      tips: [
        "Puissance V est l'enchantement prioritaire pour l'arc",
        "Frappe II (Punch) est le recul de l'arc, distinct de Recul (Knockback) pour les épées",
        "Infinité et Raccommodage sont mutuellement exclusifs sur l'arc uniquement",
        "Flamme I cuit automatiquement la viande des animaux tués par les flèches"
      ],
      faq: [
        { question: "Quel est le DPS optimal de l'arc ?", answer: "Un arc Puissance V pleinement chargé inflige environ 23 dégâts. Avec Flamme, ajoutez 4 dégâts de feu (5 secondes). Le temps de charge complet est d'environ 1 seconde." },
        { question: "L'arc ou l'arbalète en PvP ?", answer: "L'arc a un meilleur DPS grâce au tir continu et à Puissance V. L'arbalète permet de pré-charger et offre Tir Multiple (3 projectiles) ou Perforation IV (traverse les entités). En duel, l'arc est généralement supérieur." }
      ],
      relatedSlugs: ["flamme", "infinite", "enchantement-arbalete", "meilleur-enchantement-epee", "liste-enchantements"]
    }
  },
  {
    slug: "affilage",
    keyword: "affilage minecraft c est quoi",
    title: "Affilage Minecraft : Explication et Guide",
    h1: "Enchantement Affilage dans Minecraft",
    metaDescription: "Découvrez l'enchantement Affilage Minecraft (Sharpness). Augmentation des dégâts, niveaux et application sur les épées et haches.",
    category: "enchantments",
    volume: 210,
    content: {
      intro: "Attention : d'après le wiki, Affilage (Sweeping Edge) et Tranchant (Sharpness) sont DEUX enchantements distincts. Affilage (Java Edition uniquement) augmente les dégâts de l'effet de balayage infligé aux cibles voisines. Niveau maximum : III. Tranchant augmente les dégâts directs.",
      sections: [
        { heading: "Affilage (Sweeping Edge) - Java uniquement", content: "D'après le wiki, Affilage (Sweeping Edge) est un enchantement exclusif à Java Edition qui augmente les dégâts de l'effet de balayage infligé aux cibles voisines. Niveau maximum : III. Ce n'est PAS le même enchantement que Tranchant (Sharpness). En Bedrock Edition, cet enchantement n'existe pas." },
        { heading: "Tranchant (Sharpness)", content: "Tranchant (Sharpness) est l'enchantement qui augmente les dégâts infligés directs. Niveau maximum : V. Au niveau V, +3 dégâts par coup contre tous les mobs et joueurs. Mutuellement exclusif avec Châtiment V et Fléau des Arthropodes V. Tranchant s'applique aux épées, haches (via enclume), la masse et la lance." },
        { heading: "Combinaison Affilage + Tranchant", content: "D'après le wiki, sur une épée Java Edition, vous pouvez avoir Affilage III ET Tranchant V car ce sont deux enchantements distincts. L'épée parfaite Java : Tranchant V + Affilage III + Butin III + Aura de Feu II + Recul II + Solidité III + Raccommodage. En Bedrock, Affilage n'existe pas." }
      ],
      tips: [
        "Affilage (Sweeping Edge) est exclusif à Java Edition",
        "Affilage et Tranchant sont DEUX enchantements différents et combinables",
        "Affilage III augmente les dégâts de balayage aux cibles voisines",
        "Tranchant V ajoute 3 dégâts directs contre tous les mobs"
      ],
      faq: [
        { question: "Affilage et Tranchant sont-ils le même enchantement ?", answer: "Non ! D'après le wiki, Affilage (Sweeping Edge) augmente les dégâts de balayage (niveau max III, Java uniquement), tandis que Tranchant (Sharpness) augmente les dégâts directs (niveau max V). Ce sont deux enchantements distincts et combinables." },
        { question: "Hache + Tranchant V ou Épée + Tranchant V ?", answer: "En Java Edition PvP, la hache fait plus de dégâts par coup mais est plus lente. L'épée a un meilleur DPS grâce à sa vitesse et l'effet de balayage avec Affilage III. En Bedrock, l'épée est toujours supérieure." }
      ],
      relatedSlugs: ["meilleur-enchantement-epee", "enchantement-epee", "chatiment", "aura-de-feu", "liste-enchantements"]
    }
  },
  {
    slug: "enchantement-epee",
    keyword: "enchantement épée minecraft",
    title: "Enchantements Épée Minecraft : Guide Complet",
    h1: "Tous les Enchantements d'Épée dans Minecraft",
    metaDescription: "Guide complet de tous les enchantements d'épée Minecraft. Tranchant, Butin, Aura de Feu et les meilleures combinaisons.",
    category: "enchantments",
    volume: 260,
    content: {
      intro: "D'après le wiki, l'épée accepte : Tranchant V, Châtiment V ou Fléau V (exclusifs), Aura de Feu II, Butin III, Recul II, Affilage III (Java uniquement), Solidité III et Raccommodage. Voici la liste complète et les meilleures combinaisons.",
      sections: [
        { heading: "Enchantements de dégâts", content: "D'après le wiki : Tranchant V (Sharpness, +3 dégâts vs tous), Châtiment V (Smite, +12,5 vs morts-vivants), Fléau des Arthropodes V (Bane of Arthropods, +12,5 vs arthropodes). Ces trois sont mutuellement exclusifs. En Java Edition, Affilage III (Sweeping Edge) augmente les dégâts de balayage et est COMPATIBLE avec Tranchant." },
        { heading: "Enchantements utilitaires", content: "Butin III (Looting, augmente le butin des créatures), Aura de Feu II (Fire Aspect, met la cible en feu), Recul II (Knockback, repousse la cible), Solidité III (Unbreaking, durabilité x4), Raccommodage (Mending, enchantement de trésor, réparation par orbes d'XP). Tous sont librement combinables." },
        { heading: "L'épée ultime Java Edition", content: "Netherite + Tranchant V + Affilage III + Butin III + Aura de Feu II + Recul II + Solidité III + Raccommodage. Inflige 11 dégâts de base (8 de l'épée Netherite + 3 de Tranchant V) + dégâts de feu + dégâts de balayage améliorés. C'est le standard de fin de partie." },
        { heading: "Ordre d'enchantement optimal", content: "Pour minimiser le coût XP à l'enclume, combinez les livres par paires avant de les appliquer sur l'épée. L'enclume a une limite de 39 niveaux par opération. Combinez d'abord les livres entre eux (coût faible) puis appliquez le livre combiné final sur l'épée." }
      ],
      tips: [
        "Tranchant V est le choix polyvalent, Châtiment V est optimal contre le Wither",
        "Affilage III (Java) est distinct de Tranchant V et compatible avec lui",
        "Butin III est essentiel pour le farming de perles d'Ender et ressources rares",
        "Raccommodage est un enchantement de trésor : obtenez-le via villageois ou pêche"
      ],
      faq: [
        { question: "Combien coûte l'épée ultime en XP ?", answer: "Avec un ordre de combinaison optimal des livres, environ 25-35 niveaux au total. La limite de l'enclume est de 39 niveaux par opération. Combinez les livres entre eux d'abord pour minimiser le coût." },
        { question: "Épée en diamant ou en Netherite ?", answer: "La Netherite ajoute 1 dégât de base et plus de durabilité (2031 vs 1561 pour le diamant). Elle est aussi résistante à la lave et a une meilleure enchantabilité (15 vs 10). La Netherite est toujours supérieure." }
      ],
      relatedSlugs: ["meilleur-enchantement-epee", "affilage", "aura-de-feu", "chatiment", "liste-enchantements"]
    }
  }
];
