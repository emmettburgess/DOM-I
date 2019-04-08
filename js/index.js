const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

let logo = document.getElementById("logo-img");
    logo.setAttribute("src", siteContent["nav"]["img-src"]);

let nav = document.querySelector("nav");
let navItems = nav.querySelectorAll("a");

  for (let i = 0; i < navItems.length; i++) {
    navItems[i].textContent = siteContent["nav"][`nav-item-${i+1}`];
  };

let cta = document.querySelector(".cta");
let h1 = document.querySelector(".cta .cta-text h1");
let button = document.querySelector(".cta .cta-text button");
    button.textContent = siteContent["cta"]["button"];
let ctaImg = cta.querySelector("#cta-img");
    ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);


let topH4 = document.querySelectorAll(".top-content .text-content h4");
let topParagraphs = document.querySelectorAll[".top-content"][".text-content"] ["p"];
topH4[0].textContent = siteContent["main-content"]["features-h4"];

let middleImg = document.querySelector(".middle-img");
    middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let contactH4 = document.querySelector[".contact"]["h4");
let contactList = document.querySelectorAll[".contact"]["p"];

let copyright = document.querySelector["footer"]["p"];