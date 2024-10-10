import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { Overlay } from '..';
import {
  Context as LoadingContext,
  Provider as LoadingProvider,
} from './context/LoadingContext';
import { useLoading } from './hooks/useLoading';
import * as S from './Loading.style';

export interface LoadingProps {
  center?: boolean;
  global?: boolean;
}

export const Loading = ({ global, center }: LoadingProps) => {
  const { hasLoadingActive } = useLoading();
  return (
    <S.Container center={center || global}>
      {!global && (
        <S.Dots />
      )}
      {global && hasLoadingActive && (
        <>
          <ThemeConsumer>
            {(theme) => <Overlay visible zIndex={theme?.zIndex.Nm} />}
          </ThemeConsumer>
          <S.Dots />
        </>
      )}
    </S.Container>
  );
};

Loading.Global = (props: LoadingProps) => <Loading {...props} global />;
Loading.Circle = (props: LoadingProps) => <Loading {...props} circle />;

export { LoadingContext, LoadingProvider, useLoading };
