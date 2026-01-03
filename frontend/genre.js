const title = document.getElementById("genre-title");

const params = new URLSearchParams(window.location.search);
const genre = params.get("type");

if (genre) {
  title.textContent = `${genre.charAt(0).toUpperCase() + genre.slice(1)} Movies`;
}
