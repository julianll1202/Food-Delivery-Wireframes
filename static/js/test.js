function closeMenu() {
    document.getElementById("sidebar").style.width = "0";
}

function openMenu() {
    document.getElementById("sidebar").style.width = "225px";
}

function dropdown() {
    document.getElementById("usr-menu").style.visibility = "visible";
}

function favRestaurant() {
    document.getElementById("unfilled-heart").style.visibility = "hidden";
    document.getElementById("filled-heart").style.visibility = "visible";
}

function unfavRestaurant() {
    document.getElementById("filled-heart").style.visibility = "hidden";
    document.getElementById("unfilled-heart").style.visibility = "visible";
}