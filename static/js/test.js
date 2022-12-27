// Menu
function closeMenu() {
    document.getElementById("sidebar").style.width = "0";
}

function openMenu() {
    document.getElementById("sidebar").style.width = "225px";
}

// Dropdown menu
function dropdown() {
    document.getElementById("usr-menu").style.visibility = "visible";
}

// Favorite restauran
function favRestaurant() {
    document.getElementById("unfilled-heart").style.visibility = "hidden";
    document.getElementById("filled-heart").style.visibility = "visible";
}

function unfavRestaurant() {
    document.getElementById("filled-heart").style.visibility = "hidden";
    document.getElementById("unfilled-heart").style.visibility = "visible";
}

// Orders
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

// Account section
function openInfo() {
    document.getElementById("userInfo").style.display = "block";
    document.getElementById("userPayment").style.display = "none";
    document.getElementById("userSecurity").style.display = "none";
    document.getElementById("accInfo").style.borderLeft = "5px solid #FF4800";
    document.getElementById("accPay").style.borderLeft = "none";
    document.getElementById("accSec").style.borderLeft = "none";
}

function openPayment() {
    document.getElementById("userPayment").style.display = "block";
    document.getElementById("userInfo").style.display = "none";
    document.getElementById("userSecurity").style.display = "none";
    document.getElementById("accPay").style.borderLeft = "5px solid #FF4800";
    document.getElementById("accInfo").style.borderLeft = "none";
    document.getElementById("accSec").style.borderLeft = "none";
}

function openSecurity() {
    document.getElementById("userSecurity").style.display = "block";
    document.getElementById("userInfo").style.display = "none";
    document.getElementById("userPayment").style.display = "none";
    document.getElementById("accSec").style.borderLeft = "5px solid #FF4800";
    document.getElementById("accInfo").style.borderLeft = "none";
    document.getElementById("accPay").style.borderLeft = "none";
}