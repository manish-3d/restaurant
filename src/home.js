function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  /* ================= WRAPPER ================= */
  const heroWrapper = document.createElement("div");
  heroWrapper.classList.add("hero-wrapper");

  /* ================= HERO SECTION ================= */
  const homeSection = document.createElement("section");
  homeSection.classList.add("home");

  const heroSlider = document.createElement("div");
  heroSlider.classList.add("hero-slider");

  for (let i = 1; i <= 4; i++) {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    heroSlider.appendChild(slide);
  }

  /* ================= OVERLAY ================= */
  const overlay = document.createElement("div");
  overlay.classList.add("home-overlay");

  /* ===== BUTTON SECTION (FLEX) ===== */
  const divBtnSec = document.createElement("div");
  divBtnSec.classList.add("div-btn-sec");

  const homeBtn = document.createElement("a");
  homeBtn.textContent = "Home";
  homeBtn.classList.add("btn");

  const menuBtn = document.createElement("a");
  menuBtn.textContent = "Menu";
  menuBtn.classList.add("btn");

  const locationBtn = document.createElement("a");
  locationBtn.textContent = "Location";
  locationBtn.classList.add("btn");

  const bookBtn = document.createElement("a");
  bookBtn.textContent = "Book Now";
  bookBtn.classList.add("btn", "btn-primary");

  const contactBtn = document.createElement("a");
  contactBtn.textContent = "Contact Us";
  contactBtn.classList.add("btn","contactBtn");
  divBtnSec.append(contactBtn,homeBtn, menuBtn, locationBtn,bookBtn);

  /* ===== TEXT CONTENT ===== */
  const textBox = document.createElement("div");
  textBox.classList.add("home-content");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Our Restaurant";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "We serve the best food in town using fresh ingredients, unforgettable flavors, and a cozy atmosphere you’ll love.";

  const exploreBtn = document.createElement("button");
  exploreBtn.textContent = "Explore Menu";
  exploreBtn.classList.add("home-btn");

  textBox.append(heading, paragraph, exploreBtn);

  overlay.append(divBtnSec, textBox);
  homeSection.append(heroSlider, overlay);

  /* ================= WHY CHOOSE US ================= */
  const infoSection = document.createElement("section");
  infoSection.classList.add("info-section");

  const infoHeading = document.createElement("h2");
  infoHeading.textContent = "Why Choose Us";

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("info-cards");

  const features = [
    { title: "Fresh Ingredients", text: "Locally sourced ingredients every day." },
    { title: "Expert Chefs", text: "Crafted by passionate culinary experts." },
    { title: "Cozy Ambience", text: "Warm, premium dining experience." },
  ];

  features.forEach((feature) => {
    const card = document.createElement("div");
    card.classList.add("info-card");

    const h3 = document.createElement("h3");
    h3.textContent = feature.title;

    const p = document.createElement("p");
    p.textContent = feature.text;

    card.append(h3, p);
    cardContainer.appendChild(card);
  });

  infoSection.append(infoHeading, cardContainer);

  heroWrapper.append(homeSection, infoSection);
  content.appendChild(heroWrapper);

  /* ================= LOCATION GRID ================= */
  const locationgrid = document.createElement("div");
  locationgrid.classList.add("locationgrid");

  function createCard(city, img, phone, address) {
    const card = document.createElement("div");
    card.classList.add("cards");
    card.style.backgroundImage = `url("${img}")`;

    const info = document.createElement("div");
    info.classList.add("card-info");

    const title = document.createElement("h3");
    title.textContent = city;

    const contact = document.createElement("p");
    contact.textContent = phone;

    const addr = document.createElement("p");
    addr.textContent = address;

    info.append(title, contact, addr);
    card.appendChild(info);

    return card;
  }

  locationgrid.append(
    createCard("Jaipur","https://one8commune.co.in/wp-content/uploads/2024/03/DSC07198-1024x1536.webp","+91 9876543210","MI Road, Jaipur"),
    createCard("Delhi","https://one8commune.co.in/wp-content/uploads/2024/03/LAH-09970-2.webp","+91 9123456780","Aerocity, New Delhi"),
    createCard("Mumbai","https://one8commune.co.in/wp-content/uploads/2024/03/2-1024x1536.webp","+91 9988776655","Lower Parel, Mumbai"),
    createCard("Gurgaon","https://one8commune.co.in/wp-content/uploads/2025/08/AMP-One8C-Set1-11-1.webp","+91 9090909090","Cyber Hub, Gurgaon")
  );

  content.appendChild(locationgrid);

  /* ================= BOOKING SECTION ================= */
  const bookingSlide = document.createElement("section");
  bookingSlide.classList.add("booking-slide");

  const bookingCard = document.createElement("div");
  bookingCard.classList.add("booking-card");

  const title = document.createElement("h2");
  title.textContent = "BOOK YOUR TABLE";

  const formGrid = document.createElement("div");
  formGrid.classList.add("form-grid");

  formGrid.innerHTML = `
    <input placeholder="Your Name">
    <input placeholder="Your Phone">
    <select>
      <option>Location</option>
      <option>Delhi</option>
      <option>Mumbai</option>
      <option>Jaipur</option>
    </select>
    <input type="number" placeholder="People">
    <input type="date">
    <input type="time">
  `;

  const btn = document.createElement("button");
  btn.classList.add("book-btn");
  btn.textContent = "BOOK A TABLE";

  bookingCard.append(title, formGrid, btn);
  bookingSlide.appendChild(bookingCard);
  content.appendChild(bookingSlide);
}

export default loadHome;
