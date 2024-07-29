//when the user enters the explore button on the//
//homepage,it takes their name.this is the eplore page//
function promptName(){
    let name = prompt("What is your name?");
    let Raw=document.querySelector("#Rawfood");//we are manipulating the DOM in taste the raw goodness of africa.
    Raw.innerHTML=(`Hi👋 Welcome ${name}, Taste the Raw Goodness of Africa.`);
    let browse=document.getElementById("browse");
    browse.innerHTML=(`Welcome ${name}, browse through our products`);
}
let product=document.getElementById("product");
product.addEventListener("mouseenter", promptName);


// //this block is loading more images.
// function loadMore() { //This function executes when the button is dbl clicked
// let showimages = document.getElementById("set"); //select the images that you want to show
// showimages.style.display="block"; //style it to show
// showimages.style.display = "flex";
// load.style.display = "none";
// }

// let load = document.getElementById("load"); //select button you want to add event listener to
// load.addEventListener("dblclick", loadMore); //Add an event listener to the button you have selected above

// // this block is hiding the images
// function loadless(){//adding loadless to this block
// let hideimage=document.getElementById("set");
// hideimage.style.display ="none";
// }
// let hide=document.getElementById("hide");
// hide.addEventListener("dblclick",loadless);


// alerting the external links to African Spice.
function alertlink(){
    alert("https://www.bing.com/search?q=african+spices&FORM=HDRSC1");
    }
    
    let spices=document.querySelector("#Spices");//added a click event to the spice img.
    spices.addEventListener("click", alertlink);
    
    function alertImageChange(){//spice image should decrease when the mouse enter.
    let imagechange=document.getElementById("Spices");
    imagechange.style.width= "101%";
    // imagechange.style.animationDuration="800ms";
    // imagechange.style.height="300px";
    }
    let change=document.getElementById("Spices");
    change.addEventListener("mouseenter", alertImageChange);
    
    function alertImageDecrease(){//spices should go back to it"s origin when clicked
        let decrease=document.getElementById("Spices");
        decrease.style.width="";
        decrease.style.height="";
    }
    let imageDecrease=document.getElementById("Spices");
    imageDecrease.addEventListener("mouseleave", alertImageDecrease);
    
   function load(){
    let see =document.getElementById("more");
    see.style.display="inline";
    see.style.display="flex";
    see.style.display="flex-wrap";
    let hide=document.getElementById("load");
    hide.style.display="none";
   }

    let loadmore=document.getElementById("load");
    loadmore.addEventListener("click",load);

    function hide(){
        let Hide=document.getElementById("more");
        Hide.style.display="none";
        let hide=document.getElementById("load");
        hide.style.display="flex";
       }
    
        let hidemore=document.getElementById("hide");
        hidemore.addEventListener("click",hide);

        function alertImage(){//spice image should decrease when the mouse enter.
            let Imagechange=document.getElementById("Fruits");
            Imagechange.style.width= "101%";
            // imagechange.style.animationDuration="800ms";
            // imagechange.style.height="300px";
            }
            let Change=document.getElementById("Fruits");
            Change.addEventListener("mouseenter", alertImage);
            
            function alertImag(){//spices should go back to it"s origin when clicked
                let Decrease=document.getElementById("Fruits");
                Decrease.style.width="";
            
            }
            let ImageDecrease=document.getElementById("Fruits");
            ImageDecrease.addEventListener("mouseleave", alertImag);


            function alertImageChangeone(){//spice image should decrease when the mouse enter.
                let imagechangeone=document.getElementById("leafy");
                imagechangeone.style.width= "101%";
                // imagechange.style.animationDuration="800ms";
                // imagechange.style.height="300px";
                }
                let changeone=document.getElementById("leafy");
                changeone.addEventListener("mouseenter", alertImageChangeone);
                
                function alertImageDecreaseon(){//spices should go back to it"s origin when clicked
                    let decrease=document.getElementById("leafy");
                    decrease.style.width="";
                    
                }
                let imageDecreaseone=document.getElementById("leafy");
                imageDecreaseone.addEventListener("mouseleave", alertImageDecreaseon);
                
                
                function alertImageChangetwo(){//spice image should decrease when the mouse enter.
                    let imagechangetwo=document.getElementById("legume");
                    imagechangetwo.style.width= "101%";
                    // imagechange.style.animationDuration="800ms";
                    // imagechange.style.height="300px";
                    }
                    let changetwo=document.getElementById("legume");
                    changetwo.addEventListener("mouseenter", alertImageChangetwo);
                    
                    function alertImageDecreasetwo(){//spices should go back to it"s origin when clicked
                        let decreasetwo=document.getElementById("legume");
                        decreasetwo.style.width="";
                        
                    }
                    let imageDecreasetwo=document.getElementById("legume");
                    imageDecreasetwo.addEventListener("mouseleave", alertImageDecreasetwo);
                    

                    function alertImageChangethree(){//spice image should decrease when the mouse enter.
                        let imagechangethree=document.getElementById("veges");
                        imagechangethree.style.width= "101%";
                        // imagechange.style.animationDuration="800ms";
                        // imagechange.style.height="300px";
                        }
                        let changethree=document.getElementById("veges");
                        changethree.addEventListener("mouseenter", alertImageChangethree);
                        
                        function alertImageDecreasethree(){//spices should go back to it"s origin when clicked
                            let decreasethree=document.getElementById("veges");
                            decreasethree.style.width="";
                            
                        }
                        let imageDecreasethree=document.getElementById("veges");
                        imageDecreasethree.addEventListener("mouseleave", alertImageDecreasethree);
                    

                        function alertImageChangefour(){//spice image should decrease when the mouse enter.
                            let imagechangefour=document.getElementById("tuber");
                            imagechangefour.style.width= "101%";
                            // imagechange.style.animationDuration="800ms";
                            // imagechange.style.height="300px";
                            }
                            let changefour=document.getElementById("tuber");
                            changefour.addEventListener("mouseenter", alertImageChangefour);
                            
                            function alertImageDecreasefour(){//spices should go back to it"s origin when clicked
                                let decreasefour=document.getElementById("tuber");
                                decreasefour.style.width="";
                                
                            }
                            let imageDecreasefour=document.getElementById("tuber");
                            imageDecreasefour.addEventListener("mouseleave", alertImageDecreasefour);
                        
                            function alertImageChangefive(){//spice image should decrease when the mouse enter.
                                let imagechangefive=document.getElementById("Barley");
                                imagechangefive.style.width= "101%";
                                // imagechange.style.animationDuration="800ms";
                                // imagechange.style.height="300px";
                                }
                                let changefive=document.getElementById("Barley");
                                changefive.addEventListener("mouseenter", alertImageChangefive);
                                
                                function alertImageDecreasefive(){//spices should go back to it"s origin when clicked
                                    let decreasefive=document.getElementById("Barley");
                                    decreasefive.style.width="";
                                    
                                }
                                let imageDecreasefive=document.getElementById("Barley");
                                imageDecreasefive.addEventListener("mouseleave", alertImageDecreasefive);
                            

                                function alertImageChangesix(){//spice image should decrease when the mouse enter.
                                    let imagechangesix=document.getElementById("Maize");
                                    imagechangesix.style.width= "101%";
                                    // imagechange.style.animationDuration="800ms";
                                    // imagechange.style.height="300px";
                                    }
                                    let changesix=document.getElementById("Maize");
                                    changesix.addEventListener("mouseenter", alertImageChangesix);
                                    
                                    function alertImageDecreasesix(){//spices should go back to it"s origin when clicked
                                        let decreasesix=document.getElementById("Maize");
                                        decreasesix.style.width="";
                                        
                                    }
                                    let imageDecreasesix=document.getElementById("Maize");
                                    imageDecreasesix.addEventListener("mouseleave", alertImageDecreasesix);
                                

                                    function alertImageChangeseven(){//spice image should decrease when the mouse enter.
                                        let imagechangeseven=document.getElementById("wheat");
                                        imagechangeseven.style.width= "101%";
                                        // imagechange.style.animationDuration="800ms";
                                        // imagechange.style.height="300px";
                                        }
                                        let changeseven=document.getElementById("wheat");
                                        changeseven.addEventListener("mouseenter", alertImageChangeseven);
                                        
                                        function alertImageDecreaseseven(){//spices should go back to it"s origin when clicked
                                            let decreaseseven=document.getElementById("wheat");
                                            decreaseseven.style.width="";
                                            
                                        }
                                        let imageDecreaseseven=document.getElementById("wheat");
                                        imageDecreaseseven.addEventListener("mouseleave", alertImageDecreaseseven);
                                    