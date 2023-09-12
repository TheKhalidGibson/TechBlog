let editPost = document.querySelector(".add-comment-form")

let descriptionEl = document.querySelector("#description");
let titleEl = document.querySelector("#title");

editPost.addEventListener("submit", async function (event) {

   event.preventDefault();

   let id = event.target.getAttribute("data-id")

   console.log(id);

   let description = descriptionEl.value
   let title = titleEl.value
console.log(body)
   if (id && title && description) {


      const response = await fetch(`/api/posts/`+ id, {

         method: "PUT",
         body: JSON.stringify({ id, description, title }),
         headers: {
           'Content-Type': 'application/json',
         },

      });

      await response.json();
      console.log(response.status)
      if (response.status === 200) {

         window.location.reload();

      } else {

         console.log("an error occurred!")

      }


   }

})