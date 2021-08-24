// About section tabs
(() => {
  const aboutSection = document.querySelector(".about-section");
  tabsContainer = document.querySelector(".about-tabs");

  tabsContainer.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("tab-item") &&
      !event.target.classList.contains("active")
    ) {
      const target = event.target.getAttribute("data-target");
      tabsContainer.querySelector(".active").classList.remove("active");
      event.target.classList.add("active");
      //   desactivate existing active 'tab'
      aboutSection
        .querySelector(".tab-content.active")
        .classList.remove("active");
      // activate new "tab-content"
      aboutSection.querySelector(target).classList.add("active");
    }
  });
})();

// Projects section tabs
(() => {
  const projectsSection = document.querySelector(".projects-section");
  tabsProjectsContainer = document.querySelector(".projects-tabs");

  tabsProjectsContainer.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("tab-item") &&
      !event.target.classList.contains("active")
    ) {
      const target = event.target.getAttribute("data-target");
      tabsProjectsContainer.querySelector(".active").classList.remove("active");
      event.target.classList.add("active");
      ///////
      projectsSection
        .querySelector(".projects_content.active")
        .classList.remove("active");
      projectsSection.querySelector(target).classList.add("active");
    }
  });
})();
