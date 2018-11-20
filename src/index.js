import './style.scss'

const arrowFunc = (text) => text.toUpperCase();

console.log(arrowFunc('parcel works'))

document.getElementsByTagName('h1')[0].textContent = arrowFunc('yep')
