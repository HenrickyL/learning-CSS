import styled from 'styled-components';
export const colors = {
  bg: '#222',

}

export const StyApp =  styled.div`
  background-color: ${colors.bg};
  width: 100vw;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  gap:3rem;
`
