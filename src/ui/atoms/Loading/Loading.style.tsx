import { centerAbsolute } from '@theme';
import styled, { keyframes } from 'styled-components';

interface ContainerProps {
  center?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.Nm};
  ${({ center }) => (center ? centerAbsolute : '')};
`;

const animationFrame = keyframes`
  0%,
  5% { background-position: calc(0 * 100% / 3) 50%, calc(1*100%/ 3) 50%, calc(2 * 100% / 3) 50%, calc(3*100%/ 3) 50% }
  12.5% { background-position: calc(0 * 100% / 3) 0, calc(1*100%/ 3) 50%, calc(2 * 100% / 3) 50%, calc(3*100%/ 3) 50% }
  25% { background-position: calc(0 * 100% / 3) 0, calc(1*100%/ 3) 0, calc(2 * 100% / 3) 50%, calc(3*100%/ 3) 50% }
  37.5% { background-position: calc(0 * 100% / 3) 100%, calc(1*100%/ 3) 0, calc(2 * 100% / 3) 0, calc(3*100%/ 3) 50% }
  50% { background-position: calc(0 * 100% / 3) 100%, calc(1*100%/ 3) 100%, calc(2 * 100% / 3) 0, calc(3*100%/ 3) 0   }
  62.5% { background-position: calc(0 * 100% / 3) 50% , calc(1*100%/ 3) 100%, calc(2 * 100% / 3) 100%, calc(3*100%/ 3) 0   }
  75% { background-position: calc(0 * 100% / 3) 50% , calc(1*100%/ 3) 50% , calc(2 * 100% / 3) 100%, calc(3*100%/ 3) 100%}
  87.5% { background-position: calc(0 * 100% / 3) 50% , calc(1*100%/ 3) 50% , calc(2 * 100% / 3) 50%, calc(3*100%/ 3) 100%}
  95%,
  100% { background-position: calc(0 * 100% / 3) 50% , calc(1*100%/ 3) 50% , calc(2 * 100% / 3) 50%, calc(3*100%/ 3) 50% }
`;

export const Dots = styled.div`
  height: 30px;
  aspect-ratio: 2.5;
  --_g: no-repeat radial-gradient(farthest-side, ${({ theme }) => theme.colors.P1} 90%, #0000);
  background: var(--_g), var(--_g), var(--_g), var(--_g);
  background-size: 20% 50%;
  animation: ${animationFrame} 1s infinite linear alternate;
`;