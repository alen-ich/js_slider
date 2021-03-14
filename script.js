let images = [{
    url: "./images/img-1.png",
    city: "Rostov-on-Don, LCD admiral",
    area: "81 m<sup>2</sup>",
    time: "3.5 months",
    cost: "Upon request"
    }, {
    url: "./images/img-2.png",
    city: "Sochi, Thievs",
    area: "105 m<sup>2</sup>",
    time: "4 months",
    cost: "Upon request"
    }, {
    url: "./images/img-3.png",
    city: "Rostov-on-Don, Patriotic",
    area: "93 m<sup>2</sup>",
    time: "3 months",
    cost: "Upon request"
    }];
    
  

function initSlider(options) {
  if (!images || !images.length) return;
  
  options = options || {
    dots: true
  };
  
  let sliderImages = document.querySelector(".slider-images");
  let sliderArrows = document.querySelector(".slider-nav");
  let sliderDots = document.querySelector(".slider-dots");
  let sliderLinks = document.querySelector(".slider-links");
  let sliderCity = document.querySelector(".city");
  let sliderArea = document.querySelector(".area");
  let sliderTime = document.querySelector(".time");
  let sliderCost = document.querySelector(".cost");

  initImages();
  initArrows();
  initTitles();
  initDots();
  initLinks();

  
  
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

  function initLinks() {
    images.forEach((image, index) => {
      let link = `<div class="slider-links-item n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].city}</div>`;
      sliderLinks.innerHTML += link;
    });
    sliderLinks.querySelectorAll(".slider-links-item").forEach(link => {
      link.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
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
    if (options.titles) {
      sliderLinks.querySelector(".active").classList.remove("active");
      sliderLinks.querySelector(".n" + num).classList.add("active");
    };
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
    let citySpan = `<span class= "img-city txt">${images[num].city}</span>`;
    let areaSpan = `<span class= "img-area txt">${images[num].area}</span>`;
    let timeSpan = `<span class= "img-time txt">${images[num].time}</span>`;
    let costSpan = `<span class= "img-time txt">${images[num].cost}</span>`;
     sliderCity.innerHTML =  citySpan;
     sliderArea.innerHTML =  areaSpan;
     sliderTime.innerHTML =  timeSpan;
     sliderCost.innerHTML =  costSpan;
  }
  
}

let sliderOptions = {
  dots: true,
  titles: true,
  links: true
};

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});