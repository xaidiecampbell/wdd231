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

const Businesses = data;
const url = "./chamber-directory.json";
const BusinessCard = document.querySelector("#res-grid");
console.table(BusinessCard);
// load the JSON file
async function GetData() {
    try {
        const response = await fetch('./chamber-directory.json');

        // Parse the JSON file
        const data = await response.json();
        console.log(data);

        get(data);
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
}


createBusinessCard(data.Businesses);


function createBusinessCard(Businesses) {
    const container = document.querySelector(".res-grid");

    Businesses.forEach(Business => {
        const BusinessCard = document.createElement("section");
        let BusinessName = document.createElement("h3");
        let tagLine = document.createElement("p");
        let email = document.createElement("p");
        let phone = document.createElement("p");
        let URL = document.createElement("p");
        let logo = document.createElement("img");


        BusinessName.textContent = Business.BusinessName;
        tagLine.innerHTML = `<span class="label">Location:</span> ${Business.tagLine}`;
        email.innerHTML = `<span class="label">Dedicated:</span> ${Business.email}`;
        phone.innerHTML = `<span class="label">Size:</span> ${Business.phone}`;
        URL.innerHTML = `<span class="label">Website:</span> ${Business.URL}`;
        logo.setAttribute("src", Business.logo);
        logo.setAttribute("alt", `${Business.BusinessName}`);
        logo.setAttribute("loading", "lazy");

        BusinessCard.appendChild(BusinessName);
        BusinessCard.appendChild(tagLine);
        BusinessCard.appendChild(email);
        BusinessCard.appendChild(phone);
        BusinessCard.appendChild(URL);
        BusinessCard.appendChild(logo);

        document.querySelector(".res-grid").appendChild(BusinessCard);


    });
}
