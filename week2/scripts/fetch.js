

const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector("#cards");

async function getProphetData() {
    const response = await fetch(url); // request
    const data = await response.json(url); // parse the JSON data
    // console.table(data.prophets)
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let prophetCard = document.createElement("section");
        let fullName = document.createElement("h2");
        let img = document.createElement("portrait");
        let loading = document.createElement("p");
        let width = document.createElement("p");
        let description = document.createElement("p");
        let technology = document.createElement("p");


        // courseCard.textContent = course.subject;
        subject.innerHTML = `<span class="label"></span> ${course.subject}`;
        number.innerHTML = `<span class="label"></span> ${course.number}`;
        credits.innerHTML = `<span class="label">Credits:</span> ${course.credits}`;
        certificate.innerHTML = `<span class="label">Certificate:</span> ${course.certificate}`;
        description.innerHTML = `<span class="label">Course Description:</span> ${course.description}`;
        technology.innerHTML = `<span class="label">Technology:</span> ${course.technology}`;

        courseCard.appendChild(subject);
        courseCard.appendChild(number);
        courseCard.appendChild(credits);
        courseCard.appendChild(certificate);
        courseCard.appendChild(description);
        courseCard.appendChild(technology);

        document.querySelector(".courseList").appendChild(courseCard);
    });
}

