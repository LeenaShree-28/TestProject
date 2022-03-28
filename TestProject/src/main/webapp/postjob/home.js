function displayPostJobForm(){
  location.href="postjob.html";
}
document.getElementsByClassName("buttons")[0].addEventListener("click", displayPostJobForm);

function displayPostedJob(){
  location.href="viewpostedjob.html";
}
document.getElementsByClassName("buttons")[1].addEventListener("click", displayPostedJob);
