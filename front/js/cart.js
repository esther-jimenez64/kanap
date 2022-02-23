let panier = JSON.parse(localStorage.getItem('productos'));     /*récup du panier localStorage*/
let totalprice = 0;                                            /*prix total de la page panier*/
let totalQuantity = 0;                                         /*quantité total de la page panier*/


panier.forEach(function(kanape,i) {                            /*boucle qui contient id couleur du kanape*/ 
  let allprice = 0;                                            /*prix total 1 seul kanapé*/
  let allquantité = 0;                                         /*quantité total 1 seul kanapé*/

  fetch("http://localhost:3000/api/products/"+kanape.id)       /* requéte api + congonatation du id du kanape récuperer dans local storage */
  .then(response => response.json())                           /*réponse en json */
  .then(products => {                                          /*function flécher sur la réponse du fetch */
                                                              
    function Nouveautotal(number,quantité){                      /*fonction qui recalcule le prix et la*/                                          
        totalprice -= allprice;                                  /*total quantité en fonction de ce qui est changer par l'utilisateur*/
        allprice = parseInt(number) * parseInt(products.price); 
        totalprice += allprice;
        totalQuantity -= parseInt(quantité);
        totalQuantity += parseInt(number);
        kanape.quantidad = number;
        let divQuantity = document.getElementById('totalQuantity');
        divQuantity.textContent =  totalQuantity;
        let divPrice = document.getElementById('totalPrice');
        divPrice.textContent = totalprice;   
    }                                                                     /*erreur le prix n'est pas au localstorage cette interdi */

    function calculeTotalLocalStorage(){                                /*fonction qui calcule le total quantité et prix du local storage */
      allprice = parseInt(kanape.quantidad) * parseInt(products.price); /*la quantié du localSorage multiplier par le prix du kanape*/
      totalprice += allprice;                                          /*le prix total de la page panier c'est le prix multiplier par la quantité*/
      allquantité = parseInt(kanape.quantidad);                      /*la quantité du kanape est égale a kanape quantidad présent dans le localS*/
      totalQuantity += allquantité;                                  /*quantité total de la page panier on lui incrémente quantité total d'un/*                                                              /*seul kanape*/
    }

    calculeTotalLocalStorage(); /*appele de ma function calculeLocalStoragetotal*/

    let cartitem = document.getElementById('cart__items');                /*récupération de la div qui englobe section card kanape"*/
    const article = document.createElement('article');                    /*création de l'article*/ 
    article.setAttribute(`class`, `.cart__item`);                         /* injectent la class .cart_item a la constante arcticle*/
    cartitem.appendChild(article);                                        /* injectent variable article en tant que fils de cartitem*/

    const test = document.createElement('div');                           /*création de la div qui contient l'image du kanape*/
    test.setAttribute(`class`, `cart__item__img`);                        /*injectant la class .cart_item_img à la constante test*/
    article.appendChild(test);                                            /*injectant variable test en tant que fils d'article*/
 
    const image = document.createElement('img');                          /*création de l'elément image const image*/
    image.setAttribute(`src`, `${products.imageUrl}`);                    /*injectent l'atribut src avec en valeur l'image du kanape*/
    image.setAttribute('alt', `Photographie d'un canapé`);                /*injectent l'atribut alt avec en valeur */
    test.appendChild(image);                                              /*injectant variable image en tant que fils de la const test*/

    const contentitem = document.createElement('div');                    /*création de la div cart_item_content const contentitem*/  
    contentitem.setAttribute(`class`, `cart__item__content`);             /*injectant la class .cart_item_content à la constante contentitem */
    article.appendChild(contentitem);                                     /*injectant la const contentitem en tant que fils de la const article*/

    const description = document.createElement('div');                      /*création de la div cart_item_descreption const description*/  
    description.setAttribute(`class`, `cart__item__content__description`);  /*injectant la class cart__item__content__description*/
    contentitem.appendChild(description);                                   /*injectant description en tant que fils de contentitem*/

    const titre = document.createElement('h2');                             /*création de l'elément h2 const titre*/
    titre.textContent = products.name;                                      /*injectant la value du nom du kanape avec textcontent*/
    description.appendChild(titre);                                         /*injectant titre en tant que fils de description*/

    const vert = document.createElement('p');                               /*création de l'elément p const vert*/
    vert.textContent = kanape.colors;                                       /*injectant la value de la couleur du kanape avec textcontent*/
    description.appendChild(vert);                                          /*injectant vert en tant que fils de description*/

    const prix = document.createElement('p');                               /*création de l'elément p const prix*/
    prix.textContent = products.price;                                      /*injectant la value du prix du kanape avec textcontent*/
    description.appendChild(prix);                                          /*injectant prix en tant que fils de description*/

    const setting = document.createElement('div');                         
    setting.setAttribute(`class`, `cart__item__content__settings`);         /*création de la div cart__item__content__settings  const seeting*/ 
    article.appendChild(setting);                                           /*injectant seeting en tant que fils d'article*/

    const quantity = document.createElement('div');                             /*création de la div quantity const quantity*/  
    quantity.setAttribute(`class`, `cart__item__content__settings__quantity`);  /*injectant la class .cart_item.... à la constante quantity*/
    setting.appendChild(quantity);                                              /*injectant quantity en tant que fils de setting*/

    const quté = document.createElement('p');                                     /*création de l'elément p const quté*/                
    quté.textContent = `Qté :`;                                                   /*injectant la value du qté avec textcontent*/
    quantity.appendChild(quté);                                                  /*injectant quté en tant que fils de quantity*/

    const input = document.createElement('input');                    /*création de l'elément input const input*/
    input.setAttribute(`type`, `number`);                             /*injectant des attribut à l'input avec setAttribute type number*/
    input.setAttribute(`class`, `itemQuantity`);                      /*injectant la class itemQuantity à l'input avec setAttribute */
    input.setAttribute(`min`, `1`);                                   /*injectant des attribut à l'input avec setAttribute min 1*/
    input.setAttribute(`max`, `100`);                                 /*injectant des attribut à l'input avec setAttribute max 100*/
    input.setAttribute(`value`, kanape.quantidad);                    /*injectant la quantité du kanape avec input value*/
    quantity.appendChild(input);                                      /*injectant input en tant que fils de quantity*/

    const deletecart = document.createElement('div');                           /*création de la div delete const deletecart*/ 
    deletecart.setAttribute(`class`, `cart__item__content__settings__delete`);   /*injectant la class cart..settingdelete à deletecart avec*/
    article.appendChild(deletecart);                                        /*setAttribute injectant deletecart en tant que fils de article*/     

    const suprime = document.createElement('p');                             /*création de l'elément p const suprime*/                 
    suprime.textContent = `Supprimer`;                                       /*injectant le texte supprimer avec textcontent*/
    suprime.setAttribute(`class`, `eleteItem`);                              /*injectant suprime en tant que fils de deletecart*/
    deletecart.appendChild(suprime);

    let divPrice = document.getElementById('totalPrice');                     /*récup de la div totalPrice variable divPrice */                
    divPrice.textContent = totalprice;                                        /*injectant le prix total de la page panier avec textcontent*/
 
    let divQuantity= document.getElementById('totalQuantity');                /*récup de la div totalQuantity variable divQuantity */     
    divQuantity.textContent =  totalQuantity;                                 /*injectant la quantité total de la page panier avec textcontent*/

    let panier = JSON.parse(localStorage.getItem('productos'));               /*récup kanap du local storage*/            
    input.addEventListener('change', (event) => {                             /*écoute sur l'input quantité ce qu'édite les utilisateur*/
      Nouveautotal(event.target.value,kanape.quantidad);                      /*fonction nouveautotal qui prend le changement de l'input*/
      panier[i].quantidad = event.target.value;               /*ciblé l'élements selectionné dans le panier lui attribué le changement de l'input*/
      localStorage.setItem("productos", JSON.stringify(panier));/*envoie du panier au local storage pour enregistrer les modification de quantité*/
    });
        
    var selection = suprime.closest("article");                   /*variable Selection qui contien l'article le plus proche du bouton suprimer*/
    suprime.addEventListener("click",() =>{                       /*écoute du click sur le bouton suprimer */
      selection.remove();                                        /*function à exécuter dans ce cas suprimer dans le dom l'article le plus proche*/
      panier.splice(i);                                         /*suprimer du panier la position du  kanape en questiont*/
      Nouveautotal("0",kanape.quantidad);                      /*ajout à la function du nouveautotal 0 en quantité après suprimation du kanape*/
      localStorage.setItem("productos", JSON.stringify(panier)); /*envois de tout ces changements au localstorage*/     
    });     
  })
})

