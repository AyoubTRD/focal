AOS.init({
  duration: 1300,
});

function closeNavBar() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.add("exit");
  navLinks.classList.remove("active");
  setTimeout(() => {
    navLinks.classList.remove("exit");
  }, 350);
}

document.querySelector(".fa-close").onclick = closeNavBar;

const links = Array.from(document.querySelectorAll("a")).filter(
  (a) => a.getAttribute("href")[0] === "#"
);
links.forEach((link) => {
  link.onclick = (e) => {
    closeNavBar();
    e.preventDefault();
    const section = document.querySelector(link.getAttribute("href"));
    window.scrollTo({
      behavior: "smooth",
      top: section.offsetTop - 75,
      left: 0,
    });
  };
});

document.querySelector(".fa-bars").onclick = () =>
  document.querySelector(".nav-links").classList.add("active");

const bars = document.querySelectorAll(".bar");

bars.forEach((bar) => {
  const className = Array.from(bar.classList).find((className) =>
    className.includes("bar-")
  );
  const value = parseInt(className.replace("bar-", ""));

  const progress = bar.querySelector(".progress");
  progress.style.width = `${value}%`;
  const $value = progress.querySelector(".value");
  $value.textContent = `${value}%`;
});

const carouselButtons = document.querySelectorAll(
  '[class^="carousel-button-"]'
);
const carouselItems = document.querySelectorAll(".carousel-item");

carouselButtons.forEach((btn, i) => {
  btn.onclick = () => {
    carouselButtons.forEach((btn) => btn.classList.remove("active"));
    carouselItems.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
    carouselItems[i].classList.add("active");
  };
});

const observer = new IntersectionObserver(
  (observations) => {
    const intersectedElement = observations.find((el) => el.isIntersecting);
    if (intersectedElement) {
      const { target } = intersectedElement;
      const navLink = Array.from(navLinks).find(
        (link) => link.getAttribute("href").replace("#", "") === target.id
      );
      if (navLink) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLink.classList.add("active");
      }
    }
  },
  {
    threshold: 1.0,
  }
);

const navLinks = document.querySelectorAll("nav .nav-link a");
const sections = Array.from(navLinks).map((link) =>
  document.querySelector(link.getAttribute("href"))
);

sections.forEach((section) => {
  observer.observe(section);
});
