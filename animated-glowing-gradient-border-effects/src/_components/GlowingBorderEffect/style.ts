import styled, { keyframes } from "styled-components";


const rotating = keyframes`
  0% {
    --angle: 0deg; /* Define o ângulo inicial */
  }
  100% {
    --angle: 360deg; /* Define o ângulo final */
  }
`;

interface GlowingBorderEffectStyProp{
    yPos?: number
    xPos?: number
    width?: number
    height?: number
}

export const GlowingBorderEffectSty = styled.div<GlowingBorderEffectStyProp>`
    position: relative;
    width: ${prop=> prop.width ? `${prop.width - (prop.width/2)}px`: '100%'};
    height: ${prop=> prop.height ? `${prop.height - (prop.height/2)}px`: '100%'};
    inset:  ${prop=> `${prop.yPos || 0}px`} ${prop=> `${prop.xPos || 0}px`};

    
    &::before, &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    animation: ${rotating} 4s linear infinite;
  }

  &::before {
    background: repeating-conic-gradient(from var(--angle), #0f0, #ff0, #0ff, #f0f, #0ff);
  }

  &::after {
    background: repeating-conic-gradient(from var(--angle), #0f0, #ff0, #0ff, #f0f, #0ff);
    filter: blur(40px);
    opacity: 0.75;
  }

`

