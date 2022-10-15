const anchors = document.getElementsByClassName('internal-link');
const mains = document.getElementsByTagName('main');

var active_main = document.getElementById(window.location.hash.split('#').pop() || 'home');

for (const main of mains) {
    if (main == active_main) {
        main.classList.add('active')
    }
    else (
        main.classList.remove('active')
    )
}

for (const anchor of anchors) {    
    anchor.addEventListener('click', (event) => {
        active_main = document.getElementById(event.target.href.split('#').pop())
        
        for (const main of mains) {
            if (main == active_main) {
                main.classList.add('active')
            }
            else (
                main.classList.remove('active')
            )
        }
    })
}