import React from 'react';
import styled from "styled-components";
import {Card} from "./components/Card.styled";
import imgHeader from './images/img1.png'
import {ImageHeader} from "./components/ImageHeader.styled";
import {Description} from "./components/Description.styled";
import {SubmitButton} from "./components/SubmitButton.styled";
import {ButtonsContainer} from "./components/ButtonsContainer.styled";
import {MyTheme} from "./styles/Theme.styled";

function App() {
  return (
    <div className="App">
      <Container>
          <Card>
              <ImageHeader src = {imgHeader}/>
              <Description>
                  <h4>Headline</h4>
                  <span>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</span>
              </Description>
              <ButtonsContainer>
                  <SubmitButton primary >See more</SubmitButton>
                  <SubmitButton >Save</SubmitButton>
              </ButtonsContainer>
          </Card>
          <Card bgc={MyTheme.colors.grey.light}>
              <ImageHeader src = {imgHeader}/>
              <Description>
                  <h4>Headline</h4>
                  <span>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</span>
              </Description>
              <ButtonsContainer>
                  <SubmitButton primary >See more</SubmitButton>
                  <SubmitButton >Save</SubmitButton>
              </ButtonsContainer>
          </Card>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 10px;
`


