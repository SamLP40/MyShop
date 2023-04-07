// <!-- Navigation (page d'accueil, page pour les catégories, barre de navigation en noir)
// <nav>
//     <ul class="menu">Ma Boutique en Ligne</ul>
//     <ul class="menu">Home</ul>
// </nav>

class Article {
    constructor(id, name, brand, price, quantity) {
        this.id = id,
        this.name = name,
        this.brand = brand,
        this.price = price,
        this.quantity = quantity
    }
}
// Liste des catégories d'articles à mapper puis faire intéragir avec l'utilisateur
// let categoryList = document.querySelector("ul");

// let category = [... new Set(articlesList.map(article => article.category))]

// for(categoryList of category) {

// }
function displayArticles() {

    let articlesList = [];
    
    articlesList.push(new Article(1,"S8", "Samsung", 200, 1)); //Instanciation
    articlesList.push(new Article(2, "S9", "Samsung", 250, 1));
    articlesList.push(new Article(3, "Iphone10", "Apple", 500, 1));
    const tbody=document.querySelector("tbody"); //Pour chercher la balise tbody dans le doc html
       // Boucle qui va permettre de répéter l'affichage dynamique des articles
    for(let article of articlesList) {

    let row= document.createElement("tr");
    let cellId= document.createElement("td");
    cellId.textContent = article.id;
    let cellName = document.createElement("td");
    cellName.textContent = article.name;
    let cellBrand=document.createElement("td");
    cellBrand.textContent = article.brand;
    let cellPrice=document.createElement("td");
    cellPrice.textContent = article.price;
    let cellQuantity=document.createElement("td");
    cellQuantity.textContent = article.quantity;
        // Ajout d'une nouvelle rangée lorsqu'on a fait le tour de chaque élément d'une ligne
    row.appendChild(cellId);
    row.appendChild(cellName);
    row.appendChild(cellBrand);
    row.appendChild(cellPrice);
    row.appendChild(cellQuantity);
    tbody.appendChild(row);
    }
}

displayArticles(); // Affichage des articles

// let testButton = document.getElementById("testButton")
// testButton.addEventListener("click", ()=> {
// generate_table(); //générer un tableau

// })

// function populateTableList() {

// products.forEach(prod => 
//     productsList += `
//    <tr class="text-center">
//    <td>${prod.id}</td>
//    <td>${prod.name}</td>
//    <td>${prod.brand}</td>
//    <td>${prod.price}</td> 
//    <td>${prod.quantity}</td> 
//     `
//     )
// }