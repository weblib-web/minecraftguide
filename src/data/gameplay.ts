import type { PageData } from "./types";

export const gameplayPages: PageData[] = [
  {
    slug: "multijoueur",
    keyword: "comment jouer en multijoueur sur minecraft",
    title: "Multijoueur Minecraft : Guide Complet",
    h1: "Comment Jouer en Multijoueur sur Minecraft",
    metaDescription: "Apprenez a jouer en multijoueur sur Minecraft. Rejoindre un serveur, jouer en LAN, inviter des amis et configurer votre partie multijoueur.",
    category: "gameplay",
    volume: 320,
    content: {
      intro: "Le multijoueur est l'un des aspects les plus apprecies de Minecraft, permettant de partager l'aventure avec des amis ou des inconnus du monde entier. Que ce soit en LAN, sur un serveur prive ou un serveur public, plusieurs options s'offrent a vous. Voici comment configurer et rejoindre une partie multijoueur.",
      sections: [
        {
          heading: "Jouer en LAN (reseau local)",
          content: "Le moyen le plus simple de jouer en multijoueur est via le LAN. Ouvrez un monde solo, appuyez sur Echap, puis cliquez sur 'Ouvrir au LAN'. Choisissez le mode de jeu et activez ou non les cheats. Les autres joueurs sur le meme reseau Wi-Fi verront votre partie dans leur liste multijoueur. Cette methode est ideale pour jouer avec des amis physiquement proches."
        },
        {
          heading: "Rejoindre un serveur public",
          content: "Pour rejoindre un serveur, allez dans Multijoueur > Ajouter un serveur, puis entrez l'adresse IP du serveur. De nombreux serveurs francophones existent avec differents modes de jeu : survie, creatif, PvP, mini-jeux et plus. Verifiez que votre version de Minecraft correspond a celle du serveur."
        },
        {
          heading: "Creer son propre serveur",
          content: "Vous pouvez telecharger le logiciel serveur Minecraft depuis le site officiel et l'heberger sur votre ordinateur. Pour que des joueurs externes puissent se connecter, vous devrez configurer le transfert de port (port forwarding) sur votre routeur, generalement sur le port 25565. Des hebergeurs comme Aternos ou Minehut proposent aussi des serveurs gratuits."
        },
        {
          heading: "Minecraft Realms",
          content: "Minecraft Realms est le service officiel de Mojang pour heberger un serveur prive. Moyennant un abonnement mensuel, vous obtenez un serveur toujours en ligne pouvant accueillir jusqu'a 10 joueurs simultanement. C'est la solution la plus simple car aucune configuration technique n'est necessaire."
        }
      ],
      tips: [
        "Verifiez que tous les joueurs utilisent la meme version de Minecraft",
        "En LAN, desactivez le pare-feu si les autres joueurs ne voient pas votre partie",
        "Utilisez un serveur Aternos ou Minehut pour un hebergement gratuit",
        "Minecraft Java et Bedrock ne sont pas compatibles entre eux en multijoueur"
      ],
      faq: [
        {
          question: "Peut-on jouer en multijoueur entre Java et Bedrock ?",
          answer: "Non, les editions Java et Bedrock ne sont pas compatibles nativement. Il existe des plugins comme Geyser qui permettent de les relier, mais cela necessite une configuration avancee sur un serveur dedie."
        },
        {
          question: "Combien de joueurs peuvent jouer en LAN ?",
          answer: "Il n'y a pas de limite stricte en LAN, mais les performances dependent de l'ordinateur qui heberge la partie. En pratique, 4 a 8 joueurs fonctionnent bien sur un ordinateur correct."
        },
        {
          question: "Faut-il un compte premium pour jouer en multijoueur ?",
          answer: "Sur Java Edition, la plupart des serveurs exigent un compte officiel Minecraft. Certains serveurs 'crack' acceptent les comptes non premium, mais cela comporte des risques de securite."
        }
      ],
      relatedSlugs: ["rejoindre-serveur", "cross-plateforme", "installer-mods", "creer-skin", "allouer-ram"]
    }
  },
  {
    slug: "installer-mod-bedrock",
    keyword: "comment installer un mod sur minecraft bedrock pc",
    title: "Installer un Mod Minecraft Bedrock PC",
    h1: "Comment Installer un Mod sur Minecraft Bedrock PC",
    metaDescription: "Guide complet pour installer des mods sur Minecraft Bedrock Edition PC. Addons, behavior packs et resource packs expliques pas a pas.",
    category: "gameplay",
    volume: 880,
    content: {
      intro: "Installer des mods sur Minecraft Bedrock Edition PC fonctionne differemment de la version Java. Sur Bedrock, on parle d'addons, composes de behavior packs et resource packs, au format .mcpack ou .mcaddon. Ce guide vous explique comment les telecharger et les activer facilement.",
      sections: [
        {
          heading: "Ou trouver des addons pour Bedrock",
          content: "Le Marketplace integre au jeu propose des contenus officiels, souvent payants. Pour des addons gratuits, rendez-vous sur des sites comme MCPEDL, ModBay ou CurseForge Bedrock. Telechargez les fichiers au format .mcpack ou .mcaddon. Faites attention aux sites frauduleux et verifiez toujours les avis de la communaute."
        },
        {
          heading: "Installer un addon .mcpack ou .mcaddon",
          content: "Double-cliquez sur le fichier .mcpack ou .mcaddon telecharge : Minecraft Bedrock s'ouvrira automatiquement et importera l'addon. Vous verrez un message confirmant l'importation reussie. Si le double-clic ne fonctionne pas, faites clic droit > Ouvrir avec > Minecraft. L'addon apparaitra dans les parametres de votre monde."
        },
        {
          heading: "Activer l'addon dans un monde",
          content: "Creez un nouveau monde ou modifiez un monde existant. Dans les parametres du monde, allez dans Behavior Packs et Resource Packs. Vous y trouverez vos addons importes sous 'Disponible'. Cliquez sur l'addon souhaite puis sur 'Activer'. Certains addons necessitent l'activation des experiences experimentales dans les parametres du monde."
        },
        {
          heading: "Resoudre les problemes courants",
          content: "Si l'addon ne fonctionne pas, verifiez que votre version de Minecraft est compatible avec la version requise par l'addon. Activez les 'Experiences experimentales' si demande. Si l'import echoue, essayez de renommer le fichier en .zip, extraire son contenu, et placer manuellement les dossiers dans les repertoires behavior_packs et resource_packs du jeu."
        }
      ],
      tips: [
        "Les fichiers .mcaddon contiennent a la fois le behavior pack et le resource pack",
        "Sauvegardez votre monde avant d'activer un nouvel addon",
        "Activez les experiences experimentales si l'addon le demande",
        "Les addons Bedrock ne sont pas compatibles avec Java Edition",
        "Utilisez MCPEDL pour trouver des milliers d'addons gratuits et verifies"
      ],
      faq: [
        {
          question: "Quelle est la difference entre un mod et un addon ?",
          answer: "Sur Bedrock, on parle d'addons et non de mods. Les addons utilisent le systeme officiel de Mojang avec des behavior packs (comportements) et resource packs (textures/modeles). Ils sont plus limites que les mods Java mais plus faciles a installer."
        },
        {
          question: "Les addons fonctionnent-ils en multijoueur ?",
          answer: "Oui, les addons actives sur un monde sont automatiquement partages avec les joueurs qui rejoignent. Ils telechargeront les resource packs en se connectant. L'hote doit avoir les addons actives dans les parametres du monde."
        },
        {
          question: "Peut-on utiliser des mods Java sur Bedrock ?",
          answer: "Non, les mods Java (Forge, Fabric) ne sont pas compatibles avec Bedrock Edition. Il faut chercher des addons specifiquement conçus pour Bedrock au format .mcpack ou .mcaddon."
        }
      ],
      relatedSlugs: ["installer-mods", "installer-shaders", "installer-pack-texture", "allouer-ram", "cross-plateforme"]
    }
  },
  {
    slug: "installer-mods",
    keyword: "comment installer des mods sur minecraft",
    title: "Installer des Mods Minecraft : Guide",
    h1: "Comment Installer des Mods sur Minecraft",
    metaDescription: "Guide complet pour installer des mods sur Minecraft Java. Forge, Fabric, CurseForge et installation pas a pas de vos mods preferes.",
    category: "gameplay",
    volume: 390,
    content: {
      intro: "Les mods transforment completement l'experience Minecraft en ajoutant du contenu, des mecaniques et des fonctionnalites inedites. Sur Java Edition, l'installation passe par un mod loader comme Forge ou Fabric. Voici un guide complet pour installer vos premiers mods.",
      sections: [
        {
          heading: "Choisir entre Forge et Fabric",
          content: "Forge est le mod loader historique, compatible avec la majorite des mods populaires. Fabric est plus recent, plus leger et se met a jour plus rapidement. Certains mods ne sont disponibles que sur l'un des deux. Verifiez la compatibilite du mod souhaite avant de choisir votre mod loader. Ils ne sont generalement pas compatibles entre eux."
        },
        {
          heading: "Installer Forge ou Fabric",
          content: "Telechargez Forge depuis files.minecraftforge.net ou Fabric depuis fabricmc.net. Lancez l'installateur, selectionnez 'Install Client' et la version de Minecraft souhaitee. L'installateur creera automatiquement un nouveau profil dans votre launcher Minecraft. Verifiez que Java est installe sur votre ordinateur."
        },
        {
          heading: "Telecharger et installer des mods",
          content: "Telechargez vos mods depuis CurseForge ou Modrinth, les deux plateformes principales. Verifiez que le mod est compatible avec votre version de Minecraft et votre mod loader. Placez le fichier .jar du mod dans le dossier 'mods' de votre repertoire .minecraft (accessible via %appdata%/.minecraft/mods sur Windows). Lancez le jeu avec le profil Forge ou Fabric."
        },
        {
          heading: "Utiliser un launcher de mods",
          content: "Les launchers comme CurseForge App, Prism Launcher ou ATLauncher simplifient enormement l'installation. Ils permettent d'installer des modpacks complets en un clic, gerent automatiquement les dependances et les mises a jour. C'est la methode recommandee pour les debutants."
        },
        {
          heading: "Resoudre les conflits de mods",
          content: "Si le jeu crash au lancement, lisez le crash log dans le dossier crash-reports. Les causes les plus frequentes sont des versions incompatibles, des dependances manquantes ou des conflits entre mods. Retirez les mods un par un pour identifier le coupable. Le mod 'Just Enough Items' (JEI) est souvent requis par d'autres mods."
        }
      ],
      tips: [
        "Commencez avec peu de mods et ajoutez-en progressivement",
        "Utilisez CurseForge App ou Prism Launcher pour simplifier l'installation",
        "Sauvegardez toujours votre dossier .minecraft avant d'installer des mods",
        "Verifiez la compatibilite de version entre le mod, Forge/Fabric et Minecraft"
      ],
      faq: [
        {
          question: "Les mods sont-ils gratuits ?",
          answer: "Oui, la grande majorite des mods Minecraft Java sont entierement gratuits. Ils sont disponibles sur CurseForge et Modrinth. Mefiez-vous des sites qui demandent un paiement pour des mods."
        },
        {
          question: "Les mods fonctionnent-ils en multijoueur ?",
          answer: "Cela depend du mod. Les mods cote client (shaders, minimaps) fonctionnent seuls. Les mods ajoutant du contenu doivent etre installes a la fois sur le serveur et chez les joueurs."
        },
        {
          question: "Peut-on utiliser Forge et Fabric en meme temps ?",
          answer: "Non, Forge et Fabric ne sont pas compatibles entre eux. Vous devez choisir l'un ou l'autre pour un profil donne. Certains mods existent en version Forge et Fabric."
        }
      ],
      relatedSlugs: ["installer-mod-bedrock", "installer-shaders", "installer-pack-texture", "allouer-ram", "vider-cache"]
    }
  },
  {
    slug: "installer-shaders",
    keyword: "comment mettre des shaders sur minecraft",
    title: "Installer des Shaders Minecraft : Guide",
    h1: "Comment Mettre des Shaders sur Minecraft",
    metaDescription: "Installez des shaders sur Minecraft pour des graphismes spectaculaires. Guide complet avec OptiFine, Iris et les meilleurs shaders.",
    category: "gameplay",
    volume: 320,
    content: {
      intro: "Les shaders transforment les graphismes de Minecraft avec des effets de lumiere realistes, des ombres dynamiques, des reflets sur l'eau et bien plus. Ils donnent au jeu un aspect visuel completement different. Voici comment les installer avec OptiFine ou Iris Shaders.",
      sections: [
        {
          heading: "Methode 1 : OptiFine",
          content: "OptiFine est la methode la plus populaire pour utiliser des shaders. Telechargez OptiFine depuis optifine.net pour votre version de Minecraft. Double-cliquez sur le fichier .jar pour l'installer. Lancez Minecraft avec le profil OptiFine, puis allez dans Options > Video > Shaders pour charger vos packs de shaders."
        },
        {
          heading: "Methode 2 : Iris Shaders (Fabric)",
          content: "Iris est une alternative plus performante a OptiFine, compatible avec Fabric et la plupart des shaders OptiFine. Installez Fabric, puis telechargez Iris depuis irisshaders.dev. Placez le .jar d'Iris et de Sodium dans le dossier mods. Iris offre generalement de meilleures performances qu'OptiFine et est compatible avec plus de mods."
        },
        {
          heading: "Telecharger et installer un shader pack",
          content: "Telechargez des shaders depuis des sites comme shadersmods.com, Modrinth ou CurseForge. Les packs populaires incluent BSL, Complementary, SEUS et Sildur's Vibrant. Placez le fichier .zip du shader dans le dossier shaderpacks de votre .minecraft. Ne decompressez pas le fichier. Activez-le ensuite depuis le menu Shaders du jeu."
        },
        {
          heading: "Optimiser les performances",
          content: "Les shaders sont gourmands en ressources. Reduisez la distance de rendu a 8-12 chunks. Desactivez les ombres ou reduisez leur resolution dans les options du shader. Les shaders legers comme Sildur's Enhanced Default ou Complementary Reimagined sont recommandes pour les configurations modestes. Une carte graphique dediee est fortement conseillee."
        }
      ],
      tips: [
        "BSL et Complementary sont d'excellents shaders pour debuter",
        "Iris + Sodium offre de meilleures performances qu'OptiFine",
        "Ne decompressez jamais les fichiers .zip des shaders",
        "Reduisez la distance de rendu si vous avez des baisses de FPS",
        "Certains shaders proposent des presets Lite, Medium et Ultra"
      ],
      faq: [
        {
          question: "OptiFine et Iris, lequel choisir ?",
          answer: "Iris avec Sodium offre generalement de meilleures performances et est compatible avec Fabric et ses mods. OptiFine est plus simple a installer mais moins compatible avec d'autres mods. Pour une experience optimale, Iris est recommande."
        },
        {
          question: "Les shaders fonctionnent-ils sur Bedrock ?",
          answer: "Sur Bedrock, les shaders s'installent comme des resource packs au format .mcpack. Les options sont plus limitees que sur Java, mais des shaders comme FLAVOR et Newb X existent pour Bedrock."
        },
        {
          question: "Quelle carte graphique faut-il pour les shaders ?",
          answer: "Une carte graphique dediee (NVIDIA GTX 1060 / AMD RX 580 minimum) est recommandee. Les shaders legers peuvent tourner sur des configurations plus modestes, mais les shaders haut de gamme comme SEUS PTGI necessitent une carte recente."
        }
      ],
      relatedSlugs: ["installer-mods", "installer-pack-texture", "allouer-ram", "installer-mod-bedrock", "vider-cache"]
    }
  },
  {
    slug: "installer-pack-texture",
    keyword: "comment mettre un pack de texture minecraft",
    title: "Installer un Pack de Texture Minecraft",
    h1: "Comment Installer un Pack de Texture dans Minecraft",
    metaDescription: "Guide pour installer un pack de texture (resource pack) dans Minecraft. Changez l'apparence du jeu avec des textures personnalisees.",
    category: "gameplay",
    volume: 140,
    content: {
      intro: "Les packs de textures, officiellement appeles resource packs, changent l'apparence visuelle de Minecraft sans modifier le gameplay. Ils remplacent les textures des blocs, items, mobs et de l'interface. L'installation est simple et ne necessite aucun mod.",
      sections: [
        {
          heading: "Telecharger un pack de texture",
          content: "De nombreux sites proposent des packs de textures gratuits : CurseForge, Planet Minecraft, Resource Pack.net et Modrinth. Les packs populaires incluent Faithful (textures ameliorees fideles a l'original), Sphax PureBDCraft (style cartoon) et Patrix (realiste). Choisissez une resolution adaptee a votre PC : 16x (par defaut), 32x, 64x, 128x ou 256x."
        },
        {
          heading: "Installation sur Java Edition",
          content: "Telechargez le fichier .zip du resource pack. Ouvrez Minecraft, allez dans Options > Packs de ressources > Ouvrir le dossier des packs. Placez le fichier .zip (sans le decompresser) dans ce dossier. Revenez au menu et deplacez le pack de la colonne 'Disponible' vers 'Selectionne'. Cliquez sur Termine pour l'appliquer."
        },
        {
          heading: "Installation sur Bedrock Edition",
          content: "Sur Bedrock, telechargez un pack au format .mcpack et double-cliquez dessus pour l'importer automatiquement. Vous pouvez aussi l'acheter depuis le Marketplace integre. Pour l'activer, allez dans les parametres du monde > Resource Packs et selectionnez votre pack. Il s'appliquera uniquement a ce monde."
        },
        {
          heading: "Choisir la bonne resolution",
          content: "La resolution par defaut de Minecraft est 16x16 pixels par bloc. Les resolutions superieures (32x, 64x, 128x) offrent plus de details mais consomment plus de memoire. Avec OptiFine ou un mod similaire, vous pouvez utiliser des textures haute resolution sans probleme. Sans mod, Java Edition supporte nativement les packs HD."
        }
      ],
      tips: [
        "Faithful 32x est ideal pour garder le style Minecraft avec plus de details",
        "N'extrayez pas le fichier .zip, placez-le tel quel dans le dossier",
        "Allouez plus de RAM si vous utilisez des packs haute resolution (128x+)",
        "Vous pouvez empiler plusieurs resource packs, le premier a la priorite"
      ],
      faq: [
        {
          question: "Les packs de texture affectent-ils les performances ?",
          answer: "Les packs en 16x ou 32x ont un impact negligeable. Les resolutions 64x et superieures consomment plus de memoire vive. Allouez plus de RAM a Minecraft si necessaire et utilisez OptiFine pour de meilleures performances."
        },
        {
          question: "Peut-on utiliser des packs de texture en multijoueur ?",
          answer: "Oui, les packs de texture sont cote client et fonctionnent partout. Certains serveurs proposent meme leur propre pack qui se telecharge automatiquement a la connexion."
        }
      ],
      relatedSlugs: ["installer-shaders", "installer-mods", "installer-mod-bedrock", "allouer-ram", "vider-cache"]
    }
  },
  {
    slug: "creer-skin",
    keyword: "créer un skin minecraft",
    title: "Creer un Skin Minecraft : Guide Complet",
    h1: "Comment Creer un Skin dans Minecraft",
    metaDescription: "Creez votre propre skin Minecraft personnalise. Outils gratuits, editeurs en ligne et conseils pour un skin unique.",
    category: "gameplay",
    volume: 590,
    content: {
      intro: "Creer son propre skin Minecraft permet d'avoir une apparence unique dans le jeu. Plusieurs editeurs en ligne gratuits facilitent la creation sans competences en graphisme. Que vous vouliez un skin realiste, cartoon ou inspire de votre personnage prefere, voici comment proceder.",
      sections: [
        {
          heading: "Editeurs de skin en ligne",
          content: "Les meilleurs editeurs gratuits sont The Skindex (minecraftskins.com), Nova Skin et NameMC. The Skindex offre un editeur complet avec des outils de dessin, un selecteur de couleurs et la possibilite de partir d'un modele existant. Nova Skin propose des fonctionnalites avancees comme les calques et les effets. Ces editeurs fonctionnent directement dans le navigateur."
        },
        {
          heading: "Creer son skin pas a pas",
          content: "Choisissez d'abord le modele de base : Steve (bras larges) ou Alex (bras fins). Commencez par la tete, la partie la plus visible. Definissez les couleurs de peau, cheveux et yeux. Passez ensuite au corps, puis aux jambes et bras. Utilisez le calque 'overlay' pour ajouter des details comme des accessoires, chapeaux ou vetements par-dessus la couche de base."
        },
        {
          heading: "Appliquer son skin sur Java Edition",
          content: "Exportez votre skin au format PNG depuis l'editeur. Connectez-vous sur minecraft.net, allez dans votre profil, puis cliquez sur 'Changer de skin'. Selectionnez le modele (classique ou fin) et televersez votre fichier PNG. Votre skin sera visible apres le prochain lancement du jeu."
        },
        {
          heading: "Appliquer son skin sur Bedrock Edition",
          content: "Sur Bedrock, ouvrez le jeu, allez dans le menu principal, cliquez sur votre avatar puis sur 'Editeur de personnage'. Vous pouvez importer un skin personnalise en cliquant sur 'Classique', puis 'Possede', et enfin 'Importer'. Selectionnez votre fichier PNG. Bedrock offre aussi un editeur integre avec des pieces de personnage."
        }
      ],
      tips: [
        "Partez d'un skin existant et modifiez-le pour debuter facilement",
        "Le calque overlay permet d'ajouter des details sans affecter la base",
        "Exportez toujours en PNG avec fond transparent",
        "La taille standard est 64x64 pixels pour les skins modernes",
        "Testez votre skin avec un visualiseur 3D avant de l'appliquer"
      ],
      faq: [
        {
          question: "Quelle est la taille d'un skin Minecraft ?",
          answer: "Les skins Minecraft modernes font 64x64 pixels. Les anciennes versions utilisaient un format 64x32. La plupart des editeurs en ligne gerent automatiquement le bon format."
        },
        {
          question: "Peut-on avoir un skin anime ou avec des effets speciaux ?",
          answer: "Les skins classiques sont statiques. Cependant, certains serveurs supportent des capes et des skins animes via des mods ou plugins. Des mods comme CustomSkinLoader permettent aussi d'utiliser des capes personnalisees."
        },
        {
          question: "Les skins sont-ils gratuits ?",
          answer: "Sur Java Edition, tous les skins sont gratuits. Sur Bedrock, vous pouvez importer des skins gratuits mais le Marketplace propose aussi des skins payants avec des modeles 3D avances."
        }
      ],
      relatedSlugs: ["changer-skin", "multijoueur", "installer-pack-texture", "cross-plateforme", "que-faire"]
    }
  },
  {
    slug: "changer-skin",
    keyword: "changer de skin minecraft",
    title: "Changer de Skin Minecraft : Guide",
    h1: "Comment Changer de Skin dans Minecraft",
    metaDescription: "Changez de skin dans Minecraft Java et Bedrock en quelques etapes simples. Guide complet avec toutes les methodes.",
    category: "gameplay",
    volume: 390,
    content: {
      intro: "Changer de skin dans Minecraft vous permet de personnaliser l'apparence de votre personnage. La methode varie selon que vous jouez sur Java Edition ou Bedrock Edition. Voici toutes les etapes detaillees pour chaque plateforme.",
      sections: [
        {
          heading: "Changer de skin sur Java Edition",
          content: "Connectez-vous sur minecraft.net avec votre compte Microsoft. Allez dans votre profil et cliquez sur 'Skin'. Cliquez sur 'Changer de skin', choisissez le modele (classique ou slim), puis televersez votre fichier PNG. Le changement sera effectif au prochain lancement du jeu. Vous pouvez aussi utiliser le launcher officiel depuis l'onglet Skins."
        },
        {
          heading: "Changer de skin sur Bedrock Edition",
          content: "Ouvrez Minecraft Bedrock et cliquez sur votre avatar dans le menu principal. Selectionnez 'Editeur de personnage' pour utiliser le systeme de pieces ou 'Classique' pour importer un skin PNG. Allez dans 'Possede' > 'Importer' et selectionnez votre fichier. Le changement est immediat."
        },
        {
          heading: "Trouver des skins gratuits",
          content: "De nombreux sites proposent des skins gratuits : NameMC, The Skindex, Planet Minecraft et MinecraftSkins.com. Parcourez les categories (anime, jeux video, originaux) ou recherchez un skin specifique. Telechargez le fichier PNG et appliquez-le selon votre edition. NameMC permet aussi de voir l'historique des skins d'un joueur."
        },
        {
          heading: "Changer de skin via le launcher",
          content: "Le launcher Minecraft officiel (Java) propose un onglet 'Skins' directement accessible. Cliquez sur 'Nouveau skin', donnez-lui un nom, choisissez le modele et importez le fichier PNG. L'avantage du launcher est de pouvoir sauvegarder plusieurs skins et alterner facilement entre eux."
        }
      ],
      tips: [
        "NameMC est le meilleur site pour trouver des skins par popularite",
        "Le launcher Java permet de sauvegarder plusieurs skins",
        "Sur Bedrock, le changement de skin est instantane sans redemarrer",
        "Utilisez le modele Slim (Alex) pour un look plus fin"
      ],
      faq: [
        {
          question: "Le changement de skin est-il visible en multijoueur ?",
          answer: "Oui, votre nouveau skin est visible par tous les joueurs en multijoueur. Sur Java, il peut falloir se deconnecter et reconnecter au serveur pour que le changement soit visible par les autres."
        },
        {
          question: "Peut-on changer de skin sans connexion internet ?",
          answer: "Non, le changement de skin necessite une connexion internet car le skin est stocke sur les serveurs de Mojang. En mode hors ligne, vous garderez votre dernier skin enregistre."
        }
      ],
      relatedSlugs: ["creer-skin", "installer-pack-texture", "multijoueur", "cross-plateforme", "que-faire"]
    }
  },
  {
    slug: "trouver-seed-serveur",
    keyword: "comment trouver la seed d'un serveur minecraft",
    title: "Trouver la Seed d'un Serveur Minecraft",
    h1: "Comment Trouver la Seed d'un Serveur Minecraft",
    metaDescription: "Decouvrez comment trouver la seed d'un serveur Minecraft. Commande /seed, outils externes et methodes alternatives.",
    category: "gameplay",
    volume: 480,
    content: {
      intro: "La seed (graine) d'un monde Minecraft determine la generation du terrain, des biomes et des structures. Connaitre la seed d'un serveur permet de localiser des structures rares ou de recreer le monde en solo. Voici les differentes methodes pour la trouver.",
      sections: [
        {
          heading: "Utiliser la commande /seed",
          content: "La methode la plus directe est de taper /seed dans le chat. Sur un serveur, cette commande est generalement reservee aux operateurs (admins). En solo, elle fonctionne toujours, meme sans les cheats actives. La seed s'affiche sous forme d'un nombre (positif ou negatif) que vous pouvez copier."
        },
        {
          heading: "Demander a l'administrateur",
          content: "Si vous n'avez pas les permissions pour utiliser /seed, la methode la plus simple est de demander a l'administrateur du serveur. Beaucoup de serveurs communautaires partagent leur seed sur leur site web ou Discord. Certains serveurs cachent volontairement la seed pour empecher les joueurs de trouver des structures facilement."
        },
        {
          heading: "Outils de reverse-engineering de seed",
          content: "Des outils comme SeedCrackerX (mod Fabric) peuvent retrouver la seed d'un serveur en analysant les structures generees. Le mod collecte des donnees sur les structures, biomes et donjons visites pour retrouver mathematiquement la seed. Cela peut prendre du temps et necessite d'explorer suffisamment le monde."
        },
        {
          heading: "Utiliser la seed trouvee",
          content: "Une fois la seed obtenue, utilisez-la avec des outils comme Chunkbase ou Amidst pour cartographier le monde entier. Vous pourrez localiser les villages, temples, forteresses du Nether, la forteresse de l'End et toutes les structures rares sans les chercher en jeu. Entrez la seed lors de la creation d'un monde solo pour obtenir un monde identique."
        }
      ],
      tips: [
        "La commande /seed fonctionne en solo meme sans cheats actives",
        "Chunkbase.com permet de visualiser une seed sur une carte interactive",
        "SeedCrackerX est le meilleur outil pour retrouver une seed inconnue",
        "La seed est sensible a la casse : copiez-la exactement"
      ],
      faq: [
        {
          question: "La seed est-elle la meme entre Java et Bedrock ?",
          answer: "Non, Java et Bedrock generent des mondes differents a partir de la meme seed. Les biomes, structures et terrain seront differents entre les deux editions."
        },
        {
          question: "Peut-on trouver la seed sans etre admin ?",
          answer: "Oui, avec le mod SeedCrackerX qui analyse les structures generees pour retrouver la seed mathematiquement. Cependant, cela peut etre considere comme de la triche sur certains serveurs."
        },
        {
          question: "A quoi sert la seed exactement ?",
          answer: "La seed est le nombre utilise par l'algorithme de generation du monde. Elle determine l'emplacement de chaque biome, structure, grotte et minerai. Deux mondes avec la meme seed et version seront identiques."
        }
      ],
      relatedSlugs: ["multijoueur", "rejoindre-serveur", "cross-plateforme", "que-faire", "voler"]
    }
  },
  {
    slug: "passage-secret",
    keyword: "passage secret minecraft",
    title: "Passage Secret Minecraft : Guide",
    h1: "Comment Faire un Passage Secret dans Minecraft",
    metaDescription: "Construisez des passages secrets dans Minecraft avec la redstone. Portes cachees, entrees secretes et mecanismes invisibles.",
    category: "gameplay",
    volume: 390,
    content: {
      intro: "Les passages secrets sont un element incontournable de Minecraft, permettant de cacher vos coffres, bases et salles secretes. Grace a la redstone et a quelques astuces, vous pouvez creer des entrees invisibles et des mecanismes ingenieux. Decouvrez les designs les plus populaires.",
      sections: [
        {
          heading: "Passage secret avec tableau",
          content: "Le passage le plus simple utilise un tableau et des panneaux. Placez des panneaux sur les cotes d'une ouverture de 1x2 blocs dans un mur, puis accrochez un tableau par-dessus. Vous pouvez traverser le tableau en marchant dedans. C'est la methode la plus rapide mais aussi la plus connue. Ajoutez des tableaux decoratifs autour pour le camoufler."
        },
        {
          heading: "Porte de piston cachee (2x2)",
          content: "La porte a pistons 2x2 est le design le plus populaire. Quatre pistons collants sont places derriere un mur, poussant des blocs identiques au mur. Un levier cache, un bouton ou un interrupteur de redstone active les pistons qui ouvrent le passage. Ce design necessite environ 12 blocs de redstone, 4 pistons collants et 4 repeteurs."
        },
        {
          heading: "Entree secrete avec bibliotheque",
          content: "Creez une entree cachee derriere une bibliotheque qui se retracte. Utilisez des pistons collants pour tirer les blocs de bibliotheque vers le bas ou les cotes. Activez le mecanisme avec un levier cache dans un cadre a objet ou un code de coffre. Ce design est particulierement esthetique dans une salle d'enchantement."
        },
        {
          heading: "Entree avec escalier retractable",
          content: "Un escalier qui se transforme en sol plat est un excellent passage secret. Placez des pistons collants sous chaque marche et connectez-les a un circuit redstone. Quand le mecanisme est active, les marches descendent et revelent un passage souterrain. Utilisez un interrupteur cache sous un tapis ou dans un pot de fleur."
        },
        {
          heading: "Mecanismes d'activation caches",
          content: "Pour activer vos passages secrets discretement, utilisez un cadre a objet avec un item specifique comme cle. Un coffre avec un comparateur de redstone detecte quand un item precis est place dedans. Vous pouvez aussi utiliser un systeme de code avec des leviers, ou un bloc musical accorde sur une note precise."
        }
      ],
      tips: [
        "Le tableau traverse est le passage secret le plus simple a realiser",
        "Utilisez des blocs identiques au mur pour les portes a pistons",
        "Un cadre a objet avec comparateur fait une excellente cle secrete",
        "Cachez vos fils de redstone sous le sol avec des dalles",
        "Testez toujours votre mecanisme avant de le dissimuler completement"
      ],
      faq: [
        {
          question: "Quel est le passage secret le plus facile a faire ?",
          answer: "Le passage avec un tableau est le plus simple : placez des panneaux sur les cotes d'une ouverture et accrochez un tableau. Aucune redstone necessaire, vous pouvez traverser le tableau directement."
        },
        {
          question: "Les autres joueurs peuvent-ils trouver mes passages secrets ?",
          answer: "Les joueurs attentifs peuvent reperer des indices comme des fils de redstone, des sons de pistons ou des textures legerement differentes. Utilisez des tapis et dalles pour cacher la redstone et des mecanismes silencieux."
        },
        {
          question: "Les passages secrets fonctionnent-ils en Bedrock ?",
          answer: "Oui, la plupart des designs fonctionnent sur les deux editions. Cependant, la redstone a quelques differences techniques entre Java et Bedrock, donc certains circuits complexes peuvent necessiter des ajustements."
        }
      ],
      relatedSlugs: ["porte-automatique", "que-faire", "voler", "dupliquer-item", "voir-durabilite"]
    }
  },
  {
    slug: "porte-automatique",
    keyword: "porte automatique minecraft",
    title: "Porte Automatique Minecraft : Guide Redstone",
    h1: "Comment Faire une Porte Automatique dans Minecraft",
    metaDescription: "Construisez une porte automatique dans Minecraft avec la redstone. Portes a pistons, detecteurs et mecanismes automatiques.",
    category: "gameplay",
    volume: 170,
    content: {
      intro: "Les portes automatiques sont un classique de la redstone dans Minecraft. Elles s'ouvrent automatiquement quand vous approchez et se referment quand vous partez. Des simples portes a pression aux portes a pistons elaborees, voici comment les construire.",
      sections: [
        {
          heading: "Porte automatique avec plaque de pression",
          content: "La methode la plus simple : placez une porte en bois ou en fer avec des plaques de pression devant et derriere. Les portes en bois s'ouvrent directement au clic, mais les portes en fer necessitent un signal redstone. Les plaques de pression en bois detectent tout (items, mobs), celles en pierre uniquement les entites vivantes."
        },
        {
          heading: "Double porte a pistons (2x2)",
          content: "Pour une entree plus impressionnante, creez une porte 2x2 avec 4 pistons collants. Placez deux pistons de chaque cote, orientees vers le centre. Reliez-les a des plaques de pression avec de la redstone. Quand vous marchez sur la plaque, les blocs se retractent et le passage s'ouvre. Utilisez des blocs identiques au mur pour un effet invisible."
        },
        {
          heading: "Porte a pistons 3x3",
          content: "La porte 3x3 est plus complexe mais permet de creer des entrees majestueuses. Elle necessite 12 pistons collants, de la redstone, des repeteurs et un bon sens du circuit. Les blocs du haut sont tires vers le haut, ceux du milieu sur les cotes et ceux du bas vers le bas. Des tutoriels video detailles sont recommandes pour ce design."
        },
        {
          heading: "Systeme de detection avance",
          content: "Remplacez les plaques de pression par un fil de trip-wire (fil piege) pour une detection a distance. Les observers (observateurs) detectent les mouvements de blocs et peuvent aussi servir de detecteurs. Vous pouvez aussi utiliser des sculk sensors (capteurs sculk) qui detectent les vibrations et pas a proximite, pour une porte vraiment automatique et invisible."
        }
      ],
      tips: [
        "Les plaques de pression en pierre ignorent les items au sol",
        "Utilisez des repeteurs pour etendre le signal redstone sur de longues distances",
        "Les sculk sensors permettent une detection sans plaques visibles",
        "Ajoutez un delai avec un repeteur pour que la porte reste ouverte plus longtemps"
      ],
      faq: [
        {
          question: "Les mobs peuvent-ils ouvrir les portes automatiques ?",
          answer: "Si vous utilisez des plaques de pression, oui les mobs peuvent les activer. Utilisez des plaques en pierre pour eviter que les items les activent, ou preferez des systemes a bouton ou levier pour empecher les mobs d'entrer."
        },
        {
          question: "Quelle est la porte automatique la plus simple ?",
          answer: "Une porte en fer avec des plaques de pression de chaque cote. Placez la porte, mettez une plaque devant et une derriere. La porte s'ouvrira automatiquement et se refermera toute seule."
        },
        {
          question: "Comment empecher les mobs d'utiliser ma porte ?",
          answer: "Utilisez un systeme avec un bouton, un levier cache ou un cadre a objet comme cle. Les fils pieges places en hauteur ne seront actives que par les joueurs de grande taille, pas par les petits mobs."
        }
      ],
      relatedSlugs: ["passage-secret", "que-faire", "voler", "enlever-metier-villageois", "voir-durabilite"]
    }
  },
  {
    slug: "voler",
    keyword: "comment voler sur minecraft",
    title: "Voler dans Minecraft : Guide Complet",
    h1: "Comment Voler dans Minecraft",
    metaDescription: "Toutes les methodes pour voler dans Minecraft : mode creatif, Elytra, commandes et astuces pour planer et s'envoler.",
    category: "gameplay",
    volume: 170,
    content: {
      intro: "Voler dans Minecraft est possible de plusieurs manieres, selon votre mode de jeu. En creatif, le vol est illimite. En survie, les Elytres (Elytra) permettent de planer majestueusement. Decouvrez toutes les methodes pour prendre votre envol.",
      sections: [
        {
          heading: "Voler en mode creatif",
          content: "En mode creatif, appuyez deux fois rapidement sur la touche Espace pour activer le vol. Utilisez Espace pour monter et Shift pour descendre. Appuyez a nouveau deux fois sur Espace pour desactiver le vol. Sur Bedrock, le fonctionnement est identique. Le vol creatif est illimite et ne consomme aucune ressource."
        },
        {
          heading: "Planer avec les Elytres (Elytra)",
          content: "Les Elytres sont les ailes du jeu, trouvables dans les navires de l'End (End Ships). Equipez-les dans l'emplacement du plastron. Sautez d'un point en hauteur et appuyez sur Espace pour deployer les ailes. Inclinez votre vue vers le bas pour accelerer et vers le haut pour ralentir. Les Elytres ont une durabilite limitee reparable avec des membranes de phantom."
        },
        {
          heading: "Vol propulse avec fusees",
          content: "En vol avec les Elytres, utilisez des fusees de feu d'artifice (clic droit) pour vous propulser. Chaque fusee donne une forte acceleration. Fabriquez des fusees avec du papier et de la poudre a canon. Plus vous ajoutez de poudre a canon, plus la duree de propulsion est longue. Attention : les fusees avec des etoiles de feu d'artifice infligent des degats."
        },
        {
          heading: "Autres methodes de vol",
          content: "La commande /fly (avec des plugins sur serveur) ou /gamemode creative active le vol. Le Trident avec l'enchantement Riptide permet de voler sous la pluie. Les bulles d'eau des conduits peuvent aussi vous propulser vers le haut. Enfin, des techniques avancees comme le pearl cannon ou le TNT launching existent pour les joueurs experimentes."
        }
      ],
      tips: [
        "Les fusees sans etoile de feu d'artifice ne font pas de degats",
        "Regardez legerement vers le bas pour maintenir votre vitesse en Elytra",
        "Reparez les Elytres avec des membranes de phantom sur une enclume",
        "L'enchantement Unbreaking III prolonge considerablement la duree des Elytres",
        "Emportez toujours des fusees de rechange en voyage"
      ],
      faq: [
        {
          question: "Ou trouver les Elytres ?",
          answer: "Les Elytres se trouvent dans les navires de l'End (End Ships), des structures flottantes dans les iles exterieures de l'End. Vous devez d'abord vaincre l'Ender Dragon puis utiliser les portails de teleportation pour atteindre les iles."
        },
        {
          question: "Comment reparer les Elytres ?",
          answer: "Utilisez des membranes de phantom sur une enclume. Les phantoms apparaissent la nuit si vous n'avez pas dormi depuis 3 jours. L'enchantement Mending permet aussi de les reparer avec l'experience."
        },
        {
          question: "Peut-on voler en survie sans Elytra ?",
          answer: "Il n'existe pas de vol libre en survie sans Elytres. Cependant, le Trident avec Riptide permet de s'envoler sous la pluie, et les feux d'artifice avec Elytra offrent un vol quasi-illimite."
        }
      ],
      relatedSlugs: ["que-faire", "passage-secret", "porte-automatique", "oeuf-dragon", "peche"]
    }
  },
  {
    slug: "rejoindre-serveur",
    keyword: "comment rejoindre un serveur minecraft",
    title: "Rejoindre un Serveur Minecraft : Guide",
    h1: "Comment Rejoindre un Serveur dans Minecraft",
    metaDescription: "Guide pour rejoindre un serveur Minecraft. Ajouter un serveur, entrer une adresse IP et se connecter sur Java et Bedrock.",
    category: "gameplay",
    volume: 260,
    content: {
      intro: "Rejoindre un serveur Minecraft ouvre la porte a une multitude d'experiences multijoueur : PvP, mini-jeux, survie, RP et bien plus. La procedure differe legerement entre Java et Bedrock Edition. Voici comment vous connecter a n'importe quel serveur.",
      sections: [
        {
          heading: "Rejoindre un serveur sur Java Edition",
          content: "Lancez Minecraft Java et cliquez sur 'Multijoueur' dans le menu principal. Cliquez sur 'Ajouter un serveur', entrez un nom pour le serveur et collez son adresse IP dans le champ 'Adresse du serveur'. Cliquez sur 'Termine' puis double-cliquez sur le serveur dans la liste pour vous connecter. Verifiez que votre version correspond a celle du serveur."
        },
        {
          heading: "Rejoindre un serveur sur Bedrock Edition",
          content: "Sur Bedrock, allez dans l'onglet 'Serveurs' du menu principal. Les serveurs partenaires (Hive, CubeCraft, etc.) sont directement accessibles. Pour ajouter un serveur personnalise, descendez en bas de la liste et cliquez sur 'Ajouter un serveur'. Entrez le nom, l'adresse IP et le port (par defaut 19132 pour Bedrock)."
        },
        {
          heading: "Trouver des serveurs",
          content: "Utilisez des sites comme minecraft-server-list.com, serveur-minecraft.fr ou topminecraft.fr pour trouver des serveurs francophones. Filtrez par type de jeu (survie, PvP, creatif, mini-jeux) et par version. Chaque liste affiche le nombre de joueurs en ligne, la description et l'adresse IP du serveur."
        },
        {
          heading: "Resoudre les problemes de connexion",
          content: "Si vous ne pouvez pas vous connecter, verifiez votre version de Minecraft (elle doit correspondre a celle du serveur). Verifiez que l'adresse IP est correcte et que le serveur est en ligne. Desactivez temporairement votre pare-feu ou VPN si necessaire. L'erreur 'Connexion refusee' signifie generalement que le serveur est hors ligne ou que le port est bloque."
        }
      ],
      tips: [
        "Le port par defaut est 25565 pour Java et 19132 pour Bedrock",
        "Verifiez toujours que votre version correspond a celle du serveur",
        "Sauvegardez les adresses de vos serveurs preferes dans un fichier",
        "Les serveurs francophones se trouvent facilement sur topminecraft.fr"
      ],
      faq: [
        {
          question: "Pourquoi je ne peux pas rejoindre un serveur ?",
          answer: "Les causes les plus frequentes sont : version incompatible, serveur hors ligne, adresse IP incorrecte ou pare-feu bloquant la connexion. Verifiez chaque element. Essayez aussi de redemarrer Minecraft."
        },
        {
          question: "Faut-il telecharger quelque chose pour rejoindre un serveur ?",
          answer: "Non, vous n'avez besoin que de Minecraft. Certains serveurs peuvent vous demander de telecharger un resource pack, mais cela se fait automatiquement a la connexion. Des mods optionnels peuvent etre recommandes."
        },
        {
          question: "Peut-on rejoindre un serveur Java depuis Bedrock ?",
          answer: "Pas nativement. Les serveurs doivent utiliser un plugin comme Geyser pour accepter les joueurs Bedrock. Verifiez sur le site du serveur s'il supporte le cross-play."
        }
      ],
      relatedSlugs: ["multijoueur", "cross-plateforme", "trouver-seed-serveur", "allouer-ram", "installer-mods"]
    }
  },
  {
    slug: "allouer-ram",
    keyword: "allouer plus de ram a minecraft",
    title: "Allouer plus de RAM a Minecraft : Guide",
    h1: "Comment Allouer plus de RAM a Minecraft",
    metaDescription: "Augmentez la RAM allouee a Minecraft pour de meilleures performances. Guide pour le launcher officiel, CurseForge et autres launchers.",
    category: "gameplay",
    volume: 320,
    content: {
      intro: "Allouer plus de memoire RAM a Minecraft peut considerablement ameliorer les performances, surtout avec des mods, des shaders ou des packs de textures haute resolution. Par defaut, Minecraft n'utilise que 2 Go de RAM, ce qui est souvent insuffisant. Voici comment augmenter cette allocation.",
      sections: [
        {
          heading: "Via le launcher officiel Minecraft",
          content: "Ouvrez le launcher Minecraft, allez dans l'onglet 'Configurations'. Selectionnez votre profil et cliquez sur 'Modifier'. Cochez 'Plus d'options' en bas. Dans les arguments JVM, modifiez la valeur -Xmx2G en -Xmx4G (pour 4 Go) ou -Xmx6G (pour 6 Go). Le 'G' represente les gigaoctets. Ne depassez pas la moitie de votre RAM totale."
        },
        {
          heading: "Via CurseForge / Prism Launcher",
          content: "Sur CurseForge App, allez dans Parametres > Minecraft > Java Settings et ajustez le curseur de memoire. Sur Prism Launcher, allez dans Parametres > Java > Memoire maximale. Ces launchers rendent le changement tres simple avec un curseur visuel. La plupart des modpacks necessitent 4 a 8 Go de RAM."
        },
        {
          heading: "Combien de RAM allouer",
          content: "Pour Minecraft vanilla : 2-3 Go suffisent. Avec OptiFine et shaders : 3-4 Go. Avec un petit modpack (20-50 mods) : 4-6 Go. Avec un gros modpack (100+ mods) : 6-8 Go. Avec des textures HD 256x+ : ajoutez 1-2 Go supplementaires. N'allouez jamais plus de la moitie de votre RAM totale pour laisser de la memoire au systeme."
        },
        {
          heading: "Optimiser les arguments JVM",
          content: "En plus de la RAM, vous pouvez optimiser les arguments JVM. Utilisez les arguments recommandes par Aikar pour les meilleures performances : -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200. Ces parametres optimisent le ramasse-miettes Java et reduisent les micro-freezes pendant le jeu."
        }
      ],
      tips: [
        "N'allouez jamais plus de la moitie de votre RAM totale",
        "4 Go est un bon point de depart pour la plupart des usages",
        "Trop de RAM peut paradoxalement causer des problemes de performances",
        "Verifiez que Java 64 bits est installe pour utiliser plus de 4 Go"
      ],
      faq: [
        {
          question: "Combien de RAM a mon ordinateur ?",
          answer: "Sur Windows, faites clic droit sur 'Ce PC' > Proprietes. La RAM installee est affichee. Sur Mac, allez dans Menu Apple > A propos de ce Mac. 8 Go est un minimum confortable pour jouer a Minecraft avec des mods."
        },
        {
          question: "Pourquoi Minecraft lag meme avec beaucoup de RAM ?",
          answer: "Le lag peut avoir d'autres causes : carte graphique insuffisante, distance de rendu trop elevee, trop de mobs charges, ou disque dur lent. Essayez de reduire la distance de rendu et d'installer OptiFine ou Sodium pour optimiser les performances."
        },
        {
          question: "Allouer trop de RAM peut-il poser probleme ?",
          answer: "Oui, allouer trop de RAM peut causer des pauses prolongees du ramasse-miettes Java, entrainant des freezes. Restez entre 4 et 8 Go pour la plupart des configurations. Au-dela, c'est rarement utile."
        }
      ],
      relatedSlugs: ["installer-mods", "installer-shaders", "vider-cache", "installer-pack-texture", "installer-mod-bedrock"]
    }
  },
  {
    slug: "generateur-cercle",
    keyword: "générateur de cercle minecraft",
    title: "Generateur de Cercle Minecraft : Outil",
    h1: "Generateur de Cercle pour Minecraft",
    metaDescription: "Utilisez un generateur de cercle pour Minecraft pour creer des formes rondes parfaites. Cercles, ovales et spheres bloc par bloc.",
    category: "gameplay",
    volume: 320,
    content: {
      intro: "Construire des cercles dans Minecraft est un defi car le jeu est compose de blocs carres. Les generateurs de cercles sont des outils en ligne indispensables qui vous montrent exactement quels blocs placer pour creer des formes rondes parfaites. Ils sont essentiels pour les tours, domes, arenes et autres constructions circulaires.",
      sections: [
        {
          heading: "Outils de generation de cercles",
          content: "Les meilleurs generateurs sont Plotz (plotz.co.uk), MinecraftCircleGenerator.com et PixelCircleGenerator.com. Entrez le diametre souhaite et l'outil genere un schema bloc par bloc a suivre. Plotz propose aussi des generateurs de spheres, tores (donuts), ellipses et cones. Ces outils sont gratuits et fonctionnent dans le navigateur."
        },
        {
          heading: "Comment lire le schema",
          content: "Le generateur affiche une grille ou chaque case represente un bloc. Les cases colorees indiquent ou placer des blocs. Commencez par un cote et avancez symetriquement. Pour les cercles de petit diametre (moins de 10), le resultat paraitra anguleux. A partir de 15-20 blocs de diametre, les cercles deviennent visuellement convaincants."
        },
        {
          heading: "Construire un dome",
          content: "Un dome est un demi-sphere. Plotz propose un generateur de spheres : utilisez-le et ne construisez que la moitie superieure. Construisez couche par couche en suivant le schema de chaque niveau. Commencez par le cercle de base le plus large, puis remontez avec des cercles de plus en plus petits jusqu'au sommet."
        },
        {
          heading: "Astuces pour les constructions circulaires",
          content: "Pour les tours, construisez le cercle de base puis montez les murs verticalement. Pour les arenes ovales, utilisez un generateur d'ellipses. Utilisez des dalles et escaliers pour adoucir les courbes. Les blocs de verre vitrail sont excellents pour les domes car ils ne montrent pas de joints entre les blocs."
        }
      ],
      tips: [
        "Plotz.co.uk est le meilleur outil pour les formes 3D (spheres, domes)",
        "Un diametre de 15+ blocs donne des cercles visuellement satisfaisants",
        "Utilisez des dalles et escaliers pour lisser les courbes",
        "Construisez en mode creatif d'abord pour tester votre design",
        "Les blocs de laine de couleur aident a visualiser le schema pendant la construction"
      ],
      faq: [
        {
          question: "Peut-on faire un cercle parfait dans Minecraft ?",
          answer: "Non, Minecraft etant compose de blocs carres, tout cercle est une approximation. Plus le diametre est grand, plus le cercle parait lisse. A partir de 20 blocs de diametre, le resultat est tres convaincant visuellement."
        },
        {
          question: "Comment construire une sphere complete ?",
          answer: "Utilisez Plotz pour generer le schema d'une sphere. Construisez couche par couche, de bas en haut. Chaque couche est un cercle de diametre different. C'est long mais le resultat est impressionnant."
        }
      ],
      relatedSlugs: ["que-faire", "passage-secret", "porte-automatique", "voir-durabilite", "dupliquer-item"]
    }
  },
  {
    slug: "cross-plateforme",
    keyword: "minecraft cross plateforme",
    title: "Minecraft Cross-Plateforme : Guide Complet",
    h1: "Minecraft est-il Cross-Plateforme ?",
    metaDescription: "Tout savoir sur le cross-play Minecraft. Quelles plateformes sont compatibles, comment jouer entre PC, console et mobile.",
    category: "gameplay",
    volume: 590,
    content: {
      intro: "Le cross-play (jeu multi-plateforme) est une question frequente dans la communaute Minecraft. La reponse depend de l'edition du jeu. Bedrock Edition permet le cross-play entre de nombreuses plateformes, tandis que Java Edition est limitee au PC. Voici le guide complet de la compatibilite.",
      sections: [
        {
          heading: "Bedrock Edition : cross-play complet",
          content: "Minecraft Bedrock Edition supporte le cross-play entre Windows 10/11, Xbox, PlayStation, Nintendo Switch, iOS et Android. Tous ces joueurs peuvent jouer ensemble sur les memes serveurs ou dans les memes mondes. Il suffit d'ajouter les amis via leur Gamertag Microsoft et de les inviter dans votre partie."
        },
        {
          heading: "Java Edition : pas de cross-play natif",
          content: "Minecraft Java Edition ne fonctionne que sur PC (Windows, macOS, Linux). Il n'y a pas de cross-play natif avec Bedrock ou les consoles. Les joueurs Java ne peuvent jouer qu'avec d'autres joueurs Java. Cependant, le plugin serveur Geyser permet aux joueurs Bedrock de rejoindre des serveurs Java."
        },
        {
          heading: "Compatibilite entre Java et Bedrock",
          content: "Java et Bedrock sont deux editions separees et incompatibles nativement. Depuis 2022, l'achat de Minecraft sur PC inclut les deux editions. Le plugin Geyser, installe sur un serveur Java, permet aux joueurs Bedrock de s'y connecter. C'est la seule solution pour relier les deux editions, et elle a certaines limitations."
        },
        {
          heading: "Comment jouer avec des amis multi-plateformes",
          content: "Sur Bedrock, tous les joueurs ont besoin d'un compte Microsoft. Ajoutez vos amis via leur Gamertag dans le menu Amis. Creez un monde et activez le multijoueur dans les parametres. Invitez vos amis ou ouvrez le monde aux amis. Sur console, assurez-vous que les parametres de confidentialite autorisent le jeu en ligne."
        }
      ],
      tips: [
        "Bedrock est la seule edition avec un vrai cross-play entre plateformes",
        "Tous les joueurs Bedrock ont besoin d'un compte Microsoft gratuit",
        "Geyser permet de relier Java et Bedrock sur un meme serveur",
        "Verifiez les parametres de confidentialite Xbox pour les comptes enfants",
        "Les mondes Realms Bedrock sont accessibles depuis toutes les plateformes"
      ],
      faq: [
        {
          question: "Peut-on jouer entre PC et PlayStation ?",
          answer: "Oui, si les deux joueurs utilisent Minecraft Bedrock Edition. Le joueur PC doit avoir la version Windows 10/11 (Bedrock), pas la version Java. Ajoutez-vous en amis via vos comptes Microsoft."
        },
        {
          question: "Java et Bedrock peuvent-ils jouer ensemble ?",
          answer: "Pas nativement. Le plugin Geyser sur un serveur Java permet aux joueurs Bedrock de se connecter, mais avec certaines limitations (animations, certains items). C'est la seule solution disponible."
        },
        {
          question: "Comment savoir si j'ai Java ou Bedrock ?",
          answer: "Si vous jouez sur console ou mobile, c'est Bedrock. Sur PC, le launcher Microsoft affiche 'Minecraft: Java Edition' ou 'Minecraft for Windows' (Bedrock). Depuis 2022, l'achat inclut les deux editions sur PC."
        }
      ],
      relatedSlugs: ["multijoueur", "rejoindre-serveur", "trouver-seed-serveur", "installer-mod-bedrock", "changer-skin"]
    }
  },
  {
    slug: "enlever-metier-villageois",
    keyword: "comment enlever le metier d'un villageois minecraft",
    title: "Enlever le Metier d'un Villageois Minecraft",
    h1: "Comment Enlever le Metier d'un Villageois",
    metaDescription: "Apprenez a enlever ou changer le metier d'un villageois dans Minecraft. Blocs de metier, conditions et astuces.",
    category: "gameplay",
    volume: 210,
    content: {
      intro: "Chaque villageois dans Minecraft adopte un metier en se liant a un bloc de site d'emploi (job site block). Si les echanges proposes ne vous conviennent pas, vous pouvez forcer le villageois a changer de metier. Voici comment proceder et les conditions a respecter.",
      sections: [
        {
          heading: "Comment les metiers fonctionnent",
          content: "Les villageois obtiennent leur metier en se liant a un bloc specifique : l'alambic pour le cuisinier, le composter pour le fermier, la table de cartographie pour le cartographe, etc. Un villageois sans metier (en robe marron) cherchera automatiquement un bloc de site d'emploi a proximite. Les villageois Nitwit (idiots) en robe verte ne prennent jamais de metier."
        },
        {
          heading: "Detruire le bloc de metier",
          content: "Pour enlever le metier d'un villageois, detruisez simplement le bloc de site d'emploi auquel il est lie. Le villageois perdra son metier et deviendra un villageois sans emploi. Il pourra ensuite se lier a un nouveau bloc que vous placerez. IMPORTANT : cela ne fonctionne que si vous n'avez JAMAIS echange avec ce villageois."
        },
        {
          heading: "La condition cruciale : aucun echange",
          content: "Un villageois avec lequel vous avez deja fait au moins un echange a son metier verrouille definitivement. Meme en detruisant son bloc de metier, il gardera sa profession et ses offres. Seuls les villageois avec lesquels vous n'avez jamais interagi peuvent changer de metier. C'est pourquoi il est important de verifier les offres avant d'echanger."
        },
        {
          heading: "Optimiser les echanges par reroll",
          content: "Pour obtenir les meilleurs echanges, placez un bloc de metier, verifiez les offres du villageois sans echanger, et si elles ne conviennent pas, detruisez le bloc et replacez-le. Le villageois reprendra le metier avec de nouvelles offres aleatoires. Repetez jusqu'a obtenir les echanges souhaites, puis effectuez un premier echange pour verrouiller."
        }
      ],
      tips: [
        "Ne faites jamais d'echange avec un villageois avant d'avoir verifie toutes ses offres",
        "Les villageois Nitwit (robe verte) ne peuvent pas prendre de metier",
        "Chaque bloc de metier correspond a une profession specifique",
        "Isolez les villageois pour controler quel bloc ils choisissent",
        "Les bebes villageois ne prennent un metier qu'une fois adultes"
      ],
      faq: [
        {
          question: "Pourquoi le villageois ne change-t-il pas de metier ?",
          answer: "Si vous avez deja echange avec lui, son metier est verrouille. Si ce n'est pas le cas, verifiez qu'il n'y a pas d'autre bloc de metier a proximite qu'il pourrait utiliser. Les villageois Nitwit ne prennent jamais de metier."
        },
        {
          question: "Quel bloc correspond a quel metier ?",
          answer: "Alambic = cuisinier, composter = fermier, enclume = forgeron d'armes, meule = forgeron d'outils, haut fourneau = armurier, table de cartographie = cartographe, metier a tisser = berger, tonneau = pecheur, fumoir = boucher, tailleur de pierre = tailleur, pupitre = bibliothecaire, chaudron = tanneur, table de fletching = fletchers."
        }
      ],
      relatedSlugs: ["que-faire", "desenchanter", "obtenir-miel", "peche", "passage-secret"]
    }
  },
  {
    slug: "oeuf-dragon",
    keyword: "comment récupérer l'oeuf de dragon minecraft",
    title: "Recuperer l'Oeuf de Dragon Minecraft",
    h1: "Comment Recuperer l'Oeuf de Dragon dans Minecraft",
    metaDescription: "Guide pour recuperer l'oeuf de dragon dans Minecraft. Methode du piston, methode de la torche et astuces pour ne pas le perdre.",
    category: "gameplay",
    volume: 210,
    content: {
      intro: "L'oeuf de dragon est un trophee unique qui apparait au sommet du portail de sortie de l'End apres avoir vaincu l'Ender Dragon pour la premiere fois. Il ne peut pas etre casse normalement car il se teleporte quand on le frappe. Voici les methodes pour le recuperer sans le perdre.",
      sections: [
        {
          heading: "Methode du piston (recommandee)",
          content: "Placez un piston face a l'oeuf de dragon et activez-le avec un levier ou une torche de redstone. Le piston poussera l'oeuf qui tombera sous forme d'item recuperable. C'est la methode la plus fiable et la plus simple. Assurez-vous d'avoir un bloc solide sous l'oeuf pour qu'il ne tombe pas dans le portail."
        },
        {
          heading: "Methode de la torche",
          content: "Cassez le bloc directement sous l'oeuf (2 blocs sous sa position sur le portail). Placez une torche au fond du trou, puis cassez le bloc entre la torche et l'oeuf. L'oeuf tombera sur la torche et se transformera en item. Cette methode fonctionne car l'oeuf obeit a la gravite comme le sable et le gravier."
        },
        {
          heading: "Eviter la teleportation",
          content: "Ne frappez JAMAIS l'oeuf directement (clic gauche). Il se teleportera aleatoirement dans un rayon de 15 blocs. Si cela arrive, retrouvez-le et utilisez la methode du piston ou de la torche. Si l'oeuf tombe dans le portail de sortie, il sera perdu. Entourez le portail de blocs avant de commencer."
        },
        {
          heading: "Que faire avec l'oeuf de dragon",
          content: "L'oeuf de dragon est purement decoratif dans le Minecraft vanilla. C'est le trophee le plus rare du jeu car il n'existe qu'un seul exemplaire par monde. Placez-le sur un piedestal dans votre base comme preuve de votre victoire. Certains mods permettent de le faire eclore pour obtenir un bebe dragon."
        }
      ],
      tips: [
        "Entourez le portail de l'End de blocs avant de toucher l'oeuf",
        "Le piston est la methode la plus sure et rapide",
        "Ne frappez jamais l'oeuf directement, il se teleportera",
        "Il n'existe qu'un seul oeuf de dragon par monde"
      ],
      faq: [
        {
          question: "L'oeuf de dragon peut-il eclore ?",
          answer: "Non, dans Minecraft vanilla, l'oeuf de dragon est un objet purement decoratif qui ne peut pas eclore. Des mods comme Dragon Mounts permettent cependant de faire eclore l'oeuf pour obtenir un dragon apprivoise."
        },
        {
          question: "Que faire si l'oeuf tombe dans le portail ?",
          answer: "Si l'oeuf tombe dans le portail de sortie de l'End, il sera envoye dans l'Overworld et apparaitra pres de votre point de spawn. Cherchez-le autour des coordonnees 0,0. Si vous le perdez completement, il est malheureusement impossible d'en obtenir un autre sans commandes."
        },
        {
          question: "Peut-on obtenir plusieurs oeufs de dragon ?",
          answer: "Non, l'oeuf n'apparait qu'apres la premiere defaite de l'Ender Dragon. Tuer le dragon a nouveau ne genere pas de nouvel oeuf. En survie, il est unique. Utilisez la commande /give pour en obtenir un autre si necessaire."
        }
      ],
      relatedSlugs: ["voler", "que-faire", "desenchanter", "reparer-arc", "passage-secret"]
    }
  },
  {
    slug: "desenchanter",
    keyword: "desenchanter objet minecraft",
    title: "Desenchanter un Objet Minecraft : Guide",
    h1: "Comment Desenchanter un Objet dans Minecraft",
    metaDescription: "Guide pour desenchanter des objets dans Minecraft. Meule, table d'enchantement et recuperation d'experience.",
    category: "gameplay",
    volume: 140,
    content: {
      intro: "Desenchanter un objet dans Minecraft permet de retirer les enchantements indesirables et de recuperer de l'experience. La meule (grindstone) est l'outil principal pour cette operation. Voici comment desenchanter vos objets efficacement.",
      sections: [
        {
          heading: "Utiliser la meule (Grindstone)",
          content: "La meule est le bloc dedie au desenchantement. Craftez-la avec 2 planches, 2 batons et une dalle de pierre. Placez l'objet enchante dans l'un des deux emplacements de la meule. L'objet resultant sera identique mais sans enchantement. Vous recupererez une partie de l'experience utilisee pour l'enchantement sous forme d'orbes d'XP."
        },
        {
          heading: "Reparer et desenchanter simultanement",
          content: "La meule permet aussi de combiner deux objets du meme type pour les reparer, en retirant tous leurs enchantements. Placez deux objets identiques dans les deux emplacements : le resultat sera un objet repare et desenchante. La durabilite des deux objets est additionnee avec un bonus de 5%."
        },
        {
          heading: "Enchantements impossibles a retirer",
          content: "La malediction du Vanishing (Curse of Vanishing) et la malediction du Lien (Curse of Binding) ne peuvent PAS etre retirees par la meule. Ces maledictions sont permanentes et ne peuvent etre contournees qu'en combinant l'objet avec un autre sur une enclume, ce qui transfere la malediction. La seule solution est de remplacer l'objet."
        },
        {
          heading: "Alternatives : enclume et livres",
          content: "Si vous voulez recuperer un enchantement specifique plutot que de le detruire, ce n'est malheureusement pas possible en vanilla. L'enclume permet de combiner des enchantements mais pas de les extraire. En revanche, vous pouvez utiliser l'enclume pour ajouter des enchantements souhaites a un nouvel objet via des livres enchantes."
        }
      ],
      tips: [
        "La meule est le seul moyen fiable de retirer les enchantements",
        "Vous recuperez de l'XP en desenchantant, c'est un bon moyen de recycler",
        "Les maledictions (Vanishing, Binding) sont impossibles a retirer",
        "Combinez deux objets dans la meule pour reparer ET desenchanter"
      ],
      faq: [
        {
          question: "Peut-on transferer un enchantement d'un objet a un livre ?",
          answer: "Non, il n'est pas possible d'extraire un enchantement vers un livre en Minecraft vanilla. Vous pouvez seulement detruire les enchantements avec la meule ou combiner des objets sur l'enclume."
        },
        {
          question: "Combien d'XP recupere-t-on en desenchantant ?",
          answer: "L'XP recuperee est aleatoire mais basee sur le nombre et le niveau des enchantements retires. Plus l'objet est enchante, plus vous recupererez d'XP. Ce n'est pas la totalite de l'XP investie."
        },
        {
          question: "La meule fonctionne-t-elle sur les livres enchantes ?",
          answer: "Oui, vous pouvez placer un livre enchante dans la meule pour le transformer en livre normal et recuperer de l'XP. C'est utile pour recycler des livres avec des enchantements indesirables."
        }
      ],
      relatedSlugs: ["reparer-arc", "enlever-metier-villageois", "voir-durabilite", "que-faire", "oeuf-dragon"]
    }
  },
  {
    slug: "reparer-arc",
    keyword: "comment réparer un arc minecraft",
    title: "Reparer un Arc Minecraft : Guide",
    h1: "Comment Reparer un Arc dans Minecraft",
    metaDescription: "Guide complet pour reparer un arc dans Minecraft. Enclume, table de craft, enchantement Mending et toutes les methodes.",
    category: "gameplay",
    volume: 140,
    content: {
      intro: "Les arcs sont des armes essentielles dans Minecraft, mais ils s'usent avec le temps. Plusieurs methodes permettent de les reparer, chacune avec ses avantages. Decouvrez comment reparer votre arc et conserver ses precieux enchantements.",
      sections: [
        {
          heading: "Reparer avec une enclume",
          content: "L'enclume est la meilleure methode pour reparer un arc tout en conservant ses enchantements. Placez votre arc dans le premier emplacement et un arc neuf dans le second. Le resultat combinera la durabilite des deux arcs et fusionnera les enchantements. Cela coute des niveaux d'experience, et le cout augmente a chaque reparation."
        },
        {
          heading: "Reparer sur la table de craft",
          content: "Vous pouvez combiner deux arcs endommages sur la grille de craft 2x2 ou la table de craft. La durabilite des deux arcs sera additionnee avec un bonus de 5%. ATTENTION : cette methode supprime tous les enchantements. Ne l'utilisez que pour des arcs non enchantes."
        },
        {
          heading: "L'enchantement Mending (Reparation)",
          content: "L'enchantement Mending est la solution ultime pour maintenir votre arc indefiniment. Quand vous gagnez de l'experience en tenant l'objet enchante Mending, une partie de l'XP repare automatiquement l'objet. Obtenez Mending via les echanges avec un bibliothecaire, la peche ou le loot dans les structures."
        },
        {
          heading: "Le probleme Mending + Infinity",
          content: "L'enchantement Infinity (fleches infinies) et Mending sont mutuellement exclusifs depuis la version 1.11.1. Vous devez choisir entre un arc qui ne manque jamais de fleches ou un arc qui se repare automatiquement. La plupart des joueurs preferent Mending car les fleches sont faciles a obtenir, tandis que les niveaux d'experience sont plus precieux."
        }
      ],
      tips: [
        "Mending est le meilleur enchantement pour un arc a long terme",
        "L'enclume conserve les enchantements lors de la reparation",
        "Ne combinez jamais un arc enchante sur la table de craft",
        "Le cout en XP de l'enclume augmente a chaque reparation successive"
      ],
      faq: [
        {
          question: "Peut-on avoir Mending et Infinity sur le meme arc ?",
          answer: "Non, ces deux enchantements sont mutuellement exclusifs. Vous devez choisir l'un ou l'autre. La plupart des joueurs preferent Mending pour la durabilite a long terme."
        },
        {
          question: "Combien coute la reparation a l'enclume ?",
          answer: "Le cout en niveaux augmente a chaque reparation. Apres 6 reparations environ, l'enclume affiche 'Trop cher !' et refuse la reparation. C'est pourquoi Mending est essentiel pour un arc permanent."
        },
        {
          question: "Quel est le meilleur arc possible dans Minecraft ?",
          answer: "L'arc optimal combine Power V, Punch II, Flame I et Mending (ou Infinity). Ajoutez Unbreaking III pour maximiser la durabilite. Combinez les enchantements progressivement sur une enclume avec des livres enchantes."
        }
      ],
      relatedSlugs: ["desenchanter", "voir-durabilite", "que-faire", "peche", "oeuf-dragon"]
    }
  },
  {
    slug: "que-faire",
    keyword: "que faire dans minecraft",
    title: "Que Faire dans Minecraft : Idees et Activites",
    h1: "Que Faire dans Minecraft ?",
    metaDescription: "Decouvrez des dizaines d'idees d'activites dans Minecraft. Constructions, exploration, defis, farms et bien plus pour ne jamais s'ennuyer.",
    category: "gameplay",
    volume: 260,
    content: {
      intro: "Minecraft offre une liberte quasi infinie, ce qui peut parfois laisser les joueurs sans inspiration. Que vous soyez debutant ou veteran, il y a toujours quelque chose de nouveau a entreprendre. Voici une liste complete d'activites pour renouveler votre experience de jeu.",
      sections: [
        {
          heading: "Objectifs de progression",
          content: "Suivez la progression naturelle du jeu : collectez du bois, fabriquez des outils en fer puis en diamant, explorez le Nether, trouvez une forteresse, et battez l'Ender Dragon. Ensuite, invoquez et terrassez le Wither, explorez les cites de l'End, et obtenez des Elytres. Chaque etape offre de nouveaux defis et recompenses."
        },
        {
          heading: "Constructions et megaprojets",
          content: "La construction est le coeur de Minecraft. Construisez votre base de reve : un chateau medieval, une ville moderne, un village sous-marin, une base dans le Nether. Realisez des megaprojets comme un systeme de transport en Nether avec de la glace bleue, une statue geante, ou une reproduction d'un lieu reel bloc par bloc."
        },
        {
          heading: "Fermes automatiques et redstone",
          content: "Maitrisez la redstone en construisant des fermes automatiques. Commencez par une ferme a fer, puis une ferme a XP, une ferme a canne a sucre, et progressez vers des usines complexes. Chaque ferme automatique est un projet gratifiant qui ameliore votre efficacite dans le jeu."
        },
        {
          heading: "Defis et challenges",
          content: "Lancez-vous des defis pour renouveler l'experience : survie sur une ile (Skyblock), speedrun pour battre l'Ender Dragon le plus vite possible, mode hardcore (une seule vie), survie en mode pacifiste sans tuer de mobs, ou collectionnez tous les succes du jeu. Les defis communautaires comme '100 jours en Hardcore' sont tres populaires."
        },
        {
          heading: "Exploration et collection",
          content: "Explorez tous les biomes du jeu, trouvez toutes les structures rares (manoir des Evokers, monument ocean, cite ancienne). Collectionnez tous les types de blocs, creez un zoo avec tous les animaux apprivoisables, ou assemblez une collection de toutes les armures et outils. Completez la carte de votre monde en explorant le terrain."
        }
      ],
      tips: [
        "Fixez-vous un objectif precis pour chaque session de jeu",
        "Le mode Hardcore ajoute une tension enorme au jeu",
        "Rejoignez un serveur multijoueur pour une experience sociale",
        "Les modpacks ajoutent des centaines d'heures de contenu supplementaire",
        "Documentez vos constructions avec des screenshots pour rester motive"
      ],
      faq: [
        {
          question: "Que faire apres avoir battu l'Ender Dragon ?",
          answer: "Battez le Wither, obtenez des Elytres, construisez une mega-base, creez des fermes automatiques, explorez les cites anciennes, collectionnez tous les succes, ou tentez le mode Hardcore. Le jeu ne fait que commencer apres le dragon."
        },
        {
          question: "Minecraft est-il amusant en solo ?",
          answer: "Absolument ! Le mode solo offre une experience immersive de survie et de construction. Cependant, le multijoueur ajoute une dimension sociale unique. Essayez les deux pour trouver votre preference."
        },
        {
          question: "Quels sont les meilleurs modpacks pour renouveler le jeu ?",
          answer: "Les modpacks populaires incluent RLCraft (survie extreme), Create (machines et automation), Pixelmon (Pokemon dans Minecraft) et All the Mods. Chacun transforme completement l'experience de jeu."
        }
      ],
      relatedSlugs: ["voler", "passage-secret", "generateur-cercle", "peche", "obtenir-miel"]
    }
  },
  {
    slug: "obtenir-miel",
    keyword: "comment avoir du miel sur minecraft",
    title: "Obtenir du Miel Minecraft : Guide",
    h1: "Comment Obtenir du Miel dans Minecraft",
    metaDescription: "Guide pour recolter du miel dans Minecraft. Ruches, nids d'abeilles, bouteilles de miel et comment eviter les piqures.",
    category: "gameplay",
    volume: 260,
    content: {
      intro: "Le miel est une ressource utile dans Minecraft, servant a fabriquer des blocs de miel, du sucre et des bouteilles de miel qui soignent et retirent le poison. Les abeilles le produisent dans les ruches et nids d'abeilles. Voici comment le recolter en toute securite.",
      sections: [
        {
          heading: "Trouver des abeilles et des nids",
          content: "Les nids d'abeilles apparaissent naturellement dans les biomes de plaines, forets de fleurs, plaines de tournesols et prairies. Chaque nid contient 1 a 3 abeilles. Vous pouvez aussi creer vos propres ruches en craftant 6 planches et 3 rayons de miel. Les abeilles pollinisent les fleurs et retournent a leur ruche pour produire du miel."
        },
        {
          heading: "Recolter du miel en toute securite",
          content: "Quand le nid ou la ruche atteint le niveau 5 de miel (texture degoulinante visible), utilisez une bouteille en verre pour recolter une bouteille de miel, ou des cisailles pour obtenir des rayons de miel. IMPORTANT : placez un feu de camp sous la ruche (dans les 5 blocs en dessous) pour calmer les abeilles et eviter les piqures."
        },
        {
          heading: "Creer une ferme a miel",
          content: "Placez des ruches avec des fleurs a proximite (rayon de 2 blocs). Les abeilles pollinisent les fleurs puis retournent a leur ruche. Apres 5 visites de fleurs, le niveau de miel de la ruche augmente de 1. Utilisez des distributeurs avec des bouteilles en verre et un observateur pour automatiser la recolte. Un feu de camp sous chaque ruche empeche les abeilles de devenir hostiles."
        },
        {
          heading: "Utilisations du miel",
          content: "Les bouteilles de miel restaurent 6 points de faim et retirent le poison. Le bloc de miel ralentit les mouvements et les chutes (pas de degats de chute). Le sucre obtenu a partir du miel sert en patisserie. Les rayons de miel sont utilises pour creer des ruches ou des bougies. Le miel est donc a la fois utile pour la survie et la redstone."
        }
      ],
      tips: [
        "Placez toujours un feu de camp sous la ruche avant de recolter",
        "Les bouteilles de miel guerissent le poison, tres utile contre les sorcieres",
        "Les blocs de miel sont excellents pour les systemes de redstone et les parkours",
        "Plantez des fleurs pres de vos ruches pour accelerer la production",
        "Utilisez un distributeur avec des cisailles pour automatiser la recolte"
      ],
      faq: [
        {
          question: "Comment eviter de se faire piquer ?",
          answer: "Placez un feu de camp sous la ruche ou le nid. La fumee calme les abeilles et vous pouvez recolter sans risque. Un feu de camp dans un rayon de 5 blocs sous la ruche suffit. Vous pouvez aussi porter une armure complete pour reduire les degats."
        },
        {
          question: "Comment deplacer des abeilles vers une nouvelle ruche ?",
          answer: "Utilisez une laisse sur une abeille pour la guider, ou tenez une fleur en main pour l'attirer. Vous pouvez aussi casser un nid avec un outil enchante Silk Touch pour deplacer les abeilles et le nid ensemble."
        },
        {
          question: "Combien de temps faut-il pour remplir une ruche ?",
          answer: "Une ruche met environ 2 a 5 minutes en temps reel pour atteindre le niveau maximal de miel, selon le nombre d'abeilles et la proximite des fleurs. Plus il y a d'abeilles et de fleurs, plus la production est rapide."
        }
      ],
      relatedSlugs: ["peche", "que-faire", "enlever-metier-villageois", "voir-durabilite", "passage-secret"]
    }
  },
  {
    slug: "peche",
    keyword: "pecher dans minecraft",
    title: "Peche Minecraft : Guide Complet",
    h1: "Comment Pecher dans Minecraft",
    metaDescription: "Guide complet de la peche dans Minecraft. Fabriquer une canne, enchantements, tresors et AFK fishing.",
    category: "gameplay",
    volume: 260,
    content: {
      intro: "La peche dans Minecraft est une activite relaxante et tres rentable. En plus de poissons pour se nourrir, vous pouvez trouver des tresors rares comme des livres enchantes, des arcs, des selles et bien plus. Voici tout ce qu'il faut savoir pour devenir un pecheur expert.",
      sections: [
        {
          heading: "Fabriquer une canne a peche",
          content: "La canne a peche se craft avec 3 batons en diagonale et 2 fils d'araignee. Placez les batons en diagonale de bas-gauche a haut-droite et les fils sur les deux emplacements a droite du baton le plus bas. Vous pouvez aussi trouver des cannes enchantees dans les coffres de structures ou les obtenir en pechant."
        },
        {
          heading: "Comment pecher",
          content: "Equippez la canne et faites un clic droit pres d'un point d'eau d'au moins 2 blocs de profondeur. Attendez que le bouchon plonge sous l'eau et que des bulles s'approchent du flotteur. Des que le flotteur descend brusquement, faites immediatement un clic droit pour remonter la prise. Le timing est crucial : si vous attendez trop longtemps, le poisson s'echappe."
        },
        {
          heading: "Enchantements de peche",
          content: "Luck of the Sea (Chance de la mer) augmente les chances de tresors et reduit les dechets. Lure (Appat) reduit le temps d'attente entre chaque prise. Unbreaking III prolonge la durabilite de la canne. Mending la repare automatiquement avec l'XP gagnee. La combinaison ideale est Luck of the Sea III, Lure III, Unbreaking III et Mending."
        },
        {
          heading: "Les differentes prises",
          content: "Les prises se divisent en trois categories : poissons (85% de base), tresors (5%) et dechets (10%). Les tresors incluent des livres enchantes, des arcs, des cannes enchantees, des selles, des etiquettes et du nautilus. Avec Luck of the Sea III, le taux de tresors monte a environ 11%. Les poissons incluent la morue, le saumon, le poisson-globe et le poisson tropical."
        }
      ],
      tips: [
        "Luck of the Sea III est l'enchantement le plus important pour la peche",
        "Pechez sous la pluie pour reduire le temps d'attente de 20%",
        "La peche donne de l'XP, c'est une bonne source d'experience",
        "Observez les bulles qui s'approchent du flotteur pour anticiper la prise",
        "Une canne avec Mending se repare indefiniment grace a l'XP de peche"
      ],
      faq: [
        {
          question: "Quels tresors peut-on pecher ?",
          answer: "Les tresors incluent des livres enchantes (y compris Mending), des arcs enchantes, des cannes enchantees, des selles, des etiquettes, des nautilus et des peignes de lys. Luck of the Sea augmente significativement le taux de tresors."
        },
        {
          question: "Peut-on pecher des items specifiques ?",
          answer: "Non, les prises sont aleatoires dans chaque categorie. Vous ne pouvez pas cibler un enchantement specifique. Avec Luck of the Sea III, vous aurez plus de tresors en general, mais le contenu reste aleatoire."
        },
        {
          question: "La ferme AFK a la peche fonctionne-t-elle encore ?",
          answer: "Les fermes AFK de peche ont ete fortement nerfees depuis la version 1.16. Le flotteur doit maintenant etre en plein air avec un ciel ouvert au-dessus pour obtenir des tresors. Les designs AFK fonctionnent encore pour les poissons et l'XP mais sont moins efficaces pour les tresors."
        }
      ],
      relatedSlugs: ["que-faire", "obtenir-miel", "reparer-arc", "desenchanter", "voir-durabilite"]
    }
  },
  {
    slug: "dupliquer-item",
    keyword: "comment dupliquer un item minecraft creatif",
    title: "Dupliquer un Item Minecraft Creatif",
    h1: "Comment Dupliquer un Item en Creatif dans Minecraft",
    metaDescription: "Guide pour dupliquer des items en mode creatif dans Minecraft. Raccourcis clavier, inventaire creatif et astuces.",
    category: "gameplay",
    volume: 140,
    content: {
      intro: "En mode creatif, Minecraft offre des raccourcis pour dupliquer rapidement des items et des blocs. Ces techniques sont essentielles pour les constructeurs qui manipulent de grandes quantites de materiaux. Voici toutes les methodes de duplication en creatif.",
      sections: [
        {
          heading: "Clic molette (Pick Block)",
          content: "La methode la plus rapide est le clic molette (bouton central de la souris) sur un bloc dans le monde. Cela place un stack complet de ce bloc dans votre barre d'inventaire. Si vous visez une entite (coffre, cadre, etc.) en maintenant Ctrl + clic molette, vous obtenez le bloc avec ses donnees NBT (contenu du coffre inclus)."
        },
        {
          heading: "Dupliquer dans l'inventaire creatif",
          content: "Dans l'inventaire creatif, cliquez sur un item avec le clic molette pour en obtenir un stack complet. Vous pouvez aussi glisser-deposer des items entre les emplacements. Pour obtenir des items avec des enchantements ou des NBT specifiques, utilisez l'onglet de recherche de l'inventaire creatif."
        },
        {
          heading: "Dupliquer avec la touche Ctrl",
          content: "En mode creatif, maintenez Ctrl et appuyez sur le clic molette en visant un bloc place dans le monde pour copier le bloc avec toutes ses proprietes. Cela fonctionne avec les panneaux (copie le texte), les coffres (copie le contenu), les tetes (copie le skin) et d'autres blocs avec des donnees speciales."
        },
        {
          heading: "Commandes utiles en creatif",
          content: "La commande /give vous permet d'obtenir n'importe quel item en quantite souhaitee. Par exemple, /give @s diamond 64 vous donne un stack de diamants. La commande /clone copie des zones entieres de blocs d'un endroit a un autre. Combinee avec /fill, vous pouvez dupliquer des structures rapidement."
        }
      ],
      tips: [
        "Le clic molette est le raccourci le plus utile en creatif",
        "Ctrl + clic molette copie aussi les donnees NBT du bloc",
        "Utilisez /clone pour dupliquer des structures entieres",
        "L'inventaire creatif contient tous les items du jeu dans l'onglet recherche"
      ],
      faq: [
        {
          question: "Peut-on dupliquer des items en mode survie ?",
          answer: "En mode survie, la duplication est generalement consideree comme un exploit. Certains bugs permettent parfois la duplication, mais ils sont corriges au fil des mises a jour. En survie legitime, il n'y a pas de methode de duplication."
        },
        {
          question: "Comment obtenir un item avec des enchantements specifiques en creatif ?",
          answer: "Utilisez la commande /enchant apres avoir obtenu l'item, ou /give avec des donnees NBT. Vous pouvez aussi utiliser une enclume avec des livres enchantes provenant de l'inventaire creatif."
        }
      ],
      relatedSlugs: ["que-faire", "voler", "voir-durabilite", "passage-secret", "generateur-cercle"]
    }
  },
  {
    slug: "voir-durabilite",
    keyword: "voir durabilité minecraft",
    title: "Voir la Durabilite Minecraft : Guide",
    h1: "Comment Voir la Durabilite dans Minecraft",
    metaDescription: "Affichez la durabilite exacte de vos outils et armures dans Minecraft. Touche F3+H, mods et astuces pour gerer la durabilite.",
    category: "gameplay",
    volume: 170,
    content: {
      intro: "Par defaut, Minecraft affiche la durabilite des objets sous forme d'une barre coloree, mais sans chiffres precis. Il est pourtant essentiel de connaitre la durabilite exacte de vos outils et armures pour eviter qu'ils ne se cassent au pire moment. Voici comment afficher les valeurs numeriques.",
      sections: [
        {
          heading: "Raccourci F3+H (Java Edition)",
          content: "Sur Java Edition, appuyez simultanement sur F3+H pour activer les infobulles avancees. Dorenavant, en survolant un objet dans votre inventaire, vous verrez sa durabilite exacte sous forme de nombre (ex: 1234/1561 pour une pioche en diamant). Ce raccourci active aussi l'affichage des identifiants d'items et des tags NBT."
        },
        {
          heading: "Comprendre les valeurs de durabilite",
          content: "Chaque materiau a une durabilite maximale differente. Bois : 59, Pierre : 131, Fer : 250, Or : 32, Diamant : 1561, Netherite : 2031. Pour les armures, chaque piece a sa propre valeur. Le nombre affiche (ex: 100/1561) indique les utilisations restantes sur le total. Quand le premier nombre atteint 0, l'objet se casse."
        },
        {
          heading: "Sur Bedrock Edition",
          content: "Bedrock Edition n'a pas d'equivalent a F3+H. La seule indication est la barre de durabilite coloree sous l'item. Certains resource packs communautaires ajoutent un affichage numerique. Vous pouvez aussi estimer la durabilite par la couleur de la barre : vert = bon etat, jaune = moyen, rouge = critique."
        },
        {
          heading: "Mods pour la durabilite",
          content: "Plusieurs mods ameliorent l'affichage de la durabilite. 'Durability Viewer' affiche la durabilite en temps reel sur le HUD. 'Giselbaer's Durability Viewer' ajoute un affichage permanent dans un coin de l'ecran. Vanilla Tweaks propose un datapack qui alerte quand un outil est presque casse."
        }
      ],
      tips: [
        "F3+H est le raccourci essentiel pour voir la durabilite sur Java",
        "Reparez vos outils en netherite quand ils tombent sous 100 de durabilite",
        "L'enchantement Unbreaking III triple effectivement la duree de vie",
        "Mending repare automatiquement l'objet tenu avec l'experience gagnee"
      ],
      faq: [
        {
          question: "Comment fonctionne l'enchantement Unbreaking ?",
          answer: "Unbreaking donne une chance que l'utilisation ne reduise pas la durabilite. Au niveau III, l'objet a 75% de chance de ne pas perdre de durabilite a chaque utilisation, ce qui multiplie sa duree de vie par environ 4."
        },
        {
          question: "Peut-on reparer un objet a 0 de durabilite ?",
          answer: "Non, quand un objet atteint 0 de durabilite, il est detruit et disparait de l'inventaire. C'est pourquoi il est crucial de surveiller la durabilite et de reparer avant qu'elle n'atteigne 0."
        },
        {
          question: "La barre de durabilite est-elle fiable ?",
          answer: "La barre donne une indication visuelle approximative. Pour les outils precieux (netherite enchantee), activez F3+H pour voir les chiffres exacts. Un outil avec une barre rouge peut avoir encore 50+ utilisations."
        }
      ],
      relatedSlugs: ["desenchanter", "reparer-arc", "que-faire", "dupliquer-item", "vider-cache"]
    }
  },
  {
    slug: "vider-cache",
    keyword: "vider cache minecraft",
    title: "Vider le Cache Minecraft : Guide",
    h1: "Comment Vider le Cache de Minecraft",
    metaDescription: "Guide pour vider le cache de Minecraft et resoudre les problemes de performance. Java et Bedrock, fichiers temporaires et optimisation.",
    category: "gameplay",
    volume: 170,
    content: {
      intro: "Vider le cache de Minecraft peut resoudre de nombreux problemes : lags, crashes, textures corrompues ou espace disque sature. Le cache inclut les fichiers temporaires, les assets telecharges et les donnees des serveurs. Voici comment le nettoyer proprement sur chaque edition.",
      sections: [
        {
          heading: "Vider le cache sur Java Edition",
          content: "Ouvrez le dossier .minecraft (tapez %appdata%/.minecraft dans la barre d'adresse de l'explorateur Windows). Supprimez le contenu du dossier 'assets' (il sera retelecharge automatiquement). Vous pouvez aussi supprimer le dossier 'webcache2' et les fichiers dans 'server-resource-packs'. Ne supprimez JAMAIS les dossiers 'saves' ou 'worlds'."
        },
        {
          heading: "Vider le cache sur Bedrock Edition",
          content: "Sur Windows 10/11, allez dans Parametres > Applications > Minecraft > Stockage > Fichiers temporaires > Supprimer. Sur mobile, allez dans les parametres de l'application et videz le cache. Sur console, desinstallez et reinstallez le jeu en conservant vos sauvegardes cloud. Attention a ne pas supprimer les donnees de jeu."
        },
        {
          heading: "Supprimer les fichiers inutiles",
          content: "Dans le dossier .minecraft, les fichiers 'crash-reports' et 'logs' peuvent etre supprimes sans risque. Les anciens profils dans 'versions' que vous n'utilisez plus prennent aussi de la place. Les screenshots peuvent etre deplaces ailleurs. Le dossier 'shaderpacks' peut contenir des shaders inutilises a supprimer."
        },
        {
          heading: "Reinstallation propre",
          content: "Si les problemes persistent, une reinstallation propre peut etre necessaire. Sauvegardez d'abord vos dossiers 'saves' (mondes), 'resourcepacks', 'shaderpacks' et 'mods'. Desinstallez Minecraft, supprimez le dossier .minecraft, puis reinstallez. Replacez vos sauvegardes dans le nouveau dossier .minecraft."
        }
      ],
      tips: [
        "Sauvegardez toujours vos mondes avant de toucher au dossier .minecraft",
        "Le dossier 'assets' se retelecharge automatiquement au lancement",
        "Supprimez les crash-reports et logs regulierement pour gagner de l'espace",
        "Une reinstallation propre resout la plupart des problemes persistants"
      ],
      faq: [
        {
          question: "Vider le cache supprime-t-il mes mondes ?",
          answer: "Non, si vous ne touchez qu'aux fichiers temporaires (assets, webcache2, logs). Vos mondes sont dans le dossier 'saves' (Java) ou dans les donnees de l'application (Bedrock). Ne supprimez jamais le dossier saves."
        },
        {
          question: "Combien d'espace le cache prend-il ?",
          answer: "Le cache peut prendre de quelques centaines de Mo a plusieurs Go, surtout avec des resource packs de serveurs telecharges. Les logs et crash-reports accumules peuvent aussi peser lourd au fil du temps."
        },
        {
          question: "Faut-il vider le cache regulierement ?",
          answer: "Ce n'est pas necessaire sauf en cas de probleme. Minecraft gere generalement bien son cache. Nettoyez-le si vous rencontrez des bugs graphiques, des crashes repetes ou si vous manquez d'espace disque."
        }
      ],
      relatedSlugs: ["allouer-ram", "installer-mods", "installer-shaders", "installer-pack-texture", "voir-durabilite"]
    }
  }
];
