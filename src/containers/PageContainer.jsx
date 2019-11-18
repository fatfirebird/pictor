import styled from 'styled-components'
import { Colors } from '../styles/index.js'

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Container1 = styled(ColumnFlex)`
  padding: 0 15px;

  background-color: #fff;

  @media (min-width: 768px) {
    padding: 0 25px;
  }


`
export const AuthContainer = styled(ColumnFlex)`
  position: relative

  justify-content: space-around;

  width: 340px;
  min-height: 159px;

  border: 2px solid ${Colors.lightgrey};
  border-radius: 4px;
  margin: 50px 0;
`
export const MainContainer = styled.div`
  display: grid;
  grid-template: 4fr 1fr / 1fr; 
  grid-gap: 0;
`
