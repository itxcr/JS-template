import close from '@/assets/img/close.svg'
import rotate from '@/assets/img/rotate.png'

const div = document.createElement('img')
div.classList.add('app')
div.src = rotate

const body = document.getElementsByTagName('body')[0]
body.style.backgroundColor = '#000000'

body.appendChild(div)
