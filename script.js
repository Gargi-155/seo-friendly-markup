// Progressive enhancement example
document.querySelectorAll("details").forEach(detail => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      console.log("FAQ opened:", detail.querySelector("summary").textContent);
    }
  });
});
