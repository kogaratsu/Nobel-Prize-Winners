'use strict'
// Please don't delete the 'use strict' line above

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
    
    for (let i = 0; i < element.laureates.length - 2; i++) {
        //  console.log(element.laureates[i].firstname)
        name.innerText = element.laureates[i].firstname + " " + element.laureates[i].surname + "\n" + element.laureates[i].motivation;
    }
    for (let i = 0; i < element.laureates.length - 1; i++) {
        name2.innerText = element.laureates[i].firstname + " " + element.laureates[i].surname + "\n" + element.laureates[i].motivation;
    }
    for (let i = 0; i < element.laureates.length; i++) {
        name3.innerText = element.laureates[i].firstname + " " + element.laureates[i].surname + "\n" + element.laureates[i].motivation;
    }
    if (element.year >= 2000){
    section.appendChild(year);
    section.appendChild(category);
    section.appendChild(name);
    section.appendChild(name2);
    section.appendChild(name3);
    }

}