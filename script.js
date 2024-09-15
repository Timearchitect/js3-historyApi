

let content=document.getElementById("content")
let home=document.getElementById("home")
let contact=document.getElementById("contact")


window.onload =  fetchHtml("home")
/* window.addEventListener("popstate", (event) => {
    alert(
      `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
    );
  });
 */

  window.onpopstate = function(event) {
    if(event){
        
        alert(window.location.pathname)

      // Code to handle back button or prevent from navigation
    }
    else{
      // Continue user action through link or button
    }
  }



home.addEventListener('click',(e)=>{
    e.preventDefault
    history.pushState({ page: 1 }, "home", "home")
    fetchHtml("home")
})
contact.addEventListener('click',(e)=>{
    e.preventDefault

    history.pushState({ page: 2 }, "contact", "contact")
    fetchHtml("contact")
})
function fetchHtml(filename) { 
    fetch(`./${filename}.html`)
        .then((response) => {
            return response.text()
        })
         .then((html) => {
            content.innerHTML = html
        }) 
}