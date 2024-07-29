function change(){
    let more=document.getElementById("text");
    more.style.display="inline";
    let show=document.getElementById("read");
    show.style.display="none";
}




let read=document.getElementById("read");
read.addEventListener("click",change);