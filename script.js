const zombie = document.getElementById("zombie");

function jump (){
    zombie.classList.add("jump");
    setTimeout(function(){
        zombie.classList.remove("jump")
    }, 400);
}

document.addEventListener("keydown",function(event){
jump()
})