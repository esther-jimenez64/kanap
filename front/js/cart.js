let cat = JSON.parse(localStorage.getItem('productos'));
console.log(cat[1]);






cat.forEach(kanape => {
    console.log(kanape.id);
    fetch("http://localhost:3000/api/products/"+kanape.id)
.then(response => response.json())
.then(products => {   
    console.log(products);
     
    let cartitem = document.getElementById('cart__items');
const article = document.createElement('article');
article.setAttribute(`class`, `.cart__item`);
cartitem.appendChild(article);

const test = document.createElement('div');
test.setAttribute(`class`, `cart__item__img`);
article.appendChild(test);

const image = document.createElement('img');
image.setAttribute(`src`, `${products.imageUrl}`);
image.setAttribute('alt', `Photographie d'un canapé`);
test.appendChild(image);

const contentitem = document.createElement('div');
contentitem.setAttribute(`class`, `cart__item__content`);
article.appendChild(contentitem);

const description = document.createElement('div');
description.setAttribute(`class`, `cart__item__content__description`);
contentitem.appendChild(description);

const titre = document.createElement('h2');
titre.textContent = products.name;
description.appendChild(titre);

const vert = document.createElement('p');
vert.textContent = kanape.colors;
description.appendChild(vert);
const prix = document.createElement('p');
prix.textContent = products.price;
description.appendChild(prix);

const setting = document.createElement('div');
setting.setAttribute(`class`, `cart__item__content__settings`);
article.appendChild(setting);

const quantity = document.createElement('div');
quantity.setAttribute(`class`, `cart__item__content__settings__quantity`);
setting.appendChild(quantity);

const quté = document.createElement('p');
quté.textContent = `Qté :`;
quantity.appendChild(quté);

const input = document.createElement('input');
input.setAttribute(`type`, `number`);
input.setAttribute(`class`, `itemQuantity`);              
input.setAttribute(`min`, `1`);
input.setAttribute(`max`, `100`);
input.setAttribute(`value`, kanape.quantidad);
quantity.appendChild(input);


const deletecart = document.createElement('div');
deletecart.setAttribute(`class`, `cart__item__content__settings__delete`);
article.appendChild(deletecart);


const suprime = document.createElement('p');
suprime.textContent = `Supprimer`;
suprime.setAttribute(`class`, `eleteItem`);
deletecart.appendChild(suprime);
    /**faire une requète fetch par rapord a l'id du kanapé 1 kanapé
     * à l'intérieur de la réquete fetch afficher les articles du html 
     * 
     * 
     * 
     */
 
 })
 

  


}
);






/** 


**/







