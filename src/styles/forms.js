import styled from 'styled-components';
import { Colors, Font } from './constants';

export const FormElement = styled.div`
  display: flex;
  flex-direction: column;

  margin: 25px 0;
`
export const FormLabel = styled.label`
  font-family: ${Font.fontFamily};
  font-size:   ${1.4 * Font.fontSize}px;
  line-height: ${1.4 * Font.lineHeight}px;

  color: ${Font.fontColor};
`
export const FormInput = styled.input`
  border: 1px solid ${Colors.grey};
  border-radius: 4px;
  padding: 5px 10px;

  color: ${Colors.grey};

  ::placeholder {
    color: ${Colors.lightgrey}
  }

  :hover,
  :focus {
    outline: none;
    border-color: ${Colors.blue};
  }
`
