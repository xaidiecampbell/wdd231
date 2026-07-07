// store the selected elements that we are going to use
const navButton = document.querySelector('#nav-button');
const navLinks = document.querySelector('#nav-bar');

// toggle the show class off and on
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
    // navLinks.classList.toggle('show');
});

// Select the nav element
const navBar = document.querySelector('#nav-bar');

// get the year and date modified
const year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;

document.getElementById("lastModified").textContent = document.lastModified;

// course array

const course = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]



function createCourseCard() {

    course.forEach(course => {
        let courseCard = document.createElement("section");
        let subject = document.createElement("h3");
        let number = document.createElement("p");
        let credits = document.createElement("p");
        let certificate = document.createElement("p");
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

        document.querySelector(".courses").appendChild(courseCard);


    });
}
// filter courses
document.addEventListener("DOMContentLoaded", () => {
    // all event listeners here

    const wddLink = document.querySelector("#WDD");
    wddLink.addEventListener("click", () => {
        createCourseCard(courses.filter(course => course.subject.includes("WDD")));
    })
    
    console.log(wddLink);
    const passedClassesLink = document.querySelector("#true");
    passedClassesLink.addEventListener("click", () => {
        createCourseCard(courses.filter(course => course.completed === true))
    })
    console.log(cseLink);
    const cseLink = document.querySelector("#CSE");
    cseLink.addEventListener("click", () => {
        createCourseCard(courses.filter(course => course.subject.includes("CSE")));
    })
    console.log(passedClassesLink);
    const homeLink = document.querySelector("#home");
    homeLink.addEventListener("click", () => {
        createCourseCard(courses);
    });
    console.log(homeLink);
});
