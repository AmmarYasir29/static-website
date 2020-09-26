// let apiKey = "&api_key=9gRFqyPrULrL7YE1PsLPnCEe4IHCAyTJ";
let btn = document.getElementById("btnUser");
let fig = document.getElementById("result");
let text = document.getElementById("textUesr");
let api =
  "http://api.giphy.com/v1/gifs/search?&api_key=9gRFqyPrULrL7YE1PsLPnCEe4IHCAyTJ&q=";
btn.addEventListener("click", (e) => {
  let url = api + text.value;
  e.preventDefault();
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data);
      console.log("META", data.meta);
      img = document.createElement("img");
      img.src = data.data[0].images.downsized.url;
      fig.appendChild(img);
    })
    .catch((err) => {
      console.log(err);
    });
});
