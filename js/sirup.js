const menuItems = document.querySelectorAll(".menu-items li a");

menuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault(); // 기본 동작 중단

    const targetId = item.getAttribute("href").substring(1); // 클릭한 링크의 href 속성에서 '#' 제외한 부분 가져오기
    const targetSection = document.getElementById(targetId); // 해당 섹션의 DOM 요소 가져오기

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop, // 해당 섹션의 상단 위치로 스크롤
        behavior: "smooth", // 부드러운 스크롤 적용
      });
    }
  });
});

/* 각 영역 마우스 휠에 따라 글자 움직임 부분 */
const sections = document.querySelectorAll("section.form");
const h2Elements = document.querySelectorAll("section.form h2");
let currentIndex = 0;

document.addEventListener("wheel", (event) => {
  event.preventDefault();
  const scrollDirection = event.deltaY > 0 ? 1 : -1;
  currentIndex = Math.min(Math.max(currentIndex + scrollDirection, 0), sections.length - 1);
  updateContent();
});

const updateContent = () => {
  h2Elements.forEach((h2) => {
    h2.classList.remove("active");
  });

  h2Elements[currentIndex].classList.add("active");
};

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
  human.style.transform = `translateX(${x / 10}px)`;
  date.style.transform = `translateX(${x / 20}px)`;
  introConstWrap.style.transform = `translateX(${-x / 20}px)`;
  textImg.style.transform = `translateX(${x / 10}px)`;
};

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
