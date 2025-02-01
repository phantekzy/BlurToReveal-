const spoilers = document.querySelectorAll('.spoiler')
    function revealSpoilers(){
        spoilers.forEach(spoiler => spoiler.classList.remove('spoiler'))
    }
        spoilers.forEach(spoiler => spoiler.addEventListener('click',revealSpoilers))