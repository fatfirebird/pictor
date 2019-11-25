import styled from 'styled-components'
import { Colors } from '../styles/index.js'

export const ColumnFlex = styled.div`
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

  @media (min-width: 1024px) {
    padding: 0 35px;
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
  grid-template: 400px calc(100vh - 400px) / 100vw;
  grid-gap: 0;

  @media (min-width: 768px) {
    grid-template: 550px calc(100vh - 550px) / 100vw;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(5, 20vh);
    grid-template-areas:
      'pic pic pic pic pic pic pic pic'
      'pic pic pic pic pic pic pic pic'
      'pic pic pic pic pic pic pic pic'
      'ed ed ed ed ed ed ed ed'
      'ed ed ed ed ed ed ed ed'
  }
`

export const Side = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
`
