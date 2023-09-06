let posts = document.querySelector(".add-comment-form")

posts.addEventListener("submit", async function (event) {

   event.preventDefault();

   let post_id = event.target.getAttribute("data-id")

   console.log(post_id);

   let body = document.querySelector("#comment-body").value
console.log(body)
   if (post_id && body) {


      const response = await fetch(`/api/comments`, {

         method: "POST",
         body: JSON.stringify({ post_id, body }),
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