import styled from 'styled-components'
import { Colors } from '../styles/index.js'
import arrow from '../content/arrow.svg'

const iconButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  border: 0;
  padding: 0;

  background-color: transparent;
  outline: none;
`

const button = styled.button`
  display: inline-block;

  padding: 12px 10px;
  border: 0px;
  border-radius: 4px;

  max-width: 130px;
  max-height: 53px;

  color: #fff;
  font-family: Roboto
  font-size: 14px;
`

export const Button = styled(button)`
  min-width: 133px;

  background-color: ${props => props.type === 'login' ? Colors.purple : Colors.blue};
`

export const CloseButton = styled(iconButton)`
  top: 20px;
  right: 35px;

  &:after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;

    width: 30px;
    height: 3px;

    background-color: ${Colors.blue};
    transform: rotate(45deg);
    border-radius: 4px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;

    width: 30px;
    height: 3px;

    background-color: ${Colors.blue};
    transform: rotate(-45deg);
    border-radius: 4px;
  }

  :hover:after,
  :hover:before,
  :focus:after,
  :focus:before {
    background: ${Colors.purple};
  }
`
export const ArrowButton = styled(iconButton)`
  top: 30px;
  right: 20px;

  width: 35px;
  height: 35px;

  background: url(${arrow}) no-repeat;
  transform: rotate(180deg);
`

const circle = styled(iconButton)`
  top: 30px;
  left: 20px;

  width: 35px;
  height: 35px;

  background-color: ${Colors.blue};
  border-radius: 50%;
  opacity: 0.5;
  transition: 0.4s;

  &:hover,
  &:focus {
    opacity: 1;
  }
`

export const BurgerButton = styled(circle)`
  &::before {
    content: '';

    position: absolute;
    top: 8.5px;
    left: 6.5px;

    width: 22px;
    height 17px;

    background-image: linear-gradient(
      0deg,
      transparent 0,
      transparent 10%,
      #fff 10%,
      #fff 28%,
      transparent 28%,
      transparent 40%,
      #fff 40%,
      #fff 58%,
      transparent 58%,
      transparent 70%,
      #fff 70%,
      #fff 88%,
      transparent 88%,
      transparent 100%
    )
  }
`
export const DottedButton = styled(circle)`
  
`
