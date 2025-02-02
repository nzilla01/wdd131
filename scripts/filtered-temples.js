const hamburgerMenu = document.querySelector(".bars");
const nav = document.querySelector("nav");
const templeContainer = document.querySelector(".section");

if (hamburgerMenu && nav) {
    hamburgerMenu.addEventListener("click", function () {
        nav.classList.toggle("active");
        hamburgerMenu.classList.toggle("times");
    });
}

const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}

const temples = [
    { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
    { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
    { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
    { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
    { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
    { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
    { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
    { templeName: "Apia Samoa", location: "Apia, Samoa", dedicated: "1983, August, 5", area: 18691, imageUrl: "images/apia_samoa_temple_lds.jpeg" },
    { templeName: "Arequipa Peru", location: "Arequipa, Peru", dedicated: "2019, December, 15", area: 27700, imageUrl: "images/rendering_arequipa_peru_temple.jpeg" }
];

function displayTemples(filteredTemples) {
    if (!templeContainer) return;
    templeContainer.innerHTML = "";

    for (let i = 0; i < filteredTemples.length; i++) {
        const temple = filteredTemples[i];
        const templeCard = document.createElement("figure");
        const templeImage = document.createElement("img");
        const templeCaption = document.createElement("figcaption");

        templeImage.src = temple.imageUrl;
        templeImage.alt = temple.templeName;
        templeImage.classList.add("temple");
        templeImage.loading = "lazy";

        templeCaption.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq. ft.</p>
        `;

        templeCard.appendChild(templeImage);
        templeCard.appendChild(templeCaption);
        templeContainer.appendChild(templeCard);
    }
}

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const category = event.target.getAttribute("href");
        filterTemples(category);
    });
});

function filterTemples(category) {
    let filteredTemples;
    switch (category) {
        case "#old":
            filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
            break;
        case "#new":
            filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
            break;
        case "#large":
            filteredTemples = temples.filter(t => typeof t.area === "number" && t.area > 90000);
            break;
        case "#small":
            filteredTemples = temples.filter(t => typeof t.area === "number" && t.area < 10000);
            break;
        default:
            filteredTemples = temples;
    }
    displayTemples(filteredTemples);
}

displayTemples(temples);
