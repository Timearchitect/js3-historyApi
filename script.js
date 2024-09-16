'use strict'
let content = document.getElementById('content')
let home = document.getElementById('home')
let contact = document.getElementById('contact')

window.onload = fetchHtml('home')
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

    if (1 + 1 == 2) 
        console.log(1)
    else if (true) 
        console.log(1)
    else if (true) 
        console.log(1)
     else 
        console.log(1)
    
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
