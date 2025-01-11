async function showSafeTour() {
  const urlAPI = "http://localhost:3000/blogs";
  let data = await fetch(urlAPI).then((res) => res.json());
  const guidList = document.querySelectorAll(".guiding__item");
  guidList.forEach((guidItem) => {
    let j = Math.floor(Math.random() * 10);
    guidItem
      .querySelector(".guiding__img")
      .setAttribute("src", `${data[j].content[1].img}`);

    guidItem.querySelector(".guiding__title").innerText = `${data[j].title}`;

    guidItem.querySelector(
      ".guiding__paragraph"
    ).innerText = `${data[j].content[1].desc}`;

    guidItem.querySelector(".guiding__date").innerText = `${data[j].time}`;
  });
}

export default showSafeTour();
