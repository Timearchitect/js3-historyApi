'use strict'
let content = document.getElementById('content')
let home = document.getElementById('home')
let contact = document.getElementById('contact')

let lastLocation = localStorage.getItem("route") //senaste sida
window.onload = fetchHtml(lastLocation==null?"home":lastLocation )
localStorage.removeItem("route")
/* window.addEventListener("popstate", (event) => {
    alert(
      `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
    );
  });
 */

window.addEventListener('popstate', (event) => {
    /*     alert(
      `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
    ); */
    switch (event.state.page) {
        case 1:
            fetchHtml('home')
            break
        case 2:
            fetchHtml('contact')
            break
        default:
            fetchHtml('home')
    }
})

home.addEventListener('click', (e) => {
    e.preventDefault
    history.pushState({ page: 1 }, 'home', 'home.html')
    fetchHtml('home')
})
contact.addEventListener('click', (e) => {
    e.preventDefault

    history.pushState({ page: 2 }, 'contact', 'contact.html')
    fetchHtml('contact')
})
function fetchHtml(filename) {
    fetch(`./${filename}.txt`)
        .then((response) => {
            return response.text()
        })
        .then((html) => {
            content.innerHTML = html
        })
}

function name(params = 5) {}
