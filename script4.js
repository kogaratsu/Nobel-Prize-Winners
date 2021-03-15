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
    if (individual.surname === "Strickland" || individual.firstname ==="Maria"|| individual.firstname === "Frances H." || individual.firstname === "Ada E." ||
    individual.firstname === "Dorothy" || individual.surname === "Joliot-Curie" || individual.firstname === "Tu" || individual.firstname === "May-Britt" || individual.firstname === "Elizabeth H." || 
    individual.firstname === "Carol" || individual.firstname === "Fran\u00e7oise" || individual.firstname === "Linda" || individual.firstname === "Christiane" || individual.firstname === "Gertrude B." ||
    individual.firstname === "Rita" || individual.firstname === "Barbara" || individual.firstname === "Rosalyn" || individual.firstname === "Gerty Theresa" ||  individual.firstname === "Olga" ||
    individual.surname === "Svetlana" || individual.firstname === "Alice" || individual.firstname === "Herta" || individual.firstname === "Doris" || individual.firstname === "Elfriede" || individual.firstname === "Wislawa" ||
    individual.firstname === "Toni" || individual.firstname === "Nadine" || individual.firstname === "Nelly" ||individual.firstname === "Gabriela" ||individual.firstname === "Pearl" ||individual.firstname === "Sigrid" || 
    individual.firstname === "Grazia" ||individual.firstname === "Selma Ottilia Lovisa" || individual.firstname === "Nadia" ||individual.firstname === "Malala" || individual.firstname === "Ellen" ||
    individual.firstname === "Leymah" || individual.firstname === "Tawakkol" || individual.firstname === "Wangari" || individual.firstname === "Shirin" || individual.firstname === "Jodi" || individual.firstname === "Rigoberta" ||
    individual.firstname === "Aung San Suu Kyi" ||individual.firstname === "Alva" || individual.firstname === "Mother Teresa" || individual.firstname === "Betty" ||individual.firstname === "Mairead" ||individual.firstname === "Emily" ||
    individual.firstname === "Jane" || individual.firstname === "Baroness Bertha Sophie Felicita" || individual.firstname === "Marie")  {
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
