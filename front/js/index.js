fetch("http://localhost:3000/api/products")                             /*récupération des kanapé*/
.then(response => response.json())
.then(products => {                                                    /*function flécher a effectuer quand on à  la réponse de la requête fetch*/
  
let baliseItem = document.getElementById("items");                    /*récuperation de la div qui englobe la cards des kanapés*/

products.forEach(product => {                                        /*une boucle sur les produits pour les afficher un à un */

  const liens = document.createElement('a');                        /*création des éléments du DOM*/
  liens.setAttribute("id", "42");
  liens.setAttribute(`href`, `./product.html?id=${product._id}`);   /*aller su la page product avec l'id du produits sélectionner */
  baliseItem.appendChild(liens);                                   /*injectent la constante  lien en tant que fils de la div items*/

  const kanapArticle = document.createElement('article');                 /*création des éléments du DOM*/
  liens.appendChild(kanapArticle);                                       /*injectent la constante  test en tant que fils de la constante  liens*/
  
  const image = document.createElement('img');                 /*création des éléments du DOM*/
  image.setAttribute(`src`, product.imageUrl);
  image.setAttribute(`alt`, product.altTxt);
  kanapArticle.appendChild(image);                                   /*injectent la constante  image en tant que fils de la constante test*/


  const titre = document.createElement('h3');              /*création des éléments du DOM*/
  titre.setAttribute(`class`, `productName`);
  titre.textContent = product.name;
  kanapArticle.appendChild(titre);                                 /*injectent la constante  titre en tant que fils de la constante  test*/
  
  const paragraphe = document.createElement('p');         /*création des éléments du DOM*/
  paragraphe.setAttribute(`class`, `productDescription`);
  paragraphe.textContent = product.description;
  kanapArticle.appendChild(paragraphe);                          /*injectent la constante  paragraphe en tant que fils de la constante  test*/
       
   });
})                                                 /*Fin de la création du Dom*/ 
.catch(error => {                                 /*erreur possible et alert*/
  alert('impossible de contacter avec le server');
});



