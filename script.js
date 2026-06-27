//  shared js
 function toggleMenu() {
        document.querySelector(".navbars").classList.toggle("active");
        document.querySelector(".search").classList.toggle("active");
        document.querySelector(".sign-container").classList.toggle("active");
      }
      const slides = document.querySelectorAll(".content");

      let current = 0;

      function showSlide(index) {
        slides.forEach((slide) => slide.classList.remove("active"));
        slides[index].classList.add("active");
      }

      // auto slide
      setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
      }, 4000);

      // next button
      document.querySelector(".next").addEventListener("click", () => {
        current = (current + 1) % slides.length;
        showSlide(current);
      });

      // prev button
      document.querySelector(".prev").addEventListener("click", () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
      });

      // scroll effect for navbar
      window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");

        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });
      const cardsContainer = document.querySelector(".cards");

      document.querySelector(".card-next").addEventListener("click", () => {
        cardsContainer.scrollBy({
          left: 330,
          behavior: "smooth",
        });
      });

      document.querySelector(".card-prev").addEventListener("click", () => {
        cardsContainer.scrollBy({
          left: -330,
          behavior: "smooth",
        });
      });


    

      