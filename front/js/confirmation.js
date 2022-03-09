const params = new URLSearchParams(document.location.search);  /*récupérer ce que l'adresse actuel contient avec search params*/
const id = params.get("id");                                   /*prendre l'id de l'URL correspondant au data order id contenue dans params*/
let reponseduBack = document.getElementById('orderId');            /*récupération de l'id ou afficher la commander sur la page/*/
reponseduBack.textContent = id;                               /*définisent le texte en tant que id y est = à le numéro de commander */