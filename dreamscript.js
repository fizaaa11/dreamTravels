const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const testimonials = [
    {
        "name": "Sarah Ahmed",
        "location": "Dubai, UAE",
        "review": "Our trip to Turkey was unforgettable! The hotels, tours, and transport were perfectly arranged. Highly recommended!",
        "image": "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        "name": "Michael Lee",
        "location": "New York, USA",
        "review": "Italy was breathtaking. Everything from the flights to the guided tours was handled flawlessly by the agency.",
        "image": "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        "name": "Ayesha Khan",
        "location": "Karachi, Pakistan",
        "review": "China was an amazing experience! Smooth arrangements and friendly service made the trip stress-free.",
        "image": "https://randomuser.me/api/portraits/women/21.jpg"
    },
    {
        "name": "David Smith",
        "location": "London, UK",
        "review": "Our family vacation to Bali was beyond expectations. Great hotels, friendly guides, and a wonderful itinerary.",
        "image": "https://randomuser.me/api/portraits/men/45.jpg"
    }
];

const container = document.getElementById('testimonialContainer');

testimonials.forEach(testimonial => {
    const card = document.createElement('div');
    card.classList.add('testimonial-card');

    card.innerHTML = `
        <img src="${testimonial.image}" alt="${testimonial.name}">
        <h3>${testimonial.name}</h3>
        <small>${testimonial.location}</small>
        <p>"${testimonial.review}"</p>
    `;

    container.appendChild(card);
});
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 600,
    speedAsDuration: true,
    offset: 80 
  });