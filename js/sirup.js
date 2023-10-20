//메뉴 페이지 이동 부분
const menuItems = document.querySelectorAll(".menu-items li a");

menuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault(); 
    const targetId = item.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId); 

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop, 
        behavior: "smooth",
      });
    }
  });
});

//메뉴 배경색 변화 부분
const header = document.querySelector("header");

document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 10) { 
    header.style.backgroundColor = "#black"; 
  } else {
    header.style.backgroundColor = "transparent"; // 스크롤 위치가 100 미만이면 투명 배경색으로 변경합니다.
  }
});

/* 각 영역 마우스 휠에 따라 글자 움직임 부분 */
// const sections = document.querySelectorAll("section");
// const h2Elements = document.querySelectorAll("section h2");
// let currentIndex = 0;

// document.addEventListener("wheel", (event) => {
//   event.preventDefault();
//   const scrollDirection = event.deltaY > 0 ? 1 : -1;
//   currentIndex = Math.min(Math.max(currentIndex + scrollDirection, 0), sections.length - 1);
//   updateContent();
// });

// const updateContent = () => {
//   h2Elements.forEach((h2) => {
//     h2.classList.remove("active");
//   });

//   h2Elements[currentIndex].classList.add("active");
// };

/*1영역 */
let x = 0,
  y = 0;

const contentAll = document.querySelectorAll(".contWrap img");

const shadow = contentAll[0];
const date = contentAll[1];
const human = contentAll[2];
const textImg = contentAll[3];

console.log(contentAll);

window.addEventListener("mousemove", (event) => {
  console.log(event);
  x = event.pageX - window.innerWidth / 2;

  mouseMoveFunc();
});
const mouseMoveFunc = () => {
  shadow.style.transform = `translateX(${-x / 10}px)`;
  date.style.transform = `translateX(${x / 20}px)`;
  human.style.transform = `translateX(${x / 20}px)`;
  textImg.style.transform = `translateX(${x / 20}px)`;
};

//2영역
(function() {
  const outputElem = document.querySelector('.output');
  const ilbuniElem = document.querySelector('.singer-poster');
  let num = 0;

  function showValue() {
      let posY = ilbuniElem.getBoundingClientRect().top;
      outputElem.innerHTML = posY;

      if (posY < window.innerHeight * 1) {
          ilbuniElem.classList.add('zoom');
      } else {
          ilbuniElem.classList.remove('zoom');
      }
  }

  window.addEventListener('scroll', function() {
      showValue();
  });

  showValue();

})();

/*progress bar와*/ /*2 영역*/

const progressBar = document.querySelector(".bar");
let scrollNum = 0;
let documentHeight = 0;

const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight - window.innerHeight;

  progressBar.style.width = `${percent(scrollNum, documentHeight)}%`;
});


/* 3영역 */
const scrollContainer = document.querySelector(".sec-clients");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});