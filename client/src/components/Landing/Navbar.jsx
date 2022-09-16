import React from 'react'
import styled from 'styled-components'
export const Navbar=()=> {
  return (
    <Container>
    <div>Navbar</div>
    </Container>
  )
}

const Container  = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  `
