alert("JavaScript is connected!");
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
nav.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

const businesses = data;
const url = "./data/chamber-directory.json";
const businessCard = document.querySelector("#res-grid");
console.table(businessCard);
// load the JSON file
async function GetData() {
    try {
        const response = await fetch('./data/chamber-directory.json');

        // Parse the JSON file
        const data = await response.json();
        console.log(data);

        get(data);
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
}


createBusinessCard(data.businesses);


function createBusinessCard(businesses) {
    const container = document.querySelector(".res-grid");

    businesses.forEach(business => {
        const businessCard = document.createElement("section");
        let businessName = document.createElement("h3");
        let tagLine = document.createElement("p");
        let email = document.createElement("p");
        let phone = document.createElement("p");
        let URL = document.createElement("p");
        let logo = document.createElement("img");


        businessName.textContent = business.businessName;
        tagLine.innerHTML = `<span class="label">Location:</span> ${business.tagLine}`;
        email.innerHTML = `<span class="label">Dedicated:</span> ${business.email}`;
        phone.innerHTML = `<span class="label">Size:</span> ${business.phone}`;
        URL.innerHTML = `<span class="label">Website:</span> ${business.URL}`;
        logo.setAttribute("src", business.logo);
        logo.setAttribute("alt", `${business.businessName}`);
        logo.setAttribute("loading", "lazy");

        businessCard.appendChild(businessName);
        businessCard.appendChild(tagLine);
        businessCard.appendChild(email);
        businessCard.appendChild(phone);
        businessCard.appendChild(URL);
        businessCard.appendChild(logo);

        document.querySelector(".res-grid").appendChild(businessCard);


    });
}