let formo = document.getElementsByTagName('input');                            /*récupération de tou les input DE LA PAGE*/

formo[4].addEventListener('change', function(){ validEmail(this); });          /*écoute de ce que viens tapper l'utilisateur sur le form email*/
const validEmail =function(inputemail){                                      /*création d'une const qui contient une fonction pour validé le form*/
  let emailRegexp = /[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2}$/gm  /*variable qui contient le regex pour validé l'email*/
  let testemail = emailRegexp.test(inputemail.value);                       /*variable testemail qui test le regex sur la value de l'input email*/
  let reponse = document.getElementById('emailErrorMsg')                  /* variable réponse qui récupére le id pour afficher le message d'error*/
  if(testemail) {                                                         /*condition if else sur le test regex du formulaire email*/
    reponse.textContent = "Email valide";                                 /*si le regex est respécter alors le texte de réponse sera email valide*/
    return true;                                                         
  }else if(inputemail.value.trim() === ""){                              /*sinon si la value d'email est sans espaces blanc vide alors*/
    reponse.textContent = 'le champ et vide';                            /*le message d'erreur sera le champ et vide*/
    return false;                                                       
  }else{                                                                 /*sinon si le regex n'est pas respécter alors*/
    reponse.textContent =  "Email non valide";                           /*le message d'erreur sera email non valide*/
    return false;
  }
};                                            /***       Fin D'écoute form Email                ***/

