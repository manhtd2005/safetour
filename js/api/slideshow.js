 async function slideShow() {
  const apiURL = "http://localhost:3000/combo";
  let data = await fetch(apiURL).then((res) => res.json());
  const slideShowList = document.querySelector(".slideshow__list");
  let lengthData = data.length;

  for (let i = 0; i < lengthData - 1; i++) {
    let j = Math.floor(Math.random() * 8);
    const slideShowItem = document.createElement("div");
    slideShowItem.classList.add("slideshow__item");
    slideShowItem.innerHTML = `
        <img src="${data[j].img}" alt="" class="slideshow__img">
        <div class="slideshow__content">
            <span class="slideshow__location">${data[j].title}</span>
            <div class="slideshow__desc">
                <span class="slideshow__places">${data[j].place} Places</span>
                <span class="slideshow__activities"> ${data[j].activites} Activites</span>
            </div>
            <div class="slideshow__action">
                <b class="slideshow__price">$ ${data[j].price}.99</b>
                <a href="" class="btn__primary slideshow__btnBook">Book Now</a> <!-- Màu skyblue-->
            </div>
            <div class="slideshow__safe">
                <span class="slideshow__safe--logo">ST</span>
                <p class="slideshow__safe--desc">Safe Tour Agency</p>
            </div>
        </div>
    `;
    slideShowList.appendChild(slideShowItem);
  }

  // Slide show
  const btnLeft = document.querySelector(".slideshow__arrowItem--left");
  const btnRight = document.querySelector(".slideshow__arrowItem--right");
  const slideShowItem = document.querySelector(".slideshow__item");
  const widthItem = slideShowItem.offsetWidth + 17;
  let pos = 0;

  btnLeft.addEventListener("click", () => {
    if (pos == 0) {
      pos == lengthData - 4;
      slideShowList.style.transform = `translateX(${-widthItem * pos - 29}px)`;
    } else {
      --pos;
      slideShowList.style.transform = `translateX(${-widthItem * pos - 29}px)`;
    }
  });

  btnRight.addEventListener("click", () => {
    if (pos == lengthData - 4) {
      pos = 0;
      slideShowList.style.transform = `translateX(-15px)`;
    } else {
      ++pos;
      slideShowList.style.transform = `translateX(${-widthItem * pos - 29}px)`;
    }
  });
}

export default slideShow();