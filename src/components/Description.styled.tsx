import styled from "styled-components";
import {MyTheme} from "../styles/Theme.styled";


export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 10px;
    h4{
      font-size: 16px;
      color: ${MyTheme.colors.black.primary};
    }
  span{
    font-size: 12px;
    color: ${MyTheme.colors.grey.primary};
  }

`
