import React from 'react';
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
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/pages/global.style.ts';

export const decorators = [
  // withThemeFromJSXProvider({
  //   themes: {
  //     default: {
  //       colors: Colors,
  //       display: Display,
  //       fontSize: FontSize,
  //       fontWeight: FontWeight,
  //       lineHeight: LineHeight,
  //       margin: Margin,
  //       opacity: Opacity,
  //       padding: Padding,
  //       radius: Radius,
  //       shadow: Shadow,
  //       zIndex: ZIndex,
  //     }
  //   },
  //   defaultTheme: 'default',
  //   Provider: ThemeProvider,
  //   GlobalStyles,
  // })

  (Story) => (
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
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];