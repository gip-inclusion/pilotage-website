# itou-pilotage

Le pilotage de l'inclusion

## Consignes de développement en local

Nécessite node `v12.22.0` ou superieur pour installer les dépendances `npm install`

1. Lancer la version locale en live reload avec `npm run dev`
2. Intégrer ou modifier le html, scss ou js dans le répertoire `src`
3. Générer une version de déploiement otimisée dans le répertoire `dist` avec la commande `npm run build`
4. Faire une pull request


## Consignes de déploiement en production sur github pages
1. Déployer automatiquement le contenu  du répertoire `dist` de la branche `master` sur github pages avec `npm run deploy`


## Consignes de mise à jour du Thème Itou

Le pilotage de l'inclusion utilise le [Thème Itou](https://github.com/betagouv/itou-theme)

Pour mettre à jour le thème, vous devrez :
1. Modifier le n° de version du thème dans le fichier `package.json`
2. Lancer la commande `npm update itoutheme`
3. Importer les nouveaux médias éventuels via `npm run importTheme`
