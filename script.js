//Slideshow Start
let current = 0;

let countries = [{
    name: "Vietnam",
    flag: "🇻🇳",
    cities: [
        "Ha Noi",
        "Da Nang",
        "Ho Chi Minh"
    ],
    img: "https://i.ibb.co/DD4LyMt/Vietnam.png",
    description: "Vietnam is a Southeast Asian country known for its beaches, rivers, Buddhist pagodas and bustling cities. Notable dishes and where to find them: Com Tam-Ho Chi Minh/Sai Gon; Cao Lau-Hoi An."
},
{
    name: "Japan",
    flag: "🇺🇸",
    cities: [
        "Osaka",
        "Okinawa"
    ],
    img: "https://i.ibb.co/j5V5WFC/japan.png",
    description: "Japan is an island country in East Asia. It is situated in the northwest Pacific Ocean, and is bordered on the west by the Sea of Japan, while extending from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south. Notable dishes and where to find them: Okonomiyaki - Osaka; Goya Champuru-Okinawa."
},
{
    name: "Philippines",
    flag: "🇦🇺",
    cities: [
        "Cebu",
        "Pampanga"
    ],
    img: "https://i.ibb.co/HqnyxVQ/philippine.png",
    description: "The Philippines, officially the Republic of the Philippines, is an archipelagic country in Southeast Asia. It is situated in the western Pacific Ocean, and consists of about 7,640 islands. Notable dishes and where to find them: Lechon-Cebu; Sisig-Pampanga"
},
{
    name: "India",
    flag: "🇦🇺",
    cities: [
        "Delhi",
        "Kolkata"
    ],
    img: "https://i.ibb.co/xHgZ0tj/india.png",
    description: "India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world. Notable dishes and where to find them: Chole Bhature-Delhi; Rasgulla-Kolkata."
},
{
    name: "Pakistan",
    flag: "🇦🇺",
    cities: [
        "Lahore",
        "Multan"
    ],
    img: "https://i.ibb.co/ZS9fsLf/pakistan.png",
    description: "Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia. It is the world's fifth-most populous country, with a population of almost 227 million, and has the world's second-largest Muslim population. Notable dishes and where to find them: Paaye-Lahore; Chaanpain-Multan."
}
];


// Show next
function slideRight() {
    $("#country-name").text("US");
    //sliderImages[current + 1].style.display = "block";
}

// Right arrow click
$('document').ready(function () {
    document.querySelector("#arrow-right").addEventListener("click", function () {
        if (current === countries.length - 1) {
            current = -1;
        }
        country = countries[current + 1];
        $("#country-name").text(country.name);
        $("#country-des").text(country.description);
    });
});


// Slideshow end