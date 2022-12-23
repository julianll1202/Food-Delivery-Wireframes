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

function openOrder() {
    document.getElementById("order-mini").style.visibility = "hidden";
    document.getElementById("order-ext").style.visibility = "visible";
    document.getElementById("order-mini-2").style.marginTop = "120px";
}

function collapseOrder() {
    document.getElementById("order-ext").style.visibility = "hidden";
    document.getElementById("order-mini").style.visibility = "visible";
    document.getElementById("order-mini-2").style.marginTop = "10px";
}