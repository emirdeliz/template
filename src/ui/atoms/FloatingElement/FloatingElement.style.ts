import styled from 'styled-components';
const FloatingElementContainer = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.Lg};
  width: auto;
  height: auto;
`;

export { FloatingElementContainer };
