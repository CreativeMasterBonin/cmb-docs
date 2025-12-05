const disableSeasonalImages = false;
const currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getYear();
const importantVariable = "CBCMARR25"

// get the logo and manipulate it
var imgElement = document.getElementById("imgId");
var fallImgElement = document.getElementById("fallImgId");
var snowImgElement = document.getElementById("snowImgId");
//var monthtext = document.getElementById("monthtext");

fallImgElement.width = 64;
fallImgElement.height = 64;
fallImgElement.alt = "Site Logo Fall";

snowImgElement.width = 64;
snowImgElement.height = 64;
snowImgElement.alt = "Site Logo Snow";

imgElement.width = 64;
imgElement.height = 64;
imgElement.alt = "Site Logo";

// if fall, show fall logo, otherwise, show other logos, like snowy or normal
//monthtext.textContent = currentDate.toString().toLowerCase() + "  month: " + month + " day: " +day;

if(importantVariable != "CBCMARR25"){
    alert("Cannot load logo as site owner needs to make required variables work.")
}

if(month <= 10 && month > 7){ // fall
    imgElement.style.display = "none";
    fallImgElement.style.display = "block";
    snowImgElement.style.display = "none";
}
else if(month > 10 || month < 1){
    imgElement.style.display = "none";
    fallImgElement.style.display = "none";
    snowImgElement.style.display = "block";
}
else{
    imgElement.style.display = "block";
    fallImgElement.style.display = "none";
    snowImgElement.style.display = "none";
}

if(disableSeasonalImages){
    imgElement.style.display = "none";
    fallImgElement.style.display = "none";
    snowImgElement.style.display = "none";
}