import styled from 'styled-components';
import { buildMargin, buildPadding } from '@theme';
import { Col } from '../Col/Col.style';
import { RowProps } from './Row';

export const Row = styled.div<RowProps>`
  width: 100%;
  display: flex;
  
  ${buildMargin()}
  ${buildPadding()}

  ${Col} {
    padding-right: ${({ theme }) => theme.padding.Sm};
    padding-left: ${({ theme }) => theme.padding.Sm};

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }
`;
