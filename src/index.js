import imgUrl from './img/img01.jpg'
import './index.css'

const body = document.body
const img = document.createElement('img')
img.classList.add('img')
img.src = imgUrl
body.appendChild(img)