formo[0].addEventListener('change', function() { validfn(this); });    /*écoute de ce que viens tapper l'utilisateur sur le form FirstName*/
const validfn =function(inputefn){                                     /*création d'une const qui contient une fonction pour validé le form*/
  let regexfn = /^[A-Zéèàâêïa-zéèàâêï-]+(?:\s+[A-Za-z]+)*\s*$/gm       /*variable qui contient le regex pour validé le firstname*/
  let testefn = regexfn.test(inputefn.value);                          /*variable testefn qui test le regex sur la value de l'input firstname*/
  let reponsefn = document.getElementById('firstNameErrorMsg')         /* variable réponse qui récupére le id pour afficher le message d'error*/
  if(testefn){                                                         /*condition if else sur le test regex du formulaire firstName*/
      reponsefn.textContent = 'FirstName est valide';                 /*si le regex est respécter alors le texte de réponse sera firstName valide*/
      return true;
    }else if(inputefn.value.trim() === ""){                            /*sinon si la value de firstName est sans espaces blanc vide alors*/
      reponsefn.textContent = 'Le champ et vide';                      /*le message d'erreur sera le champ et vide*/
      return false;
    }else {                                                            /*sinon si le regex n'est pas respécter alors*/
      reponsefn.textContent = 'FirstName est invalide';                /*le message d'erreur sera FirstName non valide*/
      return false;
    }
  };                                       /***       Fin D'écoute form FirstName                   ***/

formo[1].addEventListener('change', function() { validlastname(this);  });  /*écoute de ce que viens tapper l'utilisateur sur le form lastName*/
const validlastname =function(inputelast){                                 /*création d'une const qui contient une fonction pour validé le form*/
  let regexlast = /^[A-Zéèàâêïa-zéèàâêï-]+(?:\s+[A-Za-z]+)*\s*$/gm        /*variable qui contient le regex pour validé le LastNname*/
  let testelast = regexlast.test(inputelast.value);                      /*variable testelast qui test le regex sur la value de l'input Lastname*/
  let reponselast = document.getElementById('lastNameErrorMsg')          /* variable réponse qui récupére le id pour afficher le message d'error*/
  if(testelast){                                                         /*condition if else sur le test regex du formulaire LastName*/
        reponselast.textContent = 'Le nom est valide';                /*si le regex est respécter alors le texte de réponse sera LastName valide*/
        return true;
      }else if(inputelast.value.trim() === ""){                       /*sinon si la value de LastName est sans espaces blanc vide alors*/
        reponselast.textContent = 'Le champ et vide';                 /*le message d'erreur sera le champ et vide*/
        return false;
      }else {                                                         /*sinon si le regex n'est pas respécter alors*/ 
        reponselast.textContent = 'Le nom est invalide';              /*le message d'erreur sera LastName non valide*/
        return false;
      }
    };                                 /***       Fin D'écoute form LastName                   ***/

