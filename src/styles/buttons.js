import styled from 'styled-components'
import { Colors } from './constants.js'

const iconButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  border: 0;
  padding: 0;
  background-color: transparent;
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

export const AuthButton = styled(button)`
  width: 133px;
  margin-left: 30px;

  background-color: ${Colors.purple};
`

export const RegButton = styled(button)`
  width: 133px;

  background-color: ${Colors.blue};
`
export const CloseButton = styled(iconButton)`
  top: 20px;
  right: 35px;

  outline: none;

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
