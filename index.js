import React from 'react'
import {render} from 'react-dom'
import ProvidedApp from './ProvidedApp'

const root  = document.querySelector('#root')

if (root){
  render(<ProvidedApp></ProvidedApp>,root)
}
