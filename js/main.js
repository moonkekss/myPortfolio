document.addEventListener("DOMContentLoaded", function () {
  loadComponent("navbar.html", "header");
  loadComponent("footer.html", "footer");
  initializeSkillsChart();
});

function loadComponent(url, elementTag) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(elementTag).innerHTML = data;
    })
    .catch((error) => console.error("Error loading component:", error));
}

function initializeSkillsChart() {
  const ctx = document.getElementById("skillsChart").getContext("2d");
  new Chart(ctx, {
    type: "radar",
    data: {
      labels: [
        "Java",
        "Spring Boot",
        "HTML",
        "CSS",
        "JavaScript",
        "MySQL",
        "Git",
      ],
      datasets: [
        {
          label: "Skills",
          data: [90, 80, 85, 75, 90, 80, 85],
          backgroundColor: "rgba(0, 123, 255, 0.2)",
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scale: {
        ticks: {
          beginAtZero: true,
          max: 100,
        },
      },
    },
  });
}
