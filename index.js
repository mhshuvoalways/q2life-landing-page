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
  successMsg.setAttribute("class", "success");
});

jobSeekerBtn[0].addEventListener("click", function () {
  contactFormJobSeeker.setAttribute("class", "contact-form-jobseekers");
  contactFormRight.setAttribute("class", "contact-form-right-display");
  contactFormEmploy.setAttribute("class", "form-employer");
  successMsg.setAttribute("class", "success");
});

submitEmployerBtn.addEventListener("click", function () {
  setTimeout(function () {
    successMsg.setAttribute("class", "success-display");
    contactFormJobSeeker.setAttribute("class", "form-jobseekers");
    contactFormEmploy.setAttribute("class", "form-employer");
  }, 200);
});

submitSeekerBtn.addEventListener("click", function () {
  setTimeout(function () {
    successMsg.setAttribute("class", "success-display");
    contactFormJobSeeker.setAttribute("class", "form-jobseekers");
    contactFormEmploy.setAttribute("class", "form-employer");
  }, 200);
});
