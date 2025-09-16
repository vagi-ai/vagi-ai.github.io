document.addEventListener("DOMContentLoaded", () => {
  // Tabs
  const tabs = Array.from(document.querySelectorAll(".summaryqa-tab"));
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const current = document.querySelector(".summaryqa-tab--active");
      if (current) current.classList.remove("summaryqa-tab--active");
      tab.classList.add("summaryqa-tab--active");
    });
  });

  // Sidebar model items
  const models = Array.from(document.querySelectorAll(".summaryqa-model-item"));
  models.forEach(item => {
    item.addEventListener("click", () => {
      const prev = document.querySelector(".summaryqa-model-item--active");
      if (prev) prev.classList.remove("summaryqa-model-item--active");
      item.classList.add("summaryqa-model-item--active");
    });
  });
});
