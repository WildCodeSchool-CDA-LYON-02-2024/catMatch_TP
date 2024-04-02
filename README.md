# TP: CatMatch

## Objectif :

- Développer une application ReactJS interactive et ludique nommée CatMatch.
- L'application présentera deux images de chats côte à côte, sélectionnées aléatoirement dans une base de données d'images. Les chats présentés devront être différents l'un de l'autre à chaque tour.

## Fonctionnalités :

- L'utilisateur pourra cliquer sur l'une des deux images de chat présentées.
- Le chat sélectionné par l'utilisateur gagnera un point.
- Après chaque sélection, l'application affichera deux nouvelles images de chats différents.
- L'application conservera un score cumulé pour chaque chat.
- Une page de score sera disponible, affichant le classement des chats les plus populaires en fonction du nombre de sélections des utilisateurs.

## Contraintes techniques :

- L'application doit être développée en utilisant ReactJS.
- La base de données d'images de chats peut être hébergée localement ou être issue d'une API externe (un fichier JSON sera fournie)
- L'application doit gérer les cas où deux images identiques seraient sélectionnées par erreur.
- L'application doit être responsive et fonctionner sur différentes tailles d'écran.
- Le code doit être propre, commenté et respecter les bonnes pratiques de développement.

```json
[
  {
    "name": "Chaton allongé",
    "link": "https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg"
  },
  {
    "name": "Chat regarde haut",
    "link": "https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_1280.jpg"
  },
  {
    "name": "Chat tigré yeux bleu",
    "link": "https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_1280.jpg"
  },
  {
    "name": "Chat pate",
    "link": "https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930_1280.jpg"
  },

  {
    "name": "Chat grimpe",
    "link": "https://cdn.pixabay.com/photo/2018/11/29/23/34/cat-3846780_1280.jpg"
  },

  {
    "name": "Chat baille",
    "link": "https://cdn.pixabay.com/photo/2014/05/07/06/44/cat-339400_1280.jpg"
  },

  {
    "name": "Trois Châtons",
    "link": "https://cdn.pixabay.com/photo/2018/07/13/10/20/kittens-3535404_1280.jpg"
  }
]
```
