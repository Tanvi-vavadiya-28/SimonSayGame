let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("div was clciked");
});

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul was clciked");
});

for(li of lis){
    li.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("uls was clciked");
    });
}

