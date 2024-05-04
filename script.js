function myFunction() {
    // Get the element with the id "navbar"
    var x = document.getElementById("navbar");
    
    // Check if the class name of the element is "navbar"
    if (x.className === "navbar") {
        // If it is, add the class "responsive" to enable responsive behavior
        x.className += " responsive";
    } else {
        // If it's not, remove the class "responsive" to disable responsive behavior
        x.className = "navbar";
    }
}
