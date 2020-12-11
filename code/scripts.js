function toggle(){
    let menu = document.getElementById("side-menu");

    //show or hide menu//
    if (menu.style.display === "none"){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
// toggle menu on click //
document.getElementById("ham-button").addEventListener("click", toggle());


     // hides form //
     function showHideForm() {
        let intake = document.getElementById("intake");

    if (intake.style.display === "block"){
        intake.style.display = "none";
    } else {
        intake.style.display = "block";
    }
   }
    
// hides form on submit button click //
 document.getElementById("submitBtn").addEventListener("click", showHideForm()); 
