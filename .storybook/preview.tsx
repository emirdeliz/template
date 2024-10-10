import React, { ReactNode } from 'react';
import {
  Colors,
  Display,
  FontSize,
  FontWeight,
  LineHeight,
  Margin,
  Opacity,
  Padding,
  Radius,
  Shadow,
  ZIndex,
} from '../src/ui/system/theme';
import { ToastProvider, Toast } from '../src/ui/molecules';
import { LoadingProvider, Loading } from '../src/ui/atoms';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/pages/global.style.ts';
import '../src/assets/fontello/css/fontello.css';
import '../src/pages/_app.css';

export const decorators = [
  (Story: () => ReactNode) => (
    <ThemeProvider
      theme={{
        colors: Colors,
        display: Display,
        fontSize: FontSize,
        fontWeight: FontWeight,
        lineHeight: LineHeight,
        margin: Margin,
        opacity: Opacity,
        padding: Padding,
        radius: Radius,
        shadow: Shadow,
        zIndex: ZIndex,
      }}
    >
      <LoadingProvider>
        <ToastProvider>
          <Story />
          <GlobalStyles />
          <Toast />
          <Loading.Global />
        </ToastProvider>
      </LoadingProvider>
    </ThemeProvider>
  ),
];