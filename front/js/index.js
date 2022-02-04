fetch("http://localhost:3000/api/products")
.then(response => response.json())
.then(products => {
  
let baliseItem = document.getElementById("items");

products.forEach(product => {
  console.log(products);
  const liens = document.createElement('a');
  liens.setAttribute("id", "42");
  liens.setAttribute(`href`, `./product.html?id=${product._id}`);


  baliseItem.appendChild(liens); 

  const test = document.createElement('article');
  liens.appendChild(test); 
  
  const image = document.createElement('img');
  image.setAttribute(`src`, `${product.imageUrl}`);
  image.setAttribute(`alt`, `Lorem ipsum dolor sit amet, Kanap name1${product.altTxt}`);
  test.appendChild(image);


  const titre = document.createElement('h3');
  titre.setAttribute(`class`, `productName`);
  titre.textContent = `${product.name}`;
  test.appendChild(titre);
  
  const paragraphe = document.createElement('p');
  paragraphe.setAttribute(`class`, `productDescription`);
  paragraphe.textContent = (`${product.description}`);
  test.appendChild(paragraphe);
  

     
});
})





