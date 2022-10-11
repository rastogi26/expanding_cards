// we use query selector which can select any thing like h1 , p, class and we use querySelectorAll because 
// there are multiple  class panel
const panels = document.querySelectorAll('.panel')

panels.forEach((panel)=>{
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}