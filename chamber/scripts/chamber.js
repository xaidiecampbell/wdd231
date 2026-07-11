alert("Javascript file is working")
// store the selected elements that we are going to use
const navButton = document.querySelector('#nav-button');
const navLinks = document.querySelector('#nav-bar');

// toggle the show class off and on
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
    // navLinks.classList.toggle('show');
});

// footer date/time
// get the year and date modified
const year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;


document.getElementById("lastModified").textContent = document.lastModified;
// Select the nav element
const navBar = document.querySelector('#nav-bar');

// wayfinding
// Get the current page filename
const currentPage = window.location.pathname.split("/").pop();

// Get all navigation links
// const navLinks = document.querySelectorAll("nav a");

// Loop through each link

// nav-bar.forEach(link => {
//     if (link.getAttribute("href") === currentPage) {
//         link.classList.add("active");
//     }
// });


const url = "https://xaidiecampbell.github.io/wdd231/chamber/data/members.json";
const businessCard = document.querySelector("#res-grid");
console.table(businessCard);
const jsonString = GetData();

const business = JSON.parse(jsonString);

console.log(business.businessName);
console.log(business.tagLine);
// load the JSON file
async function GetData() {
    try {
        const response = await fetch(url);

        // Parse the JSON file
        const data = await response.json();
        console.log(Array.isArray(data.Businesses));
        console.log(data.Businesses);
        createBusinessCard(data.businesses);
       
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
}
function createBusinessCard(businesses) {
    const container = document.querySelector(".res-grid");

    businesses.forEach(business => {
        console.log(business);
        const businessCard = document.createElement("section"); businessCard.classList.add("business-card");
        const businessName = document.createElement("h3"); businessName.classList.add("business-name");
        const tagLine = document.createElement("p"); tagLine.classList.add("tagline");
        const email = document.createElement("p"); email.classList.add("email");
        const phone = document.createElement("p"); phone.classList.add("phone");
        const website = document.createElement("p"); website.classList.add("website");
        const logo = document.createElement("img"); logo.classList.add("business-logo");


        businessName.textContent = business.businessName;
        tagLine.textContent = business.tagLine;
        email.textContent = business.email;
        phone.textContent = business.phone;
        website.innerHTML = `<a href="${business.URL}" target="_blank">${business.URL}</a>`;

        logo.src = business.logo;
        logo.alt = business.businessName;
        logo.loading = "lazy";


        businessCard.appendChild(businessName);
        businessCard.appendChild(tagLine);
        businessCard.appendChild(email);
        businessCard.appendChild(phone);
        businessCard.appendChild(website);
        businessCard.appendChild(logo);

        container.appendChild(businessCard);


    });
}
console.log("Inside createBusinessCard");
console.log(businesses);
GetData();
