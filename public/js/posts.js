let posts = document.querySelector("#posts")

posts.addEventListener("click", function(event){

   if (event.target.matches("button")){

   let clickedId = event.target.getAttribute("data-id")
   
    console.log(clickedId);
   }

})