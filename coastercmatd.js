// Dynamic Coaster Image Display (c) 2026 CreativeMasterBonin
let coastertest = document.getElementById("coastertest");
let index = 0;

var coasterElements = [];
const num_of_elements = 5;
const prefix = "coaster"

for (var i = 0; i < num_of_elements; i++){
    var name = "coasterElement" + i
    coasterElements.push(
    prefix.toString = {id:name,name: document.getElementById(prefix + i)}
    );
    //console.log(coasterElements[i]);
}

for (var f = 0; f < num_of_elements; f++){
    var name = "coasterElement" + f
    console.log(name);
    coasterElements[f].name.style.display = "none";
    //console.log(coasterElements[f].name);
}

coastertest.style.display = "none";
coastertest.innerHTML = "<i>Food Reactors generate power from food, given some ingredients of course.</i>";
coastertest.style.display = "block";
coasterElements[0].name.style.display = "block"; // always display the first image

// checks all coaster elements and updates them (if they exist)
function checkAllCoasterElements(id){
    for(var ele = 0; ele < num_of_elements; ele++){
        if(coasterElements[ele] != null){
            if(id != ele){
                coasterElements[ele].name.style.display = "none";
            }
            else{
                coasterElements[ele].name.style.display = "block";
            }
        }
    }
}

// shows different descriptions for all indices, but same logic only requires the index to figure out the image to display
function checkIndex() {
    if (index > num_of_elements - 1){
        index = num_of_elements - 1;
    }
    else if (index < 0){
        index = 0;
    }
    checkAllCoasterElements(index); // only a number required, infinitely expandable
    switch (index){
        case 0: {
            coastertest.innerHTML = "<i>Food Reactors generate power from food, given some ingredients of course.</i>";
            break;
        }
        case 1: {
            coastertest.innerHTML = "<i>Lightning Gens can handle one bolt per several minutes of cooldown time.</i>";
            break;
        }
        case 2: {
            coastertest.innerHTML = "<i>Mod compat has been added so all machines and power gen can be connected.</i>";
            break;
        }
        case 3: {
            coastertest.innerHTML = "<i>Heat Generators require one heat source out of three tiers.</i>";
            break;
        }
        case 4: {
            coastertest.innerHTML = "<i>Food Reactor Multiblock Structure Size</i>";
            break;
        }
        default: {
            coastertest.innerHTML = "<i>No images to use for coaster, please check your image count.</i>";
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

function cool(){
    alert("Your too cool for finding this! :)");
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