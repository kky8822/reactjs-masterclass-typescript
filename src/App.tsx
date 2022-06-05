import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
  `;
  const H1 = styled.h1`
    color: ${(props) => props.theme.textColor};
  `;
  const Btn = styled.button`
    background-color: ${(props) => props.theme.btnColor};
    color: ${(props) => props.theme.textColor};
  `;

  return (
    <div>
      <Container>
        <H1>Hi</H1>
        <Btn>Click</Btn>
      </Container>
    </div>
  );
}

export default App;
