AOS.init({
  duration: 800,
});

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
    console.log(btn, "clicked");
    carouselButtons.forEach((btn) => btn.classList.remove("active"));
    carouselItems.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
    carouselItems[i].classList.add("active");
  };
});
