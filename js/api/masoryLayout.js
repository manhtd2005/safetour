async function showMasory() {
  const urlAPI = "http://localhost:3000/locations";
  let data = await fetch(urlAPI).then((res) => res.json());
  const masoryMediaList = document.querySelectorAll(".topDestination__media");
  masoryMediaList.forEach((masoryMediaItem) => {
    let i = Math.floor(Math.random() * 20);
    masoryMediaItem
      .querySelector(".topDestination__img")
      .setAttribute("src", `${data[i].img}`);

      masoryMediaItem.querySelector(
      ".topDestination__city"
    ).innerText = `${data[i].city}`;

    masoryMediaItem.querySelector(
      ".topDestination__country"
    ).innerText = `${data[i].country}`;

    masoryMediaItem.querySelector(
      ".topDestination__star"
    ).innerText = `${data[i].stars}`;
  });
}

export default showMasory();
