import './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import DemoReactComponent from './DemoReactComponent'

const arrowFunc = (text) => text.toUpperCase();

console.log(arrowFunc('parcel works'))

document.getElementsByTagName('h1')[0].textContent = arrowFunc('yep')

ReactDOM.render(<DemoReactComponent />, document.getElementById('root'))
