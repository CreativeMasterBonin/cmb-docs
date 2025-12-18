
let coasterElement1 = document.getElementById("coaster1");
let coasterElement2 = document.getElementById("coaster2");
let coasterElement3 = document.getElementById("coaster3");
let coastertest = document.getElementById("coastertest");
let index = 0;

coasterElement1.style.display = "block";
coasterElement2.style.display = "none";
coasterElement3.style.display = "none";
coastertest.style.display = "none";
coastertest.innerHTML = "<i>Some of the items you can expect to find in the mod!</i>";
coastertest.style.display = "block";

function checkIndex() {
    if (index > 2){
        index = 2;
    }
    else if (index < 0){
        index = 0;
    }
    switch (index){
        case 0: {
            coasterElement1.style.display = "block";
            coasterElement2.style.display = "none";
            coasterElement3.style.display = "none";
            coastertest.innerHTML = "<i>Some of the items you can expect to find in the mod!</i>";
            break;
        }
        case 1: {
            coasterElement1.style.display = "none";
            coasterElement2.style.display = "block";
            coasterElement3.style.display = "none";
            coastertest.innerHTML = "<i>The Ultra Sword is the most powerful sword in the mod, with 99999 attack damage!</i>";
            break;
        }
        case 2: {
            coasterElement1.style.display = "none";
            coasterElement2.style.display = "none";
            coasterElement3.style.display = "block";
            coastertest.innerHTML = "<i>Staffs can fire many projectile types, depending on level and enchantments applied to them.</i>";
            break;
        }
    }
}

function leftCoaster() {
    index -= 1;
    checkIndex();
}
function rightCoaster() {
    index += 1;
    checkIndex();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("coasterleft").addEventListener('click', function() {
        leftCoaster()
        //coastertest.innerHTML = index;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("coasterright").addEventListener('click', function() {
        rightCoaster()
        //coastertest.innerHTML = index;
    });
});