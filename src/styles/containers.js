import styled from 'styled-components'
import { Colors } from './constants.js'

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainContainer = styled(ColumnFlex)`
  padding: 0 15px;

  background-color: #fff;
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
