import styled, { keyframes } from 'styled-components'

export const Fade = keyframes`
from {
  display: none;
  left: -1000px;
 }

 to {
   display: flex;
   left: 0px;
 }
`
export const fadeOutLeft = keyframes`
  from {
    display: none;
    left: -1000px;
   }

   to {
     display: flex;
     left: 0px;
   }
`

export const fadeInLeft = keyframes`
  from {
    display: flex;
    left: 0px;
  }

  to {
    display: none;
    left: -1000px;
   }
`

export const Animation = styled.div`
  width: 30px;
  height: 30px;
  background-color: red;
  animation: ${props => props.animation} ${props => props.delay} linear;
`
