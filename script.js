let d = document;

let anchor_why = d.querySelector(`nav li a[href="#why"]`);
let anchor_how = d.querySelector(`nav li a[href="#how"]`);
let anchor_about = d.querySelector(`nav li a[href="#about"]`);

// ## why anchor link
let section_why = d.querySelector("section#why");
anchor_why.addEventListener("click", e => {
  e.preventDefault();
  window.scroll({
    top: section_why.offsetTop,
    left: 0,
    behavior: "smooth"
  });
});

// ## how anchor link
let section_how = d.querySelector("section#how");
anchor_how.addEventListener("click", e => {
  e.preventDefault();
  window.scroll({
    top: section_how.offsetTop,
    left: 0,
    behavior: "smooth"
  });
});

// ## how anchor link
let section_about = d.querySelector("section#about");
anchor_about.addEventListener("click", e => {
  e.preventDefault();
  window.scroll({
    top: section_about.offsetTop,
    left: 0,
    behavior: "smooth"
  });
});

// ## Show / Hide STT-BTN when below header area
window.addEventListener("scroll", (e) => {
  if ( window.scrollY >= section_why.offsetTop  ) {
    d.querySelector(".stt-btn").classList.add("active");
  } else {
    d.querySelector(".stt-btn").classList.remove("active");
  }
});
let scroll_btn = d.querySelector(".stt-btn");
scroll_btn.addEventListener("click", () => {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
})