const params = new URLSearchParams(document.location.search);          /*récupérer ce que l'adresse actuel contient avec search params*/
const id = params.get("id");                                        /*prendre l'id de l'URL correspondant au produit cliqué  contenue dans params*/
let url = "http://localhost:3000/api/products/"+id; 


fetch(url)                                                          /*requête fetch sur l'url précédemment crée */
.then(response => response.json())                                 /*réponse converti en json pour pouvoir l'utiliser dans le script js */
.then(product => {                                               /*product contient le kanapés*/
  let classImg = document.querySelector('.item__img');               /*création du dom*/   /*Image*/
  let image = document.createElement('img');
  image.setAttribute(`src`, product.imageUrl);
  image.setAttribute(`alt`, product.altTxt); 
  classImg.appendChild(image);                                                 /*injectent la variable image  en tant que fils de la div test*/
 
  let classtitre = document.querySelector('.item__content__titlePrice');  /*création du dom*/
  let paragraphePrix = document.getElementsByTagName('p');
  let prix = document.getElementById('price');                            /*création du dom*/   /*PRIX*/
  prix.textContent = product.price;
  paragraphePrix[0].appendChild(prix);                                  /*injectent la variable prix  en tant que fils de la div classtitre(titre prix)*/ 
  
  let titre = document.getElementById('title');                 /*création du dom*/ /*Titre du Podruit*/ 
  titre.textContent = product.name;
  classtitre.appendChild(titre);                               /*injectent la variable titre en tant que fils de la div classtitre(titre prix)*/ 
  

  let contdescription = document.querySelector('.item__content__description__title');  /*création du dom*/  /*Description */
  let description = document.getElementById('description');
  description.textContent = product.description;
  contdescription.appendChild(description);  
                                             /*injectent la variable contdescription en tant que fils de la div description (titre description)*/ 



 
  const selectR = document.getElementById('colors');            /*récupération de l'id colors      création du doms    Couleur*/ 
  product.colors.forEach(color =>{                             /*boucle sur les couleur récupérer de la fetch product*/
  const option = document.createElement('option');            /*création de l'éléments option pour choisir les couleurs*/
  option.value = color;                                      /*la value d'option est égale à la boucle foreach des produit*/
                                                            /*récupérer avec le fetch on a accès a tout les choix de couleur */ 
  option.textContent = color;                              /*ce que contient le texte est  comme l'option */
  selectR.appendChild(option);                            /*injectent la constante  option en tant que fils de la div SelectR (couleur)*/ 
  
});

let ajoutPanier = document.getElementById("addToCart")                      /*récupération de la div du bouton ajouter au panier"*/
  ajoutPanier.addEventListener("click",() =>{                               /*j'écoute le click sur le bouton précédemment récupérer*/
 
    let couleurSelectionnée = document.querySelector("select").value /*je récupère la couleur sélectionner grâce à la div select est ça value*/
    let quantitéSeléctionée = document.querySelector("input").value  /*je récupère la quantité sélectionner grâce à la div input est ça value*/
    const newProduct = {                                             /*Création de l'objet newproduct  pour l'envoyer au local storage*/
      "colors":   couleurSelectionnée,                               /*qui contient la couleur grâce à couleur sélectionner*/
      "id":      product._id,                                        /*qui contient le id du kanapé grâce à product_id*/
      "quantidad": quantitéSeléctionée,                              /*qui contient la quantité sélectionner grâce à quantitéselectioné*/
    };
    let panier = JSON.parse(localStorage.getItem("productos"));   /*récupération de new product du local storage converti en parce*//*gerer 3 cas*/
    if (panier  && document.querySelector("input").value >= 1  && document.querySelector("select").value.length >= 1){                                                 /*1 cas*/ /* si panier existe */  /*alors*/
      let position = panier.findIndex(p => p.id == product._id && p.colors == couleurSelectionnée); /*variable position qui récupère la position d'un élément du panier avec findindex. compare si le id trouver est égale au products_id et à la couleur sélectionnée */
      if(position >= 0  && document.querySelector("input").value >= 1  && document.querySelector("select").value.length >= 1){ /*je teste si position est >= a 0 fin d'éviter le -1 du tableau */   /*alors*/
        panier[position].quantidad = parseInt(quantitéSeléctionée) + parseInt(panier[position].quantidad); /*la quantité de l'éléments findindex changer sa valeur  = à la quantitésélectionner par l'utilisateur + la quantité déjà présente dans  panier*/ 
        localStorage.setItem("productos", JSON.stringify(panier));/*envoie tout ça au local storage*/
      }else if (document.querySelector("input").value >= 1  && document.querySelector("select").value.length >= 1){ /*2cas*//*si dans le panier il ni y a pas de id identique et couleur indentique alors on push new product dans la variable panier et on l'envoie au local storage*/
        panier.push(newProduct);  
        localStorage.setItem("productos", JSON.stringify(panier));
      }
    }else if (document.querySelector("input").value >= 1  && document.querySelector("select").value.length >= 1){                                                                      /*3cas*/ /*si le panier n'existe pas alors je le créé new panier */
      newPanier = [];                                                           /*un tableau new panier*/
      newPanier.push(newProduct);                                               /*et je push à l'intérieur l'objet newproduct */
      localStorage.setItem("productos", JSON.stringify(newPanier));             /*ensuite je l'envoie au local storage*/
    }
    if(document.querySelector("input").value == 0 || document.querySelector("select").value.length == 0 ){ /*vérifi si les champs sont selectionné*/
      alert('Choisissez une quantité et une couleur !');  
   }else if(document.querySelector("input").value >= 1  && document.querySelector("select").value.length >= 1){
     /*si ils sont selectioné alors*/
      window.location.href="./cart.html"                    /* nous passons  à la page panier*/                      
    }  
    });     
  })
 
.catch(error => {               /*erreur possible et alert*/
  alert('impossible de contacter avec le server');
});











