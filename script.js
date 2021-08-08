function vis() {
  document.querySelector('.sidebar').style.width = "25%";
  // document.querySelectorAll(".body").style.width = "75%";
  document.querySelector('.ans').style.width = "0";


  // document.querySelector('.sidebar').style.overflow = "hidden";

  // document.getElementsByClassName('.body').style.marginRight = "0";
}
function closebar() {
  document.querySelector('.sidebar').style.width = "0";
  // document.querySelectorAll(".body").style.width = "100%";
  // document.querySelector(".ans").style.right= "0%";
  document.querySelector('.ans').style.width = "50px";

}


// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector(".ans").onclick = hide;
//
// });
