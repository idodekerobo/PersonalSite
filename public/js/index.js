function toggleCheckBox() {
    // on click of any of the hidden nav links
    var navLinks = document.getElementsByClassName("hidden-nav-links");

    for (i=0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function() {
            // change the input checkboxed to unchecked
            var toggler = document.getElementById('toggler');
            toggler.checked = false;
        });
    }
}
toggleCheckBox();