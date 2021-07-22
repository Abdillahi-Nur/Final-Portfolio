// modal

// // get the modal element
// const modal = document.querySelectorAll(".modal");

// //get open modal button

// const modalBtn = document.querySelectorAll(".portfolio-image-container");

// //get close btn 

// const closeBtn = document.getElementsByClassName("closeBtn");

// let i = 0;

// //listen for open click 

// modalBtn[0].addEventListener("click", function(){
//     modal[0].style.display = "block";
// });
// modalBtn[1].addEventListener("click", function(){
//     modal[1].style.display = "block";
// });

// //listen for close click 

// closeBtn[0].addEventListener("click", function(){
//     modal[0].style.display = "none";
// });

// closeBtn[1].addEventListener("click", function(){
//     modal[1].style.display = "none";
// });

// //listen for outside click
// window.addEventListener("click", function(e){
//     if(e.target == modal[0]){
//         modal[0].style.display = "none";
//     }
// });

// window.addEventListener("click", function(e){
//     if(e.target == modal[1]){
//         modal[1].style.display = "none";
//     }
// });



// Get the button that opens the modal
const btn = document.querySelectorAll(".overlay-text");

// All page modals
const modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
const spans = document.getElementsByClassName("close");


// Get the 2nd close element that closes the modal
const secondCloseBtn = document.getElementsByClassName("modal-second-closebtn");

// When the user clicks the button, open the modal
for (let i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (let i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (let index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks on <span> (x), close the modal
for (let i = 0; i < secondCloseBtn.length; i++) {
   secondCloseBtn[i].onclick = function() {
      for (let index in modals) {
        if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
      }
   }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (let index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}