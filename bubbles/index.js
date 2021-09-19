window.addEventListener('load',()=>{
    setInterval(createBubble,80)
})








function createBubble(){
    const section  = document.querySelector('section')
    const bubble = document.createElement('span')
    var size = Math.random()*60;

    bubble.classList.add('upper')
    bubble.classList.add('pulse')

    bubble.style.width = 20+size+'px';
    bubble.style.height = 20+size+'px';
    bubble.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(bubble)
    
    setTimeout(()=>{
        bubble.remove()
    },4000)
}