formo[2].addEventListener('change', function() { validadress(this); });  /*écoute de ce que viens tapper l'utilisateur sur le form Adresse*/
const validadress =function(inputeadress){                               /*création d'une const qui contient une fonction pour validé le form*/
  let regexadress =  /([a-zéèàâêï ]{2,}\s{0,1})(\d{0,3}){0,1}\S{2,}?/ig  /*variable qui contient le regex pour validé l'Adresse*/
  let testeadress = regexadress.test(inputeadress.value);               /*variable testeAdress qui test le regex sur la value de l'input Adress*/
  let reponseadress = document.getElementById('addressErrorMsg')        /* variable réponse qui récupére le id pour afficher le message d'error*/
  if(testeadress){                                                      /*condition if else sur le test regex du formulaire Adress*/
      reponseadress.textContent = ' Adresse valide';                  /*si le regex est respécter alors le texte de réponse sera Adresse valide*/
      return true;
    }else if(inputeadress.value.trim() === ""){                       /*sinon si la value d'Adress est sans espaces blanc vide alors*/
      reponseadress.textContent = 'Le champ et vide';                 /*le message d'erreur sera le champ et vide*/
      return false;
    }else {                                                           /*sinon si le regex n'est pas respécter alors*/ 
      reponseadress.textContent = 'Adresse invalide';                 /*le message d'erreur sera Adress invalide*/
      return false;
    }
  };                                    /***       Fin D'écoute form Adress                  ***/
   
formo[3].addEventListener('change', function() { validcity(this); });  /*écoute de ce que viens tapper l'utilisateur sur le form Ville*/
const validcity =function(inputecity){                                 /*création d'une const qui contient une fonction pour validé le form*/
  let regexcity = new RegExp(                                          /*variable qui contient le regex pour validé la Ville*/
    '^[A-Zéèàâêïa-z.\s_-]+$'                                           /*variable testeAdress qui test le regex sur la value de l'input Ville*/
    );
  let testecity = regexcity.test(inputecity.value);                    /*variable testecity qui test le regex sur la value de l'input Ville*/     
  let reponsecity = document.getElementById('cityErrorMsg')           /* variable réponse qui récupére le id pour afficher le message d'error*/
  if(testecity){                                                      /*condition if else sur le test regex du formulaire Ville*/
      reponsecity.textContent = ' Ville valide';                     /*si le regex est respécter alors le texte de réponse sera Ville valide*/
      return true;
    }else if(inputecity.value.trim() === ""){                        /*sinon si la value de la Ville est sans espaces blanc vide alors*/
      reponsecity.textContent = 'Le champ et vide';                  /*le message d'erreur sera le champ et vide*/
      return false;
    }else {                                                          /*sinon si le regex n'est pas respécter alors*/ 
      reponsecity.textContent = 'Ville invalide';                    /*le message d'erreur sera Ville invalide*/
      return false;
    } 
  };                                      /***       Fin D'écoute form Ville                ***/
  /*récup de la div bouton commander*/            /*function sur l'écoute du click et enléver le refreh de la page automatique preventdefault*/
 document.getElementById("order").addEventListener("click", function(event){event.preventDefault();
    if(validcity(document.getElementById("city")) == true && validfn(document.getElementById("firstName")) == true  && validlastname(document.getElementById("lastName")) == true && validadress(document.getElementById("address")) == true && validEmail(document.getElementById("email")) == true){                                                    /*si l'id des formulaires return true */
    let cart = JSON.parse(localStorage.getItem('productos'));  /*alors création varibale cart qui recup le panier localstorage*/
    let products =[];                                          /* création tableau product */
    cart.forEach(function(kanape) {                            /*boucle sur le panier kanape en paramettre */
    products.push(kanape.id);                                  /*ensuite je push dans le tableau l'id du kanape*/
  });
   
  const contact = {                                            /*objet contact contenant les donner de chaque champ du formulaire*/
    "firstName": document.getElementById("firstName").value,  /*récupération de l'id des formulaires et leur value*/
    "lastName": document.getElementById("lastName").value,
    "address": document.getElementById("address").value,
    "city": document.getElementById("city").value,
    "email": document.getElementById("email").value,
   };

fetch("http://localhost:3000/api/products/order", {     /*réquete fetch méthode post*/
    method: "POST",
    body: JSON.stringify({contact,products}),          /*paramétre body l'objet contact et mon tableau product avec l'id des kanapes*/
    headers: {
    'Accept': 'application/json',                    /*information sur ce que le service web va recevoir Json*/
    'Content-Type': 'application/json'              /*information sur ce que le service web va recevoir Json*/
        },
      })
    .then(res => res.json())                                           /*réponse du fetch */
    .then(data => {                                                    /*data represente la reponse du fetch */
    window.location = `../html/confirmation.html?id=${data.orderId}`; /*changement de page avec emplus les donné a envoyer au service web*/
    localStorage.clear();}               /*nettoyage du localstorage pour qu'au retour au panier le panier soit vide car on viens de commander */
  )}
}); 
                /**** fin de l'ecoute bouton commander    ***/