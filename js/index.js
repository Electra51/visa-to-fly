const countriesBtn = document.getElementById("countriesBtn");
const coursesBtn = document.getElementById("coursesBtn");
const countriesContent = document.getElementById("countriesContent");
const coursesContent = document.getElementById("coursesContent");

countriesBtn.addEventListener("click", () => {
  countriesContent.classList.add("active");
  coursesContent.classList.remove("active");
  countriesBtn.className = "study_btn";
  coursesBtn.className = "study_btn2";
});

coursesBtn.addEventListener("click", () => {
  countriesContent.classList.remove("active");
  coursesContent.classList.add("active");
  coursesBtn.className = "study_btn";
  countriesBtn.className = "study_btn2";
});
