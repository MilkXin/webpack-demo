const sum = (a, b) => {
    return a + b
}

const result = sum(10, 30)
console.log(result)

import url from './img/img01.jpg'
const body = document.body
const img = document.createElement('img')
img.src = url
body.appendChild(img)