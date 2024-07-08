// when the user enters the explore button on the
// homepage,it takes their name.this is the eplore page
function promptName(){
    let name = prompt("What is your name?");
    let Raw=document.querySelector("#Rawfood");//we are manipulating the DOM in taste the raw goodness of africa.
    Raw.innerHTML=(`Hi👋 Welcome ${name}, Taste the Raw Goodness of Africa.`)
}
let product=document.getElementById("product");
product.addEventListener("mouseenter", promptName);

// alerting the links
function alertlink(){
alert("https://www.bing.com/search?q=african+spices&FORM=HDRSC1");
}

let spices=document.querySelector("#Spices");//added a click event to the spice img.
spices.addEventListener("click", alertlink);

//this block is loading more images.
function loadMore() { //This function executes when the button is dbl clicked
let showimages = document.getElementById("set"); //select the images that you want to show
showimages.style.display="block"; //style it to show
showimages.style.display = "flex";
load.style.display = "none";
}

let load = document.getElementById("load"); //select button you want to add event listener to
load.addEventListener("dblclick", loadMore); //Add an event listener to the button you have selected above