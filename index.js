let employBtn = document.getElementsByClassName("contact-employer");
let jobSeekerBtn = document.getElementsByClassName("contact-job-seeker");
let contactFormEmploy = document.getElementById("form-employer");
let contactFormJobSeeker = document.getElementById("form-jobseekers");
let submitEmployerBtn = document.getElementById("submit-btn-employer");
let submitSeekerBtn = document.getElementById("submit-btn-seeker");
let successMsg = document.getElementById("success");
let contactFormRight = document.getElementById("contact-form-right");

employBtn[0].addEventListener("click", function () {
  contactFormEmploy.setAttribute("class", "contact-form-employer");
  contactFormRight.setAttribute("class", "contact-form-right-display");
  contactFormJobSeeker.setAttribute("class", "form-jobseekers");
});

jobSeekerBtn[0].addEventListener("click", function () {
  contactFormJobSeeker.setAttribute("class", "contact-form-jobseekers");
  contactFormRight.setAttribute("class", "contact-form-right-display");
  contactFormEmploy.setAttribute("class", "form-employer");
});

submitEmployerBtn.addEventListener("click", function () {
  successMsg.setAttribute("class", "success-display");
});

submitSeekerBtn.addEventListener("click", function () {
  successMsg.setAttribute("class", "success-display");
});
