export async function showOurBestTour() {
  const urlAPI = "http://localhost:3000/locations";
  let data = await fetch(urlAPI).then((res) => res.json());
  const bestTour = document.querySelector(".bestTour__bottom");

  for (let i = 0; i < 3; i++) {
    let j = Math.floor(Math.random() * 20);
    const col = document.createElement("div");
    col.classList.add("col");
    col.innerHTML = `
        <div class="bestTour__item">
            <img src="${data[j].img}" alt="" class="bestTour__img">
            <div class="bestTour__content">
                <span class="bestTour__price">$${data[j].priceInDay}/day</span>
                <span class="bestTour__location">${data[j].city}</span>
                <div class="bestTour__desc">
                    <img src="./assets/img-icon/home/outBestTour/obt1.svg" alt=""
                        class="bestTour__desc--icon">
                    <p class="bestTour__desc--desc">${data[j].city}, ${
      data[j].country
    }</p>
                </div>

                <div class="bestTour__time">
                    <div class="bestTour__date">
                        <img src="./assets/img-icon/home/outBestTour/obt2.svg" alt=""
                            class="bestTour__date--icon">
                            <span class="bestTour__date--date">${new Date(
                              Date.now() -
                                Math.random() * 100 * 365 * 24 * 60 * 60 * 1000
                            ).toLocaleDateString()}</span>
                    </div>
                    <div class="bestTour__days">
                        <img src="./assets/img-icon/home/outBestTour/obt3.svg" alt=""
                                            class="bestTour__days--icon">
                        <span class="bestTour__days--days">${Math.floor(
                          Math.random() * 20
                        )} Days</span>
                    </div>
                </div>
            </div>
        </div>`;
    bestTour.appendChild(col);
  }
}

export default showOurBestTour();