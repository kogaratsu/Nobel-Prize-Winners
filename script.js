'use strict'
// Please don't delete the 'use strict' line above

const title = document.createElement("div");
title.setAttribute ("class", "header");
title.textContent = "Nobel Prize Winners";
document.body.appendChild(title);

const menu = document.createElement('ul');
menu.setAttribute('class', 'nav');
const li1 = document.createElement('li');
li1.setAttribute('class', 'NobelPrizehomepage');
li1.innerHTML = '<a href="https://www.nobelprize.org/" target="_blank">Home</a>';
const li2 = document.createElement('li');
li2.setAttribute('class', 'about');
li2.innerHTML = '<a href="https://en.wikipedia.org/wiki/Nobel_Prize" target="_blank">About</a>';

title.appendChild(menu);
menu.appendChild(li1);
menu.appendChild(li2);

const imageDiv = document.createElement('div');
imageDiv.setAttribute("class", "imageDiv");
const image = document.createElement("img");
image.setAttribute("class", "image");
image.src = "https://i.ibb.co/YWp7RQT/New-will-fullsize.jpg";
document.body.appendChild(imageDiv);
imageDiv.appendChild(image);

const century = document.createElement('div');
century.setAttribute("class", "centuryDiv");

const century1 = document.createElement('div');
century1.setAttribute('class', 'century century1');

const century21 = document.createElement('h2');
century21.setAttribute('class', 'century21Nav');
century21.innerHTML = '<a href="century21.html">XXI\n Century</a>';

const century2 = document.createElement('div');
century2.setAttribute('class', 'century century2');

const century20 = document.createElement('h2');
century20.setAttribute('class', 'century20Nav');
century20.innerHTML = '<a href="century20.html">XX Century</a>';

const women= document.createElement("div");
women.setAttribute("class", "century womenDiv");
const womenLaureates = document.createElement('h2');
womenLaureates.setAttribute("class", "women");
womenLaureates.innerHTML = '<a href="awardedWomen.html">Women Laureates</a>';

const french= document.createElement("div");
french.setAttribute("class", "century frenchDiv");
const frenchLaureates = document.createElement('h2');
frenchLaureates.setAttribute("class", "french");
frenchLaureates.innerHTML = '<a href="awardedFrench.html">French Laureates</a>';


document.body.appendChild(century);
century.appendChild(century1);
century.appendChild(century2);
century.appendChild(women);
century.appendChild(french);
century1.appendChild(century21);
century2.appendChild(century20);
women.appendChild(womenLaureates);
french.appendChild(frenchLaureates);




/*const section = document.createElement("div")
section.setAttribute("class", "section");
document.body.appendChild(section)

for (const element of nobels.prizes) {
    //  console.log(element.year)
    let year = document.createElement("p");
    year.setAttribute("class", "year");
    year.innerHTML = element.year;
    section.appendChild(year);
    let category = document.createElement("p");
    category.setAttribute("class", "category");
    category.innerHTML = element.category;
    section.appendChild(category);
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
    section.appendChild(name);
    section.appendChild(name2);
    section.appendChild(name3);

}*/





