document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.createElement("button");
  toggleButton.innerText = "Dark Mode";
  toggleButton.style.position = "fixed";
  toggleButton.style.top = "20px";
  toggleButton.style.right = "30px";
  toggleButton.style.width = "60px";
  toggleButton.style.height = "60px";
  toggleButton.style.backgroundColor = "#000000";
  toggleButton.style.color = "#fff";
  toggleButton.style.border = "none";
  toggleButton.style.borderRadius = "50%";
  toggleButton.style.cursor = "pointer";
  toggleButton.style.zIndex = "2";
  toggleButton.style.display = "flex";
  toggleButton.style.alignItems = "center";
  toggleButton.style.justifyContent = "center";
  toggleButton.style.fontSize = "0.8rem";
  toggleButton.style.fontFamily= "Edu AU VIC WA NT Hand, cursive";
  document.body.appendChild(toggleButton);

  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
  }

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
    } else {
      localStorage.removeItem("dark-mode");
    }
  });

  const sections = document.querySelectorAll("section");
  const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
