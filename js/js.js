function showDescription(element) {
  const description = element.querySelector(".description");

  // Toggle keterangan (tampilkan/jatuhkan)
  description.style.display = description.style.display === "none" || !description.style.display ? "block" : "none";
}
