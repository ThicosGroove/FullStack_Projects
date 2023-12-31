const form = document.querySelector("#search-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);

    form.elements.query.value = "";
  } catch (e) {
    console.log("ERROR!", e);
  }
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement(`IMG`);
      img.src = result.show.image.medium;
      document.body.append(img);
    }
    // Else Criar um novo elemento pra mostrar ao usuário
    // que não encontrou
  }
};
