const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const start = document.querySelector('.start')



const startGame = () => {
  pipe.classList.add('pipe-animation')
  start.style.display = 'none'

 
}


const jump = () => {
  mario.classList.add('jump')

  setTimeout(() => {
    mario.classList.remove('jump')
  }, 800)
}

const loop = () => {
  setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = window
      .getComputedStyle(mario)
      .bottom.replace('px', ' ')

      if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
  
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
      
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
      
        mario.src = "img/POKERRO.png";
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
      
      
        clearInterval(loop);
    }
  }, 10)
}

loop()

document.addEventListener('keypress', e => {
  const tecla = e.key
  if (tecla === ' ') {
    jump()
  }
})

document.addEventListener('keypress', e => {
  const tecla = e.key
  if (tecla === 'Enter') {
    startGame()
  }
})