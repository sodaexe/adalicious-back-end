## ℹ️ Information

Back-end en NodeJS x Express simple et efficace

La base de données choisie ici est MySQL

## ➕ Contenu complémentaire

### Nodemon

Marre de devoir couper son serveur puis le relancer pour appliquer les modifications ?

Une solution → installer Nodemon

```bash
npm i nodemon
```

Ajouter au sein de son `package.json`

```json
{
	"scripts": {
		"start": "node index.js",
		"dev": "nodemon index.js"
	}
}
```

> A noter que `index.js` correspond au nom de son fichier. S’il se nomme autrement, remplacer en fonction.

Dorénavant, pour lancer ton code, ce sera avec la commande `npm run dev`

### Rendre son code modulaire : `module`

Rajouter tout simplement dans son `package.json`

```json
"type": "module"
```

Tu dois transformer ensuite les `require()` en `import`

Si tu veux avoir un exemple, tu peux lire le paragraphe suivant sur les `cors` 👇

### Cors

Si tu n’as pas encore rencontré de soucis de `cors`, sache que ça va très vite arriver 👀

Installation :

```bash
npm i cors
```
