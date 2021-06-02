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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navEl = document.querySelectorAll('a')

navEl.forEach((item, index)=> {
  // console.log(item)
  item.textContent = siteContent["nav"][`nav-item-${index}`];
})

const ctaText = document.querySelector('.cta-text h1')
ctaText.textContent = siteContent["cta"]["h1"]

//next, we need to make button


const ctaButton = document.querySelector('.cta-text button')
// console.log(ctaButton)
ctaButton.textContent = siteContent.cta.button

//next,we need to put big picture next to CTA

const ctaPicture = document.querySelector("#cta-img")
// console.log(ctaPicture)
ctaPicture.src =siteContent.cta["img-src"]

//next, we need to make main content

const topContent = document.querySelector('.top-content')
// console.log(topContent)
const firstContentH4 = topContent.querySelector('.text-content h4')
// console.log(firstContentH4)

firstContentH4.textContent = siteContent["main-content"]["features-h4"]

const firstContentText = topContent.querySelector('.text-content p')
// console.log(firstContentText)
firstContentText.textContent = siteContent["main-content"]["features-content"]


const firstContentH4About = topContent.querySelectorAll('.text-content h4')[1]
// console.log(firstContentH4About)

firstContentH4About.textContent = siteContent["main-content"]["about-h4"]

const firstContentTextAbout = topContent.querySelectorAll('.text-content p')[1]
// console.log(firstContentText)
firstContentTextAbout.textContent = siteContent["main-content"]["about-content"]

const middleImg = document.querySelector('.middle-img')
console.log(middleImg)
middleImg.src =siteContent["main-content"]["middle-img-src"]

const bottomContent = document.querySelector('.bottom-content')
// console.log(serviceContent)

const serviceContentH4 = bottomContent.querySelector('.text-content h4')
serviceContentH4.textContent = siteContent["main-content"]["services-h4"]
const serviceContentH4Text = bottomContent.querySelector('.text-content p')
serviceContentH4Text.textContent = siteContent["main-content"]["services-content"]

const productContentH4 = bottomContent.querySelectorAll('.text-content h4')[1]
productContentH4.textContent = siteContent["main-content"]["product-h4"]
const productContentH4Text = bottomContent.querySelectorAll('.text-content p')[1]
productContentH4Text.textContent = siteContent["main-content"]["product-content"]

const visionContentH4 = bottomContent.querySelectorAll('.text-content h4')[2]
visionContentH4.textContent = siteContent["main-content"]["vision-h4"]
const visionContentH4Text = bottomContent.querySelectorAll('.text-content p')[2]
visionContentH4Text.textContent = siteContent["main-content"]["vision-content"]

const contactContent = document.querySelector('.contact')

const contactH4 = contactContent.querySelector('h4')
console.log(contactH4)
contactH4.textContent = siteContent.contact["contact-h4"]

const contactText1 = contactContent.querySelector('p')
contactText1.textContent = siteContent.contact.address
console.log(contactText1)

const contactNumber = contactContent.querySelectorAll('p')[1]
contactNumber.textContent = siteContent.contact.phone
console.log(contactNumber)

const contactEmail = contactContent.querySelectorAll('p')[2]
contactEmail.textContent = siteContent.contact.email
console.log(contactEmail)

const footer = document.querySelector('footer')

const footerCopyRight = footer.querySelector('p')
footerCopyRight.textContent = siteContent.footer.copyright