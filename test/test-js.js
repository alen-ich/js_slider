let images = [{
    url: "../img-1.png",
    city: "Rostov-on-Don <br> LCD admiral",
    area: "81 m<sup>2</sup>",
    time: "3.5 months",
    cost: "Upon request"
    }, {
    url: "../img-2.png",
    city: "Sochi <br> Thievs",
    area: "105 m<sup>2</sup>",
    time: "4 months"
    }, {
    url: "../img-3.png",
    city: "Rostov-on-Don <br> LCD admiral",
    area: "93 m<sup>2</sup>",
    time: "3 months"
    }];
    
  

function initSlider(options) {
  if (!images || !images.length) return;
  
  options = options || {
    dots: true
  };
  
  let sliderImages = document.querySelector(".slider-images");
  let sliderArrows = document.querySelector(".slider-nav");
  let sliderDots = document.querySelector(".slider-dots");
  let sliderLinks = document.querySelector(".projects-list")
  let sliderCity = document.querySelector(".city");
  let sliderArea = document.querySelector(".area");
  let sliderTime = document.querySelector(".time");
  let sliderCost = document.querySelector(".cost");

  initImages();
  initArrows();
  initTitles();
  initDots();

  if (options.links) {
    initLinks();
  }
  
  
  function initImages() {
    images.forEach((image, index) => {  
      let imageDiv = `<img class="image n${index} ${index === 0? "active" : ""}" src = ${images[index].url} data-index="${index}">`
      sliderImages.innerHTML += imageDiv;
    });
  }
  
  function initArrows() {
    sliderArrows.querySelectorAll(".slider-arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }
  
  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider-dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider-dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }


  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    if (options.dots) {
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
    }
    if (options.titles) changeTitle(num);

  }
  
   function initTitles() {
    let citySpan = `<span class= "img-city txt">${images[0].city}</span>`;
    let areaSpan = `<span class= "img-area txt">${images[0].area}</span>`;
    let timeSpan = `<span class= "img-time txt">${images[0].time}</span>`;
    let costSpan = `<span class= "img-time txt">${images[0].cost}</span>`;
     sliderCity.innerHTML +=  citySpan;
     sliderArea.innerHTML +=  areaSpan;
     sliderTime.innerHTML +=  timeSpan;
     sliderCost.innerHTML +=  costSpan;
   }
  
  function changeTitle(num) {
    if (!images[num].city) return;
    let sliderCityTitle = sliderCity.querySelector(".img-city");
    let sliderAreaTitle = sliderArea.querySelector(".img-area");
    let sliderTimeTitle = sliderTime.querySelector(".img-time");
    let sliderCostTitle = sliderCost.querySelector(".img-cost");
    sliderCityTitle.innerHTML = images[num].city;
    sliderAreaTitle.innerHTML = images[num].area;
    sliderTimeTitle.innerHTML = images[num].time;
    sliderCostTitle.innerHTML = images[num].cost;
  }
  
}

let sliderOptions = {
  dots: true,
  titles: true
};

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});