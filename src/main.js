import close from '@/assets/img/close.svg'
import rotate from '@/assets/img/rotate.png'

const div = document.createElement('img')
div.classList.add('app')
div.src = rotate
console.log(close)

const body = document.getElementsByTagName('body')[0]
body.style.backgroundColor = '#000000'

body.appendChild(div)

class Test {
  constructor(name) {
    this._name = name
  }

  get name() {
    return this._name
  }

}

const b = new Test('xcr')
console.log(b)
console.log(b.name)
