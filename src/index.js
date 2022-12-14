var links = document.querySelectorAll("a");
var listItems = document.querySelectorAll("#navbar li a");

const sectionList = document.querySelectorAll("section");

window.onscroll = function () {
  var yAxis = this.scrollY;
  let currentSection = "";
  sectionList.forEach((item) => {
    let ht = item.clientHeight / 3;
    let sessionOffset = item.offsetTop;
    if (yAxis >= sessionOffset - ht) {
      currentSection = item.getAttribute("id");
    }
  });

  listItems.forEach((element) => {
    element.classList.remove("active");
    if (element.classList.contains(currentSection))
      element.classList.add("active");
  });
};
