'use strict'
// Please don't delete the 'use strict' line above

// AWARDED WOMEN

const title = document.createElement("div");
title.setAttribute ("class", "header");
title.textContent = "Nobel Prize Winners";
document.body.appendChild(title);

const menu = document.createElement('ul');
menu.setAttribute('class', 'nav');
const li1 = document.createElement('li');
li1.setAttribute('class', 'homepage');
li1.innerHTML = '<a href="https://www.nobelprize.org/">Home</a>';
const li2 = document.createElement('li');
li2.setAttribute('class', 'about');
li2.innerHTML = '<a href="https://en.wikipedia.org/wiki/Nobel_Prize">About</a>';

title.appendChild(menu);
menu.appendChild(li1);
menu.appendChild(li2);

const backHomepageDiv = document.createElement("div");
backHomepageDiv.setAttribute("class", "backHP");
const backHomepage = document.createElement("a");
backHomepage.setAttribute("class", "homepage")
backHomepage.innerHTML = '<a href="index.html">Back to homepage</a>';
document.body.appendChild(backHomepageDiv);
backHomepageDiv.appendChild(backHomepage)
const section = document.createElement("div")
section.setAttribute("class", "section");
document.body.appendChild(section)

for (const element of nobels.prizes) {
    //  console.log(element.year)
    let year = document.createElement("p");
    year.setAttribute("class", "year");
    year.innerHTML = element.year;
    
    let category = document.createElement("p");
    category.setAttribute("class", "category");
    category.innerHTML = element.category;
    
    let name = document.createElement("div");
    name.setAttribute("class", "name1");
    let name2 = document.createElement("p");
    name2.setAttribute("class", "name2");
    let name3 = document.createElement("p");
    name3.setAttribute("class", "name3");

for (let individual of element.laureates) {
    if (individual.surname === "Allais" || individual.firstname ==="Fran\u00e7oise"|| individual.surname === "Becquerel" || individual.surname === "Bergson" ||
    individual.surname === "Bourgeois" || individual.surname === "Briand" || individual.surname === "de Broglie" || individual.surname=== "Buisson" || individual.surname === "Camus" || 
    individual.surname === "Carrel" || individual.surname === "Cassin" || individual.surname === "Charpak" || individual.surname === "Charpentier" || individual.surname === "Chauvin" ||
    individual.surname === "Cohen-Tannoudji" || individual.surname === "Cournand" || individual.firstname === "Curie" || individual.surname === "Dausset" ||  individual.surname === "Debreu" ||
    individual.surname === "Paul Henri Benjamin Balluet" || individual.surname === "Fert" || individual.surnname === "France" || individual.firstname === "Gao" || individual.firstname === "Pierre-Gilles" || individual.surname === "Gide" ||
    individual.surname === "Grignard" || individual.surname === "Guillemin" || individual.surname === "Haroche" ||individual.surname === "Hoffmann" || individual.surname === "Jacob" ||individual.surname === "Joliot-Curie" || 
    individual.surname === "Jouhaux" ||individual.surname === "Kastler" || individual.surname === "Laveran" ||individual.surname === "Lehn" || individual.surname === "Lippmann" ||
    individual.surname === "Lwoff" || individual.surname === "du Gard" || individual.surname === "Mauriac" || individual.surname === "Mistral" || individual.surname === "Modiano" || individual.surname === "Moissan" ||
    individual.surname === "Monod" ||individual.surname === "Montagnier" || individual.surname === "Mourou" || individual.surname === "N\u00e9el" ||individual.surname === "Nicolle" ||individual.surname === "Passy" ||
    individual.surname === "Perrin" || individual.surname === "Perse" || individual.surname === "Prudhomme" || individual.surname === "Renault" || individual.surname === "Richet"|| individual.surname === "Rolland" || individual.surname === "Sabatier"
    || individual.surname === "Sartre"|| individual.surname === "Sauvage" || individual.surname === "Scweitzer" || individual.surname === "Simon" ) {
    let name1 = document.createElement("p");
    let motivation = document.createElement("p");
    name.innerText = individual.firstname + " " + individual.surname;
    motivation.innerText = individual.motivation;
    name1.appendChild(name);
    name.appendChild(motivation);
  
section.appendChild(year);
section.appendChild(category);
section.appendChild(name1);
document.body.appendChild(section)}
    }
};