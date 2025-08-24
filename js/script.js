
//Annimation du background

const nbPoints = 200;
let j=0, pts = "points", ptss = "pointss", PTS;
for (let i=0; i<nbPoints; i++){
    const point = document.createElement("div");
    PTS == pts ? PTS = ptss : PTS = pts;
    point.classList.add(PTS);
    point.style.top = `${Math.random() * 98}%`;
    point.style.left = `${Math.random() * 94}%`;
    point.style.opacity = Math.random() < 0.5? 1 : 0;
    document.body.appendChild(point);

    setInterval(() => {
        point.style.opacity = Math.random() < 0.5 ? 1 : 0;
    }, Math.random() * 10000);
}


//Changement de pages

//Changement de langues

let ang = document.querySelector(".anglais");
let fran = document.querySelector(".francais");
let vf = document.querySelectorAll(".vf");
let ven = document.querySelectorAll(".ven");
fran.addEventListener("click", ()=>{
    if(fran.className != "langueActive"){
        fran.classList.add("langueActive");
        ang.classList.remove("langueActive");
        ven.forEach(element => {
            element.style.display = "none";
        });
        vf.forEach(element => {
            element.style.display = "flex";
        });
    }
});
ang.addEventListener("click", ()=>{
    if(ang.className != "langueActive"){
        ang.classList.add("langueActive");
        fran.classList.remove("langueActive");
        ven.forEach(element => {
            element.style.display = "flex";
        });
        vf.forEach(element => {
            element.style.display = "none";
        });
        }

});


//class active navigations

let Home = document.querySelector("#Home");
let About = document.querySelector("#About");
let Project = document.querySelector("#Projects");
let Galery = document.querySelector("#Galery");
let Contact = document.querySelector("#Contact");

let homes = document.querySelector("#homes");
let abouts = document.querySelector("#abouts");
let project = document.querySelector("#projects");
let gallery = document.querySelector("#gallery");
let contacts = document.querySelector("#contacts");

function home(){
    homes.classList.add("activee");
    abouts.classList.remove("activee");
    project.classList.remove("activee");
    gallery.classList.remove("activee");
    contacts.classList.remove("activee");

    Home.style.display = "flex";
    About.style.display = "none";
    Project.style.display = "none";
    Galery.style.display = "none";
    Contact.style.display = "none";
}

function about(){
    homes.classList.remove("activee");
    abouts.classList.add("activee");
    project.classList.remove("activee");
    gallery.classList.remove("activee");
    contacts.classList.remove("activee");

    Home.style.display = "none";
    About.style.display = "flex";
    Project.style.display = "none";
    Galery.style.display = "none";
    Contact.style.display = "none";
}

function projects(){
    homes.classList.remove("activee");
    abouts.classList.remove("activee");
    project.classList.add("activee");
    gallery.classList.remove("activee");
    contacts.classList.remove("activee");

    Home.style.display = "none";
    About.style.display = "none";
    Project.style.display = "flex";
    Galery.style.display = "none";
    Contact.style.display = "none";
}

function galery(){
    homes.classList.remove("activee");
    abouts.classList.remove("activee");
    project.classList.remove("activee");
    gallery.classList.add("activee");
    contacts.classList.remove("activee");

    Home.style.display = "none";
    About.style.display = "none";
    Project.style.display = "none";
    Galery.style.display = "flex";
    Contact.style.display = "none";
}

function contact(){
    homes.classList.remove("activee");
    abouts.classList.remove("activee");
    project.classList.remove("activee");
    gallery.classList.remove("activee");
    contacts.classList.add("activee");

    Home.style.display = "none";
    About.style.display = "none";
    Project.style.display = "none";
    Galery.style.display = "none";
    Contact.style.display = "flex";
}
