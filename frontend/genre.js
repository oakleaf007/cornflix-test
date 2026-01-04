const title = document.getElementById("genre-title");
const select = document.getElementById("genre-select");

const params = new URLSearchParams(window.location.search);
const genre = params.get("type");

if (genre) {
  title.textContent = genre.charAt(0).toUpperCase() + genre.slice(1);
  if (select) select.value = genre;
}

if (select) {
  select.addEventListener("change", () => {
    window.location.href = `genre.html?type=${select.value}`;
  });
}
