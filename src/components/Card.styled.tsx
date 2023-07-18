import styled from 'styled-components'
import { MyTheme } from '../styles/Theme.styled'

type CardStyledPropsType = {
  bgc?: string
}

export const Card = styled.div<CardStyledPropsType>`
  width: 300px;
  height: 350px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${props => props.bgc || MyTheme.colors.white.primary};
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
`
