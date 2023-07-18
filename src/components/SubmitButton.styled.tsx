import styled , {css} from "styled-components";
import {MyTheme} from "../styles/Theme.styled";

type SubmitButtonStyledPropsType = {
    primary?:boolean
}

export const SubmitButton = styled.button<SubmitButtonStyledPropsType>`
    width: 86px;
  height: 30px;
  text-align: center;
  border-radius:5px;
  font-weight: 600;
  border: 2px solid ${MyTheme.colors.blue.primary};
  background-color: ${ MyTheme.colors.white.primary};
  color: ${MyTheme.colors.blue.primary};
  
  ${props=>props.primary && css<SubmitButtonStyledPropsType>`
    background-color: ${MyTheme.colors.blue.primary};
    color: ${MyTheme.colors.white.primary};
  `}
  
  &:hover{
    cursor: pointer;
  }
`
