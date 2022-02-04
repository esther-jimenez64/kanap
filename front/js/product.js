const params = new URLSearchParams(document.location.search);


const id = params.get("id");


let url = "http://localhost:3000/api/products/"+id;


fetch(url)
.then(response => response.json())
.then(product => {
  let test = document.querySelector('.item__img');
  let image = document.createElement('img');
  image.setAttribute(`src`, product.imageUrl);
  image.setAttribute(`alt`, `Photographie d'un canapé`);
  test.appendChild(image);
 
  let classtitre = document.querySelector('.item__content__titlePrice');
  
  let prix = document.getElementById('price');
  prix.textContent = `${product.price}`;
  classtitre.appendChild(prix);
  
  let titre = document.getElementById('title');
  titre.textContent = `${product.name}`;
  classtitre.appendChild(titre);

  let contdescription = document.querySelector('.item__content__description__title');
  let description = document.getElementById('description');
  description.textContent = (`${product.description}`);
  contdescription.appendChild(description);



 
  const selectR = document.getElementById('colors');
product.colors.forEach(color =>{
  const option = document.createElement('option');
  option.value = color;
  option.textContent = color;
  selectR.appendChild(option);

 

});
let aver = document.getElementById("addToCart")
  aver.addEventListener("click",() =>{
    let selectedColor = document.querySelector("select").value // Les accents dans une variables c'est pas top
    let quantity = document.querySelector("input").value

    const newStudente = {
      "colors": selectedColor,
      "id": product._id,
      "quantity": quantity,
    };

    let panier = JSON.parse(localStorage.getItem("productos"));
    let foundproduct = panier.find(p => p_id == product._id); // je crois que tu as juste mal écris product._id, il me semble qu'il te manque "_" donc, product.id => product._id
    console.log(foundproduct);
   if(!foundproduct){
      foundproduct.quantity++;

   }else{
    product.quantity = 0;
    panier.push(newStudente);
   }
    

    if (!panier)
    {
     panier.push(newStudente);
     localStorage.setItem("productos", JSON.stringify(panier));
     
    }
    else 
    {
      baskete = [];
      baskete.push(newStudente);
      localStorage.setItem("productos", JSON.stringify(baskete));
    }
    window.location.href="./cart.html";
    
  })
}
);


//add the first student


