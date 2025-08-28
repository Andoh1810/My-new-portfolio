
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


//Navbar

const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
        bsCollapse.hide();
    });
});


document.addEventListener('click', function (event) {
    const isClickInside = document.querySelector('.navbar').contains(event.target);
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (!isClickInside && navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
        bsCollapse.hide();
    }
});

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
            element.style.display = "block";
        });
    }
});
ang.addEventListener("click", ()=>{
    if(ang.className != "langueActive"){
        ang.classList.add("langueActive");
        fran.classList.remove("langueActive");
        ven.forEach(element => {
            element.style.display = "block";
        });
        vf.forEach(element => {
            element.style.display = "none";
        });
        }

});

//anime scroll
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.anime-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active'); // retire la classe quand on sort du viewport
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
});

//Filtre des creations


function projet_all(){
    let active = document.querySelector(".proj_btn1");
    let active1 = document.querySelector(".proj_btn2");
    let active2 = document.querySelector(".proj_btn3");
    let active3 = document.querySelector(".proj_btn4");

    let proj_all = document.querySelectorAll(".skillItems.tout");

    active.classList.add("boutton1");
    active.classList.remove("boutton2");
    active1.classList.remove("boutton1");
    active1.classList.add("boutton2");
    active2.classList.remove("boutton1");
    active2.classList.add("boutton2");
    active3.classList.remove("boutton1");
    active3.classList.add("boutton2");

    proj_all.forEach(element => {
        element.style.display = "flex";
    });
}

function projet_web(){

    let active = document.querySelector(".proj_btn1");
    let active1 = document.querySelector(".proj_btn2");
    let active2 = document.querySelector(".proj_btn3");
    let active3 = document.querySelector(".proj_btn4");

    active.classList.add("boutton2");
    active.classList.remove("boutton1");
    active1.classList.remove("boutton2");
    active1.classList.add("boutton1");
    active2.classList.remove("boutton1");
    active2.classList.add("boutton2");
    active3.classList.remove("boutton1");
    active3.classList.add("boutton2");

    let proj_web = document.querySelectorAll(".skillItems.devweb");
    let proj_fly = document.querySelectorAll(".skillItems.fly");
    let proj_log = document.querySelectorAll(".skillItems.log");

    proj_fly.forEach(element => {
        element.style.display = "none";
    });
    proj_log.forEach(element1 => {
        element1.style.display = "none";
    });
    proj_web.forEach(element2 => {
        element2.style.display = "flex";
    });
}

function projet_logo(){

    let active = document.querySelector(".proj_btn1");
    let active1 = document.querySelector(".proj_btn2");
    let active2 = document.querySelector(".proj_btn3");
    let active3 = document.querySelector(".proj_btn4");    

    active.classList.add("boutton2");
    active.classList.remove("boutton1");
    active1.classList.remove("boutton1");
    active1.classList.add("boutton2");
    active2.classList.remove("boutton2");
    active2.classList.add("boutton1");
    active3.classList.remove("boutton1");
    active3.classList.add("boutton2");

    let proj_web = document.querySelectorAll(".skillItems.devweb");
    let proj_fly = document.querySelectorAll(".skillItems.fly");
    let proj_log = document.querySelectorAll(".skillItems.log");

    proj_fly.forEach(element => {
        element.style.display = "none";
    });
    proj_log.forEach(element1 => {
        element1.style.display = "flex";
    });
    proj_web.forEach(element2 => {
        element2.style.display = "none";
    });
    
}

function projet_flyers(){

    let active = document.querySelector(".proj_btn1");
    let active1 = document.querySelector(".proj_btn2");
    let active2 = document.querySelector(".proj_btn3");
    let active3 = document.querySelector(".proj_btn4");

    active.classList.add("boutton2");
    active.classList.remove("boutton1");
    active1.classList.remove("boutton1");
    active1.classList.add("boutton2");
    active2.classList.remove("boutton1");
    active2.classList.add("boutton2");
    active3.classList.remove("boutton2");
    active3.classList.add("boutton1");

    let proj_web = document.querySelectorAll(".skillItems.devweb");
    let proj_fly = document.querySelectorAll(".skillItems.fly");
    let proj_log = document.querySelectorAll(".skillItems.log");

    proj_fly.forEach(element => {
        element.style.display = "flex";
    });
    proj_log.forEach(element1 => {
        element1.style.display = "none";
    });
    proj_web.forEach(element2 => {
        element2.style.display = "none";
    });
}

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

    Home.style.display = "block";
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
    About.style.display = "block";
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
    Project.style.display = "block";
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
    Galery.style.display = "block";
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
    Contact.style.display = "block";
}
