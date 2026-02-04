function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  /*WRAPPER (shared background)  */
  const heroWrapper = document.createElement("div");
  heroWrapper.classList.add("hero-wrapper");

  /* HERO SECTION  */
  const homeSection = document.createElement("section");
  homeSection.classList.add("home");

  const heroSlider = document.createElement("div");
  heroSlider.classList.add("hero-slider");

  for (let i = 1; i <= 4; i++) {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    heroSlider.appendChild(slide);
  }

  const overlay = document.createElement("div");
  overlay.classList.add("home-overlay");

  const textBox = document.createElement("div");
  textBox.classList.add("home-content");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Our Restaurant";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "We serve the best food in town using fresh ingredients, unforgettable flavors, and a cozy atmosphere you’ll love.";

  const button = document.createElement("button");
  button.textContent = "Explore Menu";
  button.classList.add("home-btn");

  textBox.append(heading, paragraph, button);
  overlay.appendChild(textBox);
  homeSection.append(heroSlider, overlay);

  /* WHY CHOOSE US  */
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

  /* ============ APPEND EVERYTHING ============ */
  heroWrapper.append(homeSection, infoSection);
  content.appendChild(heroWrapper);


/*location section*/
const locationgrid = document.createElement("div");
locationgrid.classList.add("locationgrid");

const delhi = document.createElement("div");
delhi.classList.add("cards");

const mumbai = document.createElement("div");
mumbai.classList.add("cards");

const banglore = document.createElement("div");
banglore.classList.add("cards");

const goa = document.createElement("div");
goa.classList.add("cards");

const jaipur = document.createElement("div");
jaipur.classList.add("cards");

const pune = document.createElement("div");
pune.classList.add("cards");

const gurgaon = document.createElement("div");
gurgaon.classList.add("cards");

const srinagar = document.createElement("div");
srinagar.classList.add("cards");

const greaternoida = document.createElement("div");
greaternoida.classList.add("cards");

locationgrid.append(jaipur,delhi,mumbai,gurgaon,pune,goa,banglore,srinagar,greaternoida);
content.appendChild(locationgrid);
}
export default loadHome;
